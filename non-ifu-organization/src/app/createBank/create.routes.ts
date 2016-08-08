export class UiRouterConfig {

    constructor (
        private $stateProvider: ng.ui.IStateProvider
    ) {
        'ngInject';

        $stateProvider
            .state('app.bankCreate', {
                url: '/bank/create',
                views: {
                    'content@app': {
                        template: require('./create.tpl'),
                        controller: 'CreateBankController',
                        controllerAs: 'createCtrl'
                    }
                }
            });
    }
}
