import angular from 'angular';
import loremIpsum from 'fast-lorem-ipsum';

let dirModuleName = "loremIpsumDirective";

angular.module(dirModuleName, [])
    .constant('__lip', loremIpsum)
    .directive('lorem', ['__lip', function (lip) {
        return {
            restrict: 'A',
            replace: true,
            scope: {},
            link: function (scope, element, attrs) {
                let output = lip(attrs.lorem || "100w");
                element.html(output);
            }
        };
    }]);

export default dirModuleName;