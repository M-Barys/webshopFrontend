class LoadingController {
    constructor($state, apiService, appState, $urlService, $location, $stateRegistry) {
        this.checks = [];
        this.nrOfChecks = 3;
        this.$stateRegistry = $stateRegistry;
        this.$state = $state;
        this.$location = $location;
        this.$urlService = $urlService;
        this.appState = appState;
        this.verify('BackendStatus', apiService.checkVersion());
        this.verify('SessionStatus', apiService.checkSessionStatus());
        this.verify('FrontendVersion', apiService.checkFrontendVersion());
    }

    verify(checkName, p) {
        let newSize = this.checks.push({
            name: checkName,
            done: false,
            error: false,
            status: 'Loading...'
        });
        let index = newSize - 1;
        //TODO error messages on API by code + translation
        p.then(response => {
            this.checks[index].status = 'Ok';
            this.checks[index].done = true;
        }, error => {
            this.checks[index].status = 'Error';
            this.checks[index].error = true;
            this.checks[index].done = true;
        }).finally(error => this.checkIfAllAreDone());
    }

    checkIfAllAreDone() {
        let allFinished = this.checks.filter(c => c.done).length == this.nrOfChecks;
        if (allFinished) {
            let errors = this.checks.filter(c => c.error);
            if (errors.length == 0) {
                this.$stateRegistry.deregister('loading');
                //All ok, navigate to original routing
                this.$location.url(this.appState.getInitialUrl());
                this.$urlService.listen();
                this.$urlService.sync();
            } else {
                this.displayErrorView = true;
            }
        }
    }

}

export default LoadingController;