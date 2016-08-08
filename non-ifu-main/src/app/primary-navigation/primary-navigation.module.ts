const moduleName: string = 'non.ifu.main.app.primary-navigation';

// Controller
import {PrimaryHorizontalController} from './horizontal/horizontal.controller';
import {PrimaryVerticalController} from './vertical/vertical.controller';
import {PrimaryToolbarController} from './toolbar/toolbar.controller';
import {PrimaryQuickpanelController} from './quickpanel/quickpanel.controller';

angular.module(moduleName, [])
    .controller('PrimaryHorizontalController', PrimaryHorizontalController)
    .controller('PrimaryVerticalController', PrimaryVerticalController)
    .controller('PrimaryToolbarController', PrimaryToolbarController)
    .controller('PrimaryQuickpanelController', PrimaryQuickpanelController);

export default moduleName;
