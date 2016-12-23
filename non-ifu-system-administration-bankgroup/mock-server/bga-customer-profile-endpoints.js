function sendSuccess(req, res, next) {
    res.json({
        'success': 'true'
    });
}


function validateUnique(req, res, next) {
    // When the Customer Abbv Name is 'NON', return false (means it already exists).
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

function selectBank(req, res, next) {
    res.json({
        "title" : "LISTOFBANKS",
        "totalItems": "3",
        "gridType": "selectable",
        "selectAction": "listCustomers",
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

function getCustomers(req, res, next) {
    res.json({
        "title" : "LIST OF CUSTOMERS",
        "totalItems": "3",
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
                "name" : "Test Customer",
                "id" : 3050
            },
            {
                "orgName" : "TESTBANK",
                "name" : "Test Customer 1",
                "id" : 3051
            },
            {
                "orgName" : "TESTBANK",
                "name" : "Test Customer 2",
                "id" : 3052
            }
        ]
    });
}

function initiateCustomer(req, res, next) {
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
            "orgType": "CUSTOMER"
        },
        "assignedCustomerRoleVOList": [],
        "presentation": {
            "AVAILABLE_CUSTOMER_ROLES": [
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

function fetchCustomer(req, res, next) {
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
            "orgType": "CUSTOMER"
        },
        "assignedCustomerRoleVOList": [
            {
                "id": 41,
                "name": "ba_customer_profile_read",
                "description": "ba_customer_profile_read",
                "target": "BANK"
            }
        ],
        "presentation": {
            "AVAILABLE_CUSTOMER_ROLES": [
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
        url: '/organization/bga/customer/selectbank',
        callback: selectBank
    },
    {
        method: 'POST',
        url: '/organization/bga/customer/list/:id',
        callback: getCustomers
    },
    {
        method: 'GET',
        url: '/organization/bga/customer/initiate',
        callback: initiateCustomer
    },
    {
        method: 'POST',
        url: '/organization/bga/customer/create',
        callback: sendSuccess
    },
    {
        method: 'GET',
        url: '/organization/bga/customer/edit/:id',
        callback: fetchCustomer
    },
    {
        method: 'GET',
        url: '/organization/bga/customer/view/:id',
        callback: fetchCustomer
    },
    {
        method: 'POST',
        url: '/organization/bga/customer/update',
        callback: sendSuccess
    },
    {
        method: 'POST',
        url: '/organization/bga/customer/delete',
        callback: sendSuccess
    },
    {
        method: 'POST',
        url: '/organization/bga/customer/unique',
        callback: validateUnique
    }
];

module.exports = apiEndPoints;
