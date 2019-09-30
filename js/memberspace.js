var MemberSpace = window.MemberSpace || {subdomain: "xminds1"};(function(d){var s = d.createElement("script");s.src = "https://cdn.memberspace.com/scripts/widgets.js"; var e = d.getElementsByTagName("script")[0];e.parentNode.insertBefore(s,e); }(document));

(function() {
    MemberSpace.onReady = MemberSpace.onReady || [];
    MemberSpace.onReady.push(function(args) {
        if (args.member) {
            / Your custom code goes here /
            alert('Hi')
        }
    });
}());