# fufroom.art

## About

Welcome to the source repository for [fufroom.art](http://fufroom.art), the personal website of Alex Bezuska, also known as fufroom. As a solo game developer based in Louisville, Kentucky.



## How the website works

To clone this repository and get started with setting up your own version, ensure you have Git installed on your machine. Then, run:

```
git clone <repository-url>
cd <repository-directory>
```

## Setup

After cloning the repository, navigate to the project directory and run:

```
npm init -y
```


This command creates a `package.json` file with default values, which is essential for managing project dependencies and scripts.

### Building the Site

The site uses a Node.js script, `build.js`, to compile the `index.html` template. This script dynamically inserts the game information from a JSON file into the template and outputs the final HTML into the `dist/` directory. To build the site, run:

```
node build.js
```


## See a bug or typo?

Please send me an email at hello@fufroom.art or submit a pull request.

## Follow Me

Stay updated on my latest projects and thoughts on game development:

- Mastodon: [https://mastodon.gamedev.place/@fufroom](https://mastodon.gamedev.place/@fufroom)
- Twitter: [@fufroom](https://twitter.com/fufroom)



Thank you for visiting!