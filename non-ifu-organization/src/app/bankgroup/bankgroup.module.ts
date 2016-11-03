const moduleName: string = 'non.ifu.organization.app.bankgroup';

// Internal modules
import user from './user/user.module';

angular.module(moduleName, [user]);

export default moduleName;
