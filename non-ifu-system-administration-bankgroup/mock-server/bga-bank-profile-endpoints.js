function sendSuccess(req, res, next) {
    res.json({
        'success': 'true'
    });
}


function validateUnique(req, res, next) {
    // When the Bank Abbv Name is 'NON', return false (means it already exists).
    if (req.body.abbvName === 'NON') {
        res.json({
            'valid': false
        });
    }
    else {
        res.json({
            'valid': true
        });
    }
}

function getBanks(req, res, next) {
    res.json({
        "title" : "LISTOFBANKS",
        "totalItems": 3,
        "columnDefs" : [
            {
                "name" : "orgName",
                "labelKey" : "ORGNAME",
                "visible" : true,
                "type" : null,
                "options" : null
            },
            {
                "name" : "name",
                "labelKey" : "NAME",
                "visible" : true,
                "type" : null,
                "options" : null
            },
            {
                "name" : "id",
                "labelKey" : null,
                "visible" : false,
                "type" : null,
                "options" : null
            },
            {
                "name" : "Actions",
                "labelKey" : "ACTIONS",
                "visible" : true,
                "type" : "button",
                "options" :
                [
                    {
                        "action" : "view",
                        "buttonLabel" : "VIEW",
                        "type" : "view"
                    },
                    {
                        "action" : "edit",
                        "buttonLabel" : "EDIT",
                        "type" : "edit"
                    },
                    {
                        "action" : "delete",
                        "buttonLabel" : "DELETE",
                        "type" : "delete"
                    }
                ]
            }
        ],
        "data" :
        [
            {
                "orgName" : "TESTBANK",
                "name" : "Test Bank",
                "id" : 3050
            },
            {
                "orgName" : "TESTBANK1",
                "name" : "Test Bank1",
                "id" : 3051
            },
            {
                "orgName" : "TESTBANK2",
                "name" : "Test Bank1",
                "id" : 3052
            }
        ]
    });
}

function initiateBank(req, res, next) {
    res.json({
        "orgVO": {
            "id": null,
            "parentOrgId": null,
            "bankGroupVO": null,
            "bankVO": null,
            "customerVO": null,
            "branchVO": null,
            "orgName": null,
            "name": null,
            "addressLine1": null,
            "addressLine2": null,
            "baseCurCode": null,
            "contactName": null,
            "country": null,
            "dom": null,
            "email": null,
            "fax": null,
            "language": null,
            "phone": null,
            "reference": null,
            "telex": null,
            "webAddress": null,
            "streetName": null,
            "postCode": null,
            "townName": null,
            "countrySubDiv": null,
            "status": null,
            "orgType": "BANK"
        },
        "assignedBankRoleVOList": [],
        "assignedCustomerRoleVOList": [],
        "presentation": {
            "AVAILABLE_CUSTOMER_ROLES": [],
            "AVAILABLE_BANK_ROLES": [
                {
                    "id": 41,
                    "name": "ba_customer_profile_read",
                    "description": "ba_customer_profile_read",
                    "target": "BANK"
                },
                {
                    "id": 42,
                    "name": "ba_customer_profile_update",
                    "description": "ba_customer_profile_update",
                    "target": "BANK"
                },
                {
                    "id": 43,
                    "name": "ba_customer_profile_draft_update",
                    "description": "ba_customer_profile_draft_update",
                    "target": "BANK"
                },
                {
                    "id": 45,
                    "name": "ba_customer_profile_draft_create",
                    "description": "ba_customer_profile_draft_create",
                    "target": "BANK"
                },
                {
                    "id": 46,
                    "name": "ba_customer_profile_delete",
                    "description": "ba_customer_profile_delete",
                    "target": "BANK"
                },
                {
                    "id": 44,
                    "name": "ba_customer_profile_create",
                    "description": "ba_customer_profile_create",
                    "target": "BANK"
                }
            ]
        }
    });
}

function fetchBank(req, res, next) {
    res.json({
        "orgVO": {
            "id":151,
            "parentOrgId":1,
            "bankGroupVO":null,
            "bankVO":{
                "isoCode": "123123"
            },
            "customerVO": null,
            "branchVO":null,
            "orgName":"VODAFONE",
            "name":"Vodafone India",
            "addressLine1":"ADD1",
            "addressLine2":"ADD2",
            "baseCurCode":"USD",
            "contactName":"Mohan",
            "country":"US",
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
            "status":"A",
            "orgType": "BANK"
        },
        "assignedBankRoleVOList": [
            {
                "id": 41,
                "name": "ba_customer_profile_read",
                "description": "ba_customer_profile_read",
                "target": "BANK"
            }
        ],
        "assignedCustomerRoleVOList": [],
        "presentation": {
            "AVAILABLE_CUSTOMER_ROLES": [],
            "AVAILABLE_BANK_ROLES": [
                {
                    "id": 42,
                    "name": "ba_customer_profile_update",
                    "description": "ba_customer_profile_update",
                    "target": "BANK"
                },
                {
                    "id": 43,
                    "name": "ba_customer_profile_draft_update",
                    "description": "ba_customer_profile_draft_update",
                    "target": "BANK"
                },
                {
                    "id": 45,
                    "name": "ba_customer_profile_draft_create",
                    "description": "ba_customer_profile_draft_create",
                    "target": "BANK"
                },
                {
                    "id": 46,
                    "name": "ba_customer_profile_delete",
                    "description": "ba_customer_profile_delete",
                    "target": "BANK"
                },
                {
                    "id": 44,
                    "name": "ba_customer_profile_create",
                    "description": "ba_customer_profile_create",
                    "target": "BANK"
                }
            ]
        }
    });
}

var apiEndPoints = [
    {
        method: 'POST',
        url: '/organization/bga/bank/list',
        callback: getBanks
    },
    {
        method: 'GET',
        url: '/organization/bga/bank/initiate',
        callback: initiateBank
    },
    {
        method: 'POST',
        url: '/organization/bga/bank/create',
        callback: sendSuccess
    },
    {
        method: 'GET',
        url: '/organization/bga/bank/edit/:id',
        callback: fetchBank
    },
    {
        method: 'GET',
        url: '/organization/bga/bank/view/:id',
        callback: fetchBank
    },
    {
        method: 'POST',
        url: '/organization/bga/bank/update',
        callback: sendSuccess
    },
    {
        method: 'POST',
        url: '/organization/bga/bank/delete',
        callback: sendSuccess
    },
    {
        method: 'POST',
        url: '/organization/bga/bank/unique',
        callback: validateUnique
    }
];

module.exports = apiEndPoints;
