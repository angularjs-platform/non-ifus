import { IStateProvider, IMenuService } from '@norn/non-framework';

export class UiRouterConfig {

    constructor (
        private $stateProvider: IStateProvider
    ) {
        'ngInject';

        $stateProvider
            .state('app.ba.customer-maintenance', {
                url: '/org/ba/customer',
                onEnter: this.loadSecondaryMenu,
                views: {
                    'content@app': {
                        template: require('./customer-maintenance.tpl')
                    }
                },
                ncyBreadcrumb: {
                    label: 'BREADCRUMB.CUSTOMER_MAINTENANCE'
                }
            });
    }

    private loadSecondaryMenu = (MenuService: IMenuService): any => {
        'ngInject';

        MenuService.setSecondaryMenuListID('ba-customer-maintenance-ref');
    }
}
