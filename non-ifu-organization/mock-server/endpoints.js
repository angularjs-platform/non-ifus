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

function getCustomers(req, res, next) {
    res.json({
        columnDefs: [
            {
                "name": "orgVO.orgName",
                "labelKey": "ORGNAME"
            },
            {
                "name": "orgVO.customerVO.bei",
                "labelKey": "BEI"
            },
            {
                "name": 'Actions',
                "labelKey": "ACTIONS",
                "type": "button",
                "options": {
                    "action": "edit",
                    "buttonLabel": "EDIT"
                }
            }
        ],
        title: 'LISTOFCUSTOMERS',
        data: [
        {
            "orgVO":{
                "id":151,
                "parentOrgId":1,
                "bankGroupVO":null,
                "bankVO":null,
                "customerVO":{
                    "id":50,
                    "bei":"sfc",
                    "crmEmail":"sa",
                    "legalIdType":"sdd",
                    "legalIdNo":"asfc",
                    "legalIdCountry":"sdc"
                },
                "branchVO":null,
                "orgName":"VODAFONE",
                "name":"Vodafone India",
                "addressLine1":"ADD1",
                "addressLine2":"ADD2",
                "baseCurCode":null,
                "contactName":"Mohan",
                "country":null,
                "dom":"DOM",
                "email":"a@a.com",
                "fax":"42242",
                "language":"EN",
                "phone":"1231",
                "reference":"Ref",
                "telex":"12312",
                "webAddress":"sada",
                "streetName":"safsacf",
                "postCode":"22131",
                "townName":"sdsdfs",
                "countrySubDiv":"sd",
                "status":null,
                "orgType":"03"
            }
        },
        {
            "orgVO":{
                "id":1050,
                "parentOrgId":1,
                "bankGroupVO":null,
                "bankVO":null,
                "customerVO":{
                    "id":1050,
                    "bei":"uvi",
                    "crmEmail":"iewi",
                    "legalIdType":"ocm",
                    "legalIdNo":"noca",
                    "legalIdCountry":"osnc"
                },
                "branchVO":null,
                "orgName":"TestRef",
                "name":"sdhjhhj",
                "addressLine1":"jhjj",
                "addressLine2":"jjjj",
                "baseCurCode":null,
                "contactName":"kk",
                "country":null,
                "dom":"nnn",
                "email":"kks",
                "fax":"dsk",
                "language":"kkd",
                "phone":"kdks",
                "reference":"ksdsk",
                "telex":"kkddk",
                "webAddress":"kkd",
                "streetName":"skks",
                "postCode":"kdxkkx",
                "townName":"ksksk",
                "countrySubDiv":"xkkx",
                "status":"A",
                "orgType":"03"
            }
        },
        {
            "orgVO":{
                "id":1051,
                "parentOrgId":1,
                "bankGroupVO":null,
                "bankVO":null,
                "customerVO":{
                    "id":1051,
                    "bei":"uvi",
                    "crmEmail":"iewi",
                    "legalIdType":"ocm",
                    "legalIdNo":"noca",
                    "legalIdCountry":"osnc"
                },
                "branchVO":null,
                "orgName":"TestRef1",
                "name":"sdhjhhj",
                "addressLine1":"jhjj",
                "addressLine2":"jjjj",
                "baseCurCode":null,
                "contactName":"kk",
                "country":null,
                "dom":"nnn",
                "email":"kks",
                "fax":"dsk",
                "language":"kkd",
                "phone":"kdks",
                "reference":"ksdsk",
                "telex":"kkddk",
                "webAddress":"kkd",
                "streetName":"skks",
                "postCode":"kdxkkx",
                "townName":"ksksk",
                "countrySubDiv":"xkkx",
                "status":"A",
                "orgType":"03"
            }
        },
        {
            "orgVO":{
                "id":1100,
                "parentOrgId":1,
                "bankGroupVO":null,
                "bankVO":null,
                "customerVO":{
                    "id":1100,
                    "bei":"ss",
                    "crmEmail":"fdv",
                    "legalIdType":"sd",
                    "legalIdNo":"scc",
                    "legalIdCountry":"ssss"
                },
                "branchVO":null,
                "orgName":"Test11",
                "name":"jjjs",
                "addressLine1":"kmsd",
                "addressLine2":"mlkwwm",
                "baseCurCode":null,
                "contactName":"s",
                "country":null,
                "dom":"mlwlq",
                "email":"dsj",
                "fax":"sdju",
                "language":"lm",
                "phone":"m2m2m",
                "reference":"l;ws",
                "telex":"ms;",
                "webAddress":"fndfjq",
                "streetName":"ksks",
                "postCode":"wkwk",
                "townName":"kkkw",
                "countrySubDiv":"kk",
                "status":"A",
                "orgType":"03"
            }
        },
        {
            "orgVO":{
                "id":1150,
                "parentOrgId":1,
                "bankGroupVO":null,
                "bankVO":null,
                "customerVO":{
                    "id":1150,
                    "bei":"nseks",
                    "crmEmail":"jsdc",
                    "legalIdType":"cnks",
                    "legalIdNo":"ldsmcl",
                    "legalIdCountry":"w"
                },
                "branchVO":null,
                "orgName":"Test124",
                "name":"sb",
                "addressLine1":"bjsc",
                "addressLine2":"kjjb",
                "baseCurCode":null,
                "contactName":"dbckj",
                "country":null,
                "dom":"sbhc",
                "email":"sdcn",
                "fax":"aknnc",
                "language":"jnskc",
                "phone":"ksndcni",
                "reference":"iwcn",
                "telex":"ssifin",
                "webAddress":"rirvn",
                "streetName":"socnl",
                "postCode":"pw",
                "townName":"susic",
                "countrySubDiv":"cnsi",
                "status":"A",
                "orgType":"03"
            }
        },
        {
            "orgVO":{
                "id":1200,
                "parentOrgId":1,
                "bankGroupVO":null,
                "bankVO":null,
                "customerVO":{
                    "id":1201,
                    "bei":"dkk",
                    "crmEmail":"sld",
                    "legalIdType":"lklsd",
                    "legalIdNo":"lsdlc",
                    "legalIdCountry":"lml"
                },
                "branchVO":null,
                "orgName":"test560",
                "name":"dsdfkj",
                "addressLine1":"ksjddncq",
                "addressLine2":"nvdk",
                "baseCurCode":null,
                "contactName":"ssvvn",
                "country":null,
                "dom":"sndvk",
                "email":"ddfnlk",
                "fax":"lsdsnvl",
                "language":"lnasaldcn",
                "phone":"ln",
                "reference":"lnl",
                "telex":"lsdnc",
                "webAddress":"nscl",
                "streetName":"lmsldscms",
                "postCode":"mlkmxx",
                "townName":"kmlacm",
                "countrySubDiv":"kmlk",
                "status":"A",
                "orgType":"03"
            }
        }
        ]
    });
}

