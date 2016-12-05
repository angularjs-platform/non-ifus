import {IEntityManagementService} from '@norn/non-shared-system-administration';

export class BGACustomerProfileListController {

    constructor(
        private $mdToast: ng.material.IToastService,
        private $state: ng.ui.IStateService,
        private BGACustomerProfileService: IEntityManagementService) {
        'ngInject';
    }

    public add = (): void => {
        this.$state.go('app.bga.customer-maintenance.profile.initiate');
    };

    public view = (customer: any): void => {
        this.$state.go('app.bga.customer-maintenance.profile.view', {orgId : customer.id});
    };

    public edit = (customer: any): void => {
         this.$state.go('app.bga.customer-maintenance.profile.update', {orgId : customer.id});
    };

    public delete = (customer: any): void => {
        this.BGACustomerProfileService.delete(customer.id).then(
            () => this.$mdToast.show(this.$mdToast.simple().textContent('Successfully deleted the customer!')));
    };
}
