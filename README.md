# 3NodeMini
There are 3 tiny node projects. This is for learning purposes.
This repository contains three different Node.js utilities that you can run directly from the terminal. Each folder in this repo has a specific utility with a JavaScript file (.js) for functionality and a corresponding package.json file for managing dependencies.

## Contents
-----------------
1. Project 1: ASCII Art Generator
2. Project 2: Random Joke Generator
3. Project 3: Language Detector

## Prerequisites
-------------
Make sure you have Node.js installed on your system. You can check if Node.js is installed by running the following command in your terminal:
$ node -v

## Installation
-------------
1. Clone the repository to your local machine:
   $ git clone https://github.com/Sayantan-B-dev/Lv2_3NodeMini.git

2. Navigate to each project folder and install the required dependencies using npm:
   $ cd 'project-folder'
   $ npm install

## Folder Structure
----------------
The repo is organized into three folders, each with a separate utility:

1. ascii-art-generator/
    - ascii-art-generator.js
    - package.json
    
2. random-joke-generator/
    - random-joke-generator.js
    - package.json
    
3. language-detector/
    - language-detector.js
    - package.json

## Project 1: ASCII Art Generator
------------------------------
This utility takes a text input and converts it into ASCII art.

### How it works:
- Make sure your cd directs to the correct folder where the .js file is(/01_AsciiArt/).
- After installing dependencies, you can run the script by using the terminal:
- $ node index.js 'Your text hoes here'
- The output will be displayed in the terminal as ASCII art.

## Project 2: Random Joke Generator
---------------------------------
This utility fetches a random joke (Dad joke, general joke, or Chinese joke) and displays it.

### How it works:
- Make sure your cd directs to the correct folder where the .js file is(/02_GiveMeAJoke/).
- After installing dependencies, you can run the script by passing a text argument:
- $ node index.js    or     $ node --no-deprecation index.js
- You will get a random joke printed on the terminal.

## Project 3: Language Detector
----------------------------
This utility detects the language of a given text through the command line.

### How it works:
- Make sure your cd directs to the correct folder where the .js file is(/03_LangDitector/).
- After installing dependencies, you can run the script by passing a text argument:
- $ node index.js "Your text to detect language"
- The script will detect the language and print it in the terminal.

## Usage
-----
1. Clone the repository to your local machine.
2. Install the required dependencies for each project using npm.
3. Navigate to the respective project folder and run the script as per the instructions above.
