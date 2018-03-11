var myApp = angular.module('helloworld', ['ui.router', 'ui.bootstrap']);

myApp.config(function($stateProvider) {
    $stateProvider
    .state('home', {
        url: '/',
        template: '<h3>hello world!</h3>'
    })
    .state('tabs', {
        url: '/tabs',
        templateUrl: 'tabs.html'
    }); 
});