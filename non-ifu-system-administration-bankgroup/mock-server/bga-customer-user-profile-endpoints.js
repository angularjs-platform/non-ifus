function sendSuccess(req, res, next) {
    res.json({
        'success': 'true'
    });
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

function selectCustomer(req, res, next) {
    res.json({
        "title" : "LIST OF CUSTOMERS",
        "totalItems": "3",
        "gridType": "selectable",
        "selectAction": "listUsers",
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

function getUsers(req, res, next) {
    res.json({
        "title" : "LIST OF USERS",
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
                "orgName" : "Demo Customer",
                "name" : "Demo Customer User 1",
                "id" : 3050
            },
            {
                "orgName" : "Demo Customer",
                "name" : "Demo Customer User 2",
                "id" : 3051
            },
            {
                "orgName" : "Demo Customer",
                "name" : "Demo Customer User 3",
                "id" : 3053
            }
        ]
    });
}

function initiateUser(req, res, next) {
    res.json({
        "userVO": {
            "id": null,
            "userName": null,
            "password": null,
            "status": null,
            "addressLine1": null,
            "addressLine2": null,
            "country": null,
            "curCode": null,
            "dom": null,
            "email": null,
            "fax": null,
            "firstName": null,
            "lastName": null,
            "language": null,
            "phone": null,
            "reference": null,
            "timeZone": null,
            "countrySubDivision": null,
            "employeeDepartment": null,
            "employeeNumber": null,
            "legalCountry": null,
            "legalNo": null,
            "legalType": null,
            "correspondenceLanguage": null,
        },
        "assignedRoleVOList": [],
        "presentation": {
            "AVAILABLE_CUSTOMER_USER_ROLES": [
                {
                    "id": 41,
                    "name": "test_role_1",
                    "description": "test_role_1",
                    "target": "USER"
                },
                {
                    "id": 42,
                    "name": "test_role_2",
                    "description": "test_role_2",
                    "target": "USER"
                },
                {
                    "id": 43,
                    "name": "test_role_3",
                    "description": "test_role_3",
                    "target": "USER"
                },
                {
                    "id": 45,
                    "name": "test_role_4",
                    "description": "test_role_4",
                    "target": "USER"
                },
                {
                    "id": 46,
                    "name": "test_role_5",
                    "description": "test_role_5",
                    "target": "USER"
                },
                {
                    "id": 44,
                    "name": "test_role_6",
                    "description": "test_role_6",
                    "target": "USER"
                }
            ]
        }
    });
}

function fetchUser(req, res, next) {
    res.json({
        "userVO": {
            "id": 3502,
            "userName": "Demouser1",
            "password": "password",
            "status": "A",
            "addressLine1": "addressLine1",
            "addressLine2": "addressLine2",
            "country": "US",
            "curCode": "USD",
            "dom": "dom",
            "email": "email",
            "fax": "fax",
            "firstName": "Demo",
            "lastName": "User 1",
            "language": "en",
            "phone": "123213",
            "reference": "ref",
            "timeZone": "time",
            "countrySubDivision": "sdpo",
            "employeeDepartment": "hr",
            "employeeNumber": "1245",
            "legalCountry": "US",
            "legalNo": "123",
            "legalType": "01",
            "correspondenceLanguage": "english",
        },
        "assignedRoleVOList": [
            {
                "id": 43,
                "name": "test_role_3",
                "description": "test_role_3",
                "target": "USER"
            }
        ],
        "presentation": {
            "AVAILABLE_CUSTOMER_USER_ROLES": [
                 {
                    "id": 41,
                    "name": "test_role_1",
                    "description": "test_role_1",
                    "target": "USER"
                },
                {
                    "id": 42,
                    "name": "test_role_2",
                    "description": "test_role_2",
                    "target": "USER"
                },
                {
                    "id": 43,
                    "name": "test_role_3",
                    "description": "test_role_3",
                    "target": "USER"
                },
                {
                    "id": 45,
                    "name": "test_role_4",
                    "description": "test_role_4",
                    "target": "USER"
                },
                {
                    "id": 46,
                    "name": "test_role_5",
                    "description": "test_role_5",
                    "target": "USER"
                },
                {
                    "id": 44,
                    "name": "test_role_6",
                    "description": "test_role_6",
                    "target": "USER"
                }
            ]
        }
    });
}

var apiEndPoints = [
    {
        method: 'POST',
        url: '/organization/bga/customer/user/selectbank',
        callback: selectBank
    },
    {
        method: 'POST',
        url: '/organization/bga/customer/user/selectcustomer/:id',
        callback: selectCustomer
    },
    {
        method: 'POST',
        url: '/organization/bga/customer/user/list/:id',
        callback: getUsers
    },
    {
        method: 'GET',
        url: '/organization/bga/customer/user/initiate',
        callback: initiateUser
    },
    {
        method: 'POST',
        url: '/organization/bga/customer/user/create',
        callback: sendSuccess
    },
    {
        method: 'GET',
        url: '/organization/bga/customer/user/edit/:id',
        callback: fetchUser
    },
    {
        method: 'GET',
        url: '/organization/bga/customer/user/view/:id',
        callback: fetchUser
    },
    {
        method: 'POST',
        url: '/organization/bga/customer/user/update',
        callback: sendSuccess
    },
    {
        method: 'POST',
        url: '/organization/bga/customer/user/delete',
        callback: sendSuccess
    }
];

module.exports = apiEndPoints;
