export class UiRouterConfig {

    constructor (
        private $stateProvider: ng.ui.IStateProvider
    ) {
        'ngInject';

        $stateProvider
            .state('app.bankUpdate', {
                template: require('./update.tpl'),
                controller: 'UpdateBankController',
                controllerAs: 'updateCtrl',
                url: '/bank/update',
                params: {
                    orgId: null
                }
            });
    }
}
