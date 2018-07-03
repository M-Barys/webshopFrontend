class APIDataAccessLayer {
    constructor($resource) {
        this.$resource = $resource;
    }

    getUserContact() {
        return this.$resource('/api/user/contact').get();
    }

     getUserAbout() {
        return this.$resource('/api/user/about').get();
     }

    getExpectedFrontendVersion() {
        return this.$resource('/api/version/frontend').get().$promise;
    }

    getBackendVersion() {
        return this.$resource('/api/version/self').get().$promise;
    }
}

export default APIDataAccessLayer;