define([
    'jscore/core',
    'text!./Project.html',
    'styles!./Project.less'
], function (core, template, styles) {
    var _prefix = '.eaProject';

    return core.View.extend({

        getTemplate: function () {
            return template;
        },

        getStyle: function () {
            return styles;
        },

        getTopSection: function () {
            return this.getElement().find(_prefix + '-topsection');
        },

        getTable: function () {
            return this.getElement().find(_prefix + '-table');
        },

        getChartDiv: function () {
            return this.getElement().find(_prefix + '-chart');
        }
    });
});