import {IStateProvider, IFormDisplayState} from '@norn/non-framework';
import {IEntityManagementService} from '@norn/non-shared-system-administration';

const profileTpl: string = '<non-page-content-wrapper layout="column" title="BANK_PROFILE_MAINTENANCE"><non-form configuration="vm.formConfiguration"></non-form></non-page-content-wrapper>';
const profileList: string = '<non-data-grid options="$resolve.listConfiguration" provider="vm"> </non-data-grid>';

export class UiRouterConfig {

    constructor (
        private $stateProvider: IStateProvider,
        private FormDisplayState: IFormDisplayState
    ) {
        'ngInject';

        $stateProvider
            .state('app.bga.bank-maintenance.profile', {
                abstract: true,
                ncyBreadcrumb: {
                    label: 'BANK_PROFILE',
                    parent: 'app.bga.bank-maintenance'
                }
            })
            .state('app.bga.bank-maintenance.profile.initiate', {
                url: '/initiate',
                views: {
                    'content@app': {
                        template: profileTpl,
                        controller: 'BGABankProfileFormController',
                        controllerAs: 'vm',
                        resolve: {
                            formState: (): string => FormDisplayState.create
                        }
                    }
                },
                ncyBreadcrumb: {
                    label: 'CREATE_BANK'
                }
            })
            .state('app.bga.bank-maintenance.profile.view', {
                url: '/view/:orgId',
                views: {
                    'content@app': {
                        template: profileTpl,
                        controller: 'BGABankProfileFormController',
                        controllerAs: 'vm',
                        resolve: {
                            formState: (): string => FormDisplayState.view
                        }
                    }
                },
                ncyBreadcrumb: {
                    label: 'VIEW_BANK'
                }
            })
            .state('app.bga.bank-maintenance.profile.update', {
                url: '/update/:orgId',
                views: {
                    'content@app': {
                        template: profileTpl,
                        controller: 'BGABankProfileFormController',
                        controllerAs: 'vm',
                        resolve: {
                            formState: (): string =>  FormDisplayState.update
                        }
                    }
                },
                ncyBreadcrumb: {
                    label: 'UPDATE_BANK'
                }
            })
            .state('app.bga.bank-maintenance.profile.list', {
                url: '/list',
                views: {
                    'content@app': {
                        template: profileList,
                        resolve: {
                            listConfiguration: this.getListConfiguration
                        },
                        controller: 'BGABankProfileListController',
                        controllerAs: 'vm'
                    }
                },
                ncyBreadcrumb: {
                    label: 'LIST_BANKS'
                }
            });
    }

    private getListConfiguration = (BGABankProfileService: IEntityManagementService): any => {
        'ngInject';

        return BGABankProfileService.list();
    };
}
