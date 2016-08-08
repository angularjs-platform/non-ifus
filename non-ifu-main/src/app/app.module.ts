const moduleName: string = 'non.ifu.main.app';

// Bundle - config
import {UiRouterConfig} from './app.routes';

// Sub-modules
import primaryNavigation from './primary-navigation/primary-navigation.module';
import secondaryNavigation from './secondary-navigation/secondary-navigation.module';

angular.module(moduleName, [primaryNavigation, secondaryNavigation])
    .config(UiRouterConfig);

export default moduleName;

