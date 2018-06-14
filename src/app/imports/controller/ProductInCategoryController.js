class ProductInCategoryCtrl {
    constructor(apiService, $http) {
        $http({
            method: 'GET',
            url: 'http://localhost:8080/api/info/productInCategory'
        }).then((response) => {
            console.log("Response (odpowiedz):")
            console.log(response)
            this.classList = response.data.classList
        })
        this.apiService = apiService;
    }

}

export default  ProductInCategoryCtrl;