(function (){

  'use strict';

  angular.module('MSPortfolio')

  .controller('PortfolioController', ['$scope', '$location',

    function ($scope, $location) {

      $scope.javascript = {
        title: 'javascript',
        path: 'javascript',
        desc: 'JavaScript is my favorite language',
        github: 'https://github.com/Code-Bytes'
      };

      $scope.angular = {
        title: 'angular',
        path: 'javascript/angular',
        desc: 'JavaScript is my favorite language',
        github: 'https://github.com/Code-Bytes'
      };

      $scope.backbone = {
        title: 'backbone',
        path: 'javascript/backbone',
        desc: 'JavaScript is my favorite language',
        github: 'https://github.com/Code-Bytes'
      };

      $scope.ajax = {
        title: 'AJAX',
        path: 'javascript/ajax',
        desc: 'JavaScript is my favorite language',
        github: 'https://github.com/Code-Bytes'
      };

      $scope.css = {
        title: 'CSS3',
        path: 'css/css3',
        desc: 'JavaScript is my favorite language',
        github: 'https://github.com/Code-Bytes'
      };

      $scope.sass = {
        title: 'Sass',
        path: 'css/sass',
        desc: 'JavaScript is my favorite language',
        github: 'https://github.com/Code-Bytes'
      };

      $scope.foundation = {
        title: 'foundation',
        path: 'css/foundation',
        desc: 'JavaScript is my favorite language',
        github: 'https://github.com/Code-Bytes'
      };

      $scope.bourbon = {
        title: 'bourbon',
        path: 'css/bourbon',
        desc: 'JavaScript is my favorite language',
        github: 'https://github.com/Code-Bytes'
      };

      $scope.html = {
        title: 'HTML5',
        path: 'markup/html5',
        desc: 'JavaScript is my favorite language',
        github: 'https://github.com/Code-Bytes'
      };

      $scope.github = {
        title: 'github',
        path: 'versioncontrol/github',
        desc: 'JavaScript is my favorite language',
        github: 'https://github.com/Code-Bytes'
      };

      $scope.displayedLang = $scope.javascript;

      $scope.changeLang = function(lang){
        $scope.displayedLang = lang;
      };




  }

  ]);

}());
