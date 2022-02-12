/*
 * scripts to use in the package.json
 */
// import { exec } from 'child_process';
const { exec } = require('child_process');
let args = process.argv;
args.splice(0, 2);

console.log(args);

const action = args[0];

const handleAdd = (err) => {
    if (err) {
        console.log(err);
        console.log('Unable to add files!!');
        return;
    }
    if (action === 'commit' || action === 'commit-push') {
        const message = args[1];
        exec(`git commit -m "${message}" .`, handleCommit)
    }
    console.log('Files add success!!');
}

const handleCommit = (err) => {
    if (err) {
        console.log(err);
        console.log('Unable to commit!');
        return;
    }
    console.log('Commit success!');
    if (action === 'commit-push')
        exec(`git push origin HEAD`, handlePush)
}

const handlePush = (err) => {
    if (err) {
        console.log(err);
        console.log('Unable to push!');
        return;
    }
    console.log('Push success!');
}

const handleBranch = (err) => {
    if (err) {
        console.log(err);
        console.log('Unable to create branch!');
        return;
    }
    const branchName = args[1];
    console.log(`New branch ${branchName} is created!!`);
}

switch (action) {
    case 'commit':
        exec(`git add .`, handleAdd)
        break;
    case 'commit-push':
        exec(`git add .`, handleAdd);
        break;
    case 'push':
        exec(`git push origin HEAD`, handlePush)
        break;
    case 'branch':
        const branchName = args[1];
        exec(`git checkout -b ${branchName} origin/development`, handleBranch)
        break;
}