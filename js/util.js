'use strict';

window.util = (function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  return {
    isEscEvent: function (evt) {
      return evt.keyCode === ESC_KEYCODE;
    },
    isEnterEvent: function (evt) {
      return evt.keyCode === ENTER_KEYCODE;
    }
  };
})();
