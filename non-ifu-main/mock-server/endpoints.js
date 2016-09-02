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
            RELOAD: 'Reload',
            ORGNAME: 'Organization Name',
            BEI: 'BEI',
            ACTIONS: 'Actions',
            EDIT: 'Edit',
            LISTOFCUSTOMERS: 'List Of Customers',
            LISTOFBANKS: 'List of Banks',
            FIELD_REQUIRED: 'Value Is Required!',
            FIELD_MAX_LENGTH_EXCEEDED: 'Maximum Length Exceeded!',
            FIELD_MAX_VALUE_NEEDED: 'Maximum Value Exceeded!',
            FIELD_NOT_EMAIL: 'Invalid Email!',
            FIELD_NOT_URL: 'Invalid URL!',
            FIELD_MIN_LENGTH_NEEDED: 'Minimum Length Not Reached!',
            FIELD_MIN_VALUE_NEEDED: 'Minimum Value Not reached!',
            THEME: 'Theme',
            DEFAULT: 'Default',
            CUSTOM: 'Custom',
            BANK_ABBV_NAME: 'Bank Abbrivated Name',
            BANK_NAME: 'Bank Name',
            ADDRESS_1: 'Address 1',
            ADDRESS_2: 'Address 2',
            DOM: 'Dom',
            BASE_CURRENCY: 'Base Currency',
            CONTACT_NAME: 'Contact Name',
            COUNTRY: 'Country',
            EMAIL: 'Email',
            FAX: 'Fax',
            REFERENCE: 'Reference',
            PHONE: 'Phone',
            TELEX: 'Telex',
            WEB_ADDRESS: 'Web Address',
            STREET_NAME: 'Street Name',
            POSTAL_CODE: 'Post Code',
            TOWN_NAME: 'Town Name',
            COUNTRY_SUB_DIVISION: 'Country Sub Division',
            STATUS: 'Status',
            ISO_CODE: 'ISO Code',
            SAVE: 'Save'
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
