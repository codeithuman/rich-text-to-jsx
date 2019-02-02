/* eslint no-use-before-define: 0 */
Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex.default : ex;
}

const React = require('react');

const React__default = _interopDefault(React);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (let i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    let ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(sym => Object.getOwnPropertyDescriptor(source, sym).enumerable)
      );
    }

    ownKeys.forEach(key => {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) {
    return {};
  }
  const target = {};
  const sourceKeys = Object.keys(source);
  let key;
  let i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) {
      continue;
    }
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) {
    return {};
  }

  const target = _objectWithoutPropertiesLoose(source, excluded);

  let key;
  let i;

  if (Object.getOwnPropertySymbols) {
    const sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) {
        continue;
      }
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) {
        continue;
      }
      target[key] = source[key];
    }
  }

  return target;
}

function unwrapExports(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default')
    ? x.default
    : x;
}

function createCommonjsModule(fn, module) {
  return (module = { exports: {} }), fn(module, module.exports), module.exports;
}

const richTextTypes_es5 = createCommonjsModule((module, exports) => {
  Object.defineProperty(exports, '__esModule', { value: true });

  function createCommonjsModule$$1(fn, module) {
    return (
      (module = { exports: {} }), fn(module, module.exports), module.exports
    );
  }

const _global = createCommonjsModule$$1((module) => {
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
let global = module.exports = typeof window !== 'undefined' && window.Math == Math
        ? window
        : typeof self != 'undefined' && self.Math == Math
        ? self
        : // eslint-disable-next-line no-new-func
          Function('return this')());
    if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  });

let _core = createCommonjsModule$$1((module) => {
let core = module.exports = { version: '2.6.0' };
    if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  });
const _core_1 = _core.version;

let _isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

const _anObject = function (it) {
    if (!_isObject(it)) {throw TypeError(it + ' is not an object!');}
    return it;
  };

const _fails = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
let _descriptors = !_fails(() => Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7);

let document = _global.document;
  // typeof document.createElement is 'object' in old IE
let is = _isObject(document) && _isObject(document.createElement);
const _domCreate = function (it) {
    return is ? document.createElement(it) : {};
  };

const _ie8DomDefine = !_descriptors && !_fails(() => Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7);

  // 7.1.1 ToPrimitive(input [, PreferredType])

  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
let _toPrimitive = function (it, S) {
    if (!_isObject(it)) {return it;}
    let fn;
    var val;
    if (
      S &&
      typeof (fn = it.toString) === 'function' &&
      !_isObject((val = fn.call(it)))
    )
      {return val;}
    if (
      typeof (fn = it.valueOf) === 'function' &&
      !_isObject((val = fn.call(it)))
    )
      {return val;}
    if (
      !S &&
      typeof (fn = it.toString) === 'function' &&
      !_isObject((val = fn.call(it)))
    )
      {return val;}
    throw TypeError("Can't convert object to primitive value");
  };

const dP = Object.defineProperty;

let f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
        _anObject(O);
        P = _toPrimitive(P, true);
        _anObject(Attributes);
        if (_ie8DomDefine)
          {try {
            return dP(O, P, Attributes);
          } catch (e) {
            /* empty */
          }}
        if ('get' in Attributes || 'set' in Attributes)
          {throw TypeError('Accessors not supported!');}
        if ('value' in Attributes) {O[P] = Attributes.value;}
        return O;
      };

const _objectDp = {
    f
  };

const _propertyDesc = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value
    };
  };

const _hide = _descriptors ? function (object, key, value) {
        return _objectDp.f(object, key, _propertyDesc(1, value));
      }
    : function(object, key, value) {
        object[key] = value;
        return object;
      };

const hasOwnProperty = {}.hasOwnProperty;
const _has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  let id = 0;
const px = Math.random();
const _uid = function (key) {
    return 'Symbol('.concat(
      key === undefined ? '' : key,
      ')_',
      (++id + px).toString(36)
    );
  };

