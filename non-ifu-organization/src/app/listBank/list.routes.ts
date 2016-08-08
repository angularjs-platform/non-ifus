export class UiRouterConfig {

    constructor (
        private $stateProvider: ng.ui.IStateProvider
    ) {
        'ngInject';

        $stateProvider
            .state('app.bankList', {
                url: '/bank/list',
                views: {
                    'content@app': {
                        template: require('./list.tpl'),
                        controller: 'ListBankController',
                        controllerAs: 'listCtrl'
                    }
                }
            });
    }
}
