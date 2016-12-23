import {IStateProvider, IFormDisplayState, IDataGridService} from '@norn/non-framework';

const profileTpl: string = '<non-page-content-wrapper layout="column" title="CUSTOMER_PROFILE_MAINTENANCE"><non-form configuration="vm.formConfiguration"></non-form></non-page-content-wrapper>';
const profileList: string = '<non-data-grid source="$resolve.source" provider="vm"> </non-data-grid><md-button class="md-primary md-raised md-ink-ripple" ng-click="vm.add()" translate>ADD</md-button>';
const selectBankList: string = '<non-data-grid source="$resolve.source" provider="vm"> </non-data-grid>';

export class UiRouterConfig {

    constructor (
        private $stateProvider: IStateProvider,
        private FormDisplayState: IFormDisplayState
    ) {
        'ngInject';

        $stateProvider
            .state('app.bga.customer-maintenance.profile', {
                abstract: true,
                ncyBreadcrumb: {
                    label: 'CUSTOMER_PROFILE',
                    parent: 'app.bga.customer-maintenance'
                }
            })
            .state('app.bga.customer-maintenance.profile.initiate', {
                url: '/initiate',
                views: {
                    'content@app': {
                        template: profileTpl,
                        controller: 'BGACustomerProfileFormController',
                        controllerAs: 'vm',
                        resolve: {
                            formState: (): string => FormDisplayState.create
                        }
                    }
                },
                ncyBreadcrumb: {
                    label: 'CREATE_CUSTOMER'
                }
            })
            .state('app.bga.customer-maintenance.profile.view', {
                url: '/view/:orgId',
                views: {
                    'content@app': {
                        template: profileTpl,
                        controller: 'BGACustomerProfileFormController',
                        controllerAs: 'vm',
                        resolve: {
                            formState: (): string => FormDisplayState.view
                        }
                    }
                },
                ncyBreadcrumb: {
                    label: 'VIEW_CUSTOMER'
                }
            })
            .state('app.bga.customer-maintenance.profile.update', {
                url: '/update/:orgId',
                views: {
                    'content@app': {
                        template: profileTpl,
                        controller: 'BGACustomerProfileFormController',
                        controllerAs: 'vm',
                        resolve: {
                            formState: (): string =>  FormDisplayState.update
                        }
                    }
                },
                ncyBreadcrumb: {
                    label: 'UPDATE_CUSTOMER'
                }
            })
            .state('app.bga.customer-maintenance.profile.select-bank', {
                url: '/selectbank',
                views: {
                    'content@app': {
                        template: selectBankList,
                        resolve: {
                            source: this.getListBankSource
                        },
                        controller: 'BGACustomerSelectBankListController',
                        controllerAs: 'vm'
                    }
                },
                ncyBreadcrumb: {
                    label: 'LIST_BANKS'
                }
            })
            .state('app.bga.customer-maintenance.profile.list', {
                url: '/list/:orgId',
                views: {
                    'content@app': {
                        template: profileList,
                        resolve: {
                            source: this.getListSource
                        },
                        controller: 'BGACustomerProfileListController',
                        controllerAs: 'vm'
                    }
                },
                ncyBreadcrumb: {
                    label: 'LIST_CUSTOMERS'
                }
            });
    }

    private getListBankSource = (
        BGACustomerProfileService: any,
        DataGridService: IDataGridService): any => {
        'ngInject';

        return DataGridService.getDataSourceObject(BGACustomerProfileService.getListBanksUrl());
    };

    private getListSource = (
        BGACustomerProfileService: any,
        DataGridService: IDataGridService,
        $stateParams: ng.ui.IStateParamsService): any => {
        'ngInject';

        return DataGridService.getDataSourceObject(BGACustomerProfileService.getListCustomersUrl($stateParams['orgId']));
    };
}
