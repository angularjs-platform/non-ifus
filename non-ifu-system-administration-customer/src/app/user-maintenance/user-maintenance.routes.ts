import { IStateProvider, IMenuService } from '@norn/non-framework';

export class UiRouterConfig {

    constructor (
        private $stateProvider: IStateProvider
    ) {
        'ngInject';

        $stateProvider
            .state('app.ca.user-maintenance', {
                url: '/org/ca/customer/user',
                onEnter: this.loadSecondaryMenu,
                views: {
                    'content@app': {
                        template: require('./user-maintenance.tpl')
                    }
                },
                ncyBreadcrumb: {
                    label: 'BREADCRUMB.USER_MAINTENANCE'
                }
            });
    }

    private loadSecondaryMenu = (MenuService: IMenuService): any => {
        'ngInject';

        MenuService.setSecondaryMenuListID('ca-customer-maintenance-user-maintenance-ref');
    }
}
