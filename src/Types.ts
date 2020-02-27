export type numArray = Array<number>
export type strArray = Array<string>
export interface Person {
  firstName: string
  lastName: string
  age: number
}
export type personArray = Array<Person>

//find last element of a generic array, takes in array of T (type) and returns T
export const last = <T>(arr: T[]): T => arr[arr.length - 1]
//find first element of a generic array, takes in array of T (type) and returns T
export const first = <T>(arr: T[]): T => arr[0]
//make array out of generic type passed in, takes in T (type) and returns array of T
export const makeArr = <T>(x: T): T[] => [x]
//take in object that has at least key first and last name, concatonates first and last name and returns them
export const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => ({
  ...obj,
  firstName: obj.firstName + " " + obj.lastName
})
