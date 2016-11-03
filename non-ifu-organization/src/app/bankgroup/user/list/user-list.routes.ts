import { IEntityManagementService } from '@norn/non-framework';

export class UiRouterConfig {

    constructor (
        private $stateProvider: ng.ui.IStateProvider
    ) {
        'ngInject';

        $stateProvider
            .state('app.bankGroupUserList', {
                url: '/bankgroup/user/list',
                views: {
                    'content@app': {
                        template: '<non-data-grid options="$resolve.data" provider="vm"> </non-data-grid>',
                        resolve: {
                            data: this.getData
                        },
                        controller: 'ListBankGroupUserController',
                        controllerAs: 'vm'
                    }
                }
            });
    }

    private getData = (BankGroupUserManagementService: IEntityManagementService): any => {
        'ngInject';

        return BankGroupUserManagementService.list();
    };

}
