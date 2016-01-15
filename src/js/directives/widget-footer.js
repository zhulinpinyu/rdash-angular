/**
 * Widget Footer Directive
 */

angular
    .module('RDash')
    .directive('rdWidgetFooter', rdWidgetFooter);

function rdWidgetFooter() {
    var directive = {
        requires: '^rdWidget',
        transclude: true,
        templateUrl: 'templates/directives/rd_widget_footer.html',
        restrict: 'E'
    };
    return directive;
};