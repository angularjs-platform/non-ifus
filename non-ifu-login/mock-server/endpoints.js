function getLocalization(req, res, next) {
    res.json({
            ORGANIZATION_ID: 'Organization ID',
            USER_ID: 'User ID',
            PASSWORD: 'Password',
            LOGIN: 'Login',
            FIELD_REQUIRED: 'Value Is Required!',
            FIELD_MAX_LENGTH_EXCEEDED: 'Maximum Length Exceeded!'
        });
}

var apiEndpoints = {
    mainUrl: '',
    routes: [{
        method: 'GET',
        url: '/locale/login',
        callback: getLocalization
    }]
};

module.exports = apiEndpoints;
