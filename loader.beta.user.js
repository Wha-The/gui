// ==UserScript==
// @name         Blumer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Gui for Reading Garden
// @author       You
// @match        https://readinggarden.chinese.ephhk.com/*
// @require      https://code.jquery.com/jquery-2.1.1.min.js
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

$.ajax({

    url: "https://raw.githubusercontent.com/charliemin2009/gui/master/blumer.user.js",
    type: 'GET',
    crossDomain: true,
    dataType: 'jsonp',
    success: function(data) { eval(data) },
    error: function() { alert('Failed!'); },
    beforeSend: setHeader
});
