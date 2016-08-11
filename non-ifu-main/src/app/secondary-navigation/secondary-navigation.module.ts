const moduleName: string = 'non.ifu.main.app.secondary-navigation';

// Controller
import {SecondaryHorizontalController} from './horizontal/horizontal.controller';
import {SecondaryVerticalController} from './vertical/vertical.controller';
import {SecondaryToolbarController} from './toolbar/toolbar.controller';

angular.module(moduleName, [])
    .controller('SecondaryHorizontalController', SecondaryHorizontalController)
    .controller('SecondaryVerticalController', SecondaryVerticalController)
    .controller('SecondaryToolbarController', SecondaryToolbarController);

export default moduleName;
