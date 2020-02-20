import angular from 'angular';
import Holder from 'holderjs';

let dirModuleName = "holderDirective";

angular.module(dirModuleName, [])
    .directive('holder', [function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                if(attrs.holder)
                    attrs.$set('data-src', attrs.holder);
                Holder.run({images:element[0]});
            }
        };
    }])
    .directive('myBackgroundImage', function () {
        return function (scope, element, attrs) {
            element.css({
                'background-image': 'url(' + attrs.myBackgroundImage + ')',
                'background-size': 'cover',
                'background-repeat': 'no-repeat',
                'background-position': 'center center'
            });
        };
    });



export default dirModuleName;