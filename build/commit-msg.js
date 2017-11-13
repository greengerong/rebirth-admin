const fs = require('fs');

const commitMessage = fs.readFileSync('.git/COMMIT_EDITMSG', 'utf8');
const commitRegex = /^(\[((#[0-9]+)|(TECH))\]\[\S+(\s\&\s\S+)*\]|merge)\s/;
const errorMsg = "Aborting commit. Commit message must like '[#100][greengerong] commit message' or '[TECH][greengerong] commit message'";

if (!commitRegex.test(commitMessage)) {
  console.error(errorMsg);
  process.exit(1)
}
