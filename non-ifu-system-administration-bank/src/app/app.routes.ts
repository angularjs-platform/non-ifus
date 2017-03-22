import { IStateProvider } from '@norn/non-framework';

export class UiRouterConfig {

    constructor (
        private $stateProvider: IStateProvider
    ) {
        'ngInject';

        $stateProvider
            .state('app.ba', {
                abstract: true,
                ncyBreadcrumb: {
                    label: 'BREADCRUMB.BA_SYSTEM_ADMINISTRATION'
                }
            });
    }
}
