export class BGABankUserSelectBankListController {

    constructor(
        private $state: ng.ui.IStateService) {
        'ngInject';
    }

    public listUsers = (row: any): void => {
        this.$state.go('app.bga.bank-maintenance.user-profile.list', {orgId : row.entity.id});
    };
}
