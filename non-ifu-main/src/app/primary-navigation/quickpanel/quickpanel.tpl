<md-sidenav class="md-sidenav-right md-whiteframe-2dp non-primary-quick-panel" md-component-id="quick-panel" non-lean-scroll>
    <md-content>
        <md-tabs md-no-pagination md-swipe-content md-stretch-tabs="always">
            <md-tab>
                <md-tab-label><span translate>TAB_HEADER_NOTIFICATIONS</span></md-tab-label>
                <md-tab-body>
                    <md-content class="notfications-tab scrollable" non-lean-scroll>
                        <div layout-padding>Here notifications will appear</div>
                    </md-content>
                </md-tab-body>
            </md-tab>
            <md-tab>
                <md-tab-label><span translate>TAB_HEADER_BOOKMARKS</span></md-tab-label>
                <md-tab-body>
                    <md-content class="bookmarks-tab scrollable" non-lean-scroll>
                        <div layout-padding>Here bookmarks will appear</div>
                    </md-content>
                </md-tab-body>
            </md-tab>
            <md-tab hide-xs hide-sm>
                <md-tab-label><span translate>TAB_HEADER_SETTINGS</span></md-tab-label>
                <md-tab-body>
                    <md-content class="settings-tab scrollable" non-lean-scroll>
                        <div hide show-gt-sm layout-padding>
                            <div layout="column" class="md-caption">
                                <div>
                                    <div class="md-body-2" translate>PRIMARY_LAYOUT_STYLE</div>
                                    <br/>
                                    <md-radio-group layout="column" ng-model="vm.primaryLayoutType"
                                        ng-change="vm.updatePrimaryLayoutStyle()">
                                        <md-radio-button value="verticalNavigation"><span translate>VERTICAL_NAVIGATION</span></md-radio-button>
                                        <md-radio-button value="horizontalNavigation"><span translate>HORIZONTAL_NAVIGATION</span></md-radio-button>
                                        <md-radio-button value="contentWithToolbar"><span translate>CONTENT_WITH_TOOLBAR</span></md-radio-button>
                                    </md-radio-group>
                                </div>

                                <md-divider></md-divider>
                                <br/>
                                <div>
                                    <div class="md-body-2" translate>SECONDARY_LAYOUT_STYLE</div>
                                    <br/>
                                    <md-radio-group layout="column" ng-model="vm.secondaryLayoutType"
                                        ng-change="vm.updateSecondaryLayoutStyle()">
                                        <md-radio-button value="verticalNavigation"><span translate>VERTICAL_NAVIGATION</span></md-radio-button>
                                        <md-radio-button value="horizontalNavigation"><span translate>HORIZONTAL_NAVIGATION</span></md-radio-button>
                                        <md-radio-button value="contentWithToolbar"><span translate>CONTENT_WITH_TOOLBAR</span></md-radio-button>
                                        <md-radio-button value="contentOnly"><span translate>CONTENT_ONLY</span></md-radio-button>
                                    </md-radio-group>
                                </div>
                            </div>
                            <div layout="row" layout-align="start center">
                                <md-button class="md-raised md-primary" ng-click="vm.reload()"><span translate>RELOAD</span></md-button>
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
        <md-button class="md-fab md-primary" aria-label="Page Action Button">
            <md-icon md-svg-icon="silverware" class="icon"></md-icon>
        </md-button>
    </md-fab-trigger>
    <md-fab-actions>
        <md-button class="md-fab md-mini md-accent" ng-click="vm.togglePrimaryNavigationContent()" aria-label="Maximize Minimize Button">
            <md-icon md-svg-icon="crop-free" class="icon"></md-icon>
        </md-button>
        <md-button class="md-fab md-mini md-accent" ng-click="vm.scrollToTop()" aria-label="Scroll To Top Button">
            <md-icon md-svg-icon="chevron-double-up" class="icon"></md-icon>
        </md-button>
    </md-fab-actions>
</md-fab-speed-dial>
