/**
 * Loading Directive
 * @see http://tobiasahlin.com/spinkit/
 */

angular
    .module('RDash')
    .directive('rdLoading', rdLoading);

function rdLoading() {
    var directive = {
        restrict: 'AE',
        templateUrl: 'templates/directives/rd_loading.html'
    };
    return directive;
};