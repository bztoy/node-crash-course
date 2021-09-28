const fs = require('fs');
const path = require('path');

const createFolderAndFile = (flag) => {
    if (!flag) return;

    // Create folder
    if (!fs.existsSync(path.join(__dirname, 'test'))) {
        fs.mkdir(path.join(__dirname, 'test'), {}, err => {
            if (err) throw err;
            console.log('Folder created');
        });
    }

    // Create and write to file (Overide)
    fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello from Mars', err => {
        if (err) throw err;
        console.log('File written to...');
    });

    // Create and write to file (Overide)
    fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), 'I love Node.js', err => {
        if (err) throw err;
        console.log('File written to...');
    });
}

// Read file
const readFile = () => {
    fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf-8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
}

// Rename file
const renameFile = (flag) => {
    if (!flag) return;

    fs.rename(path.join(__dirname, 'test', 'hello.txt'), path.join(__dirname, 'test', 'helloworld.txt'), err => {
        if (err) throw err;

        console.log('Flie renamed...');
    })
}

const fs_demo = () => {
    createFolderAndFile(false);
    readFile();
    renameFile(false);
}

module.exports = fs_demo;
