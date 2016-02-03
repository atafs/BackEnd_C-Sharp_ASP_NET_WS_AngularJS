/// <reference path="../lib/angular.min.js" />

//CONTROLLER AND REGISTER BOTH (method chaining)
//var myAppObject = angular
//                .module("myModule", [])
//                //INJECT FUNCTIONS
//                .controller("myController", function ($scope, $http, $log) {
//                    //OBJECT HTTP SERVICE
//                    $http({
//                        method:'GET', 
//                        url: 'EmployeeService.asmx/GetAllEmployees'
//                    })
//                        //ANONYMOUS FUNCTION: get data and shoe logger
//                        .then(function (response) {
//                            $scope.employees = response.data;
//                            //LOGGER
//                            $log.info(response);
//                        //ANONYMOUS FUNCTION: get error message
//                        }, function (reason) {
//                            $scope.error = reason.data;
//                            $log.info(reason);
//                        });
//                });

                /* OR */

var myAppObject = angular
                .module("myModule", [])
                //INJECT FUNCTIONS
                .controller("myController", function ($scope, $http, $log) {
                    //LOGGER SUCCESS 
                    var successCallBack = function (response) {
                        $scope.employees = response.data;
                        $log.info(response);
                    }
                    //LOGGER FAILURE 
                    var errorCallBack = function (response) {
                        $scope.error = reason.data;
                        $log.info(response);
                    }
                    //OBJECT HTTP SERVICE
                    $http({
                        method: 'GET',
                        url: 'EmployeeService.asmx/GetAllEmployees'
                    })
                        .then(successCallBack, errorCallBack);
                });


