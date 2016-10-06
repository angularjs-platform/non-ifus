import {IOrganizationManagementService } from '../../shared/shared.model';

const bankCRUFields: any = require('./bank-cru.form.json');

export class CRUBankController {

    public bank: any;

    constructor(
        private $mdToast: ng.material.IToastService,
        private $state: ng.ui.IStateService,
        private $stateParams: ng.ui.IStateParamsService,
        private BankManagementService: IOrganizationManagementService,
        private formState: string
    ) {
        this.bank = {
            data: {},
            fields: []
        };

        // Load initial data based on field types
        if (formState === 'create') {
            BankManagementService.initiate().then(this.loadData);
        }
        else if (formState === 'update')  {
            BankManagementService.edit(this.$stateParams['orgId']).then(this.loadData);
        }
        else if (formState === 'view') {
            BankManagementService.view(this.$stateParams['orgId']).then(this.loadData);
            this.bank.options = {
                formState: {
                    readOnly: true
                }
            };
        }
        this.bank.fields = bankCRUFields;
    }

    public submit = (valid: boolean): void => {
        if (valid) {
            if (this.formState === 'create') {
                this.create();
            }
            else if (this.formState === 'update') {
                this.update();
            }
        }
        else {
            this.$mdToast.show(this.$mdToast.simple().textContent('Please correct your inputs!').position('bottom left'));
        }
    };

    private loadData = (response: any): void => {
        this.bank.data = response;
    };

    private create = (): void => {
        this.BankManagementService.create(this.bank.data)
                .then(
                    // Success
                    () => this.$state.go('app.banklist'),
                    // Error
                    () => this.$mdToast.show(this.$mdToast.simple().textContent('Error while submitting')));
    };

    private update = (): void => {
        this.BankManagementService.update(this.bank.data)
                .then(
                    // Success
                    () => this.$state.go('app.banklist'),
                    // Error
                    () => this.$mdToast.show(this.$mdToast.simple().textContent('Error while submitting')));
    };
}
