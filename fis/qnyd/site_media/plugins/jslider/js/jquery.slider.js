var Hashtable = function() {
  function n(t) {
    var r;
    if (typeof t == "string")
      return t;
    if (typeof t.hashCode == e)
      return r = t.hashCode(), typeof r == "string" ? r : n(r);
    if (typeof t.toString == e)
      return t.toString();
    try {
      return String(t)
    } catch (i) {
      return Object.prototype.toString.call(t)
    }
  }

  function r(e, t) {
    return e.equals(t)
  }

  function i(t, n) {
    return typeof n.equals == e ? n.equals(t) : t === n
  }

  function s(e) {
    return function(t) {
      if (t === null)
        throw new Error("null is not a valid " + e);
      if (typeof t == "undefined")
        throw new Error(e + " must not be undefined")
    }
  }

  function a(e, t, n, r) {
    this[0] = e, this.entries = [], this.addEntry(t, n), r !== null && (this.getEqualityFunction = function() {
      return r
    })
  }

  function h(e) {
    return function(t) {
      var n = this.entries.length,
        r, i = this.getEqualityFunction(t);
      while (n--) {
        r = this.entries[n];
        if (i(t, r[0]))
          switch (e) {
            case f:
              return !0;
            case l:
              return r;
            case c:
              return [n, r[1]]
          }
      }
      return !1
    }
  }

  function p(e) {
    return function(t) {
      var n = t.length;
      for (var r = 0, i = this.entries.length; r < i; ++r)
        t[n + r] = this.entries[r][e]
    }
  }

  function d(e, t) {
    var n = e.length,
      r;
    while (n--) {
      r = e[n];
      if (t === r[0])
        return n
    }
    return null
  }

  function v(e, t) {
    var n = e[t];
    return n && n instanceof a ? n : null
  }

  function m(r, i) {
    var s = this,
      f = [],
      l = {},
      c = typeof r == e ? r : n,
      h = typeof i == e ? i : null;
    this.put = function(e, t) {
      o(e), u(t);
      var n = c(e),
        r, i, s = null;
      return r = v(l, n), r ? (i = r.getEntryForKey(e), i ? (s = i[1], i[1] = t) : r.addEntry(e, t)) : (r = new a(n, e, t, h), f[f.length] = r, l[n] = r), s
    }, this.get = function(e) {
      o(e);
      var t = c(e),
        n = v(l, t);
      if (n) {
        var r = n.getEntryForKey(e);
        if (r)
          return r[1]
      }
      return null
    }, this.containsKey = function(e) {
      o(e);
      var t = c(e),
        n = v(l, t);
      return n ? n.containsKey(e) : !1
    }, this.containsValue = function(e) {
      u(e);
      var t = f.length;
      while (t--)
        if (f[t].containsValue(e))
          return !0;
      return !1
    }, this.clear = function() {
      f.length = 0, l = {}
    }, this.isEmpty = function() {
      return !f.length
    };
    var p = function(e) {
      return function() {
        var t = [],
          n = f.length;
        while (n--)
          f[n][e](t);
        return t
      }
    };
    this.keys = p("keys"), this.values = p("values"), this.entries = p("getEntries"), this.remove = function(e) {
      o(e);
      var n = c(e),
        r, i = null,
        s = v(l, n);
      return s && (i = s.removeEntryForKey(e), i !== null && (s.entries.length || (r = d(f, n), t(f, r), delete l[n]))), i
    }, this.size = function() {
      var e = 0,
        t = f.length;
      while (t--)
        e += f[t].entries.length;
      return e
    }, this.each = function(e) {
      var t = s.entries(),
        n = t.length,
        r;
      while (n--)
        r = t[n], e(r[0], r[1])
    }, this.putAll = function(t, n) {
      var r = t.entries(),
        i, o, u, a, f = r.length,
        l = typeof n == e;
      while (f--)
        i = r[f], o = i[0], u = i[1], l && (a = s.get(o)) && (u = n(o, a, u)), s.put(o, u)
    }, this.clone = function() {
      var e = new m(r, i);
      return e.putAll(s), e
    }
  }
  var e = "function",
    t = typeof Array.prototype.splice == e ? function(e, t) {
      e.splice(t, 1)
    } : function(e, t) {
      var n, r, i;
      if (t === e.length - 1)
        e.length = t;
      else {
        n = e.slice(t + 1), e.length = t;
        for (r = 0, i = n.length; r < i; ++r)
          e[t + r] = n[r]
      }
    },
    o = s("key"),
    u = s("value"),
    f = 0,
    l = 1,
    c = 2;
  return a.prototype = {
    getEqualityFunction: function(t) {
      return typeof t.equals == e ? r : i
    },
    getEntryForKey: h(l),
    getEntryAndIndexForKey: h(c),
    removeEntryForKey: function(e) {
      var n = this.getEntryAndIndexForKey(e);
      return n ? (t(this.entries, n[0]), n[1]) : null
    },
    addEntry: function(e, t) {
      this.entries[this.entries.length] = [e, t]
    },
    keys: p(0),
    values: p(1),
    getEntries: function(e) {
      var t = e.length;
      for (var n = 0, r = this.entries.length; n < r; ++n)
        e[t + n] = this.entries[n].slice(0)
    },
    containsKey: h(f),
    containsValue: function(e) {
      var t = this.entries.length;
      while (t--)
        if (e === this.entries[t][1])
          return !0;
      return !1
    }
  }, m
}();
(function(e) {
  function a(e, t, n) {
    this.dec = e, this.group = t, this.neg = n
  }

  function f() {
    for (var e = 0; e < u.length; e++) {
      localeGroup = u[e];
      for (var n = 0; n < localeGroup.length; n++)
        t.put(localeGroup[n], e)
    }
  }

  function l(e, n) {
    t.size() == 0 && f();
    var r = ".",
      i = ",",
      s = "-";
    n == 0 && (e.indexOf("_") != -1 ? e = e.split("_")[1].toLowerCase() : e.indexOf("-") != -1 && (e = e.split("-")[1].toLowerCase()));
    var u = t.get(e);
    if (u) {
      var l = o[u];
      l && (r = l[0], i = l[1])
    }
    return new a(r, i, s)
  }
  var t = new Hashtable,
    n = ["ae", "au", "ca", "cn", "eg", "gb", "hk", "il", "in", "jp", "sk", "th", "tw", "us"],
    r = ["at", "br", "de", "dk", "es", "gr", "it", "nl", "pt", "tr", "vn"],
    i = ["cz", "fi", "fr", "ru", "se", "pl"],
    s = ["ch"],
    o = [
      [".", ","],
      [",", "."],
      [",", " "],
      [".", "'"]
    ],
    u = [n, r, i, s];
  e.fn.formatNumber = function(t, n, r) {
    return this.each(function() {
      n == null && (n = !0), r == null && (r = !0);
      var i;
      e(this).is(":input") ? i = new String(e(this).val()) : i = new String(e(this).text());
      var s = e.formatNumber(i, t);
      n && (e(this).is(":input") ? e(this).val(s) : e(this).text(s));
      if (r)
        return s
    })
  }, e.formatNumber = function(t, n) {
    var n = e.extend({}, e.fn.formatNumber.defaults, n),
      r = l(n.locale.toLowerCase(), n.isFullLocale),
      i = r.dec,
      s = r.group,
      o = r.neg,
      u = "0#-,.",
      a = "",
      f = !1;
    for (var c = 0; c < n.format.length; c++) {
      if (u.indexOf(n.format.charAt(c)) != -1) {
        if (c == 0 && n.format.charAt(c) == "-") {
          f = !0;
          continue
        }
        break
      }
      a += n.format.charAt(c)
    }
    var h = "";
    for (var c = n.format.length - 1; c >= 0; c--) {
      if (u.indexOf(n.format.charAt(c)) != -1)
        break;
      h = n.format.charAt(c) + h
    }
    n.format = n.format.substring(a.length), n.format = n.format.substring(0, n.format.length - h.length);
    var p = new Number(t);
    return e._formatNumber(p, n, h, a, f)
  }, e._formatNumber = function(t, n, r, i, s) {
    var n = e.extend({}, e.fn.formatNumber.defaults, n),
      o = l(n.locale.toLowerCase(), n.isFullLocale),
      u = o.dec,
      a = o.group,
      f = o.neg,
      c = !1;
    if (isNaN(t)) {
      if (n.nanForceZero != 1)
        return null;
      t = 0, c = !0
    }
    r == "%" && (t *= 100);
    var h = "";
    if (n.format.indexOf(".") > -1) {
      var p = u,
        d = n.format.substring(n.format.lastIndexOf(".") + 1);
      if (n.round == 1)
        t = new Number(t.toFixed(d.length));
      else {
        var v = t.toString();
        v = v.substring(0, v.lastIndexOf(".") + d.length + 1), t = new Number(v)
      }
      var m = t % 1,
        g = new String(m.toFixed(d.length));
      g = g.substring(g.lastIndexOf(".") + 1);
      for (var y = 0; y < d.length; y++) {
        if (d.charAt(y) == "#" && g.charAt(y) != "0") {
          p += g.charAt(y);
          continue
        }
        if (d.charAt(y) == "#" && g.charAt(y) == "0") {
          var b = g.substring(y);
          if (b.match("[1-9]")) {
            p += g.charAt(y);
            continue
          }
          break
        }
        d.charAt(y) == "0" && (p += g.charAt(y))
      }
      h += p
    } else
      t = Math.round(t);
    var w = Math.floor(t);
    t < 0 && (w = Math.ceil(t));
    var E = "";
    n.format.indexOf(".") == -1 ? E = n.format : E = n.format.substring(0, n.format.indexOf("."));
    var S = "";
    if (w != 0 || E.substr(E.length - 1) != "#" || c) {
      var x = new String(Math.abs(w)),
        T = 9999;
      E.lastIndexOf(",") != -1 && (T = E.length - E.lastIndexOf(",") - 1);
      var N = 0;
      for (var y = x.length - 1; y > -1; y--)
        S = x.charAt(y) + S, N++, N == T && y != 0 && (S = a + S, N = 0);
      if (E.length > S.length) {
        var C = E.indexOf("0");
        if (C != -1) {
          var k = E.length - C,
            L = E.length - S.length - 1;
          while (S.length < k) {
            var A = E.charAt(L);
            A == "," && (A = a), S = A + S, L--
          }
        }
      }
    }
    return !S && E.indexOf("0", E.length - 1) !== -1 && (S = "0"), h = S + h, t < 0 && s && i.length > 0 ? i = f + i : t < 0 && (h = f + h), n.decimalSeparatorAlwaysShown || h.lastIndexOf(u) == h.length - 1 && (h = h.substring(0, h.length - 1)), h = i + h + r, h
  }, e.fn.parseNumber = function(t, n, r) {
    n == null && (n = !0), r == null && (r = !0);
    var i;
    e(this).is(":input") ? i = new String(e(this).val()) : i = new String(e(this).text());
    var s = e.parseNumber(i, t);
    if (s) {
      n && (e(this).is(":input") ? e(this).val(s.toString()) : e(this).text(s.toString()));
      if (r)
        return s
    }
  }, e.parseNumber = function(t, n) {
    var n = e.extend({}, e.fn.parseNumber.defaults, n),
      r = l(n.locale.toLowerCase(), n.isFullLocale),
      i = r.dec,
      s = r.group,
      o = r.neg,
      u = "1234567890.-";
    while (t.indexOf(s) > -1)
      t = t.replace(s, "");
    t = t.replace(i, ".").replace(o, "-");
    var a = "",
      f = !1;
    if (t.charAt(t.length - 1) == "%" || n.isPercentage == 1)
      f = !0;
    for (var c = 0; c < t.length; c++)
      u.indexOf(t.charAt(c)) > -1 && (a += t.charAt(c));
    var h = new Number(a);
    if (f) {
      h /= 100;
      var p = a.indexOf(".");
      if (p != -1) {
        var d = a.length - p - 1;
        h = h.toFixed(d + 2)
      } else
        h = h.toFixed(a.length - 1)
    }
    return h
  }, e.fn.parseNumber.defaults = {
    locale: "us",
    decimalSeparatorAlwaysShown: !1,
    isPercentage: !1,
    isFullLocale: !1
  }, e.fn.formatNumber.defaults = {
    format: "#,###.00",
    locale: "us",
    decimalSeparatorAlwaysShown: !1,
    nanForceZero: !0,
    round: !0,
    isFullLocale: !1
  }, Number.prototype.toFixed = function(t) {
    return e._roundNumber(this, t)
  }, e._roundNumber = function(e, t) {
    var n = Math.pow(10, t || 0),
      r = String(Math.round(e * n) / n);
    if (t > 0) {
      var i = r.indexOf(".");
      i == -1 ? (r += ".", i = 0) : i = r.length - (i + 1);
      while (i < t)
        r += "0", i++
    }
    return r
  }
})(Zepto),
function() {
  var cache = {};

  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :

      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +

        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +

        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");

    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
}(),
function(e) {
  e.baseClass = function(t) {
    return t = e(t), t.get(0).className.match(/([^ ]+)/)[1]
  }, e.fn.addDependClass = function(t, n) {
    var r = {
      delimiter: n ? n : "-"
    };
    return this.each(function() {
      var n = e.baseClass(this);
      n && e(this).addClass(n + r.delimiter + t)
    })
  }, e.fn.removeDependClass = function(t, n) {
    var r = {
      delimiter: n ? n : "-"
    };
    return this.each(function() {
      var n = e.baseClass(this);
      n && e(this).removeClass(n + r.delimiter + t)
    })
  }, e.fn.toggleDependClass = function(t, n) {
    var r = {
      delimiter: n ? n : "-"
    };
    return this.each(function() {
      var n = e.baseClass(this);
      n && (e(this).is("." + n + r.delimiter + t) ? e(this).removeClass(n + r.delimiter + t) : e(this).addClass(n + r.delimiter + t))
    })
  }
}(Zepto),
function(e) {
  function t() {
    this._init.apply(this, arguments)
  }
  t.prototype.oninit = function() {}, t.prototype.events = function() {}, t.prototype.onmousedown = function() {
    this.ptr.css({
      position: "absolute"
    })
  }, t.prototype.onmousemove = function(e, t, n) {
    this.ptr.css({
      left: t,
      top: n
    })
  }, t.prototype.onmouseup = function() {}, t.prototype.isDefault = {
    drag: !1,
    clicked: !1,
    toclick: !0,
    mouseup: !1
  }, t.prototype._init = function() {
    if (arguments.length > 0) {
      this.ptr = e(arguments[0]), this.outer = e(".draggable-outer"), this.is = {}, e.extend(this.is, this.isDefault);
      var t = this.ptr.offset();
      this.d = {
        left: t.left,
        top: t.top,
        width: this.ptr.width(),
        height: this.ptr.height()
      }, this.oninit.apply(this, arguments), this._events()
    }
  }, t.prototype._getPageCoords = function(e) {
    return e.targetTouches && e.targetTouches[0] ? {
      x: e.targetTouches[0].pageX,
      y: e.targetTouches[0].pageY
    } : {
      x: e.pageX,
      y: e.pageY
    }
  }, t.prototype._bindEvent = function(e, t, n) {
    var r = this;
    this.supportTouches_ ? e.get(0).addEventListener(this.events_[t], n, !1) : e.bind(this.events_[t], n)
  }, t.prototype._events = function() {
    var t = this;
    this.supportTouches_ = true, this.events_ = {
      click: this.supportTouches_ ? "touchstart" : "click",
      down: this.supportTouches_ ? "touchstart" : "mousedown",
      move: this.supportTouches_ ? "touchmove" : "mousemove",
      up: this.supportTouches_ ? "touchend" : "mouseup"
    }, this._bindEvent(e(document), "move", function(e) {
      t.is.drag && (e.stopPropagation(), e.preventDefault(), t._mousemove(e))
    }), this._bindEvent(e(document), "down", function(e) {
      t.is.drag && (e.stopPropagation(), e.preventDefault())
    }), this._bindEvent(e(document), "up", function(e) {
      t._mouseup(e)
    }), this._bindEvent(this.ptr, "down", function(e) {
      return t._mousedown(e), !1
    }), this._bindEvent(this.ptr, "up", function(e) {
      t._mouseup(e)
    }), this.ptr.find("a").click(function() {
      t.is.clicked = !0;
      if (!t.is.toclick)
        return t.is.toclick = !0, !1
    }).mousedown(function(e) {
      return t._mousedown(e), !1
    }), this.events()
  }, t.prototype._mousedown = function(t) {
    this.is.drag = !0, this.is.clicked = !1, this.is.mouseup = !1;
    var n = this.ptr.offset(),
      r = this._getPageCoords(t);
    this.cx = r.x - n.left, this.cy = r.y - n.top, e.extend(this.d, {
      left: n.left,
      top: n.top,
      width: this.ptr.width(),
      height: this.ptr.height()
    }), this.outer && this.outer.get(0) && this.outer.css({
      height: Math.max(this.outer.height(), e(document.body).height()),
      overflow: "hidden"
    }), this.onmousedown(t)
  }, t.prototype._mousemove = function(e) {
    this.is.toclick = !1;
    var t = this._getPageCoords(e);
    this.onmousemove(e, t.x - this.cx, t.y - this.cy)
  }, t.prototype._mouseup = function(t) {
    var n = this;
    this.is.drag && (this.is.drag = !1, this.outer && this.outer.get(0) && (e.browser.mozilla ? this.outer.css({
      overflow: "hidden"
    }) : this.outer.css({
      overflow: "visible"
    }), e.browser.msie && e.browser.version == "6.0" ? this.outer.css({
      height: "100%"
    }) : this.outer.css({
      height: "auto"
    })), this.onmouseup(t))
  }, window.Draggable = t
}(Zepto),
function(e) {
  function t(e) {
    return typeof e == "undefined" ? !1 : e instanceof Array || !(e instanceof Object) && Object.prototype.toString.call(e) == "[object Array]" || typeof e.length == "number" && typeof e.splice != "undefined" && typeof e.propertyIsEnumerable != "undefined" && !e.propertyIsEnumerable("splice") ? !0 : !1
  }

  function r() {
    return this.init.apply(this, arguments)
  }

  function i() {
    Draggable.apply(this, arguments)
  }
  e.slider = function(t, n) {
    var i = e(t);
    return i.data("jslider") || i.data("jslider", new r(t, n)), i.data("jslider")
  }, e.fn.slider = function(n, r) {
    function o(e) {
      return e !== undefined
    }

    function u(e) {
      return e != null
    }
    var i, s = arguments;
    return this.each(function() {
      var a = e.slider(this, n);
      if (typeof n == "string")
        switch (n) {
          case "value":
            if (o(s[1]) && o(s[2])) {
              var f = a.getPointers();
              u(f[0]) && u(s[1]) && (f[0].set(s[1]), f[0].setIndexOver()), u(f[1]) && u(s[2]) && (f[1].set(s[2]), f[1].setIndexOver())
            } else if (o(s[1])) {
              var f = a.getPointers();
              u(f[0]) && u(s[1]) && (f[0].set(s[1]), f[0].setIndexOver())
            } else
              i = a.getValue();
            break;
          case "prc":
            if (o(s[1]) && o(s[2])) {
              var f = a.getPointers();
              u(f[0]) && u(s[1]) && (f[0]._set(s[1]), f[0].setIndexOver()), u(f[1]) && u(s[2]) && (f[1]._set(s[2]), f[1].setIndexOver())
            } else if (o(s[1])) {
              var f = a.getPointers();
              u(f[0]) && u(s[1]) && (f[0]._set(s[1]), f[0].setIndexOver())
            } else
              i = a.getPrcValue();
            break;
          case "calculatedValue":
            var l = a.getValue().split(";");
            i = "";
            for (var c = 0; c < l.length; c++)
              i += (c > 0 ? ";" : "") + a.nice(l[c]);
            break;
          case "skin":
            a.setSkin(s[1])
        } else
        !n && !r && (t(i) || (i = []), i.push(a))
    }), t(i) && i.length == 1 && (i = i[0]), i || this
  };
  var n = {
    settings: {
      from: 1,
      to: 10,
      step: 1,
      smooth: !0,
      limits: !0,
      round: 0,
      format: {
        format: "#,##0.##"
      },
      value: "5;7",
      dimension: ""
    },
    className: "jslider",
    selector: ".jslider-",
    template: tmpl('<span class="<%=className%>"><table><tr><td><div class="<%=className%>-bg"><i class="l"></i><i class="f"></i><i class="r"></i><i class="v"></i></div><div class="<%=className%>-pointer"></div><div class="<%=className%>-pointer <%=className%>-pointer-to"></div><div class="<%=className%>-label"><span><%=settings.from%></span></div><div class="<%=className%>-label <%=className%>-label-to"><span><%=settings.to%></span><%=settings.dimension%></div><div class="<%=className%>-value"><span></span><%=settings.dimension%></div><div class="<%=className%>-value <%=className%>-value-to"><span></span><%=settings.dimension%></div><div class="<%=className%>-scale"><%=scale%></div></td></tr></table></span>')
  };
  r.prototype.init = function(t, r) {
    this.settings = e.extend(!0, {}, n.settings, r ? r : {}), this.inputNode = e(t).hide(), this.settings.interval = this.settings.to - this.settings.from, this.settings.value = this.inputNode.attr("value"), this.settings.calculate && e.isFunction(this.settings.calculate) && (this.nice = this.settings.calculate), this.settings.onstatechange && e.isFunction(this.settings.onstatechange) && (this.onstatechange = this.settings.onstatechange), this.is = {
      init: !1
    }, this.o = {}, this.create()
  }, r.prototype.onstatechange = function() {}, r.prototype.create = function() {
    var t = this;
    this.domNode = e(n.template({
        className: n.className,
        settings: {
          from: this.nice(this.settings.from),
          to: this.nice(this.settings.to),
          dimension: this.settings.dimension
        },
        scale: this.generateScale()
      })), this.inputNode.after(this.domNode), this.drawScale(), this.settings.skin && this.settings.skin.length > 0 && this.setSkin(this.settings.skin), this.sizes = {
        domWidth: this.domNode.width(),
        domOffset: this.domNode.offset()
      }, e.extend(this.o, {
        pointers: {},
        labels: {
          0: {
            o: this.domNode.find(n.selector + "value").not(n.selector + "value-to")
          },
          1: {
            o: this.domNode.find(n.selector + "value").filter(n.selector + "value-to")
          }
        },
        limits: {
          0: this.domNode.find(n.selector + "label").not(n.selector + "label-to"),
          1: this.domNode.find(n.selector + "label").filter(n.selector + "label-to")
        }
      }), e.extend(this.o.labels[0], {
        value: this.o.labels[0].o.find("span")
      }), e.extend(this.o.labels[1], {
        value: this.o.labels[1].o.find("span")
      }), t.settings.value.split(";")[1] || (this.settings.single = !0, this.domNode.addDependClass("single")), t.settings.limits || this.domNode.addDependClass("limitless"), this.domNode.find(n.selector + "pointer").each(function(e) {
        var n = t.settings.value.split(";")[e];
        if (n) {
          t.o.pointers[e] = new i(this, e, t);
          /*var r = t.settings.value.split(";")[e - 1];*/
          /*r&&new Number(n)<new Number(r)&&(n=r),n=n<t.settings.from?t.settings.from:n,n=n>t.settings.to?t.settings.to:n,*/
          t.o.pointers[e].set(n, !0)
        }
      }), this.o.value = this.domNode.find(".v"), this.is.init = !0, e.each(this.o.pointers, function(e) {
        t.redraw(this)
      }),
      function(t) {
        e(window).resize(function() {
          t.onresize()
        })
      }(this)
  }, r.prototype.setSkin = function(e) {
    this.skin_ && this.domNode.removeDependClass(this.skin_, "_"), this.domNode.addDependClass(this.skin_ = e, "_")
  }, r.prototype.setPointersIndex = function(t) {
    e.each(this.getPointers(), function(e) {
      this.index(e)
    })
  }, r.prototype.getPointers = function() {
    return this.o.pointers
  }, r.prototype.generateScale = function() {
    if (this.settings.scale && this.settings.scale.length > 0) {
      var e = "",
        t = this.settings.scale,
        n = Math.round(100 / (t.length - 1) * 10) / 10;
      for (var r = 0; r < t.length; r++)
        e += '<span style="left: ' + r * n + '%">' + (t[r] != "|" ? "<ins>" + t[r] + "</ins>" : "") + "</span>";
      return e
    }
    return ""
  }, r.prototype.drawScale = function() {
    this.domNode.find(n.selector + "scale span ins").each(function() {
      e(this).css({
        marginLeft: -e(this).width() / 2
      })
    })
  }, r.prototype.onresize = function() {
    var t = this;
    this.sizes = {
      domWidth: this.domNode.width(),
      domOffset: this.domNode.offset()
    }, e.each(this.o.pointers, function(e) {
      t.redraw(this)
    })
  }, r.prototype.update = function() {
    this.onresize(), this.drawScale()
  }, r.prototype.limits = function(e, t) {
    if (!this.settings.smooth) {
      var n = this.settings.step * 100 / this.settings.interval;
      e = Math.round(e / n) * n
    }
    var r = this.o.pointers[1 - t.uid];
    return r && t.uid && e < r.value.prc && (e = r.value.prc), r && !t.uid && e > r.value.prc && (e = r.value.prc), e < 0 && (e = 0), e > 100 && (e = 100), Math.round(e * 10) / 10
  }, r.prototype.redraw = function(e) {
    if (!this.is.init)
      return !1;
    this.setValue(), this.o.pointers[0] && this.o.pointers[1] && this.o.value.css({
      left: this.o.pointers[0].value.prc + "%",
      width: this.o.pointers[1].value.prc - this.o.pointers[0].value.prc + "%"
    }), this.o.labels[e.uid].value.html(this.nice(e.value.origin)), this.redrawLabels(e)
  }, r.prototype.redrawLabels = function(e) {
    function t(e, t, r) {
      return t.margin = -t.label / 2, label_left = t.border + t.margin, label_left < 0 && (t.margin -= label_left), t.border + t.label / 2 > n.sizes.domWidth ? (t.margin = 0, t.right = !0) : t.right = !1, e.o.css({
        left: r + "%",
        marginLeft: t.margin,
        right: "auto"
      }), t.right && e.o.css({
        left: "auto",
        right: 0
      }), t
    }
    var n = this,
      r = this.o.labels[e.uid],
      i = e.value.prc,
      s = {
        label: r.o.width(),
        right: !1,
        border: i * this.sizes.domWidth / 100
      };
    if (!this.settings.single) {
      var o = this.o.pointers[1 - e.uid],
        u = this.o.labels[o.uid];
      switch (e.uid) {
        case 0:
          s.border + s.label / 2 > u.o.offset().left - this.sizes.domOffset.left ? (u.o.css({
            visibility: "hidden"
          }), u.value.html(this.nice(o.value.origin)), r.o.css({
            visibility: "visible"
          }), i = (o.value.prc - i) / 2 + i, o.value.prc != e.value.prc && (r.value.html(this.nice(e.value.origin) + "&nbsp;&ndash;&nbsp;" + this.nice(o.value.origin)), s.label = r.o.width(), s.border = i * this.sizes.domWidth / 100)) : u.o.css({
            visibility: "visible"
          });
          break;
        case 1:
          s.border - s.label / 2 < u.o.offset().left - this.sizes.domOffset.left + u.o.width() ? (u.o.css({
            visibility: "hidden"
          }), u.value.html(this.nice(o.value.origin)), r.o.css({
            visibility: "visible"
          }), i = (i - o.value.prc) / 2 + o.value.prc, o.value.prc != e.value.prc && (r.value.html(this.nice(o.value.origin) + "&nbsp;&ndash;&nbsp;" + this.nice(e.value.origin)), s.label = r.o.width(), s.border = i * this.sizes.domWidth / 100)) : u.o.css({
            visibility: "visible"
          })
      }
    }
    s = t(r, s, i);
    if (u) {
      var s = {
        label: u.o.width(),
        right: !1,
        border: o.value.prc * this.sizes.domWidth / 100
      };
      s = t(u, s, o.value.prc)
    }
    this.redrawLimits()
  }, r.prototype.redrawLimits = function() {
    if (this.settings.limits) {
      var e = [!0, !0];
      for (key in this.o.pointers)
        if (!this.settings.single || key == 0) {
          var t = this.o.pointers[key],
            n = this.o.labels[t.uid],
            r = n.o.offset().left - this.sizes.domOffset.left,
            i = this.o.limits[0];
          r < i.width() && (e[0] = !1);
          var i = this.o.limits[1];
          r + n.o.width() > this.sizes.domWidth - i.width() && (e[1] = !1)
        }
      for (var s = 0; s < e.length; s++)
        e[s] ? this.o.limits[s].show() : this.o.limits[s].hide()
    }
  }, r.prototype.setValue = function() {
    var e = this.getValue();
    this.inputNode.attr("value", e), this.onstatechange.call(this, e)
  }, r.prototype.getValue = function() {
    if (!this.is.init)
      return !1;
    var t = this,
      n = "";
    return e.each(this.o.pointers, function(e) {
      this.value.prc != undefined && !isNaN(this.value.prc) && (n += (e > 0 ? ";" : "") + t.prcToValue(this.value.prc))
    }), n
  }, r.prototype.getPrcValue = function() {
    if (!this.is.init)
      return !1;
    var t = this,
      n = "";
    return e.each(this.o.pointers, function(e) {
      this.value.prc != undefined && !isNaN(this.value.prc) && (n += (e > 0 ? ";" : "") + this.value.prc)
    }), n
  }, r.prototype.prcToValue = function(e) {
    if (this.settings.heterogeneity && this.settings.heterogeneity.length > 0) {
      var t = this.settings.heterogeneity,
        n = 0,
        r = this.settings.from;
      for (var i = 0; i <= t.length; i++) {
        if (t[i])
          var s = t[i].split("/");
        else
          var s = [100, this.settings.to];
        s[0] = new Number(s[0]), s[1] = new Number(s[1]);
        if (e >= n && e <= s[0])
          var o = r + (e - n) * (s[1] - r) / (s[0] - n);
        n = s[0], r = s[1]
      }
    } else
      var o = this.settings.from + e * this.settings.interval / 100;
    return this.round(o)
  }, r.prototype.valueToPrc = function(e, t) {
    if (this.settings.heterogeneity && this.settings.heterogeneity.length > 0) {
      var n = this.settings.heterogeneity,
        r = 0,
        i = this.settings.from;
      for (var s = 0; s <= n.length; s++) {
        if (n[s])
          var o = n[s].split("/");
        else
          var o = [100, this.settings.to];
        o[0] = new Number(o[0]), o[1] = new Number(o[1]);
        if ((e >= i && e <= o[1]) || (e <= i && e >= o[1]))
          var u = t.limits(r + (e - i) * (o[0] - r) / (o[1] - i));
        r = o[0], i = o[1]
      }
    } else
      var u = t.limits((e - this.settings.from) * 100 / this.settings.interval);
    return u
  }, r.prototype.round = function(e) {
    return e = Math.round(e / this.settings.step) * this.settings.step, this.settings.round ? e = Math.round(e * Math.pow(10, this.settings.round)) / Math.pow(10, this.settings.round) : e = Math.round(e), e
  }, r.prototype.nice = function(t) {
    return t = t.toString().replace(/,/gi, ".").replace(/ /gi, ""), e.formatNumber ? e.formatNumber(new Number(t), this.settings.format || {}).replace(/-/gi, "&minus;") : new Number(t)
  }, i.prototype = new Draggable, i.prototype.oninit = function(e, t, n) {
    this.uid = t, this.parent = n, this.value = {}, this.settings = this.parent.settings
  }, i.prototype.onmousedown = function(e) {
    this._parent = {
      offset: this.parent.domNode.offset(),
      width: this.parent.domNode.width()
    }, this.ptr.addDependClass("hover"), this.setIndexOver()
  }, i.prototype.onmousemove = function(e, t) {
    var n = this._getPageCoords(e);
    this._set(this.calc(n.x))
  }, i.prototype.onmouseup = function(t) {
    this.parent.settings.callback && e.isFunction(this.parent.settings.callback) && this.parent.settings.callback.call(this.parent, this.parent.getValue()), this.ptr.removeDependClass("hover")
  }, i.prototype.setIndexOver = function() {
    this.parent.setPointersIndex(1), this.index(2)
  }, i.prototype.index = function(e) {
    this.ptr.css({
      zIndex: e
    })
  }, i.prototype.limits = function(e) {
    return this.parent.limits(e, this)
  }, i.prototype.calc = function(e) {
    var t = this.limits((e - this._parent.offset.left) * 100 / this._parent.width);
    return t
  }, i.prototype.set = function(e, t) {
    this.value.origin = this.parent.round(e), this._set(this.parent.valueToPrc(e, this), t)
  }, i.prototype._set = function(e, t) {
    t || (this.value.origin = this.parent.prcToValue(e)), this.value.prc = e, this.ptr.css({
      left: e + "%"
    }), this.parent.redraw(this)
  }
}(Zepto);
