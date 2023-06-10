type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    [P in T[number]]: P
}



/**
 * Iterating over Array
 * const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
 * P in T[number] 'tesla', 'model 3', 'model X', 'model Y'
 */