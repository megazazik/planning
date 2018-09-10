declare const NODE_ENV: string;

declare module "tape-catch" {
	import * as test from 'tape';
	export = test;
}

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;