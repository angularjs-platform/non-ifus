import { FormConfiguration } from '@norn/non-framework';
import { IWorkflowManagementService } from '@norn/non-shared-common';

const formJSON: {}[] = require('./role-form.json');

export class BGABankGroupRoleFormController implements ng.IController {

    public formConfiguration: FormConfiguration;

    constructor(
        private WorkflowManagementService: IWorkflowManagementService,
        private $stateParams: ng.ui.IStateParamsService,
        private formDisplayState: string,
        private baseURL: string,
        private baseState: string,
        private _: _.LoDashStatic) {
        'ngInject';

        // Add Controller functions into this to allow the formly components to call them
        let viewManagerFunctions: {} = {};

        // Form is configured with all the actions and model
        this.formConfiguration = this.WorkflowManagementService.setupForm(this.baseURL, this.baseState, _.cloneDeep(formJSON), this.formDisplayState, this.$stateParams, viewManagerFunctions);
    }
}
