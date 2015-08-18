(function (){

  'use strict';

  angular.module('MSPortfolio')

  .controller('PortfolioController', ['$scope', '$location',

    function ($scope, $location) {

      ////////////////////////////////
      //  Skill icon expansion ///////
      ////////////////////////////////

      $scope.js = false;
      $scope.css = false;

      $scope.expandedJS = function(){
        if ($scope.js === false) {
          $scope.js = true;
          } else {
            $scope.js = false;
          }
      };

      $scope.expandedCSS = function(){
        if ($scope.css === false) {
          $scope.css = true;
          } else {
            $scope.css = false;
          }
      };

      $scope.getJSClass = function(path){
        if ($scope.js === false) {
          return "";
          } else {
            return "expanded";
          }
      };

      $scope.getCSSClass = function(path){
        if ($scope.css === false) {
          return "";
          } else {
            return "expanded";
          }
      };


      //////////////////////////////////////
      //  Show portfolio details on click //
      //////////////////////////////////////


      $scope.selectedProject = {
        codebytes: false,
        popquiz: false,
        fud: false
      };

      $scope.showDetails = function(project){
        if ($scope.selectedProject.project === false){
          return "";
        } else {
          return 'showDetails';
        }
      };

      $scope.icon = function(project){
        if ($scope.selectedProject.project === false){
          return "";
        } else {
          return 'fa-rotate-180';
        }
      };

      $scope.details = function(project){
        console.log(project);
        if ($scope.selectedProject.project === false) {
          $scope.selectedProject.project = true;
        } else {
          $scope.selectedProject.project = false;
        }

      };

    }


  ]);

}());