const _redefine = createCommonjsModule$$1((module) => {
let SRC = _uid('src');
let TO_STRING = 'toString';
let $toString = Function[TO_STRING];
let TPL = (`${  $toString}`).split(TO_STRING);

    _core.inspectSource = function(it) {
      return $toString.call(it);
    };

    (module.exports = function(O, key, val, safe) {
  let isFunction = typeof val === 'function';
      if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
      if (O[key] === val) return;
      if (isFunction)
        _has(val, SRC) ||
          _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
      if (O === _global) {
        O[key] = val;
      } else if (!safe) {
        delete O[key];
        _hide(O, key, val);
      } else if (O[key]) {
        O[key] = val;
      } else {
        _hide(O, key, val);
      }
      // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    })(Function.prototype, TO_STRING, function toString() {
      return (typeof this == 'function' && this[SRC]) || $toString.call(this);
    });
  });

let _aFunction = function (it) {
    if (typeof it !== 'function') {throw TypeError(it + ' is not a function!');}
    return it;
  };

  // optional / simple context binding

const _ctx = function (fn, that, length) {
    _aFunction(fn);
    if (that === undefined) {return fn;}
    switch (length) {
      case 1:
        return function(a) {
          return fn.call(that, a);
        };
      case 2:
        return function(a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function(a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function(/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

const PROTOTYPE = 'prototype';

  var $export = function(type, name, source) {
  const IS_FORCED = type & $export.F;
    let IS_GLOBAL = type & $export.G;
    let IS_STATIC = type & $export.S;
    let IS_PROTO = type & $export.P;
    let IS_BIND = type & $export.B;
    let target = IS_GLOBAL
      ? _global
      : IS_STATIC
      ? _global[name] || (_global[name] = {})
      : (_global[name] || {})[PROTOTYPE];
    let exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
    let expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
    let key;
    var own;
    var out;
    var exp;
    if (IS_GLOBAL) {source = name;}
    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      // export native or passed
      out = (own ? target : source)[key];
      // bind timers to global for call from export context
      exp =
        IS_BIND && own
          ? _ctx(out, _global)
          : IS_PROTO && typeof out === 'function'
          ? _ctx(Function.call, out)
          : out;
      // extend global
      if (target) {_redefine(target, key, out, type & $export.U);}
      // export
      if (exports[key] != out) {_hide(exports, key, exp);}
      if (IS_PROTO && expProto[key] != out) {expProto[key] = out;}
    }
  };
  _global.core = _core;
  // type bitmap
  $export.F = 1; // forced
  $export.G = 2; // global
  $export.S = 4; // static
  $export.P = 8; // proto
  $export.B = 16; // bind
  $export.W = 32; // wrap
  $export.U = 64; // safe
  $export.R = 128; // real proto method for `library`
let _export = $export;

let toString = {}.toString;

let _cof = function (it) {
    return toString.call(it).slice(8, -1);
  };

  // fallback for non-array-like ES3 and non-enumerable old V8 strings

  // eslint-disable-next-line no-prototype-builtins
let _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
        return _cof(it) == 'String' ? it.split('') : Object(it);
      };

  // 7.2.1 RequireObjectCoercible(argument)
let _defined = function (it) {
    if (it == undefined) {throw TypeError("Can't call method on  " + it);}
    return it;
  };

  // to indexed object, toObject with fallback for non-array-like ES3 strings

  let _toIobject = function(it) {
    return _iobject(_defined(it));
  };

  // 7.1.4 ToInteger
let ceil = Math.ceil;
const floor = Math.floor;
const _toInteger = function (it) {
    return isNaN((it = +it)) ? 0 : (it > 0 ? floor : ceil)(it);
  };

  // 7.1.15 ToLength

const min = Math.min;
const _toLength = function (it) {
    return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

const max = Math.max;
const min$1 = Math.min;
const _toAbsoluteIndex = function (index, length) {
    index = _toInteger(index);
    return index < 0 ? max(index + length, 0) : min$1(index, length);
  };

  // false -> Array#indexOf
  // true  -> Array#includes

  let _arrayIncludes = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
      let O = _toIobject($this);
      let length = _toLength(O.length);
      let index = _toAbsoluteIndex(fromIndex, length);
      let value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el)
        {while (length > index) {
          value = O[index++];
          // eslint-disable-next-line no-self-compare
          if (value != value) return true;
          // Array#indexOf ignores holes, Array#includes - not
        }}
      else
        {for (; length > index; index++)
          if (IS_INCLUDES || index in O) {
            if (O[index] === el) return IS_INCLUDES || index || 0;
          }}
      return !IS_INCLUDES && -1;
    };
  };

const _shared = createCommonjsModule$$1((module) => {
let SHARED = '__core-js_shared__';
let store = _global[SHARED] || (_global[SHARED] = {});

    (module.exports = function(key, value) {
      return store[key] || (store[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: _core.version,
      mode: 'global',
      copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
    });
  });

let shared = _shared('keys');

let _sharedKey = function (key) {
    return shared[key] || (shared[key] = _uid(key));
  };

const arrayIndexOf = _arrayIncludes(false);
const IE_PROTO = _sharedKey('IE_PROTO');

let _objectKeysInternal = function (object, names) {
    let O = _toIobject(object);
    let i = 0;
    let result = [];
  let key;
    for (key in O) {if (key != IE_PROTO) _has(O, key) && result.push(key);}
    // Don't enum bug & hidden keys
    while (names.length > i)
      {if (_has(O, (key = names[i++]))) {
        ~arrayIndexOf(result, key) || result.push(key);
      }}
    return result;
  };

  // IE 8- don't enum bug keys
let _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

  // 19.1.2.14 / 15.2.3.14 Object.keys(O)

  let _objectKeys =
    Object.keys ||
    function keys(O) {
      return _objectKeysInternal(O, _enumBugKeys);
    };

const f$1 = {}.propertyIsEnumerable;

let _objectPie = {
    f: f$1
  };

const isEnum = _objectPie.f;
const _objectToArray = function (isEntries) {
    return function(it) {
    const O = _toIobject(it);
      let keys = _objectKeys(O);
      let length = keys.length;
      let i = 0;
      let result = [];
      let key;
      while (length > i)
        {if (isEnum.call(O, (key = keys[i++]))) {
          result.push(isEntries ? [key, O[key]] : O[key]);
        }}
      return result;
    };
  };

  // https://github.com/tc39/proposal-object-values-entries

const $values = _objectToArray(false);

  _export(_export.S, 'Object', {
    values: function values(it) {
      return $values(it);
    }
  });

const values = _core.Object.values;

let _wks = createCommonjsModule$$1((module) => {
let store = _shared('wks');

let Symbol = _global.Symbol;
let USE_SYMBOL = typeof Symbol === 'function';

let $exports = module.exports = function (name) {
      return (
        store[name] ||
        (store[name] =
          (USE_SYMBOL && Symbol[name]) ||
          (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name))
      );
    });

    $exports.store = store;
  });

  // 22.1.3.31 Array.prototype[@@unscopables]
let UNSCOPABLES = _wks('unscopables');
const ArrayProto = Array.prototype;
  if (ArrayProto[UNSCOPABLES] == undefined) {_hide(ArrayProto, UNSCOPABLES, {});}
const _addToUnscopables = function (key) {
    ArrayProto[UNSCOPABLES][key] = true;
  };

  // https://github.com/tc39/Array.prototype.includes

const $includes = _arrayIncludes(true);

  _export(_export.P, 'Array', {
    includes: function includes(el /* , fromIndex = 0 */) {
      return $includes(
        this,
        el,
        arguments.length > 1 ? arguments[1] : undefined
      );
    }
  });

  _addToUnscopables('includes');

const includes = _core.Array.includes;

  /**
   * Map of all Contentful block types. Blocks contain inline or block nodes.
   */
let BLOCKS;
  (function(BLOCKS) {
    BLOCKS.DOCUMENT = 'document';
    BLOCKS.PARAGRAPH = 'paragraph';
    BLOCKS.HEADING_1 = 'heading-1';
    BLOCKS.HEADING_2 = 'heading-2';
    BLOCKS.HEADING_3 = 'heading-3';
    BLOCKS.HEADING_4 = 'heading-4';
    BLOCKS.HEADING_5 = 'heading-5';
    BLOCKS.HEADING_6 = 'heading-6';
    BLOCKS.OL_LIST = 'ordered-list';
    BLOCKS.UL_LIST = 'unordered-list';
    BLOCKS.LIST_ITEM = 'list-item';
    BLOCKS.HR = 'hr';
    BLOCKS.QUOTE = 'blockquote';
    BLOCKS.EMBEDDED_ENTRY = 'embedded-entry-block';
    BLOCKS.EMBEDDED_ASSET = 'embedded-asset-block';
  })(BLOCKS || (BLOCKS = {}));
let BLOCKS$1 = BLOCKS;

  /**
   * Map of all Contentful inline types. Inline contain inline or text nodes.
   */
let INLINES;
  (function(INLINES) {
    INLINES.HYPERLINK = 'hyperlink';
    INLINES.ENTRY_HYPERLINK = 'entry-hyperlink';
    INLINES.ASSET_HYPERLINK = 'asset-hyperlink';
    INLINES.EMBEDDED_ENTRY = 'embedded-entry-inline';
  })(INLINES || (INLINES = {}));
let INLINES$1 = INLINES;

  /**
   * Map of all Contentful marks.
   */
let marks = {
    BOLD: 'bold',
    ITALIC: 'italic',
    UNDERLINE: 'underline',
    CODE: 'code'
  };

  let _a;
  /**
   * Array of all top level block types.
   * Only these block types can be the direct children of the document.
   */
let TOP_LEVEL_BLOCKS = [
    BLOCKS$1.PARAGRAPH,
    BLOCKS$1.HEADING_1,
    BLOCKS$1.HEADING_2,
    BLOCKS$1.HEADING_3,
    BLOCKS$1.HEADING_4,
    BLOCKS$1.HEADING_5,
    BLOCKS$1.HEADING_6,
    BLOCKS$1.OL_LIST,
    BLOCKS$1.UL_LIST,
    BLOCKS$1.HR,
    BLOCKS$1.QUOTE,
    BLOCKS$1.EMBEDDED_ENTRY,
    BLOCKS$1.EMBEDDED_ASSET
  ];
  /**
   * Array of all void block types
   */
let VOID_BLOCKS = [BLOCKS$1.HR, BLOCKS$1.EMBEDDED_ENTRY, BLOCKS$1.EMBEDDED_ASSET];
  /**
   * Dictionary of all container block types, and the set block types they accept as children.
   */
let CONTAINERS = (_a = {},
  (_a[BLOCKS$1.OL_LIST] = [BLOCKS$1.LIST_ITEM]),
  (_a[BLOCKS$1.UL_LIST] = [BLOCKS$1.LIST_ITEM]),
  (_a[BLOCKS$1.LIST_ITEM] = TOP_LEVEL_BLOCKS.slice()),
  (_a[BLOCKS$1.QUOTE] = [BLOCKS$1.PARAGRAPH]),
  _a);

  /**
   * Checks if the node is an instance of Inline.
   */
  function isInline(node) {
    return Object.values(INLINES$1).includes(node.nodeType);
  }
  /**
   * Checks if the node is an instance of Block.
   */
  function isBlock(node) {
    return Object.values(BLOCKS$1).includes(node.nodeType);
  }
  /**
   * Checks if the node is an instance of Text.
   */
  function isText(node) {
    return node.nodeType === 'text';
  }

let helpers = /* #__PURE__ */Object.freeze({
    isInline,
    isBlock,
    isText
  });

  exports.helpers = helpers;
  exports.BLOCKS = BLOCKS$1;
  exports.INLINES = INLINES$1;
  exports.MARKS = marks;
  exports.TOP_LEVEL_BLOCKS = TOP_LEVEL_BLOCKS;
  exports.VOID_BLOCKS = VOID_BLOCKS;
  exports.CONTAINERS = CONTAINERS;
});