function getBanks(req, res, next) {
    res.json({
        columnDefs: [
            {
                "name": "orgVO.orgName",
                "labelKey": "ORGNAME"
            },
            {
                "name": "orgVO.customerVO.bei",
                "labelKey": "BEI"
            },
            {
                "name": 'Actions',
                "labelKey": "ACTIONS",
                "type": "button",
                "options": {
                    "action": "edit",
                    "buttonLabel": "EDIT"
                }
            }
        ],
        title: 'LISTOFBANKS',
        data: [
        {
            "orgVO":{
                "id":151,
                "parentOrgId":1,
                "bankGroupVO":null,
                "bankVO":null,
                "customerVO":{
                    "id":50,
                    "bei":"sfc",
                    "crmEmail":"sa",
                    "legalIdType":"sdd",
                    "legalIdNo":"asfc",
                    "legalIdCountry":"sdc"
                },
                "branchVO":null,
                "orgName":"VODAFONE",
                "name":"Vodafone India",
                "addressLine1":"ADD1",
                "addressLine2":"ADD2",
                "baseCurCode":null,
                "contactName":"Mohan",
                "country":null,
                "dom":"DOM",
                "email":"a@a.com",
                "fax":"42242",
                "language":"EN",
                "phone":"1231",
                "reference":"Ref",
                "telex":"12312",
                "webAddress":"sada",
                "streetName":"safsacf",
                "postCode":"22131",
                "townName":"sdsdfs",
                "countrySubDiv":"sd",
                "status":null,
                "orgType":"03"
            }
        },
        {
            "orgVO":{
                "id":1050,
                "parentOrgId":1,
                "bankGroupVO":null,
                "bankVO":null,
                "customerVO":{
                    "id":1050,
                    "bei":"uvi",
                    "crmEmail":"iewi",
                    "legalIdType":"ocm",
                    "legalIdNo":"noca",
                    "legalIdCountry":"osnc"
                },
                "branchVO":null,
                "orgName":"TestRef",
                "name":"sdhjhhj",
                "addressLine1":"jhjj",
                "addressLine2":"jjjj",
                "baseCurCode":null,
                "contactName":"kk",
                "country":null,
                "dom":"nnn",
                "email":"kks",
                "fax":"dsk",
                "language":"kkd",
                "phone":"kdks",
                "reference":"ksdsk",
                "telex":"kkddk",
                "webAddress":"kkd",
                "streetName":"skks",
                "postCode":"kdxkkx",
                "townName":"ksksk",
                "countrySubDiv":"xkkx",
                "status":"A",
                "orgType":"03"
            }
        },
        {
            "orgVO":{
                "id":1051,
                "parentOrgId":1,
                "bankGroupVO":null,
                "bankVO":null,
                "customerVO":{
                    "id":1051,
                    "bei":"uvi",
                    "crmEmail":"iewi",
                    "legalIdType":"ocm",
                    "legalIdNo":"noca",
                    "legalIdCountry":"osnc"
                },
                "branchVO":null,
                "orgName":"TestRef1",
                "name":"sdhjhhj",
                "addressLine1":"jhjj",
                "addressLine2":"jjjj",
                "baseCurCode":null,
                "contactName":"kk",
                "country":null,
                "dom":"nnn",
                "email":"kks",
                "fax":"dsk",
                "language":"kkd",
                "phone":"kdks",
                "reference":"ksdsk",
                "telex":"kkddk",
                "webAddress":"kkd",
                "streetName":"skks",
                "postCode":"kdxkkx",
                "townName":"ksksk",
                "countrySubDiv":"xkkx",
                "status":"A",
                "orgType":"03"
            }
        },
        {
            "orgVO":{
                "id":1100,
                "parentOrgId":1,
                "bankGroupVO":null,
                "bankVO":null,
                "customerVO":{
                    "id":1100,
                    "bei":"ss",
                    "crmEmail":"fdv",
                    "legalIdType":"sd",
                    "legalIdNo":"scc",
                    "legalIdCountry":"ssss"
                },
                "branchVO":null,
                "orgName":"Test11",
                "name":"jjjs",
                "addressLine1":"kmsd",
                "addressLine2":"mlkwwm",
                "baseCurCode":null,
                "contactName":"s",
                "country":null,
                "dom":"mlwlq",
                "email":"dsj",
                "fax":"sdju",
                "language":"lm",
                "phone":"m2m2m",
                "reference":"l;ws",
                "telex":"ms;",
                "webAddress":"fndfjq",
                "streetName":"ksks",
                "postCode":"wkwk",
                "townName":"kkkw",
                "countrySubDiv":"kk",
                "status":"A",
                "orgType":"03"
            }
        },
        {
            "orgVO":{
                "id":1150,
                "parentOrgId":1,
                "bankGroupVO":null,
                "bankVO":null,
                "customerVO":{
                    "id":1150,
                    "bei":"nseks",
                    "crmEmail":"jsdc",
                    "legalIdType":"cnks",
                    "legalIdNo":"ldsmcl",
                    "legalIdCountry":"w"
                },
                "branchVO":null,
                "orgName":"Test124",
                "name":"sb",
                "addressLine1":"bjsc",
                "addressLine2":"kjjb",
                "baseCurCode":null,
                "contactName":"dbckj",
                "country":null,
                "dom":"sbhc",
                "email":"sdcn",
                "fax":"aknnc",
                "language":"jnskc",
                "phone":"ksndcni",
                "reference":"iwcn",
                "telex":"ssifin",
                "webAddress":"rirvn",
                "streetName":"socnl",
                "postCode":"pw",
                "townName":"susic",
                "countrySubDiv":"cnsi",
                "status":"A",
                "orgType":"03"
            }
        },
        {
            "orgVO":{
                "id":1200,
                "parentOrgId":1,
                "bankGroupVO":null,
                "bankVO":null,
                "customerVO":{
                    "id":1201,
                    "bei":"dkk",
                    "crmEmail":"sld",
                    "legalIdType":"lklsd",
                    "legalIdNo":"lsdlc",
                    "legalIdCountry":"lml"
                },
                "branchVO":null,
                "orgName":"test560",
                "name":"dsdfkj",
                "addressLine1":"ksjddncq",
                "addressLine2":"nvdk",
                "baseCurCode":null,
                "contactName":"ssvvn",
                "country":null,
                "dom":"sndvk",
                "email":"ddfnlk",
                "fax":"lsdsnvl",
                "language":"lnasaldcn",
                "phone":"ln",
                "reference":"lnl",
                "telex":"lsdnc",
                "webAddress":"nscl",
                "streetName":"lmsldscms",
                "postCode":"mlkmxx",
                "townName":"kmlacm",
                "countrySubDiv":"kmlk",
                "status":"A",
                "orgType":"03"
            }
        }
        ]
    });
}

var apiEndpoints = {
    mainUrl: '',
    routes: [{
        method: 'GET',
        url: '/reference-data/country/list',
        callback: getCountries
    },
    {
        method: 'GET',
        url: '/reference-data/currency/list',
        callback: getCurrencies
    },
    {
        method: 'GET',
        url: '/organization/customer/list',
        callback: getCustomers
    },
    {
        method: 'GET',
        url: '/organization/bank/list',
        callback: getBanks
    }]
};

module.exports = apiEndpoints;
