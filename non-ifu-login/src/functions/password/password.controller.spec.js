describe('NoN Login IFU: Password Controller', function() {

    var passwordController;

    beforeEach(function() {
        module('non.ifu.login');

        inject(function($controller) {
            passwordController = $controller('PasswordController', {});
        });
    });

    it('should be properly setup', function() {
        expect(passwordController, 'Password Controller should exist').to.not.be.null;
        expect(passwordController.username, 'Password Controller should have a username').to.be.defined;
        expect(passwordController.password, 'Password Controller should have a password').to.be.defined;
        expect(angular.isFunction(passwordController.login), 'Password Controller should have a login method').to.be.true;
    });
});
