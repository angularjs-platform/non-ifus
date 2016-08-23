export class UiRouterConfig {

    constructor (
        private $stateProvider: ng.ui.IStateProvider
    ) {
        'ngInject';

        $stateProvider
            .state('app.customerUpdate', {
                url: '/customer/update',
                params: {
                    orgId: null
                },
                views: {
                    'content@app': {
                        template: require('./update.tpl'),
                        controller: 'UpdateCustomerController',
                        controllerAs: 'updateCtrl'
                    }
                }
            });
    }
}
