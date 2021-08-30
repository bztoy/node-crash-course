
// bee object
const bee = {
    name: 'bee',
    legs: 6,
    flyable: true
}

const ant = {
    name: 'Ant',
    legs: 8,
    flyable: false
}

function insect_world() {
    console.log(bee);
    console.log(ant);
}

// export
module.exports = insect_world;