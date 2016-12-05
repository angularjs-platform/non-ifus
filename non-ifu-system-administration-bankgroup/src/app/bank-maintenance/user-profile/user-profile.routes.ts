import {IStateProvider, IFormDisplayState} from '@norn/non-framework';

const userProfileTpl: string = '<non-page-content-wrapper layout="column" title="USER_PROFILE_MAINTENANCE"><non-form configuration="vm.formConfiguration"></non-form></non-page-content-wrapper>';
const userProfileList: string = '<non-data-grid options="$resolve.listConfiguration" provider="vm"> </non-data-grid><md-button class="md-primary md-raised md-ink-ripple" ng-click="vm.add()" translate>ADD</md-button>';
const selectBankList: string = '<non-data-grid options="$resolve.listBankConfiguration" provider="vm"> </non-data-grid>';

export class UiRouterConfig {

    constructor (
        private $stateProvider: IStateProvider,
        private FormDisplayState: IFormDisplayState
    ) {
        'ngInject';

        $stateProvider
            .state('app.bga.bank-maintenance.user-profile', {
                abstract: true,
                ncyBreadcrumb: {
                    label: 'USER_PROFILE',
                    parent: 'app.bga.bank-maintenance'
                }
            })
            .state('app.bga.bank-maintenance.user-profile.initiate', {
                url: '/user/initiate',
                views: {
                    'content@app': {
                        template: userProfileTpl,
                        controller: 'BGABankUserProfileFormController',
                        controllerAs: 'vm',
                        resolve: {
                            formState: (): string => FormDisplayState.create
                        }
                    }
                },
                ncyBreadcrumb: {
                    label: 'CREATE_USER'
                }
            })
            .state('app.bga.bank-maintenance.user-profile.view', {
                url: '/user/view/:userId',
                views: {
                    'content@app': {
                        template: userProfileTpl,
                        controller: 'BGABankUserProfileFormController',
                        controllerAs: 'vm',
                        resolve: {
                            formState: (): string => FormDisplayState.view
                        }
                    }
                },
                ncyBreadcrumb: {
                    label: 'VIEW_USER'
                }
            })
            .state('app.bga.bank-maintenance.user-profile.update', {
                url: '/user/update/:userId',
                views: {
                    'content@app': {
                        template: userProfileTpl,
                        controller: 'BGABankUserProfileFormController',
                        controllerAs: 'vm',
                        resolve: {
                            formState: (): string =>  FormDisplayState.update
                        }
                    }
                },
                ncyBreadcrumb: {
                    label: 'UPDATE_USER'
                }
            })
            .state('app.bga.bank-maintenance.user-profile.select-bank', {
                url: '/user/selectbank',
                views: {
                    'content@app': {
                        template: selectBankList,
                        resolve: {
                            listBankConfiguration: this.getListBankConfiguration
                        },
                        controller: 'BGABankUserSelectBankListController',
                        controllerAs: 'vm'
                    }
                },
                ncyBreadcrumb: {
                    label: 'LIST_BANKS'
                }
            })
            .state('app.bga.bank-maintenance.user-profile.list', {
                url: '/user/list/:orgId',
                views: {
                    'content@app': {
                        template: userProfileList,
                        resolve: {
                            listConfiguration: this.getListConfiguration
                        },
                        controller: 'BGABankUserProfileListController',
                        controllerAs: 'vm'
                    }
                },
                ncyBreadcrumb: {
                    label: 'LIST_USERS'
                }
            });
    }

    private getListConfiguration = (BGABankUserProfileService: any, $stateParams: ng.ui.IStateParamsService): any => {
        'ngInject';

        return BGABankUserProfileService.listUsers($stateParams['orgId']);
    };

    private getListBankConfiguration = (BGABankUserProfileService: any): any => {
        'ngInject';

        return BGABankUserProfileService.listBanks();
    };
}
