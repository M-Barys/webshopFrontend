import rootTemplate from './views/rootTemplate.html';
import workAreaTemplate from './views/workAreaTemplate.html';


//Information section
import mainMenu from './views/partials/mainMenu.html';
import header from './views/partials/header.html';
import footer from './views/partials/footer.html';
import menu from './views/partials/menu.html';

import welcomeView from './views/info/welcome.html';
import servicesView from './views/info/services.html';
import aboutView from './views/info/about.html';
import referencesView from './views/info/references.html';
import contactView from './views/info/contact.html';
import infoPage from './views/infoPage.html';


import singleCategoryView from './views/categories/singleCategoryView.html';
import productInCategoryView from './views/categories/productInCategory.html';
import productView from './views/categories/productView.html';


let appListOfStates = [{
    name: 'root',
    template: rootTemplate,
    abstract: true,
    url: "/"
}, {
    name: 'root.info',
    url: "info",
    views: {
        rootHeader: {
            template: header
        },
        footer: {
            template: footer
        },
        infoPage:{
            template: infoPage,
            controller: 'InfoCtrl',
            controllerAs: 'infoCtrl'
        },
    }
}, {
    name: 'root.info.welcome',
    url: "/welcome",
    views: {
        content: {
            template: welcomeView,
            controller: 'WelcomeCtrl',
            controllerAs: 'welcomeCtrl'
        },
        sidebar:{
            template: menu,
            controller: 'SidebarCtrl',
            controllerAs: 'sidebarCtrl'
        }
    }
}, {
    name: 'root.info.about',
    url: "/about",
    views: {
        content: {
            template: aboutView,
            controller: 'AboutCtrl',
            controllerAs: 'aboutCtrl'
        }
    }
}, {
    name: 'root.info.services',
    url: "/services",
    views: {
        content: {
            template: servicesView,
            controller: 'ServicesCtrl',
            controllerAs: 'servicesCtrl'
        }
    }
}, {
    name: 'root.info.references',
    url: "/references",
    views: {
        content: {
            template: referencesView,
            controller: 'ReferencesCtrl',
            controllerAs: 'referencesCtrl'
        }
    }
}, {
    name: 'root.info.contact',
    url: "/contact",
    views: {
        contentUI: {
            template: contactView,
            controller: 'ContactCtrl',
            controllerAs: 'contactCtrl'
        }
    }
}];
let categoriesStates = [{
    name: 'root.categories',
    abstract: true,
    url: "category/",
    views: {
        rootHeader: {
            template: mainMenu
        },
        rootUIView: {
            template: workAreaTemplate
        }
    }
}, {
    name: 'root.categories.singleCategoryView',
    url: "{categoryId}",
    views: {
        contentUI: {
            template: singleCategoryView,
            controller: 'SingleCategoryViewCtrl',
            controllerAs: 'catCtrl'
        }
    }
}, {
    name: 'root.categories.singleCategoryView.productInCategory',
    url: "/product/{productID}",
    views: {
        contentUI: {
            template: productInCategoryView,
            controller: 'ProductInCategoryCtrl',
            controllerAs: 'productCtrl'
        }
    }
}];
let productStates = [{
    name: 'root.productView',
    abstract: true,
    url: "product/{productID}",
    views: {
        rootHeader: {
            template: mainMenu
        },
        rootUIView: {
            template: workAreaTemplate //TODO maybe change template
        }
    }
}
];

let allRoutes = [].concat(categoriesStates)
    .concat(appListOfStates)
    .concat(productStates);


export default allRoutes;
