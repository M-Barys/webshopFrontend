class ContactCtrl {
    constructor(apiService, $http) {
        $http({
            method: 'GET',
            url: 'http://localhost:8080/api/info/contact'
        }).then((response) => {
            console.log("Response (odpowiedz):")
            console.log(response)
            this.classList = response.data.classList
        })
        this.apiService = apiService;
    }

}

export default ContactCtrl;

//module('submitContactCtrl', [])
//    .controller('ContactController', ['$scope', function($scope) {
//      $scope.text = 'hello';
//      $scope.submit = function() {
//        if ($scope.text) {
//
//        }
//      };
//    }]);