class APIDataAccessLayer {
    constructor($resource) {
        this.$resource = $resource;
    }

    getExpectedFrontendVersion() {
        return this.$resource('/api/version/frontend').get().$promise;
    }

    getBackendVersion() {
        return this.$resource('/api/version/self').get().$promise;
    }
}

export default APIDataAccessLayer;