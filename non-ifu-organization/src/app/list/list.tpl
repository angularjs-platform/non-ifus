<div layout="row" layout-align="center center" layout-fill>
    <md-content flex layout-padding>
        <md-list ng-cloak>
            <md-divider></md-divider>
            <md-list-item ng-repeat="customer in listCtrl.customerList" class="noright">
                <p>{{customer.orgVO.name}}</p>
                 <md-button class="md-raised md-primary" ng-click="listCtrl.edit(customer.orgVO.id)">Edit</md-button>
            </md-list-item>
        </md-list>
    </md-content>
</div>
