class InfoCtrl {
    constructor(apiService, $http, $scope) {

        this.apiService = apiService;
        this.scope = $scope;
        // this.loadBackground(this.scope);

    }

    loadBackground(scope){
        scope.image = [{
            src: 'src/public/img/infoPic.jpg',
        }];
    }
}

export default InfoCtrl;