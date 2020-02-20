class APIService {
    constructor(backend) {
        console.log("ok, backend ready");
        this.backend = backend;
    }

    loginUser(loginForm){
        return this.backend.loginUser(loginForm);
    }

    getCategories(){
        return this.backend.getCategories();
    }
    getUserProductView(){
        return this.backend.getUserProductView();
    }

    getUserContact(){
         return this.backend.getUserContact();
    }

     getUserAbout(){
         return this.backend.getUserAbout();
     }

     getUserProductInCategory(){
         return this.backend.getUserProductInCategory();
     }

     getUserReferences(){
         return this.backend.getUserReferences();
     }

     getUserServices(){
         return this.backend.getUserServices();
     }

     getUserSingleCategoryView(){
             return this.backend.getUserSingleCategoryView();
         }

    isUserLoggedIn() {
        return this.backend.callLogin()
            .then(result => {
                return {
                    logged: result.loggedIn,
                    user: result
                };
            }, errorCode => {
                return {
                    logged: false,
                    code: errorCode
                };
            });
    }

    checkVersion() {
        return this.backend.getBackendVersion();
    }

    checkFrontendVersion() {
        return this.backend.getExpectedFrontendVersion();
    }

    checkSessionStatus() {
        return this.backend.callLogin()
            .then(result => {
                return {
                    logged: true,
                    user: result
                };
            }, errorCode => {
                return {
                    logged: false,
                    code: errorCode.status
                };
            });
    }

}

export default APIService;