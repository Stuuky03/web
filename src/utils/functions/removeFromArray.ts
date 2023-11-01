export const removeFromArray = (array: any[], value: any) => {
  return array.filter((geeks) => {
    return geeks != value
  })
}