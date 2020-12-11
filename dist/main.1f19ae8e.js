// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
var string = "/*\u4E0B\u9762\u5C06\u753B\u51FA\u4E00\u4E2A\u54C6\u5566A\u68A6*/\n    .cajaovalo {\n        position: absolute;\n        top: 100px;\n        width: 100px;\n        height: 5px;\n        background: transparent;\n        margin: 0 auto;\n        position: relative;\n        margin-bottom: 10px\n    }\n    .ovalo {\n        width: 100px;\n        height: 5px;\n        margin: 0 auto;\n        background-color: gray;\n        border-radius: 5px;\n        border: 2px solid gray;\n        z-index: 100;\n        opacity: 0.6; \n        position: absolute;\n        top: 5px;\n        animation:rotar .1s infinite linear;\n    }\n    .semi-circulo {\n        width: 20px; \n        height: 10px; \n        display: block;\n        border: 2px solid #555; \n        background: #BD8D22;\n        border-radius: 100px 100px 0 0;\n        position: absolute; \n        right: 0;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        margin: auto;\n        z-index: 2;\n    }\n    .palo {\n        width: 7px;\n        height: 30px;\n        z-index: 1;\n        background: #FCC136;\n        position: relative;\n        top: 7px;\n        border: 2px solid black;\n        margin: 0 auto;\n    }\n    .head{\n        position: absolute;\n        top: 120px;\n        left: 50%;\n        margin-left: -105px;\n        width: 210px;\n        height: 210px;\n        background-color: #3c9cc8;\n        border:2px solid black;\n        border-radius: 50%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        z-index: 10;\n    }\n    .head .circle{\n        width: 180px;\n        height: 180px;\n        border-radius: 50%;\n        background-color: #fff;\n        border:2px solid black;\n        z-index: 2;\n        position: relative;\n    }\n    .eye{\n        width: 50px;\n        height: 50px;\n        border:1px solid black;\n        background-color: #fff;\n        border-radius: 50%;\n        position: absolute;\n        top:2px;\n        left: 50%;\n        margin-left: -25px;\n        z-index: 3;\n    }\n    .eye.left{\n        transform: translateX(-24px);\n        position: relative;\n    }\n    .eye.right{\n        transform: translateX(24px);\n    }\n    .eye .eyeball{\n        overflow: hidden;\n    }\n    .eye .eyeball.left{\n        position: absolute;\n        top:16px;\n        right: 8px;\n        width: 12px;\n        height: 22px;\n        border:5px solid black;\n        border-top:8px solid black;\n        border-bottom:8px solid black;\n        border-radius: 10px;\n    }\n    .eye .eyeball.right{\n        position: absolute;\n        top:40px;\n        right: 8px;\n        width: 32px;\n        height: 24px;\n        border: 3px solid black;\n        border-radius: 50%;\n        border-color: black transparent transparent transparent;\n    }\n    .nose{\n        width: 40px;\n        height: 40px;\n        border-radius: 50%;\n        border:1px solid #000;\n        background-color: #B11635;\n        margin-left: 68px;\n        margin-top: -6px;\n    }\n    .nose .naris{\n        width: 12px;\n        height: 12px;\n        background-color: #fff;\n        margin: 6px 0 0 6px;\n        border-radius: 50% ;\n    }\n    .beard{\n        margin-top: -16px;\n    }\n    .bigotes {\n        z-index: 9999;\n        position: relative;\n        float: left;\n        display: inline-block;\n        top: -18px;\n        left: -2px;\n    }\n    .b1 {\n        width: 62px;\n        height: 2px;\n        background-color: black;\n        margin: 0 auto;\n        margin-bottom: 18px;\n        transform: rotate(25deg);\n    }\n    .b2 {\n        width: 62px;\n        height: 2px;\n        background-color: black;\n        margin: 0 auto;\n        margin-bottom: 10px;\n    }\n    .b3 {\n        width: 62px;\n        height: 2px;\n        background-color: black;\n        margin: 0 auto;\n        transform: rotate(-10deg);\n    }\n    .bigotes2 {\n        z-index: 9999;\n        position: relative;\n        float: right;\n        display: inline-block;\n        top: -18px;\n        right: -2px;\n    }\n    .b1_ {\n        width: 62px;\n        height: 2px;\n        background-color: black;\n        margin: 0 auto;\n        margin-bottom: 18px;\n        transform: rotate(-25deg);\n    }\n    .b2_ {\n        width: 62px;\n        height: 2px;\n        background-color: black;\n        margin: 0 auto;\n        margin-bottom: 10px;\n    }\n    .b3_ {\n        width: 62px;\n        height: 2px;\n        background-color: black;\n        margin: 0 auto;\n        transform: rotate(10deg);\n    }\n    .mouth{\n        width: 140px;\n        height: 80px;\n        margin: 16px 0 0 13px;\n        position: relative;\n    }\n    .reacangle{\n        position: absolute;\n        top: 0;\n        left: 50%;\n        margin-left: 2px;\n        height: 20px;\n        width: 4px;\n        background-color: #000;\n        position: relative;\n    }\n    .lip{\n        width: 136px;\n        height: 68px;\n        position: absolute;\n        top: 12px;\n        left: 50%;\n        margin-left: -63px;\n        background-color: #B11635;\n        border-radius: 0 0 70px 70px;\n        overflow: hidden;\n    }\n    .down {\n        position: relative;\n        width: 100px;\n        height: 70px;\n        margin: 0 auto;\n    }\n    .down::before, .down::after{\n        content: \"\";\n        display: block;\n        width: 50px;\n        height: 80px;\n        background: #CA2533; \n        border-radius: 50px 50px 0 0; \n        position: absolute; \n        top:30px ;\n        transform: rotate(45deg);\n        transform-origin: 100% 100%;\n    }\n    .down::after {\n        left: 50px; \n        transform: rotate(-45deg);\n        transform-origin:0 100% ; \n    }\n    .hand{\n        position: absolute;\n        top:250px;\n        left:50% ;\n        margin-left: -30px;\n        width: 60px;\n        height: 60px;\n        border:2px solid black;\n        background-color: #fff;\n        border-radius: 50%;\n        z-index:5;\n    }\n    .hand.left{\n        transform: translateX(-114px); \n    }\n    .hand.right{\n        transform: translateX(114px);    \n    }\n    .arm{\n        width: 110px;\n        height: 50px;\n        position: absolute;\n        top:270px;\n        left:50% ;\n        margin-left: -55px;\n        border:2px solid #000;\n        background-color: #3c9cc8;\n        border-radius: 100px /60px;\n        z-index: 4;\n    }\n    .arm.left{\n        transform: translateX(-90px) rotate(45deg);\n            \n    }\n    .arm.right{\n        transform: translateX(90px) rotate(-45deg);\n        \n    }\n    .body{\n        position: absolute;\n        top: 300px;\n        left: 50%;\n        margin-left: -90px;\n        width: 180px;\n        height: 100px;\n        z-index: 3;\n    }\n    .bufanda{\n        width: 100px;\n        height: 50px;\n        background-color:#B11635;\n        position: absolute;\n        left: 50%;\n        margin-left: -50px;\n        top:-10px;\n        border-radius: 100px / 50px;\n        z-index: 9;\n    }\n    .huevo{\n        width: 140px;\n        height: 200px;\n        position: absolute;\n        left: 50%;\n        margin-left: -70px;\n        top:-80px;\n        border: 2px solid black;\n        background-color:#3c9cc8 ;\n        border-radius: 180px / 200px;\n        z-index: -1;\n        position: relative;\n    }\n    .ovalocesta{\n        width: 100px;\n        height: 70px;\n        background-color:#fff ;\n        position: absolute;\n        bottom: 20px;\n        left: 50%;\n        margin-left: -50px;\n        border-radius: 100px / 70px;\n    }\n    .campana {\n        width: 40px;\n        height: 40px;\n        border: 2px solid black;\n        border-radius: 100%;\n        background-color: #F19629;\n        position: absolute; \n        right: 0;\n        top: -54px;\n        left: 0;\n        bottom: -60px;\n        margin: auto;\n        z-index: 10;\n    }\n    .bolanegra {\n        width: 8px;\n        height: 8px;\n        border-radius: 100%;\n        background-color:black;\n        position: absolute; \n        right: 0;\n        top: 8px;\n        left: 0;\n        bottom: 0;\n        margin: auto;\n    }\n    .palonegro {\n        width: 2px;\n        height: 15px;\n        background-color: black;\n        margin: 0 auto;\n        position: relative;\n        top: 18px;\n    }\n    .cesta {\n        width: 60px; \n        height: 30px; \n        border-radius:0 0 60px 60px ;\n        background: white;\n        border: 2px solid black;\n        position: absolute; \n        right: 0;\n        top: 0;\n        left: 0;\n        bottom: -20px;\n        margin: auto;\n        z-index: 2;\n    }\n    .foot{\n        position: absolute;\n        top:350px;\n        left:50% ;\n        margin-left: -30px;\n        width: 60px;\n        height: 100px;\n        border:2px solid black;\n        background-color: #fff;\n        border-radius: 50%;\n        border-radius: 50%;\n    }\n    .foot.left{\n        transform: translateX(-30px);     \n    }\n    .foot.right{\n        transform: translateX(30px);\n    }\n    /*\u8BA9\u54C6\u5566A\u68A6\u52A8\u8D77\u6765*/\n    @keyframes volar{\n        0%   {top:0px;}\n        25%  {top:0px;}\n        50%  {top:50px;}\n        75%  {top:50px;}\n        100% {top:0px;}\n    }\n    @keyframes rotar {\n        from {\n            transform: rotate3D(0, 1, 0, 0deg);\n        }\n        to {\n            transform: rotate3D(0, 1, 0, 360deg);\n        }\n    }\n    ";
var n = 1;
demo.innerText = string.substr(0, n);
demo2.innerHTML = string.substr(0, n);
console.log(n + ';' + string.substr(7, n));
var time = 100;

var run = function run() {
  n += 1;

  if (n > string.length) {
    window.clearInterval(timer);
    return;
  }

  console.log(n + ';' + string.substr(0, n));
  demo.innerText = string.substr(0, n);
  demo2.innerHTML = string.substr(0, n);
  demo.scrollTop = 9999;
};

var play = function play() {
  return setInterval(run, time);
};

var pause = function pause() {
  window.clearInterval(timer);
};

var slow = function slow() {
  pause();
  time = 100;
  timer = play();
};

var normal = function normal() {
  pause();
  time = 50;
  timer = play();
};

var fast = function fast() {
  pause();
  time = 0;
  timer = play();
};

var timer = play();
btnPause.onclick = pause;

btnPlay.onclick = function () {
  timer = play();
};

btnSlow.onclick = slow;
btnNormal.onclick = normal;
btnFast.onclick = fast;
},{}],"../../../../Users/87609/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53497" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../Users/87609/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map