unwrapExports(richTextTypes_es5);
const richTextTypes_es5_1 = richTextTypes_es5.helpers;
const richTextTypes_es5_2 = richTextTypes_es5.BLOCKS;
const richTextTypes_es5_3 = richTextTypes_es5.INLINES;
const richTextTypes_es5_4 = richTextTypes_es5.MARKS;
const richTextTypes_es5_5 = richTextTypes_es5.TOP_LEVEL_BLOCKS;
const richTextTypes_es5_6 = richTextTypes_es5.VOID_BLOCKS;
const richTextTypes_es5_7 = richTextTypes_es5.CONTAINERS;

function isEmpty(obj) {
  if (!obj) {
    return true;
  }

  const isArray = obj instanceof Array;

  if (isArray) {
    return obj.length <= 0;
  }

  const isObject = obj.constructor === Object;

  if (isObject) {
    return Object.keys(obj).length === 0;
  }

  return false;
}

function cx() {
  for (
    var _len = arguments.length, args = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    args[_key] = arguments[_key];
  }

  const truthyClassNames = Array.prototype.slice.call(args).filter(Boolean);

  if (isEmpty(truthyClassNames)) {
    return undefined;
  }

  return truthyClassNames.join(' ');
}

function get(obj, path, defaultValue) {
  if (!obj || !path) {
    return obj;
  } // Get the path as an array

  const segments = typeof path !== 'string' ? path : stringToSegments(path); // Cache the current object

  let current = obj; // For each item in the path, dig into the object

  for (let i = 0; i < segments.length; i += 1) {
    // If the item isn't found, return the default (or undefined)
    if (!current[segments[i]]) {
      return defaultValue;
    } // Otherwise, update the current value

    current = current[segments[i]];
  }

  return current;
}

