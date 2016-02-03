/// <reference path="../lib/angular.min.js" />

//CONTROLLER AND REGISTER BOTH (method chaining)
var myAppObject = angular
                .module("myModule", [])
                .controller("myController", function ($scope, $http) {

                    //CALL THE WS TO THE EMPLOYEES
                    $http.get('EmployeeService.asmx/GetAllEmployees')
                        .then(function (response) {
                            $scope.employees = response.data;
                        });

                });

