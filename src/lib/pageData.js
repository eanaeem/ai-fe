export const DashboardActionGroups = [{
	title: 'Menu',
	actions: [
		{
			content: 'Orders',
			onAction: null,
		}, {
			content: 'Products',
			onAction: null,
		}, {
			content: 'Payments',
			onAction: null,
		}, {
			content: 'Vendors',
			onAction: null,
		}, {
			content: 'Settings',
			onAction: null,
		}, {
			content: 'Help centre',
			onAction: null,
		},
	],
}];

export const PrimaryAction = {
	content: 'Shopify',
	disabled: false,
	url: '/shopify',
};

export const QuickReport = {
	title:'Quick Report',
	items: [
		{
			heading:'Orders',
			caption: 'Total number of new orders',
			badge: 2,
		},
		{
			heading:'Products',
			caption: 'Total number of products added',
			badge: 4,
		},
		{
			heading:'Vendors',
			caption: 'Total number of vendors',
			badge: 4,
		},
		{
			heading:'Vendors invited',
			caption: 'Total number of vendors',
			badge: 10,
		},
		{
			heading:'Total sales',
			caption: 'Total sales for the last 7 days',
			info: '$1200.00',
		},
	],
};