function stringToSegments(path) {
  // Split to an array from dot notation
  return path.split('.').reduce((allSegments, item) => {
    // Split to an array from bracket notation
    item.split(/\[([^}]+)\]/g).forEach(key => {
      // Push to the new array
      if (key.length > 0) {
        allSegments.push(key);
      }
    });
    return allSegments;
  }, []);
}

/**
 * Default element when the node type is unknown.
 * Renders a prominent warning in development.
 */

function UnknownElement(props) {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.debug('Node type is undefined', props);
    return React__default.createElement(
      React.Fragment,
      null,
      React__default.createElement(
        'span',
        {
          style: {
            color: 'white',
            backgroundColor: 'red'
          }
        },
        'Node type is undefined'
      ),
      props.children
    );
  }

  return props.children || null;
}

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  const PropTypes = require('prop-types');

  UnknownElement.propTypes = {
    /**
     * The element children.
     */
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
  };
}

/**
 * Default fallback element for block level nodes.
 * Renders a prominent warning in development.
 */

function BlockElement(props) {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.debug('Unknown block  node type', props);
    return React__default.createElement(
      React.Fragment,
      null,
      React__default.createElement(
        'span',
        {
          style: {
            color: 'white',
            backgroundColor: 'red'
          }
        },
        'Unknown block node type.'
      ),
      props.children
    );
  }

  return props.children || null;
}

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  const PropTypes$1 = require('prop-types');

  BlockElement.propTypes = {
    /**
     * The element children.
     */
    children: PropTypes$1.oneOfType([PropTypes$1.element, PropTypes$1.array])
  };
}

