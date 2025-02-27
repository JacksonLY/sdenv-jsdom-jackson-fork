"use strict";
const { mixin } = require("../../utils");
const PluginArray = require("../generated/PluginArray");
const MimeTypeArray = require("../generated/MimeTypeArray");
const NavigatorIDImpl = require("./NavigatorID-impl").implementation;
const NavigatorLanguageImpl = require("./NavigatorLanguage-impl").implementation;
const NavigatorUserImpl = require("./NavigatorUser-impl").implementation;
const NavigatorOnLineImpl = require("./NavigatorOnLine-impl").implementation;
const NavigatorCookiesImpl = require("./NavigatorCookies-impl").implementation;
const NavigatorPluginsImpl = require("./NavigatorPlugins-impl").implementation;
const NavigatorConcurrentHardwareImpl = require("./NavigatorConcurrentHardware-impl").implementation;

class NavigatorImpl {
  constructor(globalObject, args, privateData) {
    this._sdGlobalObject = globalObject;
    this.userAgent = privateData.userAgent;
    this.languages = Object.freeze(["en-US", "en"]);
    this.plugins = PluginArray.create(this._sdGlobalObject);
    this.mimeTypes = MimeTypeArray.create(this._sdGlobalObject);
  }
}

mixin(NavigatorImpl.prototype, NavigatorIDImpl.prototype);
mixin(NavigatorImpl.prototype, NavigatorLanguageImpl.prototype);
mixin(NavigatorImpl.prototype, NavigatorOnLineImpl.prototype);
mixin(NavigatorImpl.prototype, NavigatorCookiesImpl.prototype);
mixin(NavigatorImpl.prototype, NavigatorPluginsImpl.prototype);
mixin(NavigatorImpl.prototype, NavigatorConcurrentHardwareImpl.prototype);
mixin(NavigatorImpl.prototype, NavigatorUserImpl.prototype);

exports.implementation = NavigatorImpl;
