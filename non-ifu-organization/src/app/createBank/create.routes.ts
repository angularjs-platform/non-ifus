export class UiRouterConfig {

    constructor (
        private $stateProvider: ng.ui.IStateProvider
    ) {
        'ngInject';

        $stateProvider
            .state('app.bankCreate', {
                template: require('./create.tpl'),
                controller: 'CreateBankController',
                controllerAs: 'createCtrl',
                url: '/bank/create'
            });
    }
}
