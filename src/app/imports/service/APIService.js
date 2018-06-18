class APIService {
    constructor(backend) {
        console.log("ok, backend ready");
        this.backend = backend;
    }

    loginUser(loginForm){
        return this.backend.loginUser(loginForm);
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