import { FormConfiguration, IFormDisplayState } from '@norn/non-framework';
import {IEntityManagementService} from '@norn/non-shared-system-administration';

const userCRUFields: any = require('./user-profile-form.metadata.json');

export class BABankgroupUserProfileFormController {

    public formConfiguration: FormConfiguration;

    constructor(
        private $mdToast: ng.material.IToastService,
        private $state: ng.ui.IStateService,
        private $stateParams: ng.ui.IStateParamsService,
        private BABankgroupUserProfileService: IEntityManagementService,
        private FormDisplayState: IFormDisplayState,
        private formState: string) {
        'ngInject';

        this.formConfiguration = {
            model: {},
            fields: userCRUFields,
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
            BABankgroupUserProfileService.initiate().then(this.loadData);
        }
        else if (this.formState === this.FormDisplayState.update)  {
            BABankgroupUserProfileService.edit(this.$stateParams['userId']).then(this.loadData);
        }
        else if (this.formState === this.FormDisplayState.view) {
            BABankgroupUserProfileService.view(this.$stateParams['userId']).then(this.loadData);
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
        this.BABankgroupUserProfileService.create(this.formConfiguration.model)
                .then(
                    // Success
                    () => this.$state.go('app.bga.bankgroup-maintenance.user-profile.list'),
                    // Error
                    () => this.$mdToast.show(this.$mdToast.simple().textContent('Error while submitting')));
    };

    private loadData = (response: any): void => {
        this.formConfiguration.model = response;
    };

    private update = (): void => {
        this.BABankgroupUserProfileService.update(this.formConfiguration.model)
                .then(
                    // Success
                    () => this.$state.go('app.bga.bankgroup-maintenance.user-profile.list'),
                    // Error
                    () => this.$mdToast.show(this.$mdToast.simple().textContent('Error while submitting')));
    };
}
