"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var color = function color(value) {
  _classCallCheck(this, color);

  _initialiseProps.call(this);

  this.__value = value;
};

color.of = function (value) {
  return new color(value);
};

var _initialiseProps = function _initialiseProps() {
  var _this = this;

  this.map = function (f) {
    return color.of(f(_this.__value));
  };

  this.join = function () {
    return _this.__value ? _this.__value : color.of(null);
  };

  this.chain = function (f) {
    return _this.map(f).join();
  };
};

exports.default = color;