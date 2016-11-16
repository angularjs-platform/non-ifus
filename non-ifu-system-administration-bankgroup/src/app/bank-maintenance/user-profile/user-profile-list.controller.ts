import {IEntityManagementService} from '@norn/non-shared-system-administration';

export class BGABankUserProfileListController {

    constructor(
        private $mdToast: ng.material.IToastService,
        private $state: ng.ui.IStateService,
        private BGABankUserProfileService: IEntityManagementService) {
        'ngInject';
    }

    public add = (): void => {
        this.$state.go('app.bga.bank-maintenance.user-profile.initiate');
    };

    public view = (user: any): void => {
        this.$state.go('app.bga.bank-maintenance.user-profile.view', {userId : user.id});
    };

    public edit = (user: any): void => {
         this.$state.go('app.bga.bank-maintenance.user-profile.update', {userId : user.id});
    };

    public delete = (user: any): void => {
        this.BGABankUserProfileService.delete(user.id).then(
            () => this.$mdToast.show(this.$mdToast.simple().textContent('Successfully deleted the user!')));
    };
}
