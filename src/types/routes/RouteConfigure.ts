export default interface RouteConfigure {
	name: string;
	path: string;
	type: string;
	component: any;
	menu?: boolean;
	requireAuth?: boolean;
	children?: Array<RouteConfigure>;
}
