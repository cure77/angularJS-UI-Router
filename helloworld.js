var myApp = angular.module('helloworld', ['ui.router', 'ui.bootstrap']);

myApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
        url: '/',
        template: '<h3>hello world!</h3>'
    })
    .state('tabs', {
        url: '/tabs',
        templateUrl: 'tabs.html',
        controller:'tabCtrl'
    })
    .state('tabs.tab1', {
        url: '/tab1',
        templateUrl: 'tabs.html',
        controller:'tab1Ctrl'
    })
    .state('tabs.tab2', {
        url: '/tab2',
        templateUrl: 'tabs.html',
        controller:'tab2Ctrl'
    })    
    ;

    $urlRouterProvider.otherwise('/');
});


myApp.controller('TabsDemoCtrl', function ($scope, $window, $state) {
    $scope.$state = $state;
    
    console.log('entered TabsDemoCtrl with state: ' + $state.current.name);

    $scope.tabs = [
      { title:'Dynamic Title 1', content:'Dynamic content 1' },
      { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
    ];
  
    $scope.alertMe = function() {
      setTimeout(function() {
        $window.alert('You\'ve selected the alert tab!');
      });
    };
  
    $scope.model = {
      name: 'Tabs'
    };
  });


myApp.controller('tabCtrl', function($scope, $state) {
    console.log($state.current.name);
    debugger;
    $scope.$state = $state;
});

myApp.controller('tab1Ctrl', function($scope, $state) {
    console.log($state.current.name);
    debugger;
    $scope.$state = $state;
    $scope.activeTabIndex = 0;
    $scope.cure = "tab1";
});

myApp.controller('tab2Ctrl', function($scope, $state) {
    console.log($state.current.name);
    debugger;
    $scope.$state = $state;
    $scope.activeTabIndex = 1;
    $scope.cure = "tab2";
});