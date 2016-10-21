export class UiRouterConfig {

    constructor (
        private $stateProvider: ng.ui.IStateProvider
    ) {
        'ngInject';

        $stateProvider
            .state('app.customerList', {
                template: require('./list.tpl'),
                controller: 'ListCustomerController',
                controllerAs: 'listCtrl',
                url: '/customer/list'
            });
    }
}
