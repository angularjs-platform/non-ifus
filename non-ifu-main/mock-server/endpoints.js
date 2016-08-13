function getLocalization(req, res, next) {
    res.json({
            MY_PROFILE: 'My Profile',
            LANGUAGE: 'Language',
            LANGUAGE_ENGLISH: 'English',
            LANGUAGE_FRENCH: 'French',
            LANGUAGE_GERMAN: 'German',
            LANGUAGE_SPANISH: 'Spanish',
            LOGOUT: 'Logout',
            TAB_HEADER_NOTIFICATIONS: 'Notifications',
            TAB_HEADER_BOOKMARKS: 'Bookmarks',
            TAB_HEADER_SETTINGS: 'Settings',
            PRIMARY_LAYOUT_STYLE: 'Primary Layout Style',
            VERTICAL_NAVIGATION: 'Vertical Navigation',
            HORIZONTAL_NAVIGATION: 'Horizontal Navigation',
            CONTENT_WITH_TOOLBAR: 'Content with Toolbar',
            CONTENT_ONLY: 'Content Only',
            SECONDARY_LAYOUT_STYLE: 'Secondary Layout Style',
            RELOAD: 'Reload'
        });
}

var apiEndpoints = {
    mainUrl: '',
    routes: [{
        method: 'GET',
        url: '/locale/all',
        callback: getLocalization
    }]
};

module.exports = apiEndpoints;
