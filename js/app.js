var myApp = angular.module('myApp', [
  'ngRoute',
  'carsControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/models', {
    templateUrl: 'partials/models.html',
    controller: 'ModelsController'
  }).
  when('/models/:itemId/cars', {
    templateUrl: 'partials/cars.html',
    controller: 'CarsController'
  }).
  when('/models/:itemId/cars/:itemCar', {
    templateUrl: 'partials/years.html',
    controller: 'YearsController'
  }).
  when('/models/:itemId/cars/:itemCar/year/:itemYear', {
    templateUrl: 'partials/car.html',
    controller: 'CarController'
  }).
  otherwise({
    redirectTo: '/models'
  });
}]);