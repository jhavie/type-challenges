export type First<T extends any[]> = T extends [] ? never : T[0]
// export type First<T extends any[]> = T["length"] extends 0 ? never : T[0]
// export type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
// export type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never


/**
 * T extends [] in ts <=> T === [] in js
 * T["length"] extends 0 <=> T.length === 0
 */
