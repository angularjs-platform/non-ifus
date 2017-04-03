var baseURL = "/org/ca/customer/authorization";
var baseState = "app.ca.authorization-maintenance";

var flexiFormFieldsConfig = [
    {
        "fields": [
            {
                "name": "productCode",
                "values": [
                    { "name": "Fund Transfer", "value": "FT" },
                    { "name": "Letter of Credit", "value": "LC" },
                    { "name": "All", "value": "*" }
                ]
            }
        ]
    },
    {
        "productCode": "*",
        "fields": [
            {
                "name": "amount"
            }
        ]
    },
    {
        "productCode": "FT",
        "fields": [
            {
                "name": "subProductCode",
                "values": [
                    { "name": "Internal", "value": "INT" },
                    { "name": "Domestic", "value": "DOM" },
                    { "name": "MT103", "value": "MT103" }
                ]
            },
            {
                "name": "amount"
            }
        ]
    },
    {
        "productCode": "FT",
        "subProductCode": "INT",
        "fields": [
            {
                "name": "account"
            }
        ]
    },
    {
        "productCode": "LC",
        "fields": [
            {
                "name": "tnxTypeCode",
                "values": [
                    { "name": "New", "value": "01" },
                    { "name": "Amend", "value": "03" },
                    { "name": "Message", "value": "13" }
                ]
            }
        ]
    },
    {
        "productCode": "LC",
        "tnxTypeCode": ["01", "03"],
        "fields": [
            {
                "name": "amount"
            }
        ]
    }
];

function sendSuccess(req, res, next) {
    res.json({
        "success": "true"
    });
}

function create(req, res, next) {
    res.json({
        "authMatrixVO": {
            "id": null,
            "productCode": null,
            "subProductCode": null,
            "tnxTypeCode": null,
            "amount": null,
            "account": null
        },
        "presentation": {
            "flexiFormFieldsConfig": flexiFormFieldsConfig
        }
    });
}

function editHistory(req, res, next) {
    res.json({
        "authMatrixVO": {
            "id": 300,
            "productCode": "FT",
            "subProductCode": "DOM",
            "tnxTypeCode": null,
            "amount": "200",
            "account": null
        },
        "presentation": {
            "flexiFormFieldsConfig": flexiFormFieldsConfig
        }
    });
}

function viewHistory(req, res, next) {
    if (Number(req.params.id) > 3000) {
        res.json({
            "authMatrixVO": {
                "id": 300,
                "productCode": "FT",
                "subProductCode": "DOM",
                "tnxTypeCode": null,
                "amount": "200",
                "account": null
            },
            "state": "PENDING_INTERNAL",
            "presentation": {
                "flexiFormFieldsConfig": flexiFormFieldsConfig
            }
        });
    }
    else {
        res.json({
            "authMatrixVO": {
                "id": 300,
                "productCode": "FT",
                "subProductCode": "DOM",
                "tnxTypeCode": null,
                "amount": "200",
                "account": null
            },
            "presentation": {
                "flexiFormFieldsConfig": flexiFormFieldsConfig
            }
        });
    }
}

function check(req, res, next) {
    res.json({
        "authMatrixVO": {
            "id": 302,
            "productCode": "LC",
            "subProductCode": null,
            "tnxTypeCode": "13",
            "amount": null,
            "account": null
        },
        "presentation": {
            "flexiFormFieldsConfig": flexiFormFieldsConfig
        }
    });
}

function edit(req, res, next) {
    res.json({
        "authMatrixVO": {
            "id": 302,
            "productCode": "LC",
            "subProductCode": null,
            "tnxTypeCode": "13",
            "amount": null,
            "account": null
        },
        "presentation": {
            "flexiFormFieldsConfig": flexiFormFieldsConfig
        }
    });
}

function view(req, res, next) {
    res.json({
        "authMatrixVO": {
            "id": 302,
            "productCode": "LC",
            "subProductCode": null,
            "tnxTypeCode": "13",
            "amount": null,
            "account": null
        },
        "presentation": {
            "flexiFormFieldsConfig": flexiFormFieldsConfig
        }
    });
}

function inprepList(req, res, next) {
    res.json({
        "totalItems": "3",
        "columnDefs" : [
            {
                "name" : "productCode",
                "displayName" : "PRODUCT_CODE",
                "visible" : true,
                "type" : null,
                "options" : null
            },
            {
                "name" : "amount",
                "displayName" : "AMOUNT",
                "visible" : true,
                "type" : null,
                "options" : null
            },
            {
                "name" : "id",
                "displayName" : null,
                "visible" : false,
                "type" : null,
                "options" : null
            },
            {
                "name" : "Actions",
                "displayName" : "ACTIONS",
                "visible" : true,
                "type" : "button",
                "options" :
                [
                    {
                        "buttonLabel" : "EDIT",
                        "type" : "edit",
                        "stateConfig": {
                            "state": baseState + ".inprep.history-edit",
                            "param": "historyId",
                            "field": "id"
                        }
                    },
                    {
                        "buttonLabel" : "VIEW",
                        "type" : "view",
                        "stateConfig": {
                            "state": baseState + ".inprep.history-view",
                            "param": "historyId",
                            "field": "id"
                        }
                    }
                ]
            }
        ],
        "data" :
        [
            {
                "id": 301,
                "productCode": "LC",
                "subProductCode": null,
                "tnxTypeCode": "13",
                "amount": null,
                "account": null
            },
            {
                "id": 302,
                "productCode": "FT",
                "subProductCode": "DOM",
                "tnxTypeCode": null,
                "amount": "500",
                "account": null
            },
            {
                "id": 303,
                "productCode": "*",
                "subProductCode": null,
                "tnxTypeCode": null,
                "amount": "200",
                "account": null
            }
        ]
    });
}

