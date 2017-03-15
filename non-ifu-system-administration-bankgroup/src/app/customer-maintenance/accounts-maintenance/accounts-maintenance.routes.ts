import { IWorkflowManagementRoutesProvider } from '@norn/non-shared-common';

const baseURL: string = '/org/bga/customer/accounts';
const baseState: string = 'app.bga.customer-maintenance.accounts-maintenance';
const parentState: string = 'app.bga.customer-maintenance';
const abstractStateURL: string = '/accounts';
const abstractStateBreadCrumbLabel: string = 'BREADCRUMB.ACCOUNTS_MAINTENANCE';
const formController: string = 'BGACustomerAccountsFormController';
const enableCreate: boolean = true;
const formTemplate: string = '<non-page-content-wrapper layout="column" title="HEADER.ACCOUNTS_MAINTENANCE" flex><non-form configuration="vm.formConfiguration"></non-form></non-page-content-wrapper>';
const listTemplate: string = '<non-data-grid source="$resolve.source" title="HEADER.ACCOUNTS_MAINTENANCE" layout="column" flex></non-data-grid>';

export class UiRouterConfig {

    constructor (
        private WorkflowManagementRoutesProvider: IWorkflowManagementRoutesProvider
    ) {
        'ngInject';

        this.WorkflowManagementRoutesProvider.setupRoutes(baseURL, baseState, abstractStateBreadCrumbLabel,
            parentState, abstractStateURL, formTemplate, formController, listTemplate, enableCreate);
    }
}
