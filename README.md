# AI Mirror - React POC

Hi!
This is the POC project to explore the React JS knowledge with developing the React Web Application for the E-Commerce site.

## Development Workflow
 1. [Clone the Repository](../../#clone-the-Repository)
 2. [Create the new branch](../../#create-new-branch)
 3. [Commit and Push on the appropriate](../../#commit-and-push-to-the-appropriate-branch)
 4. [Create the PR for Dev Push](../../#create-the-PR-for-dev-push)
 5. [Test on Dev Site](../../#test-on-live-site)
 4. [Create the PR for Live Push](../../#create-the-PR-for-live-push)
 5. [Test on Live site](../../#test-on-live-site)

## Get Started
### Clone the Repository
Use the following git command to clone the repository to your local directory
```git
git clone https://github.com/SeenivasanBalakrishnan/ai-mirror-react-poc.git
```
### Create the new branch
Create new branch from the `development` branch using following `yarn` command
```git
yarn branch NEW-BRANCH-NAME
```
Example:
```git
yarn branch development-seeni-home-page
```
Always use the following naming convention to create the new branches
> development-USERNAME-MODULE-NAME

Example: `development-seeni-home-page`

### Commit and Push to the appropriate branch
#### Commit using yarn
Use the following command to commit all the changes with the message.
```git
yarn commit "COMMIT_MESSAGE"
```
Example:
```git
yarn commit "Home page has been created"
```
it will add all the tracked and untracked files in to the commit

#### Push using yarn
Use the following command to push the changes into the current branch on the remote server.
```git
Yarn push
```

#### Commit-Push using yarn
Use the following command to commit and push the changes at a time into the current branch on the remote server.
```git
yarn commit-push "COMMIT_MESSAGE"
```
Example:
```git
yarn commit-push "Home page has been created"
```

### Create the PR for Dev Push
Create the PR to push the code to the `development` branch. Once it approved you can merge the branch.

### Test on Dev site
Use the [Dev URL](https://seenivasanb.github.io/click-and-buy/dev/) to test the features in the dev site.
 
### Create the PR for Live Push
Create the PR to push the code to the `main` branch. Once it approved you can merge the branch.

### Test on Live site
Use the [Live URL](https://seenivasanb.github.io/click-and-buy/live/) to test the features in the dev site.
