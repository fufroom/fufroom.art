#!/bin/bash

# Load environment variables from .env file
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
else
    echo "Error: .env file not found!"
    exit 1
fi

# Ensure required variables are set
if [[ -z "$USERNAME" || -z "$SERVER" || -z "$REMOTE_DIR" ]]; then
    echo "Error: Missing required variables in .env file!"
    exit 1
fi

# Run rsync to upload files
rsync -avz --progress dist/ "$USERNAME@$SERVER:$REMOTE_DIR"

# Print success message
echo "Upload to $SERVER completed successfully!"
