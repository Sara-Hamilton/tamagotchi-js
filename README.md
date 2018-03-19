# _Tamagotchi_

##### Create your own Tamagotchi pet! 03/19/2018

## By Hannah Lee and Sara Hamilton

# Description

An application that demonstrates asynchrony using JavaScript, testing with Jasmine and Karma, and includes Node.js, esLint, and Babel.

## Behavior

| Spec | Input | Output |
| :---------------| :---------------| :---------------|
| Take pet name and creates a Tamagotchi with that name. | Epigotchi | Epigotchi |
| Default food, play, and sleep levels at 15 units each. | Create new Tamagotchi | Food: 15, Play: 15, Sleep: 15 |
| Every second food level decreases by one unit. | Three seconds pass since Tamagotchi was created | Food: 12 |
| Every three seconds play level decreases by one unit. | Three seconds pass since Tamagotchi was created | Play: 14 |
| Every five seconds sleep level decreases by one unit | Five seconds pass since Tamagotchi was created | Sleep: 14 |
| If any of the levels reach zero Tamagotchi dies. | Food: 0  | Tamagotchi dies. |
| Feeding Tamagotchi a meal increases food level by ten. | Feed Tamagotchi a meal. | Food increases by 10 |
| Feeding Tamagotchi a snack increases food level by two | Feed Tamagotchi a snack. | Food increases by 2 |
| Playing with Tamagotchi increase food level by 2, increases play level by 5, and decreases sleep level by 5 | Play with Tamagotchi | Food increases by 2, play increases by 5, sleep decreases by 5|
| Tamagotchi taking a nap decreases food level by 2, and increases sleep level by 3 | Tamagotchi takes nap | Food decreases by 2, sleep increases by 3|
| Tamagotchi going to sleep decreases food level by 5, decreases play level by 5, and increases sleep level by 5 | Tamagotchi goes to sleep | Food decreases by 5, play decreases by 5, sleep increases by 5|

## Technologies Used
------------

```
Application: JavaScript, jQuery, Bootstrap, HTML
Testing: Jasmine, Karma
Environment: npm, webpack, babel, esLint
```

Installation
------------

```
$ git clone https://github.com/...
```

_Requires node.js; instructions to install:_ https://www.learnhowtoprogram.com/javascript/getting-started-with-javascript-2f9a73dc-b7f5-4a22-9101-e69d49f552ac/installing-node-js

Install required npm packages and dependencies:

```
$ npm install
$ npm run build
```

Start the webserver:
```
$ npm run start
```

## Known Bugs

  * _No known bugs at this time._

## Support and contact details

  _To suggest changes, submit a pull request in the GitHub repository._

### License

  _Licensed under MIT license_
-------

GNU GPL v2. Copyright 2018 **Hannah Lee and Sara Hamilton**
