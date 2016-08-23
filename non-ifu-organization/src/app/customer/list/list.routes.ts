import {IOrganizationManagementService} from '../../shared/shared.model';

export class UiRouterConfig {

    constructor (
        private $stateProvider: ng.ui.IStateProvider
    ) {
        'ngInject';

        $stateProvider
            .state('app.customerlist', {
                url: '/customer/list',
                views: {
                    'content@app': {
                        template: '<non-data-grid options="$resolve.data" provider="vm"> </non-data-grid>',
                        resolve: {
                            data: this.getData
                        },
                        controller: 'ListCustomerController',
                        controllerAs: 'vm'
                    }
                }
            });
    }

    private getData = (CustomerManagementService: IOrganizationManagementService): any => {
        'ngInject';

        return CustomerManagementService.list();
    };

}
