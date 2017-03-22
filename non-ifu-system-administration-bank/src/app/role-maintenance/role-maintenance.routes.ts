import { IStateProvider, IMenuService } from '@norn/non-framework';
import { IWorkflowManagementRoutesProvider } from '@norn/non-shared-common';

const baseURL: string = '/org/ba/bank/role';
const baseState: string = 'app.ba.role-maintenance';
const parentState: string = null;
const abstractStateURL: string = null;
const abstractStateBreadCrumbLabel: string = null;
const formController: string = 'BABankRoleFormController';
const enableCreate: boolean = false;
const formTemplate: string = '<non-page-content-wrapper layout="column" title="HEADER.ROLE_MAINTENANCE" flex><non-form configuration="vm.formConfiguration"></non-form></non-page-content-wrapper>';
const listTemplate: string = '<non-data-grid source="$resolve.source" title="HEADER.ROLE_MAINTENANCE" layout="column" flex></non-data-grid>';

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
                        template: require('./role-maintenance.tpl')
                    }
                },
                ncyBreadcrumb: {
                    label: 'BREADCRUMB.ROLE_MAINTENANCE'
                }
            });

        this.WorkflowManagementRoutesProvider.setupRoutes(baseURL, baseState, abstractStateBreadCrumbLabel,
            parentState, abstractStateURL, formTemplate, formController, listTemplate, enableCreate);
    }

    private loadSecondaryMenu = (MenuService: IMenuService): any => {
        'ngInject';

        MenuService.setSecondaryMenuListID('ba-bank-maintenance-role-maintenance-ref');
    }
}
