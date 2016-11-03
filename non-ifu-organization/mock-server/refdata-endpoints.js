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
    res.json([{
        'currencyVO': {
            'currencyCode': 'USD'
        }
    },
    {
        'currencyVO': {
            'currencyCode': 'SGD'
        }
    }]);
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
