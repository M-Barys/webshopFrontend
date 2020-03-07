class InfoCtrl {
    constructor(apiService, $http, $scope, $location) {

        this.apiService = apiService;
        this.$location = $location;
        this.scope = $scope;
        // debugger;
        // apiService.getUserProductView();

    }

    test (){this.apiService.getUserProductView();}
}

export default InfoCtrl;