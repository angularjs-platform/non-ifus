<md-toolbar class="md-primary non-primary-tool-bar" ng-class="{'md-whiteframe-4dp' : !vm.horizontalNavigationEnabled}" flex>
    <div layout="row" layout-align="space-between center" flex>
        <div layout="row" layout-align="start center">
            <md-button class="md-icon-button"
                ng-click="vm.toggleSideNav('primary-vertical-navigation')" ng-show="vm.verticalNavigationEnabled">
                <md-icon md-svg-icon="menu" class="icon"></md-icon>
            </md-button>

            <div class="toolbar-separator"></div>
        </div>
        <div layout="row" layout-align="end center">
            <md-menu-bar id="user-menu">
                <md-menu md-position-mode="left bottom">
                    <md-button class="md-icon-button user-profile-icon" ng-click="$mdOpenMenu()">
                        <md-icon md-svg-icon="account-circle" class="icon"></md-icon>
                    </md-button>
                    <md-menu-content width="3">
                        <md-menu-item class="md-indent" ui-sref="app.userprofile">
                            <md-icon md-svg-icon="account" class="icon"></md-icon>
                            <md-button>My Profile</md-button>
                        </md-menu-item>

                        <md-menu-item class="md-indent">
                            <md-icon md-svg-icon="translate" class="icon"></md-icon>
                            <md-menu>
                                <md-button ng-click="$mdOpenMenu()">Language</md-button>
                                <md-menu-content width="2">
                                    <md-menu-item>
                                        <md-button>English</md-button>
                                    </md-menu-item>
                                    <md-menu-item>
                                        <md-button>French</md-button>
                                    </md-menu-item>
                                    <md-menu-item>
                                        <md-button>German</md-button>
                                    </md-menu-item>
                                    <md-menu-item>
                                        <md-button>Spanish</md-button>
                                    </md-menu-item>
                                </md-menu-content>
                            </md-menu>
                        </md-menu-item>

                        <md-menu-divider></md-menu-divider>

                        <md-menu-item class="md-indent" ui-sref="login">
                            <md-icon md-svg-icon="logout" class="icon"></md-icon>
                            <md-button>Logout</md-button>
                        </md-menu-item>
                    </md-menu-content>
                </md-menu>
            </md-menu-bar>

            <div class="toolbar-separator"></div>

            <md-button class="md-icon-button" ng-click="vm.toggleSideNav('quick-panel')">
                <md-icon md-svg-icon="dots-vertical" class="icon"></md-icon>
            </md-button>
        </div>
    </div>
</md-toolbar>
