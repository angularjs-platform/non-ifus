import {IEntityManagementService} from '@norn/non-shared-system-administration';

export class BACustomerProfileListController {

    constructor(
        private $mdToast: ng.material.IToastService,
        private $state: ng.ui.IStateService,
        private BACustomerProfileService: IEntityManagementService) {
        'ngInject';
    }

    public view = (customer: any): void => {
        this.$state.go('app.ba.customer-maintenance.profile.view', {orgId : customer.id});
    };

    public edit = (customer: any): void => {
         this.$state.go('app.ba.customer-maintenance.profile.update', {orgId : customer.id});
    };

    public delete = (customer: any): void => {
        this.BACustomerProfileService.delete(customer.id).then(
            () => this.$mdToast.show(this.$mdToast.simple().textContent('Successfully deleted the customer!')));
    };
}
