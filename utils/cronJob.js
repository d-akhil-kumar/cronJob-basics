const cronJob = require('node-cron')

cronJob.schedule('* * * * *', function() {
    console.log('running a task every minute');
});

module.exports = cronJob