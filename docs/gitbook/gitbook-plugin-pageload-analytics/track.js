require([
    'gitbook',
    'jquery'
], function(gitbook, $) {
    gitbook.events.on('page.change', function() {
        ga(function(tracker) {
            console.log('tracker= ' + tracker);
        });
    });
});
