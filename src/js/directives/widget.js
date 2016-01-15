/**
 * Widget Directive
 */

angular
    .module('RDash')
    .directive('rdWidget', rdWidget);

function rdWidget() {
    var directive = {
        transclude: true,
        templateUrl: 'templates/directives/rd_widget.html',
        restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
        /* */
    }
};