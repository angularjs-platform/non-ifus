import { IStateProvider, IMenuService } from '@norn/non-framework';

export class UiRouterConfig {

    constructor (
        private $stateProvider: IStateProvider
    ) {
        'ngInject';

        $stateProvider
            .state('app.ca.customer-maintenance', {
                url: '/ca/customer',
                onEnter: this.loadSecondaryMenu,
                views: {
                    'content@app': {
                        template: require('./customer-maintenance.tpl')
                    }
                },
                ncyBreadcrumb: {
                    label: 'CUSTOMER_MAINTENANCE'
                }
            });
    }

    private loadSecondaryMenu = (MenuService: IMenuService): any => {
        'ngInject';

        MenuService.setSecondaryMenuListID('ca-customer-maintenance-ref');
    }
}