/**
 * Default fallback element for inline nodes.
 * Renders a prominent warning in development.
 */

function InlineElement(props) {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.debug('Unknown inline node type', props);
    return React__default.createElement(
      React.Fragment,
      null,
      React__default.createElement(
        'span',
        {
          style: {
            color: 'white',
            backgroundColor: 'red'
          }
        },
        'Unknown inline node type'
      ),
      props.children
    );
  }

  return props.children || null;
}

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  const PropTypes$2 = require('prop-types');

  InlineElement.propTypes = {
    /**
     * The element children.
     */
    children: PropTypes$2.oneOfType([PropTypes$2.element, PropTypes$2.array])
  };
}

let _tagMap;
const defaultOptions = {
  overrides: {},
  createElement: React__default.createElement
};
const tagMap = ((_tagMap = {}),
_defineProperty(_tagMap, richTextTypes_es5_2.HEADING_1, 'h1'),
_defineProperty(_tagMap, richTextTypes_es5_2.HEADING_2, 'h2'),
_defineProperty(_tagMap, richTextTypes_es5_2.HEADING_3, 'h3'),
_defineProperty(_tagMap, richTextTypes_es5_2.HEADING_4, 'h4'),
_defineProperty(_tagMap, richTextTypes_es5_2.HEADING_5, 'h5'),
_defineProperty(_tagMap, richTextTypes_es5_2.HEADING_6, 'h6'),
_defineProperty(_tagMap, richTextTypes_es5_2.PARAGRAPH, 'p'),
_defineProperty(_tagMap, richTextTypes_es5_2.UL_LIST, 'ul'),
_defineProperty(_tagMap, richTextTypes_es5_2.OL_LIST, 'ol'),
_defineProperty(_tagMap, richTextTypes_es5_2.LIST_ITEM, 'li'),
_defineProperty(_tagMap, richTextTypes_es5_2.QUOTE, 'blockquote'),
_defineProperty(_tagMap, richTextTypes_es5_2.HR, 'hr'),
_defineProperty(
  _tagMap,
  richTextTypes_es5_2.EMBEDDED_ASSET,
  'embedded-asset-block'
),
_defineProperty(_tagMap, richTextTypes_es5_3.HYPERLINK, 'a'),
_defineProperty(_tagMap, richTextTypes_es5_4.BOLD, 'strong'),
_defineProperty(_tagMap, richTextTypes_es5_4.ITALIC, 'em'),
_defineProperty(_tagMap, richTextTypes_es5_4.UNDERLINE, 'u'),
_defineProperty(_tagMap, richTextTypes_es5_4.CODE, 'code'),
_tagMap);

