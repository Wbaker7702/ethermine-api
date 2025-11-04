// Quick test to verify the refactored code works
const Ethermine = require('./src/index.js');

const ethermine = new Ethermine();

console.log('Testing Promise support...');
ethermine.getPoolStats()
  .then(data => {
    console.log('✓ Promise test passed');
    console.log('Status:', data.status);
  })
  .catch(err => {
    console.error('✗ Promise test failed:', err.message);
    process.exit(1);
  });

console.log('Testing callback support...');
ethermine.getPoolStats((err, data) => {
  if (err) {
    console.error('✗ Callback test failed:', err);
    process.exit(1);
  } else {
    console.log('✓ Callback test passed');
    console.log('Status:', data.status);
  }
});
