// Import the wsnotifier
// Import the krispykreme
const express = require("express");
const notifier = require('./notifier');
const krispy = require('./krispy');
// import {addHotListener, addNoneListener} from 'krispy';
// import {broadcast, init} from 'notifier';

function main() {
  // Associate the `add` methods
  // from krispykreme module
  // with callbacks you pass to the
  // wsnotifier methods
  notifier.init((socket) => {
      socket.send("You are connected!");
  });
  krispy.addHotListener(function () {
    notifier.broadcast('Hot donuts anyone?');
  });
  krispy.addNoneListener(function () {
    notifier.broadcast("No donuts for you hahah!");
  });
}
main();