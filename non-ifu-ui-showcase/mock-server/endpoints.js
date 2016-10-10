function getLocalization(req, res, next) {
    res.json({
            FIELD_REQUIRED: 'Value Is Required!',
            FIELD_MAX_LENGTH_EXCEEDED: 'Maximum Length Exceeded!',
            FIELD_MAX_VALUE_EXCEEDED: 'Maximum Value Exceeded!',
            FIELD_NOT_EMAIL: 'Invalid Email!',
            FIELD_NOT_URL: 'Invalid URL!',
            FIELD_MIN_LENGTH_NEEDED: 'Minimum Length Not Reached!',
            FIELD_MIN_VALUE_NEEDED: 'Minimum Value Not reached!',
            FIELD_MAX_LENGTH_EXCEEDED_VARIABLE: '{{value}} should be less than Maxlength {{maxlength}}!',
            FIELD_WITH_TRANSLATION: 'Field With Translation',
            FIELD_NOT_DATE: "The entered value is not a date!",
            FIELD_MIN_DATE_NEEDED: "Date is too early!",
            FIELD_MAX_DATE_EXCEEDED: "Date is too late!"
        });
}

var apiEndpoints = {
    mainUrl: '',
    routes: [{
        method: 'GET',
        url: '/locale/showcase',
        callback: getLocalization
    }]
};

module.exports = apiEndpoints;
