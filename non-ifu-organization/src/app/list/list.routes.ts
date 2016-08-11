export class UiRouterConfig {

    constructor (
        private $stateProvider: ng.ui.IStateProvider
    ) {
        'ngInject';

        $stateProvider
            .state('app.customerList', {
                url: '/customer/list',
                views: {
                    'content@app': {
                        template: require('./list.tpl'),
                        controller: 'ListCustomerController',
                        controllerAs: 'listCtrl'
                    }
                }
            });
    }
}
