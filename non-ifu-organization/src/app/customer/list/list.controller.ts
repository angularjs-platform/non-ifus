export class ListCustomerController {

    constructor(
        private $state: ng.ui.IStateService) {
        'ngInject';
    }

    public edit = (customer: any): void => {
         // this.$state.go('app.customerUpdate', {orgId : customer});
         console.log('clicked on customer:', customer);
    };
}
