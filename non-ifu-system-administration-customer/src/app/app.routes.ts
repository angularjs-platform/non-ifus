import { IStateProvider } from '@norn/non-framework';

export class UiRouterConfig {

    constructor (
        private $stateProvider: IStateProvider
    ) {
        'ngInject';

        $stateProvider
            .state('app.ca', {
                abstract: true,
                ncyBreadcrumb: {
                    label: 'BREADCRUMB.CA_SYSTEM_ADMINISTRATION'
                }
            });
    }
}
