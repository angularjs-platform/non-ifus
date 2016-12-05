import { FormConfiguration, IFormDisplayState } from '@norn/non-framework';
import {IEntityManagementService} from '@norn/non-shared-system-administration';

const profileCRUFields: any = require('./profile-form.metadata.json');

export class BGACustomerProfileFormController {

    public formConfiguration: FormConfiguration;

    constructor(
        private $mdToast: ng.material.IToastService,
        private $state: ng.ui.IStateService,
        private $stateParams: ng.ui.IStateParamsService,
        private BGACustomerProfileService: IEntityManagementService,
        private FormDisplayState: IFormDisplayState,
        private formState: string) {
        'ngInject';

        this.formConfiguration = {
            model: {},
            fields: profileCRUFields,
            options: {
                formState: {
                    displayState: this.formState,
                    viewManager: {
                        getCountryOptions: this.getCountryOptions,
                        submit: this.submit,
                        save: this.save
                    }
                }
            }
        };

        // Load initial data based on field types
        if (this.formState === this.FormDisplayState.create) {
            BGACustomerProfileService.initiate().then(this.loadData);
        }
        else if (this.formState === this.FormDisplayState.update)  {
            BGACustomerProfileService.edit(this.$stateParams['orgId']).then(this.loadData);
        }
        else if (this.formState === this.FormDisplayState.view) {
            BGACustomerProfileService.view(this.$stateParams['orgId']).then(this.loadData);
        }
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

    public save = (form: any): void => {
        console.log('Save needs to be implemented');
    };

    public submit = (form: any): void => {
        if (this.formState === this.FormDisplayState.create) {
            this.create();
        }
        else if (this.formState === this.FormDisplayState.update) {
            this.update();
        }
    };

    private create = (): void => {
        this.BGACustomerProfileService.create(this.formConfiguration.model)
                .then(
                    // Success
                    () => this.$state.go('app.bga.customer-maintenance.profile.list'),
                    // Error
                    () => this.$mdToast.show(this.$mdToast.simple().textContent('Error while submitting')));
    };

    private loadData = (response: any): void => {
        this.formConfiguration.model = response;
    };

    private update = (): void => {
        this.BGACustomerProfileService.update(this.formConfiguration.model)
                .then(
                    // Success
                    () => this.$state.go('app.bga.customer-maintenance.profile.list'),
                    // Error
                    () => this.$mdToast.show(this.$mdToast.simple().textContent('Error while submitting')));
    };
}
