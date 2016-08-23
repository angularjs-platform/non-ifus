export class UiRouterConfig {

    constructor (
        private $stateProvider: ng.ui.IStateProvider
    ) {
        'ngInject';

        $stateProvider
            .state('app.bankUpdate', {
                url: '/bank/update',
                params: {
                    orgId: null
                },
                views: {
                    'content@app': {
                        template: require('./update.tpl'),
                        controller: 'UpdateBankController',
                        controllerAs: 'updateCtrl'
                    }
                }
            });
    }
}
