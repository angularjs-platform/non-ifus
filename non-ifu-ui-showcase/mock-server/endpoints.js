function getLocalization(req, res, next) {
    res.json({
            FIELD_REQUIRED: 'Value Is Required!',
            FIELD_MAX_LENGTH_EXCEEDED: 'Maximum Length Exceeded!',
            FIELD_MAX_VALUE_NEEDED: 'Maximum Value Exceeded!',
            FIELD_NOT_EMAIL: 'Invalid Email!',
            FIELD_NOT_URL: 'Invalid URL!',
            FIELD_MIN_LENGTH_NEEDED: 'Minimum Length Not Reached!',
            FIELD_MIN_VALUE_NEEDED: 'Minimum Value Not reached!',
            FIELD_MAX_LENGTH_EXCEEDED_VARIABLE: '{{value}} should be less than Maxlength {{maxlength}}!'
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
