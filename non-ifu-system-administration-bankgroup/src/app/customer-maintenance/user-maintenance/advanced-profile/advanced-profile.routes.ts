import { IWorkflowManagementRoutesProvider } from '@norn/non-shared-common';

const baseURL: string = '/org/bga/customer/user/advanced';
const baseState: string = 'app.bga.customer-maintenance.user-maintenance.advanced';
const parentState: string = 'app.bga.customer-maintenance.user-maintenance';
const abstractStateURL: string = '/advanced';
const abstractStateBreadCrumbLabel: string = 'BREADCRUMB.USER_ADVANCED_PROFILE_MAINTENANCE';
const formController: string = 'BGACustomerUserAdvancedProfileFormController';
const enableCreate: boolean = false;
const formTemplate: string = '<non-page-content-wrapper layout="column" title="HEADER.USER_ADVANCED_PROFILE_MAINTENANCE" flex><non-form configuration="vm.formConfiguration"></non-form></non-page-content-wrapper>';
const listTemplate: string = '<non-data-grid source="$resolve.source" title="HEADER.USER_ADVANCED_PROFILE_MAINTENANCE" layout="column" flex></non-data-grid>';

export class UiRouterConfig {

    constructor (private WorkflowManagementRoutesProvider: IWorkflowManagementRoutesProvider) {
        'ngInject';

        this.WorkflowManagementRoutesProvider.setupRoutes(baseURL, baseState, abstractStateBreadCrumbLabel,
            parentState, abstractStateURL, formTemplate, formController, listTemplate, enableCreate);
    }
}
