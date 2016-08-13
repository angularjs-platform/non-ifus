function getLocalization(req, res, next) {
    res.json({
            ORGANIZATION: 'Organization',
            USERNAME: 'Username',
            PASSWORD: 'Password',
            LOGIN: 'Login'
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
