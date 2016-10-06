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
                        template: require('./bank-cru.tpl'),
                        controller: 'CRUBankController',
                        controllerAs: 'vm',
                        resolve: {
                            formState: (): string => 'create'
                        }
                    }
                }
            })
            .state('app.bankView', {
                url: '/bank/view/:orgId',
                views: {
                    'content@app': {
                        template: require('./bank-cru.tpl'),
                        controller: 'CRUBankController',
                        controllerAs: 'vm',
                        resolve: {
                            formState: (): string => 'view'
                        }
                    }
                }
            })
            .state('app.bankUpdate', {
                url: '/bank/update/:orgId',
                views: {
                    'content@app': {
                        template: require('./bank-cru.tpl'),
                        controller: 'CRUBankController',
                        controllerAs: 'vm',
                        resolve: {
                            formState: (): string =>  'update'
                        }
                    }
                }
            });
    }
}
