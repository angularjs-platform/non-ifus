import {IEntityManagementService} from '@norn/non-shared-system-administration';

export class CACustomerUserProfileListController {

    constructor(
        private $mdToast: ng.material.IToastService,
        private $state: ng.ui.IStateService,
        private CACustomerUserProfileService: IEntityManagementService) {
        'ngInject';
    }

    public view = (user: any): void => {
        this.$state.go('app.ca.customer-maintenance.user-profile.view', {userId : user.id});
    };

    public edit = (user: any): void => {
         this.$state.go('app.ca.customer-maintenance.user-profile.update', {userId : user.id});
    };

    public delete = (user: any): void => {
        this.CACustomerUserProfileService.delete(user.id).then(
            () => this.$mdToast.show(this.$mdToast.simple().textContent('Successfully deleted the user!')));
    };
}