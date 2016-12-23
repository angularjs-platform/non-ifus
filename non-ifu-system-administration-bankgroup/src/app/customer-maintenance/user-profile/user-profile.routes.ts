import {IStateProvider, IFormDisplayState, IDataGridService} from '@norn/non-framework';

const userProfileTpl: string = '<non-page-content-wrapper layout="column" title="USER_PROFILE_MAINTENANCE"><non-form configuration="vm.formConfiguration"></non-form></non-page-content-wrapper>';
const userProfileList: string = '<non-data-grid source="$resolve.source" provider="vm"> </non-data-grid><md-button class="md-primary md-raised md-ink-ripple" ng-click="vm.add()" translate>ADD</md-button>';
const selectCustomerList: string = '<non-data-grid source="$resolve.source" provider="vm"> </non-data-grid>';
const selectBankList: string = '<non-data-grid source="$resolve.source" provider="vm"> </non-data-grid>';

export class UiRouterConfig {

    constructor (
        private $stateProvider: IStateProvider,
        private FormDisplayState: IFormDisplayState
    ) {
        'ngInject';

        $stateProvider
            .state('app.bga.customer-maintenance.user-profile', {
                abstract: true,
                ncyBreadcrumb: {
                    label: 'USER_PROFILE',
                    parent: 'app.bga.customer-maintenance'
                }
            })
            .state('app.bga.customer-maintenance.user-profile.initiate', {
                url: '/user/initiate',
                views: {
                    'content@app': {
                        template: userProfileTpl,
                        controller: 'BGACustomerUserProfileFormController',
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
            .state('app.bga.customer-maintenance.user-profile.view', {
                url: '/user/view/:userId',
                views: {
                    'content@app': {
                        template: userProfileTpl,
                        controller: 'BGACustomerUserProfileFormController',
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
            .state('app.bga.customer-maintenance.user-profile.update', {
                url: '/user/update/:userId',
                views: {
                    'content@app': {
                        template: userProfileTpl,
                        controller: 'BGACustomerUserProfileFormController',
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
            .state('app.bga.customer-maintenance.user-profile.select-bank', {
                url: '/user/selectbank',
                views: {
                    'content@app': {
                        template: selectBankList,
                        resolve: {
                            source: this.getListBankSource
                        },
                        controller: 'BGACustomerUserSelectBankListController',
                        controllerAs: 'vm'
                    }
                },
                ncyBreadcrumb: {
                    label: 'LIST_BANKS'
                }
            })
            .state('app.bga.customer-maintenance.user-profile.select-customer', {
                url: '/user/selectcustomer/:orgId',
                views: {
                    'content@app': {
                        template: selectCustomerList,
                        resolve: {
                            source: this.getListCustomerSource
                        },
                        controller: 'BGACustomerUserSelectCustomerListController',
                        controllerAs: 'vm'
                    }
                },
                ncyBreadcrumb: {
                    label: 'LIST_CUSTOMERS'
                }
            })
            .state('app.bga.customer-maintenance.user-profile.list', {
                url: '/user/list/:orgId',
                views: {
                    'content@app': {
                        template: userProfileList,
                        resolve: {
                            source: this.getListSource
                        },
                        controller: 'BGACustomerUserProfileListController',
                        controllerAs: 'vm'
                    }
                },
                ncyBreadcrumb: {
                    label: 'LIST_USERS'
                }
            });
    }

    private getListSource = (
        BGACustomerUserProfileService: any,
        DataGridService: IDataGridService,
        $stateParams: ng.ui.IStateParamsService): any => {
        'ngInject';

        return DataGridService.getDataSourceObject(BGACustomerUserProfileService.getListUsersUrl($stateParams['orgId']));
    };

    private getListCustomerSource = (
        BGACustomerUserProfileService: any,
        DataGridService: IDataGridService,
        $stateParams: ng.ui.IStateParamsService): any => {
        'ngInject';

        return DataGridService.getDataSourceObject(BGACustomerUserProfileService.getListCustomersUrl($stateParams['orgId']));
    };

    private getListBankSource = (
        BGACustomerUserProfileService: any,
        DataGridService: IDataGridService): any => {
        'ngInject';

        return DataGridService.getDataSourceObject(BGACustomerUserProfileService.getListBanksUrl());
    };
}
