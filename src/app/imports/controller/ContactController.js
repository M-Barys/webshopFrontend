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