const yargs = require('yargs');

const argv = yargs
  .option('seconds', {
    alias: 's',
    type: 'number',
    description: 'Number of seconds for the countdown',
    demandOption: true,
  })
  .check((argv) => {
    if (isNaN(argv.seconds) || argv.seconds <= 0) {
      throw new Error('Please provide a positive number for --seconds');
    }
    return true;
  })
  .help()
  .argv;

const countdown = (seconds) => {
  let remaining = seconds;
  const interval = setInterval(() => {
    console.log('Time left ,${remaining} seconds');
    remaining--;

    if (remaining < 0) {
      clearInterval(interval);
      console.log('Time is up!');
    }
  }, 1000);
};

// Start the countdown
countdown(argv.seconds);
