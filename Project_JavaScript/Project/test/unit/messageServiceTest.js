/*global define, describe, it, expect */
define([
    'common-lib/services/MessageService'
], function (messageService) {
    'use strict';

    describe('MessageService', function () {

        it('Message Service Success Callback Invoked on 200 Response from Service', function () {
            var server = sinon.fakeServer.create();
            server.respondWith("GET", "message", [200, {
            "Content-Type": "application/json"
            },
            JSON.stringify({})
            ]);

            var successCallback = sinon.spy();
            messageService.getMessage(successCallback);

            server.respond();
            expect(successCallback.calledOnce).to.be.true;
        });

        it('Message Service Failure Callback Invoked on Error Response from Service', function () {
            var server = sinon.fakeServer.create();
            server.respondWith("GET", "message", [500, {
            "Content-Type": "application/json"
            },
            JSON.stringify({})
            ]);

            var failureCallback = sinon.spy();

            messageService.getMessage(failureCallback);
            server.respond();
            expect(failureCallback.calledOnce).to.be.true;
        });

    });

});
