(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("map-promisified"), require("mapbox-gl"));
	else if(typeof define === 'function' && define.amd)
		define(["map-promisified", "mapbox-gl"], factory);
	else if(typeof exports === 'object')
		exports["vue-mapbox-gl"] = factory(require("map-promisified"), require("mapbox-gl"));
	else
		root["vue-mapbox-gl"] = factory(root["map-promisified"], root["mapbox-gl"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__2191__, __WEBPACK_EXTERNAL_MODULE__2ff6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "vue-mapbox-gl.umd." + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = (typeof self !== 'undefined' ? self : this)["webpackJsonpvue_mapbox_gl"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpvue_mapbox_gl"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "01f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var $iterCreate = __webpack_require__("41a0");
var setToStringTag = __webpack_require__("7f20");
var getPrototypeOf = __webpack_require__("38fd");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "02f4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var defined = __webpack_require__("be13");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "0390":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("02f4")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "0a49":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("9b43");
var IObject = __webpack_require__("626a");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var asc = __webpack_require__("cd1c");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "1169":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("2d95");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "1991":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("9b43");
var invoke = __webpack_require__("31f4");
var html = __webpack_require__("fab2");
var cel = __webpack_require__("230e");
var global = __webpack_require__("7726");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("2d95")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "1c01":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("9e1e"), 'Object', { defineProperty: __webpack_require__("86cc").f });


/***/ }),

/***/ "1fa8":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("cb7c");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("b0c5");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");
var regexpExec = __webpack_require__("520a");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "2191":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2191__;

/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("2d95");
var TAG = __webpack_require__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "2621":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "27ee":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("23c6");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var Iterators = __webpack_require__("84f2");
module.exports = __webpack_require__("8378").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "28a5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__("aae3");
var anObject = __webpack_require__("cb7c");
var speciesConstructor = __webpack_require__("ebd6");
var advanceStringIndex = __webpack_require__("0390");
var toLength = __webpack_require__("9def");
var callRegExpExec = __webpack_require__("5f1b");
var regexpExec = __webpack_require__("520a");
var fails = __webpack_require__("79e5");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__("214f")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var $toString = __webpack_require__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2ae0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapboxGl_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("76e8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapboxGl_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapboxGl_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapboxGl_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2f21":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("79e5");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "2fdb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__("5ca1");
var context = __webpack_require__("d2c8");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__("5147")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "2ff6":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2ff6__;

/***/ }),

/***/ "31f4":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "33a4":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("84f2");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("69a8");
var toObject = __webpack_require__("4bf8");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("2aeb");
var descriptor = __webpack_require__("4630");
var setToStringTag = __webpack_require__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "456d":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("4bf8");
var $keys = __webpack_require__("0d58");

__webpack_require__("5eda")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "4a59":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("9b43");
var call = __webpack_require__("1fa8");
var isArrayIter = __webpack_require__("33a4");
var anObject = __webpack_require__("cb7c");
var toLength = __webpack_require__("9def");
var getIterFn = __webpack_require__("27ee");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "504c":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("9e1e");
var getKeys = __webpack_require__("0d58");
var toIObject = __webpack_require__("6821");
var isEnum = __webpack_require__("52a7").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),

/***/ "5147":
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "520a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("0bfb");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "551c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var global = __webpack_require__("7726");
var ctx = __webpack_require__("9b43");
var classof = __webpack_require__("23c6");
var $export = __webpack_require__("5ca1");
var isObject = __webpack_require__("d3f4");
var aFunction = __webpack_require__("d8e8");
var anInstance = __webpack_require__("f605");
var forOf = __webpack_require__("4a59");
var speciesConstructor = __webpack_require__("ebd6");
var task = __webpack_require__("1991").set;
var microtask = __webpack_require__("8079")();
var newPromiseCapabilityModule = __webpack_require__("a5b8");
var perform = __webpack_require__("9c80");
var userAgent = __webpack_require__("a25f");
var promiseResolve = __webpack_require__("bcaa");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("2b4c")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("dcbc")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("7f20")($Promise, PROMISE);
__webpack_require__("7a56")(PROMISE);
Wrapper = __webpack_require__("8378")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("5cc5")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "58b2":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__("9e1e"), 'Object', { defineProperties: __webpack_require__("1495") });


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5cc5":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("2b4c")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "5eda":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("5ca1");
var core = __webpack_require__("8378");
var fails = __webpack_require__("79e5");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "5f1b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("23c6");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "6762":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("5ca1");
var $includes = __webpack_require__("c366")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("9c6c")('includes');


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "6d67":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("5ca1");
var $map = __webpack_require__("0a49")(1);

$export($export.P + $export.F * !__webpack_require__("2f21")([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "76e8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7a56":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var dP = __webpack_require__("86cc");
var DESCRIPTORS = __webpack_require__("9e1e");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("86cc").f;
var has = __webpack_require__("69a8");
var TAG = __webpack_require__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "8079":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var macrotask = __webpack_require__("1991").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("2d95")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "811f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "8615":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("5ca1");
var $values = __webpack_require__("504c")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "8e6e":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__("5ca1");
var ownKeys = __webpack_require__("990b");
var toIObject = __webpack_require__("6821");
var gOPD = __webpack_require__("11e9");
var createProperty = __webpack_require__("f1ae");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "990b":
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__("9093");
var gOPS = __webpack_require__("2621");
var anObject = __webpack_require__("cb7c");
var Reflect = __webpack_require__("7726").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9c80":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a25f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "a481":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("cb7c");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var toInteger = __webpack_require__("4588");
var advanceStringIndex = __webpack_require__("0390");
var regExpExec = __webpack_require__("5f1b");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__("214f")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "a5b8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("d8e8");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var defined = __webpack_require__("be13");
var fails = __webpack_require__("79e5");
var spaces = __webpack_require__("fdef");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("d3f4");
var cof = __webpack_require__("2d95");
var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("cadf");
var getKeys = __webpack_require__("0d58");
var redefine = __webpack_require__("2aba");
var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var wks = __webpack_require__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "b0c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("520a");
__webpack_require__("5ca1")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "bcaa":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var isObject = __webpack_require__("d3f4");
var newPromiseCapability = __webpack_require__("a5b8");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c5f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var cof = __webpack_require__("2d95");
var inheritIfRequired = __webpack_require__("5dbc");
var toPrimitive = __webpack_require__("6a99");
var fails = __webpack_require__("79e5");
var gOPN = __webpack_require__("9093").f;
var gOPD = __webpack_require__("11e9").f;
var dP = __webpack_require__("86cc").f;
var $trim = __webpack_require__("aa77").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("2aeb")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("9e1e") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("2aba")(global, NUMBER, $Number);
}


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("9c6c");
var step = __webpack_require__("d53b");
var Iterators = __webpack_require__("84f2");
var toIObject = __webpack_require__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "cd1c":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("e853");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d25f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("5ca1");
var $filter = __webpack_require__("0a49")(2);

$export($export.P + $export.F * !__webpack_require__("2f21")([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "d2c8":
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__("aae3");
var defined = __webpack_require__("be13");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "d92a":
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__("5ca1");

$export($export.P, 'Function', { bind: __webpack_require__("f0c1") });


/***/ }),

/***/ "dcbc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("2aba");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e853":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var isArray = __webpack_require__("1169");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "ebd6":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("cb7c");
var aFunction = __webpack_require__("d8e8");
var SPECIES = __webpack_require__("2b4c")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "f0c1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__("d8e8");
var isObject = __webpack_require__("d3f4");
var invoke = __webpack_require__("31f4");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "f1ae":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "f3e2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("5ca1");
var $forEach = __webpack_require__("0a49")(0);
var STRICT = __webpack_require__("2f21")([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "f605":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "MapboxGlMap", function() { return /* reexport */ MapboxGlMap; });
__webpack_require__.d(__webpack_exports__, "MapboxGlAttributionControl", function() { return /* reexport */ MapboxGlAttributionControl; });
__webpack_require__.d(__webpack_exports__, "MapboxGlFullscreenControl", function() { return /* reexport */ MapboxGlFullscreenControl; });
__webpack_require__.d(__webpack_exports__, "MapboxGlGeolocateControl", function() { return /* reexport */ MapboxGlGeolocateControl; });
__webpack_require__.d(__webpack_exports__, "MapboxGlNavigationControl", function() { return /* reexport */ MapboxGlNavigationControl; });
__webpack_require__.d(__webpack_exports__, "MapboxGlScaleControl", function() { return /* reexport */ MapboxGlScaleControl; });
__webpack_require__.d(__webpack_exports__, "MapboxGlCanvasLayer", function() { return /* reexport */ MapboxGlCanvasLayer; });
__webpack_require__.d(__webpack_exports__, "MapboxGlGeojsonLayer", function() { return /* reexport */ MapboxGlGeojsonLayer; });
__webpack_require__.d(__webpack_exports__, "MapboxGlImageLayer", function() { return /* reexport */ MapboxGlImageLayer; });
__webpack_require__.d(__webpack_exports__, "MapboxGlRasterLayer", function() { return /* reexport */ MapboxGlRasterLayer; });
__webpack_require__.d(__webpack_exports__, "MapboxGlVectorLayer", function() { return /* reexport */ MapboxGlVectorLayer; });
__webpack_require__.d(__webpack_exports__, "MapboxGlVideoLayer", function() { return /* reexport */ MapboxGlVideoLayer; });
__webpack_require__.d(__webpack_exports__, "MapboxGlMarkerUi", function() { return /* reexport */ MapboxGlMarkerUi; });
__webpack_require__.d(__webpack_exports__, "MapboxGlPopupUi", function() { return /* reexport */ MapboxGlPopupUi; });
__webpack_require__.d(__webpack_exports__, "withEvents", function() { return /* reexport */ main_withEvents; });
__webpack_require__.d(__webpack_exports__, "withControlSelfEvents", function() { return /* reexport */ main_withControlSelfEvents; });
__webpack_require__.d(__webpack_exports__, "withControl", function() { return /* reexport */ main_withControl; });
__webpack_require__.d(__webpack_exports__, "withLayer", function() { return /* reexport */ main_withLayer; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"45c14fac-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/map/MapboxGl.vue?vue&type=template&id=3bf12b04&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mapbox-gl-map-wrapper"},[_vm._m(0),(_vm.initialized)?_vm._t("default"):_vm._e()],2)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"container",attrs:{"id":_vm.container}})}]


