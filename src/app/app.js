import angular from 'angular';
import ngResource from 'angular-resource';
import ngMockE2E from 'angular-mocks';
import uiRouter from '@uirouter/angularjs';
import {
    Visualizer,
    StateVisualizer
} from '@uirouter/visualizer';
import 'bootstrap';


import '../style/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import appListOfStates from "./imports/routing/routingRoot";
import holderJSDir from "./imports/directives/holderDirective";
import loremJSDir from "./imports/directives/lorem.js";
import APIService from "./imports/service/APIService";
import APIDataAccessLayer from "./imports/service/backend/APIDataAccessLayer"
import ContactCtrl from "./imports/controller/ContactController";
import InfoCtrl from "./imports/controller/InfoController";

import AboutCtrl from "./imports/controller/AboutController";
import CategoriesCtrl from "./imports/controller/CategoriesController";
import SingleCategoryViewCtrl from "./imports/controller/SingleCategoryViewController";
import WelcomeCtrl from "./imports/controller/WelcomeController";
import ProductViewCtrl from "./imports/controller/ProductViewController";
import ServicesCtrl from "./imports/controller/ServicesController";
import ReferencesCtrl from "./imports/controller/ReferencesController";
import ProductInCategoryCtrl from "./imports/controller/ProductInCategoryController";

let app = () => {
    return {
        template: require('./app.html'),
        controller: 'AppCtrl',
        controllerAs: 'app'
    }
};

class AppCtrl {
    constructor($state) {
        this.$state = $state;
    }
}

function configureInitialRouting($locationProvider, $urlServiceProvider, $stateRegistryProvider) {
    $locationProvider.html5Mode(false);
    $urlServiceProvider.rules.otherwise('/info');
    appListOfStates.forEach(s => $stateRegistryProvider.register(s));
}


function bindStateOnScope($rootScope, $state, $stateParams, $http, $transitions) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $http.defaults.withCredentials = true;
    console.log('App injector run.');
}

function bindVisualizer($uiRouter, $trace) {
    $uiRouter.plugin(Visualizer, {
        state: false
    });
    StateVisualizer.create($uiRouter, undefined, {
        height: 600,
        width: 600
    });
    $trace.enable('TRANSITION');
}

const MODULE_NAME = 'webstore';

angular.module(MODULE_NAME, [
    ngResource,
    uiRouter,
    holderJSDir,
    loremJSDir
])
    .directive('app', app)
    .controller('AppCtrl', AppCtrl)
    .controller('InfoCtrl', InfoCtrl)
    .controller('AboutCtrl', AboutCtrl)
    .controller( 'ContactCtrl', ContactCtrl)
    .controller( 'WelcomeCtrl', WelcomeCtrl)
    .controller( 'ServicesCtrl', ServicesCtrl)
    .controller( 'ReferencesCtrl', ReferencesCtrl)
    .controller( 'CategoriesCtrl', CategoriesCtrl)
    .controller('ProductViewCtrl', ProductViewCtrl)
    .controller('ProductInCategoryCtrl', ProductInCategoryCtrl)
    .controller('SingleCategoryViewCtrl', SingleCategoryViewCtrl)
    .config(configureInitialRouting)
    .service('apiService', APIService)
    .service('backend', APIDataAccessLayer)
    .run(bindStateOnScope)
    .run(bindVisualizer);



export default MODULE_NAME;