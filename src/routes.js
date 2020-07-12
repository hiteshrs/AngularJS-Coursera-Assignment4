(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider' , '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('home' , {
        url: '/',
        templateUrl: 'src/menulist/templates/home.template.html'
    })
    
    .state('categoryList' , {
        url: '/category-list',
        templateUrl: 'src/menulist/templates/categories.template.html',
        controller: 'CategoriesController as categoryCtrl',
        resolve: {
            items: ['MenuDataService', function (MenuDataService) {
                return MenuDataService.getAllCategories();
            }]
        }
    })
    
    .state('categoryList.itemDetail' , {
        // url: '/item-detail/{itemId}',
        templateUrl: 'src/menulist/templates/item-detail.template.html',
        controller: 'ItemDetailController as itemCtrl',
        resolve: {
            item: ['MenuDataService','$stateParams', function (MenuDataService, $stateParams) {
                return MenuDataService.getItemForCateory($stateParams.itemId);
            }]
        },
        params: {
            itemId: null
        }
    });

}
    
})();