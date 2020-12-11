const Mediator = class{

    static #events = {}

    static on(name, callback){
        if(!Array.isArray(Mediator.#events[name])) Mediator.#events[name] = []
        Mediator.#events[name].push(callback)
    }

    static off(name, callback){
        if(!Array.isArray(Mediator.#events[name])) return
        Mediator.#events[name] = Mediator.#events[name].filter(_callback => _callback != callback)
    }

    static emit(name, ...args){
        if(!Array.isArray(Mediator.#events[name])) return
        Mediator.#events[name].forEach(callback => {
            callback(...args)
        })
    }

    static offAll(name){
        if(!Array.isArray(Mediator.#events[name])) return
        Mediator.#events[name] = []
    }

}

if(module) {
    module.exports = Mediator
}