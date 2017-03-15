import { IStateProvider, IMenuService } from '@norn/non-framework';
import { IWorkflowManagementRoutesProvider } from '@norn/non-shared-common';

const baseURL: string = '/org/ba/bank/user';
const baseState: string = 'app.ba.user-maintenance';
const parentState: string = null;
const abstractStateURL: string = null;
const abstractStateBreadCrumbLabel: string = null;
const formController: string = 'BABankUserProfileFormController';
const enableCreate: boolean = true;
const formTemplate: string = '<non-page-content-wrapper layout="column" title="HEADER.USER_MAINTENANCE" flex><non-form configuration="vm.formConfiguration"></non-form></non-page-content-wrapper>';
const listTemplate: string = '<non-data-grid source="$resolve.source" title="HEADER.USER_MAINTENANCE" layout="column" flex></non-data-grid>';

export class UiRouterConfig {

    constructor (
        private $stateProvider: IStateProvider,
        private WorkflowManagementRoutesProvider: IWorkflowManagementRoutesProvider
    ) {
        'ngInject';

        $stateProvider
            .state(baseState, {
                url: baseURL,
                onEnter: this.loadSecondaryMenu,
                views: {
                    'content@app': {
                        template: require('./user-maintenance.tpl')
                    }
                },
                ncyBreadcrumb: {
                    label: 'BREADCRUMB.USER_MAINTENANCE'
                }
            });

         this.WorkflowManagementRoutesProvider.setupRoutes(baseURL, baseState, abstractStateBreadCrumbLabel,
            parentState, abstractStateURL, formTemplate, formController, listTemplate, enableCreate);
    }

    private loadSecondaryMenu = (MenuService: IMenuService): any => {
        'ngInject';

        MenuService.setSecondaryMenuListID('ba-bank-maintenance-user-maintenance-ref');
    }
}
