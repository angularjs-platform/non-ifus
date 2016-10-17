import { IFormDisplayState } from '@norn/non-framework';

export class UiRouterConfig {

    constructor (
        private $stateProvider: ng.ui.IStateProvider,
        private FormDisplayState: IFormDisplayState
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
                            formState: (): string => FormDisplayState.create
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
                            formState: (): string => FormDisplayState.view
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
                            formState: (): string =>  FormDisplayState.update
                        }
                    }
                }
            });
    }
}
