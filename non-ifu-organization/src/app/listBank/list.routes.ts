export class UiRouterConfig {

    constructor (
        private $stateProvider: ng.ui.IStateProvider
    ) {
        'ngInject';

        $stateProvider
            .state('app.bankList', {
                template: require('./list.tpl'),
                controller: 'ListBankController',
                controllerAs: 'listCtrl',
                url: '/bank/list'
            });
    }
}
