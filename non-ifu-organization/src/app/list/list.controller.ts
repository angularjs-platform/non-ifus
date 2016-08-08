import {ICustomerManagementService} from '../../core/core.model';

export class ListCustomerController {

    public customerList: Array<Object>;

    constructor(
        private CustomerManagementService: ICustomerManagementService,
        private $mdToast:  angular.material.IToastService,
        private $state: ng.ui.IStateService) {
        'ngInject';
        this.customerList = null;
        this.CustomerManagementService.list().then(this.handleSuccessfulList, this.handleErrorList);
    }
    public edit = (customer: Number): void => {
         this.$state.go('app.customerUpdate', {orgId : customer});
    };

    private handleSuccessfulList = (response: any): void  => {
        // Example of a toaster with position
        // Remove this later on when not needed
        console.log(response);
        this.customerList = response;
    };

    private handleErrorList = (): void => {
        this.$mdToast.show(this.$mdToast.simple().textContent('Unable to Fetch Customers. Please try again!'));
    };
}
