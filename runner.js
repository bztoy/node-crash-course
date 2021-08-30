
class Runner {
    constructor (topic, fn, sw) {
        this.topic = topic
        this.fn = fn
        this.sw = sw
    }

/**
 * Run testing function
 */
    run() {
        if (this.sw === true) {
            console.log(`> ${this.topic} is ${this.sw}`)
            this.fn()
        }
    }
}

module.exports = Runner