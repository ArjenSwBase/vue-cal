(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vuecal"] = factory();
	else
		root["vuecal"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "014b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("e53d");
var has = __webpack_require__("07e3");
var DESCRIPTORS = __webpack_require__("8e60");
var $export = __webpack_require__("63b6");
var redefine = __webpack_require__("9138");
var META = __webpack_require__("ebfd").KEY;
var $fails = __webpack_require__("294c");
var shared = __webpack_require__("dbdb");
var setToStringTag = __webpack_require__("45f2");
var uid = __webpack_require__("62a0");
var wks = __webpack_require__("5168");
var wksExt = __webpack_require__("ccb9");
var wksDefine = __webpack_require__("6718");
var enumKeys = __webpack_require__("47ee");
var isArray = __webpack_require__("9003");
var anObject = __webpack_require__("e4ae");
var isObject = __webpack_require__("f772");
var toIObject = __webpack_require__("36c3");
var toPrimitive = __webpack_require__("1bc3");
var createDesc = __webpack_require__("aebd");
var _create = __webpack_require__("a159");
var gOPNExt = __webpack_require__("0395");
var $GOPD = __webpack_require__("bf0b");
var $DP = __webpack_require__("d9f6");
var $keys = __webpack_require__("c3a1");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("6abf").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("355d").f = $propertyIsEnumerable;
  __webpack_require__("9aa9").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("b8e3")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("35e8")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

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

/***/ "0395":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("36c3");
var gOPN = __webpack_require__("6abf").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "0699":
/***/ (function(module) {

module.exports = {"weekDays":["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"],"months":["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],"years":"Années","year":"Année","month":"Mois","week":"Semaine","day":"Jour","today":"Aujourd'hui","noEvent":"Aucun événement","deleteEvent":"Supprimer","createEvent":"Créer un événement","dateFormat":"DDDD d mmmm yyyy"};

/***/ }),

/***/ "07e3":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
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

/***/ "0fc9":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
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

/***/ "1654":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("71c1")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("30f1")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "1691":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "17ac":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("85e1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1af6":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__("63b6");

$export($export.S, 'Array', { isArray: __webpack_require__("9003") });


/***/ }),

/***/ "1bc3":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("f772");
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

/***/ "1ec9":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
var document = __webpack_require__("e53d").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "20fd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("d9f6");
var createDesc = __webpack_require__("aebd");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
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

/***/ "241e":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "25eb":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "268f":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fde4");

/***/ }),

/***/ "28a5":
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__("214f")('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = __webpack_require__("aae3");
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
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
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});


/***/ }),

/***/ "294c":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "2a6b":
/***/ (function(module) {

module.exports = {"weekDays":["Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag","Söndag"],"months":["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],"years":"År","year":"År","month":"Månad","week":"Vecka","day":"Dag","today":"Idag","noEvent":"Ingen händelse","deleteEvent":"Ta bort","createEvent":"Skapa händelse","dateFormat":"DDDD den d mmmm yyyy"};

/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
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

/***/ "30f1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("b8e3");
var $export = __webpack_require__("63b6");
var redefine = __webpack_require__("9138");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var $iterCreate = __webpack_require__("8f60");
var setToStringTag = __webpack_require__("45f2");
var getPrototypeOf = __webpack_require__("53e2");
var ITERATOR = __webpack_require__("5168")('iterator');
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

/***/ "32a6":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("241e");
var $keys = __webpack_require__("c3a1");

__webpack_require__("ce7e")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


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

/***/ "32fc":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("e53d").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "335c":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("6b4c");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "355d":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "35e8":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var createDesc = __webpack_require__("aebd");
module.exports = __webpack_require__("8e60") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "36c3":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("335c");
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "3702":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("481b");
var ITERATOR = __webpack_require__("5168")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "3846":
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__("9e1e") && /./g.flags != 'g') __webpack_require__("86cc").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__("0bfb")
});


/***/ }),

/***/ "386b":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
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

/***/ "3a38":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "40c3":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("6b4c");
var TAG = __webpack_require__("5168")('toStringTag');
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

/***/ "454f":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("46a7");
var $Object = __webpack_require__("584a").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


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

/***/ "45f2":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("d9f6").f;
var has = __webpack_require__("07e3");
var TAG = __webpack_require__("5168")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
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

/***/ "469f":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6c1c");
__webpack_require__("1654");
module.exports = __webpack_require__("7d7b");


/***/ }),

/***/ "46a7":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("63b6");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("8e60"), 'Object', { defineProperty: __webpack_require__("d9f6").f });


/***/ }),

/***/ "47ee":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("c3a1");
var gOPS = __webpack_require__("9aa9");
var pIE = __webpack_require__("355d");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "481b":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "4917":
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__("214f")('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "4da1":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./de.json": "8d7d",
	"./en.json": "7213",
	"./es.json": "e240",
	"./fr.json": "0699",
	"./hr.json": "7cd4",
	"./it.json": "eed7",
	"./ka.json": "acbd",
	"./nl.json": "b258",
	"./pt-br.json": "89f4",
	"./ru.json": "a65a",
	"./sk.json": "a39e",
	"./sv.json": "2a6b",
	"./zh-cn.json": "88b4"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "4da1";

/***/ }),

/***/ "4ee1":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("5168")('iterator');
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

/***/ "50ed":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "5168":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("dbdb")('wks');
var uid = __webpack_require__("62a0");
var Symbol = __webpack_require__("e53d").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "5176":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("51b6");

/***/ }),

/***/ "51b6":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("a3c3");
module.exports = __webpack_require__("584a").Object.assign;


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "53e2":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("07e3");
var toObject = __webpack_require__("241e");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "549b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("d864");
var $export = __webpack_require__("63b6");
var toObject = __webpack_require__("241e");
var call = __webpack_require__("b0dc");
var isArrayIter = __webpack_require__("3702");
var toLength = __webpack_require__("b447");
var createProperty = __webpack_require__("20fd");
var getIterFn = __webpack_require__("7cd6");

$export($export.S + $export.F * !__webpack_require__("4ee1")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "54a1":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6c1c");
__webpack_require__("1654");
module.exports = __webpack_require__("95d5");


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
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5559":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("dbdb")('keys');
var uid = __webpack_require__("62a0");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "584a":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "5b4e":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("36c3");
var toLength = __webpack_require__("b447");
var toAbsoluteIndex = __webpack_require__("0fc9");
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

/***/ "5bba":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("9d98");
var $Object = __webpack_require__("584a").Object;
module.exports = function defineProperties(T, D) {
  return $Object.defineProperties(T, D);
};


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

/***/ "5d6b":
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__("e53d").parseInt;
var $trim = __webpack_require__("a1ce").trim;
var ws = __webpack_require__("e692");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "5d73":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("469f");

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

/***/ "5e83":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("8580");

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

/***/ "62a0":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "63b6":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var ctx = __webpack_require__("d864");
var hide = __webpack_require__("35e8");
var has = __webpack_require__("07e3");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
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

/***/ "6718":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var LIBRARY = __webpack_require__("b8e3");
var wksExt = __webpack_require__("ccb9");
var defineProperty = __webpack_require__("d9f6").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


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

/***/ "6abf":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("e6f3");
var hiddenKeys = __webpack_require__("1691").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "6b4c":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "6b54":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("3846");
var anObject = __webpack_require__("cb7c");
var $flags = __webpack_require__("0bfb");
var DESCRIPTORS = __webpack_require__("9e1e");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__("2aba")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__("79e5")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "6b6a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6c1c":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("c367");
var global = __webpack_require__("e53d");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var TO_STRING_TAG = __webpack_require__("5168")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "71c1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var defined = __webpack_require__("25eb");
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

/***/ "7213":
/***/ (function(module) {

module.exports = {"weekDays":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"months":["January","February","March","April","May","June","July","August","September","October","November","December"],"years":"Years","year":"Year","month":"Month","week":"Week","day":"Day","today":"Today","noEvent":"No Event","deleteEvent":"Delete","createEvent":"Create an event","dateFormat":"DDDD mmmm d{S}, yyyy"};

/***/ }),

/***/ "7445":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("63b6");
var $parseInt = __webpack_require__("5d6b");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ "7514":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__("5ca1");
var $find = __webpack_require__("0a49")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("9c6c")(KEY);


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

/***/ "774e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("d2d5");

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

/***/ "794b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("8e60") && !__webpack_require__("294c")(function () {
  return Object.defineProperty(__webpack_require__("1ec9")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "79aa":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
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

/***/ "7cd4":
/***/ (function(module) {

module.exports = {"weekDays":["Ponedjeljak","Utorak","Srijeda","Četvrtak","Petak","Subota","Nedjelja"],"months":["Siječanj","Veljača","Ožujak","Travanj","Svibanj","Lipanj","Srpanj","Kolovoz","Rujan","Listopad","Studeni","Prosinac"],"years":"Godine","year":"Godina","month":"Mjesec","week":"Tjedan","day":"Dan","today":"Današnji dan","noEvent":"Nema događaja","deleteEvent":"Obriši","createEvent":"Kreiraj događaj","dateFormat":"DDDD d mmmm yyyy"};

/***/ }),

/***/ "7cd6":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("40c3");
var ITERATOR = __webpack_require__("5168")('iterator');
var Iterators = __webpack_require__("481b");
module.exports = __webpack_require__("584a").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "7d7b":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var get = __webpack_require__("7cd6");
module.exports = __webpack_require__("584a").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "7e90":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var anObject = __webpack_require__("e4ae");
var getKeys = __webpack_require__("c3a1");

module.exports = __webpack_require__("8e60") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
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

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "8436":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "8580":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("ee6d");
module.exports = __webpack_require__("584a").Object.getOwnPropertyDescriptors;


/***/ }),

/***/ "85e1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "85f2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("454f");

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

