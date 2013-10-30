#!/bin/bash

DIR=.
CSS=assets/stylesheets/
GOVUK_TOOLKIT=node_modules/govuk_frontend_toolkit/govuk_frontend_toolkit/stylesheets/

sass --style expanded --line-numbers --load-path $DIR/$GOVUK_TOOLKIT --watch $DIR/$CSS/application.scss:$DIR/$CSS/application.css &
SASS_PID=$!
trap "kill -9 $SASS_PID; exit 1" INT TERM EXIT
node app
