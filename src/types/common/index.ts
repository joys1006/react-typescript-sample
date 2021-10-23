export interface Dictionary<T> {
	[Key: string]: T;
}

export interface StoreState<T, S> {
	set: (arg0: string, arg1: S) => T;
	get: (arg0: string) => S;
}
