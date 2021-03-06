var UT = window.UT || {},
	host = 'http://fcoin.com.ua:3000/';

//Configuration object
UT.Config = {
	//Path for saving articles
	saveArticlePath: host + 'temp/articles',
	getAllUnitTypes: host + 'unit-types',
    getAllApprovedUnits: host + 'unit',
	//Path for getting locale
	localeBaseURL: 'locale/',
	//default locale
	localeDefault: 'en_US',
    facebookAppId: 1525144001089909,
	unitTypesImagePath: 'img/types/{ITEM_TYPE}.png',
	defaultPosition: {
		lat: '50.4505879',
		lon: '30.523233300000015'
	},
	//default timer
	timerStartDate: 1380636600000,
	timerInterval: 1000,
	timerRange: 43200000,
	//default timeline
	timelineOptions: {
		dateStart: new Date(1400529754000),
		getApprovedUnits: host + 'unit'
	}
};