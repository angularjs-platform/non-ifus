import { IWorkflowManagementRoutesProvider } from '@norn/non-shared-common';

const baseURL: string = '/org/ba/customer/user';
const baseState: string = 'app.ba.customer-maintenance.user-maintenance';
const parentState: string = 'app.ba.customer-maintenance';
const abstractStateURL: string = '/user';
const abstractStateBreadCrumbLabel: string = 'BREADCRUMB.USER_PROFILE_MAINTENANCE';
const formController: string = 'BACustomerUserProfileFormController';
const enableCreate: boolean = true;
const formTemplate: string = '<non-page-content-wrapper layout="column" title="HEADER.USER_PROFILE_MAINTENANCE" flex><non-form configuration="vm.formConfiguration"></non-form></non-page-content-wrapper>';
const listTemplate: string = '<non-data-grid source="$resolve.source" title="HEADER.USER_PROFILE_MAINTENANCE" layout="column" flex></non-data-grid>';

export class UiRouterConfig {

    constructor (private WorkflowManagementRoutesProvider: IWorkflowManagementRoutesProvider) {
        'ngInject';

        this.WorkflowManagementRoutesProvider.setupRoutes(baseURL, baseState, abstractStateBreadCrumbLabel,
            parentState, abstractStateURL, formTemplate, formController, listTemplate, enableCreate);
    }
}
