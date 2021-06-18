// Primitives: number, string, boolean
let age: number = 12
age = 14

let userName: string
userName = 'asdasdasd'

// More complex types: array
let hobbies: string[];
hobbies = ['Sports', 'Cooking']

type Person = {
    userName: string,
    age: number,
    intern: boolean
}

let person: Person

person = {
    userName: 'Me',
    age: 21,
    intern: true
}

let people: Person[]

people = [person, person, person]

// Type inference
let course: string | number = 'Me against the world'
course = 124

// Functions and types

const add = (a: number, b: number) => {
    return toString(a + b)
}

// Generics
const insert = <T>(array: T[], value: T) => {
    const newArray = [value, ...array]
    return newArray
}

const updatedArray = insert(['sa', '1', 2, 3], 1)
