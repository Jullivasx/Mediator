const { expect } = require('@jest/globals')
const Mediator = require('./Mediator')
test('Mediator: подписка и использование', () => {
    let x = 0;
    const fn = () => {
        x++
    }
    Mediator.on('test', fn)
    Mediator.emit('test')
    expect(x).toEqual(1)
})

test('Mediator: подписка и использование, отписка', () => {
    let x = 0;
    const fn = () => {
        x++
    }
    Mediator.on('test', fn)
    Mediator.emit('test')
    Mediator.emit('test')
    Mediator.off('test', fn)
    Mediator.emit('test')
    expect(x).toEqual(2)
})

test('Mediator: отписка от всех событий', () => {
    let a = 0;
    const fnA = () => {
        a++
    }
    let b = 0;
    const fnB = () => {
        b++
    }
    Mediator.on('testA', fnA)
    Mediator.emit('testA')
    Mediator.on('testA', fnB)
    Mediator.emit('testA')
    Mediator.offAll('testA')
    Mediator.emit('testA')
    expect('' + a + b).toEqual("21")
})