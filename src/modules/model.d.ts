export type ModelState<T> = T extends {actions: any, reducer: (...args) => infer R} ? R : any;
export type ModelActions<T> = T extends {actions: infer A, reducer: (...args) => any} ? A : any;
export type ViewProps<T> = T extends {actions: infer A, reducer: (...args) => infer R} ? R & A : any;