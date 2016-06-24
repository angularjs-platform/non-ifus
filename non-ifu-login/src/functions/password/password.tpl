<div layout="row" layout-align="center center" layout-fill class="non-password-tpl">
    <md-whiteframe class="md-whiteframe-6dp" flex="30" layout-padding>
        <form name="form" ng-submit="passwordCtrl.login(passwordCtrl.orgName, passwordCtrl.userName, passwordCtrl.password)">
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Organization</label>
                    <input ng-model="passwordCtrl.orgName" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Username</label>
                    <input ng-model="passwordCtrl.userName" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Password</label>
                    <input type="password" ng-model="passwordCtrl.password" required>
                </md-input-container>
                <md-input-container layout-align="center center">
                    <md-button class="md-raised md-primary" type="submit">Login</md-button>
                </md-input-container>
        </form>
    </md-whiteframe>
</div>
