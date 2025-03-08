const fs = require('fs-extra');
const Handlebars = require('handlebars');
const path = require('path');

async function generateHTML() {
    // Load and compile the template from index.html
    const templatePath = path.join(__dirname, 'index.html');
    const source = await fs.readFile(templatePath, 'utf8');
    const template = Handlebars.compile(source);

    // Load game data JSON
    let gameData = await fs.readJson(path.join(__dirname, 'game_data.json'));

    // Sort games by date descending
    gameData.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Add image src based on game name
    gameData.forEach(game => {
        game.img = `img/${game.gameName.replace(/\s+/g, '-').toLowerCase()}.png`;
    });

    // Organize games by category
    const categorizedGames = {
        released: gameData.filter(game => game.released && typeof game.jam === 'undefined'),
        inProgress: gameData.filter(game => !game.released && typeof game.jam === 'undefined'),
        jams: gameData.filter(game => game.released && typeof game.jam !== 'undefined')
    };

    // Generate final HTML
    const html = template({ games: categorizedGames });

    // Ensure the dist folder exists
    await fs.ensureDir(path.join(__dirname, 'dist'));

    // Write the generated index.html to the dist folder
    await fs.writeFile(path.join(__dirname, 'dist/index.html'), html);
    console.log('index.html generated successfully!');

    // Copy privacy.html, support.html, and robots.txt to the dist folder
    const filesToCopy = ['privacy.html', 'support.html', 'robots.txt'];

    for (const file of filesToCopy) {
        const srcPath = path.join(__dirname, file);
        const destPath = path.join(__dirname, 'dist', file);

        if (await fs.pathExists(srcPath)) {
            await fs.copy(srcPath, destPath);
            console.log(`${file} copied successfully!`);
        } else {
            console.warn(`Warning: ${file} not found, skipping.`);
        }
    }
}

// Run the build script
generateHTML().catch(console.error);
