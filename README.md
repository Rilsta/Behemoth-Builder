# Behemoth Builder

Behemoth Builder is an independent project using Ember.js and Sass to make a fun little monster creator game. Users will be able to make their own combinations of monster parts and store them in a gallery.
* [View Application](http://still-caverns-94537.herokuapp.com/)

## Prerequisites

You will need the following properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/Rilsta/Behemoth-Builder.git` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit the app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Deployed using Heroku:
* Install [Heroku Toolbelt](https://toolbelt.heroku.com)
* Log into Heroku using the command line
* cd to your project directory
* run `heroku create --buildpack https://github.com/tonycoco/heroku-buildpack-ember-cli.git`
* run `git push heroku master`
* navigate to heroku generated page and enjoy!

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
