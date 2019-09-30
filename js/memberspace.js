/*
 The MIT License (MIT)

 Copyright (c) 2015 Lee Barney

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */

//you can put your regular JavaScript code in this file or any other.

var clicks = 0
function sendCount(){

    var message = {"cmd":"increment","count":clicks,"callbackFunc":function(responseAsJSON){
        var MemberSpace = window.MemberSpace || {subdomain: "xminds1"};(function(d){var s = d.createElement("script");s.src = "https://cdn.memberspace.com/scripts/widgets.js";            var e = d.getElementsByTagName("script")[0];e.parentNode.insertBefore(s,e);           }(document));

        (function() {
            MemberSpace.onReady = MemberSpace.onReady || [];
            MemberSpace.onReady.push(function(args) {
                if (args.member) {
                    /* Your custom code goes here */
                    alert('Hi')
                }
            });
        }());
    }.toString()}
    native.postMessage(message)
}