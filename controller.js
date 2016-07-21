var app = angular.module("toDoListModule", []);

app.controller("toDoListController", function($scope) {
	$scope.toDoList = ["cut grass", "water lawn", "clean basement","get a job" ];
		$scope.addChore = function() {
		$scope.toDoList.push($scope.chore);
		$scope.chore = " ";
	}
	$scope.removeItem = function(x) {
		$scope.toDoList.splice(x,1);
	}
});