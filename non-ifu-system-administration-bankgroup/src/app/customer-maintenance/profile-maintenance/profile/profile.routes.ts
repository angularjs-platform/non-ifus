import { IWorkflowManagementRoutesProvider } from '@norn/non-shared-common';

const baseURL: string = '/org/bga/customer';
const baseState: string = 'app.bga.customer-maintenance';
const parentState: string = null;
const abstractStateURL: string = null;
const abstractStateBreadCrumbLabel: string = null;
const formController: string = 'BGACustomerProfileFormController';
const enableCreate: boolean = true;
const formTemplate: string = '<non-page-content-wrapper layout="column" title="HEADER.CUSTOMER_PROFILE_MAINTENANCE" flex><non-form configuration="vm.formConfiguration"></non-form></non-page-content-wrapper>';
const listTemplate: string = '<non-data-grid source="$resolve.source" title="HEADER.CUSTOMER_PROFILE_MAINTENANCE" layout="column" flex></non-data-grid>';

export class UiRouterConfig {

    constructor (private WorkflowManagementRoutesProvider: IWorkflowManagementRoutesProvider) {
        'ngInject';

        this.WorkflowManagementRoutesProvider.setupRoutes(baseURL, baseState, abstractStateBreadCrumbLabel,
            parentState, abstractStateURL, formTemplate, formController, listTemplate, enableCreate);
    }
}
