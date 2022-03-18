import {Greeter} from "../index"

test('My Greeter', () => {
  expect(Greeter('Trey')).toBe('Hello Trey!')
})