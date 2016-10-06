var notify = require('osx-notifier');
var cron = require('node-cron');

// Stand up every 30 minutes at least.
cron.schedule('* 30 * * *', () => {
  notify({
    type: 'fail',
    title: 'Stand up',
    subtitle: 'Standup, do some excerise or at least drink some water, dude!',
    message: 'It is time for it',
    group: 'taskdoer',
  });
});
