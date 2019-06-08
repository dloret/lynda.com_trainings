"use strict";

var _constants = _interopRequireDefault(require("./constants"));

var _initialState = require("./initialState.json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log("\n  Ski Day Counter\n  ---------------\n  The goal is ".concat(_initialState.goal, " allSkiDays\n  Initially, there are ").concat(_initialState.allSkiDays.length, " ski days in state\n\n  Constants (actions)\n  ---------------\n  ").concat(Object.keys(_constants["default"]).join('\n    '), "\n"));