// CONCATENATED MODULE: ./src/lib/map/MapboxGl.vue?vue&type=template&id=3bf12b04&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.define-property.js
var es6_object_define_property = __webpack_require__("1c01");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.define-properties.js
var es6_object_define_properties = __webpack_require__("58b2");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__("8e6e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__("f3e2");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.filter.js
var es6_array_filter = __webpack_require__("d25f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("551c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__("6d67");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: ./src/lib/map/styles/mapbox-gl.css
var mapbox_gl = __webpack_require__("811f");

// CONCATENATED MODULE: ./src/lib/mixins/withEvents.js











function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* harmony default export */ var withEvents = ({
  methods: {
    /**
    ** Emit Vue event with additional data.
    **
    ** @param { string } name EventName
    ** @param { Object } [ data = {} ] Additional data
    **/
    _emitEvent: function _emitEvent(name) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.$emit(name, _objectSpread({
        map: this.map,
        component: this
      }, data));
    },
    // _emitEvent

    /**
    ** Emit Vue event with Mapbox event as additional data.
    **
    ** @param { Object } event
    **/
    _emitMapEvent: function _emitMapEvent(event) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this._emitEvent(event.type, _objectSpread({
        mapboxEvent: event
      }, data));
    } // _emitMapEvent

  } // methods

}); // export default
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.bind.js
var es6_function_bind = __webpack_require__("d92a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.entries.js
var es7_object_entries = __webpack_require__("ffc1");

// CONCATENATED MODULE: ./src/lib/mixins/withWatchers.js






var watchers = {
  /**
  **
  **/
  maxBounds: function maxBounds(newVal) {
    this.map.setMaxBounds(newVal);
  },
  // maxBounds

  /**
  **
  **/
  minZoom: function minZoom(newVal) {
    this.map.setMinZoom(newVal);
  },
  // minZoom

  /**
  **
  **/
  maxZoom: function maxZoom(newVal) {
    this.map.setMaxZoom(newVal);
  },
  // maxZoom

  /**
  **
  **/
  mapStyle: function mapStyle(newVal) {
    this.map.setStyle(newVal);
  },
  // mapStyle

  /**
  ** TODO: Make 'bounds' synced prop.
  ** bounds ( newVal ) { this.map.fitBounds( newVal, { linear: true, duration: 0 } ) },
  **/
  collisionBoxes: function collisionBoxes(newVal) {
    this.map.showCollisionBoxes = newVal;
  },
  // collisionBoxes

  /**
  **
  **/
  tileBoundaries: function tileBoundaries(newVal) {
    this.map.showTileBoundaries = newVal;
  },
  // tileBoundaries

  /**
  **
  **/
  repaint: function repaint(newVal) {
    this.map.repaint = newVal;
  },
  // repaint

  /**
  **
  **/
  zoom: function zoom(newVal) {
    this.map.setZoom(newVal);
  },
  // zoom

  /**
  **
  **/
  center: function center(newVal) {
    this.map.setCenter(newVal);
  },
  // center

  /**
  **
  **/
  bearing: function bearing(newVal) {
    this.map.setBearing(newVal);
  },
  // bearing

  /**
  **
  **/
  pitch: function pitch(newVal) {
    this.map.setPitch(newVal);
  },
  // pitch

  /**
  **
  **/
  light: function light(newVal) {
    this.map.setLigh(newVal);
  } // light

}; // watchers

/**
**
**/

function watcher(prop, callback, newVal, oldVal) {
  var _this = this;

  if (this.initial) return;

  if (this.$listeners["update:".concat(prop)]) {
    if (this.propsIsUpdating[prop]) {
      this._watcher.active = false;
      this.$nextTick(function () {
        _this._watcher.active = true;
      });
    } else {
      this._watcher.active = true;
      callback(newVal, oldVal);
    }

    this.propsIsUpdating[prop] = false;
  } else {
    callback(newVal, oldVal);
  }
}

; // watcher

/**
**
**/

function makeWatchers() {
  var wrappers = {};
  Object.entries(watchers).forEach(function (prop) {
    wrappers[prop[0]] = function (newVal, oldVal) {
      return watcher.call(this, prop[0], prop[1].bind(this), newVal, oldVal);
    };
  });
  return wrappers;
}

; // makeWatchers

/* harmony default export */ var withWatchers = ({
  watch: makeWatchers()
}); // export default
// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// CONCATENATED MODULE: ./src/lib/mixins/withPrivateMethods.js















function withPrivateMethods_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function withPrivateMethods_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { withPrivateMethods_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { withPrivateMethods_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* harmony default export */ var withPrivateMethods = ({
  methods: {
    /**
    ** @private
    **/
    _updateSyncedPropsFabric: function _updateSyncedPropsFabric(prop, data) {
      var _this = this;

      return function () {
        _this.propsIsUpdating[prop] = true;
        var info = typeof data === 'function' ? data() : data;
        return _this.$emit("update:".concat(prop), info);
      };
    },
    // _updateSyncedPropsFabric

    /**
    ** @private
    **/
    _bindPropsUpdateEvents: function _bindPropsUpdateEvents() {
      var _this2 = this;

      var syncedProps = [{
        events: ['moveend'],
        prop: 'center',
        getter: this.map.getCenter.bind(this.map)
      }, {
        events: ['zoomend'],
        prop: 'zoom',
        getter: this.map.getZoom.bind(this.map)
      }, {
        events: ['rotate'],
        prop: 'bearing',
        getter: this.map.getBearing.bind(this.map)
      }, {
        events: ['pitch'],
        prop: 'pitch',
        getter: this.map.getPitch.bind(this.map)
      }
      /**
      ** TODO: make 'bounds' synced prop.
      ** { events: [ 'moveend', 'zoomend', 'rotate', 'pitch' ], prop: 'bounds', getter: this.map.getBounds.bind( this.map ) }
      **/
      ]; // syncedProps

      syncedProps.forEach(function (_ref) {
        var events = _ref.events,
            prop = _ref.prop,
            getter = _ref.getter;
        events.forEach(function (event) {
          if (_this2.$listeners["update:".concat(prop)]) {
            _this2.map.on(event, _this2._updateSyncedPropsFabric(prop, getter));
          }
        }); // forEach
      }); // forEach
    },
    // _bindPropsUpdateEvents

    /**
    ** @private
    **/
    _loadMap: function _loadMap() {
      var _this3 = this;

      return this.mapboxPromise.then(function (mapbox) {
        _this3.mapbox = mapbox.default ? mapbox.default : mapbox;
        return new Promise(function (resolve) {
          if (_this3.accessToken) {
            _this3.mapbox.accessToken = _this3.accessToken;
          }

          var map = new _this3.mapbox.Map(withPrivateMethods_objectSpread(withPrivateMethods_objectSpread({}, _this3._props), {}, {
            container: _this3.$refs.container,
            style: _this3.mapStyle
          })); // map

          map.on('load', function () {
            return resolve(map);
          });
        }); // Promise
      }); // return
    },
    // _loadMap

    /**
    ** @private
    **/
    _RTLTextPluginError: function _RTLTextPluginError(error) {
      this.$emit('rtl-plugin-error', {
        map: this.map,
        error: error
      });
    },
    // _RTLTextPluginError

    /**
    ** @private
    **/
    _bindMapEvents: function _bindMapEvents(events) {
      var _this4 = this;

      Object.keys(this.$listeners).forEach(function (eventName) {
        if (events.includes(eventName)) {
          _this4.map.on(eventName, _this4._emitMapEvent);
        }
      });
    },
    // _bindMapEvents

    /**
    ** @private
    **/
    _unbindEvents: function _unbindEvents(events) {
      var _this5 = this;

      events.forEach(function (eventName) {
        _this5.map.off(eventName, _this5._emitMapEvent);
      });
    } // _unbindEvents

  } // methods

}); // export default
// EXTERNAL MODULE: external {"commonjs":"map-promisified","commonjs2":"map-promisified","amd":"map-promisified","root":"map-promisified"}
var external_commonjs_map_promisified_commonjs2_map_promisified_amd_map_promisified_root_map_promisified_ = __webpack_require__("2191");
var external_commonjs_map_promisified_commonjs2_map_promisified_amd_map_promisified_root_map_promisified_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_map_promisified_commonjs2_map_promisified_amd_map_promisified_root_map_promisified_);

// CONCATENATED MODULE: ./src/lib/mixins/withAsyncActions.js













function withAsyncActions_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function withAsyncActions_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { withAsyncActions_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { withAsyncActions_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/* harmony default export */ var withAsyncActions = ({
  created: function created() {
    this.actions = {};
  },
  // created
  methods: {
    /**
    ** @private
    **/
    _registerAsyncActions: function _registerAsyncActions(map) {
      this.actions = withAsyncActions_objectSpread(withAsyncActions_objectSpread({}, external_commonjs_map_promisified_commonjs2_map_promisified_amd_map_promisified_root_map_promisified_default()(map)), {}, {
        stop: function stop() {
          var _this = this;

          this.map.stop();
          var updatedProps = {
            pitch: this.map.getPitch(),
            zoom: this.map.getZoom(),
            bearing: this.map.getBearing(),
            center: this.map.getCenter()
          };
          Object.entries(updatedProps).forEach(function (prop) {
            _this._updateSyncedPropsFabric(prop[0], prop[1])();
          });
          return Promise.resolve(updatedProps);
        } // stop

      }); // actions
    } // _registerAsyncActions

  } // methods

}); // export default
// CONCATENATED MODULE: ./src/lib/events/mapEvents.js
/* harmony default export */ var mapEvents = ({
  resize: {
    name: 'resize'
  },
  webglcontextlost: {
    name: 'webglcontextlost'
  },
  webglcontextrestored: {
    name: 'webglcontextrestored'
  },
  remove: {
    name: 'remove'
  },
  movestart: {
    name: 'movestart'
  },
  load: {
    name: 'load'
  },
  contextmenu: {
    name: 'contextmenu'
  },
  dblclick: {
    name: 'dblclick'
  },
  click: {
    name: 'click'
  },
  touchcancel: {
    name: 'touchcancel'
  },
  touchmove: {
    name: 'touchmove'
  },
  touchend: {
    name: 'touchend'
  },
  touchstart: {
    name: 'touchstart'
  },
  dataloading: {
    name: 'dataloading'
  },
  mousemove: {
    name: 'mousemove'
  },
  mouseup: {
    name: 'mouseup'
  },
  mousedown: {
    name: 'mousedown'
  },
  sourcedataloading: {
    name: 'sourcedataloading'
  },
  error: {
    name: 'error'
  },
  data: {
    name: 'data'
  },
  styledata: {
    name: 'styledata'
  },
  sourcedata: {
    name: 'sourcedata'
  },
  mouseout: {
    name: 'mouseout'
  },
  styledataloading: {
    name: 'styledataloading'
  },
  moveend: {
    name: 'moveend'
  },
  move: {
    name: 'move'
  },
  render: {
    name: 'render'
  },
  zoom: {
    name: 'zoom'
  },
  zoomstart: {
    name: 'zoomstart'
  },
  zoomend: {
    name: 'zoomend'
  },
  boxzoomstart: {
    name: 'boxzoomstart'
  },
  boxzoomcancel: {
    name: 'boxzoomcancel'
  },
  boxzoomend: {
    name: 'boxzoomend'
  },
  rotate: {
    name: 'rotate'
  },
  rotatestart: {
    name: 'rotatestart'
  },
  rotateend: {
    name: 'rotateend'
  },
  dragend: {
    name: 'dragend'
  },
  drag: {
    name: 'drag'
  },
  dragstart: {
    name: 'dragstart'
  },
  pitch: {
    name: 'pitch'
  },
  idle: {
    name: 'idle'
  }
}); // export default
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// CONCATENATED MODULE: ./src/lib/map/options.js




/* harmony default export */ var options = ({
  /**
  **
  **/
  container: {
    type: [String, HTMLElement],
    default: function _default() {
      return "map-".concat(('' + Math.random()).split('.')[1]);
    } // default

  },
  // container

  /**
  **
  **/
  accessToken: {
    type: String,
    default: undefined
  },
  // accessToken

  /**
  **
  **/
  attributionControl: {
    type: Boolean,
    default: false
  },
  // attributionControl

  /**
  **
  **/
  customAttribution: {
    type: [String, Array],
    default: null
  },
  // customAttribution

  /**
  **
  **/
  minZoom: {
    type: Number,
    default: 0
  },
  // minZoom

  /**
  **
  **/
  maxZoom: {
    type: Number,
    default: 22
  },
  // maxZoom

  /**
  **
  **/
  mapStyle: {
    type: [String, Object],
    required: true
  },
  // mapStyle

  /**
  **
  **/
  hash: {
    type: Boolean,
    default: true
  },
  // hash

  /**
  **
  **/
  interactive: {
    type: Boolean,
    default: true
  },
  // interactive

  /**
  **
  **/
  bearingSnap: {
    type: Number,
    default: 7
  },
  // bearingSnap

  /**
  **
  **/
  pitchWithRotate: {
    type: Boolean,
    default: true
  },
  // pitchWithRotate

  /**
  **
  **/
  clickTolerance: {
    type: Number,
    default: 3
  },
  // clickTolerance

  /**
  **
  **/
  logoPosition: {
    type: String,
    default: 'bottom-right',
    validator: function validator(val) {
      return ['top-left', 'top-right', 'bottom-left', 'bottom-right'].includes(val);
    }
  },
  // logoPosition

  /**
  **
  **/
  failIfMajorPerformanceCaveat: {
    type: Boolean,
    default: false
  },
  // failIfMajorPerformanceCaveat

  /**
  **
  **/
  preserveDrawingBuffer: {
    type: Boolean,
    default: false
  },
  // preserveDrawingBuffer

  /**
  **
  **/
  refreshExpiredTiles: {
    type: Boolean,
    default: true
  },
  // refreshExpiredTiles

  /**
  **
  **/
  maxBounds: {
    type: Array,
    default: function _default() {
      return undefined;
    }
  },
  // maxBounds

  /**
  **
  **/
  scrollZoom: {
    type: [Boolean, Object],
    default: function _default() {
      return true;
    }
  },
  // scrollZoom

  /**
  **
  **/
  boxZoom: {
    type: Boolean,
    default: true
  },
  // boxZoom

  /**
  **
  **/
  dragRotate: {
    type: Boolean,
    default: true
  },
  // dragRotate

  /**
  **
  **/
  dragPan: {
    type: Boolean,
    default: true
  },
  // dragPan

  /**
  **
  **/
  keyboard: {
    type: Boolean,
    default: true
  },
  // keyboard

  /**
  **
  **/
  doubleClickZoom: {
    type: Boolean,
    default: false
  },
  // doubleClickZoom

  /**
  **
  **/
  touchZoomRotate: {
    type: [Boolean, Object],
    default: function _default() {
      return true;
    }
  },
  // touchZoomRotate

  /**
  **
  **/
  trackResize: {
    type: Boolean,
    default: true
  },
  // trackResize

  /**
  **
  **/
  center: {
    type: [Object, Array],
    default: undefined
  },
  // center

  /**
  **
  **/
  zoom: {
    type: Number,
    default: 0
  },
  // zoom

  /**
  **
  **/
  bearing: {
    type: Number,
    default: 0
  },
  // bearing

  /**
  **
  **/
  pitch: {
    type: Number,
    default: 0
  },
  // pitch

  /**
  **
  **/
  bounds: {
    type: [Object, Array],
    default: undefined
  },
  // bounds

  /**
  **
  **/
  fitBoundsOptions: {
    type: Object,
    default: undefined
  },
  // fitBoundsOptions

  /**
  **
  **/
  renderWorldCopies: {
    type: Boolean,
    default: true
  },
  // renderWorldCopies

  /**
  **
  **/
  RTLTextPluginUrl: {
    type: String,
    default: undefined
  },
  // RTLTextPluginUrl

  /**
  **
  **/
  light: {
    type: Object,
    default: undefined
  },
  // light

  /**
  **
  **/
  tileBoundaries: {
    type: Boolean,
    default: false
  },
  // tileBoundaries

  /**
  **
  **/
  collisionBoxes: {
    type: Boolean,
    default: false
  },
  // collisionBoxes

  /**
  **
  **/
  repaint: {
    type: Boolean,
    default: false
  },
  // repaint

  /**
  **
  **/
  transformRequest: {
    type: Function,
    default: null
  },
  // transformRequest

  /**
  **
  **/
  maxTileCacheSize: {
    type: Number,
    default: null
  },
  // maxTileCacheSize

  /**
  **
  **/
  localIdeographFontFamily: {
    type: String,
    default: null
  },
  // localIdeographFontFamily

  /**
  **
  **/
  collectResourceTiming: {
    type: Boolean,
    default: false
  },
  // collectResourceTiming

  /**
  **
  **/
  fadeDuration: {
    type: Number,
    default: 300
  },
  // fadeDuration

  /**
  **
  **/
  crossSourceCollisions: {
    type: Boolean,
    default: true
  } // crossSourceCollisions

}); // export default
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/map/MapboxGl.vue?vue&type=script&lang=js&












function MapboxGlvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function MapboxGlvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MapboxGlvue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MapboxGlvue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var MapboxGlvue_type_script_lang_js_ = ({
  name: 'MapboxGl',
  mixins: [withWatchers, withAsyncActions, withPrivateMethods, withEvents],
  props: MapboxGlvue_type_script_lang_js_objectSpread({
    /**
    **
    **/
    mapboxGl: {
      type: Object,
      default: null
    }
  }, options),
  // props
  provide: function provide() {
    var self = this;
    return {
      get mapbox() {
        return self.mapbox;
      },

      // mapbox
      get map() {
        return self.map;
      },

      // map
      get actions() {
        return self.actions;
      } // actions


    }; // return
  },
  // provide
  data: function data() {
    return {
      initial: true,
      initialized: false
    }; // return
  },
  // data
  computed: {
    loaded: function loaded() {
      return this.map ? this.map.loaded() : false;
    },
    // loaded
    version: function version() {
      return this.map ? this.map.version : null;
    },
    // version
    isStyleLoaded: function isStyleLoaded() {
      return this.map ? this.map.isStyleLoaded() : false;
    },
    // isStyleLoaded
    areTilesLoaded: function areTilesLoaded() {
      return this.map ? this.map.areTilesLoaded() : false;
    },
    // areTilesLoaded
    isMoving: function isMoving() {
      return this.map ? this.map.isMoving() : false;
    },
    // isMoving
    canvas: function canvas() {
      return this.map ? this.map.getCanvas() : null;
    },
    // canvas
    canvasContainer: function canvasContainer() {
      return this.map ? this.map.getCanvasContainer() : null;
    },
    // canvasContainer
    images: function images() {
      return this.map ? this.map.listImages() : null;
    } // images

  },
  // computed
  created: function created() {
    this.map = null;
    this.propsIsUpdating = {};
    this.mapboxPromise = this.mapboxGl ? Promise.resolve(this.mapboxGl) : Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "2ff6", 7));
  },
  // created
  mounted: function mounted() {
    var _this = this;

    this._loadMap().then(function (map) {
      _this.map = map;

      if (_this.RTLTextPluginUrl !== undefined) {
        _this.mapbox.setRTLTextPlugin(_this.RTLTextPluginUrl, _this._RTLTextPluginError);
      }

      var eventNames = Object.keys(mapEvents);

      _this._bindMapEvents(eventNames);

      _this._registerAsyncActions(map);

      _this._bindPropsUpdateEvents();

      _this.initial = false;
      _this.initialized = true;

      _this.$emit('load', {
        map: map,
        component: _this
      });
    });
  },
  // mounted
  beforeDestroy: function beforeDestroy() {
    var _this2 = this;

    this.$nextTick(function () {
      if (_this2.map) {
        _this2.map.remove();
      }
    }); // $nextTick
  } // beforeDestroy

}); // export default
// CONCATENATED MODULE: ./src/lib/map/MapboxGl.vue?vue&type=script&lang=js&
 /* harmony default export */ var map_MapboxGlvue_type_script_lang_js_ = (MapboxGlvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lib/map/MapboxGl.vue?vue&type=style&index=0&lang=css&
var MapboxGlvue_type_style_index_0_lang_css_ = __webpack_require__("2ae0");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/lib/map/MapboxGl.vue






/* normalize component */

var component = normalizeComponent(
  map_MapboxGlvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MapboxGl = (component.exports);
// CONCATENATED MODULE: ./src/lib/mixins/withControlSelfEvents.js












function withControlSelfEvents_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function withControlSelfEvents_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { withControlSelfEvents_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { withControlSelfEvents_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* harmony default export */ var withControlSelfEvents = ({
  methods: {
    /**
    **
    **/
    _emitSelfEvent: function _emitSelfEvent(event) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this._emitMapEvent(event, withControlSelfEvents_objectSpread({
        control: this.control
      }, data));
    },
    // _emitSelfEvent

    /**
    ** Bind events for markers, popups and controls.
    ** MapboxGL JS emits this events on popup or marker object,
    ** so we treat them as 'self' events of these objects.
    **/
    _bindSelfEvents: function _bindSelfEvents(events, emitter) {
      var _this = this;

      Object.keys(this.$listeners).forEach(function (eventName) {
        if (events.includes(eventName)) {
          emitter.on(eventName, _this._emitSelfEvent);
        }
      });
    },
    // _bindSelfEvents

    /**
    **
    **/
    _unbindSelfEvents: function _unbindSelfEvents(events, emitter) {
      var _this2 = this;

      if (events.length === 0) return;
      if (!emitter) return;
      events.forEach(function (eventName) {
        emitter.off(eventName, _this2._emitSelfEvent);
      });
    } // _unbindSelfEvents

  } // methods

}); // export default
// CONCATENATED MODULE: ./src/lib/mixins/withControl.js



/* harmony default export */ var withControl = ({
  mixins: [withEvents, withControlSelfEvents],
  inject: ['mapbox', 'map', 'actions'],
  props: {
    /**
    **
    **/
    position: {
      type: String,
      default: 'top-right'
    } // props

  },
  // props
  beforeDestroy: function beforeDestroy() {
    if (this.map && this.control) {
      this.map.removeControl(this.control);
    }
  },
  // beforeDestroy
  methods: {
    /**
    ** @private
    **/
    _addControl: function _addControl() {
      try {
        this.map.addControl(this.control, this.position);
      } catch (err) {
        this._emitEvent('error', {
          error: err
        });

        return;
      }

      this._emitEvent('added', {
        control: this.control
      });
    } // _addControl

  },
  // methods
  render: function render() {}
}); // export default
// CONCATENATED MODULE: ./src/lib/controls/AttributionControl/index.js

/* harmony default export */ var AttributionControl = ({
  name: 'AttributionControl',
  mixins: [withControl],
  props: {
    /**
    **
    **/
    compact: {
      type: Boolean,
      default: true
    },
    // compact

    /**
    **
    **/
    customAttribution: {
      type: [String, Array],
      deafault: undefined
    } // customAttribution

  },
  // props
  created: function created() {
    this.control = new this.mapbox.AttributionControl(this.$props);

    this._addControl();
  } // created

}); // export default
// CONCATENATED MODULE: ./src/lib/controls/FullscreenControl/index.js

/* harmony default export */ var FullscreenControl = ({
  name: 'FullscreenControl',
  mixins: [withControl],
  props: {
    /**
    **
    **/
    container: {
      type: HTMLElement,
      default: undefined
    } // container

  },
  // props
  created: function created() {
    this.control = new this.mapbox.FullscreenControl(this.$props);

    this._addControl();
  } // created

}); // export default
// CONCATENATED MODULE: ./src/lib/controls/GeolocateControl/index.js






var geolocationEvents = {
  trackuserlocationstart: 'trackuserlocationstart',
  trackuserlocationend: 'trackuserlocationend',
  geolocate: 'geolocate',
  error: 'error'
};
/* harmony default export */ var GeolocateControl = ({
  name: 'GeolocateControl',
  mixins: [withEvents, withControlSelfEvents, withControl],
  props: {
    /**
    **
    **/
    positionOptions: {
      type: Object,
      default: function _default() {
        return {
          enableHighAccuracy: false,
          timeout: 6000
        };
      }
    },
    // positionOptions

    /**
    **
    **/
    fitBoundsOptions: {
      type: Object,
      default: function _default() {
        return {
          maxZoom: 15
        };
      }
    },
    // fitBoundsOptions

    /**
    **
    **/
    trackUserLocation: {
      type: Boolean,
      default: false
    },
    // trackUserLocation

    /**
    **
    **/
    showUserLocation: {
      type: Boolean,
      default: true
    } // showUserLocation

  },
  // props
  created: function created() {
    var GeolocateControl = this.mapbox.GeolocateControl;
    this.control = new GeolocateControl(this.$props);

    this._addControl();

    this._bindSelfEvents(Object.keys(geolocationEvents), this.control);
  },
  // created
  methods: {
    /**
    **
    **/
    trigger: function trigger() {
      if (this.control) {
        return this.control.trigger();
      }
    } // trigger

  } // methods

}); // export default
// CONCATENATED MODULE: ./src/lib/controls/NavigationControl/index.js

/* harmony default export */ var NavigationControl = ({
  name: 'NavigationControl',
  mixins: [withControl],
  props: {
    /**
    **
    **/
    showCompass: {
      type: Boolean,
      default: true
    },
    // showCompass

    /**
    **
    **/
    showZoom: {
      type: Boolean,
      default: true
    } // showZoom

  },
  // props
  created: function created() {
    this.control = new this.mapbox.NavigationControl(this.$props);

    this._addControl();
  } // created

}); // export default
// CONCATENATED MODULE: ./src/lib/controls/ScaleControl/index.js




/* harmony default export */ var ScaleControl = ({
  name: 'ScaleControl',
  mixins: [withControl],
  props: {
    /**
    **
    **/
    maxWidth: {
      type: Number,
      default: 150
    },
    // maxWidth

    /**
    **
    **/
    unit: {
      type: String,
      default: 'metric',
      validator: function validator(value) {
        return ['imperial', 'metric', 'nautical'].includes(value);
      } // validator

    } // unit

  },
  // props
  watch: {
    unit: function unit(newVal, oldVal) {
      if (this.control && newVal !== oldVal) {
        this.control.setUnit(newVal);
      }
    } // unit

  },
  // watch
  created: function created() {
    this.control = new this.mapbox.ScaleControl(this.$props);

    this._addControl();
  } // created

}); // export default
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// CONCATENATED MODULE: ./src/lib/events/layerEvents.js
/* harmony default export */ var layerEvents = (['mousedown', 'mouseup', 'click', 'dblclick', 'mousemove', 'mouseenter', 'mouseleave', 'mouseover', 'mouseout', 'contextmenu', 'touchstart', 'touchend', 'touchcancel']); // export default
// CONCATENATED MODULE: ./src/lib/mixins/withLayer.js













function withLayer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function withLayer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { withLayer_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { withLayer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var mapboxSourceProps = {
  /**
  **
  **/
  sourceId: {
    type: String,
    required: true
  },
  // sourceId

  /**
  **
  **/
  source: {
    type: [Object, String],
    default: undefined
  } // source

}; // mapboxSourceProps

var mapboxLayerStyleProps = {
  /**
  **
  **/
  layerId: {
    type: String,
    required: true
  },
  // layerId

  /**
  **
  **/
  layer: {
    type: Object,
    required: true
  },
  // layer

  /**
  **
  **/
  before: {
    type: String,
    default: undefined
  } // before

}; // mapboxLayerStyleProps

var componentProps = {
  /**
  **
  **/
  clearSource: {
    type: Boolean,
    default: true
  },
  // clearSource

  /**
  **
  **/
  replaceSource: {
    type: Boolean,
    default: false
  },
  // replaceSource

  /**
  **
  **/
  replace: {
    type: Boolean,
    default: false
  } // replace

}; // componentProps

/* harmony default export */ var withLayer = ({
  mixins: [withEvents],
  inject: ['mapbox', 'map'],
  props: withLayer_objectSpread(withLayer_objectSpread(withLayer_objectSpread({}, mapboxSourceProps), mapboxLayerStyleProps), componentProps),
  // props
  data: function data() {
    return {
      initial: true
    }; // return
  },
  // data
  computed: {
    sourceLoaded: function sourceLoaded() {
      return this.map ? this.map.isSourceLoaded(this.sourceId) : false;
    },
    // sourceLoaded
    mapLayer: function mapLayer() {
      return this.map ? this.map.getLayer(this.layerId) : null;
    },
    // mapLayer
    mapSource: function mapSource() {
      return this.map ? this.map.getSource(this.sourceId) : null;
    } // mapSource

  },
  // computed
  created: function created() {
    if (this.layer.minzoom) {
      this.$watch('layer.minzoom', function (next) {
        if (this.initial) return;
        this.map.setLayerZoomRange(this.layerId, next, this.layer.maxzoom);
      });
    }

    if (this.layer.maxzoom) {
      this.$watch('layer.maxzoom', function (next) {
        if (this.initial) return;
        this.map.setLayerZoomRange(this.layerId, this.layer.minzoom, next);
      });
    }

    if (this.layer.paint) {
      this.$watch('layer.paint', function (next) {
        if (this.initial) return;

        if (next) {
          for (var _i = 0, _Object$keys = Object.keys(next); _i < _Object$keys.length; _i++) {
            var prop = _Object$keys[_i];
            this.map.setPaintProperty(this.layerId, prop, next[prop]);
          }
        }
      }, {
        deep: true
      });
    }

    if (this.layer.layout) {
      this.$watch('layer.layout', function (next) {
        if (this.initial) return;

        if (next) {
          for (var _i2 = 0, _Object$keys2 = Object.keys(next); _i2 < _Object$keys2.length; _i2++) {
            var prop = _Object$keys2[_i2];
            this.map.setLayoutProperty(this.layerId, prop, next[prop]);
          }
        }
      }, {
        deep: true
      });
    }

    if (this.layer.filter) {
      this.$watch('layer.filter', function (next) {
        if (this.initial) return;
        this.map.setFilter(this.layerId, next);
      }, {
        deep: true
      });
    }
  },
  // created
  beforeDestroy: function beforeDestroy() {
    if (this.map && this.map.loaded()) {
      try {
        this.map.removeLayer(this.layerId);
      } catch (error) {
        this._emitEvent('layer-does-not-exist', {
          layerId: this.sourceId,
          error: error
        });
      }

      if (this.clearSource) {
        try {
          this.map.removeSource(this.sourceId);
        } catch (error) {
          this._emitEvent('source-does-not-exist', {
            sourceId: this.sourceId,
            error: error
          });
        }
      }
    }
  },
  // beforeDestroy
  methods: {
    /**
    ** @private
    **/
    _emitLayerMapEvent: function _emitLayerMapEvent(event) {
      return this._emitMapEvent(event, {
        layerId: this.layerId
      });
    },
    // _emitLayerMapEvent

    /**
    ** @private
    **/
    _bindLayerEvents: function _bindLayerEvents(events) {
      var _this = this;

      Object.keys(this.$listeners).forEach(function (eventName) {
        if (events.includes(eventName)) {
          _this.map.on(eventName, _this.layerId, _this._emitLayerMapEvent);
        }
      });
    },
    // _bindLayerEvents

    /**
    ** @private
    **/
    _unbindEvents: function _unbindEvents(events) {
      var _this2 = this;

      if (this.map) {
        events.forEach(function (eventName) {
          _this2.map.off(eventName, _this2.layerId, _this2._emitLayerMapEvent);
        });
      }
    },
    // _unbindEvents

    /**
    ** @private
    **/
    _watchSourceLoading: function _watchSourceLoading(data) {
      if (data.dataType === 'source' && data.sourceId === this.sourceId) {
        this._emitEvent('layer-source-loading', {
          sourceId: this.sourceId
        });

        this.map.off('dataloading', this._watchSourceLoading);
      }
    },
    // _watchSourceLoading

    /**
    **
    **/
    move: function move(beforeId) {
      this.map.moveLayer(this.layerId, beforeId);

      this._emitEvent('layer-moved', {
        layerId: this.layerId,
        beforeId: beforeId
      });
    },
    // move

    /**
    **
    **/
    remove: function remove() {
      this.map.removeLayer(this.layerId);
      this.map.removeSource(this.sourceId);

      this._emitEvent('layer-removed', {
        layerId: this.layerId
      });

      this.$destroy();
    } // remove

  },
  // methods
  render: function render() {}
}); // export default
// CONCATENATED MODULE: ./src/lib/layers/CanvasLayer/index.js












function CanvasLayer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CanvasLayer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CanvasLayer_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CanvasLayer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* harmony default export */ var CanvasLayer = ({
  name: 'CanvasLayer',
  mixins: [withLayer],
  inject: ['mapbox', 'map'],
  props: {
    /**
    ** Mapbox GL layer option.
    **/
    source: {
      type: Object,
      required: true
    },
    // source

    /**
    ** Mapbox GL layer option.
    **/
    layer: {
      type: Object,
      default: null
    } // layer

  },
  // props
  computed: {
    /**
    **
    **/
    canvasElement: function canvasElement() {
      return this.mapSource ? this.mapSource.getCanvas() : null;
    } // canvasElement

  },
  // computed
  watch: {
    /**
    **
    **/
    coordinates: function coordinates(newVal) {
      if (this.initial) {
        return;
      }

      this.mapSource.setCoordinates(newVal);
    } // coordinates

  },
  // watch
  created: function created() {
    this._deferredMount();
  },
  // created
  methods: {
    /**
    ** @private
    **/
    _deferredMount: function _deferredMount() {
      var source = CanvasLayer_objectSpread({
        type: 'canvas'
      }, this.source); // source


      this.map.on('dataloading', this._watchSourceLoading);

      try {
        this.map.addSource(this.sourceId, source);
      } catch (err) {
        if (this.replaceSource) {
          this.map.removeSource(this.sourceId);
          this.map.addSource(this.sourceId, source);
        }
      }

      this._addLayer();

      this._bindLayerEvents(layerEvents);

      this.initial = false;
    },
    // _deferredMount

    /**
    ** @private
    **/
    _addLayer: function _addLayer() {
      var existed = this.map.getLayer(this.layerId);

      if (existed) {
        if (this.replace) {
          this.map.removeLayer(this.layerId);
        } else {
          this._emitEvent('layer-exists', {
            layerId: this.layerId
          });

          return existed;
        }
      }

      var layer = CanvasLayer_objectSpread({
        id: this.layerId,
        source: this.sourceId,
        type: 'raster'
      }, this.layer); // layer


      this.map.addLayer(layer, this.before);

      this._emitEvent('added', {
        layerId: this.layerId,
        canvas: this.canvasElement
      });
    } // _addLayer

  } // methods

}); // export default
// CONCATENATED MODULE: ./src/lib/layers/GeojsonLayer/index.js













function GeojsonLayer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function GeojsonLayer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { GeojsonLayer_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { GeojsonLayer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* harmony default export */ var GeojsonLayer = ({
  name: 'GeojsonLayer',
  mixins: [withLayer],
  computed: {
    /**
    **
    **/
    getSourceFeatures: function getSourceFeatures() {
      var _this = this;

      return function (filter) {
        if (_this.map) {
          return _this.map.querySourceFeatures(_this.sourceId, {
            filter: filter
          });
        }

        return null;
      }; // return
    },
    // getSourceFeatures

    /**
    **
    **/
    getRenderedFeatures: function getRenderedFeatures() {
      var _this2 = this;

      return function (geometry, filter) {
        if (_this2.map) {
          return _this2.map.queryRenderedFeatures(geometry, {
            layers: [_this2.layerId],
            filter: filter
          });
        }

        return null;
      }; // return
    },
    // getRenderedFeatures

    /**
    **
    **/
    getClusterExpansionZoom: function getClusterExpansionZoom() {
      var _this3 = this;

      return function (clusterId) {
        return new Promise(function (resolve, reject) {
          if (_this3.mapSource) {
            _this3.mapSource.getClusterExpansionZoom(clusterId, function (err, zoom) {
              if (err) {
                return reject(err);
              }

              return resolve(zoom);
            });
          } else {
            return reject(new Error("Map source with id ".concat(_this3.sourceId, " is not found.")));
          }
        });
      };
    },
    // getClusterExpansionZoom

    /**
    **
    **/
    getClusterChildren: function getClusterChildren() {
      var _this4 = this;

      return function (clusterId) {
        return new Promise(function (resolve, reject) {
          var source = _this4.mapSource;

          if (source) {
            source.getClusterChildren(clusterId, function (err, features) {
              if (err) {
                return reject(err);
              }

              return resolve(features);
            });
          } else {
            return reject(new Error("Map source with id ".concat(_this4.sourceId, " not found.")));
          }
        });
      };
    },
    // getClusterChildren

    /**
    **
    **/
    getClusterLeaves: function getClusterLeaves() {
      var _this5 = this;

      return function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return new Promise(function (resolve, reject) {
          if (_this5.mapSource) {
            var _this5$mapSource;

            (_this5$mapSource = _this5.mapSource).getClusterLeaves.apply(_this5$mapSource, args.concat([function (err, features) {
              if (err) {
                return reject(err);
              }

              return resolve(features);
            }]));
          } else {
            return reject(new Error("Map source with id ".concat(_this5.sourceId, " not found.")));
          }
        });
      };
    } // getClusterLeaves

  },
  // computed
  created: function created() {
    if (this.source) {
      this.$watch('source.data', function (newVal) {
        if (this.initial) {
          return;
        }

        this.mapSource.setData(newVal);
      }, {
        deep: true
      });
    }

    this._deferredMount();
  },
  // created
  methods: {
    /**
    ** @private
    **/
    _deferredMount: function _deferredMount() {
      this.map.on('dataloading', this._watchSourceLoading);

      if (this.source) {
        var source = GeojsonLayer_objectSpread({
          type: 'geojson'
        }, this.source); // source


        try {
          this.map.addSource(this.sourceId, source);
        } catch (err) {
          if (this.replaceSource) {
            this.map.removeSource(this.sourceId);
            this.map.addSource(this.sourceId, source);
          }
        }
      }

      this._addLayer();

      this._bindLayerEvents(layerEvents);

      this.map.off('dataloading', this._watchSourceLoading);
      this.initial = false;
    },
    // _deferredMount

    /**
    ** @private
    **/
    _addLayer: function _addLayer() {
      var existed = this.map.getLayer(this.layerId);

      if (existed) {
        if (this.replace) {
          this.map.removeLayer(this.layerId);
        } else {
          this._emitEvent('layer-exists', {
            layerId: this.layerId
          });

          return existed;
        }
      }

      var layer = GeojsonLayer_objectSpread({
        id: this.layerId,
        source: this.sourceId
      }, this.layer); // layer


      this.map.addLayer(layer, this.before);

      this._emitEvent('added', {
        layerId: this.layerId
      });
    },
    // _addLayer

    /**
    **
    **/
    setFeatureState: function setFeatureState(featureId, state) {
      if (this.map) {
        var params = {
          id: featureId,
          source: this.source
        };
        return this.map.setFeatureState(params, state);
      }
    },
    // setFeatureState

    /**
    **
    **/
    getFeatureState: function getFeatureState(featureId) {
      if (this.map) {
        var params = {
          id: featureId,
          source: this.source
        };
        return this.map.getFeatureState(params);
      }
    },
    // getFeatureState

    /**
    **
    **/
    removeFeatureState: function removeFeatureState(featureId, sourceLayer, key) {
      if (this.map) {
        var params = {
          id: featureId,
          source: this.source,
          sourceLayer: sourceLayer
        };
        return this.map.removeFeatureState(params, key);
      }
    } // removeFeatureState

  } // methods

}); // export default
// CONCATENATED MODULE: ./src/lib/layers/ImageLayer/index.js












function ImageLayer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ImageLayer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ImageLayer_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ImageLayer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* harmony default export */ var ImageLayer = ({
  name: 'ImageLayer',
  mixins: [withLayer],
  created: function created() {
    if (this.source) {
      if (this.source.coordinates) {
        this.$watch('source.coordinates', function (next) {
          if (this.initial) return;

          if (next) {
            this.mapSource.setCoordinates(next);
          }
        }, {
          deep: true
        }); // $watch
      }

      if (this.source.url) {
        this.$watch('source.url', function (next) {
          if (this.initial) return;

          if (next) {
            this.mapSource.updateImage({
              url: next,
              coordinates: this.source.coordinates
            });
          }
        }, {
          deep: true
        }); // $watch
      } // if

    } // if


    this._deferredMount();
  },
  // created
  methods: {
    /**
    ** @private
    **/
    _deferredMount: function _deferredMount() {
      var source = ImageLayer_objectSpread({
        type: 'image'
      }, this.source); // source


      this.map.on('dataloading', this._watchSourceLoading);

      try {
        this.map.addSource(this.sourceId, source);
      } catch (error) {
        if (this.replaceSource) {
          this.map.removeSource(this.sourceId);
          this.map.addSource(this.sourceId, source);
        }
      }

      this._addLayer();

      this._bindLayerEvents(layerEvents);

      this.initial = false;
    },
    // _deferredMount

    /**
    ** @private
    **/
    _addLayer: function _addLayer() {
      var existed = this.map.getLayer(this.layerId);

      if (existed) {
        if (this.replace) {
          this.map.removeLayer(this.layerId);
        } else {
          this._emitEvent('layer-exists', {
            layerId: this.layerId
          });

          return existed;
        }
      }

      var layer = ImageLayer_objectSpread({
        id: this.layerId,
        source: this.sourceId,
        type: 'raster'
      }, this.layer); // layer


      this.map.addLayer(layer, this.before);

      this._emitEvent('added', {
        layerId: this.layerId
      });
    } // _addLayer

  } // methods

}); // export default
// CONCATENATED MODULE: ./src/lib/layers/RasterLayer/index.js












function RasterLayer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function RasterLayer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { RasterLayer_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { RasterLayer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* harmony default export */ var RasterLayer = ({
  name: 'RasterLayer',
  mixins: [withLayer],
  created: function created() {
    this._deferredMount();
  },
  // created
  methods: {
    /**
    ** @private
    **/
    _deferredMount: function _deferredMount() {
      var source = RasterLayer_objectSpread({
        type: 'raster'
      }, this.source); // source


      this.map.on('dataloading', this._watchSourceLoading);

      try {
        this.map.addSource(this.sourceId, source);
      } catch (error) {
        if (this.replaceSource) {
          this.map.removeSource(this.sourceId);
          this.map.addSource(this.sourceId, source);
        }
      }

      this._addLayer();

      this._bindLayerEvents(layerEvents);

      this.map.off('dataloading', this._watchSourceLoading);
      this.initial = false;
    },
    // _deferredMount

    /**
    ** @private
    **/
    _addLayer: function _addLayer() {
      var existed = this.map.getLayer(this.layerId);

      if (existed) {
        if (this.replace) {
          this.map.removeLayer(this.layerId);
        } else {
          this._emitEvent('layer-exists', {
            layerId: this.layerId
          });

          return existed;
        }
      }

      var layer = RasterLayer_objectSpread({
        id: this.layerId,
        type: 'raster',
        source: this.sourceId
      }, this.layer); // layer


      this.map.addLayer(layer, this.before);

      this._emitEvent('added', {
        layerId: this.layerId
      });
    } // _addLayer

  } // methods

}); // export default
// CONCATENATED MODULE: ./src/lib/layers/VectorLayer/index.js












function VectorLayer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function VectorLayer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { VectorLayer_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { VectorLayer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* harmony default export */ var VectorLayer = ({
  name: 'VectorLayer',
  mixins: [withLayer],
  computed: {
    /**
    **
    **/
    getSourceFeatures: function getSourceFeatures() {
      var _this = this;

      return function (filter) {
        if (_this.map) {
          return _this.map.querySourceFeatures(_this.sourceId, {
            sourceLayer: _this.layer['source-layer'],
            filter: filter
          }); // return
        } // if


        return null;
      }; // return
    },
    // getSourceFeatures

    /**
    **
    **/
    getRenderedFeatures: function getRenderedFeatures() {
      var _this2 = this;

      return function (geometry, filter) {
        if (_this2.map) {
          return _this2.map.queryRenderedFeatures(geometry, {
            layers: [_this2.layerId],
            filter: filter
          }); // return
        } // if


        return null;
      }; // return
    } // getRenderedFeatures

  },
  // computed
  watch: {
    /**
    **
    **/
    filter: function filter(_filter) {
      if (this.initial) return;
      this.map.setFilter(this.layerId, _filter);
    } // filter

  },
  // watch
  created: function created() {
    this._deferredMount();
  },
  // created
  methods: {
    /**
    ** @private
    **/
    _deferredMount: function _deferredMount() {
      var source = VectorLayer_objectSpread({
        type: 'vector'
      }, this.source); // source


      this.map.on('dataloading', this._watchSourceLoading);

      try {
        this.map.addSource(this.sourceId, source);
      } catch (error) {
        if (this.replaceSource) {
          this.map.removeSource(this.sourceId);
          this.map.addSource(this.sourceId, source);
        }
      }

      this._addLayer();

      this._bindLayerEvents(layerEvents);

      this.map.off('dataloading', this._watchSourceLoading);
      this.initial = false;
    },
    // _deferredMount

    /**
    ** @private
    **/
    _addLayer: function _addLayer() {
      var existed = this.map.getLayer(this.layerId);

      if (existed) {
        if (this.replace) {
          this.map.removeLayer(this.layerId);
        } else {
          this._emitEvent('layer-exists', {
            layerId: this.layerId
          });

          return existed;
        }
      } // if


      var layer = VectorLayer_objectSpread({
        id: this.layerId,
        source: this.sourceId
      }, this.layer); // layer


      this.map.addLayer(layer, this.before);

      this._emitEvent('added', {
        layerId: this.layerId
      });
    },
    // _addLayer

    /**
    **
    **/
    setFeatureState: function setFeatureState(featureId, state) {
      if (this.map) {
        var params = {
          id: featureId,
          source: this.sourceId,
          'source-layer': this.layer['source-layer']
        };
        return this.map.setFeatureState(params, state);
      } // if

    },
    // setFeatureState

    /**
    **
    **/
    getFeatureState: function getFeatureState(featureId) {
      if (this.map) {
        var params = {
          id: featureId,
          source: this.source,
          'source-layer': this.layer['source-layer']
        };
        return this.map.getFeatureState(params);
      } // if

    } // getFeatureState

  } // methods

}); // export default
// CONCATENATED MODULE: ./src/lib/layers/VideoLayer/index.js












function VideoLayer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function VideoLayer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { VideoLayer_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { VideoLayer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* harmony default export */ var VideoLayer = ({
  name: 'VideoLayer',
  mixins: [withLayer],
  computed: {
    /**
    **
    **/
    video: function video() {
      return this.map.getSource(this.sourceId).getVideo();
    } // video

  },
  // computed
  created: function created() {
    if (this.source && this.source.coordinates) {
      this.$watch('source.coordinates', function (next) {
        if (this.initial) return;
        this.mapSource.setCoordinates(next);
      });
    }

    this._deferredMount();
  },
  // created
  methods: {
    /**
    ** @private
    **/
    _deferredMount: function _deferredMount() {
      var source = VideoLayer_objectSpread({
        type: 'video'
      }, this.source); // source


      this.map.on('dataloading', this._watchSourceLoading);

      try {
        this.map.addSource(this.sourceId, source);
      } catch (err) {
        if (this.replaceSource) {
          this.map.removeSource(this.sourceId);
          this.map.addSource(this.sourceId, source);
        }
      } //


      this._addLayer();

      this._bindLayerEvents(layerEvents);

      this.initial = false;
    },
    // _deferredMount

    /**
    ** @private
    **/
    _addLayer: function _addLayer() {
      var existed = this.map.getLayer(this.layerId);

      if (existed) {
        if (this.replace) {
          this.map.removeLayer(this.layerId);
        } else {
          this._emitEvent('layer-exists', {
            layerId: this.layerId
          });

          return existed;
        }
      }

      var layer = VideoLayer_objectSpread({
        id: this.layerId,
        source: this.sourceId,
        type: 'background'
      }, this.layer); // layer


      this.map.addLayer(layer, this.before);

      this._emitEvent('added', {
        layerId: this.layerId
      });
    } // _addLayer

  } // methods

}); // export default
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"45c14fac-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/ui/Marker.vue?vue&type=template&id=18cd2839&
var Markervue_type_template_id_18cd2839_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"display":"none"}},[_vm._t("marker"),(_vm.marker)?_vm._t("default"):_vm._e()],2)}
var Markervue_type_template_id_18cd2839_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/ui/Marker.vue?vue&type=template&id=18cd2839&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.values.js
var es7_object_values = __webpack_require__("8615");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/ui/Marker.vue?vue&type=script&lang=js&














function Markervue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Markervue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Markervue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Markervue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//


var markerEvents = {
  drag: 'drag',
  dragstart: 'dragstart',
  dragend: 'dragend'
}; // markerEvents

var markerDOMEvents = {
  click: 'click',
  mouseenter: 'mouseenter',
  mouseleave: 'mouseleave'
}; // markerDOMEvents

/**
** Marker component.
** @see See [Mapbox Gl JS Marker](https://www.mapbox.com/mapbox-gl-js/api/#marker)
**/

/* harmony default export */ var Markervue_type_script_lang_js_ = ({
  name: 'Marker',
  mixins: [withEvents, withControlSelfEvents],
  inject: ['mapbox', 'map'],
  provide: function provide() {
    var self = this;
    return {
      get marker() {
        return self.marker;
      }

    };
  },
  // provide
  props: {
    /**
    ** Mapbox GL marker option.
    **/
    offset: {
      type: [Object, Array],
      default: function _default() {
        return [0, 0];
      }
    },
    // offset

    /**
    ** Mapbox GL marker option.
    **/
    coordinates: {
      type: Array,
      required: true
    },
    // coordinates

    /**
    ** Mapbox GL marker option.
    **/
    color: {
      type: String
    },
    // color

    /**
    ** Mapbox GL marker option.
    **/
    anchor: {
      type: String,
      default: 'center'
    },
    // anchor

    /**
    ** Mapbox GL marker option.
    **/
    draggable: {
      type: Boolean,
      default: false
    } // draggable

  },
  // props
  data: function data() {
    return {
      initial: true,
      marker: undefined
    };
  },
  // data
  watch: {
    coordinates: function coordinates(lngLat) {
      if (this.initial) return;
      this.marker.setLngLat(lngLat);
    },
    // coordinates
    draggable: function draggable(newVal) {
      if (this.initial) return;
      this.marker.setDraggable(newVal);
    } // draggable

  },
  // watch
  mounted: function mounted() {
    var _this = this;

    var markerOptions = Markervue_type_script_lang_js_objectSpread({}, this.$props);

    if (this.$slots.marker) {
      markerOptions.element = this.$slots.marker[0].elm;
    }

    this.marker = new this.mapbox.Marker(markerOptions);

    if (this.$listeners['update:coordinates']) {
      this.marker.on('dragend', function (event) {
        var newCoordinates;

        if (_this.coordinates instanceof Array) {
          newCoordinates = [event.target._lngLat.lng, event.target._lngLat.lat];
        } else {
          newCoordinates = event.target._lngLat;
        }

        _this.$emit('update:coordinates', newCoordinates);
      });
    }

    var eventNames = Object.keys(markerEvents);

    this._bindSelfEvents(eventNames, this.marker);

    this.initial = false;

    this._addMarker();
  },
  // mounted
  beforeDestroy: function beforeDestroy() {
    if (this.map !== undefined && this.marker !== undefined) {
      this.marker.remove();
    }
  },
  // beforeDestroy
  methods: {
    /**
    **
    **/
    _addMarker: function _addMarker() {
      this.marker.setLngLat(this.coordinates).addTo(this.map);

      this._bindMarkerDOMEvents();

      this._emitEvent('added', {
        marker: this.marker
      });
    },
    // _addMarker

    /**
    **
    **/
    _emitSelfEvent: function _emitSelfEvent(event) {
      this._emitMapEvent(event, {
        marker: this.marker
      });
    },
    // _emitSelfEvent

    /**
    **
    **/
    _bindMarkerDOMEvents: function _bindMarkerDOMEvents() {
      var _this2 = this;

      Object.keys(this.$listeners).forEach(function (key) {
        if (Object.values(markerDOMEvents).includes(key)) {
          _this2.marker._element.addEventListener(key, function (event) {
            _this2._emitSelfEvent(event);
          });
        }
      });
    },
    // _bindMarkerDOMEvents

    /**
    **
    **/
    remove: function remove() {
      this.marker.remove();

      this._emitEvent('removed');
    },
    // remove

    /**
    **
    **/
    togglePopup: function togglePopup() {
      return this.marker.togglePopup();
    } // togglePopup

  } // methods

}); // export default
// CONCATENATED MODULE: ./src/lib/ui/Marker.vue?vue&type=script&lang=js&
 /* harmony default export */ var ui_Markervue_type_script_lang_js_ = (Markervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/lib/ui/Marker.vue





/* normalize component */

var Marker_component = normalizeComponent(
  ui_Markervue_type_script_lang_js_,
  Markervue_type_template_id_18cd2839_render,
  Markervue_type_template_id_18cd2839_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Marker = (Marker_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"45c14fac-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/ui/Popup.vue?vue&type=template&id=04a2e5b6&
var Popupvue_type_template_id_04a2e5b6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"display":"none"}},[_vm._t("default")],2)}
var Popupvue_type_template_id_04a2e5b6_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/ui/Popup.vue?vue&type=template&id=04a2e5b6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/ui/Popup.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//


var popupEvents = {
  open: 'open',
  close: 'close'
}; // popupEvents

/**
** Popup component.
** @see See [Mapbox Gl JS Popup](https://www.mapbox.com/mapbox-gl-js/api/#popup)
**/

/* harmony default export */ var Popupvue_type_script_lang_js_ = ({
  name: 'Popup',
  mixins: [withEvents, withControlSelfEvents],
  inject: {
    mapbox: {
      default: null
    },
    // mapbox
    map: {
      default: null
    },
    // map
    marker: {
      default: null
    } // marker

  },
  // inject
  props: {
    /**
    ** Mapbox GL popup option.
    ** If 'true', a close button will appear in the top right corner of the popup.
    **/
    closeButton: {
      type: Boolean,
      default: true
    },
    // closeButton

    /**
    ** Mapbox GL popup option.
    ** If 'true', the popup will closed when the map is clicked.
    **/
    closeOnClick: {
      type: Boolean,
      default: true
    },
    // closeOnClick

    /**
    ** Mapbox GL popup option.
    ** A string indicating the popup's location relative to the coordinate set.
    **
    ** If unset the anchor will be dynamically set to ensure the popup falls within the map
    ** container with a preference for 'bottom', 'top', 'bottom', 'left', 'right',
    ** 'top-left', 'top-right', 'bottom-left', 'bottom-right'.
    **/
    anchor: {
      validator: function validator(value) {
        var allowedValues = ['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right']; // allowedValues

        return typeof value === 'string' && allowedValues.includes(value);
      },
      // validator
      default: undefined
    },
    // anchor

    /**
    ** Mapbox GL popup option.
    ** A pixel offset applied to the popup's location a single number specifying a distance from the popup's location
    ** a PointLike specifying a constant offset an object of Points specifing an offset for each anchor position
    ** Negative offsets indicate left and up.
    **/
    offset: {
      type: [Number, Object, Array],
      default: function _default() {
        return [0, 0];
      }
    },
    // offset

    /**
    ** Mapbox GL popup option.
    **/
    coordinates: {
      type: Array
    },
    // coordinates

    /**
    ** Component option.
    ** If 'true', popup treats data in deafult slot as plain text.
    **/
    onlyText: {
      type: Boolean,
      default: false
    },
    // onlyText

    /**
    ** Component option.
    **/
    showed: {
      type: Boolean,
      default: false
    } // showed

  },
  // props
  data: function data() {
    return {
      initial: true,
      popup: undefined
    };
  },
  // data
  computed: {
    open: {
      get: function get() {
        if (this.popup !== undefined) {
          return this.popup.isOpen();
        }

        return false;
      },
      // get
      set: function set(value) {
        if (this.map && this.popup) {
          if (!value) {
            this.popup.remove();
          } else {
            this.popup.addTo(this.map);
          }
        }
      } // set

    } // open

  },
  // computed
  watch: {
    coordinates: function coordinates(lngLat) {
      if (this.initial) return;
      this.popup.setLngLat(lngLat);
    },
    // coordinates
    showed: function showed(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.open = newVal;

        if (this.marker) {
          this.marker.togglePopup();
        }
      }
    } // showed

  },
  // watch
  created: function created() {
    this.popup = new this.mapbox.Popup(this.$props);
  },
  // created
  mounted: function mounted() {
    this._addPopup();

    this.initial = false;
  },
  // mounted
  beforeDestroy: function beforeDestroy() {
    if (this.map) {
      this.popup.remove();

      this._emitEvent('removed');
    }
  },
  // beforeDestroy
  methods: {
    /**
    **
    **/
    _addPopup: function _addPopup() {
      this.popup = new this.mapbox.Popup(this.$props);

      if (this.coordinates !== undefined) {
        this.popup.setLngLat(this.coordinates);
      }

      if (this.$slots.default !== undefined) {
        if (this.onlyText) {
          if (this.$slots.default[0].elm.nodeType === 3) {
            var tmpEl = document.createElement('span');
            tmpEl.appendChild(this.$slots.default[0].elm);
            this.popup.setText(tmpEl.innerText);
          } else {
            this.popup.setText(this.$slots.default[0].elm.innerText);
          }
        } else {
          this.popup.setDOMContent(this.$slots.default[0].elm);
        }
      }

      this._bindSelfEvents(Object.keys(popupEvents), this.popup);

      this._emitEvent('added', {
        popup: this.popup
      });

      if (this.marker) {
        this.marker.setPopup(this.popup);
      }

      if (this.showed) {
        this.open = true;

        if (this.marker) {
          this.marker.togglePopup();
        }
      }
    },
    // _addPopup

    /**
    **
    **/
    _emitSelfEvent: function _emitSelfEvent(event) {
      this._emitMapEvent(event, {
        popup: this.popup
      });
    },
    // _emitSelfEvent

    /**
    **
    **/
    remove: function remove() {
      this.popup.remove();

      this._emitEvent('remove', {
        popup: this.popup
      });
    } // remove

  } // methods

}); // export default
// CONCATENATED MODULE: ./src/lib/ui/Popup.vue?vue&type=script&lang=js&
 /* harmony default export */ var ui_Popupvue_type_script_lang_js_ = (Popupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/lib/ui/Popup.vue





/* normalize component */

var Popup_component = normalizeComponent(
  ui_Popupvue_type_script_lang_js_,
  Popupvue_type_template_id_04a2e5b6_render,
  Popupvue_type_template_id_04a2e5b6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Popup = (Popup_component.exports);
// CONCATENATED MODULE: ./src/main.js
// Map
 // Controls





 // Layers






 // UI


 // Mixins




 // Map

var MapboxGlMap = MapboxGl; // Controls

var MapboxGlAttributionControl = AttributionControl;
var MapboxGlFullscreenControl = FullscreenControl;
var MapboxGlGeolocateControl = GeolocateControl;
var MapboxGlNavigationControl = NavigationControl;
var MapboxGlScaleControl = ScaleControl; // Layers

var MapboxGlCanvasLayer = CanvasLayer;
var MapboxGlGeojsonLayer = GeojsonLayer;
var MapboxGlImageLayer = ImageLayer;
var MapboxGlRasterLayer = RasterLayer;
var MapboxGlVectorLayer = VectorLayer;
var MapboxGlVideoLayer = VideoLayer; // UI

var MapboxGlMarkerUi = Marker;
var MapboxGlPopupUi = Popup; // Mixins

var main_withEvents = withEvents;
var main_withControlSelfEvents = withControlSelfEvents;
var main_withControl = withControl;
var main_withLayer = withLayer; // Map

/* harmony default export */ var main = (MapboxGl);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (main);



/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "ffc1":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("5ca1");
var $entries = __webpack_require__("504c")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ })

/******/ });
});