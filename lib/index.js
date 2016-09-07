'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseHex = undefined;

var _utils = require('./utils');

var _color = require('./color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getHex = function getHex(rawHex) {
  return new _color2.default((0, _utils.makeArray)(rawHex));
};

var parse = function parse(hex) {
  return new _color2.default(hex.map(function (o) {
    o = o = o.replace('#', '');
    var r = parseInt(o.substring(0, 2), 16);
    var g = parseInt(o.substring(2, 4), 16);
    var b = parseInt(o.substring(4, 6), 16);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }));
};

var parseHex = exports.parseHex = (0, _utils.compose)(_utils.join, (0, _utils.chain)(parse), getHex);