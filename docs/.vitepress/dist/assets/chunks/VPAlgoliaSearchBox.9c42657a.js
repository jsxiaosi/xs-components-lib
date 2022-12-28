import { f as Pr, g as Ir, h as kr, i as Dr, j as Cr, o as Ar, c as xr } from '../app.f6179061.js';
/*! @docsearch/js 3.3.0 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com */ function Ct(
  e,
  t,
) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ct(Object(n), !0).forEach(function (r) {
          Nr(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Ct(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Ee(e) {
  return (
    (Ee =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    Ee(e)
  );
}
function Nr(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function st() {
  return (
    (st =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    st.apply(this, arguments)
  );
}
function Rr(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (i, u) {
      if (i == null) return {};
      var s,
        l,
        c = {},
        p = Object.keys(i);
      for (l = 0; l < p.length; l++) (s = p[l]), u.indexOf(s) >= 0 || (c[s] = i[s]);
      return c;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function Ve(e, t) {
  return (
    (function (n) {
      if (Array.isArray(n)) return n;
    })(e) ||
    (function (n, r) {
      var o = n == null ? null : (typeof Symbol < 'u' && n[Symbol.iterator]) || n['@@iterator'];
      if (o != null) {
        var a,
          i,
          u = [],
          s = !0,
          l = !1;
        try {
          for (
            o = o.call(n);
            !(s = (a = o.next()).done) && (u.push(a.value), !r || u.length !== r);
            s = !0
          );
        } catch (c) {
          (l = !0), (i = c);
        } finally {
          try {
            s || o.return == null || o.return();
          } finally {
            if (l) throw i;
          }
        }
        return u;
      }
    })(e, t) ||
    Mn(e, t) ||
    (function () {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function Ke(e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return ft(t);
    })(e) ||
    (function (t) {
      if ((typeof Symbol < 'u' && t[Symbol.iterator] != null) || t['@@iterator'] != null)
        return Array.from(t);
    })(e) ||
    Mn(e) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function Mn(e, t) {
  if (e) {
    if (typeof e == 'string') return ft(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set'
        ? Array.from(e)
        : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? ft(e, t)
        : void 0
    );
  }
}
function ft(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var w,
  Oe,
  Hn,
  At,
  Un,
  We = {},
  wt = [],
  Tr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function z(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Fn(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function V(e, t, n) {
  var r,
    o,
    a,
    i = arguments,
    u = {};
  for (a in t) a == 'key' ? (r = t[a]) : a == 'ref' ? (o = t[a]) : (u[a] = t[a]);
  if (arguments.length > 3) for (n = [n], a = 3; a < arguments.length; a++) n.push(i[a]);
  if ((n != null && (u.children = n), typeof e == 'function' && e.defaultProps != null))
    for (a in e.defaultProps) u[a] === void 0 && (u[a] = e.defaultProps[a]);
  return Se(e, u, r, o, null);
}
function Se(e, t, n, r, o) {
  var a = {
    type: e,
    props: t,
    key: n,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: o ?? ++w.__v,
  };
  return w.vnode != null && w.vnode(a), a;
}
function Z(e) {
  return e.children;
}
function K(e, t) {
  (this.props = e), (this.context = t);
}
function je(e, t) {
  if (t == null) return e.__ ? je(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == 'function' ? je(e) : null;
}
function Bn(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Bn(e);
  }
}
function pt(e) {
  ((!e.__d && (e.__d = !0) && Oe.push(e) && !ze.__r++) || At !== w.debounceRendering) &&
    ((At = w.debounceRendering) || Hn)(ze);
}
function ze() {
  for (var e; (ze.__r = Oe.length); )
    (e = Oe.sort(function (t, n) {
      return t.__v.__b - n.__v.__b;
    })),
      (Oe = []),
      e.some(function (t) {
        var n, r, o, a, i, u;
        t.__d &&
          ((i = (a = (n = t).__v).__e),
          (u = n.__P) &&
            ((r = []),
            ((o = z({}, a)).__v = a.__v + 1),
            Et(
              u,
              a,
              o,
              n.__n,
              u.ownerSVGElement !== void 0,
              a.__h != null ? [i] : null,
              r,
              i ?? je(a),
              a.__h,
            ),
            zn(r, a),
            a.__e != i && Bn(a)));
      });
}
function Vn(e, t, n, r, o, a, i, u, s, l) {
  var c,
    p,
    m,
    d,
    _,
    h,
    g,
    v = (r && r.__k) || wt,
    S = v.length;
  for (n.__k = [], c = 0; c < t.length; c++)
    if (
      (d = n.__k[c] =
        (d = t[c]) == null || typeof d == 'boolean'
          ? null
          : typeof d == 'string' || typeof d == 'number'
          ? Se(null, d, null, null, d)
          : Array.isArray(d)
          ? Se(Z, { children: d }, null, null, null)
          : d.__b > 0
          ? Se(d.type, d.props, d.key, null, d.__v)
          : d) != null
    ) {
      if (
        ((d.__ = n),
        (d.__b = n.__b + 1),
        (m = v[c]) === null || (m && d.key == m.key && d.type === m.type))
      )
        v[c] = void 0;
      else
        for (p = 0; p < S; p++) {
          if ((m = v[p]) && d.key == m.key && d.type === m.type) {
            v[p] = void 0;
            break;
          }
          m = null;
        }
      Et(e, d, (m = m || We), o, a, i, u, s, l),
        (_ = d.__e),
        (p = d.ref) &&
          m.ref != p &&
          (g || (g = []), m.ref && g.push(m.ref, null, d), g.push(p, d.__c || _, d)),
        _ != null
          ? (h == null && (h = _),
            typeof d.type == 'function' && d.__k != null && d.__k === m.__k
              ? (d.__d = s = Kn(d, s, e))
              : (s = Wn(e, d, m, v, _, s)),
            l || n.type !== 'option' ? typeof n.type == 'function' && (n.__d = s) : (e.value = ''))
          : s && m.__e == s && s.parentNode != e && (s = je(m));
    }
  for (n.__e = h, c = S; c--; )
    v[c] != null &&
      (typeof n.type == 'function' &&
        v[c].__e != null &&
        v[c].__e == n.__d &&
        (n.__d = je(r, c + 1)),
      $n(v[c], v[c]));
  if (g) for (c = 0; c < g.length; c++) Jn(g[c], g[++c], g[++c]);
}
function Kn(e, t, n) {
  var r, o;
  for (r = 0; r < e.__k.length; r++)
    (o = e.__k[r]) &&
      ((o.__ = e), (t = typeof o.type == 'function' ? Kn(o, t, n) : Wn(n, o, o, e.__k, o.__e, t)));
  return t;
}
function J(e, t) {
  return (
    (t = t || []),
    e == null ||
      typeof e == 'boolean' ||
      (Array.isArray(e)
        ? e.some(function (n) {
            J(n, t);
          })
        : t.push(e)),
    t
  );
}
function Wn(e, t, n, r, o, a) {
  var i, u, s;
  if (t.__d !== void 0) (i = t.__d), (t.__d = void 0);
  else if (n == null || o != a || o.parentNode == null)
    e: if (a == null || a.parentNode !== e) e.appendChild(o), (i = null);
    else {
      for (u = a, s = 0; (u = u.nextSibling) && s < r.length; s += 2) if (u == o) break e;
      e.insertBefore(o, a), (i = a);
    }
  return i !== void 0 ? i : o.nextSibling;
}
function xt(e, t, n) {
  t[0] === '-'
    ? e.setProperty(t, n)
    : (e[t] = n == null ? '' : typeof n != 'number' || Tr.test(t) ? n : n + 'px');
}
function Ae(e, t, n, r, o) {
  var a;
  e: if (t === 'style')
    if (typeof n == 'string') e.style.cssText = n;
    else {
      if ((typeof r == 'string' && (e.style.cssText = r = ''), r))
        for (t in r) (n && t in n) || xt(e.style, t, '');
      if (n) for (t in n) (r && n[t] === r[t]) || xt(e.style, t, n[t]);
    }
  else if (t[0] === 'o' && t[1] === 'n')
    (a = t !== (t = t.replace(/Capture$/, ''))),
      (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
      e.l || (e.l = {}),
      (e.l[t + a] = n),
      n ? r || e.addEventListener(t, a ? Rt : Nt, a) : e.removeEventListener(t, a ? Rt : Nt, a);
  else if (t !== 'dangerouslySetInnerHTML') {
    if (o) t = t.replace(/xlink[H:h]/, 'h').replace(/sName$/, 's');
    else if (t !== 'href' && t !== 'list' && t !== 'form' && t !== 'download' && t in e)
      try {
        e[t] = n ?? '';
        break e;
      } catch {}
    typeof n == 'function' ||
      (n != null && (n !== !1 || (t[0] === 'a' && t[1] === 'r'))
        ? e.setAttribute(t, n)
        : e.removeAttribute(t));
  }
}
function Nt(e) {
  this.l[e.type + !1](w.event ? w.event(e) : e);
}
function Rt(e) {
  this.l[e.type + !0](w.event ? w.event(e) : e);
}
function Et(e, t, n, r, o, a, i, u, s) {
  var l,
    c,
    p,
    m,
    d,
    _,
    h,
    g,
    v,
    S,
    O,
    y = t.type;
  if (t.constructor !== void 0) return null;
  n.__h != null && ((s = n.__h), (u = t.__e = n.__e), (t.__h = null), (a = [u])),
    (l = w.__b) && l(t);
  try {
    e: if (typeof y == 'function') {
      if (
        ((g = t.props),
        (v = (l = y.contextType) && r[l.__c]),
        (S = l ? (v ? v.props.value : l.__) : r),
        n.__c
          ? (h = (c = t.__c = n.__c).__ = c.__E)
          : ('prototype' in y && y.prototype.render
              ? (t.__c = c = new y(g, S))
              : ((t.__c = c = new K(g, S)), (c.constructor = y), (c.render = qr)),
            v && v.sub(c),
            (c.props = g),
            c.state || (c.state = {}),
            (c.context = S),
            (c.__n = r),
            (p = c.__d = !0),
            (c.__h = [])),
        c.__s == null && (c.__s = c.state),
        y.getDerivedStateFromProps != null &&
          (c.__s == c.state && (c.__s = z({}, c.__s)),
          z(c.__s, y.getDerivedStateFromProps(g, c.__s))),
        (m = c.props),
        (d = c.state),
        p)
      )
        y.getDerivedStateFromProps == null &&
          c.componentWillMount != null &&
          c.componentWillMount(),
          c.componentDidMount != null && c.__h.push(c.componentDidMount);
      else {
        if (
          (y.getDerivedStateFromProps == null &&
            g !== m &&
            c.componentWillReceiveProps != null &&
            c.componentWillReceiveProps(g, S),
          (!c.__e &&
            c.shouldComponentUpdate != null &&
            c.shouldComponentUpdate(g, c.__s, S) === !1) ||
            t.__v === n.__v)
        ) {
          (c.props = g),
            (c.state = c.__s),
            t.__v !== n.__v && (c.__d = !1),
            (c.__v = t),
            (t.__e = n.__e),
            (t.__k = n.__k),
            c.__h.length && i.push(c);
          break e;
        }
        c.componentWillUpdate != null && c.componentWillUpdate(g, c.__s, S),
          c.componentDidUpdate != null &&
            c.__h.push(function () {
              c.componentDidUpdate(m, d, _);
            });
      }
      (c.context = S),
        (c.props = g),
        (c.state = c.__s),
        (l = w.__r) && l(t),
        (c.__d = !1),
        (c.__v = t),
        (c.__P = e),
        (l = c.render(c.props, c.state, c.context)),
        (c.state = c.__s),
        c.getChildContext != null && (r = z(z({}, r), c.getChildContext())),
        p || c.getSnapshotBeforeUpdate == null || (_ = c.getSnapshotBeforeUpdate(m, d)),
        (O = l != null && l.type === Z && l.key == null ? l.props.children : l),
        Vn(e, Array.isArray(O) ? O : [O], t, n, r, o, a, i, u, s),
        (c.base = t.__e),
        (t.__h = null),
        c.__h.length && i.push(c),
        h && (c.__E = c.__ = null),
        (c.__e = !1);
    } else
      a == null && t.__v === n.__v
        ? ((t.__k = n.__k), (t.__e = n.__e))
        : (t.__e = Lr(n.__e, t, n, r, o, a, i, s));
    (l = w.diffed) && l(t);
  } catch (b) {
    (t.__v = null),
      (s || a != null) && ((t.__e = u), (t.__h = !!s), (a[a.indexOf(u)] = null)),
      w.__e(b, t, n);
  }
}
function zn(e, t) {
  w.__c && w.__c(t, e),
    e.some(function (n) {
      try {
        (e = n.__h),
          (n.__h = []),
          e.some(function (r) {
            r.call(n);
          });
      } catch (r) {
        w.__e(r, n.__v);
      }
    });
}
function Lr(e, t, n, r, o, a, i, u) {
  var s,
    l,
    c,
    p,
    m = n.props,
    d = t.props,
    _ = t.type,
    h = 0;
  if ((_ === 'svg' && (o = !0), a != null)) {
    for (; h < a.length; h++)
      if ((s = a[h]) && (s === e || (_ ? s.localName == _ : s.nodeType == 3))) {
        (e = s), (a[h] = null);
        break;
      }
  }
  if (e == null) {
    if (_ === null) return document.createTextNode(d);
    (e = o
      ? document.createElementNS('http://www.w3.org/2000/svg', _)
      : document.createElement(_, d.is && d)),
      (a = null),
      (u = !1);
  }
  if (_ === null) m === d || (u && e.data === d) || (e.data = d);
  else {
    if (
      ((a = a && wt.slice.call(e.childNodes)),
      (l = (m = n.props || We).dangerouslySetInnerHTML),
      (c = d.dangerouslySetInnerHTML),
      !u)
    ) {
      if (a != null)
        for (m = {}, p = 0; p < e.attributes.length; p++)
          m[e.attributes[p].name] = e.attributes[p].value;
      (c || l) &&
        ((c && ((l && c.__html == l.__html) || c.__html === e.innerHTML)) ||
          (e.innerHTML = (c && c.__html) || ''));
    }
    if (
      ((function (g, v, S, O, y) {
        var b;
        for (b in S) b === 'children' || b === 'key' || b in v || Ae(g, b, null, S[b], O);
        for (b in v)
          (y && typeof v[b] != 'function') ||
            b === 'children' ||
            b === 'key' ||
            b === 'value' ||
            b === 'checked' ||
            S[b] === v[b] ||
            Ae(g, b, v[b], S[b], O);
      })(e, d, m, o, u),
      c)
    )
      t.__k = [];
    else if (
      ((h = t.props.children),
      Vn(e, Array.isArray(h) ? h : [h], t, n, r, o && _ !== 'foreignObject', a, i, e.firstChild, u),
      a != null)
    )
      for (h = a.length; h--; ) a[h] != null && Fn(a[h]);
    u ||
      ('value' in d &&
        (h = d.value) !== void 0 &&
        (h !== e.value || (_ === 'progress' && !h)) &&
        Ae(e, 'value', h, m.value, !1),
      'checked' in d &&
        (h = d.checked) !== void 0 &&
        h !== e.checked &&
        Ae(e, 'checked', h, m.checked, !1));
  }
  return e;
}
function Jn(e, t, n) {
  try {
    typeof e == 'function' ? e(t) : (e.current = t);
  } catch (r) {
    w.__e(r, n);
  }
}
function $n(e, t, n) {
  var r, o, a;
  if (
    (w.unmount && w.unmount(e),
    (r = e.ref) && ((r.current && r.current !== e.__e) || Jn(r, null, t)),
    n || typeof e.type == 'function' || (n = (o = e.__e) != null),
    (e.__e = e.__d = void 0),
    (r = e.__c) != null)
  ) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (i) {
        w.__e(i, t);
      }
    r.base = r.__P = null;
  }
  if ((r = e.__k)) for (a = 0; a < r.length; a++) r[a] && $n(r[a], t, n);
  o != null && Fn(o);
}
function qr(e, t, n) {
  return this.constructor(e, n);
}
function Pe(e, t, n) {
  var r, o, a;
  w.__ && w.__(e, t),
    (o = (r = typeof n == 'function') ? null : (n && n.__k) || t.__k),
    (a = []),
    Et(
      t,
      (e = ((!r && n) || t).__k = V(Z, null, [e])),
      o || We,
      We,
      t.ownerSVGElement !== void 0,
      !r && n ? [n] : o ? null : t.firstChild ? wt.slice.call(t.childNodes) : null,
      a,
      !r && n ? n : o ? o.__e : t.firstChild,
      r,
    ),
    zn(a, e);
}
function Qn(e, t) {
  Pe(e, t, Qn);
}
function Mr(e, t, n) {
  var r,
    o,
    a,
    i = arguments,
    u = z({}, e.props);
  for (a in t) a == 'key' ? (r = t[a]) : a == 'ref' ? (o = t[a]) : (u[a] = t[a]);
  if (arguments.length > 3) for (n = [n], a = 3; a < arguments.length; a++) n.push(i[a]);
  return n != null && (u.children = n), Se(e.type, u, r || e.key, o || e.ref, null);
}
(w = {
  __e: function (e, t) {
    for (var n, r, o; (t = t.__); )
      if ((n = t.__c) && !n.__)
        try {
          if (
            ((r = n.constructor) &&
              r.getDerivedStateFromError != null &&
              (n.setState(r.getDerivedStateFromError(e)), (o = n.__d)),
            n.componentDidCatch != null && (n.componentDidCatch(e), (o = n.__d)),
            o)
          )
            return (n.__E = n);
        } catch (a) {
          e = a;
        }
    throw e;
  },
  __v: 0,
}),
  (K.prototype.setState = function (e, t) {
    var n;
    (n = this.__s != null && this.__s !== this.state ? this.__s : (this.__s = z({}, this.state))),
      typeof e == 'function' && (e = e(z({}, n), this.props)),
      e && z(n, e),
      e != null && this.__v && (t && this.__h.push(t), pt(this));
  }),
  (K.prototype.forceUpdate = function (e) {
    this.__v && ((this.__e = !0), e && this.__h.push(e), pt(this));
  }),
  (K.prototype.render = Z),
  (Oe = []),
  (Hn = typeof Promise == 'function' ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
  (ze.__r = 0),
  (Un = 0);
var le,
  T,
  Tt,
  ue = 0,
  mt = [],
  Lt = w.__b,
  qt = w.__r,
  Mt = w.diffed,
  Ht = w.__c,
  Ut = w.unmount;
function ke(e, t) {
  w.__h && w.__h(T, e, ue || t), (ue = 0);
  var n = T.__H || (T.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function Zn(e) {
  return (ue = 1), Yn(Xn, e);
}
function Yn(e, t, n) {
  var r = ke(le++, 2);
  return (
    (r.t = e),
    r.__c ||
      ((r.__ = [
        n ? n(t) : Xn(void 0, t),
        function (o) {
          var a = r.t(r.__[0], o);
          r.__[0] !== a && ((r.__ = [a, r.__[1]]), r.__c.setState({}));
        },
      ]),
      (r.__c = T)),
    r.__
  );
}
function Gn(e, t) {
  var n = ke(le++, 3);
  !w.__s && jt(n.__H, t) && ((n.__ = e), (n.__H = t), T.__H.__h.push(n));
}
function Ft(e, t) {
  var n = ke(le++, 4);
  !w.__s && jt(n.__H, t) && ((n.__ = e), (n.__H = t), T.__h.push(n));
}
function rt(e, t) {
  var n = ke(le++, 7);
  return jt(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__;
}
function Hr() {
  mt.forEach(function (e) {
    if (e.__P)
      try {
        e.__H.__h.forEach(He), e.__H.__h.forEach(dt), (e.__H.__h = []);
      } catch (t) {
        (e.__H.__h = []), w.__e(t, e.__v);
      }
  }),
    (mt = []);
}
(w.__b = function (e) {
  (T = null), Lt && Lt(e);
}),
  (w.__r = function (e) {
    qt && qt(e), (le = 0);
    var t = (T = e.__c).__H;
    t && (t.__h.forEach(He), t.__h.forEach(dt), (t.__h = []));
  }),
  (w.diffed = function (e) {
    Mt && Mt(e);
    var t = e.__c;
    t &&
      t.__H &&
      t.__H.__h.length &&
      ((mt.push(t) !== 1 && Tt === w.requestAnimationFrame) ||
        (
          (Tt = w.requestAnimationFrame) ||
          function (n) {
            var r,
              o = function () {
                clearTimeout(a), Bt && cancelAnimationFrame(r), setTimeout(n);
              },
              a = setTimeout(o, 100);
            Bt && (r = requestAnimationFrame(o));
          }
        )(Hr)),
      (T = void 0);
  }),
  (w.__c = function (e, t) {
    t.some(function (n) {
      try {
        n.__h.forEach(He),
          (n.__h = n.__h.filter(function (r) {
            return !r.__ || dt(r);
          }));
      } catch (r) {
        t.some(function (o) {
          o.__h && (o.__h = []);
        }),
          (t = []),
          w.__e(r, n.__v);
      }
    }),
      Ht && Ht(e, t);
  }),
  (w.unmount = function (e) {
    Ut && Ut(e);
    var t = e.__c;
    if (t && t.__H)
      try {
        t.__H.__.forEach(He);
      } catch (n) {
        w.__e(n, t.__v);
      }
  });
var Bt = typeof requestAnimationFrame == 'function';
function He(e) {
  var t = T;
  typeof e.__c == 'function' && e.__c(), (T = t);
}
function dt(e) {
  var t = T;
  (e.__c = e.__()), (T = t);
}
function jt(e, t) {
  return (
    !e ||
    e.length !== t.length ||
    t.some(function (n, r) {
      return n !== e[r];
    })
  );
}
function Xn(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function er(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function ht(e, t) {
  for (var n in e) if (n !== '__source' && !(n in t)) return !0;
  for (var r in t) if (r !== '__source' && e[r] !== t[r]) return !0;
  return !1;
}
function vt(e) {
  this.props = e;
}
((vt.prototype = new K()).isPureReactComponent = !0),
  (vt.prototype.shouldComponentUpdate = function (e, t) {
    return ht(this.props, e) || ht(this.state, t);
  });
var Vt = w.__b;
w.__b = function (e) {
  e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)), Vt && Vt(e);
};
var Ur = (typeof Symbol < 'u' && Symbol.for && Symbol.for('react.forward_ref')) || 3911,
  Kt = function (e, t) {
    return e == null ? null : J(J(e).map(t));
  },
  Fr = {
    map: Kt,
    forEach: Kt,
    count: function (e) {
      return e ? J(e).length : 0;
    },
    only: function (e) {
      var t = J(e);
      if (t.length !== 1) throw 'Children.only';
      return t[0];
    },
    toArray: J,
  },
  Br = w.__e;
function Ue() {
  (this.__u = 0), (this.t = null), (this.__b = null);
}
function tr(e) {
  var t = e.__.__c;
  return t && t.__e && t.__e(e);
}
function ge() {
  (this.u = null), (this.o = null);
}
(w.__e = function (e, t, n) {
  if (e.then) {
    for (var r, o = t; (o = o.__); )
      if ((r = o.__c) && r.__c)
        return t.__e == null && ((t.__e = n.__e), (t.__k = n.__k)), r.__c(e, t);
  }
  Br(e, t, n);
}),
  ((Ue.prototype = new K()).__c = function (e, t) {
    var n = t.__c,
      r = this;
    r.t == null && (r.t = []), r.t.push(n);
    var o = tr(r.__v),
      a = !1,
      i = function () {
        a || ((a = !0), (n.componentWillUnmount = n.__c), o ? o(u) : u());
      };
    (n.__c = n.componentWillUnmount),
      (n.componentWillUnmount = function () {
        i(), n.__c && n.__c();
      });
    var u = function () {
        if (!--r.__u) {
          if (r.state.__e) {
            var l = r.state.__e;
            r.__v.__k[0] = (function p(m, d, _) {
              return (
                m &&
                  ((m.__v = null),
                  (m.__k =
                    m.__k &&
                    m.__k.map(function (h) {
                      return p(h, d, _);
                    })),
                  m.__c &&
                    m.__c.__P === d &&
                    (m.__e && _.insertBefore(m.__e, m.__d), (m.__c.__e = !0), (m.__c.__P = _))),
                m
              );
            })(l, l.__c.__P, l.__c.__O);
          }
          var c;
          for (r.setState({ __e: (r.__b = null) }); (c = r.t.pop()); ) c.forceUpdate();
        }
      },
      s = t.__h === !0;
    r.__u++ || s || r.setState({ __e: (r.__b = r.__v.__k[0]) }), e.then(i, i);
  }),
  (Ue.prototype.componentWillUnmount = function () {
    this.t = [];
  }),
  (Ue.prototype.render = function (e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement('div'),
          r = this.__v.__k[0].__c;
        this.__v.__k[0] = (function a(i, u, s) {
          return (
            i &&
              (i.__c &&
                i.__c.__H &&
                (i.__c.__H.__.forEach(function (l) {
                  typeof l.__c == 'function' && l.__c();
                }),
                (i.__c.__H = null)),
              (i = er({}, i)).__c != null && (i.__c.__P === s && (i.__c.__P = u), (i.__c = null)),
              (i.__k =
                i.__k &&
                i.__k.map(function (l) {
                  return a(l, u, s);
                }))),
            i
          );
        })(this.__b, n, (r.__O = r.__P));
      }
      this.__b = null;
    }
    var o = t.__e && V(Z, null, e.fallback);
    return o && (o.__h = null), [V(Z, null, t.__e ? null : e.children), o];
  });
var Wt = function (e, t, n) {
  if (
    (++n[1] === n[0] && e.o.delete(t),
    e.props.revealOrder && (e.props.revealOrder[0] !== 't' || !e.o.size))
  )
    for (n = e.u; n; ) {
      for (; n.length > 3; ) n.pop()();
      if (n[1] < n[0]) break;
      e.u = n = n[2];
    }
};
function Vr(e) {
  return (
    (this.getChildContext = function () {
      return e.context;
    }),
    e.children
  );
}
function Kr(e) {
  var t = this,
    n = e.i;
  (t.componentWillUnmount = function () {
    Pe(null, t.l), (t.l = null), (t.i = null);
  }),
    t.i && t.i !== n && t.componentWillUnmount(),
    e.__v
      ? (t.l ||
          ((t.i = n),
          (t.l = {
            nodeType: 1,
            parentNode: n,
            childNodes: [],
            appendChild: function (r) {
              this.childNodes.push(r), t.i.appendChild(r);
            },
            insertBefore: function (r, o) {
              this.childNodes.push(r), t.i.appendChild(r);
            },
            removeChild: function (r) {
              this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.i.removeChild(r);
            },
          })),
        Pe(V(Vr, { context: t.context }, e.__v), t.l))
      : t.l && t.componentWillUnmount();
}
function nr(e, t) {
  return V(Kr, { __v: e, i: t });
}
((ge.prototype = new K()).__e = function (e) {
  var t = this,
    n = tr(t.__v),
    r = t.o.get(e);
  return (
    r[0]++,
    function (o) {
      var a = function () {
        t.props.revealOrder ? (r.push(o), Wt(t, e, r)) : o();
      };
      n ? n(a) : a();
    }
  );
}),
  (ge.prototype.render = function (e) {
    (this.u = null), (this.o = new Map());
    var t = J(e.children);
    e.revealOrder && e.revealOrder[0] === 'b' && t.reverse();
    for (var n = t.length; n--; ) this.o.set(t[n], (this.u = [1, 0, this.u]));
    return e.children;
  }),
  (ge.prototype.componentDidUpdate = ge.prototype.componentDidMount =
    function () {
      var e = this;
      this.o.forEach(function (t, n) {
        Wt(e, n, t);
      });
    });
var rr = (typeof Symbol < 'u' && Symbol.for && Symbol.for('react.element')) || 60103,
  Wr =
    /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  zr = function (e) {
    return (typeof Symbol < 'u' && Ee(Symbol()) == 'symbol' ? /fil|che|rad/i : /fil|che|ra/i).test(
      e,
    );
  };
function or(e, t, n) {
  return (
    t.__k == null && (t.textContent = ''), Pe(e, t), typeof n == 'function' && n(), e ? e.__c : null
  );
}
(K.prototype.isReactComponent = {}),
  ['componentWillMount', 'componentWillReceiveProps', 'componentWillUpdate'].forEach(function (e) {
    Object.defineProperty(K.prototype, e, {
      configurable: !0,
      get: function () {
        return this['UNSAFE_' + e];
      },
      set: function (t) {
        Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
      },
    });
  });
var zt = w.event;
function Jr() {}
function $r() {
  return this.cancelBubble;
}
function Qr() {
  return this.defaultPrevented;
}
w.event = function (e) {
  return (
    zt && (e = zt(e)),
    (e.persist = Jr),
    (e.isPropagationStopped = $r),
    (e.isDefaultPrevented = Qr),
    (e.nativeEvent = e)
  );
};
var ar,
  Jt = {
    configurable: !0,
    get: function () {
      return this.class;
    },
  },
  $t = w.vnode;
w.vnode = function (e) {
  var t = e.type,
    n = e.props,
    r = n;
  if (typeof t == 'string') {
    for (var o in ((r = {}), n)) {
      var a = n[o];
      (o === 'value' && 'defaultValue' in n && a == null) ||
        (o === 'defaultValue' && 'value' in n && n.value == null
          ? (o = 'value')
          : o === 'download' && a === !0
          ? (a = '')
          : /ondoubleclick/i.test(o)
          ? (o = 'ondblclick')
          : /^onchange(textarea|input)/i.test(o + t) && !zr(n.type)
          ? (o = 'oninput')
          : /^on(Ani|Tra|Tou|BeforeInp)/.test(o)
          ? (o = o.toLowerCase())
          : Wr.test(o)
          ? (o = o.replace(/[A-Z0-9]/, '-$&').toLowerCase())
          : a === null && (a = void 0),
        (r[o] = a));
    }
    t == 'select' &&
      r.multiple &&
      Array.isArray(r.value) &&
      (r.value = J(n.children).forEach(function (i) {
        i.props.selected = r.value.indexOf(i.props.value) != -1;
      })),
      t == 'select' &&
        r.defaultValue != null &&
        (r.value = J(n.children).forEach(function (i) {
          i.props.selected = r.multiple
            ? r.defaultValue.indexOf(i.props.value) != -1
            : r.defaultValue == i.props.value;
        })),
      (e.props = r);
  }
  t &&
    n.class != n.className &&
    ((Jt.enumerable = 'className' in n),
    n.className != null && (r.class = n.className),
    Object.defineProperty(r, 'className', Jt)),
    (e.$$typeof = rr),
    $t && $t(e);
};
var Qt = w.__r;
w.__r = function (e) {
  Qt && Qt(e), (ar = e.__c);
};
var Zr = {
  ReactCurrentDispatcher: {
    current: {
      readContext: function (e) {
        return ar.__n[e.__c].props.value;
      },
    },
  },
};
(typeof performance > 'u' ? 'undefined' : Ee(performance)) == 'object' &&
  typeof performance.now == 'function' &&
  performance.now.bind(performance);
function Zt(e) {
  return !!e && e.$$typeof === rr;
}
var f = {
  useState: Zn,
  useReducer: Yn,
  useEffect: Gn,
  useLayoutEffect: Ft,
  useRef: function (e) {
    return (
      (ue = 5),
      rt(function () {
        return { current: e };
      }, [])
    );
  },
  useImperativeHandle: function (e, t, n) {
    (ue = 6),
      Ft(
        function () {
          typeof e == 'function' ? e(t()) : e && (e.current = t());
        },
        n == null ? n : n.concat(e),
      );
  },
  useMemo: rt,
  useCallback: function (e, t) {
    return (
      (ue = 8),
      rt(function () {
        return e;
      }, t)
    );
  },
  useContext: function (e) {
    var t = T.context[e.__c],
      n = ke(le++, 9);
    return (n.__c = e), t ? (n.__ == null && ((n.__ = !0), t.sub(T)), t.props.value) : e.__;
  },
  useDebugValue: function (e, t) {
    w.useDebugValue && w.useDebugValue(t ? t(e) : e);
  },
  version: '16.8.0',
  Children: Fr,
  render: or,
  hydrate: function (e, t, n) {
    return Qn(e, t), typeof n == 'function' && n(), e ? e.__c : null;
  },
  unmountComponentAtNode: function (e) {
    return !!e.__k && (Pe(null, e), !0);
  },
  createPortal: nr,
  createElement: V,
  createContext: function (e, t) {
    var n = {
      __c: (t = '__cC' + Un++),
      __: e,
      Consumer: function (r, o) {
        return r.children(o);
      },
      Provider: function (r) {
        var o, a;
        return (
          this.getChildContext ||
            ((o = []),
            ((a = {})[t] = this),
            (this.getChildContext = function () {
              return a;
            }),
            (this.shouldComponentUpdate = function (i) {
              this.props.value !== i.value && o.some(pt);
            }),
            (this.sub = function (i) {
              o.push(i);
              var u = i.componentWillUnmount;
              i.componentWillUnmount = function () {
                o.splice(o.indexOf(i), 1), u && u.call(i);
              };
            })),
          r.children
        );
      },
    };
    return (n.Provider.__ = n.Consumer.contextType = n);
  },
  createFactory: function (e) {
    return V.bind(null, e);
  },
  cloneElement: function (e) {
    return Zt(e) ? Mr.apply(null, arguments) : e;
  },
  createRef: function () {
    return { current: null };
  },
  Fragment: Z,
  isValidElement: Zt,
  findDOMNode: function (e) {
    return (e && (e.base || (e.nodeType === 1 && e))) || null;
  },
  Component: K,
  PureComponent: vt,
  memo: function (e, t) {
    function n(o) {
      var a = this.props.ref,
        i = a == o.ref;
      return (
        !i && a && (a.call ? a(null) : (a.current = null)),
        t ? !t(this.props, o) || !i : ht(this.props, o)
      );
    }
    function r(o) {
      return (this.shouldComponentUpdate = n), V(e, o);
    }
    return (
      (r.displayName = 'Memo(' + (e.displayName || e.name) + ')'),
      (r.prototype.isReactComponent = !0),
      (r.__f = !0),
      r
    );
  },
  forwardRef: function (e) {
    function t(n, r) {
      var o = er({}, n);
      return (
        delete o.ref, e(o, (r = n.ref || r) && (Ee(r) != 'object' || 'current' in r) ? r : null)
      );
    }
    return (
      (t.$$typeof = Ur),
      (t.render = t),
      (t.prototype.isReactComponent = t.__f = !0),
      (t.displayName = 'ForwardRef(' + (e.displayName || e.name) + ')'),
      t
    );
  },
  unstable_batchedUpdates: function (e, t) {
    return e(t);
  },
  StrictMode: Z,
  Suspense: Ue,
  SuspenseList: ge,
  lazy: function (e) {
    var t, n, r;
    function o(a) {
      if (
        (t ||
          (t = e()).then(
            function (i) {
              n = i.default || i;
            },
            function (i) {
              r = i;
            },
          ),
        r)
      )
        throw r;
      if (!n) throw t;
      return V(n, a);
    }
    return (o.displayName = 'Lazy'), (o.__f = !0), o;
  },
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Zr,
};
function Yr() {
  return f.createElement(
    'svg',
    { width: '15', height: '15', className: 'DocSearch-Control-Key-Icon' },
    f.createElement('path', {
      d: 'M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953',
      strokeWidth: '1.2',
      stroke: 'currentColor',
      fill: 'none',
      strokeLinecap: 'square',
    }),
  );
}
function ir() {
  return f.createElement(
    'svg',
    { width: '20', height: '20', className: 'DocSearch-Search-Icon', viewBox: '0 0 20 20' },
    f.createElement('path', {
      d: 'M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z',
      stroke: 'currentColor',
      fill: 'none',
      fillRule: 'evenodd',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }),
  );
}
var Gr = ['translations'];
function yt() {
  return (
    (yt =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    yt.apply(this, arguments)
  );
}
function Xr(e, t) {
  return (
    (function (n) {
      if (Array.isArray(n)) return n;
    })(e) ||
    (function (n, r) {
      var o = n == null ? null : (typeof Symbol < 'u' && n[Symbol.iterator]) || n['@@iterator'];
      if (o != null) {
        var a,
          i,
          u = [],
          s = !0,
          l = !1;
        try {
          for (
            o = o.call(n);
            !(s = (a = o.next()).done) && (u.push(a.value), !r || u.length !== r);
            s = !0
          );
        } catch (c) {
          (l = !0), (i = c);
        } finally {
          try {
            s || o.return == null || o.return();
          } finally {
            if (l) throw i;
          }
        }
        return u;
      }
    })(e, t) ||
    (function (n, r) {
      if (n) {
        if (typeof n == 'string') return Yt(n, r);
        var o = Object.prototype.toString.call(n).slice(8, -1);
        if (
          (o === 'Object' && n.constructor && (o = n.constructor.name), o === 'Map' || o === 'Set')
        )
          return Array.from(n);
        if (o === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
          return Yt(n, r);
      }
    })(e, t) ||
    (function () {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function Yt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function eo(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (i, u) {
      if (i == null) return {};
      var s,
        l,
        c = {},
        p = Object.keys(i);
      for (l = 0; l < p.length; l++) (s = p[l]), u.indexOf(s) >= 0 || (c[s] = i[s]);
      return c;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
var to = f.forwardRef(function (e, t) {
  var n = e.translations,
    r = n === void 0 ? {} : n,
    o = eo(e, Gr),
    a = r.buttonText,
    i = a === void 0 ? 'Search' : a,
    u = r.buttonAriaLabel,
    s = u === void 0 ? 'Search' : u,
    l = Xr(Zn(null), 2),
    c = l[0],
    p = l[1];
  return (
    Gn(function () {
      typeof navigator < 'u' &&
        (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? p('⌘') : p('Ctrl'));
    }, []),
    f.createElement(
      'button',
      yt({ type: 'button', className: 'DocSearch DocSearch-Button', 'aria-label': s }, o, {
        ref: t,
      }),
      f.createElement(
        'span',
        { className: 'DocSearch-Button-Container' },
        f.createElement(ir, null),
        f.createElement('span', { className: 'DocSearch-Button-Placeholder' }, i),
      ),
      f.createElement(
        'span',
        { className: 'DocSearch-Button-Keys' },
        c !== null &&
          f.createElement(
            f.Fragment,
            null,
            f.createElement(
              'kbd',
              { className: 'DocSearch-Button-Key' },
              c === 'Ctrl' ? f.createElement(Yr, null) : c,
            ),
            f.createElement('kbd', { className: 'DocSearch-Button-Key' }, 'K'),
          ),
      ),
    )
  );
});
function Ie(e) {
  return e.reduce(function (t, n) {
    return t.concat(n);
  }, []);
}
var no = 0;
function _t(e) {
  return e.collections.length === 0
    ? 0
    : e.collections.reduce(function (t, n) {
        return t + n.items.length;
      }, 0);
}
var cr = function () {},
  ro = [{ segment: 'autocomplete-core', version: '1.7.2' }];
function Fe(e, t) {
  var n = t;
  return {
    then: function (r, o) {
      return Fe(e.then(xe(r, n, e), xe(o, n, e)), n);
    },
    catch: function (r) {
      return Fe(e.catch(xe(r, n, e)), n);
    },
    finally: function (r) {
      return (
        r && n.onCancelList.push(r),
        Fe(
          e.finally(
            xe(
              r &&
                function () {
                  return (n.onCancelList = []), r();
                },
              n,
              e,
            ),
          ),
          n,
        )
      );
    },
    cancel: function () {
      n.isCanceled = !0;
      var r = n.onCancelList;
      (n.onCancelList = []),
        r.forEach(function (o) {
          o();
        });
    },
    isCanceled: function () {
      return n.isCanceled === !0;
    },
  };
}
function Gt(e) {
  return Fe(e, { isCanceled: !1, onCancelList: [] });
}
function xe(e, t, n) {
  return e
    ? function (r) {
        return t.isCanceled ? r : e(r);
      }
    : n;
}
function Xt(e, t, n, r) {
  if (!n) return null;
  if (e < 0 && (t === null || (r !== null && t === 0))) return n + e;
  var o = (t === null ? -1 : t) + e;
  return o <= -1 || o >= n ? (r === null ? null : 0) : o;
}
function en(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function oo(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function ao(e, t) {
  var n = [];
  return Promise.resolve(e(t)).then(function (r) {
    return Promise.all(
      r
        .filter(function (o) {
          return Boolean(o);
        })
        .map(function (o) {
          if ((o.sourceId, n.includes(o.sourceId)))
            throw new Error(
              '[Autocomplete] The `sourceId` '.concat(
                JSON.stringify(o.sourceId),
                ' is not unique.',
              ),
            );
          n.push(o.sourceId);
          var a = (function (i) {
            for (var u = 1; u < arguments.length; u++) {
              var s = arguments[u] != null ? arguments[u] : {};
              u % 2
                ? en(Object(s), !0).forEach(function (l) {
                    oo(i, l, s[l]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                : en(Object(s)).forEach(function (l) {
                    Object.defineProperty(i, l, Object.getOwnPropertyDescriptor(s, l));
                  });
            }
            return i;
          })(
            {
              getItemInputValue: function (i) {
                return i.state.query;
              },
              getItemUrl: function () {},
              onSelect: function (i) {
                (0, i.setIsOpen)(!1);
              },
              onActive: cr,
            },
            o,
          );
          return Promise.resolve(a);
        }),
    );
  });
}
function ie(e) {
  var t = (function (o) {
    var a = o.collections
      .map(function (i) {
        return i.items.length;
      })
      .reduce(function (i, u, s) {
        var l = (i[s - 1] || 0) + u;
        return i.push(l), i;
      }, [])
      .reduce(function (i, u) {
        return u <= o.activeItemId ? i + 1 : i;
      }, 0);
    return o.collections[a];
  })(e);
  if (!t) return null;
  var n =
      t.items[
        (function (o) {
          for (var a = o.state, i = o.collection, u = !1, s = 0, l = 0; u === !1; ) {
            var c = a.collections[s];
            if (c === i) {
              u = !0;
              break;
            }
            (l += c.items.length), s++;
          }
          return a.activeItemId - l;
        })({ state: e, collection: t })
      ],
    r = t.source;
  return {
    item: n,
    itemInputValue: r.getItemInputValue({ item: n, state: e }),
    itemUrl: r.getItemUrl({ item: n, state: e }),
    source: r,
  };
}
var io = /((gt|sm)-|galaxy nexus)|samsung[- ]/i;
function tn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Ne(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? tn(Object(n), !0).forEach(function (r) {
          co(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : tn(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function co(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function nn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function uo(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function lo(e, t, n) {
  var r,
    o = t.initialState;
  return {
    getState: function () {
      return o;
    },
    dispatch: function (a, i) {
      var u = (function (s) {
        for (var l = 1; l < arguments.length; l++) {
          var c = arguments[l] != null ? arguments[l] : {};
          l % 2
            ? nn(Object(c), !0).forEach(function (p) {
                uo(s, p, c[p]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(c))
            : nn(Object(c)).forEach(function (p) {
                Object.defineProperty(s, p, Object.getOwnPropertyDescriptor(c, p));
              });
        }
        return s;
      })({}, o);
      (o = e(o, { type: a, props: t, payload: i })), n({ state: o, prevState: u });
    },
    pendingRequests:
      ((r = []),
      {
        add: function (a) {
          return (
            r.push(a),
            a.finally(function () {
              r = r.filter(function (i) {
                return i !== a;
              });
            })
          );
        },
        cancelAll: function () {
          r.forEach(function (a) {
            return a.cancel();
          });
        },
        isEmpty: function () {
          return r.length === 0;
        },
      }),
  };
}
function rn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Re(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? rn(Object(n), !0).forEach(function (r) {
          so(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : rn(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function so(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function fo(e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return ot(t);
    })(e) ||
    (function (t) {
      if ((typeof Symbol < 'u' && t[Symbol.iterator] != null) || t['@@iterator'] != null)
        return Array.from(t);
    })(e) ||
    (function (t, n) {
      if (t) {
        if (typeof t == 'string') return ot(t, n);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (
          (r === 'Object' && t.constructor && (r = t.constructor.name), r === 'Map' || r === 'Set')
        )
          return Array.from(t);
        if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
          return ot(t, n);
      }
    })(e) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function ot(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function on(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function re(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? on(Object(n), !0).forEach(function (r) {
          po(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : on(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function po(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function an(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Te(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? an(Object(n), !0).forEach(function (r) {
          ur(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : an(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function ur(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function mo(e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return at(t);
    })(e) ||
    (function (t) {
      if ((typeof Symbol < 'u' && t[Symbol.iterator] != null) || t['@@iterator'] != null)
        return Array.from(t);
    })(e) ||
    (function (t, n) {
      if (t) {
        if (typeof t == 'string') return at(t, n);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (
          (r === 'Object' && t.constructor && (r = t.constructor.name), r === 'Map' || r === 'Set')
        )
          return Array.from(t);
        if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
          return at(t, n);
      }
    })(e) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function at(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function cn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function un(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? cn(Object(n), !0).forEach(function (r) {
          ho(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : cn(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function ho(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function Le(e) {
  return Boolean(e.execute);
}
function vo(e, t) {
  return (
    (n = e),
    Boolean(n == null ? void 0 : n.execute)
      ? un(
          un({}, e),
          {},
          {
            requests: e.queries.map(function (r) {
              return { query: r, sourceId: t, transformResponse: e.transformResponse };
            }),
          },
        )
      : { items: e, sourceId: t }
  );
  var n;
}
function yo(e) {
  var t = e
    .reduce(function (n, r) {
      if (!Le(r)) return n.push(r), n;
      var o = r.searchClient,
        a = r.execute,
        i = r.requesterId,
        u = r.requests,
        s = n.find(function (p) {
          return Le(r) && Le(p) && p.searchClient === o && Boolean(i) && p.requesterId === i;
        });
      if (s) {
        var l;
        (l = s.items).push.apply(l, mo(u));
      } else {
        var c = { execute: a, requesterId: i, items: u, searchClient: o };
        n.push(c);
      }
      return n;
    }, [])
    .map(function (n) {
      if (!Le(n)) return Promise.resolve(n);
      var r = n,
        o = r.execute,
        a = r.items;
      return o({ searchClient: r.searchClient, requests: a });
    });
  return Promise.all(t).then(function (n) {
    return Ie(n);
  });
}
function _o(e, t) {
  return t.map(function (n) {
    var r = e.filter(function (u) {
        return u.sourceId === n.sourceId;
      }),
      o = r.map(function (u) {
        return u.items;
      }),
      a = r[0].transformResponse,
      i = a
        ? a(
            (function (u) {
              var s = u.map(function (l) {
                var c;
                return Ne(
                  Ne({}, l),
                  {},
                  {
                    hits:
                      (c = l.hits) === null || c === void 0
                        ? void 0
                        : c.map(function (p) {
                            return Ne(
                              Ne({}, p),
                              {},
                              {
                                __autocomplete_indexName: l.index,
                                __autocomplete_queryID: l.queryID,
                              },
                            );
                          }),
                  },
                );
              });
              return {
                results: s,
                hits: s
                  .map(function (l) {
                    return l.hits;
                  })
                  .filter(Boolean),
                facetHits: s
                  .map(function (l) {
                    var c;
                    return (c = l.facetHits) === null || c === void 0
                      ? void 0
                      : c.map(function (p) {
                          return {
                            label: p.value,
                            count: p.count,
                            _highlightResult: { label: { value: p.highlighted } },
                          };
                        });
                  })
                  .filter(Boolean),
              };
            })(o),
          )
        : o;
    return (
      i.every(Boolean),
      'The `getItems` function from source "'
        .concat(n.sourceId, '" must return an array of items but returned ')
        .concat(
          JSON.stringify(void 0),
          `.

Did you forget to return items?

See: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems`,
        ),
      { source: n, items: i }
    );
  });
}
var go = ['event', 'nextState', 'props', 'query', 'refresh', 'store'];
function ln(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ve(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ln(Object(n), !0).forEach(function (r) {
          bo(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : ln(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function bo(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function Oo(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (i, u) {
      if (i == null) return {};
      var s,
        l,
        c = {},
        p = Object.keys(i);
      for (l = 0; l < p.length; l++) (s = p[l]), u.indexOf(s) >= 0 || (c[s] = i[s]);
      return c;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
var sn,
  it,
  qe,
  ye = null,
  fn =
    ((sn = -1),
    (it = -1),
    (qe = void 0),
    function (e) {
      var t = ++sn;
      return Promise.resolve(e).then(function (n) {
        return qe && t < it ? qe : ((it = t), (qe = n), n);
      });
    });
function ae(e) {
  var t = e.event,
    n = e.nextState,
    r = n === void 0 ? {} : n,
    o = e.props,
    a = e.query,
    i = e.refresh,
    u = e.store,
    s = Oo(e, go);
  ye && o.environment.clearTimeout(ye);
  var l = s.setCollections,
    c = s.setIsOpen,
    p = s.setQuery,
    m = s.setActiveItemId,
    d = s.setStatus;
  if ((p(a), m(o.defaultActiveItemId), !a && o.openOnFocus === !1)) {
    var _,
      h = u.getState().collections.map(function (S) {
        return ve(ve({}, S), {}, { items: [] });
      });
    d('idle'),
      l(h),
      c((_ = r.isOpen) !== null && _ !== void 0 ? _ : o.shouldPanelOpen({ state: u.getState() }));
    var g = Gt(
      fn(h).then(function () {
        return Promise.resolve();
      }),
    );
    return u.pendingRequests.add(g);
  }
  d('loading'),
    (ye = o.environment.setTimeout(function () {
      d('stalled');
    }, o.stallThreshold));
  var v = Gt(
    fn(
      o.getSources(ve({ query: a, refresh: i, state: u.getState() }, s)).then(function (S) {
        return Promise.all(
          S.map(function (O) {
            return Promise.resolve(
              O.getItems(ve({ query: a, refresh: i, state: u.getState() }, s)),
            ).then(function (y) {
              return vo(y, O.sourceId);
            });
          }),
        )
          .then(yo)
          .then(function (O) {
            return _o(O, S);
          })
          .then(function (O) {
            return (function (y) {
              var b = y.collections,
                I = y.props,
                N = y.state,
                A = b.reduce(function (k, R) {
                  return Te(
                    Te({}, k),
                    {},
                    ur(
                      {},
                      R.source.sourceId,
                      Te(
                        Te({}, R.source),
                        {},
                        {
                          getItems: function () {
                            return Ie(R.items);
                          },
                        },
                      ),
                    ),
                  );
                }, {});
              return Ie(I.reshape({ sources: Object.values(A), sourcesBySourceId: A, state: N }))
                .filter(Boolean)
                .map(function (k) {
                  return { source: k, items: k.getItems() };
                });
            })({ collections: O, props: o, state: u.getState() });
          });
      }),
    ),
  )
    .then(function (S) {
      var O;
      d('idle'), l(S);
      var y = o.shouldPanelOpen({ state: u.getState() });
      c((O = r.isOpen) !== null && O !== void 0 ? O : (o.openOnFocus && !a && y) || y);
      var b = ie(u.getState());
      if (u.getState().activeItemId !== null && b) {
        var I = b.item,
          N = b.itemInputValue,
          A = b.itemUrl,
          k = b.source;
        k.onActive(
          ve(
            {
              event: t,
              item: I,
              itemInputValue: N,
              itemUrl: A,
              refresh: i,
              source: k,
              state: u.getState(),
            },
            s,
          ),
        );
      }
    })
    .finally(function () {
      d('idle'), ye && o.environment.clearTimeout(ye);
    });
  return u.pendingRequests.add(v);
}
var So = ['event', 'props', 'refresh', 'store'];
function pn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function X(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? pn(Object(n), !0).forEach(function (r) {
          wo(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : pn(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function wo(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function Eo(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (i, u) {
      if (i == null) return {};
      var s,
        l,
        c = {},
        p = Object.keys(i);
      for (l = 0; l < p.length; l++) (s = p[l]), u.indexOf(s) >= 0 || (c[s] = i[s]);
      return c;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
var jo = ['props', 'refresh', 'store'],
  Po = ['inputElement', 'formElement', 'panelElement'],
  Io = ['inputElement'],
  ko = ['inputElement', 'maxLength'],
  Do = ['item', 'source'];
function mn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? mn(Object(n), !0).forEach(function (r) {
          Co(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : mn(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Co(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function _e(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (i, u) {
      if (i == null) return {};
      var s,
        l,
        c = {},
        p = Object.keys(i);
      for (l = 0; l < p.length; l++) (s = p[l]), u.indexOf(s) >= 0 || (c[s] = i[s]);
      return c;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function Ao(e) {
  var t = e.props,
    n = e.refresh,
    r = e.store,
    o = _e(e, jo);
  return {
    getEnvironmentProps: function (a) {
      var i = a.inputElement,
        u = a.formElement,
        s = a.panelElement;
      function l(c) {
        (!r.getState().isOpen && r.pendingRequests.isEmpty()) ||
          c.target === i ||
          ([u, s].some(function (p) {
            return (m = p), (d = c.target), m === d || m.contains(d);
            var m, d;
          }) === !1 &&
            (r.dispatch('blur', null), t.debug || r.pendingRequests.cancelAll()));
      }
      return x(
        {
          onTouchStart: l,
          onMouseDown: l,
          onTouchMove: function (c) {
            r.getState().isOpen !== !1 &&
              i === t.environment.document.activeElement &&
              c.target !== i &&
              i.blur();
          },
        },
        _e(a, Po),
      );
    },
    getRootProps: function (a) {
      return x(
        {
          role: 'combobox',
          'aria-expanded': r.getState().isOpen,
          'aria-haspopup': 'listbox',
          'aria-owns': r.getState().isOpen ? ''.concat(t.id, '-list') : void 0,
          'aria-labelledby': ''.concat(t.id, '-label'),
        },
        a,
      );
    },
    getFormProps: function (a) {
      return (
        a.inputElement,
        x(
          {
            action: '',
            noValidate: !0,
            role: 'search',
            onSubmit: function (i) {
              var u;
              i.preventDefault(),
                t.onSubmit(x({ event: i, refresh: n, state: r.getState() }, o)),
                r.dispatch('submit', null),
                (u = a.inputElement) === null || u === void 0 || u.blur();
            },
            onReset: function (i) {
              var u;
              i.preventDefault(),
                t.onReset(x({ event: i, refresh: n, state: r.getState() }, o)),
                r.dispatch('reset', null),
                (u = a.inputElement) === null || u === void 0 || u.focus();
            },
          },
          _e(a, Io),
        )
      );
    },
    getLabelProps: function (a) {
      return x({ htmlFor: ''.concat(t.id, '-input'), id: ''.concat(t.id, '-label') }, a);
    },
    getInputProps: function (a) {
      var i;
      function u(h) {
        (t.openOnFocus || Boolean(r.getState().query)) &&
          ae(
            x(
              {
                event: h,
                props: t,
                query: r.getState().completion || r.getState().query,
                refresh: n,
                store: r,
              },
              o,
            ),
          ),
          r.dispatch('focus', null);
      }
      var s = a || {},
        l = (s.inputElement, s.maxLength),
        c = l === void 0 ? 512 : l,
        p = _e(s, ko),
        m = ie(r.getState()),
        d = (function (h) {
          return Boolean(h && h.match(io));
        })(((i = t.environment.navigator) === null || i === void 0 ? void 0 : i.userAgent) || ''),
        _ = m != null && m.itemUrl && !d ? 'go' : 'search';
      return x(
        {
          'aria-autocomplete': 'both',
          'aria-activedescendant':
            r.getState().isOpen && r.getState().activeItemId !== null
              ? ''.concat(t.id, '-item-').concat(r.getState().activeItemId)
              : void 0,
          'aria-controls': r.getState().isOpen ? ''.concat(t.id, '-list') : void 0,
          'aria-labelledby': ''.concat(t.id, '-label'),
          value: r.getState().completion || r.getState().query,
          id: ''.concat(t.id, '-input'),
          autoComplete: 'off',
          autoCorrect: 'off',
          autoCapitalize: 'off',
          enterKeyHint: _,
          spellCheck: 'false',
          autoFocus: t.autoFocus,
          placeholder: t.placeholder,
          maxLength: c,
          type: 'search',
          onChange: function (h) {
            ae(
              x(
                {
                  event: h,
                  props: t,
                  query: h.currentTarget.value.slice(0, c),
                  refresh: n,
                  store: r,
                },
                o,
              ),
            );
          },
          onKeyDown: function (h) {
            (function (g) {
              var v = g.event,
                S = g.props,
                O = g.refresh,
                y = g.store,
                b = Eo(g, So);
              if (v.key === 'ArrowUp' || v.key === 'ArrowDown') {
                var I = function () {
                    var q = S.environment.document.getElementById(
                      ''.concat(S.id, '-item-').concat(y.getState().activeItemId),
                    );
                    q &&
                      (q.scrollIntoViewIfNeeded
                        ? q.scrollIntoViewIfNeeded(!1)
                        : q.scrollIntoView(!1));
                  },
                  N = function () {
                    var q = ie(y.getState());
                    if (y.getState().activeItemId !== null && q) {
                      var De = q.item,
                        Y = q.itemInputValue,
                        Xe = q.itemUrl,
                        se = q.source;
                      se.onActive(
                        X(
                          {
                            event: v,
                            item: De,
                            itemInputValue: Y,
                            itemUrl: Xe,
                            refresh: O,
                            source: se,
                            state: y.getState(),
                          },
                          b,
                        ),
                      );
                    }
                  };
                v.preventDefault(),
                  y.getState().isOpen === !1 && (S.openOnFocus || Boolean(y.getState().query))
                    ? ae(
                        X(
                          { event: v, props: S, query: y.getState().query, refresh: O, store: y },
                          b,
                        ),
                      ).then(function () {
                        y.dispatch(v.key, { nextActiveItemId: S.defaultActiveItemId }),
                          N(),
                          setTimeout(I, 0);
                      })
                    : (y.dispatch(v.key, {}), N(), I());
              } else if (v.key === 'Escape')
                v.preventDefault(), y.dispatch(v.key, null), y.pendingRequests.cancelAll();
              else if (v.key === 'Tab') y.dispatch('blur', null), y.pendingRequests.cancelAll();
              else if (v.key === 'Enter') {
                if (
                  y.getState().activeItemId === null ||
                  y.getState().collections.every(function (q) {
                    return q.items.length === 0;
                  })
                )
                  return void (S.debug || y.pendingRequests.cancelAll());
                v.preventDefault();
                var A = ie(y.getState()),
                  k = A.item,
                  R = A.itemInputValue,
                  L = A.itemUrl,
                  B = A.source;
                if (v.metaKey || v.ctrlKey)
                  L !== void 0 &&
                    (B.onSelect(
                      X(
                        {
                          event: v,
                          item: k,
                          itemInputValue: R,
                          itemUrl: L,
                          refresh: O,
                          source: B,
                          state: y.getState(),
                        },
                        b,
                      ),
                    ),
                    S.navigator.navigateNewTab({ itemUrl: L, item: k, state: y.getState() }));
                else if (v.shiftKey)
                  L !== void 0 &&
                    (B.onSelect(
                      X(
                        {
                          event: v,
                          item: k,
                          itemInputValue: R,
                          itemUrl: L,
                          refresh: O,
                          source: B,
                          state: y.getState(),
                        },
                        b,
                      ),
                    ),
                    S.navigator.navigateNewWindow({ itemUrl: L, item: k, state: y.getState() }));
                else if (!v.altKey) {
                  if (L !== void 0)
                    return (
                      B.onSelect(
                        X(
                          {
                            event: v,
                            item: k,
                            itemInputValue: R,
                            itemUrl: L,
                            refresh: O,
                            source: B,
                            state: y.getState(),
                          },
                          b,
                        ),
                      ),
                      void S.navigator.navigate({ itemUrl: L, item: k, state: y.getState() })
                    );
                  ae(
                    X(
                      {
                        event: v,
                        nextState: { isOpen: !1 },
                        props: S,
                        query: R,
                        refresh: O,
                        store: y,
                      },
                      b,
                    ),
                  ).then(function () {
                    B.onSelect(
                      X(
                        {
                          event: v,
                          item: k,
                          itemInputValue: R,
                          itemUrl: L,
                          refresh: O,
                          source: B,
                          state: y.getState(),
                        },
                        b,
                      ),
                    );
                  });
                }
              }
            })(x({ event: h, props: t, refresh: n, store: r }, o));
          },
          onFocus: u,
          onBlur: cr,
          onClick: function (h) {
            a.inputElement !== t.environment.document.activeElement || r.getState().isOpen || u(h);
          },
        },
        p,
      );
    },
    getPanelProps: function (a) {
      return x(
        {
          onMouseDown: function (i) {
            i.preventDefault();
          },
          onMouseLeave: function () {
            r.dispatch('mouseleave', null);
          },
        },
        a,
      );
    },
    getListProps: function (a) {
      return x(
        {
          role: 'listbox',
          'aria-labelledby': ''.concat(t.id, '-label'),
          id: ''.concat(t.id, '-list'),
        },
        a,
      );
    },
    getItemProps: function (a) {
      var i = a.item,
        u = a.source,
        s = _e(a, Do);
      return x(
        {
          id: ''.concat(t.id, '-item-').concat(i.__autocomplete_id),
          role: 'option',
          'aria-selected': r.getState().activeItemId === i.__autocomplete_id,
          onMouseMove: function (l) {
            if (i.__autocomplete_id !== r.getState().activeItemId) {
              r.dispatch('mousemove', i.__autocomplete_id);
              var c = ie(r.getState());
              if (r.getState().activeItemId !== null && c) {
                var p = c.item,
                  m = c.itemInputValue,
                  d = c.itemUrl,
                  _ = c.source;
                _.onActive(
                  x(
                    {
                      event: l,
                      item: p,
                      itemInputValue: m,
                      itemUrl: d,
                      refresh: n,
                      source: _,
                      state: r.getState(),
                    },
                    o,
                  ),
                );
              }
            }
          },
          onMouseDown: function (l) {
            l.preventDefault();
          },
          onClick: function (l) {
            var c = u.getItemInputValue({ item: i, state: r.getState() }),
              p = u.getItemUrl({ item: i, state: r.getState() });
            (p
              ? Promise.resolve()
              : ae(
                  x(
                    {
                      event: l,
                      nextState: { isOpen: !1 },
                      props: t,
                      query: c,
                      refresh: n,
                      store: r,
                    },
                    o,
                  ),
                )
            ).then(function () {
              u.onSelect(
                x(
                  {
                    event: l,
                    item: i,
                    itemInputValue: c,
                    itemUrl: p,
                    refresh: n,
                    source: u,
                    state: r.getState(),
                  },
                  o,
                ),
              );
            });
          },
        },
        s,
      );
    },
  };
}
function dn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function xo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? dn(Object(n), !0).forEach(function (r) {
          lr(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : dn(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function lr(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function No(e) {
  var t,
    n,
    r,
    o,
    a = e.plugins,
    i = e.options,
    u =
      (t = (((n = i.__autocomplete_metadata) === null || n === void 0 ? void 0 : n.userAgents) ||
        [])[0]) === null || t === void 0
        ? void 0
        : t.segment,
    s = u
      ? lr(
          {},
          u,
          Object.keys(
            ((r = i.__autocomplete_metadata) === null || r === void 0 ? void 0 : r.options) || {},
          ),
        )
      : {};
  return {
    plugins: a.map(function (l) {
      return { name: l.name, options: Object.keys(l.__autocomplete_pluginOptions || []) };
    }),
    options: xo({ 'autocomplete-core': Object.keys(i) }, s),
    ua: ro.concat(
      ((o = i.__autocomplete_metadata) === null || o === void 0 ? void 0 : o.userAgents) || [],
    ),
  };
}
function hn(e) {
  var t,
    n = e.state;
  return n.isOpen === !1 || n.activeItemId === null
    ? null
    : ((t = ie(n)) === null || t === void 0 ? void 0 : t.itemInputValue) || null;
}
function vn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? vn(Object(n), !0).forEach(function (r) {
          Ro(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : vn(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Ro(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
var To = function (e, t) {
  switch (t.type) {
    case 'setActiveItemId':
    case 'mousemove':
      return E(E({}, e), {}, { activeItemId: t.payload });
    case 'setQuery':
      return E(E({}, e), {}, { query: t.payload, completion: null });
    case 'setCollections':
      return E(E({}, e), {}, { collections: t.payload });
    case 'setIsOpen':
      return E(E({}, e), {}, { isOpen: t.payload });
    case 'setStatus':
      return E(E({}, e), {}, { status: t.payload });
    case 'setContext':
      return E(E({}, e), {}, { context: E(E({}, e.context), t.payload) });
    case 'ArrowDown':
      var n = E(
        E({}, e),
        {},
        {
          activeItemId: t.payload.hasOwnProperty('nextActiveItemId')
            ? t.payload.nextActiveItemId
            : Xt(1, e.activeItemId, _t(e), t.props.defaultActiveItemId),
        },
      );
      return E(E({}, n), {}, { completion: hn({ state: n }) });
    case 'ArrowUp':
      var r = E(
        E({}, e),
        {},
        { activeItemId: Xt(-1, e.activeItemId, _t(e), t.props.defaultActiveItemId) },
      );
      return E(E({}, r), {}, { completion: hn({ state: r }) });
    case 'Escape':
      return e.isOpen
        ? E(E({}, e), {}, { activeItemId: null, isOpen: !1, completion: null })
        : E(E({}, e), {}, { activeItemId: null, query: '', status: 'idle', collections: [] });
    case 'submit':
      return E(E({}, e), {}, { activeItemId: null, isOpen: !1, status: 'idle' });
    case 'reset':
      return E(
        E({}, e),
        {},
        {
          activeItemId: t.props.openOnFocus === !0 ? t.props.defaultActiveItemId : null,
          status: 'idle',
          query: '',
        },
      );
    case 'focus':
      return E(
        E({}, e),
        {},
        {
          activeItemId: t.props.defaultActiveItemId,
          isOpen:
            (t.props.openOnFocus || Boolean(e.query)) && t.props.shouldPanelOpen({ state: e }),
        },
      );
    case 'blur':
      return t.props.debug ? e : E(E({}, e), {}, { isOpen: !1, activeItemId: null });
    case 'mouseleave':
      return E(E({}, e), {}, { activeItemId: t.props.defaultActiveItemId });
    default:
      return 'The reducer action '.concat(JSON.stringify(t.type), ' is not supported.'), e;
  }
};
function yn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? yn(Object(n), !0).forEach(function (r) {
          Lo(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : yn(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Lo(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function qo(e) {
  var t = [],
    n = (function (u, s) {
      var l,
        c = typeof window < 'u' ? window : {},
        p = u.plugins || [];
      return re(
        re(
          {
            debug: !1,
            openOnFocus: !1,
            placeholder: '',
            autoFocus: !1,
            defaultActiveItemId: null,
            stallThreshold: 300,
            environment: c,
            shouldPanelOpen: function (m) {
              return _t(m.state) > 0;
            },
            reshape: function (m) {
              return m.sources;
            },
          },
          u,
        ),
        {},
        {
          id: (l = u.id) !== null && l !== void 0 ? l : 'autocomplete-'.concat(no++),
          plugins: p,
          initialState: re(
            {
              activeItemId: null,
              query: '',
              completion: null,
              collections: [],
              isOpen: !1,
              status: 'idle',
              context: {},
            },
            u.initialState,
          ),
          onStateChange: function (m) {
            var d;
            (d = u.onStateChange) === null || d === void 0 || d.call(u, m),
              p.forEach(function (_) {
                var h;
                return (h = _.onStateChange) === null || h === void 0 ? void 0 : h.call(_, m);
              });
          },
          onSubmit: function (m) {
            var d;
            (d = u.onSubmit) === null || d === void 0 || d.call(u, m),
              p.forEach(function (_) {
                var h;
                return (h = _.onSubmit) === null || h === void 0 ? void 0 : h.call(_, m);
              });
          },
          onReset: function (m) {
            var d;
            (d = u.onReset) === null || d === void 0 || d.call(u, m),
              p.forEach(function (_) {
                var h;
                return (h = _.onReset) === null || h === void 0 ? void 0 : h.call(_, m);
              });
          },
          getSources: function (m) {
            return Promise.all(
              []
                .concat(
                  fo(
                    p.map(function (d) {
                      return d.getSources;
                    }),
                  ),
                  [u.getSources],
                )
                .filter(Boolean)
                .map(function (d) {
                  return ao(d, m);
                }),
            )
              .then(function (d) {
                return Ie(d);
              })
              .then(function (d) {
                return d.map(function (_) {
                  return re(
                    re({}, _),
                    {},
                    {
                      onSelect: function (h) {
                        _.onSelect(h),
                          s.forEach(function (g) {
                            var v;
                            return (v = g.onSelect) === null || v === void 0
                              ? void 0
                              : v.call(g, h);
                          });
                      },
                      onActive: function (h) {
                        _.onActive(h),
                          s.forEach(function (g) {
                            var v;
                            return (v = g.onActive) === null || v === void 0
                              ? void 0
                              : v.call(g, h);
                          });
                      },
                    },
                  );
                });
              });
          },
          navigator: re(
            {
              navigate: function (m) {
                var d = m.itemUrl;
                c.location.assign(d);
              },
              navigateNewTab: function (m) {
                var d = m.itemUrl,
                  _ = c.open(d, '_blank', 'noopener');
                _ == null || _.focus();
              },
              navigateNewWindow: function (m) {
                var d = m.itemUrl;
                c.open(d, '_blank', 'noopener');
              },
            },
            u.navigator,
          ),
        },
      );
    })(e, t),
    r = lo(To, n, function (u) {
      var s = u.prevState,
        l = u.state;
      n.onStateChange(ee({ prevState: s, state: l, refresh: i }, o));
    }),
    o = (function (u) {
      var s = u.store;
      return {
        setActiveItemId: function (l) {
          s.dispatch('setActiveItemId', l);
        },
        setQuery: function (l) {
          s.dispatch('setQuery', l);
        },
        setCollections: function (l) {
          var c = 0,
            p = l.map(function (m) {
              return Re(
                Re({}, m),
                {},
                {
                  items: Ie(m.items).map(function (d) {
                    return Re(Re({}, d), {}, { __autocomplete_id: c++ });
                  }),
                },
              );
            });
          s.dispatch('setCollections', p);
        },
        setIsOpen: function (l) {
          s.dispatch('setIsOpen', l);
        },
        setStatus: function (l) {
          s.dispatch('setStatus', l);
        },
        setContext: function (l) {
          s.dispatch('setContext', l);
        },
      };
    })({ store: r }),
    a = Ao(ee({ props: n, refresh: i, store: r }, o));
  function i() {
    return ae(
      ee(
        {
          event: new Event('input'),
          nextState: { isOpen: r.getState().isOpen },
          props: n,
          query: r.getState().query,
          refresh: i,
          store: r,
        },
        o,
      ),
    );
  }
  return (
    n.plugins.forEach(function (u) {
      var s;
      return (s = u.subscribe) === null || s === void 0
        ? void 0
        : s.call(
            u,
            ee(
              ee({}, o),
              {},
              {
                refresh: i,
                onSelect: function (l) {
                  t.push({ onSelect: l });
                },
                onActive: function (l) {
                  t.push({ onActive: l });
                },
              },
            ),
          );
    }),
    (function (u) {
      var s,
        l,
        c = u.metadata,
        p = u.environment;
      if (
        !(
          (s = p.navigator) === null ||
          s === void 0 ||
          (l = s.userAgent) === null ||
          l === void 0
        ) &&
        l.includes('Algolia Crawler')
      ) {
        var m = p.document.createElement('meta'),
          d = p.document.querySelector('head');
        (m.name = 'algolia:metadata'),
          setTimeout(function () {
            (m.content = JSON.stringify(c)), d.appendChild(m);
          }, 0);
      }
    })({ metadata: No({ plugins: n.plugins, options: e }), environment: n.environment }),
    ee(ee({ refresh: i }, a), o)
  );
}
function Mo(e) {
  var t = e.translations,
    n = (t === void 0 ? {} : t).searchByText,
    r = n === void 0 ? 'Search by' : n;
  return f.createElement(
    'a',
    {
      href: 'https://www.algolia.com/ref/docsearch/?utm_source='.concat(
        window.location.hostname,
        '&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch',
      ),
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    f.createElement('span', { className: 'DocSearch-Label' }, r),
    f.createElement(
      'svg',
      {
        width: '77',
        height: '19',
        'aria-label': 'Algolia',
        role: 'img',
        id: 'Layer_1',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 2196.2 500',
      },
      f.createElement(
        'defs',
        null,
        f.createElement('style', null, '.cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}'),
      ),
      f.createElement('path', {
        className: 'cls-2',
        d: 'M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z',
      }),
      f.createElement('rect', {
        className: 'cls-1',
        x: '1845.88',
        y: '104.73',
        width: '62.58',
        height: '277.9',
        rx: '5.9',
        ry: '5.9',
      }),
      f.createElement('path', {
        className: 'cls-2',
        d: 'M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z',
      }),
      f.createElement('path', {
        className: 'cls-2',
        d: 'M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z',
      }),
      f.createElement('path', {
        className: 'cls-2',
        d: 'M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z',
      }),
      f.createElement('path', {
        className: 'cls-2',
        d: 'M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z',
      }),
      f.createElement('path', {
        className: 'cls-2',
        d: 'M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z',
      }),
      f.createElement('path', {
        className: 'cls-2',
        d: 'M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z',
      }),
      f.createElement('path', {
        className: 'cls-1',
        d: 'M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z',
      }),
    ),
  );
}
function Me(e) {
  return f.createElement(
    'svg',
    { width: '15', height: '15', 'aria-label': e.ariaLabel, role: 'img' },
    f.createElement(
      'g',
      {
        fill: 'none',
        stroke: 'currentColor',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '1.2',
      },
      e.children,
    ),
  );
}
function Ho(e) {
  var t = e.translations,
    n = t === void 0 ? {} : t,
    r = n.selectText,
    o = r === void 0 ? 'to select' : r,
    a = n.selectKeyAriaLabel,
    i = a === void 0 ? 'Enter key' : a,
    u = n.navigateText,
    s = u === void 0 ? 'to navigate' : u,
    l = n.navigateUpKeyAriaLabel,
    c = l === void 0 ? 'Arrow up' : l,
    p = n.navigateDownKeyAriaLabel,
    m = p === void 0 ? 'Arrow down' : p,
    d = n.closeText,
    _ = d === void 0 ? 'to close' : d,
    h = n.closeKeyAriaLabel,
    g = h === void 0 ? 'Escape key' : h,
    v = n.searchByText,
    S = v === void 0 ? 'Search by' : v;
  return f.createElement(
    f.Fragment,
    null,
    f.createElement(
      'div',
      { className: 'DocSearch-Logo' },
      f.createElement(Mo, { translations: { searchByText: S } }),
    ),
    f.createElement(
      'ul',
      { className: 'DocSearch-Commands' },
      f.createElement(
        'li',
        null,
        f.createElement(
          'kbd',
          { className: 'DocSearch-Commands-Key' },
          f.createElement(
            Me,
            { ariaLabel: i },
            f.createElement('path', { d: 'M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3' }),
          ),
        ),
        f.createElement('span', { className: 'DocSearch-Label' }, o),
      ),
      f.createElement(
        'li',
        null,
        f.createElement(
          'kbd',
          { className: 'DocSearch-Commands-Key' },
          f.createElement(
            Me,
            { ariaLabel: m },
            f.createElement('path', { d: 'M7.5 3.5v8M10.5 8.5l-3 3-3-3' }),
          ),
        ),
        f.createElement(
          'kbd',
          { className: 'DocSearch-Commands-Key' },
          f.createElement(
            Me,
            { ariaLabel: c },
            f.createElement('path', { d: 'M7.5 11.5v-8M10.5 6.5l-3-3-3 3' }),
          ),
        ),
        f.createElement('span', { className: 'DocSearch-Label' }, s),
      ),
      f.createElement(
        'li',
        null,
        f.createElement(
          'kbd',
          { className: 'DocSearch-Commands-Key' },
          f.createElement(
            Me,
            { ariaLabel: g },
            f.createElement('path', {
              d: 'M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956',
            }),
          ),
        ),
        f.createElement('span', { className: 'DocSearch-Label' }, _),
      ),
    ),
  );
}
function Uo(e) {
  var t = e.hit,
    n = e.children;
  return f.createElement('a', { href: t.url }, n);
}
function Fo() {
  return f.createElement(
    'svg',
    { viewBox: '0 0 38 38', stroke: 'currentColor', strokeOpacity: '.5' },
    f.createElement(
      'g',
      { fill: 'none', fillRule: 'evenodd' },
      f.createElement(
        'g',
        { transform: 'translate(1 1)', strokeWidth: '2' },
        f.createElement('circle', { strokeOpacity: '.3', cx: '18', cy: '18', r: '18' }),
        f.createElement(
          'path',
          { d: 'M36 18c0-9.94-8.06-18-18-18' },
          f.createElement('animateTransform', {
            attributeName: 'transform',
            type: 'rotate',
            from: '0 18 18',
            to: '360 18 18',
            dur: '1s',
            repeatCount: 'indefinite',
          }),
        ),
      ),
    ),
  );
}
function Bo() {
  return f.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20' },
    f.createElement(
      'g',
      {
        stroke: 'currentColor',
        fill: 'none',
        fillRule: 'evenodd',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      f.createElement('path', { d: 'M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0' }),
      f.createElement('path', { d: 'M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13' }),
    ),
  );
}
function gt() {
  return f.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20' },
    f.createElement('path', {
      d: 'M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z',
      stroke: 'currentColor',
      fill: 'none',
      fillRule: 'evenodd',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }),
  );
}
function Vo() {
  return f.createElement(
    'svg',
    { className: 'DocSearch-Hit-Select-Icon', width: '20', height: '20', viewBox: '0 0 20 20' },
    f.createElement(
      'g',
      {
        stroke: 'currentColor',
        fill: 'none',
        fillRule: 'evenodd',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      f.createElement('path', { d: 'M18 3v4c0 2-2 4-4 4H2' }),
      f.createElement('path', { d: 'M8 17l-6-6 6-6' }),
    ),
  );
}
var Ko = function () {
  return f.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20' },
    f.createElement('path', {
      d: 'M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4',
      stroke: 'currentColor',
      fill: 'none',
      fillRule: 'evenodd',
      strokeLinejoin: 'round',
    }),
  );
};
function Wo(e) {
  switch (e.type) {
    case 'lvl1':
      return f.createElement(Ko, null);
    case 'content':
      return f.createElement(Jo, null);
    default:
      return f.createElement(zo, null);
  }
}
function zo() {
  return f.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20' },
    f.createElement('path', {
      d: 'M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z',
      stroke: 'currentColor',
      fill: 'none',
      fillRule: 'evenodd',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }),
  );
}
function Jo() {
  return f.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20' },
    f.createElement('path', {
      d: 'M17 5H3h14zm0 5H3h14zm0 5H3h14z',
      stroke: 'currentColor',
      fill: 'none',
      fillRule: 'evenodd',
      strokeLinejoin: 'round',
    }),
  );
}
function _n() {
  return f.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20' },
    f.createElement('path', {
      d: 'M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z',
      stroke: 'currentColor',
      fill: 'none',
      fillRule: 'evenodd',
      strokeLinejoin: 'round',
    }),
  );
}
function $o() {
  return f.createElement(
    'svg',
    {
      width: '40',
      height: '40',
      viewBox: '0 0 20 20',
      fill: 'none',
      fillRule: 'evenodd',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    f.createElement('path', {
      d: 'M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0',
    }),
  );
}
function Qo() {
  return f.createElement(
    'svg',
    {
      width: '40',
      height: '40',
      viewBox: '0 0 20 20',
      fill: 'none',
      fillRule: 'evenodd',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    f.createElement('path', {
      d: 'M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2',
    }),
  );
}
function Zo(e) {
  var t = e.translations,
    n = t === void 0 ? {} : t,
    r = n.titleText,
    o = r === void 0 ? 'Unable to fetch results' : r,
    a = n.helpText,
    i = a === void 0 ? 'You might want to check your network connection.' : a;
  return f.createElement(
    'div',
    { className: 'DocSearch-ErrorScreen' },
    f.createElement('div', { className: 'DocSearch-Screen-Icon' }, f.createElement($o, null)),
    f.createElement('p', { className: 'DocSearch-Title' }, o),
    f.createElement('p', { className: 'DocSearch-Help' }, i),
  );
}
var Yo = ['translations'];
function Go(e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return ct(t);
    })(e) ||
    (function (t) {
      if ((typeof Symbol < 'u' && t[Symbol.iterator] != null) || t['@@iterator'] != null)
        return Array.from(t);
    })(e) ||
    (function (t, n) {
      if (t) {
        if (typeof t == 'string') return ct(t, n);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (
          (r === 'Object' && t.constructor && (r = t.constructor.name), r === 'Map' || r === 'Set')
        )
          return Array.from(t);
        if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
          return ct(t, n);
      }
    })(e) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function ct(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Xo(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (i, u) {
      if (i == null) return {};
      var s,
        l,
        c = {},
        p = Object.keys(i);
      for (l = 0; l < p.length; l++) (s = p[l]), u.indexOf(s) >= 0 || (c[s] = i[s]);
      return c;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function ea(e) {
  var t = e.translations,
    n = t === void 0 ? {} : t,
    r = Xo(e, Yo),
    o = n.noResultsText,
    a = o === void 0 ? 'No results for' : o,
    i = n.suggestedQueryText,
    u = i === void 0 ? 'Try searching for' : i,
    s = n.reportMissingResultsText,
    l = s === void 0 ? 'Believe this query should return results?' : s,
    c = n.reportMissingResultsLinkText,
    p = c === void 0 ? 'Let us know.' : c,
    m = r.state.context.searchSuggestions;
  return f.createElement(
    'div',
    { className: 'DocSearch-NoResults' },
    f.createElement('div', { className: 'DocSearch-Screen-Icon' }, f.createElement(Qo, null)),
    f.createElement(
      'p',
      { className: 'DocSearch-Title' },
      a,
      ' "',
      f.createElement('strong', null, r.state.query),
      '"',
    ),
    m &&
      m.length > 0 &&
      f.createElement(
        'div',
        { className: 'DocSearch-NoResults-Prefill-List' },
        f.createElement('p', { className: 'DocSearch-Help' }, u, ':'),
        f.createElement(
          'ul',
          null,
          m.slice(0, 3).reduce(function (d, _) {
            return [].concat(Go(d), [
              f.createElement(
                'li',
                { key: _ },
                f.createElement(
                  'button',
                  {
                    className: 'DocSearch-Prefill',
                    key: _,
                    type: 'button',
                    onClick: function () {
                      r.setQuery(_.toLowerCase() + ' '), r.refresh(), r.inputRef.current.focus();
                    },
                  },
                  _,
                ),
              ),
            ]);
          }, []),
        ),
      ),
    r.getMissingResultsUrl &&
      f.createElement(
        'p',
        { className: 'DocSearch-Help' },
        ''.concat(l, ' '),
        f.createElement(
          'a',
          {
            href: r.getMissingResultsUrl({ query: r.state.query }),
            target: '_blank',
            rel: 'noopener noreferrer',
          },
          p,
        ),
      ),
  );
}
var ta = ['hit', 'attribute', 'tagName'];
function gn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function bn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? gn(Object(n), !0).forEach(function (r) {
          na(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : gn(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function na(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function ra(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (i, u) {
      if (i == null) return {};
      var s,
        l,
        c = {},
        p = Object.keys(i);
      for (l = 0; l < p.length; l++) (s = p[l]), u.indexOf(s) >= 0 || (c[s] = i[s]);
      return c;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function On(e, t) {
  return t.split('.').reduce(function (n, r) {
    return n != null && n[r] ? n[r] : null;
  }, e);
}
function oe(e) {
  var t = e.hit,
    n = e.attribute,
    r = e.tagName;
  return V(
    r === void 0 ? 'span' : r,
    bn(
      bn({}, ra(e, ta)),
      {},
      {
        dangerouslySetInnerHTML: {
          __html: On(t, '_snippetResult.'.concat(n, '.value')) || On(t, n),
        },
      },
    ),
  );
}
function Sn(e, t) {
  return (
    (function (n) {
      if (Array.isArray(n)) return n;
    })(e) ||
    (function (n, r) {
      var o = n == null ? null : (typeof Symbol < 'u' && n[Symbol.iterator]) || n['@@iterator'];
      if (o != null) {
        var a,
          i,
          u = [],
          s = !0,
          l = !1;
        try {
          for (
            o = o.call(n);
            !(s = (a = o.next()).done) && (u.push(a.value), !r || u.length !== r);
            s = !0
          );
        } catch (c) {
          (l = !0), (i = c);
        } finally {
          try {
            s || o.return == null || o.return();
          } finally {
            if (l) throw i;
          }
        }
        return u;
      }
    })(e, t) ||
    (function (n, r) {
      if (n) {
        if (typeof n == 'string') return wn(n, r);
        var o = Object.prototype.toString.call(n).slice(8, -1);
        if (
          (o === 'Object' && n.constructor && (o = n.constructor.name), o === 'Map' || o === 'Set')
        )
          return Array.from(n);
        if (o === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
          return wn(n, r);
      }
    })(e, t) ||
    (function () {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function wn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Je() {
  return (
    (Je =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Je.apply(this, arguments)
  );
}
function bt(e) {
  return e.collection && e.collection.items.length !== 0
    ? f.createElement(
        'section',
        { className: 'DocSearch-Hits' },
        f.createElement('div', { className: 'DocSearch-Hit-source' }, e.title),
        f.createElement(
          'ul',
          e.getListProps(),
          e.collection.items.map(function (t, n) {
            return f.createElement(
              oa,
              Je({ key: [e.title, t.objectID].join(':'), item: t, index: n }, e),
            );
          }),
        ),
      )
    : null;
}
function oa(e) {
  var t = e.item,
    n = e.index,
    r = e.renderIcon,
    o = e.renderAction,
    a = e.getItemProps,
    i = e.onItemClick,
    u = e.collection,
    s = e.hitComponent,
    l = Sn(f.useState(!1), 2),
    c = l[0],
    p = l[1],
    m = Sn(f.useState(!1), 2),
    d = m[0],
    _ = m[1],
    h = f.useRef(null),
    g = s;
  return f.createElement(
    'li',
    Je(
      {
        className: [
          'DocSearch-Hit',
          t.__docsearch_parent && 'DocSearch-Hit--Child',
          c && 'DocSearch-Hit--deleting',
          d && 'DocSearch-Hit--favoriting',
        ]
          .filter(Boolean)
          .join(' '),
        onTransitionEnd: function () {
          h.current && h.current();
        },
      },
      a({
        item: t,
        source: u.source,
        onClick: function () {
          i(t);
        },
      }),
    ),
    f.createElement(
      g,
      { hit: t },
      f.createElement(
        'div',
        { className: 'DocSearch-Hit-Container' },
        r({ item: t, index: n }),
        t.hierarchy[t.type] &&
          t.type === 'lvl1' &&
          f.createElement(
            'div',
            { className: 'DocSearch-Hit-content-wrapper' },
            f.createElement(oe, {
              className: 'DocSearch-Hit-title',
              hit: t,
              attribute: 'hierarchy.lvl1',
            }),
            t.content &&
              f.createElement(oe, {
                className: 'DocSearch-Hit-path',
                hit: t,
                attribute: 'content',
              }),
          ),
        t.hierarchy[t.type] &&
          (t.type === 'lvl2' ||
            t.type === 'lvl3' ||
            t.type === 'lvl4' ||
            t.type === 'lvl5' ||
            t.type === 'lvl6') &&
          f.createElement(
            'div',
            { className: 'DocSearch-Hit-content-wrapper' },
            f.createElement(oe, {
              className: 'DocSearch-Hit-title',
              hit: t,
              attribute: 'hierarchy.'.concat(t.type),
            }),
            f.createElement(oe, {
              className: 'DocSearch-Hit-path',
              hit: t,
              attribute: 'hierarchy.lvl1',
            }),
          ),
        t.type === 'content' &&
          f.createElement(
            'div',
            { className: 'DocSearch-Hit-content-wrapper' },
            f.createElement(oe, { className: 'DocSearch-Hit-title', hit: t, attribute: 'content' }),
            f.createElement(oe, {
              className: 'DocSearch-Hit-path',
              hit: t,
              attribute: 'hierarchy.lvl1',
            }),
          ),
        o({
          item: t,
          runDeleteTransition: function (v) {
            p(!0), (h.current = v);
          },
          runFavoriteTransition: function (v) {
            _(!0), (h.current = v);
          },
        }),
      ),
    ),
  );
}
function En(e, t) {
  return e.reduce(function (n, r) {
    var o = t(r);
    return n.hasOwnProperty(o) || (n[o] = []), n[o].length < 5 && n[o].push(r), n;
  }, {});
}
function jn(e) {
  return e;
}
function aa() {}
var sr = /(<mark>|<\/mark>)/g,
  ia = RegExp(sr.source);
function fr(e) {
  var t,
    n,
    r,
    o,
    a,
    i = e;
  if (!i.__docsearch_parent && !e._highlightResult) return e.hierarchy.lvl0;
  var u = (
    (i.__docsearch_parent
      ? (t = i.__docsearch_parent) === null ||
        t === void 0 ||
        (n = t._highlightResult) === null ||
        n === void 0 ||
        (r = n.hierarchy) === null ||
        r === void 0
        ? void 0
        : r.lvl0
      : (o = e._highlightResult) === null ||
        o === void 0 ||
        (a = o.hierarchy) === null ||
        a === void 0
      ? void 0
      : a.lvl0) || {}
  ).value;
  return u && ia.test(u) ? u.replace(sr, '') : u;
}
function Ot() {
  return (
    (Ot =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Ot.apply(this, arguments)
  );
}
function ca(e) {
  return f.createElement(
    'div',
    { className: 'DocSearch-Dropdown-Container' },
    e.state.collections.map(function (t) {
      if (t.items.length === 0) return null;
      var n = fr(t.items[0]);
      return f.createElement(
        bt,
        Ot({}, e, {
          key: t.source.sourceId,
          title: n,
          collection: t,
          renderIcon: function (r) {
            var o,
              a = r.item,
              i = r.index;
            return f.createElement(
              f.Fragment,
              null,
              a.__docsearch_parent &&
                f.createElement(
                  'svg',
                  { className: 'DocSearch-Hit-Tree', viewBox: '0 0 24 54' },
                  f.createElement(
                    'g',
                    {
                      stroke: 'currentColor',
                      fill: 'none',
                      fillRule: 'evenodd',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    },
                    a.__docsearch_parent !==
                      ((o = t.items[i + 1]) === null || o === void 0
                        ? void 0
                        : o.__docsearch_parent)
                      ? f.createElement('path', { d: 'M8 6v21M20 27H8.3' })
                      : f.createElement('path', { d: 'M8 6v42M20 27H8.3' }),
                  ),
                ),
              f.createElement(
                'div',
                { className: 'DocSearch-Hit-icon' },
                f.createElement(Wo, { type: a.type }),
              ),
            );
          },
          renderAction: function () {
            return f.createElement(
              'div',
              { className: 'DocSearch-Hit-action' },
              f.createElement(Vo, null),
            );
          },
        }),
      );
    }),
    e.resultsFooterComponent &&
      f.createElement(
        'section',
        { className: 'DocSearch-HitsFooter' },
        f.createElement(e.resultsFooterComponent, { state: e.state }),
      ),
  );
}
var ua = ['translations'];
function $e() {
  return (
    ($e =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    $e.apply(this, arguments)
  );
}
function la(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (i, u) {
      if (i == null) return {};
      var s,
        l,
        c = {},
        p = Object.keys(i);
      for (l = 0; l < p.length; l++) (s = p[l]), u.indexOf(s) >= 0 || (c[s] = i[s]);
      return c;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function sa(e) {
  var t = e.translations,
    n = t === void 0 ? {} : t,
    r = la(e, ua),
    o = n.recentSearchesTitle,
    a = o === void 0 ? 'Recent' : o,
    i = n.noRecentSearchesText,
    u = i === void 0 ? 'No recent searches' : i,
    s = n.saveRecentSearchButtonTitle,
    l = s === void 0 ? 'Save this search' : s,
    c = n.removeRecentSearchButtonTitle,
    p = c === void 0 ? 'Remove this search from history' : c,
    m = n.favoriteSearchesTitle,
    d = m === void 0 ? 'Favorite' : m,
    _ = n.removeFavoriteSearchButtonTitle,
    h = _ === void 0 ? 'Remove this search from favorites' : _;
  return r.state.status === 'idle' && r.hasCollections === !1
    ? r.disableUserPersonalization
      ? null
      : f.createElement(
          'div',
          { className: 'DocSearch-StartScreen' },
          f.createElement('p', { className: 'DocSearch-Help' }, u),
        )
    : r.hasCollections === !1
    ? null
    : f.createElement(
        'div',
        { className: 'DocSearch-Dropdown-Container' },
        f.createElement(
          bt,
          $e({}, r, {
            title: a,
            collection: r.state.collections[0],
            renderIcon: function () {
              return f.createElement(
                'div',
                { className: 'DocSearch-Hit-icon' },
                f.createElement(Bo, null),
              );
            },
            renderAction: function (g) {
              var v = g.item,
                S = g.runFavoriteTransition,
                O = g.runDeleteTransition;
              return f.createElement(
                f.Fragment,
                null,
                f.createElement(
                  'div',
                  { className: 'DocSearch-Hit-action' },
                  f.createElement(
                    'button',
                    {
                      className: 'DocSearch-Hit-action-button',
                      title: l,
                      type: 'submit',
                      onClick: function (y) {
                        y.preventDefault(),
                          y.stopPropagation(),
                          S(function () {
                            r.favoriteSearches.add(v), r.recentSearches.remove(v), r.refresh();
                          });
                      },
                    },
                    f.createElement(_n, null),
                  ),
                ),
                f.createElement(
                  'div',
                  { className: 'DocSearch-Hit-action' },
                  f.createElement(
                    'button',
                    {
                      className: 'DocSearch-Hit-action-button',
                      title: p,
                      type: 'submit',
                      onClick: function (y) {
                        y.preventDefault(),
                          y.stopPropagation(),
                          O(function () {
                            r.recentSearches.remove(v), r.refresh();
                          });
                      },
                    },
                    f.createElement(gt, null),
                  ),
                ),
              );
            },
          }),
        ),
        f.createElement(
          bt,
          $e({}, r, {
            title: d,
            collection: r.state.collections[1],
            renderIcon: function () {
              return f.createElement(
                'div',
                { className: 'DocSearch-Hit-icon' },
                f.createElement(_n, null),
              );
            },
            renderAction: function (g) {
              var v = g.item,
                S = g.runDeleteTransition;
              return f.createElement(
                'div',
                { className: 'DocSearch-Hit-action' },
                f.createElement(
                  'button',
                  {
                    className: 'DocSearch-Hit-action-button',
                    title: h,
                    type: 'submit',
                    onClick: function (O) {
                      O.preventDefault(),
                        O.stopPropagation(),
                        S(function () {
                          r.favoriteSearches.remove(v), r.refresh();
                        });
                    },
                  },
                  f.createElement(gt, null),
                ),
              );
            },
          }),
        ),
      );
}
var fa = ['translations'];
function Qe() {
  return (
    (Qe =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Qe.apply(this, arguments)
  );
}
function pa(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (i, u) {
      if (i == null) return {};
      var s,
        l,
        c = {},
        p = Object.keys(i);
      for (l = 0; l < p.length; l++) (s = p[l]), u.indexOf(s) >= 0 || (c[s] = i[s]);
      return c;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
var ma = f.memo(
    function (e) {
      var t = e.translations,
        n = t === void 0 ? {} : t,
        r = pa(e, fa);
      if (r.state.status === 'error')
        return f.createElement(Zo, { translations: n == null ? void 0 : n.errorScreen });
      var o = r.state.collections.some(function (a) {
        return a.items.length > 0;
      });
      return r.state.query
        ? o === !1
          ? f.createElement(ea, Qe({}, r, { translations: n == null ? void 0 : n.noResultsScreen }))
          : f.createElement(ca, r)
        : f.createElement(
            sa,
            Qe({}, r, { hasCollections: o, translations: n == null ? void 0 : n.startScreen }),
          );
    },
    function (e, t) {
      return t.state.status === 'loading' || t.state.status === 'stalled';
    },
  ),
  da = ['translations'];
function Ze() {
  return (
    (Ze =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Ze.apply(this, arguments)
  );
}
function ha(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (i, u) {
      if (i == null) return {};
      var s,
        l,
        c = {},
        p = Object.keys(i);
      for (l = 0; l < p.length; l++) (s = p[l]), u.indexOf(s) >= 0 || (c[s] = i[s]);
      return c;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function va(e) {
  var t = e.translations,
    n = t === void 0 ? {} : t,
    r = ha(e, da),
    o = n.resetButtonTitle,
    a = o === void 0 ? 'Clear the query' : o,
    i = n.resetButtonAriaLabel,
    u = i === void 0 ? 'Clear the query' : i,
    s = n.cancelButtonText,
    l = s === void 0 ? 'Cancel' : s,
    c = n.cancelButtonAriaLabel,
    p = c === void 0 ? 'Cancel' : c,
    m = r.getFormProps({ inputElement: r.inputRef.current }).onReset;
  return (
    f.useEffect(
      function () {
        r.autoFocus && r.inputRef.current && r.inputRef.current.focus();
      },
      [r.autoFocus, r.inputRef],
    ),
    f.useEffect(
      function () {
        r.isFromSelection && r.inputRef.current && r.inputRef.current.select();
      },
      [r.isFromSelection, r.inputRef],
    ),
    f.createElement(
      f.Fragment,
      null,
      f.createElement(
        'form',
        {
          className: 'DocSearch-Form',
          onSubmit: function (d) {
            d.preventDefault();
          },
          onReset: m,
        },
        f.createElement(
          'label',
          Ze({ className: 'DocSearch-MagnifierLabel' }, r.getLabelProps()),
          f.createElement(ir, null),
        ),
        f.createElement(
          'div',
          { className: 'DocSearch-LoadingIndicator' },
          f.createElement(Fo, null),
        ),
        f.createElement(
          'input',
          Ze(
            { className: 'DocSearch-Input', ref: r.inputRef },
            r.getInputProps({
              inputElement: r.inputRef.current,
              autoFocus: r.autoFocus,
              maxLength: 64,
            }),
          ),
        ),
        f.createElement(
          'button',
          {
            type: 'reset',
            title: a,
            className: 'DocSearch-Reset',
            'aria-label': u,
            hidden: !r.state.query,
          },
          f.createElement(gt, null),
        ),
      ),
      f.createElement(
        'button',
        { className: 'DocSearch-Cancel', type: 'reset', 'aria-label': p, onClick: r.onClose },
        l,
      ),
    )
  );
}
var ya = ['_highlightResult', '_snippetResult'];
function _a(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (i, u) {
      if (i == null) return {};
      var s,
        l,
        c = {},
        p = Object.keys(i);
      for (l = 0; l < p.length; l++) (s = p[l]), u.indexOf(s) >= 0 || (c[s] = i[s]);
      return c;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function ga(e) {
  return (function () {
    var t = '__TEST_KEY__';
    try {
      return localStorage.setItem(t, ''), localStorage.removeItem(t), !0;
    } catch {
      return !1;
    }
  })() === !1
    ? {
        setItem: function () {},
        getItem: function () {
          return [];
        },
      }
    : {
        setItem: function (t) {
          return window.localStorage.setItem(e, JSON.stringify(t));
        },
        getItem: function () {
          var t = window.localStorage.getItem(e);
          return t ? JSON.parse(t) : [];
        },
      };
}
function Pn(e) {
  var t = e.key,
    n = e.limit,
    r = n === void 0 ? 5 : n,
    o = ga(t),
    a = o.getItem().slice(0, r);
  return {
    add: function (i) {
      var u = i,
        s = (u._highlightResult, u._snippetResult, _a(u, ya)),
        l = a.findIndex(function (c) {
          return c.objectID === s.objectID;
        });
      l > -1 && a.splice(l, 1), a.unshift(s), (a = a.slice(0, r)), o.setItem(a);
    },
    remove: function (i) {
      (a = a.filter(function (u) {
        return u.objectID !== i.objectID;
      })),
        o.setItem(a);
    },
    getAll: function () {
      return a;
    },
  };
}
var ba = ['facetName', 'facetQuery'];
function Oa(e) {
  var t,
    n = 'algoliasearch-client-js-'.concat(e.key),
    r = function () {
      return t === void 0 && (t = e.localStorage || window.localStorage), t;
    },
    o = function () {
      return JSON.parse(r().getItem(n) || '{}');
    };
  return {
    get: function (a, i) {
      var u =
        arguments.length > 2 && arguments[2] !== void 0
          ? arguments[2]
          : {
              miss: function () {
                return Promise.resolve();
              },
            };
      return Promise.resolve()
        .then(function () {
          var s = JSON.stringify(a),
            l = o()[s];
          return Promise.all([l || i(), l !== void 0]);
        })
        .then(function (s) {
          var l = Ve(s, 2),
            c = l[0],
            p = l[1];
          return Promise.all([c, p || u.miss(c)]);
        })
        .then(function (s) {
          return Ve(s, 1)[0];
        });
    },
    set: function (a, i) {
      return Promise.resolve().then(function () {
        var u = o();
        return (u[JSON.stringify(a)] = i), r().setItem(n, JSON.stringify(u)), i;
      });
    },
    delete: function (a) {
      return Promise.resolve().then(function () {
        var i = o();
        delete i[JSON.stringify(a)], r().setItem(n, JSON.stringify(i));
      });
    },
    clear: function () {
      return Promise.resolve().then(function () {
        r().removeItem(n);
      });
    },
  };
}
function be(e) {
  var t = Ke(e.caches),
    n = t.shift();
  return n === void 0
    ? {
        get: function (r, o) {
          var a =
            arguments.length > 2 && arguments[2] !== void 0
              ? arguments[2]
              : {
                  miss: function () {
                    return Promise.resolve();
                  },
                };
          return o()
            .then(function (i) {
              return Promise.all([i, a.miss(i)]);
            })
            .then(function (i) {
              return Ve(i, 1)[0];
            });
        },
        set: function (r, o) {
          return Promise.resolve(o);
        },
        delete: function (r) {
          return Promise.resolve();
        },
        clear: function () {
          return Promise.resolve();
        },
      }
    : {
        get: function (r, o) {
          var a =
            arguments.length > 2 && arguments[2] !== void 0
              ? arguments[2]
              : {
                  miss: function () {
                    return Promise.resolve();
                  },
                };
          return n.get(r, o, a).catch(function () {
            return be({ caches: t }).get(r, o, a);
          });
        },
        set: function (r, o) {
          return n.set(r, o).catch(function () {
            return be({ caches: t }).set(r, o);
          });
        },
        delete: function (r) {
          return n.delete(r).catch(function () {
            return be({ caches: t }).delete(r);
          });
        },
        clear: function () {
          return n.clear().catch(function () {
            return be({ caches: t }).clear();
          });
        },
      };
}
function ut() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { serializable: !0 },
    t = {};
  return {
    get: function (n, r) {
      var o =
          arguments.length > 2 && arguments[2] !== void 0
            ? arguments[2]
            : {
                miss: function () {
                  return Promise.resolve();
                },
              },
        a = JSON.stringify(n);
      if (a in t) return Promise.resolve(e.serializable ? JSON.parse(t[a]) : t[a]);
      var i = r(),
        u =
          (o && o.miss) ||
          function () {
            return Promise.resolve();
          };
      return i
        .then(function (s) {
          return u(s);
        })
        .then(function () {
          return i;
        });
    },
    set: function (n, r) {
      return (t[JSON.stringify(n)] = e.serializable ? JSON.stringify(r) : r), Promise.resolve(r);
    },
    delete: function (n) {
      return delete t[JSON.stringify(n)], Promise.resolve();
    },
    clear: function () {
      return (t = {}), Promise.resolve();
    },
  };
}
function Sa(e) {
  for (var t = e.length - 1; t > 0; t--) {
    var n = Math.floor(Math.random() * (t + 1)),
      r = e[t];
    (e[t] = e[n]), (e[n] = r);
  }
  return e;
}
function pr(e, t) {
  return (
    t &&
      Object.keys(t).forEach(function (n) {
        e[n] = t[n](e);
      }),
    e
  );
}
function Ye(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var o = 0;
  return e.replace(/%s/g, function () {
    return encodeURIComponent(n[o++]);
  });
}
var Be = { WithinQueryParameters: 0, WithinHeaders: 1 };
function In(e, t) {
  var n = e || {},
    r = n.data || {};
  return (
    Object.keys(n).forEach(function (o) {
      ['timeout', 'headers', 'queryParameters', 'data', 'cacheable'].indexOf(o) === -1 &&
        (r[o] = n[o]);
    }),
    {
      data: Object.entries(r).length > 0 ? r : void 0,
      timeout: n.timeout || t,
      headers: n.headers || {},
      queryParameters: n.queryParameters || {},
      cacheable: n.cacheable,
    }
  );
}
var ce = { Read: 1, Write: 2, Any: 3 },
  mr = 1,
  wa = 2,
  dr = 3;
function hr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : mr;
  return P(P({}, e), {}, { status: t, lastUpdate: Date.now() });
}
function vr(e) {
  return typeof e == 'string'
    ? { protocol: 'https', url: e, accept: ce.Any }
    : { protocol: e.protocol || 'https', url: e.url, accept: e.accept || ce.Any };
}
var kn = 'GET',
  Ge = 'POST';
function Ea(e, t) {
  return Promise.all(
    t.map(function (n) {
      return e.get(n, function () {
        return Promise.resolve(hr(n));
      });
    }),
  ).then(function (n) {
    var r = n.filter(function (i) {
        return (function (u) {
          return u.status === mr || Date.now() - u.lastUpdate > 12e4;
        })(i);
      }),
      o = n.filter(function (i) {
        return (function (u) {
          return u.status === dr && Date.now() - u.lastUpdate <= 12e4;
        })(i);
      }),
      a = [].concat(Ke(r), Ke(o));
    return {
      getTimeout: function (i, u) {
        return (o.length === 0 && i === 0 ? 1 : o.length + 3 + i) * u;
      },
      statelessHosts:
        a.length > 0
          ? a.map(function (i) {
              return vr(i);
            })
          : t,
    };
  });
}
function Dn(e, t, n, r) {
  var o = [],
    a = (function (m, d) {
      if (!(m.method === kn || (m.data === void 0 && d.data === void 0))) {
        var _ = Array.isArray(m.data) ? m.data : P(P({}, m.data), d.data);
        return JSON.stringify(_);
      }
    })(n, r),
    i = (function (m, d) {
      var _ = P(P({}, m.headers), d.headers),
        h = {};
      return (
        Object.keys(_).forEach(function (g) {
          var v = _[g];
          h[g.toLowerCase()] = v;
        }),
        h
      );
    })(e, r),
    u = n.method,
    s = n.method !== kn ? {} : P(P({}, n.data), r.data),
    l = P(P(P({ 'x-algolia-agent': e.userAgent.value }, e.queryParameters), s), r.queryParameters),
    c = 0,
    p = function m(d, _) {
      var h = d.pop();
      if (h === void 0)
        throw {
          name: 'RetryError',
          message:
            'Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.',
          transporterStackTrace: Cn(o),
        };
      var g = {
          data: a,
          headers: i,
          method: u,
          url: Pa(h, n.path, l),
          connectTimeout: _(c, e.timeouts.connect),
          responseTimeout: _(c, r.timeout),
        },
        v = function (O) {
          var y = { request: g, response: O, host: h, triesLeft: d.length };
          return o.push(y), y;
        },
        S = {
          onSucess: function (O) {
            return (function (y) {
              try {
                return JSON.parse(y.content);
              } catch (b) {
                throw (function (I, N) {
                  return { name: 'DeserializationError', message: I, response: N };
                })(b.message, y);
              }
            })(O);
          },
          onRetry: function (O) {
            var y = v(O);
            return (
              O.isTimedOut && c++,
              Promise.all([
                e.logger.info('Retryable failure', _r(y)),
                e.hostsCache.set(h, hr(h, O.isTimedOut ? dr : wa)),
              ]).then(function () {
                return m(d, _);
              })
            );
          },
          onFail: function (O) {
            throw (
              (v(O),
              (function (y, b) {
                var I = y.content,
                  N = y.status,
                  A = I;
                try {
                  A = JSON.parse(I).message;
                } catch {}
                return (function (k, R, L) {
                  return { name: 'ApiError', message: k, status: R, transporterStackTrace: L };
                })(A, N, b);
              })(O, Cn(o)))
            );
          },
        };
      return e.requester.send(g).then(function (O) {
        return (function (y, b) {
          return (function (I) {
            var N = I.status;
            return (
              I.isTimedOut ||
              (function (A) {
                var k = A.isTimedOut,
                  R = A.status;
                return !k && ~~R == 0;
              })(I) ||
              (~~(N / 100) != 2 && ~~(N / 100) != 4)
            );
          })(y)
            ? b.onRetry(y)
            : ~~(y.status / 100) == 2
            ? b.onSucess(y)
            : b.onFail(y);
        })(O, S);
      });
    };
  return Ea(e.hostsCache, t).then(function (m) {
    return p(Ke(m.statelessHosts).reverse(), m.getTimeout);
  });
}
function ja(e) {
  var t = {
    value: 'Algolia for JavaScript ('.concat(e, ')'),
    add: function (n) {
      var r = '; '
        .concat(n.segment)
        .concat(n.version !== void 0 ? ' ('.concat(n.version, ')') : '');
      return t.value.indexOf(r) === -1 && (t.value = ''.concat(t.value).concat(r)), t;
    },
  };
  return t;
}
function Pa(e, t, n) {
  var r = yr(n),
    o = ''
      .concat(e.protocol, '://')
      .concat(e.url, '/')
      .concat(t.charAt(0) === '/' ? t.substr(1) : t);
  return r.length && (o += '?'.concat(r)), o;
}
function yr(e) {
  return Object.keys(e)
    .map(function (t) {
      return Ye(
        '%s=%s',
        t,
        ((n = e[t]),
        Object.prototype.toString.call(n) === '[object Object]' ||
        Object.prototype.toString.call(n) === '[object Array]'
          ? JSON.stringify(e[t])
          : e[t]),
      );
      var n;
    })
    .join('&');
}
function Cn(e) {
  return e.map(function (t) {
    return _r(t);
  });
}
function _r(e) {
  var t = e.request.headers['x-algolia-api-key'] ? { 'x-algolia-api-key': '*****' } : {};
  return P(
    P({}, e),
    {},
    { request: P(P({}, e.request), {}, { headers: P(P({}, e.request.headers), t) }) },
  );
}
var Ia = function (e) {
    var t = e.appId,
      n = (function (a, i, u) {
        var s = { 'x-algolia-api-key': u, 'x-algolia-application-id': i };
        return {
          headers: function () {
            return a === Be.WithinHeaders ? s : {};
          },
          queryParameters: function () {
            return a === Be.WithinQueryParameters ? s : {};
          },
        };
      })(e.authMode !== void 0 ? e.authMode : Be.WithinHeaders, t, e.apiKey),
      r = (function (a) {
        var i = a.hostsCache,
          u = a.logger,
          s = a.requester,
          l = a.requestsCache,
          c = a.responsesCache,
          p = a.timeouts,
          m = a.userAgent,
          d = a.hosts,
          _ = a.queryParameters,
          h = {
            hostsCache: i,
            logger: u,
            requester: s,
            requestsCache: l,
            responsesCache: c,
            timeouts: p,
            userAgent: m,
            headers: a.headers,
            queryParameters: _,
            hosts: d.map(function (g) {
              return vr(g);
            }),
            read: function (g, v) {
              var S = In(v, h.timeouts.read),
                O = function () {
                  return Dn(
                    h,
                    h.hosts.filter(function (b) {
                      return (b.accept & ce.Read) != 0;
                    }),
                    g,
                    S,
                  );
                };
              if ((S.cacheable !== void 0 ? S.cacheable : g.cacheable) !== !0) return O();
              var y = {
                request: g,
                mappedRequestOptions: S,
                transporter: { queryParameters: h.queryParameters, headers: h.headers },
              };
              return h.responsesCache.get(
                y,
                function () {
                  return h.requestsCache.get(y, function () {
                    return h.requestsCache
                      .set(y, O())
                      .then(
                        function (b) {
                          return Promise.all([h.requestsCache.delete(y), b]);
                        },
                        function (b) {
                          return Promise.all([h.requestsCache.delete(y), Promise.reject(b)]);
                        },
                      )
                      .then(function (b) {
                        var I = Ve(b, 2);
                        return I[0], I[1];
                      });
                  });
                },
                {
                  miss: function (b) {
                    return h.responsesCache.set(y, b);
                  },
                },
              );
            },
            write: function (g, v) {
              return Dn(
                h,
                h.hosts.filter(function (S) {
                  return (S.accept & ce.Write) != 0;
                }),
                g,
                In(v, h.timeouts.write),
              );
            },
          };
        return h;
      })(
        P(
          P(
            {
              hosts: [
                { url: ''.concat(t, '-dsn.algolia.net'), accept: ce.Read },
                { url: ''.concat(t, '.algolia.net'), accept: ce.Write },
              ].concat(
                Sa([
                  { url: ''.concat(t, '-1.algolianet.com') },
                  { url: ''.concat(t, '-2.algolianet.com') },
                  { url: ''.concat(t, '-3.algolianet.com') },
                ]),
              ),
            },
            e,
          ),
          {},
          {
            headers: P(
              P(P({}, n.headers()), { 'content-type': 'application/x-www-form-urlencoded' }),
              e.headers,
            ),
            queryParameters: P(P({}, n.queryParameters()), e.queryParameters),
          },
        ),
      ),
      o = {
        transporter: r,
        appId: t,
        addAlgoliaAgent: function (a, i) {
          r.userAgent.add({ segment: a, version: i });
        },
        clearCache: function () {
          return Promise.all([r.requestsCache.clear(), r.responsesCache.clear()]).then(
            function () {},
          );
        },
      };
    return pr(o, e.methods);
  },
  gr = function (e) {
    return function (t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        r = { transporter: e.transporter, appId: e.appId, indexName: t };
      return pr(r, n.methods);
    };
  },
  An = function (e) {
    return function (t, n) {
      var r = t.map(function (o) {
        return P(P({}, o), {}, { params: yr(o.params || {}) });
      });
      return e.transporter.read(
        { method: Ge, path: '1/indexes/*/queries', data: { requests: r }, cacheable: !0 },
        n,
      );
    };
  },
  xn = function (e) {
    return function (t, n) {
      return Promise.all(
        t.map(function (r) {
          var o = r.params,
            a = o.facetName,
            i = o.facetQuery,
            u = Rr(o, ba);
          return gr(e)(r.indexName, { methods: { searchForFacetValues: br } }).searchForFacetValues(
            a,
            i,
            P(P({}, n), u),
          );
        }),
      );
    };
  },
  ka = function (e) {
    return function (t, n, r) {
      return e.transporter.read(
        {
          method: Ge,
          path: Ye('1/answers/%s/prediction', e.indexName),
          data: { query: t, queryLanguages: n },
          cacheable: !0,
        },
        r,
      );
    };
  },
  Da = function (e) {
    return function (t, n) {
      return e.transporter.read(
        {
          method: Ge,
          path: Ye('1/indexes/%s/query', e.indexName),
          data: { query: t },
          cacheable: !0,
        },
        n,
      );
    };
  },
  br = function (e) {
    return function (t, n, r) {
      return e.transporter.read(
        {
          method: Ge,
          path: Ye('1/indexes/%s/facets/%s/query', e.indexName, t),
          data: { facetQuery: n },
          cacheable: !0,
        },
        r,
      );
    };
  },
  Ca = 1,
  Aa = 2,
  xa = 3;
function Or(e, t, n) {
  var r,
    o = {
      appId: e,
      apiKey: t,
      timeouts: { connect: 1, read: 2, write: 30 },
      requester: {
        send: function (a) {
          return new Promise(function (i) {
            var u = new XMLHttpRequest();
            u.open(a.method, a.url, !0),
              Object.keys(a.headers).forEach(function (p) {
                return u.setRequestHeader(p, a.headers[p]);
              });
            var s,
              l = function (p, m) {
                return setTimeout(function () {
                  u.abort(), i({ status: 0, content: m, isTimedOut: !0 });
                }, 1e3 * p);
              },
              c = l(a.connectTimeout, 'Connection timeout');
            (u.onreadystatechange = function () {
              u.readyState > u.OPENED &&
                s === void 0 &&
                (clearTimeout(c), (s = l(a.responseTimeout, 'Socket timeout')));
            }),
              (u.onerror = function () {
                u.status === 0 &&
                  (clearTimeout(c),
                  clearTimeout(s),
                  i({
                    content: u.responseText || 'Network request failed',
                    status: u.status,
                    isTimedOut: !1,
                  }));
              }),
              (u.onload = function () {
                clearTimeout(c),
                  clearTimeout(s),
                  i({ content: u.responseText, status: u.status, isTimedOut: !1 });
              }),
              u.send(a.data);
          });
        },
      },
      logger:
        ((r = xa),
        {
          debug: function (a, i) {
            return Ca >= r && console.debug(a, i), Promise.resolve();
          },
          info: function (a, i) {
            return Aa >= r && console.info(a, i), Promise.resolve();
          },
          error: function (a, i) {
            return console.error(a, i), Promise.resolve();
          },
        }),
      responsesCache: ut(),
      requestsCache: ut({ serializable: !1 }),
      hostsCache: be({ caches: [Oa({ key: ''.concat('4.8.5', '-').concat(e) }), ut()] }),
      userAgent: ja('4.8.5').add({ segment: 'Browser', version: 'lite' }),
      authMode: Be.WithinQueryParameters,
    };
  return Ia(
    P(
      P(P({}, o), n),
      {},
      {
        methods: {
          search: An,
          searchForFacetValues: xn,
          multipleQueries: An,
          multipleSearchForFacetValues: xn,
          initIndex: function (a) {
            return function (i) {
              return gr(a)(i, {
                methods: { search: Da, searchForFacetValues: br, findAnswers: ka },
              });
            };
          },
        },
      },
    ),
  );
}
Or.version = '4.8.5';
var Na = ['footer', 'searchBox'];
function we() {
  return (
    (we =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    we.apply(this, arguments)
  );
}
function Nn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function lt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Nn(Object(n), !0).forEach(function (r) {
          Ra(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Nn(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Ra(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function Ta(e, t) {
  return (
    (function (n) {
      if (Array.isArray(n)) return n;
    })(e) ||
    (function (n, r) {
      var o = n == null ? null : (typeof Symbol < 'u' && n[Symbol.iterator]) || n['@@iterator'];
      if (o != null) {
        var a,
          i,
          u = [],
          s = !0,
          l = !1;
        try {
          for (
            o = o.call(n);
            !(s = (a = o.next()).done) && (u.push(a.value), !r || u.length !== r);
            s = !0
          );
        } catch (c) {
          (l = !0), (i = c);
        } finally {
          try {
            s || o.return == null || o.return();
          } finally {
            if (l) throw i;
          }
        }
        return u;
      }
    })(e, t) ||
    (function (n, r) {
      if (n) {
        if (typeof n == 'string') return Rn(n, r);
        var o = Object.prototype.toString.call(n).slice(8, -1);
        if (
          (o === 'Object' && n.constructor && (o = n.constructor.name), o === 'Map' || o === 'Set')
        )
          return Array.from(n);
        if (o === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
          return Rn(n, r);
      }
    })(e, t) ||
    (function () {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function Rn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function La(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (i, u) {
      if (i == null) return {};
      var s,
        l,
        c = {},
        p = Object.keys(i);
      for (l = 0; l < p.length; l++) (s = p[l]), u.indexOf(s) >= 0 || (c[s] = i[s]);
      return c;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function qa(e) {
  var t = e.appId,
    n = e.apiKey,
    r = e.indexName,
    o = e.placeholder,
    a = o === void 0 ? 'Search docs' : o,
    i = e.searchParameters,
    u = e.onClose,
    s = u === void 0 ? aa : u,
    l = e.transformItems,
    c = l === void 0 ? jn : l,
    p = e.hitComponent,
    m = p === void 0 ? Uo : p,
    d = e.resultsFooterComponent,
    _ =
      d === void 0
        ? function () {
            return null;
          }
        : d,
    h = e.navigator,
    g = e.initialScrollY,
    v = g === void 0 ? 0 : g,
    S = e.transformSearchClient,
    O = S === void 0 ? jn : S,
    y = e.disableUserPersonalization,
    b = y !== void 0 && y,
    I = e.initialQuery,
    N = I === void 0 ? '' : I,
    A = e.translations,
    k = A === void 0 ? {} : A,
    R = e.getMissingResultsUrl,
    L = k.footer,
    B = k.searchBox,
    q = La(k, Na),
    De = Ta(
      f.useState({
        query: '',
        collections: [],
        completion: null,
        context: {},
        isOpen: !1,
        activeItemId: null,
        status: 'idle',
      }),
      2,
    ),
    Y = De[0],
    Xe = De[1],
    se = f.useRef(null),
    et = f.useRef(null),
    Pt = f.useRef(null),
    Ce = f.useRef(null),
    fe = f.useRef(null),
    $ = f.useRef(10),
    It = f.useRef(typeof window < 'u' ? window.getSelection().toString().slice(0, 64) : '').current,
    G = f.useRef(N || It).current,
    kt = (function (j, D, M) {
      return f.useMemo(
        function () {
          var H = Or(j, D);
          return (
            H.addAlgoliaAgent('docsearch', '3.3.0'),
            /docsearch.js \(.*\)/.test(H.transporter.userAgent.value) === !1 &&
              H.addAlgoliaAgent('docsearch-react', '3.3.0'),
            M(H)
          );
        },
        [j, D, M],
      );
    })(t, n, O),
    te = f.useRef(Pn({ key: '__DOCSEARCH_FAVORITE_SEARCHES__'.concat(r), limit: 10 })).current,
    pe = f.useRef(
      Pn({
        key: '__DOCSEARCH_RECENT_SEARCHES__'.concat(r),
        limit: te.getAll().length === 0 ? 7 : 4,
      }),
    ).current,
    me = f.useCallback(
      function (j) {
        if (!b) {
          var D = j.type === 'content' ? j.__docsearch_parent : j;
          D &&
            te.getAll().findIndex(function (M) {
              return M.objectID === D.objectID;
            }) === -1 &&
            pe.add(D);
        }
      },
      [te, pe, b],
    ),
    de = f.useMemo(
      function () {
        return qo({
          id: 'docsearch',
          defaultActiveItemId: 0,
          placeholder: a,
          openOnFocus: !0,
          initialState: { query: G, context: { searchSuggestions: [] } },
          navigator: h,
          onStateChange: function (j) {
            Xe(j.state);
          },
          getSources: function (j) {
            var D = j.query,
              M = j.state,
              H = j.setContext,
              Q = j.setStatus;
            return D
              ? kt
                  .search([
                    {
                      query: D,
                      indexName: r,
                      params: lt(
                        {
                          attributesToRetrieve: [
                            'hierarchy.lvl0',
                            'hierarchy.lvl1',
                            'hierarchy.lvl2',
                            'hierarchy.lvl3',
                            'hierarchy.lvl4',
                            'hierarchy.lvl5',
                            'hierarchy.lvl6',
                            'content',
                            'type',
                            'url',
                          ],
                          attributesToSnippet: [
                            'hierarchy.lvl1:'.concat($.current),
                            'hierarchy.lvl2:'.concat($.current),
                            'hierarchy.lvl3:'.concat($.current),
                            'hierarchy.lvl4:'.concat($.current),
                            'hierarchy.lvl5:'.concat($.current),
                            'hierarchy.lvl6:'.concat($.current),
                            'content:'.concat($.current),
                          ],
                          snippetEllipsisText: '…',
                          highlightPreTag: '<mark>',
                          highlightPostTag: '</mark>',
                          hitsPerPage: 20,
                        },
                        i,
                      ),
                    },
                  ])
                  .catch(function (C) {
                    throw (C.name === 'RetryError' && Q('error'), C);
                  })
                  .then(function (C) {
                    var U = C.results[0],
                      F = U.hits,
                      Er = U.nbHits,
                      tt = En(F, function (nt) {
                        return fr(nt);
                      });
                    return (
                      M.context.searchSuggestions.length < Object.keys(tt).length &&
                        H({ searchSuggestions: Object.keys(tt) }),
                      H({ nbHits: Er }),
                      Object.values(tt).map(function (nt, jr) {
                        return {
                          sourceId: 'hits'.concat(jr),
                          onSelect: function (W) {
                            var he = W.item,
                              ne = W.event;
                            me(he), ne.shiftKey || ne.ctrlKey || ne.metaKey || s();
                          },
                          getItemUrl: function (W) {
                            return W.item.url;
                          },
                          getItems: function () {
                            return Object.values(
                              En(nt, function (W) {
                                return W.hierarchy.lvl1;
                              }),
                            )
                              .map(c)
                              .map(function (W) {
                                return W.map(function (he) {
                                  return lt(
                                    lt({}, he),
                                    {},
                                    {
                                      __docsearch_parent:
                                        he.type !== 'lvl1' &&
                                        W.find(function (ne) {
                                          return (
                                            ne.type === 'lvl1' &&
                                            ne.hierarchy.lvl1 === he.hierarchy.lvl1
                                          );
                                        }),
                                    },
                                  );
                                });
                              })
                              .flat();
                          },
                        };
                      })
                    );
                  })
              : b
              ? []
              : [
                  {
                    sourceId: 'recentSearches',
                    onSelect: function (C) {
                      var U = C.item,
                        F = C.event;
                      me(U), F.shiftKey || F.ctrlKey || F.metaKey || s();
                    },
                    getItemUrl: function (C) {
                      return C.item.url;
                    },
                    getItems: function () {
                      return pe.getAll();
                    },
                  },
                  {
                    sourceId: 'favoriteSearches',
                    onSelect: function (C) {
                      var U = C.item,
                        F = C.event;
                      me(U), F.shiftKey || F.ctrlKey || F.metaKey || s();
                    },
                    getItemUrl: function (C) {
                      return C.item.url;
                    },
                    getItems: function () {
                      return te.getAll();
                    },
                  },
                ];
          },
        });
      },
      [r, i, kt, s, pe, te, me, G, a, h, c, b],
    ),
    Sr = de.getEnvironmentProps,
    wr = de.getRootProps,
    Dt = de.refresh;
  return (
    (function (j) {
      var D = j.getEnvironmentProps,
        M = j.panelElement,
        H = j.formElement,
        Q = j.inputElement;
      f.useEffect(
        function () {
          if (M && H && Q) {
            var C = D({ panelElement: M, formElement: H, inputElement: Q }),
              U = C.onTouchStart,
              F = C.onTouchMove;
            return (
              window.addEventListener('touchstart', U),
              window.addEventListener('touchmove', F),
              function () {
                window.removeEventListener('touchstart', U),
                  window.removeEventListener('touchmove', F);
              }
            );
          }
        },
        [D, M, H, Q],
      );
    })({
      getEnvironmentProps: Sr,
      panelElement: Ce.current,
      formElement: Pt.current,
      inputElement: fe.current,
    }),
    (function (j) {
      var D = j.container;
      f.useEffect(
        function () {
          if (D) {
            var M = D.querySelectorAll(
                'a[href]:not([disabled]), button:not([disabled]), input:not([disabled])',
              ),
              H = M[0],
              Q = M[M.length - 1];
            return (
              D.addEventListener('keydown', C),
              function () {
                D.removeEventListener('keydown', C);
              }
            );
          }
          function C(U) {
            U.key === 'Tab' &&
              (U.shiftKey
                ? document.activeElement === H && (U.preventDefault(), Q.focus())
                : document.activeElement === Q && (U.preventDefault(), H.focus()));
          }
        },
        [D],
      );
    })({ container: se.current }),
    f.useEffect(function () {
      return (
        document.body.classList.add('DocSearch--active'),
        function () {
          var j, D;
          document.body.classList.remove('DocSearch--active'),
            (j = (D = window).scrollTo) === null || j === void 0 || j.call(D, 0, v);
        }
      );
    }, []),
    f.useEffect(function () {
      window.matchMedia('(max-width: 768px)').matches && ($.current = 5);
    }, []),
    f.useEffect(
      function () {
        Ce.current && (Ce.current.scrollTop = 0);
      },
      [Y.query],
    ),
    f.useEffect(
      function () {
        G.length > 0 && (Dt(), fe.current && fe.current.focus());
      },
      [G, Dt],
    ),
    f.useEffect(function () {
      function j() {
        if (et.current) {
          var D = 0.01 * window.innerHeight;
          et.current.style.setProperty('--docsearch-vh', ''.concat(D, 'px'));
        }
      }
      return (
        j(),
        window.addEventListener('resize', j),
        function () {
          window.removeEventListener('resize', j);
        }
      );
    }, []),
    f.createElement(
      'div',
      we({ ref: se }, wr({ 'aria-expanded': !0 }), {
        className: [
          'DocSearch',
          'DocSearch-Container',
          Y.status === 'stalled' && 'DocSearch-Container--Stalled',
          Y.status === 'error' && 'DocSearch-Container--Errored',
        ]
          .filter(Boolean)
          .join(' '),
        role: 'button',
        tabIndex: 0,
        onMouseDown: function (j) {
          j.target === j.currentTarget && s();
        },
      }),
      f.createElement(
        'div',
        { className: 'DocSearch-Modal', ref: et },
        f.createElement(
          'header',
          { className: 'DocSearch-SearchBar', ref: Pt },
          f.createElement(
            va,
            we({}, de, {
              state: Y,
              autoFocus: G.length === 0,
              inputRef: fe,
              isFromSelection: Boolean(G) && G === It,
              translations: B,
              onClose: s,
            }),
          ),
        ),
        f.createElement(
          'div',
          { className: 'DocSearch-Dropdown', ref: Ce },
          f.createElement(
            ma,
            we({}, de, {
              indexName: r,
              state: Y,
              hitComponent: m,
              resultsFooterComponent: _,
              disableUserPersonalization: b,
              recentSearches: pe,
              favoriteSearches: te,
              inputRef: fe,
              translations: q,
              getMissingResultsUrl: R,
              onItemClick: function (j) {
                me(j), s();
              },
            }),
          ),
        ),
        f.createElement(
          'footer',
          { className: 'DocSearch-Footer' },
          f.createElement(Ho, { translations: L }),
        ),
      ),
    )
  );
}
function St() {
  return (
    (St =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    St.apply(this, arguments)
  );
}
function Tn(e, t) {
  return (
    (function (n) {
      if (Array.isArray(n)) return n;
    })(e) ||
    (function (n, r) {
      var o = n == null ? null : (typeof Symbol < 'u' && n[Symbol.iterator]) || n['@@iterator'];
      if (o != null) {
        var a,
          i,
          u = [],
          s = !0,
          l = !1;
        try {
          for (
            o = o.call(n);
            !(s = (a = o.next()).done) && (u.push(a.value), !r || u.length !== r);
            s = !0
          );
        } catch (c) {
          (l = !0), (i = c);
        } finally {
          try {
            s || o.return == null || o.return();
          } finally {
            if (l) throw i;
          }
        }
        return u;
      }
    })(e, t) ||
    (function (n, r) {
      if (n) {
        if (typeof n == 'string') return Ln(n, r);
        var o = Object.prototype.toString.call(n).slice(8, -1);
        if (
          (o === 'Object' && n.constructor && (o = n.constructor.name), o === 'Map' || o === 'Set')
        )
          return Array.from(n);
        if (o === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
          return Ln(n, r);
      }
    })(e, t) ||
    (function () {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function Ln(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Ma(e) {
  var t,
    n,
    r = f.useRef(null),
    o = Tn(f.useState(!1), 2),
    a = o[0],
    i = o[1],
    u = Tn(f.useState((e == null ? void 0 : e.initialQuery) || void 0), 2),
    s = u[0],
    l = u[1],
    c = f.useCallback(
      function () {
        i(!0);
      },
      [i],
    ),
    p = f.useCallback(
      function () {
        i(!1);
      },
      [i],
    );
  return (
    (function (m) {
      var d = m.isOpen,
        _ = m.onOpen,
        h = m.onClose,
        g = m.onInput,
        v = m.searchButtonRef;
      f.useEffect(
        function () {
          function S(O) {
            ((O.keyCode === 27 && d) ||
              (O.key.toLowerCase() === 'k' && (O.metaKey || O.ctrlKey)) ||
              (!(function (y) {
                var b = y.target,
                  I = b.tagName;
                return b.isContentEditable || I === 'INPUT' || I === 'SELECT' || I === 'TEXTAREA';
              })(O) &&
                O.key === '/' &&
                !d)) &&
              (O.preventDefault(),
              d
                ? h()
                : document.body.classList.contains('DocSearch--active') ||
                  document.body.classList.contains('DocSearch--active') ||
                  _()),
              v &&
                v.current === document.activeElement &&
                g &&
                /[a-zA-Z0-9]/.test(String.fromCharCode(O.keyCode)) &&
                g(O);
          }
          return (
            window.addEventListener('keydown', S),
            function () {
              window.removeEventListener('keydown', S);
            }
          );
        },
        [d, _, h, g, v],
      );
    })({
      isOpen: a,
      onOpen: c,
      onClose: p,
      onInput: f.useCallback(
        function (m) {
          i(!0), l(m.key);
        },
        [i, l],
      ),
      searchButtonRef: r,
    }),
    f.createElement(
      f.Fragment,
      null,
      f.createElement(to, {
        ref: r,
        translations:
          e == null || (t = e.translations) === null || t === void 0 ? void 0 : t.button,
        onClick: c,
      }),
      a &&
        nr(
          f.createElement(
            qa,
            St({}, e, {
              initialScrollY: window.scrollY,
              initialQuery: s,
              translations:
                e == null || (n = e.translations) === null || n === void 0 ? void 0 : n.modal,
              onClose: p,
            }),
          ),
          document.body,
        ),
    )
  );
}
function qn(e) {
  or(
    f.createElement(
      Ma,
      st({}, e, {
        transformSearchClient: function (t) {
          return (
            t.addAlgoliaAgent('docsearch.js', '3.3.0'),
            e.transformSearchClient ? e.transformSearchClient(t) : t
          );
        },
      }),
    ),
    (function (t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : window;
      return typeof t == 'string' ? n.document.querySelector(t) : t;
    })(e.container, e.environment),
  );
}
const Ha = { id: 'docsearch' },
  Fa = Pr({
    __name: 'VPAlgoliaSearchBox',
    setup(e) {
      const t = Ir(),
        n = kr(),
        { theme: r, site: o } = Dr();
      Cr(() => {
        u(r.value.algolia), setTimeout(a, 16);
      });
      function a() {
        const l = new Event('keydown');
        (l.key = 'k'),
          (l.metaKey = !0),
          window.dispatchEvent(l),
          setTimeout(() => {
            document.querySelector('.DocSearch-Modal') || a();
          }, 16);
      }
      const i = qn.default ?? qn;
      function u(l) {
        const c = Object.assign({}, l, {
          container: '#docsearch',
          navigator: {
            navigate({ itemUrl: p }) {
              const { pathname: m } = new URL(window.location.origin + p);
              n.path === m ? window.location.assign(window.location.origin + p) : t.go(p);
            },
          },
          transformItems(p) {
            return p.map((m) => Object.assign({}, m, { url: s(m.url) }));
          },
          hitComponent({ hit: p, children: m }) {
            return {
              __v: null,
              type: 'a',
              ref: void 0,
              constructor: void 0,
              key: void 0,
              props: { href: p.url, children: m },
            };
          },
        });
        i(c);
      }
      function s(l) {
        const { pathname: c, hash: p } = new URL(l);
        return c.replace(/\.html$/, o.value.cleanUrls === 'disabled' ? '.html' : '') + p;
      }
      return (l, c) => (Ar(), xr('div', Ha));
    },
  });
export { Fa as default };
