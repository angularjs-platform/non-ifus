import { IWorkflowManagementRoutesProvider } from '@norn/non-shared-common';

const baseURL: string = '/org/ba/customer/accounts';
const baseState: string = 'app.ba.customer-maintenance.accounts-maintenance';
const parentState: string = 'app.ba.customer-maintenance';
const abstractStateURL: string = '/accounts';
const abstractStateBreadCrumbLabel: string = 'BREADCRUMB.ACCOUNTS_MAINTENANCE';
const formController: string = 'BACustomerAccountsFormController';
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
