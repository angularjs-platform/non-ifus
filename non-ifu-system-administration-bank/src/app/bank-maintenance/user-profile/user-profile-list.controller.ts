import {IEntityManagementService} from '@norn/non-shared-system-administration';

export class BABankUserProfileListController {

    constructor(
        private $mdToast: ng.material.IToastService,
        private $state: ng.ui.IStateService,
        private BABankUserProfileService: IEntityManagementService) {
        'ngInject';
    }

    public view = (user: any): void => {
        this.$state.go('app.ba.bank-maintenance.user-profile.view', {userId : user.id});
    };

    public edit = (user: any): void => {
         this.$state.go('app.ba.bank-maintenance.user-profile.update', {userId : user.id});
    };

    public delete = (user: any): void => {
        this.BABankUserProfileService.delete(user.id).then(
            () => this.$mdToast.show(this.$mdToast.simple().textContent('Successfully deleted the user!')));
    };
}
