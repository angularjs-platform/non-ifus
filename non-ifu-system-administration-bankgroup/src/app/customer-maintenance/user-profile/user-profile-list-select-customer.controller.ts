export class BGACustomerUserSelectCustomerListController {

    constructor(
        private $state: ng.ui.IStateService) {
        'ngInject';
    }

    public listUsers = (customer: any): void => {
        this.$state.go('app.bga.customer-maintenance.user-profile.list', {orgId : customer.entity.id});
    };
}
