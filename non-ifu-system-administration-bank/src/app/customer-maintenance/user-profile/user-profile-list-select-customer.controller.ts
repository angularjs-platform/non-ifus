export class BACustomerUserSelectCustomerListController {

    constructor(
        private $state: ng.ui.IStateService) {
        'ngInject';
    }

    public listUsers = (customer: any): void => {
        this.$state.go('app.ba.customer-maintenance.user-profile.list', {orgId : customer.entity.id});
    };
}
