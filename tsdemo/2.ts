interface Eg1 {
  name: string,
  readonly age: number,
}
// string
type V1 = Eg1['name']
// string | number
type V2 = Eg1['name' | 'age']
// any
// string | number
type V3 = Eg1[keyof Eg1]