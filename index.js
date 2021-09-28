const Runner = require('./runner');
const insect_world = require('./insect');
const basic_string = require('./basic_string');

const path_demo = require('./path_demo');
const fs_demo = require('./file_system_demo');
const os_demo = require('./os_demo');
const url_demo = require('./url_demo');
const event_demo = require('./event_demo');
const logger_demo = require('./logger');

// List of Runner class instances
const list_of_runner = [];

// Basic string
list_of_runner.push(new Runner('Basic String', basic_string, false ));
// Insect world
list_of_runner.push(new Runner('Insect world', insect_world, false ));
// module person is exporting a function
list_of_runner.push(new Runner('Person', require('./person') , false ));
// Path
list_of_runner.push(new Runner('Path', path_demo, false ));
// File system
list_of_runner.push(new Runner('File System', fs_demo, false ));
// Operating System
list_of_runner.push(new Runner('Operation System', os_demo, false ));
// Operating System
list_of_runner.push(new Runner('URL', url_demo, false ));
// Event
list_of_runner.push(new Runner('Event', event_demo, false ));
// Event sample (logger)
list_of_runner.push(new Runner('Logger', logger_demo, true ));

list_of_runner.forEach((item) => {
    item.run();
});
