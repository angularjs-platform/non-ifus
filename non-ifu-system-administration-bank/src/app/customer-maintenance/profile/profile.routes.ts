import {IStateProvider, IFormDisplayState, IDataGridService} from '@norn/non-framework';
import {IEntityManagementService} from '@norn/non-shared-system-administration';

const profileTpl: string = '<non-page-content-wrapper layout="column" title="CUSTOMER_PROFILE_MAINTENANCE"><non-form configuration="vm.formConfiguration"></non-form></non-page-content-wrapper>';
const profileList: string = '<non-data-grid source="$resolve.source" provider="vm"> </non-data-grid>';

export class UiRouterConfig {

    constructor (
        private $stateProvider: IStateProvider,
        private FormDisplayState: IFormDisplayState
    ) {
        'ngInject';

        $stateProvider
            .state('app.ba.customer-maintenance.profile', {
                abstract: true,
                ncyBreadcrumb: {
                    label: 'CUSTOMER_PROFILE',
                    parent: 'app.ba.customer-maintenance'
                }
            })
            .state('app.ba.customer-maintenance.profile.initiate', {
                url: '/initiate',
                views: {
                    'content@app': {
                        template: profileTpl,
                        controller: 'BACustomerProfileFormController',
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
            .state('app.ba.customer-maintenance.profile.view', {
                url: '/view/:orgId',
                views: {
                    'content@app': {
                        template: profileTpl,
                        controller: 'BACustomerProfileFormController',
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
            .state('app.ba.customer-maintenance.profile.update', {
                url: '/update/:orgId',
                views: {
                    'content@app': {
                        template: profileTpl,
                        controller: 'BACustomerProfileFormController',
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
            .state('app.ba.customer-maintenance.profile.list', {
                url: '/list',
                views: {
                    'content@app': {
                        template: profileList,
                        resolve: {
                            source: this.getListSource
                        },
                        controller: 'BACustomerProfileListController',
                        controllerAs: 'vm'
                    }
                },
                ncyBreadcrumb: {
                    label: 'LIST_CUSTOMERS'
                }
            });
    }

    private getListSource = (
        BACustomerProfileService: IEntityManagementService,
        DataGridService: IDataGridService): any => {
        'ngInject';

        return DataGridService.getDataSourceObject(BACustomerProfileService.getListUrl());
    };
}