/***/ "88b4":
/***/ (function(module) {

module.exports = {"weekDays":["星期一","星期二","星期三","星期四","星期五","星期六","星期日"],"months":["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],"years":"年","year":"本年","month":"月","week":"周","day":"日","today":"今日","noEvent":"暂无活动","deleteEvent":"删除","createEvent":"新建活动","dateFormat":"yyyy mmmm d DDDD"};

/***/ }),

/***/ "89f4":
/***/ (function(module) {

module.exports = {"weekDays":["Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado","Domingo"],"months":["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],"years":"Anos","year":"Ano","month":"Mês","week":"Semana","day":"Dia","today":"Hoje","noEvent":"Sem eventos","deleteEvent":"Remover","createEvent":"Criar um evento","dateFormat":"DDDD d mmmm yyyy"};

/***/ }),

/***/ "8aae":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("32a6");
module.exports = __webpack_require__("584a").Object.keys;


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

/***/ "8d7d":
/***/ (function(module) {

module.exports = {"weekDays":["Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag","Sonntag"],"months":["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],"years":"Jahre","year":"Jahr","month":"Monat","week":"Woche","day":"Tag","today":"Heute","noEvent":"Keine Events","deleteEvent":"Löschen","createEvent":"Event erstellen","dateFormat":"DDDD d mmmm yyyy"};

/***/ }),

/***/ "8e60":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("294c")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "8f60":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("a159");
var descriptor = __webpack_require__("aebd");
var setToStringTag = __webpack_require__("45f2");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("35e8")(IteratorPrototype, __webpack_require__("5168")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "9003":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("6b4c");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


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

/***/ "9138":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("35e8");


/***/ }),

/***/ "9306":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("c3a1");
var gOPS = __webpack_require__("9aa9");
var pIE = __webpack_require__("355d");
var toObject = __webpack_require__("241e");
var IObject = __webpack_require__("335c");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("294c")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "95d5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("40c3");
var ITERATOR = __webpack_require__("5168")('iterator');
var Iterators = __webpack_require__("481b");
module.exports = __webpack_require__("584a").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "9aa9":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


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

/***/ "9d98":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("63b6");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__("8e60"), 'Object', { defineProperties: __webpack_require__("7e90") });


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

/***/ "a159":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("e4ae");
var dPs = __webpack_require__("7e90");
var enumBugKeys = __webpack_require__("1691");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("1ec9")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("32fc").appendChild(iframe);
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

/***/ "a1ce":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("63b6");
var defined = __webpack_require__("25eb");
var fails = __webpack_require__("294c");
var spaces = __webpack_require__("e692");
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

/***/ "a39e":
/***/ (function(module) {

module.exports = {"weekDays":["Pondelok","Utorok","Streda","Štvrtok","Piatok","Sobota","Nedeľa"],"months":["Január","Február","Marec","Apríl","Máj","Jún","Júl","August","September","Október","November","December"],"years":"Roky","year":"Rok","month":"Mesiac","week":"Týždeň","day":"Deň","today":"Dnes","noEvent":"Bez udalosti","deleteEvent":"Odstrániť","createEvent":"Vytvoriť udalosť","dateFormat":"DDDD d. mmmm yyyy"};

/***/ }),

/***/ "a3c3":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("63b6");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("9306") });


/***/ }),

/***/ "a481":
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__("214f")('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});


/***/ }),

/***/ "a4bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("8aae");

/***/ }),

/***/ "a65a":
/***/ (function(module) {

module.exports = {"weekDays":["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"],"months":["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],"years":"Годы","year":"Год","month":"Месяц","week":"Неделя","day":"День","today":"Сегодня","noEvent":"Нет событий","deleteEvent":"Удалить","createEvent":"Создать событие","dateFormat":"DDDD d mmmm yyyy"};

/***/ }),

/***/ "a745":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("f410");

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

/***/ "acbd":
/***/ (function(module) {

module.exports = {"weekDays":["ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი","კვირა"],"months":["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი"],"years":"წლები","year":"წელი","month":"თვე","week":"კვირა","day":"დღე","today":"დღეს","noEvent":"ღონისძიება არ არის","deleteEvent":"წაშლა","createEvent":"შექმენით ღონისძიება","dateFormat":"DDDD d mmmm yyyy"};

/***/ }),

/***/ "aebd":
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

/***/ "b0dc":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("e4ae");
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

/***/ "b258":
/***/ (function(module) {

module.exports = {"weekDays":["Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag","Zondag"],"months":["Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December"],"years":"Jaren","year":"Jaar","month":"Maand","week":"Week","day":"Dag","today":"Vandaag","noEvent":"Geen afspraken","deleteEvent":"Verwijderen","createEvent":"Nieuwe afspraak aanmaken","dateFormat":"DDDD d mmmm yyyy"};

/***/ }),

/***/ "b447":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("3a38");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "b8e3":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "b9e9":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("7445");
module.exports = __webpack_require__("584a").parseInt;


/***/ }),

/***/ "ba99":
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__("6abf");
var gOPS = __webpack_require__("9aa9");
var anObject = __webpack_require__("e4ae");
var Reflect = __webpack_require__("e53d").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
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

/***/ "bf0b":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("355d");
var createDesc = __webpack_require__("aebd");
var toIObject = __webpack_require__("36c3");
var toPrimitive = __webpack_require__("1bc3");
var has = __webpack_require__("07e3");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("8e60") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "bf90":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__("36c3");
var $getOwnPropertyDescriptor = __webpack_require__("bf0b").f;

__webpack_require__("ce7e")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


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

/***/ "c367":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("8436");
var step = __webpack_require__("50ed");
var Iterators = __webpack_require__("481b");
var toIObject = __webpack_require__("36c3");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("30f1")(Array, 'Array', function (iterated, kind) {
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

/***/ "c3a1":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("e6f3");
var enumBugKeys = __webpack_require__("1691");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
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

/***/ "c8bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("54a1");

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

/***/ "ccb9":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("5168");


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

/***/ "ce7e":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("63b6");
var core = __webpack_require__("584a");
var fails = __webpack_require__("294c");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "d011":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cell_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6b6a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cell_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cell_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cell_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d2d5":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1654");
__webpack_require__("549b");
module.exports = __webpack_require__("584a").Array.from;


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

/***/ "d847":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5bba");

/***/ }),

/***/ "d864":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("79aa");
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

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "d9f6":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var toPrimitive = __webpack_require__("1bc3");
var dP = Object.defineProperty;

exports.f = __webpack_require__("8e60") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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

/***/ "dbdb":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("584a");
var global = __webpack_require__("e53d");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("b8e3") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e240":
/***/ (function(module) {

module.exports = {"weekDays":["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"],"months":["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],"years":"Años","year":"Año","month":"Mes","week":"Semana","day":"Día","today":"Hoy","noEvent":"No hay evento","deleteEvent":"Borrar","createEvent":"Crear un evento","dateFormat":"DDDD d mmmm yyyy"};

/***/ }),

/***/ "e265":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ed33");

/***/ }),

/***/ "e4ae":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "e53d":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "e692":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "e6f3":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("07e3");
var toIObject = __webpack_require__("36c3");
var arrayIndexOf = __webpack_require__("5b4e")(false);
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');

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

/***/ "e814":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("b9e9");

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

/***/ "ebfd":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("62a0")('meta');
var isObject = __webpack_require__("f772");
var has = __webpack_require__("07e3");
var setDesc = __webpack_require__("d9f6").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("294c")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "ed33":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("014b");
module.exports = __webpack_require__("584a").Object.getOwnPropertySymbols;


/***/ }),

/***/ "ee6d":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__("63b6");
var ownKeys = __webpack_require__("ba99");
var toIObject = __webpack_require__("36c3");
var gOPD = __webpack_require__("bf0b");
var createProperty = __webpack_require__("20fd");

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

/***/ "eed7":
/***/ (function(module) {

module.exports = {"weekDays":["Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato","Domenica"],"months":["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],"years":"Anni","year":"Anno","month":"Mese","week":"Settimana","day":"Giorno","today":"Oggi","noEvent":"No evento","deleteEvent":"Cancellare","createEvent":"Creare un evento","dateFormat":"DDDD d mmmm yyyy"};

/***/ }),

/***/ "f386":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__("386b")('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


/***/ }),

/***/ "f410":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1af6");
module.exports = __webpack_require__("584a").Array.isArray;


/***/ }),

