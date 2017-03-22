import { IStateProvider, IMenuService } from '@norn/non-framework';
import { IWorkflowManagementRoutesProvider } from '@norn/non-shared-common';

const baseURL: string = '/org/ca/customer/authorization';
const baseState: string = 'app.ca.authorization-maintenance';
const parentState: string = null;
const abstractStateURL: string = null;
const abstractStateBreadCrumbLabel: string = null;
const formController: string = 'CACustomerAuthorizationFormController';
const enableCreate: boolean = true;
const formTemplate: string = '<non-page-content-wrapper layout="column" title="HEADER.AUTHORIZATION_MAINTENANCE" flex><non-flexi-form configuration="vm.formConfiguration" domain-object="authMatrixVO"></non-flexi-form></non-page-content-wrapper>';
const listTemplate: string = '<non-data-grid source="$resolve.source" title="HEADER.AUTHORIZATION_MAINTENANCE" layout="column" flex></non-data-grid>';

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
                        template: require('./authorization-maintenance.tpl')
                    }
                },
                ncyBreadcrumb: {
                    label: 'BREADCRUMB.AUTHORIZATION_MAINTENANCE'
                }
            });

        this.WorkflowManagementRoutesProvider.setupRoutes(baseURL, baseState, abstractStateBreadCrumbLabel,
            parentState, abstractStateURL, formTemplate, formController, listTemplate, enableCreate);
    }

    private loadSecondaryMenu = (MenuService: IMenuService): any => {
        'ngInject';

        MenuService.setSecondaryMenuListID('ca-customer-maintenance-auth-matrix-maintenance-ref');
    }
}
