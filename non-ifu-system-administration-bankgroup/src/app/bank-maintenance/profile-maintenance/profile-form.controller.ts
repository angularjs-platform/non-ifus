import { FormConfiguration } from '@norn/non-framework';
import { IWorkflowManagementService } from '@norn/non-shared-common';

const formJSON: {}[] = require('./profile-form.json');

export class BGABankProfileFormController implements ng.IController {

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
        let viewManagerFunctions: {} = {
            getCountryOptions: this.getCountryOptions
        };

        // Form is configured with all the actions and model
        this.formConfiguration = this.WorkflowManagementService.setupForm(this.baseURL, this.baseState, _.cloneDeep(formJSON), this.formDisplayState, this.$stateParams, viewManagerFunctions);
    }

    public getCountryOptions = (countryFieldScope: any): any => {
        if (!countryFieldScope.to.options) {
            return [
                { 'name': 'United States Of America', 'value': 'US' },
                { 'name': 'United Kingdom', 'value': 'UK' },
                { 'name': 'India', 'value': 'IN' }
            ];
        }
        return countryFieldScope.to.options;
    };
}
