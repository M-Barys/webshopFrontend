class SidebarCtrl {
    constructor(apiService, $http, $scope) {

        this.apiService = apiService;
        this.$scope = $scope;
        this.loadAllCategories($scope);
    }

    loadAllCategories(scope) {
        let categories = [{
            id: 1,
            name: "frezarki"},
            {
                id: 2,
                name: "tokarki"},
            {
                id: 3,
                name: "laserycnc"},
            {
                id: 4,
                name: "oprogramowanie"
            }];

        scope.categories = categories;
    }

}

export default SidebarCtrl;