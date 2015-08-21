angular.module('starter.services', [])
	.factory('userService', function($http) {
		var _location = "34";
		var _unit = "2";
		
		return {
			GetLocation: function() {
				return _location
			},
			SetLocation: function(value){
				_location = value;
			},
			GetUnit: function() {
				return _unit
			},
			SetUnit: function(value){
				_unit = value;
			},
		}
	});
