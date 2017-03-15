import { IWorkflowManagementRoutesProvider } from '@norn/non-shared-common';

const baseURL: string = '/org/ba/customer/authorization';
const baseState: string = 'app.ba.customer-maintenance.authorization-maintenance';
const parentState: string = 'app.ba.customer-maintenance';
const abstractStateURL: string = '/authorization';
const abstractStateBreadCrumbLabel: string = 'BREADCRUMB.AUTHORIZATION_MAINTENANCE';
const formController: string = 'BACustomerAuthorizationFormController';
const enableCreate: boolean = true;
const formTemplate: string = '<non-page-content-wrapper layout="column" title="HEADER.AUTHORIZATION_MAINTENANCE" flex><non-form configuration="vm.formConfiguration"></non-form></non-page-content-wrapper>';
const listTemplate: string = '<non-data-grid source="$resolve.source" title="HEADER.AUTHORIZATION_MAINTENANCE" layout="column" flex></non-data-grid>';

export class UiRouterConfig {

    constructor (
        private WorkflowManagementRoutesProvider: IWorkflowManagementRoutesProvider
    ) {
        'ngInject';

        this.WorkflowManagementRoutesProvider.setupRoutes(baseURL, baseState, abstractStateBreadCrumbLabel,
            parentState, abstractStateURL, formTemplate, formController, listTemplate, enableCreate);
    }
}
