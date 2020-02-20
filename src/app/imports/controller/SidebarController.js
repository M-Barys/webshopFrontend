class SidebarCtrl {
    constructor(apiService, $http) {

        this.apiService = apiService;
        this.loadAllCategories();
    }

    loadAllCategories() {
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

        
    }
}

export default SidebarCtrl;