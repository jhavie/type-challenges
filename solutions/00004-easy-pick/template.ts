type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

/**
 * Iterating over union types
 * K: 'title' | 'completed' | 'invalid'
 * P in K 'title', 'completed', 'invalid'
 */