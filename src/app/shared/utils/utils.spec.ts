import { pluck, range } from "./utils"

describe('utils', () => {

    describe('range', () => {
        it('should give me a range', () => {
            expect(range(1, 5)).toEqual([1, 2, 3, 4])
        })

    })

    describe('pluck', () => {
        it('should pluck a field from the input', () => {
            expect(pluck([{ id: 1, name: 'Ganesh' }, { id: 2, name: 'Drv' }, { id: 3, name: 'FGT' }], 'name')).toEqual(['Ganesh','Drv','FGT'])
        })
    })
})