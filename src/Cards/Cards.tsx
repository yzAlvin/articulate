const keyToThing = <T,>(k: string, set: T, spadeIndex: Number, idx: number, seed: number): {value: string, spade?: boolean} => {
  //@ts-ignore
  const i = seed % set[k].length
  return spadeIndex === idx ? 
  //@ts-ignore
  {value: set[k as keyof T][i], spade: true} :
  //@ts-ignore
  {value: set[k as keyof T][i]}
}


export const createCard = <T, V,>(
  set: T,
  seed: number
): V => {
  const spadeIndex = Math.floor(Math.random() * Object.keys(set).length)
  const card: V = Object.keys(set).reduce((o, k, i) => ({...o, [k]: keyToThing<T>(k, set, spadeIndex, i, seed)}), {} as V)
  return card
};
