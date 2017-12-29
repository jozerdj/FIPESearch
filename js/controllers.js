var carsControllers = angular.module('carsControllers', ['ngAnimate']);

carsControllers.controller('ModelsController', ['$scope', '$http', function($scope, $http) {
  $http.get('https://fipe.parallelum.com.br/api/v1/carros/marcas').success(function(data) {
    $scope.models = data;
    $scope.modelsOrder = 'nome';
  });
}]);

carsControllers.controller('CarsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('https://fipe.parallelum.com.br/api/v1/carros/marcas/' + $routeParams.itemId + '/modelos').success(function(data) {
    $scope.cars = data.modelos;
    $scope.carsOrder = 'nome';
    $scope.modelId = $routeParams.itemId;
  });
}]);

carsControllers.controller('YearsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  
  $http.get('https://fipe.parallelum.com.br/api/v1/carros/marcas/' + $routeParams.itemId + '/modelos/' + $routeParams.itemCar + "/anos").success(function(data) {
    $scope.years = data;
    $scope.yearsOrder = 'nome';
    $scope.modelId = $routeParams.itemId;
    $scope.carId = $routeParams.itemCar;
  });
}]);

carsControllers.controller('CarController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('https://fipe.parallelum.com.br/api/v1/carros/marcas/' + $routeParams.itemId + '/modelos/' + $routeParams.itemCar + "/anos/" + $routeParams.itemYear).success(function(data) {
    $scope.car = data;
    $scope.yearsOrder = 'nome';
  });
}]);

