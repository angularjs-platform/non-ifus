function getLocalization(req, res, next) {
    res.json({
            ORGANIZATION: 'Organization',
            USERNAME: 'Username',
            PASSWORD: 'Password',
            LOGIN: 'Login',
            FIELD_REQUIRED: 'Field Is Required!',
            FIELD_MAX_LENGTH_EXCEEDED: 'Field Maximum Length Exceeded!'
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
