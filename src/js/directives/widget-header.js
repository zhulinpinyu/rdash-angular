/**
 * Widget Header Directive
 */

angular
    .module('RDash')
    .directive('rdWidgetHeader', rdWidgetTitle);

function rdWidgetTitle() {
    var directive = {
        requires: '^rdWidget',
        scope: {
            title: '@',
            icon: '@'
        },
        transclude: true,
        templateUrl: 'templates/directives/rd_widget_header.html',
        restrict: 'E'
    };
    return directive;
};