<div  layout="row" class="non-secondary-tool-bar" layout-align="space-between center" flex ng-hide="vm.secondaryHorizontalNavigationEnabled">
    <div class="md-whiteframe-2dp" layout="row" layout-align="start center">
        <md-button class="md-icon-button"
            ng-click="vm.toggleSideNav('secondary-vertical-navigation')" ng-show="vm.secondaryVerticalNavigationEnabled" aria-label="Toggle Secondary Menu Button">
            <md-icon md-svg-icon="format-list-bulleted" class="icon"></md-icon>
        </md-button>
    </div>
    <div class="md-whiteframe-2dp" layout="row" layout-align="end center">
        <md-button class="md-icon-button" aria-label="Secondary Actions Button">
            <md-icon md-svg-icon="settings" class="icon"></md-icon>
        </md-button>
    </div>
</div>
