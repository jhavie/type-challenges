type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
}


/**
 * Iterating over interface
 * T interfcae {
 *   'title': string,
 *   'description': string,
 *   'completed': string
 * }
 * P in keyof T 'title', 'description', 'completed'
 */