// Import the wsnotifier
// Import the krispykreme
import {addHotListener, addNoneListener} from 'krispy';
import {broadcast, init} from 'notifier';

function main() {
  // Associate the `add` methods
  // from krispykreme module
  // with callbacks you pass to the
  // wsnotifier methods
  init((socket) => {
      socket.send("You are connected!");
  });
  addHostListener(function () {
    broadcast('Hot donuts anyone?');
  });
  addNoneListener(function () {
    broadcast("No donuts for you hahah!");
  });
}
main();