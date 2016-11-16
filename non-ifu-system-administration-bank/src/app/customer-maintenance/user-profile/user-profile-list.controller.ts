import {IEntityManagementService} from '@norn/non-shared-system-administration';

export class BACustomerUserProfileListController {

    constructor(
        private $mdToast: ng.material.IToastService,
        private $state: ng.ui.IStateService,
        private BACustomerUserProfileService: IEntityManagementService) {
        'ngInject';
    }

    public add = (): void => {
        this.$state.go('app.ba.customer-maintenance.user-profile.initiate');
    };

    public view = (user: any): void => {
        this.$state.go('app.ba.customer-maintenance.user-profile.view', {userId : user.id});
    };

    public edit = (user: any): void => {
         this.$state.go('app.ba.customer-maintenance.user-profile.update', {userId : user.id});
    };

    public delete = (user: any): void => {
        this.BACustomerUserProfileService.delete(user.id).then(
            () => this.$mdToast.show(this.$mdToast.simple().textContent('Successfully deleted the user!')));
    };
}
