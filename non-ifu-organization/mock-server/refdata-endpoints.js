function getCountries(req, res, next) {
    res.json([{
        'countryVO': {
            'countryCode': 'US'
        }
    },
    {
        'countryVO': {
            'countryCode': 'UK'
        }
    }]);
}

function getCurrencies(req, res, next) {
    res.json({
        "title" : "LISTOFCURRENCIES",
        "columnDefs" : [
            {
                "name" : "isocode",
                "labelKey" : "ISOCODE",
                "visible" : true,
                "type" : null,
                "options" : null
            },
            {
                "name" : "name",
                "labelKey" : "CURRENCY_NAME",
                "visible" : true,
                "type" : null,
                "options" : null
            }
        ],
        "data" :
        [
            {
                "isocode" : "EUR",
                "name" : "Euro"
            },
            {
                "isocode" : "GBP",
                "name" : "Pound Sterling"
            },
            {
                "isocode" : "USD",
                "name" : "US Dollars"
            },
            {
                "isocode" : "INR",
                "name" : "Indian Rupees"
            }
        ]
    });
}

var apiEndPoints = [
    {
        method: 'GET',
        url: '/reference-data/country/list',
        callback: getCountries
    },
    {
        method: 'GET',
        url: '/reference-data/currency/list',
        callback: getCurrencies
    }
];

module.exports = apiEndPoints;
