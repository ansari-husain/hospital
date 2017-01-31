var myapp = angular.module("myapp", []);
	myapp.controller('userController', function($scope, $http) {
		
		$scope.base_url = 'http://www.jaliyaninfotech.com/hospital/hospital_service1.php?';
	    
//		$http.get($scope.base_url + 'formf&flag=4&hos_id=7').then(function(response) {
//	        $scope.result = response.data.FormF;
//	        
//	    });
	    
	    $scope.select = function(){
			//alert('id is '+$scope.ms);
			$http.get($scope.base_url + 'formf&hos_id='+$scope.ms).then(function(response) {
		        $scope.result = response.data.FormF;
		    });
		};
		
		$scope.getFormF = function(hos_id,p_id){
//			alert(hos_id);
			console.log('hos_id ',hos_id,'p_id ',p_id);
			$scope.listFormF = [];
			$http.get($scope.base_url + 'getHosDetail&hos_id='+hos_id).then(function(response) {
				console.log('response getHosDetail&hos_id: ',response);
				$scope.listFormF.push(response.data.hos_det[0]);
//				$scope.h_det = response.data.hos_det;
////				alert(h_det.name);
//				$scope.listFormF[0]=$scope.h_det;
				$http.get($scope.base_url + 'getPatientDetail&unique_id='+p_id).then(function(response) {
					console.log('response getPatientDetail&unique_id: ',response);
					$scope.listFormF.push(response.data.patient_det[0]);
//					alert(p_id);
//					$scope.p_det = response.data.patient_det;
//					$scope.listFormF[1]=$scope.p_det;
					console.log('$scope.listFormF: ',$scope.listFormF);
				});
				
			});
			
//			$scope.listFormF = [
//				{val:$scope.h_det},
//				{val:$scope.p_det}
//			];
		};
		
			
		$http.get($scope.base_url + 'getHosId').then(function(response) {
	        $scope.hos_id = response.data.hos_id;
	        
	    });
		
		
		
	});