function isCustom(node) {
  return !tagMap[node.nodeType];
}

function richTextToJsx(richText) {
  const options =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!richText) {
    return null;
  }

  return nodeListToJsx(
    richText.content,
    _objectSpread({}, defaultOptions, options)
  );
}
function nodeListToJsx(nodes, options) {
  if (isEmpty(nodes)) {
    return null;
  }

  return nodes.map((node, key) => nodeToJsx(node, options, key));
}
function nodeToJsx() {
  const node =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const options =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const key = arguments.length > 2 ? arguments[2] : undefined;
  const nodeType = node.nodeType;

  if (!nodeType) {
    return unknownNodeToJsx(node, options, key);
  }

  if (richTextTypes_es5_1.isText(node)) {
    return textNodeToJsx(node, options, key);
  }

  if (isCustom(node)) {
    return customNodeToJsx(node, options, key);
  }

  return parentNodeToJsx(node, options, key);
}
function unknownNodeToJsx(node, options, key) {
  const data = node.data;

  let content = node.content;
  const createElement = options.createElement;

  const props = _objectSpread({}, data.target, {
    key
  });

  const children = isEmpty(content)
    ? undefined
    : nodeListToJsx(content, options);
  return createElement(UnknownElement, props, children);
}
function textNodeToJsx(node, options, key) {
  const _node$data = node.data;

  let data = _node$data === void 0 ? {} : _node$data;

  let value = node.value;

  let marks = node.marks;
  const overrides = options.overrides;

  let createElement = options.createElement;

  if (isEmpty(marks)) {
    return value;
  }

  return marks.reduce((children, mark, markKey) => {
    const element = getElement(mark.type, overrides);

    if (!element) {
      return children;
    }

    const props = getProps(
      mark.type,
      overrides,
      _objectSpread({}, data, {
        key: ''.concat(key).concat(markKey)
      })
    );
    return createElement(element, props, children);
  }, value);
}
function customNodeToJsx(node, options, key) {
  const data = node.data;

  let content = node.content;

  let nodeType = node.nodeType;
  const overrides = options.overrides;

  let createElement = options.createElement;
  const contentType = get(data, 'target.contentType') || nodeType;

  if (!contentType) {
    return unknownNodeToJsx(node, options, key);
  }

  const elementOverrides = overrides[contentType];
  const DefaultElement = richTextTypes_es5_1.isBlock(node)
    ? BlockElement
    : InlineElement;
  const element = getElement(nodeType, elementOverrides) || DefaultElement;
  const props = getProps(
    nodeType,
    elementOverrides,
    _objectSpread({}, data.target, {
      key
    })
  );
  const children = isEmpty(content)
    ? undefined
    : nodeListToJsx(content, options);
  return createElement(element, props, children);
}
function parentNodeToJsx(node, options, key) {
  const data = node.data;

  let content = node.content;

  let nodeType = node.nodeType;
  const overrides = options.overrides;

  let createElement = options.createElement;
  const element = getElement(nodeType, overrides) || BlockElement;

  const href = data.uri;

  let rest = _objectWithoutProperties(data, ['uri']);

  const props = getProps(
    nodeType,
    overrides,
    _objectSpread({}, rest, {
      href,
      key
    })
  );
  const children = isEmpty(content)
    ? undefined
    : nodeListToJsx(content, options);
  return createElement(element, props, children);
}
function getElement(type, overrides) {
  const override = getOverride(type, overrides);

  if (override) {
    return typeof override === 'function' ? override : override.component;
  }

  return tagMap[type];
}
function getProps(type, overrides) {
  const data =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const override = getOverride(type, overrides);

  if (isEmpty(override) || typeof override === 'function') {
    return data;
  }

  const overrideProps = override.props || {};
  return _objectSpread({}, overrideProps, data, {
    className: cx(data.className, overrideProps.className)
  });
}
function getOverride(type) {
  const overrides =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const tag = tagMap[type];
  return overrides[tag] || overrides[type];
}

/**
 * Parse and render Contentful rich text to JSX.
 */

const RichText = function RichText(_ref) {
  const richText = _ref.richText;

  let options = _objectWithoutProperties(_ref, ['richText']);

  return richTextToJsx(richText, options);
};

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  const PropTypes$3 = require('prop-types');

  RichText.propTypes = {
    /**
     * The Contentful rich text AST to be parsed and rendered.
     */
    richText: PropTypes$3.object,

    /**
     * Map block types to React components, e.g. `p` -> `<Text />`
     * The React component is passed all HTML attributes as props.
     * By default, block types are mapped to the corresponding HTML tags.
     */
    blocks: PropTypes$3.object,

    /**
     * Override an HTML tag with a React component, e.g. `a` -> `<Link />`
     * The React component is passed all HTML attributes as props.
     */
    inlines: PropTypes$3.object,

    /**
     * A function create and return a new React element.
     * Defaults to React.createElement()
     */
    createElement: PropTypes$3.func
  };
}

exports.richTextToJsx = richTextToJsx;
exports.default = RichText;
