// control flow using the most popular control flow library - async
// https://github.com/caolan/async/

async.parallel([
    function(){ ... },
    function(){ ... }
], callback);

async.series([
    function(){ ... },
    function(){ ... }
]);
