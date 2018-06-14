import rootTemplate from './views/rootTemplate.html';
import loadingTemplate from './views/loadingTemplate.html';

//Information section
import menuInfoSections from './views/partials/menuInfoSections.html';

import welcome from './views/info/welcome.html';
import services from './views/info/services.html';
import about from './views/info/about.html';
import references from './views/info/references.html';
import contact from './views/info/contact.html';

import singleCategoryView from './views/categories/singleCategoryView.html';
import productInCategory from './views/categories/productInCategory.html';
import productView from './views/categories/productView.html';





let appListOfStates = [{
    name: 'root',
    template: rootTemplate,
    abstract: true,
    url: "/"
}, {
    name: 'loading',
    template: loadingTemplate,
    url: "loading",
    controllerAs: 'loadCtrl',
    controller: 'LoadingController'
},  {
      name: 'root.info',
      url: "info",
      views: {
          rootHeader: {
              template: menuInfoSections
          },
          rootUIView: {
              template: InfoContent
          }
      }
}, {
        name: 'root.info.welcome',
        url: "/welcome",
        views: {
            contentUI: {
                template: welcomeView,
                controller: 'WelcomeCtrl',
                controllerAs: 'welcomeCtrl'
            }
        }
}, {
          name: 'root.info.about',
          url: "/about",
          views: {
              contentUI: {
                  template: aboutView,
                  controller: 'AboutCtrl',
                  controllerAs: 'aboutCtrl'
              }
          }
}, {
            name: 'root.info.services',
            url: "/service",
            views: {
                contentUI: {
                    template: servicesView,
                    controller: 'ServicesCtrl',
                    controllerAs: 'servicesCtrl'
                }
            }
}, {
              name: 'root.info.references',
              url: "/references",
              views: {
                  contentUI: {
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
},let settingsStates = [{
      name: 'root.categories',
      abstract: true,
      url: "category/",
      views: {
          rootHeader: {
              template: rootMenuPartial
          },
          rootUIView: {
              template: workAreaTemplate
          }
      }
},  {
                name: 'root.categories.SingleCategoryView',
                abstract: true,
                url: “{categoryId}”,
                views: {
                    contentUI: {
                        template: SingleCategoryView,
                        controller: 'SingleCategoryViewCtrl',
                        controllerAs: 'SingleCategoryViewCtrl'
                    }
                }
}, {
                name: 'root.categories.SingleCategoryView.productInCategory',
                url: “/product/{productID}”,
                views: {
                    contentUI: {
                        template: productInCategoryView,
                        controller: 'productInCategoryCtrl',
                        controllerAs: 'productInCategoryCtrl'
                    }
                }
},let settingsStates = [{
      name: 'root.productView',
      abstract: true,
      url: “product/{productID}”,
      views: {
          rootHeader: {
              template: rootMenuPartial
          },
          rootUIView: {
              template: workAreaTemplate //TODO maybe change template
          }
      }
}
];


  export default allRoutes;
