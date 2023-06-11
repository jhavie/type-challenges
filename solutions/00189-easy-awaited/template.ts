export type MyAwaited<T extends Thenable<any> | Promise<any>> = T extends Promise<infer Inner>
    ? Inner extends Promise<any> ? MyAwaited<Inner> : Inner
    : T extends Thenable<infer U> ? U : false