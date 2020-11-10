import { add } from "../../pages/sum"

test('adds a and b', () => {
  expect(add(1, 2)).toBe(3)
})

test('adds a and b', () => {
  expect(add(2, 3)).toBe(3)
})
