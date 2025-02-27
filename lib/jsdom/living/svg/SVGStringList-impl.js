"use strict";

const { mixin } = require("../../utils");
const SVGListBase = require("./SVGListBase");

class SVGStringListImpl {
  constructor(globalObject, args, privateData) {
    this._sdGlobalObject = globalObject;

    this._initList(privateData);
  }
}

mixin(SVGStringListImpl.prototype, SVGListBase.prototype);

exports.implementation = SVGStringListImpl;
