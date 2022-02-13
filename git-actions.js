/*
 * scripts to use in the package.json
 */

const { exec } = require('child_process');
let args = process.argv;
args.splice(0, 2);

const action = args[0];

const handleAdd = (err) => {
    if (err) {
        console.log(err);
        console.log('Unable to add the files into staging!');
        return;
    }
    if (action === 'commit' || action === 'commit-push') {
        const message = args[1];
        exec(`git commit -m "${message}" .`, handleCommit)
    }
    console.log('Add files success!');
    console.log(`https://github.com/SeenivasanBalakrishnan/ai-mirror-react-poc/compare/${exec(`git branch --show-current`)}`);
}

const handleCommit = (err) => {
    if (err) {
        console.log(err);
        console.log('Unable to commit the changes!');
        return;
    }
    console.log('Commit success!');
    if (action === 'commit-push')
        exec(`git push origin HEAD`, handlePush)
}

const handlePush = (err) => {
    if (err) {
        console.log(err);
        console.log('Unable to push the changes!');
        return;
    }
    console.log('Push success!');
}

const handleBranch = (err) => {
    if (err) {
        console.log(err);
        console.log('Unable to create the new branch!');
        return;
    }
    const branchName = args[1];
    console.log(`New branch ${branchName} is created!`);
    exec(`git push -u origin HEAD`, handleBranchPushToRemote);
}

const handleBranchPushToRemote = (err) => {
    if (err) {
        console.log(err);
        console.log('Unable to set the default push branch!');
        return;
    }
    const branchName = args[1];
    console.log(`The '${branchName}' has been pushed to remote!`);
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