/***/ "f772":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"62ddfba7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/index.vue?vue&type=template&id=32c145ba&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vuecal__flex vuecal",class:_vm.cssClasses,attrs:{"column":"","lang":_vm.locale}},[_c('div',{staticClass:"vuecal__header"},[(!_vm.hideViewSelector)?_c('ul',{staticClass:"vuecal__flex vuecal__menu"},_vm._l((_vm.views),function(v,id){return (v.enabled)?_c('li',{class:{ active: _vm.view.id === id },on:{"click":function($event){_vm.switchView(id)}}},[_vm._v(_vm._s(v.label))]):_vm._e()}),0):_vm._e(),(!_vm.hideTitleBar)?_c('div',{staticClass:"vuecal__title"},[_c('div',{staticClass:"vuecal__arrow vuecal__arrow--prev",on:{"click":_vm.previous}},[_vm._t("arrowPrev",[_c('i',{staticClass:"angle"})])],2),_vm._t("title",[_c('span',{class:{ clickable: !!_vm.broaderView },on:{"click":function($event){_vm.switchToBroaderView()}}},[_vm._v(_vm._s(_vm.viewTitle))])],{title:_vm.viewTitle,view:_vm.view}),_c('div',{staticClass:"vuecal__arrow vuecal__arrow--next",on:{"click":_vm.next}},[_vm._t("arrowNext",[_c('i',{staticClass:"angle"})])],2)],2):_vm._e(),(_vm.viewHeadings.length && !(_vm.hasSplits && _vm.view.id === 'week'))?_c('div',{staticClass:"vuecal__flex vuecal__weekdays-headings"},_vm._l((_vm.viewHeadings),function(heading,i){return _c('div',{key:i,staticClass:"vuecal__flex vuecal__heading",class:heading.class,style:(_vm.weekdayCellStyles)},[_vm._l((3),function(j){return _c('span',{key:j},[_vm._v(_vm._s(heading['label' + j]))])}),(heading.label4)?_c('span',[_vm._v(" ")]):_vm._e(),(heading.label4)?_c('span',[_vm._v(_vm._s(heading.label4))]):_vm._e()],2)}),0):_vm._e()]),(!_vm.hideBody)?_c('div',{staticClass:"vuecal__flex vuecal__body",attrs:{"grow":""}},[_c('div',{class:{ vuecal__flex: !_vm.hasTimeColumn },staticStyle:{"min-width":"100%"}},[_c('div',{staticClass:"vuecal__bg",attrs:{"grow":""}},[(_vm.time && ['week', 'day'].indexOf(_vm.view.id) > -1)?_c('div',{staticClass:"vuecal__time-column"},_vm._l((_vm.timeCells),function(cell,i){return _c('div',{key:i,staticClass:"vuecal__time-cell",style:(("height: " + _vm.timeCellHeight + "px"))},[_vm._t("time-cell",[_c('span',{staticClass:"line"},[_vm._v(_vm._s(cell.label))])],{hours:cell.hours,minutes:cell.minutes})],2)}),0):_vm._e(),_c('div',{staticClass:"vuecal__flex vuecal__cells",attrs:{"grow":"","column":_vm.hasSplits && _vm.view.id === 'week'}},[(_vm.hasSplits && _vm.view.id === 'week')?_c('div',{staticClass:"vuecal__flex vuecal__weekdays-headings"},_vm._l((_vm.viewHeadings),function(heading,i){return _c('div',{key:i,staticClass:"vuecal__flex vuecal__heading",class:heading.class,style:(_vm.weekdayCellStyles)},[_vm._l((3),function(j){return _c('span',{key:j},[_vm._v(_vm._s(heading['label' + j]))])}),(heading.label4)?_c('span',[_vm._v(" ")]):_vm._e(),(heading.label4)?_c('span',[_vm._v(_vm._s(heading.label4))]):_vm._e()],2)}),0):_vm._e(),(_vm.hasSplits)?_c('div',{staticClass:"vuecal__flex",attrs:{"grow":""}},_vm._l((_vm.viewCells),function(cell,i){return _c('vuecal-cell',{key:i,class:cell.class,attrs:{"date":cell.date,"formatted-date":cell.formattedDate,"today":cell.today,"content":cell.content,"splits":_vm.splitDays},nativeOn:{"click":function($event){_vm.selectCell(cell)},"dblclick":function($event){_vm.dblClickToNavigate && _vm.switchToNarrowerView()}}})}),1):_vm._l((_vm.viewCells),function(cell,i){return _c('vuecal-cell',_vm._b({key:i,class:cell.class,attrs:{"date":cell.date,"formatted-date":cell.formattedDate,"today":cell.today,"content":cell.content},nativeOn:{"click":function($event){_vm.selectCell(cell)},"dblclick":function($event){_vm.dblClickToNavigate && _vm.switchToNarrowerView()}},scopedSlots:_vm._u([{key:"events-count-month-view",fn:function(ref){
var events = ref.events;
return _c('div',{attrs:{"events":events}},[_vm._t("events-count-month-view",[(events.length)?_c('span',{staticClass:"vuecal__cell-events-count"},[_vm._v(_vm._s(events.length))]):_vm._e()],{events:events})],2)}}])},'vuecal-cell',{ scopedSlots: _vm.$scopedSlots },false))})],2)])])]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vue-cal/index.vue?vue&type=template&id=32c145ba&lang=pug&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.small.js
var es6_string_small = __webpack_require__("f386");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("4917");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js
var get_own_property_descriptors = __webpack_require__("5e83");
var get_own_property_descriptors_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptors);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("d847");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("268f");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("e265");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("a4bb");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("85f2");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
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
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js






function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    if (i % 2) {
      var source = arguments[i] != null ? arguments[i] : {};

      var ownKeys = keys_default()(source);

      if (typeof get_own_property_symbols_default.a === 'function') {
        ownKeys = ownKeys.concat(get_own_property_symbols_default()(source).filter(function (sym) {
          return get_own_property_descriptor_default()(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else {
      define_properties_default()(target, get_own_property_descriptors_default()(arguments[i]));
    }
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("a745");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (is_array_default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("774e");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("c8bb");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js


function _iterableToArray(iter) {
  if (is_iterable_default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_default()(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("5176");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js
var parse_int = __webpack_require__("e814");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("5d73");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("6b54");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("7514");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// CONCATENATED MODULE: ./src/components/vue-cal/date-utils.js


var now = new Date(); // Cache today's date for better isDateToday() performances. Formatted without leading 0.

var todayFormatted = "".concat(now.getFullYear(), "-").concat(now.getMonth(), "-").concat(now.getDate()); // eslint-disable-next-line

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}; // eslint-disable-next-line


Date.prototype.subtractDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() - days);
  return date;
}; // eslint-disable-next-line


Date.prototype.getWeek = function () {
  var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
  var dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
};

var isDateToday = function isDateToday(date) {
  return "".concat(date.getFullYear(), "-").concat(date.getMonth(), "-").concat(date.getDate()) === todayFormatted;
};
/* export const getDateOfWeek = (w, y) => {
  let d = (1 + (w - 1) * 7) // 1st of January + 7 days for each week.
  return new Date(y, 0, d)
} */
// Returns today if it's Monday or previous Monday otherwise.

var getPreviousMonday = function getPreviousMonday() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var prevMonday = date && new Date(date.valueOf()) || new Date();
  prevMonday.setDate(prevMonday.getDate() - (prevMonday.getDay() + 6) % 7);
  return prevMonday;
};
/**
 * @param {int} The month number, 0 based.
 * @param {int} The year, not zero based, required to account for leap years.
 * @return {Date[]} List with date objects for each day of the month.
 */

var getDaysInMonth = function getDaysInMonth(month, year) {
  var date = new Date(year, month, 1);
  var days = [];

  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return days;
};
/* export const getDaysInWeek = (date) => {
  date = getPreviousMonday(date)
  let days = []
  for (let i = 0; i < 7; i++) {
    days.push(new Date(date))
    date.setDate(date.getDate() + 1)
  }

  return days
} */

var nth = function nth(d) {
  if (d > 3 && d < 21) return 'th';

  switch (d % 10) {
    case 1:
      return 'st';

    case 2:
      return 'nd';

    case 3:
      return 'rd';

    default:
      return 'th';
  }
};

var date_utils_formatTime = function formatTime(time) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'HH:mm';
  var H = Math.floor(time / 60);
  var h = H % 12 ? H % 12 : 12;
  var am = H < 12 ? 'am' : 'pm';
  var m = Math.floor(time % 60);
  var timeObj = {
    H: H,
    h: h,
    HH: (H < 10 ? '0' : '') + H,
    hh: (h < 10 ? '0' : '') + h,
    am: am,
    AM: am.toUpperCase(),
    m: m,
    mm: (m < 10 ? '0' : '') + m
  };
  return format.replace(/(\{[a-zA-Z]+\}|[a-zA-Z]+)/g, function (m, contents) {
    return timeObj[contents.replace(/\{|\}/g, '')];
  });
};
var formatDate = function formatDate(date) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  var localizedTexts = arguments.length > 2 ? arguments[2] : undefined;
  var d = date.getDate();
  var m = date.getMonth() + 1;
  var dateObj = {
    D: date.getDay(),
    // 0 to 6.
    DD: localizedTexts.weekDays[(date.getDay() - 1 + 7) % 7][0],
    // M to S.
    DDD: localizedTexts.weekDays[(date.getDay() - 1 + 7) % 7].substr(0, 3),
    // Mon to Sun.
    DDDD: localizedTexts.weekDays[(date.getDay() - 1 + 7) % 7],
    // Monday to Sunday.
    d: d,
    // 1 to 31.
    dd: (d < 10 ? '0' : '') + d,
    // 01 to 31.
    S: nth(d),
    // st, nd, rd, th.
    m: m,
    // 1 to 12.
    mm: (m < 10 ? '0' : '') + m,
    // 01 to 12.
    mmm: localizedTexts.months[m - 1].substr(0, 3),
    // Jan to Dec.
    mmmm: localizedTexts.months[m - 1],
    // January to December.
    yyyy: date.getFullYear(),
    // 2018.
    yy: date.getFullYear().toString().substr(2, 4) // 18.

  };
  return format.replace(/(\{[a-zA-Z]+\}|[a-zA-Z]+)/g, function (m, contents) {
    var result = dateObj[contents.replace(/\{|\}/g, '')];
    return result !== undefined ? result : contents;
  });
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"62ddfba7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/cell.vue?vue&type=template&id=474ac9b6&lang=pug&
var cellvue_type_template_id_474ac9b6_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vuecal__cell",class:( _obj = { splitted: _vm.splits.length, 'vuecal__cell--has-events': _vm.events.length }, _obj[_vm.cssClass] = true, _obj ),style:(_vm.cellStyles)},[_vm._l(((_vm.splits.length || 1)),function(i){return _c('div',{staticClass:"vuecal__cell-content",class:_vm.splits.length && ("vuecal__cell-split " + (_vm.splits[i - 1].class))},[(_vm.splits.length)?_c('div',{staticClass:"split-label",domProps:{"innerHTML":_vm._s(_vm.splits[i - 1].label)}}):_vm._e(),(_vm.content)?_c('div',{staticClass:"vuecal__cell-date",domProps:{"innerHTML":_vm._s(_vm.content)}}):_vm._e(),(!_vm.events.length && (['week', 'day'].indexOf(_vm.view) > -1 || (_vm.view === 'month' && _vm.eventsOnMonthView)))?_c('div',{staticClass:"vuecal__no-event"},[_vm._v(_vm._s(_vm.texts.noEvent))]):_vm._e(),(_vm.events.length && (['week', 'day'].indexOf(_vm.view) > -1))?_c('div',{staticClass:"vuecal__cell-events"},_vm._l(((_vm.splits.length ? _vm.splitEvents[i] : _vm.events)),function(event,j){return _c('div',{key:j,staticClass:"vuecal__event",class:_vm.eventClasses(event),style:(_vm.eventStyles(event)),on:{"mouseenter":function($event){_vm.onMouseEnter($event, event)},"mouseleave":function($event){_vm.onMouseLeave($event, event)},"mousedown":function($event){_vm.onMouseDown($event, event)},"contextmenu":function($event){_vm.onContextMenu($event, event)},"touchstart":function($event){_vm.onTouchStart($event, event)}}},[(_vm.editableEvents)?_c('div',{staticClass:"vuecal__event-delete",on:{"mousedown":function($event){$event.stopPropagation();$event.preventDefault();_vm.deleteEvent(event)},"touchstart":function($event){$event.stopPropagation();$event.preventDefault();_vm.touchDeleteEvent(event)}}},[_vm._v(_vm._s(_vm.texts.deleteEvent))]):_vm._e(),(_vm.editableEvents && event.title)?_c('div',{staticClass:"vuecal__event-title vuecal__event-title--edit",attrs:{"contenteditable":""},domProps:{"innerHTML":_vm._s(event.title)},on:{"blur":function($event){_vm.onEventTitleBlur($event, event)}}}):(event.title)?_c('div',{staticClass:"vuecal__event-title"},[_vm._v(_vm._s(event.title))]):_vm._e(),(event.startTimeMinutes)?_c('div',{staticClass:"vuecal__event-time"},[_vm._v(_vm._s(_vm._f("formatTime")(event.startTimeMinutes,_vm.timeFormat))),(event.endTimeMinutes)?_c('span',[_vm._v(" - "+_vm._s(_vm._f("formatTime")(event.endTimeMinutes,_vm.timeFormat)))]):_vm._e(),(event.multipleDays.daysCount)?_c('small',{staticClass:"days-to-end"},[_vm._v(" +"+_vm._s(event.multipleDays.daysCount - 1)+_vm._s(_vm.texts.day[0].toLowerCase()))]):_vm._e()]):_vm._e(),(event.content)?_c('div',{staticClass:"vuecal__event-content",domProps:{"innerHTML":_vm._s(event.content)}}):_vm._e(),(_vm.editableEvents && event.startTime && !event.multipleDays.start && !event.multipleDays.middle)?_c('div',{staticClass:"vuecal__event-resize-handle",on:{"mousedown":function($event){_vm.editableEvents && _vm.time && _vm.onDragHandleMouseDown($event, event)},"touchstart":function($event){_vm.editableEvents && _vm.time && _vm.onDragHandleMouseDown($event, event)}}}):_vm._e()])}),0):(_vm.events.length && (_vm.view === 'month' && _vm.eventsOnMonthView))?_c('div',{staticClass:"vuecal__cell-events"},_vm._l(((_vm.splits.length ? _vm.splitEvents[i] : _vm.events)),function(event,j){return _c('div',{key:j,staticClass:"vuecal__event custom_month_view",class:event.classes,style:(_vm.eventStyles(event)),on:{"mouseenter":function($event){_vm.onMouseEnter($event, event)},"mouseleave":function($event){_vm.onMouseLeave($event, event)},"mousedown":function($event){_vm.onMouseDown($event, event)},"contextmenu":function($event){_vm.onContextMenu($event, event)},"touchstart":function($event){_vm.onTouchStart($event, event)}}},[(event.title)?_c('div',{staticClass:"vuecal__event-title"},[_vm._v(_vm._s(_vm._f("formatTime")(event.startTimeMinutes,_vm.timeFormat))+"\n"+_vm._s(event.title))]):_vm._e()])}),0):_vm._e(),(_vm.view === 'month' && !_vm.eventsOnMonthView && _vm.events.length)?_c('div',[_vm._t("events-count-month-view",[(_vm.events.length)?_c('span',{staticClass:"vuecal__cell-events-count"},[_vm._v(_vm._s(_vm.events.length))]):_vm._e()],{events:_vm.events})],2):_vm._e()])}),(_vm.timelineVisible)?_c('div',{staticClass:"vuecal__now-line",style:(("top: " + _vm.todaysTimePosition + "px"))}):_vm._e()],2)
var _obj;}
var cellvue_type_template_id_474ac9b6_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vue-cal/cell.vue?vue&type=template&id=474ac9b6&lang=pug&

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/cell.vue?vue&type=script&lang=js&








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
//
//
//
//
//
//

/* harmony default export */ var cellvue_type_script_lang_js_ = ({
  props: {
    cssClass: {
      type: String,
      default: ''
    },
    date: {
      type: Date,
      required: true
    },
    formattedDate: {
      type: String,
      default: ''
    },
    content: {
      type: [String, Number],
      default: ''
    },
    splits: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    today: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      splitEvents: {}
    };
  },
  filters: {
    formatTime: function formatTime(value, format) {
      return value && (date_utils_formatTime(value, format) || '');
    }
  },
  methods: {
    updateEventPosition: function updateEventPosition(event) {
      var src = event.multipleDays.daysCount && event.multipleDays || event;
      var startTimeMinutes = src.startTimeMinutes,
          endTimeMinutes = src.endTimeMinutes;
      var minutesFromTop = startTimeMinutes - this.timeFrom;
      var top = Math.round(minutesFromTop * this.timeCellHeight / this.timeStep);
      minutesFromTop = Math.min(endTimeMinutes, this.timeTo) - this.timeFrom;
      var bottom = Math.round(minutesFromTop * this.timeCellHeight / this.timeStep);
      event.top = Math.max(top, 0);
      event.height = bottom - event.top;
    },
    eventStyles: function eventStyles(event) {
      if (!event.startTime || this.view === 'month') return {};
      var resizeAnEvent = this.domEvents.resizeAnEvent;
      return {
        top: "".concat(event.top, "px"),
        height: "".concat(resizeAnEvent.newHeight && resizeAnEvent.eventId === event.id ? resizeAnEvent.newHeight : event.height, "px")
      };
    },
    eventClasses: function eventClasses(event) {
      var _this = this;

      var overlapping = keys_default()(event.overlapping).length;

      var overlapped = keys_default()(event.overlapped).length;

      var simultaneous = keys_default()(event.simultaneous).length + 1;
      var forceLeft = false;
      var deletable = this.domEvents.clickHoldAnEvent.eventId && (this.domEvents.clickHoldAnEvent.eventId === event.id || event.linked.find(function (e) {
        return e.id === _this.domEvents.clickHoldAnEvent.eventId;
      }));

      if (simultaneous >= 3) {
        var split3 = simultaneous - 1;

        keys_default()(event.simultaneous).forEach(function (eventId) {
          if (split3 && keys_default()(_this.events.find(function (e) {
            return e.id === eventId;
          }).simultaneous).length + 1 < 3) {
            split3--;
          }
        });

        if (!split3) simultaneous = 2;
      } else if (simultaneous === 2) {
        var otherEvent = this.events.find(function (e) {
          return e.id === keys_default()(event.simultaneous)[0];
        });

        if (otherEvent && keys_default()(otherEvent.overlapping).length && keys_default()(otherEvent.overlapped).length) {
          forceLeft = true;
        }
      }

      return _objectSpread({}, event.classes, {
        'vuecal__event--focus': this.domEvents.focusAnEvent.eventId === event.id,
        'vuecal__event--deletable': deletable,
        'vuecal__event--overlapped': overlapped,
        'vuecal__event--overlapping': overlapping,
        'vuecal__event--split2': simultaneous === 2,
        'vuecal__event--split3': simultaneous >= 3,
        'vuecal__event--split-middle': overlapped && overlapping && simultaneous >= 3,
        'vuecal__event--split-left': forceLeft,
        'vuecal__event--multiple-days': keys_default()(event.multipleDays).length
      });
    },
    // Will recalculate all the overlappings of the current cell or only of the given split if provided.
    checkCellOverlappingEvents: function checkCellOverlappingEvents() {
      var _this2 = this;

      var split = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.events) {
        var foregroundEventsList = this.events.filter(function (item) {
          return !item.background && (split ? item.split === split : 1);
        });

        if (foregroundEventsList.length) {
          // Do the mapping outside of the next loop if not splitted cell.
          // If splitted need the whole event object to compare splits.
          var foregroundEventsIdList = foregroundEventsList.map(function (item) {
            return item.id;
          });
          var comparisonArray = {};
          this.events.forEach(function (event) {
            if (!event.background) {
              var comparisonArrayKeys = keys_default()(comparisonArray); // Unique comparison of events.


              comparisonArray[event.id] = _this2.splits.length ? foregroundEventsList.filter(function (item) {
                return item.id !== event.id && comparisonArrayKeys.indexOf(item.id) === -1 && item.split === event.split;
              }).map(function (item) {
                return item.id;
              }) : foregroundEventsIdList.filter(function (id) {
                return id !== event.id && comparisonArrayKeys.indexOf(id) === -1;
              });
              if (comparisonArray[event.id].length) _this2.checkOverlappingEvents(event, comparisonArray[event.id]);
            }
          });
        }
      }
    },
    checkOverlappingEvents: function checkOverlappingEvents(event, comparisonArray) {
      var _this3 = this;

      var src = event.multipleDays.daysCount && event.multipleDays || event;
      var startTimeMinE1 = src.startTimeMinutes,
          endTimeMinE1 = src.endTimeMinutes;
      comparisonArray.forEach(function (event2id, i) {
        var event2 = _this3.events.find(function (item) {
          return item.id === event2id;
        });

        var src2 = event2.multipleDays.daysCount && event2.multipleDays || event2;
        var startTimeMinE2 = src2.startTimeMinutes,
            endTimeMinE2 = src2.endTimeMinutes;
        var event1startsFirst = startTimeMinE1 < startTimeMinE2;
        var event1overlapsEvent2 = !event1startsFirst && endTimeMinE2 > startTimeMinE1;
        var event2overlapsEvent1 = event1startsFirst && endTimeMinE1 > startTimeMinE2;

        if (event1overlapsEvent2) {
          event.overlapping[event2.id] = true;
          event2.overlapped[event.id] = true;
        } else {
          delete event.overlapping[event2.id];
          delete event2.overlapped[event.id];
        }

        if (event2overlapsEvent1) {
          event2.overlapping[event.id] = true;
          event.overlapped[event2.id] = true;
        } else {
          delete event2.overlapping[event.id];
          delete event.overlapped[event2.id];
        } // If up to 3 events start at the same time.


        if (startTimeMinE1 === startTimeMinE2 || event1overlapsEvent2 || event2overlapsEvent1) {
          event.simultaneous[event2.id] = true;
          event2.simultaneous[event.id] = true;
        } else {
          delete event.simultaneous[event2.id];
          delete event2.simultaneous[event.id];
        }

        if (_this3.splits.length) {
          _this3.splitEvents[event.split] = _this3.events.filter(function (e) {
            return e.split === event.split;
          });
        }
      });
    },
    onEventTitleBlur: function onEventTitleBlur(e, event) {
      var _this4 = this;

      event.title = e.target.innerHTML;

      if (event.linked.daysCount) {
        event.linked.forEach(function (e) {
          var dayToModify = _this4.$parent.mutableEvents[e.date];
          dayToModify.find(function (e2) {
            return e2.id === e.id;
          }).title = event.title;
        });
      }

      this.$parent.emitWithEvent('event-change', event);
      this.$parent.emitWithEvent('event-title-change', event);
    },
    onResizeEvent: function onResizeEvent() {
      var _this$$parent$domEven = this.$parent.domEvents.resizeAnEvent,
          eventId = _this$$parent$domEven.eventId,
          newHeight = _this$$parent$domEven.newHeight;
      var event = this.events.filter(function (e) {
        return e.id === eventId;
      })[0];

      if (event) {
        event.height = Math.max(newHeight, 10);
        this.updateEndTimeOnResize(event);
        if (!event.background) this.checkCellOverlappingEvents(event.split || 0);
      }
    },
    updateEndTimeOnResize: function updateEndTimeOnResize(event) {
      var _this5 = this;

      var bottom = event.top + event.height;
      var endTime = (bottom / this.timeCellHeight * this.timeStep + this.timeFrom) / 60;

      var hours = parse_int_default()(endTime);

      var minutes = parse_int_default()((endTime - hours) * 60);

      event.endTimeMinutes = endTime * 60;
      event.endTime = "".concat(hours, ":").concat((minutes < 10 ? '0' : '') + minutes);
      event.end = event.end.split(' ')[0] + " ".concat(event.endTime);

      if (event.multipleDays.daysCount) {
        event.multipleDays.endTimeMinutes = event.endTimeMinutes;
        event.multipleDays.endTime = event.endTime;
        event.multipleDays.end = event.end;
        event.linked.forEach(function (e) {
          var dayToModify = _this5.$parent.mutableEvents[e.date];
          var eventToModify = dayToModify.find(function (e2) {
            return e2.id === e.id;
          });
          eventToModify.endTimeMinutes = event.endTimeMinutes;
          eventToModify.endTime = event.endTime;
          eventToModify.end = event.end;
        });
      }
    },
    // On an event.
    onMouseDown: function onMouseDown(e, event) {
      var touch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      // Prevent a double mouse down on touch devices.
      if ('ontouchstart' in window && !touch) return false;
      var _this$domEvents = this.domEvents,
          clickHoldAnEvent = _this$domEvents.clickHoldAnEvent,
          resizeAnEvent = _this$domEvents.resizeAnEvent; // If the delete button is already out and event is on focus then delete event.

      if (this.domEvents.focusAnEvent.eventId === event.id && clickHoldAnEvent.eventId === event.id) {
        return true;
      } // Focus the clicked event.


      this.focusEvent(event);
      clickHoldAnEvent.eventId = null; // Reinit click hold on each click.
      // Don't show delete button if dragging event.

      if (!resizeAnEvent.start && this.editableEvents) {
        clickHoldAnEvent.timeoutId = setTimeout(function () {
          clickHoldAnEvent.eventId = event.id;
        }, clickHoldAnEvent.timeout);
      }
    },
    onMouseEnter: function onMouseEnter(e, event) {
      e.preventDefault();
      this.$parent.emitWithEvent('event-mouse-enter', event);
    },
    onMouseLeave: function onMouseLeave(e, event) {
      e.preventDefault();
      this.$parent.emitWithEvent('event-mouse-leave', event);
    },
    onContextMenu: function onContextMenu(e, event) {
      e.preventDefault();
      return false;
    },
    onTouchStart: function onTouchStart(e, event) {
      this.onMouseDown(e, event, true);
    },
    onDragHandleMouseDown: function onDragHandleMouseDown(e, event) {
      var start = 'ontouchstart' in window && e.touches ? e.touches[0].clientY : e.clientY;
      this.domEvents.resizeAnEvent = assign_default()(this.domEvents.resizeAnEvent, {
        start: start,
        originalHeight: event.height,
        newHeight: event.height,
        eventId: event.id,
        eventStartDate: event.startDate
      });
    },
    deleteEvent: function deleteEvent(event) {
      var _this6 = this;

      var touch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // Prevent a double mouse down on touch devices.
      if ('ontouchstart' in window && !touch) return false;
      this.$parent.emitWithEvent('event-delete', event);
      this.events = this.events.filter(function (e) {
        return e.id !== event.id;
      }); // If deleting a multiple-day event, delete all the events pieces (days).

      if (event.multipleDays.daysCount) {
        event.linked.forEach(function (e) {
          var dayToModify = _this6.$parent.mutableEvents[e.date];
          var eventToDelete = dayToModify.find(function (e2) {
            return e2.id === e.id;
          });
          _this6.$parent.mutableEvents[e.date] = dayToModify.filter(function (e2) {
            return e2.id !== e.id;
          });

          if (!e.background) {
            // Remove this event from possible other overlapping events of the same cell.
            keys_default()(eventToDelete.overlapped).forEach(function (id) {
              return delete dayToModify.find(function (item) {
                return item.id === id;
              }).overlapping[eventToDelete.id];
            });

            keys_default()(eventToDelete.overlapping).forEach(function (id) {
              return delete dayToModify.find(function (item) {
                return item.id === id;
              }).overlapped[eventToDelete.id];
            });

            keys_default()(eventToDelete.simultaneous).forEach(function (id) {
              return delete dayToModify.find(function (item) {
                return item.id === id;
              }).simultaneous[eventToDelete.id];
            });
          }
        });
      }

      if (!event.background) {
        // Remove this event from possible other overlapping events of the same cell.
        keys_default()(event.overlapped).forEach(function (id) {
          return delete _this6.events.find(function (item) {
            return item.id === id;
          }).overlapping[event.id];
        });

        keys_default()(event.overlapping).forEach(function (id) {
          return delete _this6.events.find(function (item) {
            return item.id === id;
          }).overlapped[event.id];
        });

        keys_default()(event.simultaneous).forEach(function (id) {
          return delete _this6.events.find(function (item) {
            return item.id === id;
          }).simultaneous[event.id];
        });

        this.checkCellOverlappingEvents(event.split || 0);
      }

      if (this.splits.length) this.splitEvents[event.split] = this.events.filter(function (e) {
        return e.id !== event.id && e.split === event.split;
      });
    },
    touchDeleteEvent: function touchDeleteEvent(event) {
      this.deleteEvent(event, true);
    },
    focusEvent: function focusEvent(event) {
      this.$parent.emitWithEvent('event-focus', event);
      this.domEvents.focusAnEvent.eventId = event.id;
    }
  },
  computed: {
    texts: function texts() {
      return this.$parent.texts;
    },
    view: function view() {
      return this.$parent.view.id;
    },
    time: function time() {
      return this.$parent.time;
    },
    timeFormat: function timeFormat() {
      return this.$parent.timeFormat || (this.$parent['12Hour'] ? 'h:mm{am}' : 'HH:mm');
    },
    timeCellHeight: function timeCellHeight() {
      return parse_int_default()(this.$parent.timeCellHeight);
    },
    timeFrom: function timeFrom() {
      return parse_int_default()(this.$parent.timeFrom);
    },
    timeTo: function timeTo() {
      return parse_int_default()(this.$parent.timeTo);
    },
    timeStep: function timeStep() {
      return parse_int_default()(this.$parent.timeStep);
    },
    eventsOnMonthView: function eventsOnMonthView() {
      return this.$parent.eventsOnMonthView;
    },
    editableEvents: function editableEvents() {
      return this.$parent.editableEvents;
    },
    noEventOverlaps: function noEventOverlaps() {
      var _this7 = this;

      this.$nextTick(function () {
        return _this7.checkCellOverlappingEvents();
      });
      return this.$parent.noEventOverlaps;
    },
    domEvents: {
      get: function get() {
        if (this.$parent.domEvents.resizeAnEvent.eventId) this.onResizeEvent();
        return this.$parent.domEvents;
      },
      set: function set(object) {
        this.$parent.domEvents = object;
      }
    },
    cellStyles: function cellStyles() {
      return {
        minWidth: "".concat(this.$parent.minCellWidth, "px") || false
      };
    },
    events: {
      get: function get() {
        var _this8 = this;

        var events = this.$parent.mutableEvents[this.formattedDate] || []; // eslint-disable-next-line

        this.splitEvents = [];
        events.forEach(function (event) {
          if (event.startTime) _this8.updateEventPosition(event); // Only for splits.

          if (_this8.splits.length && event.split) {
            // eslint-disable-next-line
            if (!_this8.splitEvents[event.split]) _this8.$set(_this8.splitEvents, event.split, []); // eslint-disable-next-line

            _this8.splitEvents[event.split].push(event);
          }
        }); // NextTick() prevents a cyclic redundancy.

        this.$nextTick(function () {
          _this8.checkCellOverlappingEvents();

          _this8.$forceUpdate(); // @todo: find a way to avoid this.

        });
        return events;
      },
      set: function set(events) {
        this.$parent.mutableEvents[this.formattedDate] = events;
      }
    },
    cellSplitEvents: function cellSplitEvents() {
      var splitsEventIndexes = {};
      this.events.forEach(function (e, i) {
        if (!splitsEventIndexes[e.split || 0]) splitsEventIndexes[e.split || 0] = {};
        splitsEventIndexes[e.split || 0][e.id] = i;
      });
      return splitsEventIndexes;
    },
    timelineVisible: function timelineVisible() {
      if (!this.today || !this.time || ['week', 'day'].indexOf(this.view) === -1) return;
      var now = new Date();
      var startTimeMinutes = now.getHours() * 60 + now.getMinutes();
      return startTimeMinutes <= this.timeTo;
    },
    todaysTimePosition: function todaysTimePosition() {
      // Make sure to skip the Maths if not relevant.
      if (!this.today || !this.time) return;
      var now = new Date();
      var startTimeMinutes = now.getHours() * 60 + now.getMinutes();
      var minutesFromTop = startTimeMinutes - this.timeFrom;
      return Math.round(minutesFromTop * this.timeCellHeight / this.timeStep);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vue-cal/cell.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_cal_cellvue_type_script_lang_js_ = (cellvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/vue-cal/cell.vue?vue&type=style&index=0&lang=scss&
var cellvue_type_style_index_0_lang_scss_ = __webpack_require__("d011");

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
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
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

// CONCATENATED MODULE: ./src/components/vue-cal/cell.vue






/* normalize component */

var component = normalizeComponent(
  vue_cal_cellvue_type_script_lang_js_,
  cellvue_type_template_id_474ac9b6_lang_pug_render,
  cellvue_type_template_id_474ac9b6_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "cell.vue"
/* harmony default export */ var vue_cal_cell = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/index.vue?vue&type=script&lang=js&













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
//
//
//


/* harmony default export */ var vue_calvue_type_script_lang_js_ = ({
  name: 'vue-cal',
  components: {
    'vuecal-cell': vue_cal_cell
  },
  props: {
    locale: {
      type: String,
      default: 'en'
    },
    hideViewSelector: {
      type: Boolean,
      default: false
    },
    hideTitleBar: {
      type: Boolean,
      default: false
    },
    hideBody: {
      type: Boolean,
      default: false
    },
    hideWeekends: {
      type: Boolean,
      default: false
    },
    disableViews: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    defaultView: {
      type: String,
      default: 'week'
    },
    selectedDate: {
      type: String,
      default: ''
    },
    small: {
      type: Boolean,
      default: false
    },
    xsmall: {
      type: Boolean,
      default: false
    },
    clickToNavigate: {
      type: Boolean,
      default: false
    },
    dblClickToNavigate: {
      type: Boolean,
      default: true
    },
    time: {
      type: Boolean,
      default: true
    },
    timeFrom: {
      type: Number,
      default: 0 // In minutes.

    },
    timeTo: {
      type: Number,
      default: 24 * 60 // In minutes.

    },
    timeStep: {
      type: Number,
      default: 60 // In minutes.

    },
    timeCellHeight: {
      type: Number,
      default: 40 // In pixels.

    },
    '12Hour': {
      type: Boolean,
      default: false
    },
    'timeFormat': {
      type: String,
      default: ''
    },
    minCellWidth: {
      type: Number,
      default: 0
    },
    splitDays: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    events: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    editableEvents: {
      type: Boolean,
      default: false
    },
    noEventOverlaps: {
      type: Boolean,
      default: false
    },
    eventsOnMonthView: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      ready: false,
      now: now,
      view: {
        id: '',
        title: '',
        startDate: null,
        selectedDate: null
      },
      eventIdIncrement: 1,
      domEvents: {
        resizeAnEvent: {
          eventId: null,
          // Only one at a time.
          start: null,
          originalHeight: 0,
          newHeight: 0
        },
        dragAnEvent: {
          eventId: null // Only one at a time.

        },
        focusAnEvent: {
          eventId: null // Only one at a time.

        },
        clickHoldAnEvent: {
          eventId: null,
          // Only one at a time.
          timeout: 1200,
          timeoutId: null
        },
        dblTapACell: {
          taps: 0,
          timeout: 500
        }
      },
      mutableEvents: {} // An indexed array of mutable events updated each time given events array changes.

    };
  },
  methods: {
    previous: function previous() {
      switch (this.view.id) {
        case 'years':
          this.switchView(this.view.id, new Date(this.view.startDate.getFullYear() - 25, 0, 1));
          break;

        case 'year':
          var firstDayOfYear = new Date(this.view.startDate.getFullYear() - 1, 1, 1);
          this.switchView(this.view.id, firstDayOfYear);
          break;

        case 'month':
          var firstDayOfMonth = new Date(this.view.startDate.getFullYear(), this.view.startDate.getMonth() - 1, 1);
          this.switchView(this.view.id, firstDayOfMonth);
          break;

        case 'week':
          var firstDayOfPrevWeek = getPreviousMonday(this.view.startDate).subtractDays(7);
          this.switchView(this.view.id, firstDayOfPrevWeek);
          break;

        case 'day':
          var day = this.view.startDate.subtractDays(1);
          this.switchView(this.view.id, day);
          break;
      }
    },
    next: function next() {
      switch (this.view.id) {
        case 'years':
          this.switchView(this.view.id, new Date(this.view.startDate.getFullYear() + 25, 0, 1));
          break;

        case 'year':
          var firstDayOfYear = new Date(this.view.startDate.getFullYear() + 1, 0, 1);
          this.switchView(this.view.id, firstDayOfYear);
          break;

        case 'month':
          var firstDayOfMonth = new Date(this.view.startDate.getFullYear(), this.view.startDate.getMonth() + 1, 1);
          this.switchView(this.view.id, firstDayOfMonth);
          break;

        case 'week':
          var firstDayOfNextWeek = getPreviousMonday(this.view.startDate).addDays(7);
          this.switchView(this.view.id, firstDayOfNextWeek);
          break;

        case 'day':
          var day = this.view.startDate.addDays(1);
          this.switchView(this.view.id, day);
          break;
      }
    },
    switchToBroaderView: function switchToBroaderView() {
      if (this.broaderView) this.switchView(this.broaderView);
    },
    switchToNarrowerView: function switchToNarrowerView() {
      var _this = this;

      var views = keys_default()(this.views);

      views = views.slice(views.indexOf(this.view.id) + 1);
      var view = views.find(function (v) {
        return _this.views[v].enabled;
      });
      if (view) this.switchView(view);
    },
    switchView: function switchView(view) {
      var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.view.id = view;

      if (!date) {
        date = this.view.selectedDate || this.view.startDate;
        if (view === 'week') date = getPreviousMonday(date);
      }

      switch (view) {
        case 'years':
          // Always fill first cell with a multiple of 25 years, E.g. year 2000, or 2025.
          this.view.startDate = new Date(Math.floor(date.getFullYear() / 25) * 25 || 2000, 0, 1);
          break;

        case 'year':
          this.view.startDate = new Date(date.getFullYear(), 0, 1);
          break;

        case 'month':
          this.view.startDate = new Date(date.getFullYear(), date.getMonth(), 1);
          break;

        case 'week':
        case 'day':
          this.view.startDate = date;
          break;
      }

      if (this.ready) {
        var params = {
          view: view,
          startDate: this.view.startDate
        };
        if (view === 'week') params.week = this.view.startDate.getWeek();
        this.$emit('view-change', params);
      }
    },
    findAncestor: function findAncestor(el, Class) {
      while ((el = el.parentElement) && !el.classList.contains(Class)) {
        ;
      }

      return el;
    },
    isDOMElementAnEvent: function isDOMElementAnEvent(el) {
      return el.classList.contains('vuecal__event') || this.findAncestor(el, 'vuecal__event');
    },
    selectCell: function selectCell(cell) {
      var _this2 = this;

      if (this.view.selectedDate.toString() !== cell.date.toString()) {
        this.view.selectedDate = cell.date;
        this.$emit('day-focus', cell.date);
      } // Switch to narrower view.


      if (this.clickToNavigate) this.switchToNarrowerView(); // Handle double click manually for touch devices.
      else if (this.dblClickToNavigate && 'ontouchstart' in window) {
          this.domEvents.dblTapACell.taps++;
          setTimeout(function () {
            return _this2.domEvents.dblTapACell.taps = 0;
          }, this.domEvents.dblTapACell.timeout);

          if (this.domEvents.dblTapACell.taps >= 2) {
            this.domEvents.dblTapACell.taps = 0;
            this.switchToNarrowerView();
          }
        }
    },
    // Event resizing is started in cell component (onMouseDown) but place onMouseMove & onMouseUp
    // handlers in the single parent for performance.
    onMouseMove: function onMouseMove(e) {
      var resizeAnEvent = this.domEvents.resizeAnEvent;
      if (resizeAnEvent.eventId === null) return;
      e.preventDefault();
      var y = 'ontouchstart' in window ? e.touches[0].clientY : e.clientY;
      resizeAnEvent.newHeight = resizeAnEvent.originalHeight + (y - resizeAnEvent.start);
    },
    onMouseUp: function onMouseUp(e) {
      var _this$domEvents = this.domEvents,
          focusAnEvent = _this$domEvents.focusAnEvent,
          resizeAnEvent = _this$domEvents.resizeAnEvent,
          clickHoldAnEvent = _this$domEvents.clickHoldAnEvent; // On event resize end, emit event.

      if (resizeAnEvent.eventId) {
        var event = this.mutableEvents[resizeAnEvent.eventStartDate].find(function (item) {
          return item.id === resizeAnEvent.eventId;
        });

        if (event) {
          this.emitWithEvent('event-change', event);
          this.emitWithEvent('event-duration-change', event);
        }
      } // If not mouse up on an event, unfocus any event except if just dragged.


      if (!this.isDOMElementAnEvent(e.target) && !resizeAnEvent.eventId) {
        focusAnEvent.eventId = null; // Cancel event focus.

        clickHoldAnEvent.eventId = null; // Hide delete button.
      } // Prevent showing delete button if click and hold was not long enough.
      // Click & hold timeout happens in onMouseDown() in cell component.


      if (clickHoldAnEvent.timeoutId && !clickHoldAnEvent.eventId) {
        clearTimeout(clickHoldAnEvent.timeoutId);
        clickHoldAnEvent.timeoutId = null;
      } // Any mouse up must cancel event resizing.


      resizeAnEvent.eventId = null;
      resizeAnEvent.start = null;
      resizeAnEvent.originalHeight = null;
      resizeAnEvent.newHeight = null;
    },
    // Object of arrays of events indexed by dates.
    updateMutableEvents: function updateMutableEvents() {
      var _this3 = this;

      // eslint-disable-next-line
      this.mutableEvents = {}; // Group events into dates.

      this.events.map(function (event) {
        var _classes;

        var _event$start$split = event.start.split(' '),
            _event$start$split2 = _slicedToArray(_event$start$split, 2),
            startDate = _event$start$split2[0],
            _event$start$split2$ = _event$start$split2[1],
            startTime = _event$start$split2$ === void 0 ? '' : _event$start$split2$;

        var _startTime$split = startTime.split(':'),
            _startTime$split2 = _slicedToArray(_startTime$split, 2),
            hoursStart = _startTime$split2[0],
            minutesStart = _startTime$split2[1];

        var startTimeMinutes = parse_int_default()(hoursStart) * 60 + parse_int_default()(minutesStart);

        var _event$end$split = event.end.split(' '),
            _event$end$split2 = _slicedToArray(_event$end$split, 2),
            endDate = _event$end$split2[0],
            _event$end$split2$ = _event$end$split2[1],
            endTime = _event$end$split2$ === void 0 ? '' : _event$end$split2$;

        var _endTime$split = endTime.split(':'),
            _endTime$split2 = _slicedToArray(_endTime$split, 2),
            hoursEnd = _endTime$split2[0],
            minutesEnd = _endTime$split2[1];

        var endTimeMinutes = parse_int_default()(hoursEnd) * 60 + parse_int_default()(minutesEnd);

        var multipleDays = startDate !== endDate; // Keep the event ids scoped to this calendar instance.
        // eslint-disable-next-line

        var id = "".concat(_this3._uid, "_").concat(_this3.eventIdIncrement++);
        event = assign_default()({}, event, {
          id: id,
          startDate: startDate,
          startTime: startTime,
          startTimeMinutes: startTimeMinutes,
          endDate: endDate,
          endTime: endTime,
          endTimeMinutes: endTimeMinutes,
          height: 0,
          top: 0,
          overlapped: {},
          overlapping: {},
          simultaneous: {},
          linked: [],
          // Linked events.
          multipleDays: {},
          classes: (_classes = {}, _defineProperty(_classes, event.class, true), _defineProperty(_classes, 'vuecal__event--background', event.background), _defineProperty(_classes, 'vuecal__event--multiple-days', multipleDays), _defineProperty(_classes, 'event-start', multipleDays), _classes)
        }); // Make array reactive for future events creations & deletions.

        if (!(event.startDate in _this3.mutableEvents)) _this3.$set(_this3.mutableEvents, event.startDate, []); // eslint-disable-next-line

        _this3.mutableEvents[event.startDate].push(event);

        if (multipleDays) {
          (function () {
            // Create an array of linked events to attach to each event piece (piece = 1 day),
            // So that deletion and modification reflects on all the pieces.
            var eventPieces = [];
            var oneDayInMs = 24 * 60 * 60 * 1000;

            var _startDate$split = startDate.split('-'),
                _startDate$split2 = _slicedToArray(_startDate$split, 3),
                y1 = _startDate$split2[0],
                m1 = _startDate$split2[1],
                d1 = _startDate$split2[2];

            var _endDate$split = endDate.split('-'),
                _endDate$split2 = _slicedToArray(_endDate$split, 3),
                y2 = _endDate$split2[0],
                m2 = _endDate$split2[1],
                d2 = _endDate$split2[2];

            startDate = new Date(y1, parse_int_default()(m1) - 1, d1);
            endDate = new Date(y2, parse_int_default()(m2) - 1, d2);
            var datesDiff = Math.round(Math.abs((startDate.getTime() - endDate.getTime()) / oneDayInMs)); // Update First day event.

            event.multipleDays = {
              start: true,
              startDate: startDate,
              startTime: startTime,
              startTimeMinutes: startTimeMinutes,
              endDate: startDate,
              endTime: '24:00',
              endTimeMinutes: 24 * 60,
              daysCount: datesDiff + 1 // Generate event pieces ids to link them all together
              // and update the first event linked events array with all ids of pieces.

            };

            for (var i = 1; i <= datesDiff; i++) {
              var date = formatDate(new Date(startDate).addDays(i), 'yyyy-mm-dd', _this3.texts);
              eventPieces.push({
                id: "".concat(_this3._uid, "_").concat(_this3.eventIdIncrement++),
                date: date
              });
            }

            event.linked = eventPieces; // Create 1 event per day and link them all.

            var _loop = function _loop(_i) {
              var date = eventPieces[_i - 1].date;
              var linked = [{
                id: event.id,
                date: event.startDate
              }].concat(_toConsumableArray(eventPieces.slice(0).filter(function (e) {
                return e.id !== eventPieces[_i - 1].id;
              }))); // Make array reactive for future events creations & deletions.

              if (!(date in _this3.mutableEvents)) _this3.$set(_this3.mutableEvents, date, []);

              _this3.mutableEvents[date].push(_objectSpread({}, event, {
                id: eventPieces[_i - 1].id,
                overlapped: {},
                overlapping: {},
                simultaneous: {},
                linked: linked,
                multipleDays: {
                  start: false,
                  middle: _i < datesDiff,
                  end: _i === datesDiff,
                  startDate: date,
                  startTime: '00:00',
                  startTimeMinutes: 0,
                  endDate: date,
                  endTime: _i === datesDiff ? endTime : '24:00',
                  endTimeMinutes: _i === datesDiff ? endTimeMinutes : 24 * 60,
                  daysCount: datesDiff + 1
                },
                classes: _objectSpread({}, event.classes, {
                  'event-start': false,
                  'event-middle': _i < datesDiff,
                  'event-end': _i === datesDiff
                })
              }));
            };

            for (var _i = 1; _i <= datesDiff; _i++) {
              _loop(_i);
            }
          })();
        }

        return event;
      });
    },
    emitWithEvent: function emitWithEvent(eventName, event) {
      // Delete vue-cal specific props instead of returning a set of props so user
      // can place whatever they want inside an event and see it returned.
      var evt = _objectSpread({}, event);

      delete evt.height;
      delete evt.top;
      delete evt.overlapped;
      delete evt.overlapping;
      delete evt.simultaneous;
      delete evt.classes; // Return date objects for easy manipulation.

      var _evt$start$split = evt.start.split(' '),
          _evt$start$split2 = _slicedToArray(_evt$start$split, 2),
          date1 = _evt$start$split2[0],
          time1 = _evt$start$split2[1];

      var _ref = date1 && date1.split('-') || [0, 0, 0],
          _ref2 = _slicedToArray(_ref, 3),
          y1 = _ref2[0],
          m1 = _ref2[1],
          d1 = _ref2[2];

      var _ref3 = time1 && time1.split(':') || [0, 0],
          _ref4 = _slicedToArray(_ref3, 2),
          h1 = _ref4[0],
          min1 = _ref4[1];

      evt.startDate = new Date(y1, parse_int_default()(m1) - 1, d1, h1, min1);

      var _evt$end$split = evt.end.split(' '),
          _evt$end$split2 = _slicedToArray(_evt$end$split, 2),
          date2 = _evt$end$split2[0],
          time2 = _evt$end$split2[1];

      var _ref5 = date2 && date2.split('-') || [0, 0, 0],
          _ref6 = _slicedToArray(_ref5, 3),
          y2 = _ref6[0],
          m2 = _ref6[1],
          d2 = _ref6[2];

      var _ref7 = time2 && time2.split(':') || [0, 0],
          _ref8 = _slicedToArray(_ref7, 2),
          h2 = _ref8[0],
          min2 = _ref8[1];

      evt.endDate = new Date(y2, parse_int_default()(m2) - 1, d2, h2, min2);
      this.$emit(eventName, evt);
    }
  },
  created: function created() {
    // Init the array of events, then keep listening for changes in watcher.
    this.updateMutableEvents(this.events);

    if (this.selectedDate) {
      var _this$selectedDate$ma = this.selectedDate.match(/(\d{4})-(\d{2})-(\d{2})(?: (\d{2}):(\d{2}))?/),
          _this$selectedDate$ma2 = _slicedToArray(_this$selectedDate$ma, 6),
          y = _this$selectedDate$ma2[1],
          m = _this$selectedDate$ma2[2],
          d = _this$selectedDate$ma2[3],
          _this$selectedDate$ma3 = _this$selectedDate$ma2[4],
          h = _this$selectedDate$ma3 === void 0 ? 0 : _this$selectedDate$ma3,
          _this$selectedDate$ma4 = _this$selectedDate$ma2[5],
          min = _this$selectedDate$ma4 === void 0 ? 0 : _this$selectedDate$ma4;

      this.view.selectedDate = new Date(y, parse_int_default()(m) - 1, d, h, min);
    } else {
      this.view.selectedDate = this.now;
    }

    this.switchView(this.defaultView);
  },
  mounted: function mounted() {
    if (this.editableEvents) {
      var hasTouch = 'ontouchstart' in window;
      window.addEventListener(hasTouch ? 'touchmove' : 'mousemove', this.onMouseMove, {
        passive: false
      });
      window.addEventListener(hasTouch ? 'touchend' : 'mouseup', this.onMouseUp);
    }

    this.$emit('ready');
    this.ready = true;
  },
  beforeDestroy: function beforeDestroy() {
    var hasTouch = 'ontouchstart' in window;
    window.removeEventListener(hasTouch ? 'touchmove' : 'mousemove', this.onMouseMove, {
      passive: false
    });
    window.removeEventListener(hasTouch ? 'touchend' : 'mouseup', this.onMouseUp);
  },
  computed: {
    texts: function texts() {
      return __webpack_require__("4da1")("./".concat(this.locale, ".json"));
    },
    views: function views() {
      return {
        years: {
          label: this.texts.years,
          enabled: this.disableViews.indexOf('years') === -1
        },
        year: {
          label: this.texts.year,
          enabled: this.disableViews.indexOf('year') === -1
        },
        month: {
          label: this.texts.month,
          enabled: this.disableViews.indexOf('month') === -1
        },
        week: {
          label: this.texts.week,
          enabled: this.disableViews.indexOf('week') === -1
        },
        day: {
          label: this.texts.day,
          enabled: this.disableViews.indexOf('day') === -1
        }
      };
    },
    broaderView: function broaderView() {
      var _this4 = this;

      var views = keys_default()(this.views);

      views = views.slice(0, views.indexOf(this.view.id));
      views.reverse();
      return views.find(function (v) {
        return _this4.views[v].enabled;
      });
    },
    hasTimeColumn: function hasTimeColumn() {
      return this.time && ['week', 'day'].indexOf(this.view.id) > -1;
    },
    // For week & day views.
    timeCells: function timeCells() {
      var timeCells = [];

      for (var i = this.timeFrom, max = this.timeTo; i < max; i += this.timeStep) {
        timeCells.push({
          hours: Math.floor(i / 60),
          minutes: i % 60,
          label: date_utils_formatTime(i, this.timeFormat || (this['12Hour'] ? 'h:mm{am}' : 'HH:mm')),
          value: i
        });
      }

      return timeCells;
    },
    // Whether the current view has days splits.
    hasSplits: function hasSplits() {
      return !!this.splitDays.length && ['week', 'day'].indexOf(this.view.id) > -1;
    },
    weekDays: function weekDays() {
      return this.texts.weekDays.map(function (day) {
        return {
          label: day
        };
      });
    },
    months: function months() {
      return this.texts.months.map(function (month) {
        return {
          label: month
        };
      });
    },
    viewTitle: function viewTitle() {
      var title = '';
      var date = this.view.startDate;
      var year = date.getFullYear();
      var month = date.getMonth();

      switch (this.view.id) {
        case 'years':
          title = this.texts.years;
          break;

        case 'year':
          title = year;
          break;

        case 'month':
          title = "".concat(this.months[month].label, " ").concat(year);
          break;

        case 'week':
          var lastDayOfWeek = date.addDays(6);
          var formattedMonthYear = formatDate(date, this.xsmall ? 'mmm yyyy' : 'mmmm yyyy', this.texts); // If week is not ending in the same month it started in.

          if (lastDayOfWeek.getMonth() !== date.getMonth()) {
            var _formattedMonthYear$s = formattedMonthYear.split(' '),
                _formattedMonthYear$s2 = _slicedToArray(_formattedMonthYear$s, 2),
                m1 = _formattedMonthYear$s2[0],
                y1 = _formattedMonthYear$s2[1];

            var _formatDate$split = formatDate(lastDayOfWeek, this.xsmall ? 'mmm yyyy' : 'mmmm yyyy', this.texts).split(' '),
                _formatDate$split2 = _slicedToArray(_formatDate$split, 2),
                m2 = _formatDate$split2[0],
                y2 = _formatDate$split2[1];

            formattedMonthYear = y1 === y2 ? "".concat(m1, " - ").concat(m2, " ").concat(y1) : "".concat(m1, " ").concat(y1, " - ").concat(m2, " ").concat(y2);
          }

          title = "".concat(this.texts.week, " ").concat(date.getWeek(), " (").concat(formattedMonthYear, ")");
          break;

        case 'day':
          title = formatDate(date, this.texts.dateFormat, this.texts);
          break;
      }

      return title;
    },
    viewHeadings: function viewHeadings() {
      var _this5 = this;

      var headings = [];

      switch (this.view.id) {
        case 'month':
        case 'week':
          var todayFound = false;
          headings = this.weekDays.slice(0, this.hideWeekends ? 5 : 7).map(function (cell, i) {
            var date = _this5.view.startDate.addDays(i); // Only for week view.


            var isToday = _this5.view.id === 'week' && !todayFound && isDateToday(date) && !todayFound++;
            return _objectSpread({
              label1: _this5.locale === 'zh-cn' ? cell.label.substr(0, 2) : cell.label[0],
              label2: _this5.locale === 'zh-cn' ? cell.label.substr(2) : cell.label.substr(1, 2),
              label3: _this5.locale === 'zh-cn' ? '' : cell.label.substr(3)
            }, _this5.view.id === 'week' ? {
              label4: date.getDate()
            } : {}, {}, _this5.view.id === 'week' ? {
              today: isToday
            } : {}, {
              class: {
                today: isToday // Doesn't need condition cz if class object is false it doesn't show up.

              }
            });
          });
          break;
      }

      return headings;
    },
    viewCells: function viewCells() {
      var _this6 = this;

      var cells = [];
      var fromYear = null;
      var todayFound = false;

      switch (this.view.id) {
        case 'years':
          fromYear = this.view.startDate.getFullYear();
          cells = Array.apply(null, Array(25)).map(function (cell, i) {
            return {
              content: fromYear + i,
              date: new Date(fromYear + i, 0, 1),
              class: {
                current: fromYear + i === _this6.now.getFullYear(),
                selected: _this6.view.selectedDate && fromYear + i === _this6.view.selectedDate.getFullYear()
              }
            };
          });
          break;

        case 'year':
          fromYear = this.view.startDate.getFullYear();
          cells = Array.apply(null, Array(12)).map(function (cell, i) {
            return {
              content: _this6.xsmall ? _this6.months[i].label.substr(0, 3) : _this6.months[i].label,
              date: new Date(fromYear, i, 1),
              class: {
                current: i === _this6.now.getMonth() && fromYear === _this6.now.getFullYear(),
                selected: i === _this6.view.selectedDate.getMonth() && fromYear === _this6.view.selectedDate.getFullYear()
              }
            };
          });
          break;

        case 'month':
          var month = this.view.startDate.getMonth();
          var year = this.view.startDate.getFullYear();
          var days = getDaysInMonth(month, year);
          var firstOfMonthDayOfWeek = days[0].getDay();
          var selectedDateAtMidnight = new Date(this.view.selectedDate.getTime());
          selectedDateAtMidnight.setHours(0, 0, 0, 0);
          todayFound = false;
          var nextMonthDays = 0; // If the first day of the month is not a Monday, prepend missing days to the days array.

          if (days[0].getDay() !== 1) {
            var d = getPreviousMonday(days[0]);
            var prevWeek = [];

            for (var i = 0; i < 7; i++) {
              prevWeek.push(new Date(d));
              d.setDate(d.getDate() + 1);
              if (d.getDay() === firstOfMonthDayOfWeek) break;
            }

            days.unshift.apply(days, prevWeek);
          } // Create 42 cells (6 rows x 7 days) and populate them with days.


          cells = Array.apply(null, Array(42)).map(function (cell, i) {
            var cellDate = days[i] || new Date(year, month + 1, ++nextMonthDays); // To increase performance skip checking isToday if today already found.

            var isToday = !todayFound && cellDate && cellDate.getDate() === _this6.now.getDate() && cellDate.getMonth() === _this6.now.getMonth() && cellDate.getFullYear() === _this6.now.getFullYear() && !todayFound++;
            var formattedDate = formatDate(cellDate, 'yyyy-mm-dd', _this6.texts);
            return {
              content: cellDate.getDate(),
              date: cellDate,
              formattedDate: formattedDate,
              today: isToday,
              class: {
                today: isToday,
                'out-of-scope': cellDate.getMonth() !== month,
                selected: _this6.view.selectedDate && cellDate.getTime() === selectedDateAtMidnight.getTime()
              }
            };
          });

          if (this.hideWeekends) {
            cells = cells.filter(function (cell) {
              return cell.date.getDay() > 0 && cell.date.getDay() < 6;
            });
          }

          break;

        case 'week':
          todayFound = false;
          var firstDayOfWeek = this.view.startDate;
          cells = this.weekDays.slice(0, this.hideWeekends ? 5 : 7).map(function (cell, i) {
            var date = firstDayOfWeek.addDays(i);
            var formattedDate = formatDate(date, 'yyyy-mm-dd', _this6.texts);
            var isToday = !todayFound && isDateToday(date) && !todayFound++;
            return {
              date: date,
              formattedDate: formattedDate,
              today: isToday,
              class: {
                today: isToday,
                selected: _this6.view.selectedDate && firstDayOfWeek.addDays(i).getTime() === _this6.view.selectedDate.getTime()
              }
            };
          });
          break;

        case 'day':
          var formattedDate = formatDate(this.view.startDate, 'yyyy-mm-dd', this.texts);
          var isToday = isDateToday(this.view.startDate);
          cells = [{
            date: this.view.startDate,
            formattedDate: formattedDate,
            today: isToday,
            class: {
              today: isToday,
              selected: this.view.selectedDate && this.view.startDate.getTime() === this.view.selectedDate.getTime()
            }
          }];
          break;
      }

      return cells;
    },
    weekdayCellStyles: function weekdayCellStyles() {
      return {
        minWidth: "".concat(this.minCellWidth, "px") || false
      };
    },
    cssClasses: function cssClasses() {
      var _ref9;

      return _ref9 = {}, _defineProperty(_ref9, "vuecal--".concat(this.view.id, "-view"), true), _defineProperty(_ref9, "vuecal--".concat(this.locale), this.locale), _defineProperty(_ref9, 'vuecal--no-time', !this.time), _defineProperty(_ref9, 'vuecal--view-with-time', this.hasTimeColumn), _defineProperty(_ref9, 'vuecal--time-12-hour', this['12Hour']), _defineProperty(_ref9, 'vuecal--click-to-navigate', this.clickToNavigate), _defineProperty(_ref9, 'vuecal--hide-weekends', this.hideWeekends), _defineProperty(_ref9, 'vuecal--split-days', this.splitDays.length), _defineProperty(_ref9, 'vuecal--overflow-x', this.minCellWidth), _defineProperty(_ref9, 'vuecal--small', this.small), _defineProperty(_ref9, 'vuecal--xsmall', this.xsmall), _defineProperty(_ref9, 'vuecal--no-event-overlaps', this.noEventOverlaps), _ref9;
    }
  },
  watch: {
    events: function events(_events, oldEvents) {
      this.updateMutableEvents(_events);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vue-cal/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_vue_calvue_type_script_lang_js_ = (vue_calvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/vue-cal/index.vue?vue&type=style&index=0&lang=scss&
var vue_calvue_type_style_index_0_lang_scss_ = __webpack_require__("17ac");

// CONCATENATED MODULE: ./src/components/vue-cal/index.vue






/* normalize component */

var vue_cal_component = normalizeComponent(
  components_vue_calvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

vue_cal_component.options.__file = "index.vue"
/* harmony default export */ var vue_cal = (vue_cal_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (vue_cal);



/***/ }),

/***/ "fde4":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("bf90");
var $Object = __webpack_require__("584a").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=vuecal.umd.js.map