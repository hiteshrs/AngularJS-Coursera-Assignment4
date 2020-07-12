(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

ItemDetailController.$inject = ['MenuDataService','item'];
function ItemDetailController(MenuDataService, item) {
    var itemCtrl = this;
    itemCtrl.menuItems = item.data.menu_items;
}
    
})();