const fs = require('fs'),
  path = require('path');

const commitMessage = fs.readFileSync(path.join('.git', 'COMMIT_EDITMSG'), 'utf8');
const commitRegex = /^(\[((#[0-9]+)|(TECH))\]\[\S+(\s\&\s\S+)*\]|merge)\s/g;
const errorMsg = "Aborting commit. Commit message must like '[#100][greengerong] commit message' or '[TECH][greengerong] commit message'";

const check = commitRegex.test(commitMessage);
console.log(commitMessage, check);
if (check) {
  console.log('success macth');
  process.exit(0);
} else {
  console.error('error1:' + errorMsg);
  process.exit(1);
}



