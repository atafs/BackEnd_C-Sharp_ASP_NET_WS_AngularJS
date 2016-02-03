/// <reference path="../lib/angular.min.js" />

//CONTROLLER AND REGISTER BOTH (method chaining)
var myAppObject = angular
                .module("myModule", [])
                //INJECT SCOPE OBJECT
                .controller("myController", function ($scope, stringService) {
                    $scope.transformString = function (input) {                  
                        $scope.output = stringService.processString(input);
                    }
                });


