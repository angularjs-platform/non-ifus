import {IStateProvider, IFormDisplayState, IDataGridService} from '@norn/non-framework';
import {IEntityManagementService} from '@norn/non-shared-system-administration';

const userProfileTpl: string = '<non-page-content-wrapper layout="column" title="USER_PROFILE_MAINTENANCE"><non-form configuration="vm.formConfiguration"></non-form></non-page-content-wrapper>';
const userProfileList: string = '<non-data-grid source="$resolve.source"> </non-data-grid>';

export class UiRouterConfig {

    constructor (
        private $stateProvider: IStateProvider,
        private FormDisplayState: IFormDisplayState
    ) {
        'ngInject';

        $stateProvider
            .state('app.ba.bank-maintenance.user-profile', {
                abstract: true,
                ncyBreadcrumb: {
                    label: 'USER_PROFILE',
                    parent: 'app.ba.bank-maintenance'
                }
            })
            .state('app.ba.bank-maintenance.user-profile.initiate', {
                url: '/user/initiate',
                views: {
                    'content@app': {
                        template: userProfileTpl,
                        controller: 'BABankUserProfileFormController',
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
            .state('app.ba.bank-maintenance.user-profile.view', {
                url: '/user/view/:userId',
                views: {
                    'content@app': {
                        template: userProfileTpl,
                        controller: 'BABankUserProfileFormController',
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
            .state('app.ba.bank-maintenance.user-profile.update', {
                url: '/user/update/:userId',
                views: {
                    'content@app': {
                        template: userProfileTpl,
                        controller: 'BABankUserProfileFormController',
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
            .state('app.ba.bank-maintenance.user-profile.list', {
                url: '/user/list',
                views: {
                    'content@app': {
                        template: userProfileList,
                        resolve: {
                            source: this.getListSource
                        }
                    }
                },
                ncyBreadcrumb: {
                    label: 'LIST_USERS'
                }
            });
    }

    private getListSource = (
        BABankUserProfileService: IEntityManagementService,
        DataGridService: IDataGridService): any => {
        'ngInject';

        return DataGridService.getDataSourceObject(BABankUserProfileService.getListUrl());
    };
}
