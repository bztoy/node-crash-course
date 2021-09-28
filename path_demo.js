const path = require('path');

const path_demo = () => {
    // Base file name
    console.log(`Base file name: ${path.basename(__filename)}`);

    // Directory name
    console.log(`Directory name: ${path.dirname(__filename)}`);

    // File Extension
    console.log(`File extension: ${path.extname(__filename)}`);

    // Create path object
    const pathObject = path.parse(__filename)
    console.log(typeof(pathObject));
    console.log(pathObject);
    console.log(`${pathObject.base} ${pathObject.root}`);

    // Concatenate path
    console.log(path.join(__dirname, 'test', 'hello.html'));
}

module.exports = path_demo;
