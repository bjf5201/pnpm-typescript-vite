#!/bin/bash

# Define source and destination directories
SOURCE_DIR="./reusable-workflows"
DEST_DIR=".github/workflows"

# Remove existing workflows
rm -rf $DEST_DIR/*

# Check if source directory exists, if it does not, exit.
if [ ! -d "$SOURCE_DIR" ]; then
  echo "Source directory does not exist."
  exit 1
fi

# Check if the destination directory exists, if it does not, exit.
if [ ! -d "$DEST_DIR" ]; then
  echo "Destination directory does not exist."
  exit 1
fi

# Copy reusable workflows within the source directory to the destination directory
for file in $SOURCE_DIR/*; do
  cp $file $DEST_DIR
done

echo "Workflows have been synchronized."