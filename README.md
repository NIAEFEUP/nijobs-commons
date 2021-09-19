# nijobs-commons
Shared code for NIJobs services

## Continuous Deployment (CD)
This package will automatically publish new versions to npm whenever there's a push to `main`. (Will also be triggered on PRs, since there is a merge commit pushed to `main`)

This is done with [semantic-release](https://github.com/semantic-release/semantic-release)

It relies on the [conventional commit format](https://conventionalcommits.org/link) so that it can work out the package version increments when publishing updates. 

**IMPORTANT** If you do not follow this convention, the package may fail to be published as the semantic-release won't detect relevant updates.

When publishing the new version, the package.lock will automatically be updated as well with the new version, but as this requires a new commit to master, that is done by the `semantic-release-bot`. For this to work correctly, do not restrict push permissions on the `main` branch.

Finally, for this bot to be able to push to the repository, a Github Authentication token (repo) is needed. One was generated in the projetos-niaefeup account. Whichever account generates this, must have access to the repository, obviously.

### npm

For publishing, an organization was created called `niaefeup`. The package is published under this scope (@niaefeup/nijobs-commons) and for that, there is an account (projetos-niaefeup) which generated a publish access token used by semantic-release to have permission to publish the package.

In case something stops working, make sure there is an account belonging to the niaefeup organization, which must generate an access token for publishing. That token must be stored as a Github Secret on this repository with the name `NPM_TOKEN`. (For additional instructions, check the semantic-release docs, specially [this](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/getting-started.md#getting-started)).
