import { IFormDisplayState } from '@norn/non-framework';

export class UiRouterConfig {

    constructor (
        private $stateProvider: ng.ui.IStateProvider,
        private FormDisplayState: IFormDisplayState
    ) {
        'ngInject';

        $stateProvider
            .state('app.bankGroupUserCreate', {
                url: '/bankgroup/user/create',
                views: {
                    'content@app': {
                        template: require('./user-cru.tpl'),
                        controller: 'CRUBankGroupUserController',
                        controllerAs: 'vm',
                        resolve: {
                            formState: (): string => FormDisplayState.create
                        }
                    }
                }
            })
            .state('app.bankGroupUserView', {
                url: '/bankgroup/user/view/:userId',
                views: {
                    'content@app': {
                        template: require('./user-cru.tpl'),
                        controller: 'CRUBankGroupUserController',
                        controllerAs: 'vm',
                        resolve: {
                            formState: (): string => FormDisplayState.view
                        }
                    }
                }
            })
            .state('app.bankGroupUserUpdate', {
                url: '/bankgroup/user/update/:userId',
                views: {
                    'content@app': {
                        template: require('./user-cru.tpl'),
                        controller: 'CRUBankGroupUserController',
                        controllerAs: 'vm',
                        resolve: {
                            formState: (): string =>  FormDisplayState.update
                        }
                    }
                }
            });
    }
}