function pendingList(req, res, next) {
    res.json({
        "totalItems": "3",
        "columnDefs" : [
            {
                "name" : "productCode",
                "displayName" : "PRODUCT_CODE",
                "visible" : true,
                "type" : null,
                "options" : null
            },
            {
                "name" : "amount",
                "displayName" : "AMOUNT",
                "visible" : true,
                "type" : null,
                "options" : null
            },
            {
                "name" : "Actions",
                "displayName" : "ACTIONS",
                "visible" : true,
                "type" : "button",
                "options" :
                [
                    {
                        "buttonLabel" : "CHECK",
                        "type" : "edit",
                        "stateConfig": {
                            "state": baseState + ".pending.history-check",
                            "param": "historyId",
                            "field": "id"
                        }
                    },
                    {
                        "buttonLabel" : "VIEW",
                        "type" : "view",
                        "stateConfig": {
                            "state": baseState + ".pending.history-view",
                            "param": "historyId",
                            "field": "id"
                        }
                    }
                ]
            }
        ],
        "data" :
        [
            {
                "id": 301,
                "productCode": "LC",
                "subProductCode": null,
                "tnxTypeCode": "13",
                "amount": null,
                "account": null
            },
            {
                "id": 302,
                "productCode": "FT",
                "subProductCode": "DOM",
                "tnxTypeCode": null,
                "amount": "500",
                "account": null
            },
            {
                "id": 303,
                "productCode": "*",
                "subProductCode": null,
                "tnxTypeCode": null,
                "amount": "200",
                "account": null
            }
        ]
    });
}

function masterList(req, res, next) {
    res.json({
        "totalItems": "3",
        "columnDefs" : [
            {
                "name" : "productCode",
                "displayName" : "PRODUCT_CODE",
                "visible" : true,
                "type" : null,
                "options" : null
            },
            {
                "name" : "amount",
                "displayName" : "AMOUNT",
                "visible" : true,
                "type" : null,
                "options" : null
            },
            {
                "name" : "id",
                "displayName" : null,
                "visible" : false,
                "type" : null,
                "options" : null
            },
            {
                "name" : "Actions",
                "displayName" : "ACTIONS",
                "visible" : true,
                "type" : "button",
                "options" :
                [
                    {
                        "buttonLabel" : "EDIT",
                        "type" : "edit",
                        "stateConfig": {
                            "state": baseState + ".master.edit",
                            "param": "id",
                            "field": "id"
                        }
                    },
                    {
                        "buttonLabel" : "VIEW",
                        "type" : "view",
                        "stateConfig": {
                            "state": baseState + ".master.view",
                            "param": "id",
                            "field": "id"
                        }
                    }
                ]
            }
        ],
        "data" :
        [
            {
                "id": 301,
                "productCode": "LC",
                "subProductCode": null,
                "tnxTypeCode": "13",
                "amount": null,
                "account": null
            },
            {
                "id": 302,
                "productCode": "FT",
                "subProductCode": "DOM",
                "tnxTypeCode": null,
                "amount": "500",
                "account": null
            },
            {
                "id": 303,
                "productCode": "*",
                "subProductCode": null,
                "tnxTypeCode": null,
                "amount": "200",
                "account": null
            }
        ]
    });
}

var apiEndPoints = [
    {
        method: "GET",
        url: baseURL + "/create",
        callback: create
    },
    {
        method: "GET",
        url: baseURL + "/history/edit/:id",
        callback: editHistory
    },
    {
        method: "GET",
        url: baseURL + "/history/view/:id",
        callback: viewHistory
    },
    {
        method: "GET",
        url: baseURL + "/history/check/:id",
        callback: check
    },
    {
        method: "GET",
        url: baseURL + "/edit/:id",
        callback: edit
    },
    {
        method: "GET",
        url: baseURL + "/view/:id",
        callback: view
    },
    {
        method: "POST",
        url: baseURL + "/inprep/list",
        callback: inprepList
    },
    {
        method: "POST",
        url: baseURL + "/pending/list",
        callback: pendingList
    },
    {
        method: "POST",
        url: baseURL + "/master/list",
        callback: masterList
    },
    {
        method: "POST",
        url: baseURL + "/create-draft",
        callback: sendSuccess
    },
    {
        method: "POST",
        url: baseURL + "/create-submit",
        callback: sendSuccess
    },
    {
        method: "POST",
        url: baseURL + "/history/discard",
        callback: sendSuccess
    },
    {
        method: "POST",
        url: baseURL + "/approve",
        callback: sendSuccess
    },
    {
        method: "POST",
        url: baseURL + "/reject",
        callback: sendSuccess
    },
    {
        method: "POST",
        url: baseURL + "/return",
        callback: sendSuccess
    },
    {
        method: "POST",
        url: baseURL + "/delete",
        callback: sendSuccess
    },
    {
        method: "POST",
        url: baseURL + "/update-draft",
        callback: sendSuccess
    },
    {
        method: "POST",
        url: baseURL + "/update-submit",
        callback: sendSuccess
    }
];

module.exports = apiEndPoints;
