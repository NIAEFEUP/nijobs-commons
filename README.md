# nijobs-commons
Shared code for NIJobs services

## Local Development

Both `nijobs-be` and `nijobs-fe` packages have this package as an npm dependency. This means that, for the changes of this package to reflect on the others you need to publish a new version to npm, and then update the version on the dependents.

This is of course a lot of work and error prone. As such, there is a workaround that lets you see the effects of changes to this package before publishing it: `npm link`.

First, you need to go to the folder of this package and run `npm link`. This will create a symlink of the code to a global npm location on your machine.

Then, for each package you want to be automatically updated with local changes, you must go to its folder, and run `npm link @niaefeup/nijobs-commons`. Every time you run `npm install/uninstall` the link will be broken, and you must re-link the packages.

Keep in mind that this won't probably work correctly when using Docker, since the node_modules folder is not mounted inside the container, therefore this symlink workaround won't work as expected. If you find this blocking your workflow, you can modify the `docker-compose.yml` of the dependent packages (backend or frontend) to mount the `node_modules` folder in a volume only for development.

## Continuous Deployment (CD)
This package will automatically publish new versions to npm whenever there's a push to `main`. (Will also be triggered on PRs, since there is a merge commit pushed to `main`)

This is done with [semantic-release](https://github.com/semantic-release/semantic-release)

It relies on the [conventional commit format](https://conventionalcommits.org/link) so that it can work out the package version increments when publishing updates. 

**IMPORTANT** If you do not follow this convention, the package may fail to be published as the semantic-release won't detect relevant updates.

> From the semantic-release docs:

The table below shows which commit message gets you which release type when semantic-release runs (using the default configuration):

Commit message | Release type
--- | ---
fix(pencil): stop graphite breaking when too much pressure applied |	Patch Release
feat(pencil): add 'graphiteWidth' option | Feature Release
perf(pencil): remove graphiteWidth option<br/><br/>BREAKING CHANGE: The graphiteWidth option has been removed. The default graphite width of 10mm is always used for performance reasons. | Breaking Release

When publishing the new version, the package.lock will automatically be updated as well with the new version, but as this requires a new commit to master, that is done by the `semantic-release-bot`. For this to work correctly, do not restrict push permissions on the `main` branch.

Finally, for this bot to be able to push to the repository, a Github Authentication token (repo) is needed. One was generated in the projetos-niaefeup account. Whichever account generates this, must have access to the repository, obviously.

### npm

For publishing, an organization was created called `niaefeup`. The package is published under this scope (@niaefeup/nijobs-commons) and for that, there is an account (projetos-niaefeup) which generated a publish access token used by semantic-release to have permission to publish the package.

In case something stops working, make sure there is an account belonging to the niaefeup organization, which must generate an access token for publishing. That token must be stored as a Github Secret on this repository with the name `NPM_TOKEN`. (For additional instructions, check the semantic-release docs, specially [this](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/getting-started.md#getting-started)).
