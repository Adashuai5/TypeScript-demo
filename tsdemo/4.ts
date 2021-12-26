let a1: null = null
let b1: undefined = undefined
let c1: boolean = true
let d1: string = '111'
let e1: number = 1
let f1: Object = {}
let g1: symbol = Symbol('111')

let n2: any = 1
n2 = '111'

interface SquareConfig {
  color?: string
  width?: number
  opacity: number
}

function createSquare(config: SquareConfig): void {
  // ...
}

let mySquare = createSquare({ color: 'red', width: 100, opacity: 0.5 })
let mySquare1 = createSquare({ width: 100, opacity: 0.5 } as SquareConfig)

interface SquareConfig1 {
  color?: string
  width?: number
  [propName: string]: any
}
function createSquare1(config: SquareConfig1): void {
  // ...
}
let mySquare2 = createSquare1({ color: 'red', width: 100, opacity: 0.5 })

interface Add {
  (a: number, b: number): number
  minus(a: number, b: number): number
}

let add1: Add = ((): Add => {
  let x: any = function (a: number, b: number): number {
    return a + b
  }
  x.minus = function (a: number, b: number): number {
    return a - b
  }
  return x
})()

console.log(add1(1, 2))

interface Animal {
  walk: boolean
}

interface Animal2 extends Animal {
  say: boolean
}

interface Animal3 {
  eat: boolean
}

interface Human extends Animal2, Animal3 {
  readonly name: string
  age: number
}

let ada: Human = {
  name: 'ada',
  age: 20,
  walk: true,
  say: true,
  eat: true,
}

function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length) // Array has a .length, so no more error
  return arg
}

function identity<T>(arg: T): T {
  return arg
}

let myIdentity: <T>(arg: T) => T = identity
interface GenericIdentityFn<T> {
  (arg: T): T
}
let myIdentity1: GenericIdentityFn<number> = identity

export {}
