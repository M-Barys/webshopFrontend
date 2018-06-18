class SingleCategoryViewCtrl {
    constructor(apiService, $http, $state) {
        this.categoryId = $state.params.categoryId;
    }

}

export default SingleCategoryViewCtrl;