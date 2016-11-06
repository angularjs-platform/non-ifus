import {IEntityManagementService} from '@norn/non-shared-system-administration';

export class UiRouterConfig {

    constructor (
        private $stateProvider: ng.ui.IStateProvider
    ) {
        'ngInject';

        $stateProvider
            .state('app.banklist', {
                url: '/bank/list',
                views: {
                    'content@app': {
                        template: '<non-data-grid options="$resolve.data" provider="vm"> </non-data-grid>',
                        resolve: {
                            data: this.getData
                        },
                        controller: 'ListBankController',
                        controllerAs: 'vm'
                    }
                }
            });
    }

    private getData = (BankManagementService: IEntityManagementService): any => {
        'ngInject';

        return BankManagementService.list();
    };

}
