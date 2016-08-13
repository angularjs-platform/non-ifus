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
                            <md-button><span translate>MY_PROFILE</span></md-button>
                        </md-menu-item>

                        <md-menu-item class="md-indent">
                            <md-icon md-svg-icon="translate" class="icon"></md-icon>
                            <md-menu>
                                <md-button ng-click="$mdOpenMenu()"><span translate>LANGUAGE</span></md-button>
                                <md-menu-content width="2">
                                    <md-menu-item>
                                        <md-button ng-click="vm.changeLanguage('en')"
                                            ng-class="{'md-accent' : vm.isSelected('en')}"><span translate>LANGUAGE_ENGLISH</span></md-button>
                                    </md-menu-item>
                                    <md-menu-item>
                                        <md-button ng-click="vm.changeLanguage('fr')"
                                            ng-class="{'md-accent' : vm.isSelected('fr')}"><span translate>LANGUAGE_FRENCH</span></md-button>
                                    </md-menu-item>
                                    <md-menu-item>
                                        <md-button ng-click="vm.changeLanguage('de')"
                                            ng-class="{'md-accent' : vm.isSelected('de')}"><span translate>LANGUAGE_GERMAN</span></md-button>
                                    </md-menu-item>
                                    <md-menu-item>
                                        <md-button ng-click="vm.changeLanguage('es')"
                                            ng-class="{'md-accent' : vm.isSelected('es')}"><span translate>LANGUAGE_SPANISH</span></md-button>
                                    </md-menu-item>
                                </md-menu-content>
                            </md-menu>
                        </md-menu-item>

                        <md-menu-divider></md-menu-divider>

                        <md-menu-item class="md-indent" ui-sref="login">
                            <md-icon md-svg-icon="logout" class="icon"></md-icon>
                            <md-button><span translate>LOGOUT</span></md-button>
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
