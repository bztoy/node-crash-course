const os = require('os');

const os_demo = () => {
    // OS Platform and CPU Architecture
    console.log(`OS Platform: ${os.platform()}, CPR Arch: ${os.arch()}`);

    // CPU Core Info
    console.log(os.cpus()[0]);

    // Free memory and total memory
    console.log(`Total memory is ${os.totalmem()} and free memory is ${os.freemem()}`);

    // Home directory
    console.log(`Home dir is: ${os.homedir()}`);

    // Uptime
    console.log(`Uptime: ${os.uptime()}`);
}

module.exports = os_demo;