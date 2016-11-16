function sendSuccess(req, res, next) {
    res.json({
        'success': 'true'
    });
}

function getUsers(req, res, next) {
    res.json({
        "title" : "LISTOFUSERS",
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
                "orgName" : "TESTUSER",
                "name" : "Test USER",
                "id" : 1050
            },
            {
                "orgName" : "TESTUSER1",
                "name" : "Test USER1",
                "id" : 1051
            },
            {
                "orgName" : "TESTUSER2",
                "name" : "Test USER1",
                "id" : 1052
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
            "AVAILABLE_BANK_GROUP_USER_ROLES": [
                {
                    "id": 41,
                    "name": "ba_customer_profile_read",
                    "description": "ba_customer_profile_read",
                    "target": "USER"
                },
                {
                    "id": 42,
                    "name": "ba_customer_profile_update",
                    "description": "ba_customer_profile_update",
                    "target": "USER"
                },
                {
                    "id": 43,
                    "name": "ba_customer_profile_draft_update",
                    "description": "ba_customer_profile_draft_update",
                    "target": "USER"
                },
                {
                    "id": 45,
                    "name": "ba_customer_profile_draft_create",
                    "description": "ba_customer_profile_draft_create",
                    "target": "USER"
                },
                {
                    "id": 46,
                    "name": "ba_customer_profile_delete",
                    "description": "ba_customer_profile_delete",
                    "target": "USER"
                },
                {
                    "id": 44,
                    "name": "ba_customer_profile_create",
                    "description": "ba_customer_profile_create",
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
            "userName": "Name",
            "password": "password",
            "status": "A",
            "addressLine1": "addressLine1",
            "addressLine2": "addressLine2",
            "country": "US",
            "curCode": "USD",
            "dom": "dom",
            "email": "email",
            "fax": "fax",
            "firstName": "first",
            "lastName": "last",
            "language": "english",
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
                "name": "ba_customer_profile_draft_update",
                "description": "ba_customer_profile_draft_update",
                "target": "USER"
            }
        ],
        "presentation": {
            "AVAILABLE_BANK_GROUP_USER_ROLES": [
                 {
                    "id": 42,
                    "name": "ba_customer_profile_update",
                    "description": "ba_customer_profile_update",
                    "target": "USER"
                },
                {
                    "id": 45,
                    "name": "ba_customer_profile_draft_create",
                    "description": "ba_customer_profile_draft_create",
                    "target": "USER"
                },
                {
                    "id": 46,
                    "name": "ba_customer_profile_delete",
                    "description": "ba_customer_profile_delete",
                    "target": "USER"
                },
                {
                    "id": 44,
                    "name": "ba_customer_profile_create",
                    "description": "ba_customer_profile_create",
                    "target": "USER"
                }
            ]
        }
    });
}

var apiEndPoints = [
    {
        method: 'GET',
        url: '/organization/bga/bankgroup/user/list',
        callback: getUsers
    },
    {
        method: 'GET',
        url: '/organization/bga/bankgroup/user/initiate',
        callback: initiateUser
    },
    {
        method: 'POST',
        url: '/organization/bga/bankgroup/user/create',
        callback: sendSuccess
    },
    {
        method: 'GET',
        url: '/organization/bga/bankgroup/user/edit/:id',
        callback: fetchUser
    },
    {
        method: 'GET',
        url: '/organization/bga/bankgroup/user/view/:id',
        callback: fetchUser
    },
    {
        method: 'POST',
        url: '/organization/bga/bankgroup/user/update',
        callback: sendSuccess
    },
    {
        method: 'POST',
        url: '/organization/bga/bankgroup/user/delete',
        callback: sendSuccess
    }
];

module.exports = apiEndPoints;
