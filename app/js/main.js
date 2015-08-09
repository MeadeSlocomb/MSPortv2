(function() {
  'use strict';

  angular.module('MSPortfolio', ['ui.router'])


    .config([ '$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'js/templates/portfolio.tpl.html',
          controller: 'PortfolioController'
        });

    }
  ]);

}());
