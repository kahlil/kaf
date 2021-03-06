(function() {
  /*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
  'use strict';
  (function(a) {
    function b(a, b) {
      if ('function' === typeof window.CustomEvent) return new CustomEvent(a, b);
      var d = document.createEvent('CustomEvent');
      d.initCustomEvent(a, !!b.bubbles, !!b.cancelable, b.detail);
      return d;
    }
    function c(a) {
      if (n) return a.ownerDocument !== document ? a.ownerDocument : null;
      var b = a.__importDoc;
      if (!b && a.parentNode) {
        b = a.parentNode;
        if ('function' === typeof b.closest) b = b.closest('link[rel=import]');
        else for (; !k(b) && (b = b.parentNode); );
        a.__importDoc = b;
      }
      return b;
    }
    function d(a) {
      var b = document.querySelectorAll('link[rel=import]:not([import-dependency])'),
        d = b.length;
      d
        ? h(b, function(b) {
            return l(b, function() {
              0 === --d && a();
            });
          })
        : a();
    }
    function e(a) {
      function b() {
        'loading' !== document.readyState &&
          document.body &&
          (document.removeEventListener('readystatechange', b), a());
      }
      document.addEventListener('readystatechange', b);
      b();
    }
    function f(a) {
      e(function() {
        return d(function() {
          return a && a();
        });
      });
    }
    function l(a, b) {
      if (a.__loaded) b && b();
      else if (('script' === a.localName && !a.src) || ('style' === a.localName && !a.firstChild))
        (a.__loaded = !0), b && b();
      else {
        var d = function(c) {
          a.removeEventListener(c.type, d);
          a.__loaded = !0;
          b && b();
        };
        a.addEventListener('load', d);
        (H && 'style' === a.localName) || a.addEventListener('error', d);
      }
    }
    function k(a) {
      return a.nodeType === Node.ELEMENT_NODE && 'link' === a.localName && 'import' === a.rel;
    }
    function g() {
      var a = this;
      this.a = {};
      this.b = 0;
      this.g = new MutationObserver(function(b) {
        return a.L(b);
      });
      this.g.observe(document.head, { childList: !0, subtree: !0 });
      this.c(document);
    }
    function h(a, b, d) {
      var c = a ? a.length : 0,
        e = d ? -1 : 1;
      for (d = d ? c - 1 : 0; d < c && 0 <= d; d += e) b(a[d], d);
    }
    var n = 'import' in document.createElement('link'),
      I = null;
    !1 === 'currentScript' in document &&
      Object.defineProperty(document, 'currentScript', {
        get: function() {
          return I || ('complete' !== document.readyState ? document.scripts[document.scripts.length - 1] : null);
        },
        configurable: !0,
      });
    var ua = /(url\()([^)]*)(\))/g,
      va = /(@import[\s]+(?!url\())([^;]*)(;)/g,
      wa = /(<link[^>]*)(rel=['|"]?stylesheet['|"]?[^>]*>)/g,
      r = {
        J: function(a, b) {
          a.href && a.setAttribute('href', r.j(a.getAttribute('href'), b));
          a.src && a.setAttribute('src', r.j(a.getAttribute('src'), b));
          if ('style' === a.localName) {
            var d = r.D(a.textContent, b, ua);
            a.textContent = r.D(d, b, va);
          }
        },
        D: function(a, b, d) {
          return a.replace(d, function(a, d, c, e) {
            a = c.replace(/["']/g, '');
            b && (a = r.j(a, b));
            return d + "'" + a + "'" + e;
          });
        },
        j: function(a, b) {
          if (void 0 === r.l) {
            r.l = !1;
            try {
              var d = new URL('b', 'http://a');
              d.pathname = 'c%20d';
              r.l = 'http://a/c%20d' === d.href;
            } catch (Qa) {}
          }
          if (r.l) return new URL(a, b).href;
          d = r.G;
          d ||
            ((d = document.implementation.createHTMLDocument('temp')),
            (r.G = d),
            (d.w = d.createElement('base')),
            d.head.appendChild(d.w),
            (d.v = d.createElement('a')));
          d.w.href = b;
          d.v.href = a;
          return d.v.href || a;
        },
      },
      U = {
        async: !0,
        load: function(a, b, d) {
          if (a)
            if (a.match(/^data:/)) {
              a = a.split(',');
              var c = a[1];
              c = -1 < a[0].indexOf(';base64') ? atob(c) : decodeURIComponent(c);
              b(c);
            } else {
              var e = new XMLHttpRequest();
              e.open('GET', a, U.async);
              e.onload = function() {
                var a = e.responseURL || e.getResponseHeader('Location');
                a && 0 === a.indexOf('/') && (a = (location.origin || location.protocol + '//' + location.host) + a);
                var c = e.response || e.responseText;
                304 === e.status || 0 === e.status || (200 <= e.status && 300 > e.status) ? b(c, a) : d(c);
              };
              e.send();
            }
          else d('error: href must be specified');
        },
      },
      H = /Trident/.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent);
    g.prototype.c = function(a) {
      var b = this;
      h(a.querySelectorAll('link[rel=import]'), function(a) {
        return b.B(a);
      });
    };
    g.prototype.B = function(a) {
      var b = this,
        d = a.href;
      if (void 0 !== this.a[d]) {
        var c = this.a[d];
        c && c.__loaded && ((a.import = c), this.A(a));
      } else
        this.b++,
          (this.a[d] = 'pending'),
          U.load(
            d,
            function(a, c) {
              a = b.M(a, c || d);
              b.a[d] = a;
              b.b--;
              b.c(a);
              b.C();
            },
            function() {
              b.a[d] = null;
              b.b--;
              b.C();
            },
          );
    };
    g.prototype.M = function(a, b) {
      if (!a) return document.createDocumentFragment();
      H &&
        (a = a.replace(wa, function(a, b, d) {
          return -1 === a.indexOf('type=') ? b + ' type=import-disable ' + d : a;
        }));
      var d = document.createElement('template');
      d.innerHTML = a;
      if (d.content) a = d.content;
      else for (a = document.createDocumentFragment(); d.firstChild; ) a.appendChild(d.firstChild);
      if ((d = a.querySelector('base'))) (b = r.j(d.getAttribute('href'), b)), d.removeAttribute('href');
      var c = 0;
      h(
        a.querySelectorAll(
          'link[rel=import], link[rel=stylesheet][href][type=import-disable],\n    style:not([type]), link[rel=stylesheet][href]:not([type]),\n    script:not([type]), script[type="application/javascript"],\n    script[type="text/javascript"]',
        ),
        function(a) {
          l(a);
          r.J(a, b);
          a.setAttribute('import-dependency', '');
          'script' === a.localName &&
            !a.src &&
            a.textContent &&
            (a.setAttribute(
              'src',
              'data:text/javascript;charset=utf-8,' +
                encodeURIComponent(a.textContent + ('\n//# sourceURL=' + b + (c ? '-' + c : '') + '.js\n')),
            ),
            (a.textContent = ''),
            c++);
        },
      );
      return a;
    };
    g.prototype.C = function() {
      var a = this;
      if (!this.b) {
        this.g.disconnect();
        this.flatten(document);
        var b = !1,
          d = !1,
          c = function() {
            d && b && (a.c(document), a.b || (a.g.observe(document.head, { childList: !0, subtree: !0 }), a.K()));
          };
        this.P(function() {
          d = !0;
          c();
        });
        this.N(function() {
          b = !0;
          c();
        });
      }
    };
    g.prototype.flatten = function(a) {
      var b = this;
      h(a.querySelectorAll('link[rel=import]'), function(a) {
        var d = b.a[a.href];
        (a.import = d) &&
          d.nodeType === Node.DOCUMENT_FRAGMENT_NODE &&
          ((b.a[a.href] = a), (a.readyState = 'loading'), (a.import = a), b.flatten(d), a.appendChild(d));
      });
    };
    g.prototype.N = function(a) {
      function b(e) {
        if (e < c) {
          var f = d[e],
            k = document.createElement('script');
          f.removeAttribute('import-dependency');
          h(f.attributes, function(a) {
            return k.setAttribute(a.name, a.value);
          });
          I = k;
          f.parentNode.replaceChild(k, f);
          l(k, function() {
            I = null;
            b(e + 1);
          });
        } else a();
      }
      var d = document.querySelectorAll('script[import-dependency]'),
        c = d.length;
      b(0);
    };
    g.prototype.P = function(a) {
      var b = document.querySelectorAll('style[import-dependency],\n    link[rel=stylesheet][import-dependency]'),
        d = b.length;
      if (d) {
        var e = H && !!document.querySelector('link[rel=stylesheet][href][type=import-disable]');
        h(b, function(b) {
          l(b, function() {
            b.removeAttribute('import-dependency');
            0 === --d && a();
          });
          if (e && b.parentNode !== document.head) {
            var f = document.createElement(b.localName);
            f.__appliedElement = b;
            f.setAttribute('type', 'import-placeholder');
            b.parentNode.insertBefore(f, b.nextSibling);
            for (f = c(b); f && c(f); ) f = c(f);
            f.parentNode !== document.head && (f = null);
            document.head.insertBefore(b, f);
            b.removeAttribute('type');
          }
        });
      } else a();
    };
    g.prototype.K = function() {
      var a = this;
      h(
        document.querySelectorAll('link[rel=import]'),
        function(b) {
          return a.A(b);
        },
        !0,
      );
    };
    g.prototype.A = function(a) {
      a.__loaded ||
        ((a.__loaded = !0),
        a.import && (a.import.readyState = 'complete'),
        a.dispatchEvent(
          b(a.import ? 'load' : 'error', {
            bubbles: !1,
            cancelable: !1,
            detail: void 0,
          }),
        ));
    };
    g.prototype.L = function(a) {
      var b = this;
      h(a, function(a) {
        return h(a.addedNodes, function(a) {
          a && a.nodeType === Node.ELEMENT_NODE && (k(a) ? b.B(a) : b.c(a));
        });
      });
    };
    if (n) {
      h(document.querySelectorAll('link[rel=import]'), function(a) {
        (a.import && 'loading' === a.import.readyState) || (a.__loaded = !0);
      });
      var V = function(a) {
        a = a.target;
        k(a) && (a.__loaded = !0);
      };
      document.addEventListener('load', V, !0);
      document.addEventListener('error', V, !0);
    } else {
      var z = Object.getOwnPropertyDescriptor(Node.prototype, 'baseURI');
      Object.defineProperty((!z || z.configurable ? Node : Element).prototype, 'baseURI', {
        get: function() {
          var a = k(this) ? this : c(this);
          return a ? a.href : z && z.get ? z.get.call(this) : (document.querySelector('base') || window.location).href;
        },
        configurable: !0,
        enumerable: !0,
      });
      e(function() {
        return new g();
      });
    }
    f(function() {
      return document.dispatchEvent(b('HTMLImportsLoaded', { cancelable: !0, bubbles: !0, detail: void 0 }));
    });
    a.useNative = n;
    a.whenReady = f;
    a.importForElement = c;
  })((window.HTMLImports = window.HTMLImports || {}));
  var aa = new Set(
    'annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph'.split(
      ' ',
    ),
  );
  function m(a) {
    var b = aa.has(a);
    a = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);
    return !b && a;
  }
  function p(a) {
    var b = a.isConnected;
    if (void 0 !== b) return b;
    for (; a && !(a.__CE_isImportDocument || a instanceof Document); )
      a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);
    return !(!a || !(a.__CE_isImportDocument || a instanceof Document));
  }
  function q(a, b) {
    for (; b && b !== a && !b.nextSibling; ) b = b.parentNode;
    return b && b !== a ? b.nextSibling : null;
  }
  function t(a, b, c) {
    c = void 0 === c ? new Set() : c;
    for (var d = a; d; ) {
      if (d.nodeType === Node.ELEMENT_NODE) {
        var e = d;
        b(e);
        var f = e.localName;
        if ('link' === f && 'import' === e.getAttribute('rel')) {
          d = e.import;
          if (d instanceof Node && !c.has(d)) for (c.add(d), d = d.firstChild; d; d = d.nextSibling) t(d, b, c);
          d = q(a, e);
          continue;
        } else if ('template' === f) {
          d = q(a, e);
          continue;
        }
        if ((e = e.__CE_shadowRoot)) for (e = e.firstChild; e; e = e.nextSibling) t(e, b, c);
      }
      d = d.firstChild ? d.firstChild : q(a, d);
    }
  }
  function u(a, b, c) {
    a[b] = c;
  }
  function v() {
    this.a = new Map();
    this.g = new Map();
    this.c = [];
    this.b = !1;
  }
  function ba(a, b, c) {
    a.a.set(b, c);
    a.g.set(c.constructor, c);
  }
  function w(a, b) {
    a.b = !0;
    a.c.push(b);
  }
  function x(a, b) {
    a.b &&
      t(b, function(b) {
        return y(a, b);
      });
  }
  function y(a, b) {
    if (a.b && !b.__CE_patched) {
      b.__CE_patched = !0;
      for (var c = 0; c < a.c.length; c++) a.c[c](b);
    }
  }
  function A(a, b) {
    var c = [];
    t(b, function(a) {
      return c.push(a);
    });
    for (b = 0; b < c.length; b++) {
      var d = c[b];
      1 === d.__CE_state ? a.connectedCallback(d) : B(a, d);
    }
  }
  function C(a, b) {
    var c = [];
    t(b, function(a) {
      return c.push(a);
    });
    for (b = 0; b < c.length; b++) {
      var d = c[b];
      1 === d.__CE_state && a.disconnectedCallback(d);
    }
  }
  function D(a, b, c) {
    c = void 0 === c ? {} : c;
    var d = c.R || new Set(),
      e =
        c.F ||
        function(b) {
          return B(a, b);
        },
      f = [];
    t(
      b,
      function(b) {
        if ('link' === b.localName && 'import' === b.getAttribute('rel')) {
          var c = b.import;
          c instanceof Node && ((c.__CE_isImportDocument = !0), (c.__CE_hasRegistry = !0));
          c && 'complete' === c.readyState
            ? (c.__CE_documentLoadHandled = !0)
            : b.addEventListener('load', function() {
                var c = b.import;
                if (!c.__CE_documentLoadHandled) {
                  c.__CE_documentLoadHandled = !0;
                  var f = new Set(d);
                  f.delete(c);
                  D(a, c, { R: f, F: e });
                }
              });
        } else f.push(b);
      },
      d,
    );
    if (a.b) for (b = 0; b < f.length; b++) y(a, f[b]);
    for (b = 0; b < f.length; b++) e(f[b]);
  }
  function B(a, b) {
    if (void 0 === b.__CE_state) {
      var c = b.ownerDocument;
      if (c.defaultView || (c.__CE_isImportDocument && c.__CE_hasRegistry))
        if ((c = a.a.get(b.localName))) {
          c.constructionStack.push(b);
          var d = c.constructor;
          try {
            try {
              if (new d() !== b)
                throw Error('The custom element constructor did not produce the element being upgraded.');
            } finally {
              c.constructionStack.pop();
            }
          } catch (l) {
            throw ((b.__CE_state = 2), l);
          }
          b.__CE_state = 1;
          b.__CE_definition = c;
          if (c.attributeChangedCallback)
            for (c = c.observedAttributes, d = 0; d < c.length; d++) {
              var e = c[d],
                f = b.getAttribute(e);
              null !== f && a.attributeChangedCallback(b, e, null, f, null);
            }
          p(b) && a.connectedCallback(b);
        }
    }
  }
  v.prototype.connectedCallback = function(a) {
    var b = a.__CE_definition;
    b.connectedCallback && b.connectedCallback.call(a);
  };
  v.prototype.disconnectedCallback = function(a) {
    var b = a.__CE_definition;
    b.disconnectedCallback && b.disconnectedCallback.call(a);
  };
  v.prototype.attributeChangedCallback = function(a, b, c, d, e) {
    var f = a.__CE_definition;
    f.attributeChangedCallback &&
      -1 < f.observedAttributes.indexOf(b) &&
      f.attributeChangedCallback.call(a, b, c, d, e);
  };
  function E(a) {
    var b = document;
    this.f = a;
    this.a = b;
    this.b = void 0;
    D(this.f, this.a);
    'loading' === this.a.readyState &&
      ((this.b = new MutationObserver(this.c.bind(this))), this.b.observe(this.a, { childList: !0, subtree: !0 }));
  }
  function F(a) {
    a.b && a.b.disconnect();
  }
  E.prototype.c = function(a) {
    var b = this.a.readyState;
    ('interactive' !== b && 'complete' !== b) || F(this);
    for (b = 0; b < a.length; b++) for (var c = a[b].addedNodes, d = 0; d < c.length; d++) D(this.f, c[d]);
  };
  function ca() {
    var a = this;
    this.b = this.a = void 0;
    this.c = new Promise(function(b) {
      a.b = b;
      a.a && b(a.a);
    });
  }
  function da(a) {
    if (a.a) throw Error('Already resolved.');
    a.a = void 0;
    a.b && a.b(void 0);
  }
  function G(a) {
    this.m = !1;
    this.f = a;
    this.u = new Map();
    this.o = function(a) {
      return a();
    };
    this.h = !1;
    this.s = [];
    this.H = new E(a);
  }
  G.prototype.define = function(a, b) {
    var c = this;
    if (!(b instanceof Function)) throw new TypeError('Custom element constructors must be functions.');
    if (!m(a)) throw new SyntaxError("The element name '" + a + "' is not valid.");
    if (this.f.a.get(a)) throw Error("A custom element with name '" + a + "' has already been defined.");
    if (this.m) throw Error('A custom element is already being defined.');
    this.m = !0;
    try {
      var d = function(a) {
          var b = e[a];
          if (void 0 !== b && !(b instanceof Function)) throw Error("The '" + a + "' callback must be a function.");
          return b;
        },
        e = b.prototype;
      if (!(e instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
      var f = d('connectedCallback');
      var l = d('disconnectedCallback');
      var k = d('adoptedCallback');
      var g = d('attributeChangedCallback');
      var h = b.observedAttributes || [];
    } catch (n) {
      return;
    } finally {
      this.m = !1;
    }
    b = {
      localName: a,
      constructor: b,
      connectedCallback: f,
      disconnectedCallback: l,
      adoptedCallback: k,
      attributeChangedCallback: g,
      observedAttributes: h,
      constructionStack: [],
    };
    ba(this.f, a, b);
    this.s.push(b);
    this.h ||
      ((this.h = !0),
      this.o(function() {
        return ea(c);
      }));
  };
  function ea(a) {
    if (!1 !== a.h) {
      a.h = !1;
      for (var b = a.s, c = [], d = new Map(), e = 0; e < b.length; e++) d.set(b[e].localName, []);
      D(a.f, document, {
        F: function(b) {
          if (void 0 === b.__CE_state) {
            var e = b.localName,
              f = d.get(e);
            f ? f.push(b) : a.f.a.get(e) && c.push(b);
          }
        },
      });
      for (e = 0; e < c.length; e++) B(a.f, c[e]);
      for (; 0 < b.length; ) {
        var f = b.shift();
        e = f.localName;
        f = d.get(f.localName);
        for (var l = 0; l < f.length; l++) B(a.f, f[l]);
        (e = a.u.get(e)) && da(e);
      }
    }
  }
  G.prototype.get = function(a) {
    if ((a = this.f.a.get(a))) return a.constructor;
  };
  G.prototype.whenDefined = function(a) {
    if (!m(a)) return Promise.reject(new SyntaxError("'" + a + "' is not a valid custom element name."));
    var b = this.u.get(a);
    if (b) return b.c;
    b = new ca();
    this.u.set(a, b);
    this.f.a.get(a) &&
      !this.s.some(function(b) {
        return b.localName === a;
      }) &&
      da(b);
    return b.c;
  };
  G.prototype.O = function(a) {
    F(this.H);
    var b = this.o;
    this.o = function(c) {
      return a(function() {
        return b(c);
      });
    };
  };
  window.CustomElementRegistry = G;
  G.prototype.define = G.prototype.define;
  G.prototype.get = G.prototype.get;
  G.prototype.whenDefined = G.prototype.whenDefined;
  G.prototype.polyfillWrapFlushCallback = G.prototype.O;
  var J = window.Document.prototype.createElement,
    fa = window.Document.prototype.createElementNS,
    ha = window.Document.prototype.importNode,
    ia = window.Document.prototype.prepend,
    ja = window.Document.prototype.append,
    ka = window.DocumentFragment.prototype.prepend,
    la = window.DocumentFragment.prototype.append,
    ma = window.Node.prototype.cloneNode,
    K = window.Node.prototype.appendChild,
    na = window.Node.prototype.insertBefore,
    L = window.Node.prototype.removeChild,
    oa = window.Node.prototype.replaceChild,
    M = Object.getOwnPropertyDescriptor(window.Node.prototype, 'textContent'),
    pa = window.Element.prototype.attachShadow,
    N = Object.getOwnPropertyDescriptor(window.Element.prototype, 'innerHTML'),
    O = window.Element.prototype.getAttribute,
    qa = window.Element.prototype.setAttribute,
    ra = window.Element.prototype.removeAttribute,
    P = window.Element.prototype.getAttributeNS,
    sa = window.Element.prototype.setAttributeNS,
    ta = window.Element.prototype.removeAttributeNS,
    xa = window.Element.prototype.insertAdjacentElement,
    ya = window.Element.prototype.prepend,
    za = window.Element.prototype.append,
    Q = window.Element.prototype.before,
    Aa = window.Element.prototype.after,
    Ba = window.Element.prototype.replaceWith,
    Ca = window.Element.prototype.remove,
    Da = window.HTMLElement,
    R = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, 'innerHTML'),
    Ea = window.HTMLElement.prototype.insertAdjacentElement;
  var Fa = new function() {}();
  function Ga() {
    var a = S;
    window.HTMLElement = (function() {
      function b() {
        var b = this.constructor,
          d = a.g.get(b);
        if (!d) throw Error('The custom element being constructed was not registered with `customElements`.');
        var e = d.constructionStack;
        if (0 === e.length)
          return (
            (e = J.call(document, d.localName)),
            Object.setPrototypeOf(e, b.prototype),
            (e.__CE_state = 1),
            (e.__CE_definition = d),
            y(a, e),
            e
          );
        d = e.length - 1;
        var f = e[d];
        if (f === Fa)
          throw Error(
            'The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.',
          );
        e[d] = Fa;
        Object.setPrototypeOf(f, b.prototype);
        y(a, f);
        return f;
      }
      b.prototype = Da.prototype;
      return b;
    })();
  }
  function T(a, b, c) {
    function d(b) {
      return function(d) {
        for (var c = [], e = 0; e < arguments.length; ++e) c[e - 0] = arguments[e];
        e = [];
        for (var f = [], h = 0; h < c.length; h++) {
          var n = c[h];
          n instanceof Element && p(n) && f.push(n);
          if (n instanceof DocumentFragment) for (n = n.firstChild; n; n = n.nextSibling) e.push(n);
          else e.push(n);
        }
        b.apply(this, c);
        for (c = 0; c < f.length; c++) C(a, f[c]);
        if (p(this)) for (c = 0; c < e.length; c++) (f = e[c]), f instanceof Element && A(a, f);
      };
    }
    void 0 !== c.i && (b.prepend = d(c.i));
    void 0 !== c.append && (b.append = d(c.append));
  }
  function Ha() {
    var a = S;
    u(Document.prototype, 'createElement', function(b) {
      if (this.__CE_hasRegistry) {
        var c = a.a.get(b);
        if (c) return new c.constructor();
      }
      b = J.call(this, b);
      y(a, b);
      return b;
    });
    u(Document.prototype, 'importNode', function(b, c) {
      b = ha.call(this, b, c);
      this.__CE_hasRegistry ? D(a, b) : x(a, b);
      return b;
    });
    u(Document.prototype, 'createElementNS', function(b, c) {
      if (this.__CE_hasRegistry && (null === b || 'http://www.w3.org/1999/xhtml' === b)) {
        var d = a.a.get(c);
        if (d) return new d.constructor();
      }
      b = fa.call(this, b, c);
      y(a, b);
      return b;
    });
    T(a, Document.prototype, { i: ia, append: ja });
  }
  function Ia() {
    var a = S;
    function b(b, d) {
      Object.defineProperty(b, 'textContent', {
        enumerable: d.enumerable,
        configurable: !0,
        get: d.get,
        set: function(b) {
          if (this.nodeType === Node.TEXT_NODE) d.set.call(this, b);
          else {
            var c = void 0;
            if (this.firstChild) {
              var e = this.childNodes,
                k = e.length;
              if (0 < k && p(this)) {
                c = Array(k);
                for (var g = 0; g < k; g++) c[g] = e[g];
              }
            }
            d.set.call(this, b);
            if (c) for (b = 0; b < c.length; b++) C(a, c[b]);
          }
        },
      });
    }
    u(Node.prototype, 'insertBefore', function(b, d) {
      if (b instanceof DocumentFragment) {
        var c = Array.prototype.slice.apply(b.childNodes);
        b = na.call(this, b, d);
        if (p(this)) for (d = 0; d < c.length; d++) A(a, c[d]);
        return b;
      }
      c = p(b);
      d = na.call(this, b, d);
      c && C(a, b);
      p(this) && A(a, b);
      return d;
    });
    u(Node.prototype, 'appendChild', function(b) {
      if (b instanceof DocumentFragment) {
        var d = Array.prototype.slice.apply(b.childNodes);
        b = K.call(this, b);
        if (p(this)) for (var c = 0; c < d.length; c++) A(a, d[c]);
        return b;
      }
      d = p(b);
      c = K.call(this, b);
      d && C(a, b);
      p(this) && A(a, b);
      return c;
    });
    u(Node.prototype, 'cloneNode', function(b) {
      b = ma.call(this, b);
      this.ownerDocument.__CE_hasRegistry ? D(a, b) : x(a, b);
      return b;
    });
    u(Node.prototype, 'removeChild', function(b) {
      var d = p(b),
        c = L.call(this, b);
      d && C(a, b);
      return c;
    });
    u(Node.prototype, 'replaceChild', function(b, d) {
      if (b instanceof DocumentFragment) {
        var c = Array.prototype.slice.apply(b.childNodes);
        b = oa.call(this, b, d);
        if (p(this)) for (C(a, d), d = 0; d < c.length; d++) A(a, c[d]);
        return b;
      }
      c = p(b);
      var f = oa.call(this, b, d),
        l = p(this);
      l && C(a, d);
      c && C(a, b);
      l && A(a, b);
      return f;
    });
    M && M.get
      ? b(Node.prototype, M)
      : w(a, function(a) {
          b(a, {
            enumerable: !0,
            configurable: !0,
            get: function() {
              for (var a = [], b = 0; b < this.childNodes.length; b++) a.push(this.childNodes[b].textContent);
              return a.join('');
            },
            set: function(a) {
              for (; this.firstChild; ) L.call(this, this.firstChild);
              K.call(this, document.createTextNode(a));
            },
          });
        });
  }
  function Ja(a) {
    var b = Element.prototype;
    function c(b) {
      return function(d) {
        for (var c = [], e = 0; e < arguments.length; ++e) c[e - 0] = arguments[e];
        e = [];
        for (var k = [], g = 0; g < c.length; g++) {
          var h = c[g];
          h instanceof Element && p(h) && k.push(h);
          if (h instanceof DocumentFragment) for (h = h.firstChild; h; h = h.nextSibling) e.push(h);
          else e.push(h);
        }
        b.apply(this, c);
        for (c = 0; c < k.length; c++) C(a, k[c]);
        if (p(this)) for (c = 0; c < e.length; c++) (k = e[c]), k instanceof Element && A(a, k);
      };
    }
    void 0 !== Q && (b.before = c(Q));
    void 0 !== Q && (b.after = c(Aa));
    void 0 !== Ba &&
      u(b, 'replaceWith', function(b) {
        for (var d = [], c = 0; c < arguments.length; ++c) d[c - 0] = arguments[c];
        c = [];
        for (var l = [], k = 0; k < d.length; k++) {
          var g = d[k];
          g instanceof Element && p(g) && l.push(g);
          if (g instanceof DocumentFragment) for (g = g.firstChild; g; g = g.nextSibling) c.push(g);
          else c.push(g);
        }
        k = p(this);
        Ba.apply(this, d);
        for (d = 0; d < l.length; d++) C(a, l[d]);
        if (k) for (C(a, this), d = 0; d < c.length; d++) (l = c[d]), l instanceof Element && A(a, l);
      });
    void 0 !== Ca &&
      u(b, 'remove', function() {
        var b = p(this);
        Ca.call(this);
        b && C(a, this);
      });
  }
  function Ka() {
    var a = S;
    function b(b, c) {
      Object.defineProperty(b, 'innerHTML', {
        enumerable: c.enumerable,
        configurable: !0,
        get: c.get,
        set: function(b) {
          var d = this,
            e = void 0;
          p(this) &&
            ((e = []),
            t(this, function(a) {
              a !== d && e.push(a);
            }));
          c.set.call(this, b);
          if (e)
            for (var f = 0; f < e.length; f++) {
              var h = e[f];
              1 === h.__CE_state && a.disconnectedCallback(h);
            }
          this.ownerDocument.__CE_hasRegistry ? D(a, this) : x(a, this);
          return b;
        },
      });
    }
    function c(b, c) {
      u(b, 'insertAdjacentElement', function(b, d) {
        var e = p(d);
        b = c.call(this, b, d);
        e && C(a, d);
        p(b) && A(a, d);
        return b;
      });
    }
    pa &&
      u(Element.prototype, 'attachShadow', function(a) {
        return (this.__CE_shadowRoot = a = pa.call(this, a));
      });
    N && N.get
      ? b(Element.prototype, N)
      : R && R.get
        ? b(HTMLElement.prototype, R)
        : w(a, function(a) {
            b(a, {
              enumerable: !0,
              configurable: !0,
              get: function() {
                return ma.call(this, !0).innerHTML;
              },
              set: function(a) {
                var b = 'template' === this.localName,
                  d = b ? this.content : this,
                  c = J.call(document, this.localName);
                for (c.innerHTML = a; 0 < d.childNodes.length; ) L.call(d, d.childNodes[0]);
                for (a = b ? c.content : c; 0 < a.childNodes.length; ) K.call(d, a.childNodes[0]);
              },
            });
          });
    u(Element.prototype, 'setAttribute', function(b, c) {
      if (1 !== this.__CE_state) return qa.call(this, b, c);
      var d = O.call(this, b);
      qa.call(this, b, c);
      c = O.call(this, b);
      a.attributeChangedCallback(this, b, d, c, null);
    });
    u(Element.prototype, 'setAttributeNS', function(b, c, f) {
      if (1 !== this.__CE_state) return sa.call(this, b, c, f);
      var d = P.call(this, b, c);
      sa.call(this, b, c, f);
      f = P.call(this, b, c);
      a.attributeChangedCallback(this, c, d, f, b);
    });
    u(Element.prototype, 'removeAttribute', function(b) {
      if (1 !== this.__CE_state) return ra.call(this, b);
      var d = O.call(this, b);
      ra.call(this, b);
      null !== d && a.attributeChangedCallback(this, b, d, null, null);
    });
    u(Element.prototype, 'removeAttributeNS', function(b, c) {
      if (1 !== this.__CE_state) return ta.call(this, b, c);
      var d = P.call(this, b, c);
      ta.call(this, b, c);
      var e = P.call(this, b, c);
      d !== e && a.attributeChangedCallback(this, c, d, e, b);
    });
    Ea
      ? c(HTMLElement.prototype, Ea)
      : xa
        ? c(Element.prototype, xa)
        : console.warn('Custom Elements: `Element#insertAdjacentElement` was not patched.');
    T(a, Element.prototype, { i: ya, append: za });
    Ja(a);
  }
  var W = window.customElements;
  if (!W || W.forcePolyfill || 'function' != typeof W.define || 'function' != typeof W.get) {
    var S = new v();
    Ga();
    Ha();
    T(S, DocumentFragment.prototype, { i: ka, append: la });
    Ia();
    Ka();
    document.__CE_hasRegistry = !0;
    var customElements = new G(S);
    Object.defineProperty(window, 'customElements', { configurable: !0, enumerable: !0, value: customElements });
  } /*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
  var X = window.customElements,
    Y = window.HTMLImports,
    La = window.HTMLTemplateElement;
  window.WebComponents = window.WebComponents || {};
  if (X && X.polyfillWrapFlushCallback) {
    var Z,
      Ma = function() {
        if (Z) {
          La.I && La.I(window.document);
          var a = Z;
          Z = null;
          a();
          return !0;
        }
      },
      Na = Y.whenReady;
    X.polyfillWrapFlushCallback(function(a) {
      Z = a;
      Na(Ma);
    });
    Y.whenReady = function(a) {
      Na(function() {
        Ma() ? Y.whenReady(a) : a();
      });
    };
  }
  Y.whenReady(function() {
    requestAnimationFrame(function() {
      window.WebComponents.ready = !0;
      document.dispatchEvent(new CustomEvent('WebComponentsReady', { bubbles: !0 }));
    });
  });
  var Oa = document.createElement('style');
  Oa.textContent =
    'body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n';
  var Pa = document.querySelector('head');
  Pa.insertBefore(
    Oa,
    Pa.firstChild,
  ); /*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
}.call(this));

//# sourceMappingURL=webcomponents-hi-ce.js.map
