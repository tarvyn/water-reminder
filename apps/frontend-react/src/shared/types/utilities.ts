export type InferValueTypes<T> = T extends { readonly [key: string]: infer U } ? U : never;
