export class BGACustomerUserSelectBankListController {

    constructor(
        private $state: ng.ui.IStateService) {
        'ngInject';
    }

    public listCustomers = (row: any): void => {
        this.$state.go('app.bga.customer-maintenance.user-profile.select-customer', {orgId : row.entity.id});
    };
}
