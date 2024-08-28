define([
    'jscore/core',
    'container/api',
    'i18n!project/dictionary.json',
    'layouts/TopSection',
    './widgets/messagebox/MessageBox',
    './widgets/teamtable/UserTable',
    './widgets/columnChart/ColumnChart',
    './ProjectView'
], function (core, container, dictionary, TopSection, MessageBox, UserTable, ColumnChart, View) {
    'use strict';

    var defaultActions = [
        {
            type: 'button',
            name: dictionary.get('addTeam'),
            action: function () {
                container.getEventBus().publish('flyout:show', {
                    header: dictionary.get('flyoutHeader'),
                    width: '600px',
                    content: new MessageBox()
                });
            }
        }
    ];

    return core.App.extend({

        View: View,

        /**
         * Called when the app is first instantiated in the current tab for the first time.
         */
        onStart: function () {
            var layout = new TopSection({
                context: this.getContext(),
                breadcrumb: this.options.breadcrumb,
                title: this.options.properties.title,
                defaultActions: defaultActions
            });

            layout.setContent("TopSection");
            layout.attachTo(this.view.getTopSection());

            new UserTable().attachTo(this.view.getTable());
            new ColumnChart().attachTo(this.view.getChartDiv());
        },

        /**
         * This method is called when the user has left your app to view a different app.
         */
        onPause: function () {

        },

        /**
         * Called when the user navigates back to the application.
         */
        onResume: function () {

        },

        /**
         * Called before the user is about to leave your app, either by navigating away or closing the tab.
         */
        onBeforeLeave: function () {

        }

        // See complete documentation about the application lifecycle in the Container docs.

   });
});