export class BGACustomerSelectBankListController {

    constructor(
        private $state: ng.ui.IStateService) {
        'ngInject';
    }

    public listCustomers = (row: any): void => {
        this.$state.go('app.bga.customer-maintenance.profile.list', {orgId : row.entity.id});
    };
}
