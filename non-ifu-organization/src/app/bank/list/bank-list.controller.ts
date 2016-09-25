export class ListBankController {

    constructor(
        private $state: ng.ui.IStateService) {
        'ngInject';
    }

    public edit = (bank: any): void => {
         this.$state.go('app.bankUpdate', {orgId : bank});
         console.log('clicked on bank:', bank);
    };
}
