//process.stdout.write('hello from spinner1.js... \rheyyy\n');

const arr = ['|', '/', '-', '\\', '|', '/', '-', '|'];
let initial = 100;
for (const elem of arr) {
  setTimeout(() => {
    process.stdout.write(`\r${elem}     `);
  }, initial);
  initial += 200;
}
setTimeout (() => {
  console.log("")
}, initial);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|    ');  
// }, 1000 );
// setTimeout(() => {
//   process.stdout.write('\r\/    ');  
// }, 1300 );
// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1800);
// setTimeout(() => {
//   console.log("");
// }, 1850);

