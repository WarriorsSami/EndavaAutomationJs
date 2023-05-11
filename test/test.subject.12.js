const assert = require('chai').assert
const expect = require('chai').expect

const numbers = [1, 2, 3, 4, 5]

describe('subject 1', () => {
    it('is array', () => {
        expect(numbers).to.be.an('array')
    })

    it('fourth element is 4', () => {
        assert.equal(numbers[3], 4)
    })
})

const temaObj =  {
    name: "Tema",
    firstSubject: {
        subjId: 1,
        desc: "Primul exercitiu",
    },
    secondSubject: {
        subjId: 2,
        desc: "Al doilea exercitiu",
    },
    isDone: true,
}

describe('subject 2', () => {
    it('isDone is true', () => {
        expect(temaObj.isDone).to.be.true
    })

    it('secondSubject\'s desc property is "Al doilea exercitiu"', () => {
        assert.equal(temaObj.secondSubject.desc, "Al doilea exercitiu")
    })
})