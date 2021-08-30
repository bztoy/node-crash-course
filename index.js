
const Runner = require('./runner');
const insect_world = require('./insect');
const basic_string = require('./basic_string')

// List of Runner class instances
const list_of_runner = [];

// Basic string
list_of_runner.push(new Runner('Basic String', basic_string, true ));
// Insect world
list_of_runner.push(new Runner('Insect world', insect_world, true ));
// module person is exporting a function
list_of_runner.push(new Runner('Person', require('./person') , true ));

list_of_runner.forEach((item) => {
    item.run();
})
