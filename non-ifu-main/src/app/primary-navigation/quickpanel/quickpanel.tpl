<md-sidenav class="md-sidenav-right md-whiteframe-2dp non-primary-quick-panel" md-component-id="quick-panel" non-lean-scroll>
    <md-content>
        <md-tabs md-no-pagination md-swipe-content md-stretch-tabs="always">
            <md-tab>
                <md-tab-label>Notifications</md-tab-label>
                <md-tab-body>
                    <md-content class="notfications-tab scrollable" non-lean-scroll>
                        <div layout-padding>Here notifications will appear</div>
                    </md-content>
                </md-tab-body>
            </md-tab>
            <md-tab>
                <md-tab-label>Bookmarks</md-tab-label>
                <md-tab-body>
                    <md-content class="bookmarks-tab scrollable" non-lean-scroll>
                        <div layout-padding>Here bookmarks will appear</div>
                    </md-content>
                </md-tab-body>
            </md-tab>
            <md-tab hide-xs hide-sm>
                <md-tab-label>Settings</md-tab-label>
                <md-tab-body>
                    <md-content class="settings-tab scrollable" non-lean-scroll>
                        <div hide show-gt-sm layout-padding>
                            <div layout="column" class="md-caption">
                                <div>
                                    <div class="md-body-2">Primary Layout Style</div>
                                    <br/>
                                    <md-radio-group layout="column" ng-model="vm.primaryLayoutType"
                                        ng-change="vm.updatePrimaryLayoutStyle()">
                                        <md-radio-button value="verticalNavigation">Vertical Navigation</md-radio-button>
                                        <md-radio-button value="horizontalNavigation">Horizontal Navigation</md-radio-button>
                                        <md-radio-button value="contentWithToolbar">Content with Toolbar</md-radio-button>
                                    </md-radio-group>
                                </div>

                                <md-divider></md-divider>
                                <br/>
                                <div>
                                    <div class="md-body-2">Secondary Layout Style</div>
                                    <br/>
                                    <md-radio-group layout="column" ng-model="vm.secondaryLayoutType"
                                        ng-change="vm.updateSecondaryLayoutStyle()">
                                        <md-radio-button value="verticalNavigation">Vertical Navigation</md-radio-button>
                                        <md-radio-button value="horizontalNavigation">Horizontal Navigation</md-radio-button>
                                        <md-radio-button value="contentWithToolbar">Content with Toolbar</md-radio-button>
                                        <md-radio-button value="contentOnly">Content Only</md-radio-button>
                                    </md-radio-group>
                                </div>
                            </div>
                            <div layout="row" layout-align="start center">
                                <md-button class="md-raised md-primary" ng-click="vm.reload()">Reload</md-button>
                            </div>
                        </div>
                    </md-content>
                </md-tab-body>
            </md-tab>
        </md-tabs>
    </md-content>
</md-sidenav>
<md-fab-speed-dial md-direction="up" class="md-fling md-fab-bottom-right">
    <md-fab-trigger>
        <md-button class="md-fab md-primary">
            <md-icon md-svg-icon="silverware" class="icon"></md-icon>
        </md-button>
    </md-fab-trigger>
    <md-fab-actions>
        <md-button class="md-fab md-mini md-accent" ng-click="vm.togglePrimaryNavigationContent()">
            <md-icon md-svg-icon="crop-free" class="icon"></md-icon>
        </md-button>
        <md-button class="md-fab md-mini md-accent" ng-click="vm.scrollToTop()">
            <md-icon md-svg-icon="chevron-double-up" class="icon"></md-icon>
        </md-button>
    </md-fab-actions>
</md-fab-speed-dial>
