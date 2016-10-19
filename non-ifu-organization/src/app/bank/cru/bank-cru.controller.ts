import { IOrganizationManagementService } from '../../shared/shared.model';
import { FormConfiguration, IFormDisplayState } from '@norn/non-framework';

const bankCRUFields: any = require('./bank-cru.form.json');

export class CRUBankController {

    public formConfiguration: FormConfiguration;

    constructor(
        private $mdToast: ng.material.IToastService,
        private $state: ng.ui.IStateService,
        private $stateParams: ng.ui.IStateParamsService,
        private BankManagementService: IOrganizationManagementService,
        private FormDisplayState: IFormDisplayState,
        private formState: string
    ) {
        this.formConfiguration = {
            model: {},
            fields: [],
            options: {
                formState: {
                    displayState: this.formState,
                    provider: {
                        getCountryOptions: this.getCountryOptions,
                        save: this.save
                    }
                }
            }
        };

        // Load initial data based on field types
        if (this.formState === this.FormDisplayState.create) {
            BankManagementService.initiate().then(this.loadData);
        }
        else if (this.formState === this.FormDisplayState.update)  {
            BankManagementService.edit(this.$stateParams['orgId']).then(this.loadData);
        }
        else if (this.formState === this.FormDisplayState.view) {
            BankManagementService.view(this.$stateParams['orgId']).then(this.loadData);
        }
        this.formConfiguration.fields = bankCRUFields;
    }

    public submit = (valid: boolean): void => {
        if (valid) {
            if (this.formState === this.FormDisplayState.create) {
                this.create();
            }
            else if (this.formState === this.FormDisplayState.update) {
                this.update();
            }
        }
        else {
            this.$mdToast.show(this.$mdToast.simple().textContent('Please correct your inputs!').position('bottom left'));
        }
    };

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

    public save = (): void => {
        console.log('Save needs to be implemented');
    };

    private loadData = (response: any): void => {
        this.formConfiguration.model = response.orgVO;
    };

    private create = (): void => {
        this.BankManagementService.create(this.formConfiguration.model)
                .then(
                    // Success
                    () => this.$state.go('app.banklist'),
                    // Error
                    () => this.$mdToast.show(this.$mdToast.simple().textContent('Error while submitting')));
    };

    private update = (): void => {
        this.BankManagementService.update(this.formConfiguration.model)
                .then(
                    // Success
                    () => this.$state.go('app.banklist'),
                    // Error
                    () => this.$mdToast.show(this.$mdToast.simple().textContent('Error while submitting')));
    };
}
