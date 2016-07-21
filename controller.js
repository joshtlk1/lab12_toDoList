var app = angular.module("toDoListModule", []);

app.controller("toDoListController", function($scope) {
	$scope.toDoList = ["cut grass", "water lawn", "clean basement","get a job" ];
		$scope.addChore = function() {
		$scope.toDoList.push($scope.chore);
		$scope.chore = " ";
	};
});