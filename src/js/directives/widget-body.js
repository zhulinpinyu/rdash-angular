/**
 * Widget Body Directive
 */

angular
    .module('RDash')
    .directive('rdWidgetBody', rdWidgetBody);

function rdWidgetBody() {
    var directive = {
        requires: '^rdWidget',
        scope: {
            loading: '@?',
            classes: '@?'
        },
        transclude: true,
        templateUrl: 'templates/directives/rd_widget_body.html',
        restrict: 'E'
    };
    return directive;
};