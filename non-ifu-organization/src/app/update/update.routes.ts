export class UiRouterConfig {

    constructor (
        private $stateProvider: ng.ui.IStateProvider
    ) {
        'ngInject';

        $stateProvider
            .state('app.customerUpdate', {
                template: require('./update.tpl'),
                controller: 'UpdateCustomerController',
                controllerAs: 'updateCtrl',
                url: '/customer/update',
                params: {
                    orgId: null
                }
            });
    }
}
