!(function(e) {
  var t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var l = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(l.exports, l, l.exports, n), (l.l = !0), l.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var l in e)
          n.d(
            o,
            l,
            function(t) {
              return e[t];
            }.bind(null, l)
          );
      return o;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 1));
})([
  function(e, t, n) {
    "use strict";
    var o,
      l = function() {
        return (
          void 0 === o &&
            (o = Boolean(window && document && document.all && !window.atob)),
          o
        );
      },
      a = (function() {
        var e = {};
        return function(t) {
          if (void 0 === e[t]) {
            var n = document.querySelector(t);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            e[t] = n;
          }
          return e[t];
        };
      })(),
      r = [];
    function s(e) {
      for (var t = -1, n = 0; n < r.length; n++)
        if (r[n].identifier === e) {
          t = n;
          break;
        }
      return t;
    }
    function i(e, t) {
      for (var n = {}, o = [], l = 0; l < e.length; l++) {
        var a = e[l],
          i = t.base ? a[0] + t.base : a[0],
          c = n[i] || 0,
          d = "".concat(i, " ").concat(c);
        n[i] = c + 1;
        var u = s(d),
          y = { css: a[1], media: a[2], sourceMap: a[3] };
        -1 !== u
          ? (r[u].references++, r[u].updater(y))
          : r.push({ identifier: d, updater: g(y, t), references: 1 }),
          o.push(d);
      }
      return o;
    }
    function c(e) {
      var t = document.createElement("style"),
        o = e.attributes || {};
      if (void 0 === o.nonce) {
        var l = n.nc;
        l && (o.nonce = l);
      }
      if (
        (Object.keys(o).forEach(function(e) {
          t.setAttribute(e, o[e]);
        }),
        "function" == typeof e.insert)
      )
        e.insert(t);
      else {
        var r = a(e.insert || "head");
        if (!r)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        r.appendChild(t);
      }
      return t;
    }
    var d,
      u =
        ((d = []),
        function(e, t) {
          return (d[e] = t), d.filter(Boolean).join("\n");
        });
    function y(e, t, n, o) {
      var l = n
        ? ""
        : o.media
        ? "@media ".concat(o.media, " {").concat(o.css, "}")
        : o.css;
      if (e.styleSheet) e.styleSheet.cssText = u(t, l);
      else {
        var a = document.createTextNode(l),
          r = e.childNodes;
        r[t] && e.removeChild(r[t]),
          r.length ? e.insertBefore(a, r[t]) : e.appendChild(a);
      }
    }
    function f(e, t, n) {
      var o = n.css,
        l = n.media,
        a = n.sourceMap;
      if (
        (l ? e.setAttribute("media", l) : e.removeAttribute("media"),
        a &&
          btoa &&
          (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
            " */"
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = o;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(o));
      }
    }
    var p = null,
      m = 0;
    function g(e, t) {
      var n, o, l;
      if (t.singleton) {
        var a = m++;
        (n = p || (p = c(t))),
          (o = y.bind(null, n, a, !1)),
          (l = y.bind(null, n, a, !0));
      } else
        (n = c(t)),
          (o = f.bind(null, n, t)),
          (l = function() {
            !(function(e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(n);
          });
      return (
        o(e),
        function(t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            o((e = t));
          } else l();
        }
      );
    }
    e.exports = function(e, t) {
      (t = t || {}).singleton ||
        "boolean" == typeof t.singleton ||
        (t.singleton = l());
      var n = i((e = e || []), t);
      return function(e) {
        if (
          ((e = e || []),
          "[object Array]" === Object.prototype.toString.call(e))
        ) {
          for (var o = 0; o < n.length; o++) {
            var l = s(n[o]);
            r[l].references--;
          }
          for (var a = i(e, t), c = 0; c < n.length; c++) {
            var d = s(n[c]);
            0 === r[d].references && (r[d].updater(), r.splice(d, 1));
          }
          n = a;
        }
      };
    };
  },
  function(e, t, n) {
    "use strict";
    n.r(t);
    n(2), n(4), n(6), n(7), n(8);
  },
  function(e, t, n) {
    var o = n(0),
      l = n(3);
    "string" == typeof (l = l.__esModule ? l.default : l) &&
      (l = [[e.i, l, ""]]);
    var a = { insert: "head", singleton: !1 },
      r = (o(l, a), l.locals ? l.locals : {});
    e.exports = r;
  },
  function(e, t, n) {},
  function(e, t, n) {
    var o = n(0),
      l = n(5);
    "string" == typeof (l = l.__esModule ? l.default : l) &&
      (l = [[e.i, l, ""]]);
    var a = { insert: "head", singleton: !1 },
      r = (o(l, a), l.locals ? l.locals : {});
    e.exports = r;
  },
  function(e, t, n) {},
  function(e, t) {
    const n = document.querySelector(".filmsToggle"),
      o = document.querySelector(".channelsToggle"),
      l = document.querySelector(".new"),
      a = document.querySelector(".genres"),
      r = document.querySelector(".channels");
    n.addEventListener("click", function(e) {
      e.preventDefault(),
        o.classList.remove("active"),
        n.classList.add("active"),
        (r.style.display = "none"),
        (l.style.display = "block"),
        (a.style.display = "block"),
        localStorage.setItem("new", l.style.display),
        localStorage.setItem("genres", a.style.display),
        localStorage.setItem("channels", r.style.display);
    }),
      o.addEventListener("click", function(e) {
        e.preventDefault(),
          n.classList.remove("active"),
          o.classList.add("active"),
          (l.style.display = "none"),
          (a.style.display = "none"),
          (r.style.display = "block"),
          localStorage.setItem("new", l.style.display),
          localStorage.setItem("genres", a.style.display),
          localStorage.setItem("channels", r.style.display),
          (function() {
            let e,
              t,
              n,
              o = document.querySelector(".channels .container"),
              l = document.querySelector(".channels-wrapper"),
              a = (document.querySelector(".channels-wrapper row"), 0),
              r = !1;
            function s(e) {
              (normalizedPosition = e.pageY), (a = l.scrollTop), (r = !0);
            }
            function i(e) {
              r = !1;
            }
            function c(e) {
              if (!0 === r) {
                let t =
                  (e.pageY - normalizedPosition) *
                  (l.scrollHeight / o.offsetHeight);
                l.scrollTop = a + t;
              }
            }
            (e = document.createElement("div")),
              (e.className = "scroller"),
              (n = (o.offsetHeight / l.scrollHeight) * o.offsetHeight),
              (e.style.height = n + "px"),
              o.appendChild(e),
              (o.className += " showScroll"),
              e.addEventListener("mousedown", s),
              window.addEventListener("mouseup", i),
              window.addEventListener("mousemove", c),
              l.addEventListener("scroll", function(n) {
                let a = n.target.scrollTop / l.scrollHeight;
                (t = a * (o.offsetHeight - 5)), (e.style.top = t + "px");
              });
          })();
      }),
      (l.style.display = localStorage.getItem("new")),
      (a.style.display = localStorage.getItem("genres")),
      (r.style.display = localStorage.getItem("channels")),
      "block" === r.style.display &&
        n.classList.contains("active") &&
        (n.classList.remove("active"), o.classList.add("active"));
  },
  function(e, t) {
    !(function() {
      const e = document.getElementById("form"),
        t = document.querySelector(".header__login_loggedIn"),
        n = document.getElementById("login"),
        o = document.querySelector(".header__login");
      e.addEventListener("submit", (e) => {
        e.preventDefault(),
          localStorage.setItem("names", n.value),
          l(localStorage.getItem("names")),
          (n.value = "");
      });
      const l = (e) => {
        const n = document.createDocumentFragment(),
          l = document.createElement("p"),
          a = document.createElement("a");
        (l.textContent = e),
          (a.textContent = "Выйти"),
          a.setAttribute("href", "#"),
          a.classList.add("header__logout-link"),
          n.appendChild(l),
          n.appendChild(a),
          t.appendChild(n),
          (t.style.display = "flex"),
          (o.style.display = "none"),
          a.addEventListener("click", (e) => {
            e.preventDefault(),
              (a.style.display = "none"),
              (l.textContent = ""),
              (l.style.display = "none"),
              (t.style.display = "none"),
              (o.style.display = "block"),
              localStorage.setItem("loginBtn", o.style.display),
              localStorage.setItem("loginArea", t.style.display);
          }),
          l.addEventListener("click", (e) => {
            l.style.display = "none";
            const n = document.createElement("input");
            n.classList.add("name-input"),
              n.setAttribute("type", "text"),
              t.insertAdjacentElement("afterbegin", n),
              (n.value = l.textContent),
              n.focus(),
              n.setSelectionRange(0, -1),
              n.addEventListener("keyup", (e) => {
                13 === e.keyCode &&
                  ((l.textContent = n.value),
                  (n.style.display = "none"),
                  (l.style.display = "block"),
                  localStorage.setItem("names", n.value));
              });
          }),
          localStorage.setItem("loginBtn", o.style.display),
          localStorage.setItem("loginArea", t.style.display),
          (l.textContent = localStorage.getItem("names"));
      };
      (t.style.display = localStorage.getItem("loginArea")),
        (o.style.display = localStorage.getItem("loginBtn")),
        "flex" == t.style.display && l(localStorage.getItem("names"));
    })();
  },
  function(e, t) {
    const n = document.getElementById("modal"),
      o = document.querySelector(".header__login"),
      l = document.querySelector(".overlay"),
      a = document.querySelector(".modal__submit");
    o.addEventListener("click", (e) => {
      (l.style.display = "block"), (n.style.display = "block");
    }),
      a.addEventListener("click", (e) => {
        (l.style.display = "none"), (n.style.display = "none");
      });
  },
]);
