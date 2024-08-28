define([
        'jscore/ext/net'
        ], function (net){
	'use strict';

	function fetchTeams(fn) {
		net.ajax({
			url: "/team",
			type: "GET",
			dataType: "json",
			success: fn,
			error: fn
		});
	}

	function sendMessage(data, fn){
		net.ajax({
			url: '/message',
			type: 'POST',
			contentType: "application/json",
			dataType: "json",
			data: JSON.stringify(data),
			success: fn
		});
	}
	return {
		fetchTeams: fetchTeams,
		//sendMessage: sendMessage
	};
});
