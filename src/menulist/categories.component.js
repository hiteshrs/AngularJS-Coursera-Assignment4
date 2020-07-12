(function () {
'use strict';

angular.module('MenuApp')
.component('categoryList', {
    templateUrl: 'src/menulist/templates/menuCategories.template.html',
    bindings: {
        items: '<'
    }
});
    
})();