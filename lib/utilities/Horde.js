/**
* Holds a horde of objects and strings and other stuff
* @extends Map
*/
class Horde {
    constructor (iterable, hordeLimit) {
        if (typeof iterable === 'number') {
            hordeLimit = iterable
            iterable = undefined
        }
        let array = []
        if (!(iterable instanceof Array) && typeof iterable === 'object') {
            array = Object.keys(iterable).map(key => [key, iterable[key]])
        } else if (iterable instanceof Array) {
            array = iterable
        }
        this.array = array
        this.hordeLimit = hordeLimit || Infinity
        this.array.forEach((entry, i) => {
            let key = entry[0]
            Object.defineProperty(this.array[i][1], '_key_', {
                get: () => key
            })
        })
    }
    
    get limit () {
        return this.hordeLimit
    }

    set limit (limit) {
        return this.setLimit(limit)
    }

    get size () {
        return this.array.length
    }

    setLimit (limit) {
        let l
        if (!limit) limit = this.limit
        if (limit === Infinity) l = Infinity
        if (limit === -Infinity) limit = -1
        if (typeof limit === 'number') l = parseInt(limit)
        if (typeof limit !== 'number' || isNaN(limit)) throw new SyntaxError('The limit must be a number.')
        if (limit < 0) throw new RangeError('The limit must be above 0.')
        this.hordeLimit = l
        return limit
    }

    forEach (func) {
        this.array.forEach((entry, index) => {
            func.apply(this, [entry[1], index])
        })
    }

    last () {
        return this.valueAt(this.size-1)
    }

    first () {
        return (this.array[0] || [])[1]
    }

    values () {
        return this.array.map(entry => entry[1])
    }

    valueAt (index) {
        return (this.array[index] || [])[1]
    }

    keys () {
        return this.array.map(entry => entry[0])
    }

    keyAt (index) {
        return (this.array[index] || [])[0]
    }

    entries () {
        return this.array
    }

    entryAt (index) {
        return this.array[index]
    }

    has (key) {
        return Boolean(~this.indexOf(key))
    }

    includes (key) {
        return this.has(key)
    }

    indexOf (key) {
        for (let i = 0; i < this.size; i++) {
            if (this.array[i][0] === key) return i
        }
        return -1
    }

    set (key, value) {
        if (this.has(key)) this.delete(key)
        if (this.size === this.limit) throw new Error('Horde has exceeded the maximum capacity.')
        this.array.push([key, value])
        if (typeof value == 'object') Object.defineProperty(this.array[this.size-1][1], '_key_', {
            get: () => key
        })
        return value
    }

    get (key, value) {
        if (!value) return (this.array.filter(entry => entry[0] === key)[0] || [])[1]
        else return this.find(key, value)
    }

    delete (key) {
        if (this.has(key)) return false
        else return this.array.splice(this.indexOf(key), 1)
    }

    clear () {
        this.array = []
    }

    find (prop, value) {
        return this.findAll(prop, value)[0] || null
    }

    findAll (prop, value) {
        let finds = []
        for (let i = 0; i < this.size; i++) {
            if (this.array[i][1][prop] === value) finds.push(this.array[i][1])
        }
        return finds
    }

    random () {
        return this.valueAt(Math.floor(Math.random() * this.size))
    }

    filter (func) {
        return this.values().filter(func)
    }

    map (func) {
        return this.values().map(func)
    }

    every (func) {
        return this.filter(func).length === this.size
    }

    some (func) {
        return this.filter(func).length > 0
    }

    none (func) {
        return this.filter(func).length === 0
    }

    toString () {
        return `[Horde Limit(${this.limit})]`
    }
}


module.exports = Horde