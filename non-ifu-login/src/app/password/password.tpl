<div layout="row" layout-align="center center" class="non-password-tpl" flex>
    <md-whiteframe class="md-whiteframe-6dp" flex="30"  flex-xs="90" flex-sm="60" layout-padding>
        <form name="form" ng-submit="passwordCtrl.login(passwordCtrl.orgName, passwordCtrl.userName, passwordCtrl.password)">
                <md-input-container class="md-block">
                    <label>Organization</label>
                    <input ng-model="passwordCtrl.orgName" required>
                </md-input-container>
                <md-input-container class="md-block">
                    <label>Username</label>
                    <input ng-model="passwordCtrl.userName" required>
                </md-input-container>
                <md-input-container class="md-block">
                    <label>Password</label>
                    <input type="password" ng-model="passwordCtrl.password" required>
                </md-input-container>
                <md-input-container>
                    <md-button class="md-raised md-primary" type="submit">Login</md-button>
                </md-input-container>
        </form>
    </md-whiteframe>
</div>
