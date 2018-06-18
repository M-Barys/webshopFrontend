import rootTemplate from './views/rootTemplate.html';
import rootMenuPartial from './views/partials/rootMenu.html';
import workAreaTemplate from './views/workAreaTemplate.html';


//Information section
import menuInfoSections from './views/partials/menuInfoSections.html';

import welcomeView from './views/info/welcome.html';
import servicesView from './views/info/services.html';
import aboutView from './views/info/about.html';
import referencesView from './views/info/references.html';
import contactView from './views/info/contact.html';
import infoContent from './views/infoContent.html';

import singleCategoryView from './views/categories/singleCategoryView.html';
import productInCategoryView from './views/categories/productInCategory.html';
import productView from './views/categories/productView.html';
import bagsView from './views/categories/bagsView.html';





let appListOfStates = [{
    name: 'root',
    template: rootTemplate,
    abstract: true,
    url: "/"
},  {
      name: 'root.info',
      url: "info",
      views: {
          rootHeader: {
              template: menuInfoSections
          },
          rootUIView: {
              template: infoContent
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
                  controller: 'InfoAboutCtrl',
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
}];
let categoriesStates = [{
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
                name: 'root.categories.singleCategoryView',
                abstract: true,
                url: "{categoryId}",
                views: {
                    contentUI: {
                        template: singleCategoryView,
                        controller: 'SingleCategoryViewCtrl',
                        controllerAs: 'SingleCategoryViewCtrl'
                    }
                }
}, {
                name: 'root.categories.singleCategoryView.productInCategory',
                url: "/product/{productID}",
                views: {
                    contentUI: {
                        template: productInCategoryView,
                        controller: 'productInCategoryCtrl',
                        controllerAs: 'productInCategoryCtrl'
                    }
                }
}, {
          name: 'root.categories.singleCategoryView.bagsView',
          url: "/bagsView/{categoryId}",
          views: {
              contentUI: {
                  template: bagsView,
                  controller: 'BagsViewCtrl',
                  controllerAs: 'bagsViewCtrl'
              }
          }
  }

];
let productStates = [{
      name: 'root.productView',
      abstract: true,
      url: "product/{productID}",
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

let allRoutes = [].concat(categoriesStates)
    .concat(appListOfStates)
    .concat(productStates);


  export default allRoutes;
