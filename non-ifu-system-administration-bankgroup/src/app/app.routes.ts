import { IStateProvider } from '@norn/non-framework';

export class UiRouterConfig {

    constructor (
        private $stateProvider: IStateProvider
    ) {
        'ngInject';

        $stateProvider
            .state('app.bga', {
                abstract: true,
                ncyBreadcrumb: {
                    label: 'BREADCRUMB.BG_SYSTEM_ADMINISTRATION'
                }
            });
    }
}
