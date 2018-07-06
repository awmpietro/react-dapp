
# React Dapp
This is my boiler plate for creating a dapp using React

## Getting Started
```
$ npm install
$ npm install -g webpack webpack-cli
```
Development:
```
$ npm run start
```
Production:
```
$ npm run build
```

## Truffle
Make sure you have truffle installed. Create the contracts and put inside "contracts" folder.
Inside "migrations" folder create the file prefixed with "2_" following same rules as "1_..."
I use Infura, so i don't need to run any node in my machine. Create an account at infura.io and keep you Token Api. Replace the Token Api in file truffle.js

Get the name of the network where you goin to deploy and then run:
truffle migrate --network NAME_OF_THE_NETWORK


