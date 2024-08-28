/*global define, describe, before, after, beforeEach, afterEach, it, expect */
define([
    'project/Project'
], function (Project) {
    'use strict';

    describe('Project', function () {

        it('Sample BIT test', function () {
            expect(Project).not.to.be.undefined;
        });

    });

});
