var notify = require('osx-notifier');

// Stand up every 30 minutes at least.
setInterval(() => {
  notify({
    type: 'fail',
    title: 'Stand up',
    subtitle: 'Standup, do some excerise or at least drink some water, dude!',
    message: 'It is time for it',
    group: 'taskdoer',
  });
},
//30*60*1000
1000
);
