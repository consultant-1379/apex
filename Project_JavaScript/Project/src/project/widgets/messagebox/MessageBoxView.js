define([
    'jscore/core',
    'template!./MessageBox.html',
    'template!./MessageItem.html',
    'styles!./messageBox.less'
], function (core, template, msgItemTemplate, styles) {

    var _prefix = '.eaRest-wMessageBox';

    return core.View.extend({

        getTemplate: function () {
            return template(this.options);
        },

        getStyle: function () {
            return styles;
        },

        getTeamName: function () {
            return this.getElement().find(_prefix + '-teamName');
        },

        getTeamProject: function () {
            return this.getElement().find(_prefix + '-teamProject');
        },

        getTeamArea: function () {
            return this.getElement().find(_prefix + '-teamArea');
        },

        getButton: function () {
            return this.getElement().find(_prefix + '-sendBtn');
        },

        enableSendButton: function () {
            this.getButton().removeAttribute("disabled", "disabled");
        },

        disableSendButton: function () {
            this.getButton().setAttribute("disabled", "disabled");
        },

        addSendActionEventHandler: function(fn){
            this.getElement().find('.ebInput').addEventHandler('input', fn);
        },
    });
});