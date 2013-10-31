#Node alpha prototype

An attempt at doing a quick skeleton for prototypes with the aim of this repo being documentation of that process.

#Requirements

[Node](http://nodejs.org/) and [Npm](https://npmjs.org/) (which comes with node).

You may already have them. Try `node --version` & `npm --version` to see (You'll see the version numbers if you do).

##Running the app

`npm install` to install all dependancies and `./startup.sh` to run the app.

The prototype gets its base template from the [govuk_template](https://github.com/alphagov/govuk_template) and uses [SASS](http://sass-lang.com/documentation/file.SASS_REFERENCE.html) mixins, images and the New Transport font from the [govuk_frontend_toolkit](https://github.com/alphagov/govuk_frontend_toolkit).

There are also some styles borrowed from the [static](https://github.com/alphagov/static) for formatting content. These are not required for a GOV.UK project but it's useful to know where these kind of things live.
