class ReferencesCtrl {
    constructor(apiService, $http) {
        $http({
            method: 'GET',
            url: 'http://localhost:8080/api/info/references'
        }).then((response) => {
            console.log("Response (odpowiedz):")
            console.log(response)
            this.classList = response.data.classList
        })
        this.apiService = apiService;
    }

}

export default ReferencesCtrl;