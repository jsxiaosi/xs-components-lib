function Pa(t, r) {
  const i = Object.create(null),
    o = t.split(',');
  for (let l = 0; l < o.length; l++) i[o[l]] = !0;
  return r ? (l) => !!i[l.toLowerCase()] : (l) => !!i[l];
}
function ns(t) {
  if (me(t)) {
    const r = {};
    for (let i = 0; i < t.length; i++) {
      const o = t[i],
        l = at(o) ? M2(o) : ns(o);
      if (l) for (const u in l) r[u] = l[u];
    }
    return r;
  } else {
    if (at(t)) return t;
    if (tt(t)) return t;
  }
}
const L2 = /;(?![^(]*\))/g,
  I2 = /:([^]+)/,
  k2 = /\/\*.*?\*\//gs;
function M2(t) {
  const r = {};
  return (
    t
      .replace(k2, '')
      .split(L2)
      .forEach((i) => {
        if (i) {
          const o = i.split(I2);
          o.length > 1 && (r[o[0].trim()] = o[1].trim());
        }
      }),
    r
  );
}
function Ke(t) {
  let r = '';
  if (at(t)) r = t;
  else if (me(t))
    for (let i = 0; i < t.length; i++) {
      const o = Ke(t[i]);
      o && (r += o + ' ');
    }
  else if (tt(t)) for (const i in t) t[i] && (r += i + ' ');
  return r.trim();
}
function O2(t) {
  if (!t) return null;
  let { class: r, style: i } = t;
  return r && !at(r) && (t.class = Ke(r)), i && (t.style = ns(i)), t;
}
const R2 = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  B2 = Pa(R2);
function Sd(t) {
  return !!t || t === '';
}
const Ze = (t) =>
    at(t)
      ? t
      : t == null
      ? ''
      : me(t) || (tt(t) && (t.toString === Ld || !$e(t.toString)))
      ? JSON.stringify(t, Ad, 2)
      : String(t),
  Ad = (t, r) =>
    r && r.__v_isRef
      ? Ad(t, r.value)
      : ei(r)
      ? { [`Map(${r.size})`]: [...r.entries()].reduce((i, [o, l]) => ((i[`${o} =>`] = l), i), {}) }
      : Td(r)
      ? { [`Set(${r.size})`]: [...r.values()] }
      : tt(r) && !me(r) && !Id(r)
      ? String(r)
      : r,
  et = {},
  jr = [],
  gn = () => {},
  V2 = () => !1,
  N2 = /^on[^a-z]/,
  rs = (t) => N2.test(t),
  $a = (t) => t.startsWith('onUpdate:'),
  _t = Object.assign,
  Sa = (t, r) => {
    const i = t.indexOf(r);
    i > -1 && t.splice(i, 1);
  },
  F2 = Object.prototype.hasOwnProperty,
  He = (t, r) => F2.call(t, r),
  me = Array.isArray,
  ei = (t) => yo(t) === '[object Map]',
  Td = (t) => yo(t) === '[object Set]',
  $e = (t) => typeof t == 'function',
  at = (t) => typeof t == 'string',
  Aa = (t) => typeof t == 'symbol',
  tt = (t) => t !== null && typeof t == 'object',
  Ed = (t) => tt(t) && $e(t.then) && $e(t.catch),
  Ld = Object.prototype.toString,
  yo = (t) => Ld.call(t),
  H2 = (t) => yo(t).slice(8, -1),
  Id = (t) => yo(t) === '[object Object]',
  Ta = (t) => at(t) && t !== 'NaN' && t[0] !== '-' && '' + parseInt(t, 10) === t,
  Hi = Pa(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  bo = (t) => {
    const r = Object.create(null);
    return (i) => r[i] || (r[i] = t(i));
  },
  D2 = /-(\w)/g,
  An = bo((t) => t.replace(D2, (r, i) => (i ? i.toUpperCase() : ''))),
  U2 = /\B([A-Z])/g,
  _i = bo((t) => t.replace(U2, '-$1').toLowerCase()),
  wo = bo((t) => t.charAt(0).toUpperCase() + t.slice(1)),
  io = bo((t) => (t ? `on${wo(t)}` : '')),
  Gi = (t, r) => !Object.is(t, r),
  Jl = (t, r) => {
    for (let i = 0; i < t.length; i++) t[i](r);
  },
  oo = (t, r, i) => {
    Object.defineProperty(t, r, { configurable: !0, enumerable: !1, value: i });
  },
  Ea = (t) => {
    const r = parseFloat(t);
    return isNaN(r) ? t : r;
  };
let Ef;
const W2 = () =>
  Ef ||
  (Ef =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : {});
let Kt;
class z2 {
  constructor(r = !1) {
    (this.detached = r),
      (this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Kt),
      !r && Kt && (this.index = (Kt.scopes || (Kt.scopes = [])).push(this) - 1);
  }
  run(r) {
    if (this.active) {
      const i = Kt;
      try {
        return (Kt = this), r();
      } finally {
        Kt = i;
      }
    }
  }
  on() {
    Kt = this;
  }
  off() {
    Kt = this.parent;
  }
  stop(r) {
    if (this.active) {
      let i, o;
      for (i = 0, o = this.effects.length; i < o; i++) this.effects[i].stop();
      for (i = 0, o = this.cleanups.length; i < o; i++) this.cleanups[i]();
      if (this.scopes) for (i = 0, o = this.scopes.length; i < o; i++) this.scopes[i].stop(!0);
      if (!this.detached && this.parent && !r) {
        const l = this.parent.scopes.pop();
        l && l !== this && ((this.parent.scopes[this.index] = l), (l.index = this.index));
      }
      (this.parent = void 0), (this.active = !1);
    }
  }
}
function K2(t, r = Kt) {
  r && r.active && r.effects.push(t);
}
function q2() {
  return Kt;
}
function G2(t) {
  Kt && Kt.cleanups.push(t);
}
const La = (t) => {
    const r = new Set(t);
    return (r.w = 0), (r.n = 0), r;
  },
  kd = (t) => (t.w & fr) > 0,
  Md = (t) => (t.n & fr) > 0,
  Y2 = ({ deps: t }) => {
    if (t.length) for (let r = 0; r < t.length; r++) t[r].w |= fr;
  },
  Z2 = (t) => {
    const { deps: r } = t;
    if (r.length) {
      let i = 0;
      for (let o = 0; o < r.length; o++) {
        const l = r[o];
        kd(l) && !Md(l) ? l.delete(t) : (r[i++] = l), (l.w &= ~fr), (l.n &= ~fr);
      }
      r.length = i;
    }
  },
  ua = new WeakMap();
let Fi = 0,
  fr = 1;
const ca = 30;
let _n;
const kr = Symbol(''),
  fa = Symbol('');
class Ia {
  constructor(r, i = null, o) {
    (this.fn = r),
      (this.scheduler = i),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      K2(this, o);
  }
  run() {
    if (!this.active) return this.fn();
    let r = _n,
      i = ur;
    for (; r; ) {
      if (r === this) return;
      r = r.parent;
    }
    try {
      return (
        (this.parent = _n),
        (_n = this),
        (ur = !0),
        (fr = 1 << ++Fi),
        Fi <= ca ? Y2(this) : Lf(this),
        this.fn()
      );
    } finally {
      Fi <= ca && Z2(this),
        (fr = 1 << --Fi),
        (_n = this.parent),
        (ur = i),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    _n === this
      ? (this.deferStop = !0)
      : this.active && (Lf(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function Lf(t) {
  const { deps: r } = t;
  if (r.length) {
    for (let i = 0; i < r.length; i++) r[i].delete(t);
    r.length = 0;
  }
}
let ur = !0;
const Od = [];
function pi() {
  Od.push(ur), (ur = !1);
}
function gi() {
  const t = Od.pop();
  ur = t === void 0 ? !0 : t;
}
function Gt(t, r, i) {
  if (ur && _n) {
    let o = ua.get(t);
    o || ua.set(t, (o = new Map()));
    let l = o.get(i);
    l || o.set(i, (l = La())), Rd(l);
  }
}
function Rd(t, r) {
  let i = !1;
  Fi <= ca ? Md(t) || ((t.n |= fr), (i = !kd(t))) : (i = !t.has(_n)),
    i && (t.add(_n), _n.deps.push(t));
}
function Wn(t, r, i, o, l, u) {
  const c = ua.get(t);
  if (!c) return;
  let d = [];
  if (r === 'clear') d = [...c.values()];
  else if (i === 'length' && me(t)) {
    const p = Ea(o);
    c.forEach((v, x) => {
      (x === 'length' || x >= p) && d.push(v);
    });
  } else
    switch ((i !== void 0 && d.push(c.get(i)), r)) {
      case 'add':
        me(t) ? Ta(i) && d.push(c.get('length')) : (d.push(c.get(kr)), ei(t) && d.push(c.get(fa)));
        break;
      case 'delete':
        me(t) || (d.push(c.get(kr)), ei(t) && d.push(c.get(fa)));
        break;
      case 'set':
        ei(t) && d.push(c.get(kr));
        break;
    }
  if (d.length === 1) d[0] && da(d[0]);
  else {
    const p = [];
    for (const v of d) v && p.push(...v);
    da(La(p));
  }
}
function da(t, r) {
  const i = me(t) ? t : [...t];
  for (const o of i) o.computed && If(o);
  for (const o of i) o.computed || If(o);
}
function If(t, r) {
  (t !== _n || t.allowRecurse) && (t.scheduler ? t.scheduler() : t.run());
}
const X2 = Pa('__proto__,__v_isRef,__isVue'),
  Bd = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((t) => t !== 'arguments' && t !== 'caller')
      .map((t) => Symbol[t])
      .filter(Aa),
  ),
  J2 = ka(),
  Q2 = ka(!1, !0),
  j2 = ka(!0),
  kf = ey();
function ey() {
  const t = {};
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((r) => {
      t[r] = function (...i) {
        const o = Ue(this);
        for (let u = 0, c = this.length; u < c; u++) Gt(o, 'get', u + '');
        const l = o[r](...i);
        return l === -1 || l === !1 ? o[r](...i.map(Ue)) : l;
      };
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((r) => {
      t[r] = function (...i) {
        pi();
        const o = Ue(this)[r].apply(this, i);
        return gi(), o;
      };
    }),
    t
  );
}
function ka(t = !1, r = !1) {
  return function (o, l, u) {
    if (l === '__v_isReactive') return !t;
    if (l === '__v_isReadonly') return t;
    if (l === '__v_isShallow') return r;
    if (l === '__v_raw' && u === (t ? (r ? gy : Dd) : r ? Hd : Fd).get(o)) return o;
    const c = me(o);
    if (!t && c && He(kf, l)) return Reflect.get(kf, l, u);
    const d = Reflect.get(o, l, u);
    return (Aa(l) ? Bd.has(l) : X2(l)) || (t || Gt(o, 'get', l), r)
      ? d
      : Ct(d)
      ? c && Ta(l)
        ? d
        : d.value
      : tt(d)
      ? t
        ? Ra(d)
        : Co(d)
      : d;
  };
}
const ty = Vd(),
  ny = Vd(!0);
function Vd(t = !1) {
  return function (i, o, l, u) {
    let c = i[o];
    if (ai(c) && Ct(c) && !Ct(l)) return !1;
    if (!t && (!lo(l) && !ai(l) && ((c = Ue(c)), (l = Ue(l))), !me(i) && Ct(c) && !Ct(l)))
      return (c.value = l), !0;
    const d = me(i) && Ta(o) ? Number(o) < i.length : He(i, o),
      p = Reflect.set(i, o, l, u);
    return i === Ue(u) && (d ? Gi(l, c) && Wn(i, 'set', o, l) : Wn(i, 'add', o, l)), p;
  };
}
function ry(t, r) {
  const i = He(t, r);
  t[r];
  const o = Reflect.deleteProperty(t, r);
  return o && i && Wn(t, 'delete', r, void 0), o;
}
function iy(t, r) {
  const i = Reflect.has(t, r);
  return (!Aa(r) || !Bd.has(r)) && Gt(t, 'has', r), i;
}
function sy(t) {
  return Gt(t, 'iterate', me(t) ? 'length' : kr), Reflect.ownKeys(t);
}
const Nd = { get: J2, set: ty, deleteProperty: ry, has: iy, ownKeys: sy },
  oy = {
    get: j2,
    set(t, r) {
      return !0;
    },
    deleteProperty(t, r) {
      return !0;
    },
  },
  ly = _t({}, Nd, { get: Q2, set: ny }),
  Ma = (t) => t,
  xo = (t) => Reflect.getPrototypeOf(t);
function Zs(t, r, i = !1, o = !1) {
  t = t.__v_raw;
  const l = Ue(t),
    u = Ue(r);
  i || (r !== u && Gt(l, 'get', r), Gt(l, 'get', u));
  const { has: c } = xo(l),
    d = o ? Ma : i ? Va : Yi;
  if (c.call(l, r)) return d(t.get(r));
  if (c.call(l, u)) return d(t.get(u));
  t !== l && t.get(r);
}
function Xs(t, r = !1) {
  const i = this.__v_raw,
    o = Ue(i),
    l = Ue(t);
  return (
    r || (t !== l && Gt(o, 'has', t), Gt(o, 'has', l)), t === l ? i.has(t) : i.has(t) || i.has(l)
  );
}
function Js(t, r = !1) {
  return (t = t.__v_raw), !r && Gt(Ue(t), 'iterate', kr), Reflect.get(t, 'size', t);
}
function Mf(t) {
  t = Ue(t);
  const r = Ue(this);
  return xo(r).has.call(r, t) || (r.add(t), Wn(r, 'add', t, t)), this;
}
function Of(t, r) {
  r = Ue(r);
  const i = Ue(this),
    { has: o, get: l } = xo(i);
  let u = o.call(i, t);
  u || ((t = Ue(t)), (u = o.call(i, t)));
  const c = l.call(i, t);
  return i.set(t, r), u ? Gi(r, c) && Wn(i, 'set', t, r) : Wn(i, 'add', t, r), this;
}
function Rf(t) {
  const r = Ue(this),
    { has: i, get: o } = xo(r);
  let l = i.call(r, t);
  l || ((t = Ue(t)), (l = i.call(r, t))), o && o.call(r, t);
  const u = r.delete(t);
  return l && Wn(r, 'delete', t, void 0), u;
}
function Bf() {
  const t = Ue(this),
    r = t.size !== 0,
    i = t.clear();
  return r && Wn(t, 'clear', void 0, void 0), i;
}
function Qs(t, r) {
  return function (o, l) {
    const u = this,
      c = u.__v_raw,
      d = Ue(c),
      p = r ? Ma : t ? Va : Yi;
    return !t && Gt(d, 'iterate', kr), c.forEach((v, x) => o.call(l, p(v), p(x), u));
  };
}
function js(t, r, i) {
  return function (...o) {
    const l = this.__v_raw,
      u = Ue(l),
      c = ei(u),
      d = t === 'entries' || (t === Symbol.iterator && c),
      p = t === 'keys' && c,
      v = l[t](...o),
      x = i ? Ma : r ? Va : Yi;
    return (
      !r && Gt(u, 'iterate', p ? fa : kr),
      {
        next() {
          const { value: $, done: E } = v.next();
          return E ? { value: $, done: E } : { value: d ? [x($[0]), x($[1])] : x($), done: E };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function ir(t) {
  return function (...r) {
    return t === 'delete' ? !1 : this;
  };
}
function ay() {
  const t = {
      get(u) {
        return Zs(this, u);
      },
      get size() {
        return Js(this);
      },
      has: Xs,
      add: Mf,
      set: Of,
      delete: Rf,
      clear: Bf,
      forEach: Qs(!1, !1),
    },
    r = {
      get(u) {
        return Zs(this, u, !1, !0);
      },
      get size() {
        return Js(this);
      },
      has: Xs,
      add: Mf,
      set: Of,
      delete: Rf,
      clear: Bf,
      forEach: Qs(!1, !0),
    },
    i = {
      get(u) {
        return Zs(this, u, !0);
      },
      get size() {
        return Js(this, !0);
      },
      has(u) {
        return Xs.call(this, u, !0);
      },
      add: ir('add'),
      set: ir('set'),
      delete: ir('delete'),
      clear: ir('clear'),
      forEach: Qs(!0, !1),
    },
    o = {
      get(u) {
        return Zs(this, u, !0, !0);
      },
      get size() {
        return Js(this, !0);
      },
      has(u) {
        return Xs.call(this, u, !0);
      },
      add: ir('add'),
      set: ir('set'),
      delete: ir('delete'),
      clear: ir('clear'),
      forEach: Qs(!0, !0),
    };
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((u) => {
      (t[u] = js(u, !1, !1)),
        (i[u] = js(u, !0, !1)),
        (r[u] = js(u, !1, !0)),
        (o[u] = js(u, !0, !0));
    }),
    [t, i, r, o]
  );
}
const [uy, cy, fy, dy] = ay();
function Oa(t, r) {
  const i = r ? (t ? dy : fy) : t ? cy : uy;
  return (o, l, u) =>
    l === '__v_isReactive'
      ? !t
      : l === '__v_isReadonly'
      ? t
      : l === '__v_raw'
      ? o
      : Reflect.get(He(i, l) && l in o ? i : o, l, u);
}
const hy = { get: Oa(!1, !1) },
  _y = { get: Oa(!1, !0) },
  py = { get: Oa(!0, !1) },
  Fd = new WeakMap(),
  Hd = new WeakMap(),
  Dd = new WeakMap(),
  gy = new WeakMap();
function vy(t) {
  switch (t) {
    case 'Object':
    case 'Array':
      return 1;
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2;
    default:
      return 0;
  }
}
function my(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : vy(H2(t));
}
function Co(t) {
  return ai(t) ? t : Ba(t, !1, Nd, hy, Fd);
}
function yy(t) {
  return Ba(t, !1, ly, _y, Hd);
}
function Ra(t) {
  return Ba(t, !0, oy, py, Dd);
}
function Ba(t, r, i, o, l) {
  if (!tt(t) || (t.__v_raw && !(r && t.__v_isReactive))) return t;
  const u = l.get(t);
  if (u) return u;
  const c = my(t);
  if (c === 0) return t;
  const d = new Proxy(t, c === 2 ? o : i);
  return l.set(t, d), d;
}
function ti(t) {
  return ai(t) ? ti(t.__v_raw) : !!(t && t.__v_isReactive);
}
function ai(t) {
  return !!(t && t.__v_isReadonly);
}
function lo(t) {
  return !!(t && t.__v_isShallow);
}
function Ud(t) {
  return ti(t) || ai(t);
}
function Ue(t) {
  const r = t && t.__v_raw;
  return r ? Ue(r) : t;
}
function Di(t) {
  return oo(t, '__v_skip', !0), t;
}
const Yi = (t) => (tt(t) ? Co(t) : t),
  Va = (t) => (tt(t) ? Ra(t) : t);
function Wd(t) {
  ur && _n && ((t = Ue(t)), Rd(t.dep || (t.dep = La())));
}
function zd(t, r) {
  (t = Ue(t)), t.dep && da(t.dep);
}
function Ct(t) {
  return !!(t && t.__v_isRef === !0);
}
function Fe(t) {
  return Kd(t, !1);
}
function by(t) {
  return Kd(t, !0);
}
function Kd(t, r) {
  return Ct(t) ? t : new wy(t, r);
}
class wy {
  constructor(r, i) {
    (this.__v_isShallow = i),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = i ? r : Ue(r)),
      (this._value = i ? r : Yi(r));
  }
  get value() {
    return Wd(this), this._value;
  }
  set value(r) {
    const i = this.__v_isShallow || lo(r) || ai(r);
    (r = i ? r : Ue(r)),
      Gi(r, this._rawValue) && ((this._rawValue = r), (this._value = i ? r : Yi(r)), zd(this));
  }
}
function T(t) {
  return Ct(t) ? t.value : t;
}
const xy = {
  get: (t, r, i) => T(Reflect.get(t, r, i)),
  set: (t, r, i, o) => {
    const l = t[r];
    return Ct(l) && !Ct(i) ? ((l.value = i), !0) : Reflect.set(t, r, i, o);
  },
};
function qd(t) {
  return ti(t) ? t : new Proxy(t, xy);
}
var Gd;
class Cy {
  constructor(r, i, o, l) {
    (this._setter = i),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[Gd] = !1),
      (this._dirty = !0),
      (this.effect = new Ia(r, () => {
        this._dirty || ((this._dirty = !0), zd(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !l),
      (this.__v_isReadonly = o);
  }
  get value() {
    const r = Ue(this);
    return (
      Wd(r), (r._dirty || !r._cacheable) && ((r._dirty = !1), (r._value = r.effect.run())), r._value
    );
  }
  set value(r) {
    this._setter(r);
  }
}
Gd = '__v_isReadonly';
function Py(t, r, i = !1) {
  let o, l;
  const u = $e(t);
  return u ? ((o = t), (l = gn)) : ((o = t.get), (l = t.set)), new Cy(o, l, u || !l, i);
}
function cr(t, r, i, o) {
  let l;
  try {
    l = o ? t(...o) : t();
  } catch (u) {
    is(u, r, i);
  }
  return l;
}
function ln(t, r, i, o) {
  if ($e(t)) {
    const u = cr(t, r, i, o);
    return (
      u &&
        Ed(u) &&
        u.catch((c) => {
          is(c, r, i);
        }),
      u
    );
  }
  const l = [];
  for (let u = 0; u < t.length; u++) l.push(ln(t[u], r, i, o));
  return l;
}
function is(t, r, i, o = !0) {
  const l = r ? r.vnode : null;
  if (r) {
    let u = r.parent;
    const c = r.proxy,
      d = i;
    for (; u; ) {
      const v = u.ec;
      if (v) {
        for (let x = 0; x < v.length; x++) if (v[x](t, c, d) === !1) return;
      }
      u = u.parent;
    }
    const p = r.appContext.config.errorHandler;
    if (p) {
      cr(p, null, 10, [t, c, d]);
      return;
    }
  }
  $y(t, i, l, o);
}
function $y(t, r, i, o = !0) {
  console.error(t);
}
let Zi = !1,
  ha = !1;
const xt = [];
let Sn = 0;
const ni = [];
let Un = null,
  Ar = 0;
const Yd = Promise.resolve();
let Na = null;
function Fa(t) {
  const r = Na || Yd;
  return t ? r.then(this ? t.bind(this) : t) : r;
}
function Sy(t) {
  let r = Sn + 1,
    i = xt.length;
  for (; r < i; ) {
    const o = (r + i) >>> 1;
    Xi(xt[o]) < t ? (r = o + 1) : (i = o);
  }
  return r;
}
function Po(t) {
  (!xt.length || !xt.includes(t, Zi && t.allowRecurse ? Sn + 1 : Sn)) &&
    (t.id == null ? xt.push(t) : xt.splice(Sy(t.id), 0, t), Zd());
}
function Zd() {
  !Zi && !ha && ((ha = !0), (Na = Yd.then(Xd)));
}
function Ay(t) {
  const r = xt.indexOf(t);
  r > Sn && xt.splice(r, 1);
}
function Ty(t) {
  me(t) ? ni.push(...t) : (!Un || !Un.includes(t, t.allowRecurse ? Ar + 1 : Ar)) && ni.push(t),
    Zd();
}
function Vf(t, r = Zi ? Sn + 1 : 0) {
  for (; r < xt.length; r++) {
    const i = xt[r];
    i && i.pre && (xt.splice(r, 1), r--, i());
  }
}
function ao(t) {
  if (ni.length) {
    const r = [...new Set(ni)];
    if (((ni.length = 0), Un)) {
      Un.push(...r);
      return;
    }
    for (Un = r, Un.sort((i, o) => Xi(i) - Xi(o)), Ar = 0; Ar < Un.length; Ar++) Un[Ar]();
    (Un = null), (Ar = 0);
  }
}
const Xi = (t) => (t.id == null ? 1 / 0 : t.id),
  Ey = (t, r) => {
    const i = Xi(t) - Xi(r);
    if (i === 0) {
      if (t.pre && !r.pre) return -1;
      if (r.pre && !t.pre) return 1;
    }
    return i;
  };
function Xd(t) {
  (ha = !1), (Zi = !0), xt.sort(Ey);
  const r = gn;
  try {
    for (Sn = 0; Sn < xt.length; Sn++) {
      const i = xt[Sn];
      i && i.active !== !1 && cr(i, null, 14);
    }
  } finally {
    (Sn = 0), (xt.length = 0), ao(), (Zi = !1), (Na = null), (xt.length || ni.length) && Xd();
  }
}
function Ly(t, r, ...i) {
  if (t.isUnmounted) return;
  const o = t.vnode.props || et;
  let l = i;
  const u = r.startsWith('update:'),
    c = u && r.slice(7);
  if (c && c in o) {
    const x = `${c === 'modelValue' ? 'model' : c}Modifiers`,
      { number: $, trim: E } = o[x] || et;
    E && (l = i.map((H) => (at(H) ? H.trim() : H))), $ && (l = i.map(Ea));
  }
  let d,
    p = o[(d = io(r))] || o[(d = io(An(r)))];
  !p && u && (p = o[(d = io(_i(r)))]), p && ln(p, t, 6, l);
  const v = o[d + 'Once'];
  if (v) {
    if (!t.emitted) t.emitted = {};
    else if (t.emitted[d]) return;
    (t.emitted[d] = !0), ln(v, t, 6, l);
  }
}
function Jd(t, r, i = !1) {
  const o = r.emitsCache,
    l = o.get(t);
  if (l !== void 0) return l;
  const u = t.emits;
  let c = {},
    d = !1;
  if (!$e(t)) {
    const p = (v) => {
      const x = Jd(v, r, !0);
      x && ((d = !0), _t(c, x));
    };
    !i && r.mixins.length && r.mixins.forEach(p),
      t.extends && p(t.extends),
      t.mixins && t.mixins.forEach(p);
  }
  return !u && !d
    ? (tt(t) && o.set(t, null), null)
    : (me(u) ? u.forEach((p) => (c[p] = null)) : _t(c, u), tt(t) && o.set(t, c), c);
}
function $o(t, r) {
  return !t || !rs(r)
    ? !1
    : ((r = r.slice(2).replace(/Once$/, '')),
      He(t, r[0].toLowerCase() + r.slice(1)) || He(t, _i(r)) || He(t, r));
}
let mt = null,
  So = null;
function uo(t) {
  const r = mt;
  return (mt = t), (So = (t && t.type.__scopeId) || null), r;
}
function yn(t) {
  So = t;
}
function bn() {
  So = null;
}
function ee(t, r = mt, i) {
  if (!r || t._n) return t;
  const o = (...l) => {
    o._d && Yf(-1);
    const u = uo(r);
    let c;
    try {
      c = t(...l);
    } finally {
      uo(u), o._d && Yf(1);
    }
    return c;
  };
  return (o._n = !0), (o._c = !0), (o._d = !0), o;
}
function Ql(t) {
  const {
    type: r,
    vnode: i,
    proxy: o,
    withProxy: l,
    props: u,
    propsOptions: [c],
    slots: d,
    attrs: p,
    emit: v,
    render: x,
    renderCache: $,
    data: E,
    setupState: H,
    ctx: Y,
    inheritAttrs: Q,
  } = t;
  let j, I;
  const D = uo(t);
  try {
    if (i.shapeFlag & 4) {
      const de = l || o;
      (j = hn(x.call(de, de, $, u, H, E, Y))), (I = p);
    } else {
      const de = r;
      (j = hn(de.length > 1 ? de(u, { attrs: p, slots: d, emit: v }) : de(u, null))),
        (I = r.props ? p : Iy(p));
    }
  } catch (de) {
    (Wi.length = 0), is(de, t, 1), (j = W(qt));
  }
  let G = j;
  if (I && Q !== !1) {
    const de = Object.keys(I),
      { shapeFlag: ge } = G;
    de.length && ge & 7 && (c && de.some($a) && (I = ky(I, c)), (G = dr(G, I)));
  }
  return (
    i.dirs && ((G = dr(G)), (G.dirs = G.dirs ? G.dirs.concat(i.dirs) : i.dirs)),
    i.transition && (G.transition = i.transition),
    (j = G),
    uo(D),
    j
  );
}
const Iy = (t) => {
    let r;
    for (const i in t) (i === 'class' || i === 'style' || rs(i)) && ((r || (r = {}))[i] = t[i]);
    return r;
  },
  ky = (t, r) => {
    const i = {};
    for (const o in t) (!$a(o) || !(o.slice(9) in r)) && (i[o] = t[o]);
    return i;
  };
function My(t, r, i) {
  const { props: o, children: l, component: u } = t,
    { props: c, children: d, patchFlag: p } = r,
    v = u.emitsOptions;
  if (r.dirs || r.transition) return !0;
  if (i && p >= 0) {
    if (p & 1024) return !0;
    if (p & 16) return o ? Nf(o, c, v) : !!c;
    if (p & 8) {
      const x = r.dynamicProps;
      for (let $ = 0; $ < x.length; $++) {
        const E = x[$];
        if (c[E] !== o[E] && !$o(v, E)) return !0;
      }
    }
  } else
    return (l || d) && (!d || !d.$stable) ? !0 : o === c ? !1 : o ? (c ? Nf(o, c, v) : !0) : !!c;
  return !1;
}
function Nf(t, r, i) {
  const o = Object.keys(r);
  if (o.length !== Object.keys(t).length) return !0;
  for (let l = 0; l < o.length; l++) {
    const u = o[l];
    if (r[u] !== t[u] && !$o(i, u)) return !0;
  }
  return !1;
}
function Oy({ vnode: t, parent: r }, i) {
  for (; r && r.subTree === t; ) ((t = r.vnode).el = i), (r = r.parent);
}
const Ry = (t) => t.__isSuspense;
function Qd(t, r) {
  r && r.pendingBranch ? (me(t) ? r.effects.push(...t) : r.effects.push(t)) : Ty(t);
}
function Ao(t, r) {
  if (ft) {
    let i = ft.provides;
    const o = ft.parent && ft.parent.provides;
    o === i && (i = ft.provides = Object.create(o)), (i[t] = r);
  }
}
function vn(t, r, i = !1) {
  const o = ft || mt;
  if (o) {
    const l =
      o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
    if (l && t in l) return l[t];
    if (arguments.length > 1) return i && $e(r) ? r.call(o.proxy) : r;
  }
}
function ui(t, r) {
  return To(t, null, r);
}
function jd(t, r) {
  return To(t, null, { flush: 'post' });
}
const eo = {};
function mn(t, r, i) {
  return To(t, r, i);
}
function To(t, r, { immediate: i, deep: o, flush: l, onTrack: u, onTrigger: c } = et) {
  const d = ft;
  let p,
    v = !1,
    x = !1;
  if (
    (Ct(t)
      ? ((p = () => t.value), (v = lo(t)))
      : ti(t)
      ? ((p = () => t), (o = !0))
      : me(t)
      ? ((x = !0),
        (v = t.some((G) => ti(G) || lo(G))),
        (p = () =>
          t.map((G) => {
            if (Ct(G)) return G.value;
            if (ti(G)) return Ir(G);
            if ($e(G)) return cr(G, d, 2);
          })))
      : $e(t)
      ? r
        ? (p = () => cr(t, d, 2))
        : (p = () => {
            if (!(d && d.isUnmounted)) return $ && $(), ln(t, d, 3, [E]);
          })
      : (p = gn),
    r && o)
  ) {
    const G = p;
    p = () => Ir(G());
  }
  let $,
    E = (G) => {
      $ = I.onStop = () => {
        cr(G, d, 4);
      };
    },
    H;
  if (di)
    if (((E = gn), r ? i && ln(r, d, 3, [p(), x ? [] : void 0, E]) : p(), l === 'sync')) {
      const G = A4();
      H = G.__watcherHandles || (G.__watcherHandles = []);
    } else return gn;
  let Y = x ? new Array(t.length).fill(eo) : eo;
  const Q = () => {
    if (I.active)
      if (r) {
        const G = I.run();
        (o || v || (x ? G.some((de, ge) => Gi(de, Y[ge])) : Gi(G, Y))) &&
          ($ && $(), ln(r, d, 3, [G, Y === eo ? void 0 : x && Y[0] === eo ? [] : Y, E]), (Y = G));
      } else I.run();
  };
  Q.allowRecurse = !!r;
  let j;
  l === 'sync'
    ? (j = Q)
    : l === 'post'
    ? (j = () => Nt(Q, d && d.suspense))
    : ((Q.pre = !0), d && (Q.id = d.uid), (j = () => Po(Q)));
  const I = new Ia(p, j);
  r ? (i ? Q() : (Y = I.run())) : l === 'post' ? Nt(I.run.bind(I), d && d.suspense) : I.run();
  const D = () => {
    I.stop(), d && d.scope && Sa(d.scope.effects, I);
  };
  return H && H.push(D), D;
}
function By(t, r, i) {
  const o = this.proxy,
    l = at(t) ? (t.includes('.') ? eh(o, t) : () => o[t]) : t.bind(o, o);
  let u;
  $e(r) ? (u = r) : ((u = r.handler), (i = r));
  const c = ft;
  fi(this);
  const d = To(l, u.bind(o), i);
  return c ? fi(c) : Mr(), d;
}
function eh(t, r) {
  const i = r.split('.');
  return () => {
    let o = t;
    for (let l = 0; l < i.length && o; l++) o = o[i[l]];
    return o;
  };
}
function Ir(t, r) {
  if (!tt(t) || t.__v_skip || ((r = r || new Set()), r.has(t))) return t;
  if ((r.add(t), Ct(t))) Ir(t.value, r);
  else if (me(t)) for (let i = 0; i < t.length; i++) Ir(t[i], r);
  else if (Td(t) || ei(t))
    t.forEach((i) => {
      Ir(i, r);
    });
  else if (Id(t)) for (const i in t) Ir(t[i], r);
  return t;
}
function th() {
  const t = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() };
  return (
    an(() => {
      t.isMounted = !0;
    }),
    sh(() => {
      t.isUnmounting = !0;
    }),
    t
  );
}
const sn = [Function, Array],
  Vy = {
    name: 'BaseTransition',
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: sn,
      onEnter: sn,
      onAfterEnter: sn,
      onEnterCancelled: sn,
      onBeforeLeave: sn,
      onLeave: sn,
      onAfterLeave: sn,
      onLeaveCancelled: sn,
      onBeforeAppear: sn,
      onAppear: sn,
      onAfterAppear: sn,
      onAppearCancelled: sn,
    },
    setup(t, { slots: r }) {
      const i = Mo(),
        o = th();
      let l;
      return () => {
        const u = r.default && Ha(r.default(), !0);
        if (!u || !u.length) return;
        let c = u[0];
        if (u.length > 1) {
          for (const Q of u)
            if (Q.type !== qt) {
              c = Q;
              break;
            }
        }
        const d = Ue(t),
          { mode: p } = d;
        if (o.isLeaving) return jl(c);
        const v = Ff(c);
        if (!v) return jl(c);
        const x = Ji(v, d, o, i);
        Qi(v, x);
        const $ = i.subTree,
          E = $ && Ff($);
        let H = !1;
        const { getTransitionKey: Y } = v.type;
        if (Y) {
          const Q = Y();
          l === void 0 ? (l = Q) : Q !== l && ((l = Q), (H = !0));
        }
        if (E && E.type !== qt && (!Tr(v, E) || H)) {
          const Q = Ji(E, d, o, i);
          if ((Qi(E, Q), p === 'out-in'))
            return (
              (o.isLeaving = !0),
              (Q.afterLeave = () => {
                (o.isLeaving = !1), i.update.active !== !1 && i.update();
              }),
              jl(c)
            );
          p === 'in-out' &&
            v.type !== qt &&
            (Q.delayLeave = (j, I, D) => {
              const G = rh(o, E);
              (G[String(E.key)] = E),
                (j._leaveCb = () => {
                  I(), (j._leaveCb = void 0), delete x.delayedLeave;
                }),
                (x.delayedLeave = D);
            });
        }
        return c;
      };
    },
  },
  nh = Vy;
function rh(t, r) {
  const { leavingVNodes: i } = t;
  let o = i.get(r.type);
  return o || ((o = Object.create(null)), i.set(r.type, o)), o;
}
function Ji(t, r, i, o) {
  const {
      appear: l,
      mode: u,
      persisted: c = !1,
      onBeforeEnter: d,
      onEnter: p,
      onAfterEnter: v,
      onEnterCancelled: x,
      onBeforeLeave: $,
      onLeave: E,
      onAfterLeave: H,
      onLeaveCancelled: Y,
      onBeforeAppear: Q,
      onAppear: j,
      onAfterAppear: I,
      onAppearCancelled: D,
    } = r,
    G = String(t.key),
    de = rh(i, t),
    ge = (Z, Pe) => {
      Z && ln(Z, o, 9, Pe);
    },
    Ve = (Z, Pe) => {
      const xe = Pe[1];
      ge(Z, Pe), me(Z) ? Z.every((Ne) => Ne.length <= 1) && xe() : Z.length <= 1 && xe();
    },
    we = {
      mode: u,
      persisted: c,
      beforeEnter(Z) {
        let Pe = d;
        if (!i.isMounted)
          if (l) Pe = Q || d;
          else return;
        Z._leaveCb && Z._leaveCb(!0);
        const xe = de[G];
        xe && Tr(t, xe) && xe.el._leaveCb && xe.el._leaveCb(), ge(Pe, [Z]);
      },
      enter(Z) {
        let Pe = p,
          xe = v,
          Ne = x;
        if (!i.isMounted)
          if (l) (Pe = j || p), (xe = I || v), (Ne = D || x);
          else return;
        let se = !1;
        const Te = (Z._enterCb = (ae) => {
          se ||
            ((se = !0),
            ae ? ge(Ne, [Z]) : ge(xe, [Z]),
            we.delayedLeave && we.delayedLeave(),
            (Z._enterCb = void 0));
        });
        Pe ? Ve(Pe, [Z, Te]) : Te();
      },
      leave(Z, Pe) {
        const xe = String(t.key);
        if ((Z._enterCb && Z._enterCb(!0), i.isUnmounting)) return Pe();
        ge($, [Z]);
        let Ne = !1;
        const se = (Z._leaveCb = (Te) => {
          Ne ||
            ((Ne = !0),
            Pe(),
            Te ? ge(Y, [Z]) : ge(H, [Z]),
            (Z._leaveCb = void 0),
            de[xe] === t && delete de[xe]);
        });
        (de[xe] = t), E ? Ve(E, [Z, se]) : se();
      },
      clone(Z) {
        return Ji(Z, r, i, o);
      },
    };
  return we;
}
function jl(t) {
  if (ss(t)) return (t = dr(t)), (t.children = null), t;
}
function Ff(t) {
  return ss(t) ? (t.children ? t.children[0] : void 0) : t;
}
function Qi(t, r) {
  t.shapeFlag & 6 && t.component
    ? Qi(t.component.subTree, r)
    : t.shapeFlag & 128
    ? ((t.ssContent.transition = r.clone(t.ssContent)),
      (t.ssFallback.transition = r.clone(t.ssFallback)))
    : (t.transition = r);
}
function Ha(t, r = !1, i) {
  let o = [],
    l = 0;
  for (let u = 0; u < t.length; u++) {
    let c = t[u];
    const d = i == null ? c.key : String(i) + String(c.key != null ? c.key : u);
    c.type === be
      ? (c.patchFlag & 128 && l++, (o = o.concat(Ha(c.children, r, d))))
      : (r || c.type !== qt) && o.push(d != null ? dr(c, { key: d }) : c);
  }
  if (l > 1) for (let u = 0; u < o.length; u++) o[u].patchFlag = -2;
  return o;
}
function ne(t) {
  return $e(t) ? { setup: t, name: t.name } : t;
}
const ri = (t) => !!t.type.__asyncLoader;
function Ny(t) {
  $e(t) && (t = { loader: t });
  const {
    loader: r,
    loadingComponent: i,
    errorComponent: o,
    delay: l = 200,
    timeout: u,
    suspensible: c = !0,
    onError: d,
  } = t;
  let p = null,
    v,
    x = 0;
  const $ = () => (x++, (p = null), E()),
    E = () => {
      let H;
      return (
        p ||
        (H = p =
          r()
            .catch((Y) => {
              if (((Y = Y instanceof Error ? Y : new Error(String(Y))), d))
                return new Promise((Q, j) => {
                  d(
                    Y,
                    () => Q($()),
                    () => j(Y),
                    x + 1,
                  );
                });
              throw Y;
            })
            .then((Y) =>
              H !== p && p
                ? p
                : (Y && (Y.__esModule || Y[Symbol.toStringTag] === 'Module') && (Y = Y.default),
                  (v = Y),
                  Y),
            ))
      );
    };
  return ne({
    name: 'AsyncComponentWrapper',
    __asyncLoader: E,
    get __asyncResolved() {
      return v;
    },
    setup() {
      const H = ft;
      if (v) return () => ea(v, H);
      const Y = (D) => {
        (p = null), is(D, H, 13, !o);
      };
      if ((c && H.suspense) || di)
        return E()
          .then((D) => () => ea(D, H))
          .catch((D) => (Y(D), () => (o ? W(o, { error: D }) : null)));
      const Q = Fe(!1),
        j = Fe(),
        I = Fe(!!l);
      return (
        l &&
          setTimeout(() => {
            I.value = !1;
          }, l),
        u != null &&
          setTimeout(() => {
            if (!Q.value && !j.value) {
              const D = new Error(`Async component timed out after ${u}ms.`);
              Y(D), (j.value = D);
            }
          }, u),
        E()
          .then(() => {
            (Q.value = !0), H.parent && ss(H.parent.vnode) && Po(H.parent.update);
          })
          .catch((D) => {
            Y(D), (j.value = D);
          }),
        () => {
          if (Q.value && v) return ea(v, H);
          if (j.value && o) return W(o, { error: j.value });
          if (i && !I.value) return W(i);
        }
      );
    },
  });
}
function ea(t, r) {
  const { ref: i, props: o, children: l, ce: u } = r.vnode,
    c = W(t, o, l);
  return (c.ref = i), (c.ce = u), delete r.vnode.ce, c;
}
const ss = (t) => t.type.__isKeepAlive;
function Fy(t, r) {
  ih(t, 'a', r);
}
function Hy(t, r) {
  ih(t, 'da', r);
}
function ih(t, r, i = ft) {
  const o =
    t.__wdc ||
    (t.__wdc = () => {
      let l = i;
      for (; l; ) {
        if (l.isDeactivated) return;
        l = l.parent;
      }
      return t();
    });
  if ((Eo(r, o, i), i)) {
    let l = i.parent;
    for (; l && l.parent; ) ss(l.parent.vnode) && Dy(o, r, i, l), (l = l.parent);
  }
}
function Dy(t, r, i, o) {
  const l = Eo(r, t, o, !0);
  hr(() => {
    Sa(o[r], l);
  }, i);
}
function Eo(t, r, i = ft, o = !1) {
  if (i) {
    const l = i[t] || (i[t] = []),
      u =
        r.__weh ||
        (r.__weh = (...c) => {
          if (i.isUnmounted) return;
          pi(), fi(i);
          const d = ln(r, i, t, c);
          return Mr(), gi(), d;
        });
    return o ? l.unshift(u) : l.push(u), u;
  }
}
const zn =
    (t) =>
    (r, i = ft) =>
      (!di || t === 'sp') && Eo(t, (...o) => r(...o), i),
  Uy = zn('bm'),
  an = zn('m'),
  Wy = zn('bu'),
  Lo = zn('u'),
  sh = zn('bum'),
  hr = zn('um'),
  zy = zn('sp'),
  Ky = zn('rtg'),
  qy = zn('rtc');
function Gy(t, r = ft) {
  Eo('ec', t, r);
}
function Hf(t, r) {
  const i = mt;
  if (i === null) return t;
  const o = Oo(i) || i.proxy,
    l = t.dirs || (t.dirs = []);
  for (let u = 0; u < r.length; u++) {
    let [c, d, p, v = et] = r[u];
    c &&
      ($e(c) && (c = { mounted: c, updated: c }),
      c.deep && Ir(d),
      l.push({ dir: c, instance: o, value: d, oldValue: void 0, arg: p, modifiers: v }));
  }
  return t;
}
function $n(t, r, i, o) {
  const l = t.dirs,
    u = r && r.dirs;
  for (let c = 0; c < l.length; c++) {
    const d = l[c];
    u && (d.oldValue = u[c].value);
    let p = d.dir[o];
    p && (pi(), ln(p, i, 8, [t.el, d, t, r]), gi());
  }
}
const Da = 'components';
function Kn(t, r) {
  return lh(Da, t, !0, r) || t;
}
const oh = Symbol();
function Io(t) {
  return at(t) ? lh(Da, t, !1) || t : t || oh;
}
function lh(t, r, i = !0, o = !1) {
  const l = mt || ft;
  if (l) {
    const u = l.type;
    if (t === Da) {
      const d = P4(u, !1);
      if (d && (d === r || d === An(r) || d === wo(An(r)))) return u;
    }
    const c = Df(l[t] || u[t], r) || Df(l.appContext[t], r);
    return !c && o ? u : c;
  }
}
function Df(t, r) {
  return t && (t[r] || t[An(r)] || t[wo(An(r))]);
}
function yt(t, r, i, o) {
  let l;
  const u = i && i[o];
  if (me(t) || at(t)) {
    l = new Array(t.length);
    for (let c = 0, d = t.length; c < d; c++) l[c] = r(t[c], c, void 0, u && u[c]);
  } else if (typeof t == 'number') {
    l = new Array(t);
    for (let c = 0; c < t; c++) l[c] = r(c + 1, c, void 0, u && u[c]);
  } else if (tt(t))
    if (t[Symbol.iterator]) l = Array.from(t, (c, d) => r(c, d, void 0, u && u[d]));
    else {
      const c = Object.keys(t);
      l = new Array(c.length);
      for (let d = 0, p = c.length; d < p; d++) {
        const v = c[d];
        l[d] = r(t[v], v, d, u && u[d]);
      }
    }
  else l = [];
  return i && (i[o] = l), l;
}
function q(t, r, i = {}, o, l) {
  if (mt.isCE || (mt.parent && ri(mt.parent) && mt.parent.isCE))
    return r !== 'default' && (i.name = r), W('slot', i, o && o());
  let u = t[r];
  u && u._c && (u._d = !1), P();
  const c = u && ah(u(i)),
    d = ve(
      be,
      { key: i.key || (c && c.key) || `_${r}` },
      c || (o ? o() : []),
      c && t._ === 1 ? 64 : -2,
    );
  return !l && d.scopeId && (d.slotScopeIds = [d.scopeId + '-s']), u && u._c && (u._d = !0), d;
}
function ah(t) {
  return t.some((r) => (ho(r) ? !(r.type === qt || (r.type === be && !ah(r.children))) : !0))
    ? t
    : null;
}
function Yy(t, r) {
  const i = {};
  for (const o in t) i[r && /[A-Z]/.test(o) ? `on:${o}` : io(o)] = t[o];
  return i;
}
const _a = (t) => (t ? (bh(t) ? Oo(t) || t.proxy : _a(t.parent)) : null),
  Ui = _t(Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => _a(t.parent),
    $root: (t) => _a(t.root),
    $emit: (t) => t.emit,
    $options: (t) => Ua(t),
    $forceUpdate: (t) => t.f || (t.f = () => Po(t.update)),
    $nextTick: (t) => t.n || (t.n = Fa.bind(t.proxy)),
    $watch: (t) => By.bind(t),
  }),
  ta = (t, r) => t !== et && !t.__isScriptSetup && He(t, r),
  Zy = {
    get({ _: t }, r) {
      const {
        ctx: i,
        setupState: o,
        data: l,
        props: u,
        accessCache: c,
        type: d,
        appContext: p,
      } = t;
      let v;
      if (r[0] !== '$') {
        const H = c[r];
        if (H !== void 0)
          switch (H) {
            case 1:
              return o[r];
            case 2:
              return l[r];
            case 4:
              return i[r];
            case 3:
              return u[r];
          }
        else {
          if (ta(o, r)) return (c[r] = 1), o[r];
          if (l !== et && He(l, r)) return (c[r] = 2), l[r];
          if ((v = t.propsOptions[0]) && He(v, r)) return (c[r] = 3), u[r];
          if (i !== et && He(i, r)) return (c[r] = 4), i[r];
          pa && (c[r] = 0);
        }
      }
      const x = Ui[r];
      let $, E;
      if (x) return r === '$attrs' && Gt(t, 'get', r), x(t);
      if (($ = d.__cssModules) && ($ = $[r])) return $;
      if (i !== et && He(i, r)) return (c[r] = 4), i[r];
      if (((E = p.config.globalProperties), He(E, r))) return E[r];
    },
    set({ _: t }, r, i) {
      const { data: o, setupState: l, ctx: u } = t;
      return ta(l, r)
        ? ((l[r] = i), !0)
        : o !== et && He(o, r)
        ? ((o[r] = i), !0)
        : He(t.props, r) || (r[0] === '$' && r.slice(1) in t)
        ? !1
        : ((u[r] = i), !0);
    },
    has(
      { _: { data: t, setupState: r, accessCache: i, ctx: o, appContext: l, propsOptions: u } },
      c,
    ) {
      let d;
      return (
        !!i[c] ||
        (t !== et && He(t, c)) ||
        ta(r, c) ||
        ((d = u[0]) && He(d, c)) ||
        He(o, c) ||
        He(Ui, c) ||
        He(l.config.globalProperties, c)
      );
    },
    defineProperty(t, r, i) {
      return (
        i.get != null ? (t._.accessCache[r] = 0) : He(i, 'value') && this.set(t, r, i.value, null),
        Reflect.defineProperty(t, r, i)
      );
    },
  };
let pa = !0;
function Xy(t) {
  const r = Ua(t),
    i = t.proxy,
    o = t.ctx;
  (pa = !1), r.beforeCreate && Uf(r.beforeCreate, t, 'bc');
  const {
    data: l,
    computed: u,
    methods: c,
    watch: d,
    provide: p,
    inject: v,
    created: x,
    beforeMount: $,
    mounted: E,
    beforeUpdate: H,
    updated: Y,
    activated: Q,
    deactivated: j,
    beforeDestroy: I,
    beforeUnmount: D,
    destroyed: G,
    unmounted: de,
    render: ge,
    renderTracked: Ve,
    renderTriggered: we,
    errorCaptured: Z,
    serverPrefetch: Pe,
    expose: xe,
    inheritAttrs: Ne,
    components: se,
    directives: Te,
    filters: ae,
  } = r;
  if ((v && Jy(v, o, null, t.appContext.config.unwrapInjectedRef), c))
    for (const Ge in c) {
      const Oe = c[Ge];
      $e(Oe) && (o[Ge] = Oe.bind(i));
    }
  if (l) {
    const Ge = l.call(i, i);
    tt(Ge) && (t.data = Co(Ge));
  }
  if (((pa = !0), u))
    for (const Ge in u) {
      const Oe = u[Ge],
        En = $e(Oe) ? Oe.bind(i, i) : $e(Oe.get) ? Oe.get.bind(i, i) : gn,
        Ln = !$e(Oe) && $e(Oe.set) ? Oe.set.bind(i) : gn,
        dt = ke({ get: En, set: Ln });
      Object.defineProperty(o, Ge, {
        enumerable: !0,
        configurable: !0,
        get: () => dt.value,
        set: (Yt) => (dt.value = Yt),
      });
    }
  if (d) for (const Ge in d) uh(d[Ge], o, i, Ge);
  if (p) {
    const Ge = $e(p) ? p.call(i) : p;
    Reflect.ownKeys(Ge).forEach((Oe) => {
      Ao(Oe, Ge[Oe]);
    });
  }
  x && Uf(x, t, 'c');
  function qe(Ge, Oe) {
    me(Oe) ? Oe.forEach((En) => Ge(En.bind(i))) : Oe && Ge(Oe.bind(i));
  }
  if (
    (qe(Uy, $),
    qe(an, E),
    qe(Wy, H),
    qe(Lo, Y),
    qe(Fy, Q),
    qe(Hy, j),
    qe(Gy, Z),
    qe(qy, Ve),
    qe(Ky, we),
    qe(sh, D),
    qe(hr, de),
    qe(zy, Pe),
    me(xe))
  )
    if (xe.length) {
      const Ge = t.exposed || (t.exposed = {});
      xe.forEach((Oe) => {
        Object.defineProperty(Ge, Oe, { get: () => i[Oe], set: (En) => (i[Oe] = En) });
      });
    } else t.exposed || (t.exposed = {});
  ge && t.render === gn && (t.render = ge),
    Ne != null && (t.inheritAttrs = Ne),
    se && (t.components = se),
    Te && (t.directives = Te);
}
function Jy(t, r, i = gn, o = !1) {
  me(t) && (t = ga(t));
  for (const l in t) {
    const u = t[l];
    let c;
    tt(u)
      ? 'default' in u
        ? (c = vn(u.from || l, u.default, !0))
        : (c = vn(u.from || l))
      : (c = vn(u)),
      Ct(c) && o
        ? Object.defineProperty(r, l, {
            enumerable: !0,
            configurable: !0,
            get: () => c.value,
            set: (d) => (c.value = d),
          })
        : (r[l] = c);
  }
}
function Uf(t, r, i) {
  ln(me(t) ? t.map((o) => o.bind(r.proxy)) : t.bind(r.proxy), r, i);
}
function uh(t, r, i, o) {
  const l = o.includes('.') ? eh(i, o) : () => i[o];
  if (at(t)) {
    const u = r[t];
    $e(u) && mn(l, u);
  } else if ($e(t)) mn(l, t.bind(i));
  else if (tt(t))
    if (me(t)) t.forEach((u) => uh(u, r, i, o));
    else {
      const u = $e(t.handler) ? t.handler.bind(i) : r[t.handler];
      $e(u) && mn(l, u, t);
    }
}
function Ua(t) {
  const r = t.type,
    { mixins: i, extends: o } = r,
    {
      mixins: l,
      optionsCache: u,
      config: { optionMergeStrategies: c },
    } = t.appContext,
    d = u.get(r);
  let p;
  return (
    d
      ? (p = d)
      : !l.length && !i && !o
      ? (p = r)
      : ((p = {}), l.length && l.forEach((v) => co(p, v, c, !0)), co(p, r, c)),
    tt(r) && u.set(r, p),
    p
  );
}
function co(t, r, i, o = !1) {
  const { mixins: l, extends: u } = r;
  u && co(t, u, i, !0), l && l.forEach((c) => co(t, c, i, !0));
  for (const c in r)
    if (!(o && c === 'expose')) {
      const d = Qy[c] || (i && i[c]);
      t[c] = d ? d(t[c], r[c]) : r[c];
    }
  return t;
}
const Qy = {
  data: Wf,
  props: Sr,
  emits: Sr,
  methods: Sr,
  computed: Sr,
  beforeCreate: Et,
  created: Et,
  beforeMount: Et,
  mounted: Et,
  beforeUpdate: Et,
  updated: Et,
  beforeDestroy: Et,
  beforeUnmount: Et,
  destroyed: Et,
  unmounted: Et,
  activated: Et,
  deactivated: Et,
  errorCaptured: Et,
  serverPrefetch: Et,
  components: Sr,
  directives: Sr,
  watch: e4,
  provide: Wf,
  inject: jy,
};
function Wf(t, r) {
  return r
    ? t
      ? function () {
          return _t($e(t) ? t.call(this, this) : t, $e(r) ? r.call(this, this) : r);
        }
      : r
    : t;
}
function jy(t, r) {
  return Sr(ga(t), ga(r));
}
function ga(t) {
  if (me(t)) {
    const r = {};
    for (let i = 0; i < t.length; i++) r[t[i]] = t[i];
    return r;
  }
  return t;
}
function Et(t, r) {
  return t ? [...new Set([].concat(t, r))] : r;
}
function Sr(t, r) {
  return t ? _t(_t(Object.create(null), t), r) : r;
}
function e4(t, r) {
  if (!t) return r;
  if (!r) return t;
  const i = _t(Object.create(null), t);
  for (const o in r) i[o] = Et(t[o], r[o]);
  return i;
}
function t4(t, r, i, o = !1) {
  const l = {},
    u = {};
  oo(u, ko, 1), (t.propsDefaults = Object.create(null)), ch(t, r, l, u);
  for (const c in t.propsOptions[0]) c in l || (l[c] = void 0);
  i ? (t.props = o ? l : yy(l)) : t.type.props ? (t.props = l) : (t.props = u), (t.attrs = u);
}
function n4(t, r, i, o) {
  const {
      props: l,
      attrs: u,
      vnode: { patchFlag: c },
    } = t,
    d = Ue(l),
    [p] = t.propsOptions;
  let v = !1;
  if ((o || c > 0) && !(c & 16)) {
    if (c & 8) {
      const x = t.vnode.dynamicProps;
      for (let $ = 0; $ < x.length; $++) {
        let E = x[$];
        if ($o(t.emitsOptions, E)) continue;
        const H = r[E];
        if (p)
          if (He(u, E)) H !== u[E] && ((u[E] = H), (v = !0));
          else {
            const Y = An(E);
            l[Y] = va(p, d, Y, H, t, !1);
          }
        else H !== u[E] && ((u[E] = H), (v = !0));
      }
    }
  } else {
    ch(t, r, l, u) && (v = !0);
    let x;
    for (const $ in d)
      (!r || (!He(r, $) && ((x = _i($)) === $ || !He(r, x)))) &&
        (p
          ? i && (i[$] !== void 0 || i[x] !== void 0) && (l[$] = va(p, d, $, void 0, t, !0))
          : delete l[$]);
    if (u !== d) for (const $ in u) (!r || !He(r, $)) && (delete u[$], (v = !0));
  }
  v && Wn(t, 'set', '$attrs');
}
function ch(t, r, i, o) {
  const [l, u] = t.propsOptions;
  let c = !1,
    d;
  if (r)
    for (let p in r) {
      if (Hi(p)) continue;
      const v = r[p];
      let x;
      l && He(l, (x = An(p)))
        ? !u || !u.includes(x)
          ? (i[x] = v)
          : ((d || (d = {}))[x] = v)
        : $o(t.emitsOptions, p) || ((!(p in o) || v !== o[p]) && ((o[p] = v), (c = !0)));
    }
  if (u) {
    const p = Ue(i),
      v = d || et;
    for (let x = 0; x < u.length; x++) {
      const $ = u[x];
      i[$] = va(l, p, $, v[$], t, !He(v, $));
    }
  }
  return c;
}
function va(t, r, i, o, l, u) {
  const c = t[i];
  if (c != null) {
    const d = He(c, 'default');
    if (d && o === void 0) {
      const p = c.default;
      if (c.type !== Function && $e(p)) {
        const { propsDefaults: v } = l;
        i in v ? (o = v[i]) : (fi(l), (o = v[i] = p.call(null, r)), Mr());
      } else o = p;
    }
    c[0] && (u && !d ? (o = !1) : c[1] && (o === '' || o === _i(i)) && (o = !0));
  }
  return o;
}
function fh(t, r, i = !1) {
  const o = r.propsCache,
    l = o.get(t);
  if (l) return l;
  const u = t.props,
    c = {},
    d = [];
  let p = !1;
  if (!$e(t)) {
    const x = ($) => {
      p = !0;
      const [E, H] = fh($, r, !0);
      _t(c, E), H && d.push(...H);
    };
    !i && r.mixins.length && r.mixins.forEach(x),
      t.extends && x(t.extends),
      t.mixins && t.mixins.forEach(x);
  }
  if (!u && !p) return tt(t) && o.set(t, jr), jr;
  if (me(u))
    for (let x = 0; x < u.length; x++) {
      const $ = An(u[x]);
      zf($) && (c[$] = et);
    }
  else if (u)
    for (const x in u) {
      const $ = An(x);
      if (zf($)) {
        const E = u[x],
          H = (c[$] = me(E) || $e(E) ? { type: E } : Object.assign({}, E));
        if (H) {
          const Y = Gf(Boolean, H.type),
            Q = Gf(String, H.type);
          (H[0] = Y > -1), (H[1] = Q < 0 || Y < Q), (Y > -1 || He(H, 'default')) && d.push($);
        }
      }
    }
  const v = [c, d];
  return tt(t) && o.set(t, v), v;
}
function zf(t) {
  return t[0] !== '$';
}
function Kf(t) {
  const r = t && t.toString().match(/^\s*function (\w+)/);
  return r ? r[1] : t === null ? 'null' : '';
}
function qf(t, r) {
  return Kf(t) === Kf(r);
}
function Gf(t, r) {
  return me(r) ? r.findIndex((i) => qf(i, t)) : $e(r) && qf(r, t) ? 0 : -1;
}
const dh = (t) => t[0] === '_' || t === '$stable',
  Wa = (t) => (me(t) ? t.map(hn) : [hn(t)]),
  r4 = (t, r, i) => {
    if (r._n) return r;
    const o = ee((...l) => Wa(r(...l)), i);
    return (o._c = !1), o;
  },
  hh = (t, r, i) => {
    const o = t._ctx;
    for (const l in t) {
      if (dh(l)) continue;
      const u = t[l];
      if ($e(u)) r[l] = r4(l, u, o);
      else if (u != null) {
        const c = Wa(u);
        r[l] = () => c;
      }
    }
  },
  _h = (t, r) => {
    const i = Wa(r);
    t.slots.default = () => i;
  },
  i4 = (t, r) => {
    if (t.vnode.shapeFlag & 32) {
      const i = r._;
      i ? ((t.slots = Ue(r)), oo(r, '_', i)) : hh(r, (t.slots = {}));
    } else (t.slots = {}), r && _h(t, r);
    oo(t.slots, ko, 1);
  },
  s4 = (t, r, i) => {
    const { vnode: o, slots: l } = t;
    let u = !0,
      c = et;
    if (o.shapeFlag & 32) {
      const d = r._;
      d
        ? i && d === 1
          ? (u = !1)
          : (_t(l, r), !i && d === 1 && delete l._)
        : ((u = !r.$stable), hh(r, l)),
        (c = r);
    } else r && (_h(t, r), (c = { default: 1 }));
    if (u) for (const d in l) !dh(d) && !(d in c) && delete l[d];
  };
function ph() {
  return {
    app: null,
    config: {
      isNativeTag: V2,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let o4 = 0;
function l4(t, r) {
  return function (o, l = null) {
    $e(o) || (o = Object.assign({}, o)), l != null && !tt(l) && (l = null);
    const u = ph(),
      c = new Set();
    let d = !1;
    const p = (u.app = {
      _uid: o4++,
      _component: o,
      _props: l,
      _container: null,
      _context: u,
      _instance: null,
      version: T4,
      get config() {
        return u.config;
      },
      set config(v) {},
      use(v, ...x) {
        return (
          c.has(v) ||
            (v && $e(v.install) ? (c.add(v), v.install(p, ...x)) : $e(v) && (c.add(v), v(p, ...x))),
          p
        );
      },
      mixin(v) {
        return u.mixins.includes(v) || u.mixins.push(v), p;
      },
      component(v, x) {
        return x ? ((u.components[v] = x), p) : u.components[v];
      },
      directive(v, x) {
        return x ? ((u.directives[v] = x), p) : u.directives[v];
      },
      mount(v, x, $) {
        if (!d) {
          const E = W(o, l);
          return (
            (E.appContext = u),
            x && r ? r(E, v) : t(E, v, $),
            (d = !0),
            (p._container = v),
            (v.__vue_app__ = p),
            Oo(E.component) || E.component.proxy
          );
        }
      },
      unmount() {
        d && (t(null, p._container), delete p._container.__vue_app__);
      },
      provide(v, x) {
        return (u.provides[v] = x), p;
      },
    });
    return p;
  };
}
function fo(t, r, i, o, l = !1) {
  if (me(t)) {
    t.forEach((E, H) => fo(E, r && (me(r) ? r[H] : r), i, o, l));
    return;
  }
  if (ri(o) && !l) return;
  const u = o.shapeFlag & 4 ? Oo(o.component) || o.component.proxy : o.el,
    c = l ? null : u,
    { i: d, r: p } = t,
    v = r && r.r,
    x = d.refs === et ? (d.refs = {}) : d.refs,
    $ = d.setupState;
  if (
    (v != null &&
      v !== p &&
      (at(v) ? ((x[v] = null), He($, v) && ($[v] = null)) : Ct(v) && (v.value = null)),
    $e(p))
  )
    cr(p, d, 12, [c, x]);
  else {
    const E = at(p),
      H = Ct(p);
    if (E || H) {
      const Y = () => {
        if (t.f) {
          const Q = E ? (He($, p) ? $[p] : x[p]) : p.value;
          l
            ? me(Q) && Sa(Q, u)
            : me(Q)
            ? Q.includes(u) || Q.push(u)
            : E
            ? ((x[p] = [u]), He($, p) && ($[p] = x[p]))
            : ((p.value = [u]), t.k && (x[t.k] = p.value));
        } else E ? ((x[p] = c), He($, p) && ($[p] = c)) : H && ((p.value = c), t.k && (x[t.k] = c));
      };
      c ? ((Y.id = -1), Nt(Y, i)) : Y();
    }
  }
}
let sr = !1;
const to = (t) => /svg/.test(t.namespaceURI) && t.tagName !== 'foreignObject',
  no = (t) => t.nodeType === 8;
function a4(t) {
  const {
      mt: r,
      p: i,
      o: {
        patchProp: o,
        createText: l,
        nextSibling: u,
        parentNode: c,
        remove: d,
        insert: p,
        createComment: v,
      },
    } = t,
    x = (I, D) => {
      if (!D.hasChildNodes()) {
        i(null, I, D), ao(), (D._vnode = I);
        return;
      }
      (sr = !1),
        $(D.firstChild, I, null, null, null),
        ao(),
        (D._vnode = I),
        sr && console.error('Hydration completed but contains mismatches.');
    },
    $ = (I, D, G, de, ge, Ve = !1) => {
      const we = no(I) && I.data === '[',
        Z = () => Q(I, D, G, de, ge, we),
        { type: Pe, ref: xe, shapeFlag: Ne, patchFlag: se } = D;
      let Te = I.nodeType;
      (D.el = I), se === -2 && ((Ve = !1), (D.dynamicChildren = null));
      let ae = null;
      switch (Pe) {
        case ci:
          Te !== 3
            ? D.children === ''
              ? (p((D.el = l('')), c(I), I), (ae = I))
              : (ae = Z())
            : (I.data !== D.children && ((sr = !0), (I.data = D.children)), (ae = u(I)));
          break;
        case qt:
          Te !== 8 || we ? (ae = Z()) : (ae = u(I));
          break;
        case ii:
          if ((we && ((I = u(I)), (Te = I.nodeType)), Te === 1 || Te === 3)) {
            ae = I;
            const Pt = !D.children.length;
            for (let qe = 0; qe < D.staticCount; qe++)
              Pt && (D.children += ae.nodeType === 1 ? ae.outerHTML : ae.data),
                qe === D.staticCount - 1 && (D.anchor = ae),
                (ae = u(ae));
            return we ? u(ae) : ae;
          } else Z();
          break;
        case be:
          we ? (ae = Y(I, D, G, de, ge, Ve)) : (ae = Z());
          break;
        default:
          if (Ne & 1)
            Te !== 1 || D.type.toLowerCase() !== I.tagName.toLowerCase()
              ? (ae = Z())
              : (ae = E(I, D, G, de, ge, Ve));
          else if (Ne & 6) {
            D.slotScopeIds = ge;
            const Pt = c(I);
            if (
              (r(D, Pt, null, G, de, to(Pt), Ve),
              (ae = we ? j(I) : u(I)),
              ae && no(ae) && ae.data === 'teleport end' && (ae = u(ae)),
              ri(D))
            ) {
              let qe;
              we
                ? ((qe = W(be)), (qe.anchor = ae ? ae.previousSibling : Pt.lastChild))
                : (qe = I.nodeType === 3 ? It('') : W('div')),
                (qe.el = I),
                (D.component.subTree = qe);
            }
          } else
            Ne & 64
              ? Te !== 8
                ? (ae = Z())
                : (ae = D.type.hydrate(I, D, G, de, ge, Ve, t, H))
              : Ne & 128 && (ae = D.type.hydrate(I, D, G, de, to(c(I)), ge, Ve, t, $));
      }
      return xe != null && fo(xe, null, de, D), ae;
    },
    E = (I, D, G, de, ge, Ve) => {
      Ve = Ve || !!D.dynamicChildren;
      const { type: we, props: Z, patchFlag: Pe, shapeFlag: xe, dirs: Ne } = D,
        se = (we === 'input' && Ne) || we === 'option';
      if (se || Pe !== -1) {
        if ((Ne && $n(D, null, G, 'created'), Z))
          if (se || !Ve || Pe & 48)
            for (const ae in Z)
              ((se && ae.endsWith('value')) || (rs(ae) && !Hi(ae))) &&
                o(I, ae, null, Z[ae], !1, void 0, G);
          else Z.onClick && o(I, 'onClick', null, Z.onClick, !1, void 0, G);
        let Te;
        if (
          ((Te = Z && Z.onVnodeBeforeMount) && on(Te, G, D),
          Ne && $n(D, null, G, 'beforeMount'),
          ((Te = Z && Z.onVnodeMounted) || Ne) &&
            Qd(() => {
              Te && on(Te, G, D), Ne && $n(D, null, G, 'mounted');
            }, de),
          xe & 16 && !(Z && (Z.innerHTML || Z.textContent)))
        ) {
          let ae = H(I.firstChild, D, I, G, de, ge, Ve);
          for (; ae; ) {
            sr = !0;
            const Pt = ae;
            (ae = ae.nextSibling), d(Pt);
          }
        } else xe & 8 && I.textContent !== D.children && ((sr = !0), (I.textContent = D.children));
      }
      return I.nextSibling;
    },
    H = (I, D, G, de, ge, Ve, we) => {
      we = we || !!D.dynamicChildren;
      const Z = D.children,
        Pe = Z.length;
      for (let xe = 0; xe < Pe; xe++) {
        const Ne = we ? Z[xe] : (Z[xe] = hn(Z[xe]));
        if (I) I = $(I, Ne, de, ge, Ve, we);
        else {
          if (Ne.type === ci && !Ne.children) continue;
          (sr = !0), i(null, Ne, G, null, de, ge, to(G), Ve);
        }
      }
      return I;
    },
    Y = (I, D, G, de, ge, Ve) => {
      const { slotScopeIds: we } = D;
      we && (ge = ge ? ge.concat(we) : we);
      const Z = c(I),
        Pe = H(u(I), D, Z, G, de, ge, Ve);
      return Pe && no(Pe) && Pe.data === ']'
        ? u((D.anchor = Pe))
        : ((sr = !0), p((D.anchor = v(']')), Z, Pe), Pe);
    },
    Q = (I, D, G, de, ge, Ve) => {
      if (((sr = !0), (D.el = null), Ve)) {
        const Pe = j(I);
        for (;;) {
          const xe = u(I);
          if (xe && xe !== Pe) d(xe);
          else break;
        }
      }
      const we = u(I),
        Z = c(I);
      return d(I), i(null, D, Z, we, G, de, to(Z), ge), we;
    },
    j = (I) => {
      let D = 0;
      for (; I; )
        if (((I = u(I)), I && no(I) && (I.data === '[' && D++, I.data === ']'))) {
          if (D === 0) return u(I);
          D--;
        }
      return I;
    };
  return [x, $];
}
const Nt = Qd;
function u4(t) {
  return gh(t);
}
function c4(t) {
  return gh(t, a4);
}
function gh(t, r) {
  const i = W2();
  i.__VUE__ = !0;
  const {
      insert: o,
      remove: l,
      patchProp: u,
      createElement: c,
      createText: d,
      createComment: p,
      setText: v,
      setElementText: x,
      parentNode: $,
      nextSibling: E,
      setScopeId: H = gn,
      insertStaticContent: Y,
    } = t,
    Q = (m, w, A, B = null, N = null, U = null, J = !1, z = null, K = !!w.dynamicChildren) => {
      if (m === w) return;
      m && !Tr(m, w) && ((B = Rr(m)), Yt(m, N, U, !0), (m = null)),
        w.patchFlag === -2 && ((K = !1), (w.dynamicChildren = null));
      const { type: V, ref: le, shapeFlag: re } = w;
      switch (V) {
        case ci:
          j(m, w, A, B);
          break;
        case qt:
          I(m, w, A, B);
          break;
        case ii:
          m == null && D(w, A, B, J);
          break;
        case be:
          se(m, w, A, B, N, U, J, z, K);
          break;
        default:
          re & 1
            ? ge(m, w, A, B, N, U, J, z, K)
            : re & 6
            ? Te(m, w, A, B, N, U, J, z, K)
            : (re & 64 || re & 128) && V.process(m, w, A, B, N, U, J, z, K, Zt);
      }
      le != null && N && fo(le, m && m.ref, U, w || m, !w);
    },
    j = (m, w, A, B) => {
      if (m == null) o((w.el = d(w.children)), A, B);
      else {
        const N = (w.el = m.el);
        w.children !== m.children && v(N, w.children);
      }
    },
    I = (m, w, A, B) => {
      m == null ? o((w.el = p(w.children || '')), A, B) : (w.el = m.el);
    },
    D = (m, w, A, B) => {
      [m.el, m.anchor] = Y(m.children, w, A, B, m.el, m.anchor);
    },
    G = ({ el: m, anchor: w }, A, B) => {
      let N;
      for (; m && m !== w; ) (N = E(m)), o(m, A, B), (m = N);
      o(w, A, B);
    },
    de = ({ el: m, anchor: w }) => {
      let A;
      for (; m && m !== w; ) (A = E(m)), l(m), (m = A);
      l(w);
    },
    ge = (m, w, A, B, N, U, J, z, K) => {
      (J = J || w.type === 'svg'), m == null ? Ve(w, A, B, N, U, J, z, K) : Pe(m, w, N, U, J, z, K);
    },
    Ve = (m, w, A, B, N, U, J, z) => {
      let K, V;
      const { type: le, props: re, shapeFlag: ue, transition: he, dirs: Le } = m;
      if (
        ((K = m.el = c(m.type, U, re && re.is, re)),
        ue & 8
          ? x(K, m.children)
          : ue & 16 && Z(m.children, K, null, B, N, U && le !== 'foreignObject', J, z),
        Le && $n(m, null, B, 'created'),
        re)
      ) {
        for (const Re in re)
          Re !== 'value' && !Hi(Re) && u(K, Re, null, re[Re], U, m.children, B, N, kt);
        'value' in re && u(K, 'value', null, re.value), (V = re.onVnodeBeforeMount) && on(V, B, m);
      }
      we(K, m, m.scopeId, J, B), Le && $n(m, null, B, 'beforeMount');
      const De = (!N || (N && !N.pendingBranch)) && he && !he.persisted;
      De && he.beforeEnter(K),
        o(K, w, A),
        ((V = re && re.onVnodeMounted) || De || Le) &&
          Nt(() => {
            V && on(V, B, m), De && he.enter(K), Le && $n(m, null, B, 'mounted');
          }, N);
    },
    we = (m, w, A, B, N) => {
      if ((A && H(m, A), B)) for (let U = 0; U < B.length; U++) H(m, B[U]);
      if (N) {
        let U = N.subTree;
        if (w === U) {
          const J = N.vnode;
          we(m, J, J.scopeId, J.slotScopeIds, N.parent);
        }
      }
    },
    Z = (m, w, A, B, N, U, J, z, K = 0) => {
      for (let V = K; V < m.length; V++) {
        const le = (m[V] = z ? ar(m[V]) : hn(m[V]));
        Q(null, le, w, A, B, N, U, J, z);
      }
    },
    Pe = (m, w, A, B, N, U, J) => {
      const z = (w.el = m.el);
      let { patchFlag: K, dynamicChildren: V, dirs: le } = w;
      K |= m.patchFlag & 16;
      const re = m.props || et,
        ue = w.props || et;
      let he;
      A && Pr(A, !1),
        (he = ue.onVnodeBeforeUpdate) && on(he, A, w, m),
        le && $n(w, m, A, 'beforeUpdate'),
        A && Pr(A, !0);
      const Le = N && w.type !== 'foreignObject';
      if (
        (V ? xe(m.dynamicChildren, V, z, A, B, Le, U) : J || Oe(m, w, z, null, A, B, Le, U, !1),
        K > 0)
      ) {
        if (K & 16) Ne(z, w, re, ue, A, B, N);
        else if (
          (K & 2 && re.class !== ue.class && u(z, 'class', null, ue.class, N),
          K & 4 && u(z, 'style', re.style, ue.style, N),
          K & 8)
        ) {
          const De = w.dynamicProps;
          for (let Re = 0; Re < De.length; Re++) {
            const nt = De[Re],
              $t = re[nt],
              wn = ue[nt];
            (wn !== $t || nt === 'value') && u(z, nt, $t, wn, N, m.children, A, B, kt);
          }
        }
        K & 1 && m.children !== w.children && x(z, w.children);
      } else !J && V == null && Ne(z, w, re, ue, A, B, N);
      ((he = ue.onVnodeUpdated) || le) &&
        Nt(() => {
          he && on(he, A, w, m), le && $n(w, m, A, 'updated');
        }, B);
    },
    xe = (m, w, A, B, N, U, J) => {
      for (let z = 0; z < w.length; z++) {
        const K = m[z],
          V = w[z],
          le = K.el && (K.type === be || !Tr(K, V) || K.shapeFlag & 70) ? $(K.el) : A;
        Q(K, V, le, null, B, N, U, J, !0);
      }
    },
    Ne = (m, w, A, B, N, U, J) => {
      if (A !== B) {
        if (A !== et)
          for (const z in A) !Hi(z) && !(z in B) && u(m, z, A[z], null, J, w.children, N, U, kt);
        for (const z in B) {
          if (Hi(z)) continue;
          const K = B[z],
            V = A[z];
          K !== V && z !== 'value' && u(m, z, V, K, J, w.children, N, U, kt);
        }
        'value' in B && u(m, 'value', A.value, B.value);
      }
    },
    se = (m, w, A, B, N, U, J, z, K) => {
      const V = (w.el = m ? m.el : d('')),
        le = (w.anchor = m ? m.anchor : d(''));
      let { patchFlag: re, dynamicChildren: ue, slotScopeIds: he } = w;
      he && (z = z ? z.concat(he) : he),
        m == null
          ? (o(V, A, B), o(le, A, B), Z(w.children, A, le, N, U, J, z, K))
          : re > 0 && re & 64 && ue && m.dynamicChildren
          ? (xe(m.dynamicChildren, ue, A, N, U, J, z),
            (w.key != null || (N && w === N.subTree)) && vh(m, w, !0))
          : Oe(m, w, A, le, N, U, J, z, K);
    },
    Te = (m, w, A, B, N, U, J, z, K) => {
      (w.slotScopeIds = z),
        m == null
          ? w.shapeFlag & 512
            ? N.ctx.activate(w, A, B, J, K)
            : ae(w, A, B, N, U, J, K)
          : Pt(m, w, K);
    },
    ae = (m, w, A, B, N, U, J) => {
      const z = (m.component = y4(m, B, N));
      if ((ss(m) && (z.ctx.renderer = Zt), b4(z), z.asyncDep)) {
        if ((N && N.registerDep(z, qe), !m.el)) {
          const K = (z.subTree = W(qt));
          I(null, K, w, A);
        }
        return;
      }
      qe(z, m, w, A, N, U, J);
    },
    Pt = (m, w, A) => {
      const B = (w.component = m.component);
      if (My(m, w, A))
        if (B.asyncDep && !B.asyncResolved) {
          Ge(B, w, A);
          return;
        } else (B.next = w), Ay(B.update), B.update();
      else (w.el = m.el), (B.vnode = w);
    },
    qe = (m, w, A, B, N, U, J) => {
      const z = () => {
          if (m.isMounted) {
            let { next: le, bu: re, u: ue, parent: he, vnode: Le } = m,
              De = le,
              Re;
            Pr(m, !1),
              le ? ((le.el = Le.el), Ge(m, le, J)) : (le = Le),
              re && Jl(re),
              (Re = le.props && le.props.onVnodeBeforeUpdate) && on(Re, he, le, Le),
              Pr(m, !0);
            const nt = Ql(m),
              $t = m.subTree;
            (m.subTree = nt),
              Q($t, nt, $($t.el), Rr($t), m, N, U),
              (le.el = nt.el),
              De === null && Oy(m, nt.el),
              ue && Nt(ue, N),
              (Re = le.props && le.props.onVnodeUpdated) && Nt(() => on(Re, he, le, Le), N);
          } else {
            let le;
            const { el: re, props: ue } = w,
              { bm: he, m: Le, parent: De } = m,
              Re = ri(w);
            if (
              (Pr(m, !1),
              he && Jl(he),
              !Re && (le = ue && ue.onVnodeBeforeMount) && on(le, De, w),
              Pr(m, !0),
              re && Yn)
            ) {
              const nt = () => {
                (m.subTree = Ql(m)), Yn(re, m.subTree, m, N, null);
              };
              Re ? w.type.__asyncLoader().then(() => !m.isUnmounted && nt()) : nt();
            } else {
              const nt = (m.subTree = Ql(m));
              Q(null, nt, A, B, m, N, U), (w.el = nt.el);
            }
            if ((Le && Nt(Le, N), !Re && (le = ue && ue.onVnodeMounted))) {
              const nt = w;
              Nt(() => on(le, De, nt), N);
            }
            (w.shapeFlag & 256 || (De && ri(De.vnode) && De.vnode.shapeFlag & 256)) &&
              m.a &&
              Nt(m.a, N),
              (m.isMounted = !0),
              (w = A = B = null);
          }
        },
        K = (m.effect = new Ia(z, () => Po(V), m.scope)),
        V = (m.update = () => K.run());
      (V.id = m.uid), Pr(m, !0), V();
    },
    Ge = (m, w, A) => {
      w.component = m;
      const B = m.vnode.props;
      (m.vnode = w), (m.next = null), n4(m, w.props, B, A), s4(m, w.children, A), pi(), Vf(), gi();
    },
    Oe = (m, w, A, B, N, U, J, z, K = !1) => {
      const V = m && m.children,
        le = m ? m.shapeFlag : 0,
        re = w.children,
        { patchFlag: ue, shapeFlag: he } = w;
      if (ue > 0) {
        if (ue & 128) {
          Ln(V, re, A, B, N, U, J, z, K);
          return;
        } else if (ue & 256) {
          En(V, re, A, B, N, U, J, z, K);
          return;
        }
      }
      he & 8
        ? (le & 16 && kt(V, N, U), re !== V && x(A, re))
        : le & 16
        ? he & 16
          ? Ln(V, re, A, B, N, U, J, z, K)
          : kt(V, N, U, !0)
        : (le & 8 && x(A, ''), he & 16 && Z(re, A, B, N, U, J, z, K));
    },
    En = (m, w, A, B, N, U, J, z, K) => {
      (m = m || jr), (w = w || jr);
      const V = m.length,
        le = w.length,
        re = Math.min(V, le);
      let ue;
      for (ue = 0; ue < re; ue++) {
        const he = (w[ue] = K ? ar(w[ue]) : hn(w[ue]));
        Q(m[ue], he, A, null, N, U, J, z, K);
      }
      V > le ? kt(m, N, U, !0, !1, re) : Z(w, A, B, N, U, J, z, K, re);
    },
    Ln = (m, w, A, B, N, U, J, z, K) => {
      let V = 0;
      const le = w.length;
      let re = m.length - 1,
        ue = le - 1;
      for (; V <= re && V <= ue; ) {
        const he = m[V],
          Le = (w[V] = K ? ar(w[V]) : hn(w[V]));
        if (Tr(he, Le)) Q(he, Le, A, null, N, U, J, z, K);
        else break;
        V++;
      }
      for (; V <= re && V <= ue; ) {
        const he = m[re],
          Le = (w[ue] = K ? ar(w[ue]) : hn(w[ue]));
        if (Tr(he, Le)) Q(he, Le, A, null, N, U, J, z, K);
        else break;
        re--, ue--;
      }
      if (V > re) {
        if (V <= ue) {
          const he = ue + 1,
            Le = he < le ? w[he].el : B;
          for (; V <= ue; ) Q(null, (w[V] = K ? ar(w[V]) : hn(w[V])), A, Le, N, U, J, z, K), V++;
        }
      } else if (V > ue) for (; V <= re; ) Yt(m[V], N, U, !0), V++;
      else {
        const he = V,
          Le = V,
          De = new Map();
        for (V = Le; V <= ue; V++) {
          const pt = (w[V] = K ? ar(w[V]) : hn(w[V]));
          pt.key != null && De.set(pt.key, V);
        }
        let Re,
          nt = 0;
        const $t = ue - Le + 1;
        let wn = !1,
          Br = 0;
        const In = new Array($t);
        for (V = 0; V < $t; V++) In[V] = 0;
        for (V = he; V <= re; V++) {
          const pt = m[V];
          if (nt >= $t) {
            Yt(pt, N, U, !0);
            continue;
          }
          let Mt;
          if (pt.key != null) Mt = De.get(pt.key);
          else
            for (Re = Le; Re <= ue; Re++)
              if (In[Re - Le] === 0 && Tr(pt, w[Re])) {
                Mt = Re;
                break;
              }
          Mt === void 0
            ? Yt(pt, N, U, !0)
            : ((In[Mt - Le] = V + 1),
              Mt >= Br ? (Br = Mt) : (wn = !0),
              Q(pt, w[Mt], A, null, N, U, J, z, K),
              nt++);
        }
        const Vr = wn ? f4(In) : jr;
        for (Re = Vr.length - 1, V = $t - 1; V >= 0; V--) {
          const pt = Le + V,
            Mt = w[pt],
            Nr = pt + 1 < le ? w[pt + 1].el : B;
          In[V] === 0
            ? Q(null, Mt, A, Nr, N, U, J, z, K)
            : wn && (Re < 0 || V !== Vr[Re] ? dt(Mt, A, Nr, 2) : Re--);
        }
      }
    },
    dt = (m, w, A, B, N = null) => {
      const { el: U, type: J, transition: z, children: K, shapeFlag: V } = m;
      if (V & 6) {
        dt(m.component.subTree, w, A, B);
        return;
      }
      if (V & 128) {
        m.suspense.move(w, A, B);
        return;
      }
      if (V & 64) {
        J.move(m, w, A, Zt);
        return;
      }
      if (J === be) {
        o(U, w, A);
        for (let re = 0; re < K.length; re++) dt(K[re], w, A, B);
        o(m.anchor, w, A);
        return;
      }
      if (J === ii) {
        G(m, w, A);
        return;
      }
      if (B !== 2 && V & 1 && z)
        if (B === 0) z.beforeEnter(U), o(U, w, A), Nt(() => z.enter(U), N);
        else {
          const { leave: re, delayLeave: ue, afterLeave: he } = z,
            Le = () => o(U, w, A),
            De = () => {
              re(U, () => {
                Le(), he && he();
              });
            };
          ue ? ue(U, Le, De) : De();
        }
      else o(U, w, A);
    },
    Yt = (m, w, A, B = !1, N = !1) => {
      const {
        type: U,
        props: J,
        ref: z,
        children: K,
        dynamicChildren: V,
        shapeFlag: le,
        patchFlag: re,
        dirs: ue,
      } = m;
      if ((z != null && fo(z, null, A, m, !0), le & 256)) {
        w.ctx.deactivate(m);
        return;
      }
      const he = le & 1 && ue,
        Le = !ri(m);
      let De;
      if ((Le && (De = J && J.onVnodeBeforeUnmount) && on(De, w, m), le & 6)) qn(m.component, A, B);
      else {
        if (le & 128) {
          m.suspense.unmount(A, B);
          return;
        }
        he && $n(m, null, w, 'beforeUnmount'),
          le & 64
            ? m.type.remove(m, w, A, N, Zt, B)
            : V && (U !== be || (re > 0 && re & 64))
            ? kt(V, w, A, !1, !0)
            : ((U === be && re & 384) || (!N && le & 16)) && kt(K, w, A),
          B && os(m);
      }
      ((Le && (De = J && J.onVnodeUnmounted)) || he) &&
        Nt(() => {
          De && on(De, w, m), he && $n(m, null, w, 'unmounted');
        }, A);
    },
    os = (m) => {
      const { type: w, el: A, anchor: B, transition: N } = m;
      if (w === be) {
        No(A, B);
        return;
      }
      if (w === ii) {
        de(m);
        return;
      }
      const U = () => {
        l(A), N && !N.persisted && N.afterLeave && N.afterLeave();
      };
      if (m.shapeFlag & 1 && N && !N.persisted) {
        const { leave: J, delayLeave: z } = N,
          K = () => J(A, U);
        z ? z(m.el, U, K) : K();
      } else U();
    },
    No = (m, w) => {
      let A;
      for (; m !== w; ) (A = E(m)), l(m), (m = A);
      l(w);
    },
    qn = (m, w, A) => {
      const { bum: B, scope: N, update: U, subTree: J, um: z } = m;
      B && Jl(B),
        N.stop(),
        U && ((U.active = !1), Yt(J, m, w, A)),
        z && Nt(z, w),
        Nt(() => {
          m.isUnmounted = !0;
        }, w),
        w &&
          w.pendingBranch &&
          !w.isUnmounted &&
          m.asyncDep &&
          !m.asyncResolved &&
          m.suspenseId === w.pendingId &&
          (w.deps--, w.deps === 0 && w.resolve());
    },
    kt = (m, w, A, B = !1, N = !1, U = 0) => {
      for (let J = U; J < m.length; J++) Yt(m[J], w, A, B, N);
    },
    Rr = (m) =>
      m.shapeFlag & 6
        ? Rr(m.component.subTree)
        : m.shapeFlag & 128
        ? m.suspense.next()
        : E(m.anchor || m.el),
    Gn = (m, w, A) => {
      m == null
        ? w._vnode && Yt(w._vnode, null, null, !0)
        : Q(w._vnode || null, m, w, null, null, null, A),
        Vf(),
        ao(),
        (w._vnode = m);
    },
    Zt = { p: Q, um: Yt, m: dt, r: os, mt: ae, mc: Z, pc: Oe, pbc: xe, n: Rr, o: t };
  let bi, Yn;
  return r && ([bi, Yn] = r(Zt)), { render: Gn, hydrate: bi, createApp: l4(Gn, bi) };
}
function Pr({ effect: t, update: r }, i) {
  t.allowRecurse = r.allowRecurse = i;
}
function vh(t, r, i = !1) {
  const o = t.children,
    l = r.children;
  if (me(o) && me(l))
    for (let u = 0; u < o.length; u++) {
      const c = o[u];
      let d = l[u];
      d.shapeFlag & 1 &&
        !d.dynamicChildren &&
        ((d.patchFlag <= 0 || d.patchFlag === 32) && ((d = l[u] = ar(l[u])), (d.el = c.el)),
        i || vh(c, d)),
        d.type === ci && (d.el = c.el);
    }
}
function f4(t) {
  const r = t.slice(),
    i = [0];
  let o, l, u, c, d;
  const p = t.length;
  for (o = 0; o < p; o++) {
    const v = t[o];
    if (v !== 0) {
      if (((l = i[i.length - 1]), t[l] < v)) {
        (r[o] = l), i.push(o);
        continue;
      }
      for (u = 0, c = i.length - 1; u < c; )
        (d = (u + c) >> 1), t[i[d]] < v ? (u = d + 1) : (c = d);
      v < t[i[u]] && (u > 0 && (r[o] = i[u - 1]), (i[u] = o));
    }
  }
  for (u = i.length, c = i[u - 1]; u-- > 0; ) (i[u] = c), (c = r[c]);
  return i;
}
const d4 = (t) => t.__isTeleport,
  be = Symbol(void 0),
  ci = Symbol(void 0),
  qt = Symbol(void 0),
  ii = Symbol(void 0),
  Wi = [];
let pn = null;
function P(t = !1) {
  Wi.push((pn = t ? null : []));
}
function h4() {
  Wi.pop(), (pn = Wi[Wi.length - 1] || null);
}
let ji = 1;
function Yf(t) {
  ji += t;
}
function mh(t) {
  return (t.dynamicChildren = ji > 0 ? pn || jr : null), h4(), ji > 0 && pn && pn.push(t), t;
}
function k(t, r, i, o, l, u) {
  return mh(M(t, r, i, o, l, u, !0));
}
function ve(t, r, i, o, l) {
  return mh(W(t, r, i, o, l, !0));
}
function ho(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function Tr(t, r) {
  return t.type === r.type && t.key === r.key;
}
const ko = '__vInternal',
  yh = ({ key: t }) => t ?? null,
  so = ({ ref: t, ref_key: r, ref_for: i }) =>
    t != null ? (at(t) || Ct(t) || $e(t) ? { i: mt, r: t, k: r, f: !!i } : t) : null;
function M(t, r = null, i = null, o = 0, l = null, u = t === be ? 0 : 1, c = !1, d = !1) {
  const p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: r,
    key: r && yh(r),
    ref: r && so(r),
    scopeId: So,
    slotScopeIds: null,
    children: i,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: u,
    patchFlag: o,
    dynamicProps: l,
    dynamicChildren: null,
    appContext: null,
    ctx: mt,
  };
  return (
    d ? (za(p, i), u & 128 && t.normalize(p)) : i && (p.shapeFlag |= at(i) ? 8 : 16),
    ji > 0 && !c && pn && (p.patchFlag > 0 || u & 6) && p.patchFlag !== 32 && pn.push(p),
    p
  );
}
const W = _4;
function _4(t, r = null, i = null, o = 0, l = null, u = !1) {
  if (((!t || t === oh) && (t = qt), ho(t))) {
    const d = dr(t, r, !0);
    return (
      i && za(d, i),
      ji > 0 && !u && pn && (d.shapeFlag & 6 ? (pn[pn.indexOf(t)] = d) : pn.push(d)),
      (d.patchFlag |= -2),
      d
    );
  }
  if (($4(t) && (t = t.__vccOpts), r)) {
    r = p4(r);
    let { class: d, style: p } = r;
    d && !at(d) && (r.class = Ke(d)),
      tt(p) && (Ud(p) && !me(p) && (p = _t({}, p)), (r.style = ns(p)));
  }
  const c = at(t) ? 1 : Ry(t) ? 128 : d4(t) ? 64 : tt(t) ? 4 : $e(t) ? 2 : 0;
  return M(t, r, i, o, l, c, u, !0);
}
function p4(t) {
  return t ? (Ud(t) || ko in t ? _t({}, t) : t) : null;
}
function dr(t, r, i = !1) {
  const { props: o, ref: l, patchFlag: u, children: c } = t,
    d = r ? si(o || {}, r) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: d,
    key: d && yh(d),
    ref: r && r.ref ? (i && l ? (me(l) ? l.concat(so(r)) : [l, so(r)]) : so(r)) : l,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: c,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    patchFlag: r && t.type !== be ? (u === -1 ? 16 : u | 16) : u,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && dr(t.ssContent),
    ssFallback: t.ssFallback && dr(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
  };
}
function It(t = ' ', r = 0) {
  return W(ci, null, t, r);
}
function g4(t, r) {
  const i = W(ii, null, t);
  return (i.staticCount = r), i;
}
function ce(t = '', r = !1) {
  return r ? (P(), ve(qt, null, t)) : W(qt, null, t);
}
function hn(t) {
  return t == null || typeof t == 'boolean'
    ? W(qt)
    : me(t)
    ? W(be, null, t.slice())
    : typeof t == 'object'
    ? ar(t)
    : W(ci, null, String(t));
}
function ar(t) {
  return (t.el === null && t.patchFlag !== -1) || t.memo ? t : dr(t);
}
function za(t, r) {
  let i = 0;
  const { shapeFlag: o } = t;
  if (r == null) r = null;
  else if (me(r)) i = 16;
  else if (typeof r == 'object')
    if (o & 65) {
      const l = r.default;
      l && (l._c && (l._d = !1), za(t, l()), l._c && (l._d = !0));
      return;
    } else {
      i = 32;
      const l = r._;
      !l && !(ko in r)
        ? (r._ctx = mt)
        : l === 3 && mt && (mt.slots._ === 1 ? (r._ = 1) : ((r._ = 2), (t.patchFlag |= 1024)));
    }
  else
    $e(r)
      ? ((r = { default: r, _ctx: mt }), (i = 32))
      : ((r = String(r)), o & 64 ? ((i = 16), (r = [It(r)])) : (i = 8));
  (t.children = r), (t.shapeFlag |= i);
}
function si(...t) {
  const r = {};
  for (let i = 0; i < t.length; i++) {
    const o = t[i];
    for (const l in o)
      if (l === 'class') r.class !== o.class && (r.class = Ke([r.class, o.class]));
      else if (l === 'style') r.style = ns([r.style, o.style]);
      else if (rs(l)) {
        const u = r[l],
          c = o[l];
        c && u !== c && !(me(u) && u.includes(c)) && (r[l] = u ? [].concat(u, c) : c);
      } else l !== '' && (r[l] = o[l]);
  }
  return r;
}
function on(t, r, i, o = null) {
  ln(t, r, 7, [i, o]);
}
const v4 = ph();
let m4 = 0;
function y4(t, r, i) {
  const o = t.type,
    l = (r ? r.appContext : t.appContext) || v4,
    u = {
      uid: m4++,
      vnode: t,
      type: o,
      parent: r,
      appContext: l,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new z2(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: r ? r.provides : Object.create(l.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: fh(o, l),
      emitsOptions: Jd(o, l),
      emit: null,
      emitted: null,
      propsDefaults: et,
      inheritAttrs: o.inheritAttrs,
      ctx: et,
      data: et,
      props: et,
      attrs: et,
      slots: et,
      refs: et,
      setupState: et,
      setupContext: null,
      suspense: i,
      suspenseId: i ? i.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (u.ctx = { _: u }), (u.root = r ? r.root : u), (u.emit = Ly.bind(null, u)), t.ce && t.ce(u), u
  );
}
let ft = null;
const Mo = () => ft || mt,
  fi = (t) => {
    (ft = t), t.scope.on();
  },
  Mr = () => {
    ft && ft.scope.off(), (ft = null);
  };
function bh(t) {
  return t.vnode.shapeFlag & 4;
}
let di = !1;
function b4(t, r = !1) {
  di = r;
  const { props: i, children: o } = t.vnode,
    l = bh(t);
  t4(t, i, l, r), i4(t, o);
  const u = l ? w4(t, r) : void 0;
  return (di = !1), u;
}
function w4(t, r) {
  const i = t.type;
  (t.accessCache = Object.create(null)), (t.proxy = Di(new Proxy(t.ctx, Zy)));
  const { setup: o } = i;
  if (o) {
    const l = (t.setupContext = o.length > 1 ? C4(t) : null);
    fi(t), pi();
    const u = cr(o, t, 0, [t.props, l]);
    if ((gi(), Mr(), Ed(u))) {
      if ((u.then(Mr, Mr), r))
        return u
          .then((c) => {
            Zf(t, c, r);
          })
          .catch((c) => {
            is(c, t, 0);
          });
      t.asyncDep = u;
    } else Zf(t, u, r);
  } else wh(t, r);
}
function Zf(t, r, i) {
  $e(r)
    ? t.type.__ssrInlineRender
      ? (t.ssrRender = r)
      : (t.render = r)
    : tt(r) && (t.setupState = qd(r)),
    wh(t, i);
}
let Xf;
function wh(t, r, i) {
  const o = t.type;
  if (!t.render) {
    if (!r && Xf && !o.render) {
      const l = o.template || Ua(t).template;
      if (l) {
        const { isCustomElement: u, compilerOptions: c } = t.appContext.config,
          { delimiters: d, compilerOptions: p } = o,
          v = _t(_t({ isCustomElement: u, delimiters: d }, c), p);
        o.render = Xf(l, v);
      }
    }
    t.render = o.render || gn;
  }
  fi(t), pi(), Xy(t), gi(), Mr();
}
function x4(t) {
  return new Proxy(t.attrs, {
    get(r, i) {
      return Gt(t, 'get', '$attrs'), r[i];
    },
  });
}
function C4(t) {
  const r = (o) => {
    t.exposed = o || {};
  };
  let i;
  return {
    get attrs() {
      return i || (i = x4(t));
    },
    slots: t.slots,
    emit: t.emit,
    expose: r,
  };
}
function Oo(t) {
  if (t.exposed)
    return (
      t.exposeProxy ||
      (t.exposeProxy = new Proxy(qd(Di(t.exposed)), {
        get(r, i) {
          if (i in r) return r[i];
          if (i in Ui) return Ui[i](t);
        },
        has(r, i) {
          return i in r || i in Ui;
        },
      }))
    );
}
function P4(t, r = !0) {
  return $e(t) ? t.displayName || t.name : t.name || (r && t.__name);
}
function $4(t) {
  return $e(t) && '__vccOpts' in t;
}
const ke = (t, r) => Py(t, r, di);
function es(t, r, i) {
  const o = arguments.length;
  return o === 2
    ? tt(r) && !me(r)
      ? ho(r)
        ? W(t, null, [r])
        : W(t, r)
      : W(t, null, r)
    : (o > 3 ? (i = Array.prototype.slice.call(arguments, 2)) : o === 3 && ho(i) && (i = [i]),
      W(t, r, i));
}
const S4 = Symbol(''),
  A4 = () => vn(S4),
  T4 = '3.2.45',
  E4 = 'http://www.w3.org/2000/svg',
  Er = typeof document < 'u' ? document : null,
  Jf = Er && Er.createElement('template'),
  L4 = {
    insert: (t, r, i) => {
      r.insertBefore(t, i || null);
    },
    remove: (t) => {
      const r = t.parentNode;
      r && r.removeChild(t);
    },
    createElement: (t, r, i, o) => {
      const l = r ? Er.createElementNS(E4, t) : Er.createElement(t, i ? { is: i } : void 0);
      return t === 'select' && o && o.multiple != null && l.setAttribute('multiple', o.multiple), l;
    },
    createText: (t) => Er.createTextNode(t),
    createComment: (t) => Er.createComment(t),
    setText: (t, r) => {
      t.nodeValue = r;
    },
    setElementText: (t, r) => {
      t.textContent = r;
    },
    parentNode: (t) => t.parentNode,
    nextSibling: (t) => t.nextSibling,
    querySelector: (t) => Er.querySelector(t),
    setScopeId(t, r) {
      t.setAttribute(r, '');
    },
    insertStaticContent(t, r, i, o, l, u) {
      const c = i ? i.previousSibling : r.lastChild;
      if (l && (l === u || l.nextSibling))
        for (; r.insertBefore(l.cloneNode(!0), i), !(l === u || !(l = l.nextSibling)); );
      else {
        Jf.innerHTML = o ? `<svg>${t}</svg>` : t;
        const d = Jf.content;
        if (o) {
          const p = d.firstChild;
          for (; p.firstChild; ) d.appendChild(p.firstChild);
          d.removeChild(p);
        }
        r.insertBefore(d, i);
      }
      return [c ? c.nextSibling : r.firstChild, i ? i.previousSibling : r.lastChild];
    },
  };
function I4(t, r, i) {
  const o = t._vtc;
  o && (r = (r ? [r, ...o] : [...o]).join(' ')),
    r == null ? t.removeAttribute('class') : i ? t.setAttribute('class', r) : (t.className = r);
}
function k4(t, r, i) {
  const o = t.style,
    l = at(i);
  if (i && !l) {
    for (const u in i) ma(o, u, i[u]);
    if (r && !at(r)) for (const u in r) i[u] == null && ma(o, u, '');
  } else {
    const u = o.display;
    l ? r !== i && (o.cssText = i) : r && t.removeAttribute('style'),
      '_vod' in t && (o.display = u);
  }
}
const Qf = /\s*!important$/;
function ma(t, r, i) {
  if (me(i)) i.forEach((o) => ma(t, r, o));
  else if ((i == null && (i = ''), r.startsWith('--'))) t.setProperty(r, i);
  else {
    const o = M4(t, r);
    Qf.test(i) ? t.setProperty(_i(o), i.replace(Qf, ''), 'important') : (t[o] = i);
  }
}
const jf = ['Webkit', 'Moz', 'ms'],
  na = {};
function M4(t, r) {
  const i = na[r];
  if (i) return i;
  let o = An(r);
  if (o !== 'filter' && o in t) return (na[r] = o);
  o = wo(o);
  for (let l = 0; l < jf.length; l++) {
    const u = jf[l] + o;
    if (u in t) return (na[r] = u);
  }
  return r;
}
const ed = 'http://www.w3.org/1999/xlink';
function O4(t, r, i, o, l) {
  if (o && r.startsWith('xlink:'))
    i == null ? t.removeAttributeNS(ed, r.slice(6, r.length)) : t.setAttributeNS(ed, r, i);
  else {
    const u = B2(r);
    i == null || (u && !Sd(i)) ? t.removeAttribute(r) : t.setAttribute(r, u ? '' : i);
  }
}
function R4(t, r, i, o, l, u, c) {
  if (r === 'innerHTML' || r === 'textContent') {
    o && c(o, l, u), (t[r] = i ?? '');
    return;
  }
  if (r === 'value' && t.tagName !== 'PROGRESS' && !t.tagName.includes('-')) {
    t._value = i;
    const p = i ?? '';
    (t.value !== p || t.tagName === 'OPTION') && (t.value = p), i == null && t.removeAttribute(r);
    return;
  }
  let d = !1;
  if (i === '' || i == null) {
    const p = typeof t[r];
    p === 'boolean'
      ? (i = Sd(i))
      : i == null && p === 'string'
      ? ((i = ''), (d = !0))
      : p === 'number' && ((i = 0), (d = !0));
  }
  try {
    t[r] = i;
  } catch {}
  d && t.removeAttribute(r);
}
function B4(t, r, i, o) {
  t.addEventListener(r, i, o);
}
function V4(t, r, i, o) {
  t.removeEventListener(r, i, o);
}
function N4(t, r, i, o, l = null) {
  const u = t._vei || (t._vei = {}),
    c = u[r];
  if (o && c) c.value = o;
  else {
    const [d, p] = F4(r);
    if (o) {
      const v = (u[r] = U4(o, l));
      B4(t, d, v, p);
    } else c && (V4(t, d, c, p), (u[r] = void 0));
  }
}
const td = /(?:Once|Passive|Capture)$/;
function F4(t) {
  let r;
  if (td.test(t)) {
    r = {};
    let o;
    for (; (o = t.match(td)); )
      (t = t.slice(0, t.length - o[0].length)), (r[o[0].toLowerCase()] = !0);
  }
  return [t[2] === ':' ? t.slice(3) : _i(t.slice(2)), r];
}
let ra = 0;
const H4 = Promise.resolve(),
  D4 = () => ra || (H4.then(() => (ra = 0)), (ra = Date.now()));
function U4(t, r) {
  const i = (o) => {
    if (!o._vts) o._vts = Date.now();
    else if (o._vts <= i.attached) return;
    ln(W4(o, i.value), r, 5, [o]);
  };
  return (i.value = t), (i.attached = D4()), i;
}
function W4(t, r) {
  if (me(r)) {
    const i = t.stopImmediatePropagation;
    return (
      (t.stopImmediatePropagation = () => {
        i.call(t), (t._stopped = !0);
      }),
      r.map((o) => (l) => !l._stopped && o && o(l))
    );
  } else return r;
}
const nd = /^on[a-z]/,
  z4 = (t, r, i, o, l = !1, u, c, d, p) => {
    r === 'class'
      ? I4(t, o, l)
      : r === 'style'
      ? k4(t, i, o)
      : rs(r)
      ? $a(r) || N4(t, r, i, o, c)
      : (
          r[0] === '.'
            ? ((r = r.slice(1)), !0)
            : r[0] === '^'
            ? ((r = r.slice(1)), !1)
            : K4(t, r, o, l)
        )
      ? R4(t, r, o, u, c, d, p)
      : (r === 'true-value' ? (t._trueValue = o) : r === 'false-value' && (t._falseValue = o),
        O4(t, r, o, l));
  };
function K4(t, r, i, o) {
  return o
    ? !!(r === 'innerHTML' || r === 'textContent' || (r in t && nd.test(r) && $e(i)))
    : r === 'spellcheck' ||
      r === 'draggable' ||
      r === 'translate' ||
      r === 'form' ||
      (r === 'list' && t.tagName === 'INPUT') ||
      (r === 'type' && t.tagName === 'TEXTAREA') ||
      (nd.test(r) && at(i))
    ? !1
    : r in t;
}
function q4(t) {
  const r = Mo();
  if (!r) return;
  const i = (r.ut = (l = t(r.proxy)) => {
      Array.from(document.querySelectorAll(`[data-v-owner="${r.uid}"]`)).forEach((u) => ba(u, l));
    }),
    o = () => {
      const l = t(r.proxy);
      ya(r.subTree, l), i(l);
    };
  jd(o),
    an(() => {
      const l = new MutationObserver(o);
      l.observe(r.subTree.el.parentNode, { childList: !0 }), hr(() => l.disconnect());
    });
}
function ya(t, r) {
  if (t.shapeFlag & 128) {
    const i = t.suspense;
    (t = i.activeBranch),
      i.pendingBranch &&
        !i.isHydrating &&
        i.effects.push(() => {
          ya(i.activeBranch, r);
        });
  }
  for (; t.component; ) t = t.component.subTree;
  if (t.shapeFlag & 1 && t.el) ba(t.el, r);
  else if (t.type === be) t.children.forEach((i) => ya(i, r));
  else if (t.type === ii) {
    let { el: i, anchor: o } = t;
    for (; i && (ba(i, r), i !== o); ) i = i.nextSibling;
  }
}
function ba(t, r) {
  if (t.nodeType === 1) {
    const i = t.style;
    for (const o in r) i.setProperty(`--${o}`, r[o]);
  }
}
const or = 'transition',
  Bi = 'animation',
  vi = (t, { slots: r }) => es(nh, Ch(t), r);
vi.displayName = 'Transition';
const xh = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  G4 = (vi.props = _t({}, nh.props, xh)),
  $r = (t, r = []) => {
    me(t) ? t.forEach((i) => i(...r)) : t && t(...r);
  },
  rd = (t) => (t ? (me(t) ? t.some((r) => r.length > 1) : t.length > 1) : !1);
function Ch(t) {
  const r = {};
  for (const se in t) se in xh || (r[se] = t[se]);
  if (t.css === !1) return r;
  const {
      name: i = 'v',
      type: o,
      duration: l,
      enterFromClass: u = `${i}-enter-from`,
      enterActiveClass: c = `${i}-enter-active`,
      enterToClass: d = `${i}-enter-to`,
      appearFromClass: p = u,
      appearActiveClass: v = c,
      appearToClass: x = d,
      leaveFromClass: $ = `${i}-leave-from`,
      leaveActiveClass: E = `${i}-leave-active`,
      leaveToClass: H = `${i}-leave-to`,
    } = t,
    Y = Y4(l),
    Q = Y && Y[0],
    j = Y && Y[1],
    {
      onBeforeEnter: I,
      onEnter: D,
      onEnterCancelled: G,
      onLeave: de,
      onLeaveCancelled: ge,
      onBeforeAppear: Ve = I,
      onAppear: we = D,
      onAppearCancelled: Z = G,
    } = r,
    Pe = (se, Te, ae) => {
      lr(se, Te ? x : d), lr(se, Te ? v : c), ae && ae();
    },
    xe = (se, Te) => {
      (se._isLeaving = !1), lr(se, $), lr(se, H), lr(se, E), Te && Te();
    },
    Ne = (se) => (Te, ae) => {
      const Pt = se ? we : D,
        qe = () => Pe(Te, se, ae);
      $r(Pt, [Te, qe]),
        id(() => {
          lr(Te, se ? p : u), Dn(Te, se ? x : d), rd(Pt) || sd(Te, o, Q, qe);
        });
    };
  return _t(r, {
    onBeforeEnter(se) {
      $r(I, [se]), Dn(se, u), Dn(se, c);
    },
    onBeforeAppear(se) {
      $r(Ve, [se]), Dn(se, p), Dn(se, v);
    },
    onEnter: Ne(!1),
    onAppear: Ne(!0),
    onLeave(se, Te) {
      se._isLeaving = !0;
      const ae = () => xe(se, Te);
      Dn(se, $),
        $h(),
        Dn(se, E),
        id(() => {
          se._isLeaving && (lr(se, $), Dn(se, H), rd(de) || sd(se, o, j, ae));
        }),
        $r(de, [se, ae]);
    },
    onEnterCancelled(se) {
      Pe(se, !1), $r(G, [se]);
    },
    onAppearCancelled(se) {
      Pe(se, !0), $r(Z, [se]);
    },
    onLeaveCancelled(se) {
      xe(se), $r(ge, [se]);
    },
  });
}
function Y4(t) {
  if (t == null) return null;
  if (tt(t)) return [ia(t.enter), ia(t.leave)];
  {
    const r = ia(t);
    return [r, r];
  }
}
function ia(t) {
  return Ea(t);
}
function Dn(t, r) {
  r.split(/\s+/).forEach((i) => i && t.classList.add(i)), (t._vtc || (t._vtc = new Set())).add(r);
}
function lr(t, r) {
  r.split(/\s+/).forEach((o) => o && t.classList.remove(o));
  const { _vtc: i } = t;
  i && (i.delete(r), i.size || (t._vtc = void 0));
}
function id(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let Z4 = 0;
function sd(t, r, i, o) {
  const l = (t._endId = ++Z4),
    u = () => {
      l === t._endId && o();
    };
  if (i) return setTimeout(u, i);
  const { type: c, timeout: d, propCount: p } = Ph(t, r);
  if (!c) return o();
  const v = c + 'end';
  let x = 0;
  const $ = () => {
      t.removeEventListener(v, E), u();
    },
    E = (H) => {
      H.target === t && ++x >= p && $();
    };
  setTimeout(() => {
    x < p && $();
  }, d + 1),
    t.addEventListener(v, E);
}
function Ph(t, r) {
  const i = window.getComputedStyle(t),
    o = (Y) => (i[Y] || '').split(', '),
    l = o(`${or}Delay`),
    u = o(`${or}Duration`),
    c = od(l, u),
    d = o(`${Bi}Delay`),
    p = o(`${Bi}Duration`),
    v = od(d, p);
  let x = null,
    $ = 0,
    E = 0;
  r === or
    ? c > 0 && ((x = or), ($ = c), (E = u.length))
    : r === Bi
    ? v > 0 && ((x = Bi), ($ = v), (E = p.length))
    : (($ = Math.max(c, v)),
      (x = $ > 0 ? (c > v ? or : Bi) : null),
      (E = x ? (x === or ? u.length : p.length) : 0));
  const H = x === or && /\b(transform|all)(,|$)/.test(o(`${or}Property`).toString());
  return { type: x, timeout: $, propCount: E, hasTransform: H };
}
function od(t, r) {
  for (; t.length < r.length; ) t = t.concat(t);
  return Math.max(...r.map((i, o) => ld(i) + ld(t[o])));
}
function ld(t) {
  return Number(t.slice(0, -1).replace(',', '.')) * 1e3;
}
function $h() {
  return document.body.offsetHeight;
}
const Sh = new WeakMap(),
  Ah = new WeakMap(),
  X4 = {
    name: 'TransitionGroup',
    props: _t({}, G4, { tag: String, moveClass: String }),
    setup(t, { slots: r }) {
      const i = Mo(),
        o = th();
      let l, u;
      return (
        Lo(() => {
          if (!l.length) return;
          const c = t.moveClass || `${t.name || 'v'}-move`;
          if (!t3(l[0].el, i.vnode.el, c)) return;
          l.forEach(Q4), l.forEach(j4);
          const d = l.filter(e3);
          $h(),
            d.forEach((p) => {
              const v = p.el,
                x = v.style;
              Dn(v, c), (x.transform = x.webkitTransform = x.transitionDuration = '');
              const $ = (v._moveCb = (E) => {
                (E && E.target !== v) ||
                  ((!E || /transform$/.test(E.propertyName)) &&
                    (v.removeEventListener('transitionend', $), (v._moveCb = null), lr(v, c)));
              });
              v.addEventListener('transitionend', $);
            });
        }),
        () => {
          const c = Ue(t),
            d = Ch(c);
          let p = c.tag || be;
          (l = u), (u = r.default ? Ha(r.default()) : []);
          for (let v = 0; v < u.length; v++) {
            const x = u[v];
            x.key != null && Qi(x, Ji(x, d, o, i));
          }
          if (l)
            for (let v = 0; v < l.length; v++) {
              const x = l[v];
              Qi(x, Ji(x, d, o, i)), Sh.set(x, x.el.getBoundingClientRect());
            }
          return W(p, null, u);
        }
      );
    },
  },
  J4 = X4;
function Q4(t) {
  const r = t.el;
  r._moveCb && r._moveCb(), r._enterCb && r._enterCb();
}
function j4(t) {
  Ah.set(t, t.el.getBoundingClientRect());
}
function e3(t) {
  const r = Sh.get(t),
    i = Ah.get(t),
    o = r.left - i.left,
    l = r.top - i.top;
  if (o || l) {
    const u = t.el.style;
    return (
      (u.transform = u.webkitTransform = `translate(${o}px,${l}px)`),
      (u.transitionDuration = '0s'),
      t
    );
  }
}
function t3(t, r, i) {
  const o = t.cloneNode();
  t._vtc &&
    t._vtc.forEach((c) => {
      c.split(/\s+/).forEach((d) => d && o.classList.remove(d));
    }),
    i.split(/\s+/).forEach((c) => c && o.classList.add(c)),
    (o.style.display = 'none');
  const l = r.nodeType === 1 ? r : r.parentNode;
  l.appendChild(o);
  const { hasTransform: u } = Ph(o);
  return l.removeChild(o), u;
}
const n3 = ['ctrl', 'shift', 'alt', 'meta'],
  r3 = {
    stop: (t) => t.stopPropagation(),
    prevent: (t) => t.preventDefault(),
    self: (t) => t.target !== t.currentTarget,
    ctrl: (t) => !t.ctrlKey,
    shift: (t) => !t.shiftKey,
    alt: (t) => !t.altKey,
    meta: (t) => !t.metaKey,
    left: (t) => 'button' in t && t.button !== 0,
    middle: (t) => 'button' in t && t.button !== 1,
    right: (t) => 'button' in t && t.button !== 2,
    exact: (t, r) => n3.some((i) => t[`${i}Key`] && !r.includes(i)),
  },
  i3 =
    (t, r) =>
    (i, ...o) => {
      for (let l = 0; l < r.length; l++) {
        const u = r3[r[l]];
        if (u && u(i, r)) return;
      }
      return t(i, ...o);
    },
  ad = {
    beforeMount(t, { value: r }, { transition: i }) {
      (t._vod = t.style.display === 'none' ? '' : t.style.display),
        i && r ? i.beforeEnter(t) : Vi(t, r);
    },
    mounted(t, { value: r }, { transition: i }) {
      i && r && i.enter(t);
    },
    updated(t, { value: r, oldValue: i }, { transition: o }) {
      !r != !i &&
        (o
          ? r
            ? (o.beforeEnter(t), Vi(t, !0), o.enter(t))
            : o.leave(t, () => {
                Vi(t, !1);
              })
          : Vi(t, r));
    },
    beforeUnmount(t, { value: r }) {
      Vi(t, r);
    },
  };
function Vi(t, r) {
  t.style.display = r ? t._vod : 'none';
}
const Th = _t({ patchProp: z4 }, L4);
let zi,
  ud = !1;
function s3() {
  return zi || (zi = u4(Th));
}
function o3() {
  return (zi = ud ? zi : c4(Th)), (ud = !0), zi;
}
const l3 = (...t) => {
    const r = s3().createApp(...t),
      { mount: i } = r;
    return (
      (r.mount = (o) => {
        const l = Eh(o);
        if (!l) return;
        const u = r._component;
        !$e(u) && !u.render && !u.template && (u.template = l.innerHTML), (l.innerHTML = '');
        const c = i(l, !1, l instanceof SVGElement);
        return (
          l instanceof Element && (l.removeAttribute('v-cloak'), l.setAttribute('data-v-app', '')),
          c
        );
      }),
      r
    );
  },
  a3 = (...t) => {
    const r = o3().createApp(...t),
      { mount: i } = r;
    return (
      (r.mount = (o) => {
        const l = Eh(o);
        if (l) return i(l, !0, l instanceof SVGElement);
      }),
      r
    );
  };
function Eh(t) {
  return at(t) ? document.querySelector(t) : t;
}
const ie = (t, r) => {
    const i = t.__vccOpts || t;
    for (const [o, l] of r) i[o] = l;
    return i;
  },
  u3 = 'modulepreload',
  c3 = function (t) {
    return '/' + t;
  },
  cd = {},
  Lh = function (r, i, o) {
    if (!i || i.length === 0) return r();
    const l = document.getElementsByTagName('link');
    return Promise.all(
      i.map((u) => {
        if (((u = c3(u)), u in cd)) return;
        cd[u] = !0;
        const c = u.endsWith('.css'),
          d = c ? '[rel="stylesheet"]' : '';
        if (!!o)
          for (let x = l.length - 1; x >= 0; x--) {
            const $ = l[x];
            if ($.href === u && (!c || $.rel === 'stylesheet')) return;
          }
        else if (document.querySelector(`link[href="${u}"]${d}`)) return;
        const v = document.createElement('link');
        if (
          ((v.rel = c ? 'stylesheet' : u3),
          c || ((v.as = 'script'), (v.crossOrigin = '')),
          (v.href = u),
          document.head.appendChild(v),
          c)
        )
          return new Promise((x, $) => {
            v.addEventListener('load', x),
              v.addEventListener('error', () => $(new Error(`Unable to preload CSS for ${u}`)));
          });
      }),
    ).then(() => r());
  };
const f3 = ne({
  __name: 'VPBadge',
  props: { text: null, type: null },
  setup(t) {
    return (r, i) => (
      P(),
      k(
        'span',
        { class: Ke(['VPBadge', t.type ?? 'tip']) },
        [q(r.$slots, 'default', {}, () => [It(Ze(t.text), 1)], !0)],
        2,
      )
    );
  },
});
const d3 = ie(f3, [['__scopeId', 'data-v-d230b511']]),
  h3 = JSON.parse(
    '{"lang":"zh-CN","title":"xs-components-lib","description":"Just playing around.","base":"/","head":[],"appearance":true,"themeConfig":{"logo":"/logo2.png","logoSmall":"/pwa/favicon-32x32.png","algolia":{"appKey":"","indexName":"","searchParameters":{"faeFilters":["tags:guide,api"]}},"nav":[{"text":"首页","link":"/"},{"text":"指南","link":"/guide/getting-started","activeMatch":"/guide/"},{"text":"组件","link":"/components/button","activeMatch":"/components/"},{"text":"GitHub","link":"https://github.com/SuperCuteXiaoSi/xiaosiCommitLib"}],"sidebar":{"/components/":[{"text":"组件","items":[{"text":"Button","link":"/components/button"}]}],"/guide/":[{"text":"入门","collapsible":true,"items":[{"text":"介绍","link":"/guide/introduce"},{"text":"如何使用","link":"/guide/getting-started"}]},{"text":"文档（docs）","collapsible":true,"items":[{"text":"写第一个docs","link":"/guide/docs/add-page"},{"text":"组件示例","link":"/guide/docs/components"}]},{"text":"组件（packages）","collapsible":true,"items":[{"text":"编写组件","link":"/guide/components/writing"}]}]}},"locales":{},"langs":{},"scrollOffset":90,"cleanUrls":"disabled"}',
  ),
  Ro = /^[a-z]+:/i,
  _3 = /^pathname:\/\//,
  fd = 'vitepress-theme-appearance',
  Lt = typeof window < 'u',
  Ih = {
    relativePath: '',
    title: '404',
    description: 'Not Found',
    headers: [],
    frontmatter: { sidebar: !1, layout: 'page' },
    lastUpdated: 0,
  };
function p3(t, r) {
  r.sort((i, o) => {
    const l = o.split('/').length - i.split('/').length;
    return l !== 0 ? l : o.length - i.length;
  });
  for (const i of r) if (t.startsWith(i)) return i;
}
function dd(t, r) {
  const i = p3(r, Object.keys(t));
  return i ? t[i] : void 0;
}
function g3(t) {
  const { locales: r } = t.themeConfig || {},
    i = t.locales;
  return r && i
    ? Object.keys(r).reduce((o, l) => ((o[l] = { label: r[l].label, lang: i[l].lang }), o), {})
    : {};
}
function v3(t, r) {
  r = y3(t, r);
  const i = dd(t.locales || {}, r),
    o = dd(t.themeConfig.locales || {}, r);
  return Object.assign({}, t, i, {
    themeConfig: Object.assign({}, t.themeConfig, o, { locales: {} }),
    lang: (i || t).lang,
    locales: {},
    langs: g3(t),
  });
}
function kh(t, r) {
  const i = r.title || t.title,
    o = r.titleTemplate ?? t.titleTemplate;
  if (typeof o == 'string' && o.includes(':title')) return o.replace(/:title/g, i);
  const l = m3(t.title, o);
  return `${i}${l}`;
}
function m3(t, r) {
  return r === !1 ? '' : r === !0 || r === void 0 ? ` | ${t}` : t === r ? '' : ` | ${r}`;
}
function y3(t, r) {
  if (!Lt) return r;
  const i = t.base,
    o = i.endsWith('/') ? i.slice(0, -1) : i;
  return r.slice(o.length);
}
function b3(t, r) {
  const [i, o] = r;
  if (i !== 'meta') return !1;
  const l = Object.entries(o)[0];
  return l == null ? !1 : t.some(([u, c]) => u === i && c[l[0]] === l[1]);
}
function w3(t, r) {
  return [...t.filter((i) => !b3(r, i)), ...r];
}
const x3 = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g,
  C3 = /^[a-z]:/i;
function hd(t) {
  const r = C3.exec(t),
    i = r ? r[0] : '';
  return (
    i +
    t
      .slice(i.length)
      .replace(x3, '_')
      .replace(/(^|\/)_+(?=[^/]*$)/, '$1')
  );
}
function P3(t, r) {
  return `${t}${r}`.replace(/\/+/g, '/');
}
function ts(t) {
  return Ro.test(t) ? t : P3(hi.value.base, t);
}
function Mh(t) {
  let r = t.replace(/\.html$/, '');
  if (((r = decodeURIComponent(r)), r.endsWith('/') && (r += 'index'), Lt)) {
    const i = '/';
    r = hd(r.slice(i.length).replace(/\//g, '_') || 'index') + '.md';
    const o = __VP_HASH_MAP__[r.toLowerCase()];
    r = `${i}assets/${r}.${o}.js`;
  } else r = `./${hd(r.slice(1).replace(/\//g, '_'))}.md.js`;
  return r;
}
const Oh = Symbol(),
  hi = by(h3);
function $3(t) {
  const r = ke(() => v3(hi.value, t.path));
  return {
    site: r,
    theme: ke(() => r.value.themeConfig),
    page: ke(() => t.data),
    frontmatter: ke(() => t.data.frontmatter),
    lang: ke(() => r.value.lang),
    localePath: ke(() => {
      const { langs: i, lang: o } = r.value,
        l = Object.keys(i).find((u) => i[u].lang === o);
      return ts(l || '/');
    }),
    title: ke(() => kh(r.value, t.data)),
    description: ke(() => t.data.description || r.value.description),
    isDark: Fe(!1),
  };
}
function We() {
  const t = vn(Oh);
  if (!t) throw new Error('vitepress data not properly injected in app');
  return t;
}
const Rh = Symbol(),
  _d = 'http://a.com',
  S3 = () => ({ path: '/', component: null, data: Ih });
function A3(t, r) {
  const i = Co(S3()),
    o = { route: i, go: l };
  async function l(d = Lt ? location.href : '/') {
    var v, x;
    await ((v = o.onBeforeRouteChange) == null ? void 0 : v.call(o, d));
    const p = new URL(d, _d);
    hi.value.cleanUrls === 'disabled' &&
      !p.pathname.endsWith('/') &&
      !p.pathname.endsWith('.html') &&
      ((p.pathname += '.html'), (d = p.pathname + p.search + p.hash)),
      Lt &&
        (history.replaceState({ scrollPosition: window.scrollY }, document.title),
        history.pushState(null, '', d)),
      await c(d),
      await ((x = o.onAfterRouteChanged) == null ? void 0 : x.call(o, d));
  }
  let u = null;
  async function c(d, p = 0, v = !1) {
    const x = new URL(d, _d),
      $ = (u = x.pathname);
    try {
      let E = await t($);
      if (u === $) {
        u = null;
        const { default: H, __pageData: Y } = E;
        if (!H) throw new Error(`Invalid route component: ${H}`);
        (i.path = Lt ? $ : ts($)),
          (i.component = Di(H)),
          (i.data = Di(Y)),
          Lt &&
            Fa(() => {
              if (x.hash && !p) {
                let Q = null;
                try {
                  Q = document.querySelector(decodeURIComponent(x.hash));
                } catch (j) {
                  console.warn(j);
                }
                if (Q) {
                  pd(Q, x.hash);
                  return;
                }
              }
              window.scrollTo(0, p);
            });
      }
    } catch (E) {
      if ((!/fetch/.test(E.message) && !/^\/404(\.html|\/)?$/.test(d) && console.error(E), !v))
        try {
          const H = await fetch(hi.value.base + 'hashmap.json');
          (window.__VP_HASH_MAP__ = await H.json()), await c(d, p, !0);
          return;
        } catch {}
      u === $ &&
        ((u = null), (i.path = Lt ? $ : ts($)), (i.component = r ? Di(r) : null), (i.data = Ih));
    }
  }
  return (
    Lt &&
      (window.addEventListener(
        'click',
        (d) => {
          if (d.target.closest('button')) return;
          const v = d.target.closest('a');
          if (v && !v.closest('.vp-raw') && !v.download) {
            const { href: x, origin: $, pathname: E, hash: H, search: Y, target: Q } = v,
              j = window.location,
              I = E.match(/\.\w+$/);
            !d.ctrlKey &&
              !d.shiftKey &&
              !d.altKey &&
              !d.metaKey &&
              Q !== '_blank' &&
              $ === j.origin &&
              !(I && I[0] !== '.html') &&
              (d.preventDefault(),
              E === j.pathname && Y === j.search
                ? H &&
                  H !== j.hash &&
                  (history.pushState(null, '', H),
                  window.dispatchEvent(new Event('hashchange')),
                  pd(v, H, v.classList.contains('header-anchor')))
                : l(x));
          }
        },
        { capture: !0 },
      ),
      window.addEventListener('popstate', (d) => {
        c(location.href, (d.state && d.state.scrollPosition) || 0);
      }),
      window.addEventListener('hashchange', (d) => {
        d.preventDefault();
      })),
    o
  );
}
function T3() {
  const t = vn(Rh);
  if (!t) throw new Error('useRouter() is called without provider.');
  return t;
}
function _r() {
  return T3().route;
}
function pd(t, r, i = !1) {
  let o = null;
  try {
    o = t.classList.contains('header-anchor') ? t : document.querySelector(decodeURIComponent(r));
  } catch (l) {
    console.warn(l);
  }
  if (o) {
    let l = hi.value.scrollOffset;
    typeof l == 'string' && (l = document.querySelector(l).getBoundingClientRect().bottom + 24);
    const u = parseInt(window.getComputedStyle(o).paddingTop, 10),
      c = window.scrollY + o.getBoundingClientRect().top - l + u;
    !i || Math.abs(c - window.scrollY) > window.innerHeight
      ? window.scrollTo(0, c)
      : window.scrollTo({ left: 0, top: c, behavior: 'smooth' });
  }
}
const E3 = ne({
    name: 'VitePressContent',
    props: { onContentUpdated: Function },
    setup(t) {
      const r = _r();
      return (
        Lo(() => {
          var i;
          (i = t.onContentUpdated) == null || i.call(t);
        }),
        () => es('div', { style: { position: 'relative' } }, [r.component ? es(r.component) : null])
      );
    },
  }),
  Bh = /#.*$/,
  L3 = /(index)?\.(md|html)$/,
  I3 = typeof window < 'u',
  k3 = Fe(I3 ? location.hash : '');
function M3(t) {
  return Ro.test(t);
}
function O3(t, r) {
  let i,
    o = !1;
  return () => {
    i && clearTimeout(i),
      o
        ? (i = setTimeout(t, r))
        : (t(),
          (o = !0),
          setTimeout(() => {
            o = !1;
          }, r));
  };
}
function mi(t, r, i = !1) {
  if (r === void 0) return !1;
  if (((t = vd(`/${t}`)), i)) return new RegExp(r).test(t);
  if (vd(r) !== t) return !1;
  const o = r.match(Bh);
  return o ? k3.value === o[0] : !0;
}
function gd(t) {
  return /^\//.test(t) ? t : `/${t}`;
}
function vd(t) {
  return decodeURI(t).replace(Bh, '').replace(L3, '');
}
function _o(t) {
  if (M3(t)) return t.replace(_3, '');
  const { site: r } = We(),
    { pathname: i, search: o, hash: l } = new URL(t, 'http://example.com'),
    u =
      i.endsWith('/') || i.endsWith('.html')
        ? t
        : `${i.replace(/(\.md)?$/, r.value.cleanUrls === 'disabled' ? '.html' : '')}${o}${l}`;
  return ts(u);
}
function Vh(t, r) {
  if (Array.isArray(t)) return t;
  if (t == null) return [];
  r = gd(r);
  const i = Object.keys(t)
    .sort((o, l) => l.split('/').length - o.split('/').length)
    .find((o) => r.startsWith(gd(o)));
  return i ? t[i] : [];
}
function R3(t) {
  const r = [];
  function i(o) {
    for (const l of o) l.link && r.push({ ...l, link: l.link }), 'items' in l && i(l.items);
  }
  for (const o of t) i(o.items);
  return r;
}
function Tn() {
  const t = _r(),
    { theme: r, frontmatter: i } = We(),
    o = Fe(!1),
    l = ke(() => {
      const x = r.value.sidebar,
        $ = t.data.relativePath;
      return x ? Vh(x, $) : [];
    }),
    u = ke(() => i.value.sidebar !== !1 && l.value.length > 0 && i.value.layout !== 'home'),
    c = ke(() => i.value.layout !== 'home' && i.value.aside !== !1);
  function d() {
    o.value = !0;
  }
  function p() {
    o.value = !1;
  }
  function v() {
    o.value ? p() : d();
  }
  return { isOpen: o, sidebar: l, hasSidebar: u, hasAside: c, open: d, close: p, toggle: v };
}
function B3(t, r) {
  let i;
  ui(() => {
    i = t.value ? document.activeElement : void 0;
  }),
    an(() => {
      window.addEventListener('keyup', o);
    }),
    hr(() => {
      window.removeEventListener('keyup', o);
    });
  function o(l) {
    l.key === 'Escape' && t.value && (r(), i == null || i.focus());
  }
}
const V3 = ne({
  __name: 'VPSkipLink',
  setup(t) {
    const r = _r(),
      i = Fe();
    mn(
      () => r.path,
      () => i.value.focus(),
    );
    function o({ target: l }) {
      const u = document.querySelector(l.hash);
      if (u) {
        const c = () => {
          u.removeAttribute('tabindex'), u.removeEventListener('blur', c);
        };
        u.setAttribute('tabindex', '-1'),
          u.addEventListener('blur', c),
          u.focus(),
          window.scrollTo(0, 0);
      }
    }
    return (l, u) => (
      P(),
      k(
        be,
        null,
        [
          M('span', { ref_key: 'backToTop', ref: i, tabindex: '-1' }, null, 512),
          M(
            'a',
            { href: '#VPContent', class: 'VPSkipLink visually-hidden', onClick: o },
            ' Skip to content ',
          ),
        ],
        64,
      )
    );
  },
});
const N3 = ie(V3, [['__scopeId', 'data-v-19a00f3c']]),
  F3 = { key: 0, class: 'VPBackdrop' },
  H3 = ne({
    __name: 'VPBackdrop',
    props: { show: { type: Boolean } },
    setup(t) {
      return (r, i) => (
        P(),
        ve(
          vi,
          { name: 'fade' },
          { default: ee(() => [t.show ? (P(), k('div', F3)) : ce('', !0)]), _: 1 },
        )
      );
    },
  });
const D3 = ie(H3, [['__scopeId', 'data-v-735e25cc']]);
function U3() {
  const t = Fe(!1);
  function r() {
    (t.value = !0), window.addEventListener('resize', l);
  }
  function i() {
    (t.value = !1), window.removeEventListener('resize', l);
  }
  function o() {
    t.value ? i() : r();
  }
  function l() {
    window.outerWidth >= 768 && i();
  }
  const u = _r();
  return mn(() => u.path, i), { isScreenOpen: t, openScreen: r, closeScreen: i, toggleScreen: o };
}
const W3 = ['src', 'alt'],
  z3 = { inheritAttrs: !1 },
  K3 = ne({
    ...z3,
    __name: 'VPImage',
    props: { image: null, alt: null },
    setup(t) {
      return (r, i) => {
        const o = Kn('VPImage', !0);
        return t.image
          ? (P(),
            k(
              be,
              { key: 0 },
              [
                typeof t.image == 'string' || 'src' in t.image
                  ? (P(),
                    k(
                      'img',
                      si(
                        { key: 0, class: 'VPImage' },
                        typeof t.image == 'string' ? r.$attrs : { ...t.image, ...r.$attrs },
                        {
                          src: T(ts)(typeof t.image == 'string' ? t.image : t.image.src),
                          alt: t.alt ?? (typeof t.image == 'string' ? '' : t.image.alt || ''),
                        },
                      ),
                      null,
                      16,
                      W3,
                    ))
                  : (P(),
                    k(
                      be,
                      { key: 1 },
                      [
                        W(
                          o,
                          si(
                            {
                              class: 'dark',
                              image: t.image.dark,
                              alt:
                                typeof t.image.dark == 'string'
                                  ? t.image.alt
                                  : t.image.dark.alt || t.image.alt,
                            },
                            r.$attrs,
                          ),
                          null,
                          16,
                          ['image', 'alt'],
                        ),
                        W(
                          o,
                          si(
                            {
                              class: 'light',
                              image: t.image.light,
                              alt:
                                typeof t.image.light == 'string'
                                  ? t.image.alt
                                  : t.image.light.alt || t.image.alt,
                            },
                            r.$attrs,
                          ),
                          null,
                          16,
                          ['image', 'alt'],
                        ),
                      ],
                      64,
                    )),
              ],
              64,
            ))
          : ce('', !0);
      };
    },
  });
const Nh = ie(K3, [['__scopeId', 'data-v-27be782a']]),
  q3 = ['href'],
  G3 = ne({
    __name: 'VPNavBarTitle',
    setup(t) {
      const { site: r, theme: i } = We(),
        { hasSidebar: o } = Tn();
      return (l, u) => (
        P(),
        k(
          'div',
          { class: Ke(['VPNavBarTitle', { 'has-sidebar': T(o) }]) },
          [
            M(
              'a',
              { class: 'title', href: T(r).base },
              [
                q(l.$slots, 'nav-bar-title-before', {}, void 0, !0),
                W(Nh, { class: 'logo', image: T(i).logo }, null, 8, ['image']),
                T(i).siteTitle
                  ? (P(), k(be, { key: 0 }, [It(Ze(T(i).siteTitle), 1)], 64))
                  : T(i).siteTitle === void 0
                  ? (P(), k(be, { key: 1 }, [It(Ze(T(r).title), 1)], 64))
                  : ce('', !0),
                q(l.$slots, 'nav-bar-title-after', {}, void 0, !0),
              ],
              8,
              q3,
            ),
          ],
          2,
        )
      );
    },
  });
const Y3 = ie(G3, [['__scopeId', 'data-v-60d74ef4']]);
const Z3 = { key: 0, class: 'VPNavBarSearch' },
  X3 = { type: 'button', class: 'DocSearch DocSearch-Button', 'aria-label': 'Search' },
  J3 = { class: 'DocSearch-Button-Container' },
  Q3 = M(
    'svg',
    { class: 'DocSearch-Search-Icon', width: '20', height: '20', viewBox: '0 0 20 20' },
    [
      M('path', {
        d: 'M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z',
        stroke: 'currentColor',
        fill: 'none',
        'fill-rule': 'evenodd',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
      }),
    ],
    -1,
  ),
  j3 = { class: 'DocSearch-Button-Placeholder' },
  eb = M(
    'span',
    { class: 'DocSearch-Button-Keys' },
    [M('kbd', { class: 'DocSearch-Button-Key' }), M('kbd', { class: 'DocSearch-Button-Key' }, 'K')],
    -1,
  ),
  tb = ne({
    __name: 'VPNavBarSearch',
    setup(t) {
      q4((c) => ({ '270b352f': l.value }));
      const r = Ny(() => Lh(() => import('./chunks/VPAlgoliaSearchBox.9c42657a.js'), [])),
        { theme: i } = We(),
        o = Fe(!1),
        l = Fe("'Meta'");
      an(() => {
        if (!i.value.algolia) return;
        l.value = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "'⌘'" : "'Ctrl'";
        const c = (p) => {
            p.key === 'k' && (p.ctrlKey || p.metaKey) && (p.preventDefault(), u(), d());
          },
          d = () => {
            window.removeEventListener('keydown', c);
          };
        window.addEventListener('keydown', c), hr(d);
      });
      function u() {
        o.value || (o.value = !0);
      }
      return (c, d) => {
        var p;
        return T(i).algolia
          ? (P(),
            k('div', Z3, [
              o.value
                ? (P(), ve(T(r), { key: 0 }))
                : (P(),
                  k('div', { key: 1, id: 'docsearch', onClick: u }, [
                    M('button', X3, [
                      M('span', J3, [
                        Q3,
                        M(
                          'span',
                          j3,
                          Ze(((p = T(i).algolia) == null ? void 0 : p.buttonText) || 'Search'),
                          1,
                        ),
                      ]),
                      eb,
                    ]),
                  ])),
            ]))
          : ce('', !0);
      };
    },
  });
const nb = {},
  rb = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    height: '24px',
    viewBox: '0 0 24 24',
    width: '24px',
  },
  ib = M('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }, null, -1),
  sb = M('path', { d: 'M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z' }, null, -1),
  ob = [ib, sb];
function lb(t, r) {
  return P(), k('svg', rb, ob);
}
const ab = ie(nb, [['render', lb]]),
  ub = ne({
    __name: 'VPLink',
    props: { href: null, noIcon: { type: Boolean } },
    setup(t) {
      const r = t,
        i = ke(() => r.href && Ro.test(r.href));
      return (o, l) => (
        P(),
        ve(
          Io(t.href ? 'a' : 'span'),
          {
            class: Ke(['VPLink', { link: t.href }]),
            href: t.href ? T(_o)(t.href) : void 0,
            target: T(i) ? '_blank' : void 0,
            rel: T(i) ? 'noreferrer' : void 0,
          },
          {
            default: ee(() => [
              q(o.$slots, 'default', {}, void 0, !0),
              T(i) && !t.noIcon ? (P(), ve(ab, { key: 0, class: 'icon' })) : ce('', !0),
            ]),
            _: 3,
          },
          8,
          ['class', 'href', 'target', 'rel'],
        )
      );
    },
  });
const Or = ie(ub, [['__scopeId', 'data-v-bf6d4382']]),
  cb = ne({
    __name: 'VPNavBarMenuLink',
    props: { item: null },
    setup(t) {
      const { page: r } = We();
      return (i, o) => (
        P(),
        ve(
          Or,
          {
            class: Ke({
              VPNavBarMenuLink: !0,
              active: T(mi)(
                T(r).relativePath,
                t.item.activeMatch || t.item.link,
                !!t.item.activeMatch,
              ),
            }),
            href: t.item.link,
            noIcon: !0,
          },
          { default: ee(() => [It(Ze(t.item.text), 1)]), _: 1 },
          8,
          ['class', 'href'],
        )
      );
    },
  });
const fb = ie(cb, [['__scopeId', 'data-v-230f9108']]),
  Ka = Fe();
let Fh = !1,
  sa = 0;
function db(t) {
  const r = Fe(!1);
  if (typeof window < 'u') {
    !Fh && hb(), sa++;
    const i = mn(Ka, (o) => {
      var l, u, c;
      o === t.el.value || ((l = t.el.value) != null && l.contains(o))
        ? ((r.value = !0), (u = t.onFocus) == null || u.call(t))
        : ((r.value = !1), (c = t.onBlur) == null || c.call(t));
    });
    hr(() => {
      i(), sa--, sa || _b();
    });
  }
  return Ra(r);
}
function hb() {
  document.addEventListener('focusin', Hh), (Fh = !0), (Ka.value = document.activeElement);
}
function _b() {
  document.removeEventListener('focusin', Hh);
}
function Hh() {
  Ka.value = document.activeElement;
}
const pb = {},
  gb = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  vb = M(
    'path',
    {
      d: 'M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z',
    },
    null,
    -1,
  ),
  mb = [vb];
function yb(t, r) {
  return P(), k('svg', gb, mb);
}
const Dh = ie(pb, [['render', yb]]),
  bb = {},
  wb = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  xb = M('circle', { cx: '12', cy: '12', r: '2' }, null, -1),
  Cb = M('circle', { cx: '19', cy: '12', r: '2' }, null, -1),
  Pb = M('circle', { cx: '5', cy: '12', r: '2' }, null, -1),
  $b = [xb, Cb, Pb];
function Sb(t, r) {
  return P(), k('svg', wb, $b);
}
const Ab = ie(bb, [['render', Sb]]),
  Tb = { class: 'VPMenuLink' },
  Eb = ne({
    __name: 'VPMenuLink',
    props: { item: null },
    setup(t) {
      const { page: r } = We();
      return (i, o) => (
        P(),
        k('div', Tb, [
          W(
            Or,
            {
              class: Ke({ active: T(mi)(T(r).relativePath, t.item.activeMatch || t.item.link) }),
              href: t.item.link,
            },
            { default: ee(() => [It(Ze(t.item.text), 1)]), _: 1 },
            8,
            ['class', 'href'],
          ),
        ])
      );
    },
  });
const Bo = ie(Eb, [['__scopeId', 'data-v-87c3fd31']]),
  Lb = { class: 'VPMenuGroup' },
  Ib = { key: 0, class: 'title' },
  kb = ne({
    __name: 'VPMenuGroup',
    props: { text: null, items: null },
    setup(t) {
      return (r, i) => (
        P(),
        k('div', Lb, [
          t.text ? (P(), k('p', Ib, Ze(t.text), 1)) : ce('', !0),
          (P(!0),
          k(
            be,
            null,
            yt(
              t.items,
              (o) => (
                P(),
                k(
                  be,
                  null,
                  [
                    'link' in o
                      ? (P(), ve(Bo, { key: 0, item: o }, null, 8, ['item']))
                      : ce('', !0),
                  ],
                  64,
                )
              ),
            ),
            256,
          )),
        ])
      );
    },
  });
const Mb = ie(kb, [['__scopeId', 'data-v-a19b9382']]),
  Ob = { class: 'VPMenu' },
  Rb = { key: 0, class: 'items' },
  Bb = ne({
    __name: 'VPMenu',
    props: { items: null },
    setup(t) {
      return (r, i) => (
        P(),
        k('div', Ob, [
          t.items
            ? (P(),
              k('div', Rb, [
                (P(!0),
                k(
                  be,
                  null,
                  yt(
                    t.items,
                    (o) => (
                      P(),
                      k(
                        be,
                        { key: o.text },
                        [
                          'link' in o
                            ? (P(), ve(Bo, { key: 0, item: o }, null, 8, ['item']))
                            : (P(),
                              ve(Mb, { key: 1, text: o.text, items: o.items }, null, 8, [
                                'text',
                                'items',
                              ])),
                        ],
                        64,
                      )
                    ),
                  ),
                  128,
                )),
              ]))
            : ce('', !0),
          q(r.$slots, 'default', {}, void 0, !0),
        ])
      );
    },
  });
const Vb = ie(Bb, [['__scopeId', 'data-v-79123c45']]),
  Nb = ['aria-expanded', 'aria-label'],
  Fb = { key: 0, class: 'text' },
  Hb = { class: 'menu' },
  Db = ne({
    __name: 'VPFlyout',
    props: { icon: null, button: null, label: null, items: null },
    setup(t) {
      const r = Fe(!1),
        i = Fe();
      db({ el: i, onBlur: o });
      function o() {
        r.value = !1;
      }
      return (l, u) => (
        P(),
        k(
          'div',
          {
            class: 'VPFlyout',
            ref_key: 'el',
            ref: i,
            onMouseenter: u[1] || (u[1] = (c) => (r.value = !0)),
            onMouseleave: u[2] || (u[2] = (c) => (r.value = !1)),
          },
          [
            M(
              'button',
              {
                type: 'button',
                class: 'button',
                'aria-haspopup': 'true',
                'aria-expanded': r.value,
                'aria-label': t.label,
                onClick: u[0] || (u[0] = (c) => (r.value = !r.value)),
              },
              [
                t.button || t.icon
                  ? (P(),
                    k('span', Fb, [
                      t.icon ? (P(), ve(Io(t.icon), { key: 0, class: 'option-icon' })) : ce('', !0),
                      It(' ' + Ze(t.button) + ' ', 1),
                      W(Dh, { class: 'text-icon' }),
                    ]))
                  : (P(), ve(Ab, { key: 1, class: 'icon' })),
              ],
              8,
              Nb,
            ),
            M('div', Hb, [
              W(
                Vb,
                { items: t.items },
                { default: ee(() => [q(l.$slots, 'default', {}, void 0, !0)]), _: 3 },
                8,
                ['items'],
              ),
            ]),
          ],
          544,
        )
      );
    },
  });
const qa = ie(Db, [['__scopeId', 'data-v-97fd8b98']]),
  Ub = ne({
    __name: 'VPNavBarMenuGroup',
    props: { item: null },
    setup(t) {
      const { page: r } = We();
      return (i, o) => (
        P(),
        ve(
          qa,
          {
            class: Ke({
              VPNavBarMenuGroup: !0,
              active: T(mi)(T(r).relativePath, t.item.activeMatch, !!t.item.activeMatch),
            }),
            button: t.item.text,
            items: t.item.items,
          },
          null,
          8,
          ['class', 'button', 'items'],
        )
      );
    },
  }),
  Wb = (t) => (yn('data-v-ddeb1f26'), (t = t()), bn(), t),
  zb = { key: 0, 'aria-labelledby': 'main-nav-aria-label', class: 'VPNavBarMenu' },
  Kb = Wb(() =>
    M('span', { id: 'main-nav-aria-label', class: 'visually-hidden' }, 'Main Navigation', -1),
  ),
  qb = ne({
    __name: 'VPNavBarMenu',
    setup(t) {
      const { theme: r } = We();
      return (i, o) =>
        T(r).nav
          ? (P(),
            k('nav', zb, [
              Kb,
              (P(!0),
              k(
                be,
                null,
                yt(
                  T(r).nav,
                  (l) => (
                    P(),
                    k(
                      be,
                      { key: l.text },
                      [
                        'link' in l
                          ? (P(), ve(fb, { key: 0, item: l }, null, 8, ['item']))
                          : (P(), ve(Ub, { key: 1, item: l }, null, 8, ['item'])),
                      ],
                      64,
                    )
                  ),
                ),
                128,
              )),
            ]))
          : ce('', !0);
    },
  });
const Gb = ie(qb, [['__scopeId', 'data-v-ddeb1f26']]),
  Yb = {},
  Zb = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  Xb = M('path', { d: 'M0 0h24v24H0z', fill: 'none' }, null, -1),
  Jb = M(
    'path',
    {
      d: ' M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ',
      class: 'css-c4d79v',
    },
    null,
    -1,
  ),
  Qb = [Xb, Jb];
function jb(t, r) {
  return P(), k('svg', Zb, Qb);
}
const Uh = ie(Yb, [['render', jb]]),
  ew = { class: 'items' },
  tw = { class: 'title' },
  nw = ne({
    __name: 'VPNavBarTranslations',
    setup(t) {
      const { theme: r } = We();
      return (i, o) =>
        T(r).localeLinks
          ? (P(),
            ve(
              qa,
              { key: 0, class: 'VPNavBarTranslations', icon: Uh },
              {
                default: ee(() => [
                  M('div', ew, [
                    M('p', tw, Ze(T(r).localeLinks.text), 1),
                    (P(!0),
                    k(
                      be,
                      null,
                      yt(
                        T(r).localeLinks.items,
                        (l) => (P(), ve(Bo, { key: l.link, item: l }, null, 8, ['item'])),
                      ),
                      128,
                    )),
                  ]),
                ]),
                _: 1,
              },
            ))
          : ce('', !0);
    },
  });
const rw = ie(nw, [['__scopeId', 'data-v-c7f840ab']]);
const iw = {},
  sw = { class: 'VPSwitch', type: 'button', role: 'switch' },
  ow = { class: 'check' },
  lw = { key: 0, class: 'icon' };
function aw(t, r) {
  return (
    P(),
    k('button', sw, [
      M('span', ow, [
        t.$slots.default
          ? (P(), k('span', lw, [q(t.$slots, 'default', {}, void 0, !0)]))
          : ce('', !0),
      ]),
    ])
  );
}
const uw = ie(iw, [
    ['render', aw],
    ['__scopeId', 'data-v-a71afa9e'],
  ]),
  cw = {},
  fw = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  dw = g4(
    '<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',
    9,
  ),
  hw = [dw];
function _w(t, r) {
  return P(), k('svg', fw, hw);
}
const pw = ie(cw, [['render', _w]]),
  gw = {},
  vw = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  mw = M(
    'path',
    {
      d: 'M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z',
    },
    null,
    -1,
  ),
  yw = [mw];
function bw(t, r) {
  return P(), k('svg', vw, yw);
}
const ww = ie(gw, [['render', bw]]),
  xw = ne({
    __name: 'VPSwitchAppearance',
    setup(t) {
      const { site: r, isDark: i } = We(),
        o = Fe(!1),
        l = typeof localStorage < 'u' ? u() : () => {};
      an(() => {
        o.value = document.documentElement.classList.contains('dark');
      });
      function u() {
        const c = window.matchMedia('(prefers-color-scheme: dark)'),
          d = document.documentElement.classList;
        let p = localStorage.getItem(fd),
          v =
            (r.value.appearance === 'dark' && p == null) ||
            (p === 'auto' || p == null ? c.matches : p === 'dark');
        c.onchange = (E) => {
          p === 'auto' && $((v = E.matches));
        };
        function x() {
          $((v = !v)),
            (p = v ? (c.matches ? 'auto' : 'dark') : c.matches ? 'light' : 'auto'),
            localStorage.setItem(fd, p);
        }
        function $(E) {
          const H = document.createElement('style');
          (H.type = 'text/css'),
            H.appendChild(
              document.createTextNode(`:not(.VPSwitchAppearance):not(.VPSwitchAppearance *) {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -o-transition: none !important;
  -ms-transition: none !important;
  transition: none !important;
}`),
            ),
            document.head.appendChild(H),
            (o.value = E),
            d[E ? 'add' : 'remove']('dark'),
            window.getComputedStyle(H).opacity,
            document.head.removeChild(H);
        }
        return x;
      }
      return (
        mn(o, (c) => {
          i.value = c;
        }),
        (c, d) => (
          P(),
          ve(
            uw,
            {
              class: 'VPSwitchAppearance',
              'aria-label': 'toggle dark mode',
              'aria-checked': o.value,
              onClick: T(l),
            },
            { default: ee(() => [W(pw, { class: 'sun' }), W(ww, { class: 'moon' })]), _: 1 },
            8,
            ['aria-checked', 'onClick'],
          )
        )
      );
    },
  });
const Ga = ie(xw, [['__scopeId', 'data-v-9312fe85']]),
  Cw = { key: 0, class: 'VPNavBarAppearance' },
  Pw = ne({
    __name: 'VPNavBarAppearance',
    setup(t) {
      const { site: r } = We();
      return (i, o) => (T(r).appearance ? (P(), k('div', Cw, [W(Ga)])) : ce('', !0));
    },
  });
const $w = ie(Pw, [['__scopeId', 'data-v-ae9a97bb']]),
  Sw = {
    discord:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
    facebook:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
    github:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
    instagram:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',
    linkedin:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    slack:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',
    twitter:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>',
    youtube:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
  },
  Aw = ['href', 'innerHTML'],
  Tw = ne({
    __name: 'VPSocialLink',
    props: { icon: null, link: null },
    setup(t) {
      const r = t,
        i = ke(() => (typeof r.icon == 'object' ? r.icon.svg : Sw[r.icon]));
      return (o, l) => (
        P(),
        k(
          'a',
          {
            class: 'VPSocialLink',
            href: t.link,
            target: '_blank',
            rel: 'noopener',
            innerHTML: T(i),
          },
          null,
          8,
          Aw,
        )
      );
    },
  });
const Ew = ie(Tw, [['__scopeId', 'data-v-a99e5443']]),
  Lw = { class: 'VPSocialLinks' },
  Iw = ne({
    __name: 'VPSocialLinks',
    props: { links: null },
    setup(t) {
      return (r, i) => (
        P(),
        k('div', Lw, [
          (P(!0),
          k(
            be,
            null,
            yt(
              t.links,
              ({ link: o, icon: l }) => (
                P(), ve(Ew, { key: o, icon: l, link: o }, null, 8, ['icon', 'link'])
              ),
            ),
            128,
          )),
        ])
      );
    },
  });
const Ya = ie(Iw, [['__scopeId', 'data-v-2c4090e8']]),
  kw = ne({
    __name: 'VPNavBarSocialLinks',
    setup(t) {
      const { theme: r } = We();
      return (i, o) =>
        T(r).socialLinks
          ? (P(),
            ve(Ya, { key: 0, class: 'VPNavBarSocialLinks', links: T(r).socialLinks }, null, 8, [
              'links',
            ]))
          : ce('', !0);
    },
  });
const Mw = ie(kw, [['__scopeId', 'data-v-446c2ad9']]),
  Ow = (t) => (yn('data-v-f14df81d'), (t = t()), bn(), t),
  Rw = { key: 0, class: 'group' },
  Bw = { class: 'trans-title' },
  Vw = { key: 1, class: 'group' },
  Nw = { class: 'item appearance' },
  Fw = Ow(() => M('p', { class: 'label' }, 'Appearance', -1)),
  Hw = { class: 'appearance-action' },
  Dw = { key: 2, class: 'group' },
  Uw = { class: 'item social-links' },
  Ww = ne({
    __name: 'VPNavBarExtra',
    setup(t) {
      const { site: r, theme: i } = We(),
        o = ke(() => i.value.localeLinks || r.value.appearance || i.value.socialLinks);
      return (l, u) =>
        T(o)
          ? (P(),
            ve(
              qa,
              { key: 0, class: 'VPNavBarExtra', label: 'extra navigation' },
              {
                default: ee(() => [
                  T(i).localeLinks
                    ? (P(),
                      k('div', Rw, [
                        M('p', Bw, Ze(T(i).localeLinks.text), 1),
                        (P(!0),
                        k(
                          be,
                          null,
                          yt(
                            T(i).localeLinks.items,
                            (c) => (P(), ve(Bo, { key: c.link, item: c }, null, 8, ['item'])),
                          ),
                          128,
                        )),
                      ]))
                    : ce('', !0),
                  T(r).appearance
                    ? (P(), k('div', Vw, [M('div', Nw, [Fw, M('div', Hw, [W(Ga)])])]))
                    : ce('', !0),
                  T(i).socialLinks
                    ? (P(),
                      k('div', Dw, [
                        M('div', Uw, [
                          W(Ya, { class: 'social-links-list', links: T(i).socialLinks }, null, 8, [
                            'links',
                          ]),
                        ]),
                      ]))
                    : ce('', !0),
                ]),
                _: 1,
              },
            ))
          : ce('', !0);
    },
  });
const zw = ie(Ww, [['__scopeId', 'data-v-f14df81d']]),
  Kw = (t) => (yn('data-v-b5a83624'), (t = t()), bn(), t),
  qw = ['aria-expanded'],
  Gw = Kw(() =>
    M(
      'span',
      { class: 'container' },
      [M('span', { class: 'top' }), M('span', { class: 'middle' }), M('span', { class: 'bottom' })],
      -1,
    ),
  ),
  Yw = [Gw],
  Zw = ne({
    __name: 'VPNavBarHamburger',
    props: { active: { type: Boolean } },
    emits: ['click'],
    setup(t) {
      return (r, i) => (
        P(),
        k(
          'button',
          {
            type: 'button',
            class: Ke(['VPNavBarHamburger', { active: t.active }]),
            'aria-label': 'mobile navigation',
            'aria-expanded': t.active,
            'aria-controls': 'VPNavScreen',
            onClick: i[0] || (i[0] = (o) => r.$emit('click')),
          },
          Yw,
          10,
          qw,
        )
      );
    },
  });
const Xw = ie(Zw, [['__scopeId', 'data-v-b5a83624']]),
  Jw = { class: 'container' },
  Qw = { class: 'content' },
  jw = ne({
    __name: 'VPNavBar',
    props: { isScreenOpen: { type: Boolean } },
    emits: ['toggle-screen'],
    setup(t) {
      const { hasSidebar: r } = Tn();
      return (i, o) => (
        P(),
        k(
          'div',
          { class: Ke(['VPNavBar', { 'has-sidebar': T(r) }]) },
          [
            M('div', Jw, [
              W(Y3, null, {
                'nav-bar-title-before': ee(() => [
                  q(i.$slots, 'nav-bar-title-before', {}, void 0, !0),
                ]),
                'nav-bar-title-after': ee(() => [
                  q(i.$slots, 'nav-bar-title-after', {}, void 0, !0),
                ]),
                _: 3,
              }),
              M('div', Qw, [
                q(i.$slots, 'nav-bar-content-before', {}, void 0, !0),
                W(tb, { class: 'search' }),
                W(Gb, { class: 'menu' }),
                W(rw, { class: 'translations' }),
                W($w, { class: 'appearance' }),
                W(Mw, { class: 'social-links' }),
                W(zw, { class: 'extra' }),
                q(i.$slots, 'nav-bar-content-after', {}, void 0, !0),
                W(
                  Xw,
                  {
                    class: 'hamburger',
                    active: t.isScreenOpen,
                    onClick: o[0] || (o[0] = (l) => i.$emit('toggle-screen')),
                  },
                  null,
                  8,
                  ['active'],
                ),
              ]),
            ]),
          ],
          2,
        )
      );
    },
  });
const ex = ie(jw, [['__scopeId', 'data-v-57336f2d']]);
function tx(t) {
  if (Array.isArray(t)) {
    for (var r = 0, i = Array(t.length); r < t.length; r++) i[r] = t[r];
    return i;
  } else return Array.from(t);
}
var Za = !1;
if (typeof window < 'u') {
  var md = {
    get passive() {
      Za = !0;
    },
  };
  window.addEventListener('testPassive', null, md),
    window.removeEventListener('testPassive', null, md);
}
var po =
    typeof window < 'u' &&
    window.navigator &&
    window.navigator.platform &&
    (/iP(ad|hone|od)/.test(window.navigator.platform) ||
      (window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1)),
  oi = [],
  go = !1,
  Xa = -1,
  Ki = void 0,
  Lr = void 0,
  qi = void 0,
  Wh = function (r) {
    return oi.some(function (i) {
      return !!(i.options.allowTouchMove && i.options.allowTouchMove(r));
    });
  },
  vo = function (r) {
    var i = r || window.event;
    return Wh(i.target) || i.touches.length > 1 ? !0 : (i.preventDefault && i.preventDefault(), !1);
  },
  nx = function (r) {
    if (qi === void 0) {
      var i = !!r && r.reserveScrollBarGap === !0,
        o = window.innerWidth - document.documentElement.clientWidth;
      if (i && o > 0) {
        var l = parseInt(
          window.getComputedStyle(document.body).getPropertyValue('padding-right'),
          10,
        );
        (qi = document.body.style.paddingRight), (document.body.style.paddingRight = l + o + 'px');
      }
    }
    Ki === void 0 &&
      ((Ki = document.body.style.overflow), (document.body.style.overflow = 'hidden'));
  },
  rx = function () {
    qi !== void 0 && ((document.body.style.paddingRight = qi), (qi = void 0)),
      Ki !== void 0 && ((document.body.style.overflow = Ki), (Ki = void 0));
  },
  ix = function () {
    return window.requestAnimationFrame(function () {
      if (Lr === void 0) {
        Lr = {
          position: document.body.style.position,
          top: document.body.style.top,
          left: document.body.style.left,
        };
        var r = window,
          i = r.scrollY,
          o = r.scrollX,
          l = r.innerHeight;
        (document.body.style.position = 'fixed'),
          (document.body.style.top = -i),
          (document.body.style.left = -o),
          setTimeout(function () {
            return window.requestAnimationFrame(function () {
              var u = l - window.innerHeight;
              u && i >= l && (document.body.style.top = -(i + u));
            });
          }, 300);
      }
    });
  },
  sx = function () {
    if (Lr !== void 0) {
      var r = -parseInt(document.body.style.top, 10),
        i = -parseInt(document.body.style.left, 10);
      (document.body.style.position = Lr.position),
        (document.body.style.top = Lr.top),
        (document.body.style.left = Lr.left),
        window.scrollTo(i, r),
        (Lr = void 0);
    }
  },
  ox = function (r) {
    return r ? r.scrollHeight - r.scrollTop <= r.clientHeight : !1;
  },
  lx = function (r, i) {
    var o = r.targetTouches[0].clientY - Xa;
    return Wh(r.target)
      ? !1
      : (i && i.scrollTop === 0 && o > 0) || (ox(i) && o < 0)
      ? vo(r)
      : (r.stopPropagation(), !0);
  },
  zh = function (r, i) {
    if (!r) {
      console.error(
        'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.',
      );
      return;
    }
    if (
      !oi.some(function (l) {
        return l.targetElement === r;
      })
    ) {
      var o = { targetElement: r, options: i || {} };
      (oi = [].concat(tx(oi), [o])),
        po ? ix() : nx(i),
        po &&
          ((r.ontouchstart = function (l) {
            l.targetTouches.length === 1 && (Xa = l.targetTouches[0].clientY);
          }),
          (r.ontouchmove = function (l) {
            l.targetTouches.length === 1 && lx(l, r);
          }),
          go ||
            (document.addEventListener('touchmove', vo, Za ? { passive: !1 } : void 0), (go = !0)));
    }
  },
  Kh = function () {
    po &&
      (oi.forEach(function (r) {
        (r.targetElement.ontouchstart = null), (r.targetElement.ontouchmove = null);
      }),
      go &&
        (document.removeEventListener('touchmove', vo, Za ? { passive: !1 } : void 0), (go = !1)),
      (Xa = -1)),
      po ? sx() : rx(),
      (oi = []);
  };
const ax = ne({
  __name: 'VPNavScreenMenuLink',
  props: { text: null, link: null },
  setup(t) {
    const r = vn('close-screen');
    return (i, o) => (
      P(),
      ve(
        Or,
        { class: 'VPNavScreenMenuLink', href: t.link, onClick: T(r) },
        { default: ee(() => [It(Ze(t.text), 1)]), _: 1 },
        8,
        ['href', 'onClick'],
      )
    );
  },
});
const ux = ie(ax, [['__scopeId', 'data-v-93e93a96']]),
  cx = {},
  fx = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  dx = M(
    'path',
    {
      d: 'M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z',
    },
    null,
    -1,
  ),
  hx = [dx];
function _x(t, r) {
  return P(), k('svg', fx, hx);
}
const px = ie(cx, [['render', _x]]),
  gx = ne({
    __name: 'VPNavScreenMenuGroupLink',
    props: { text: null, link: null },
    setup(t) {
      const r = vn('close-screen');
      return (i, o) => (
        P(),
        ve(
          Or,
          { class: 'VPNavScreenMenuGroupLink', href: t.link, onClick: T(r) },
          { default: ee(() => [It(Ze(t.text), 1)]), _: 1 },
          8,
          ['href', 'onClick'],
        )
      );
    },
  });
const qh = ie(gx, [['__scopeId', 'data-v-cfbcdb5e']]),
  vx = { class: 'VPNavScreenMenuGroupSection' },
  mx = { key: 0, class: 'title' },
  yx = ne({
    __name: 'VPNavScreenMenuGroupSection',
    props: { text: null, items: null },
    setup(t) {
      return (r, i) => (
        P(),
        k('div', vx, [
          t.text ? (P(), k('p', mx, Ze(t.text), 1)) : ce('', !0),
          (P(!0),
          k(
            be,
            null,
            yt(
              t.items,
              (o) => (
                P(), ve(qh, { key: o.text, text: o.text, link: o.link }, null, 8, ['text', 'link'])
              ),
            ),
            128,
          )),
        ])
      );
    },
  });
const bx = ie(yx, [['__scopeId', 'data-v-ad46ae68']]),
  wx = ['aria-controls', 'aria-expanded'],
  xx = { class: 'button-text' },
  Cx = ['id'],
  Px = { key: 1, class: 'group' },
  $x = ne({
    __name: 'VPNavScreenMenuGroup',
    props: { text: null, items: null },
    setup(t) {
      const r = t,
        i = Fe(!1),
        o = ke(() => `NavScreenGroup-${r.text.replace(' ', '-').toLowerCase()}`);
      function l() {
        i.value = !i.value;
      }
      return (u, c) => (
        P(),
        k(
          'div',
          { class: Ke(['VPNavScreenMenuGroup', { open: i.value }]) },
          [
            M(
              'button',
              { class: 'button', 'aria-controls': T(o), 'aria-expanded': i.value, onClick: l },
              [M('span', xx, Ze(t.text), 1), W(px, { class: 'button-icon' })],
              8,
              wx,
            ),
            M(
              'div',
              { id: T(o), class: 'items' },
              [
                (P(!0),
                k(
                  be,
                  null,
                  yt(
                    t.items,
                    (d) => (
                      P(),
                      k(
                        be,
                        { key: d.text },
                        [
                          'link' in d
                            ? (P(),
                              k('div', { key: d.text, class: 'item' }, [
                                W(qh, { text: d.text, link: d.link }, null, 8, ['text', 'link']),
                              ]))
                            : (P(),
                              k('div', Px, [
                                W(bx, { text: d.text, items: d.items }, null, 8, ['text', 'items']),
                              ])),
                        ],
                        64,
                      )
                    ),
                  ),
                  128,
                )),
              ],
              8,
              Cx,
            ),
          ],
          2,
        )
      );
    },
  });
const Sx = ie($x, [['__scopeId', 'data-v-e5a34228']]),
  Ax = { key: 0, class: 'VPNavScreenMenu' },
  Tx = ne({
    __name: 'VPNavScreenMenu',
    setup(t) {
      const { theme: r } = We();
      return (i, o) =>
        T(r).nav
          ? (P(),
            k('nav', Ax, [
              (P(!0),
              k(
                be,
                null,
                yt(
                  T(r).nav,
                  (l) => (
                    P(),
                    k(
                      be,
                      { key: l.text },
                      [
                        'link' in l
                          ? (P(),
                            ve(ux, { key: 0, text: l.text, link: l.link }, null, 8, [
                              'text',
                              'link',
                            ]))
                          : (P(),
                            ve(Sx, { key: 1, text: l.text || '', items: l.items }, null, 8, [
                              'text',
                              'items',
                            ])),
                      ],
                      64,
                    )
                  ),
                ),
                128,
              )),
            ]))
          : ce('', !0);
    },
  }),
  Ex = (t) => (yn('data-v-9aca3f60'), (t = t()), bn(), t),
  Lx = { key: 0, class: 'VPNavScreenAppearance' },
  Ix = Ex(() => M('p', { class: 'text' }, 'Appearance', -1)),
  kx = ne({
    __name: 'VPNavScreenAppearance',
    setup(t) {
      const { site: r } = We();
      return (i, o) => (T(r).appearance ? (P(), k('div', Lx, [Ix, W(Ga)])) : ce('', !0));
    },
  });
const Mx = ie(kx, [['__scopeId', 'data-v-9aca3f60']]),
  Ox = { class: 'list' },
  Rx = ['href'],
  Bx = ne({
    __name: 'VPNavScreenTranslations',
    setup(t) {
      const { theme: r } = We(),
        i = Fe(!1);
      function o() {
        i.value = !i.value;
      }
      return (l, u) =>
        T(r).localeLinks
          ? (P(),
            k(
              'div',
              { key: 0, class: Ke(['VPNavScreenTranslations', { open: i.value }]) },
              [
                M('button', { class: 'title', onClick: o }, [
                  W(Uh, { class: 'icon lang' }),
                  It(' ' + Ze(T(r).localeLinks.text) + ' ', 1),
                  W(Dh, { class: 'icon chevron' }),
                ]),
                M('ul', Ox, [
                  (P(!0),
                  k(
                    be,
                    null,
                    yt(
                      T(r).localeLinks.items,
                      (c) => (
                        P(),
                        k('li', { key: c.link, class: 'item' }, [
                          M('a', { class: 'link', href: c.link }, Ze(c.text), 9, Rx),
                        ])
                      ),
                    ),
                    128,
                  )),
                ]),
              ],
              2,
            ))
          : ce('', !0);
    },
  });
const Vx = ie(Bx, [['__scopeId', 'data-v-4c31e4da']]),
  Nx = ne({
    __name: 'VPNavScreenSocialLinks',
    setup(t) {
      const { theme: r } = We();
      return (i, o) =>
        T(r).socialLinks
          ? (P(),
            ve(Ya, { key: 0, class: 'VPNavScreenSocialLinks', links: T(r).socialLinks }, null, 8, [
              'links',
            ]))
          : ce('', !0);
    },
  }),
  Fx = { class: 'container' },
  Hx = ne({
    __name: 'VPNavScreen',
    props: { open: { type: Boolean } },
    setup(t) {
      const r = Fe(null);
      function i() {
        zh(r.value, { reserveScrollBarGap: !0 });
      }
      function o() {
        Kh();
      }
      return (l, u) => (
        P(),
        ve(
          vi,
          { name: 'fade', onEnter: i, onAfterLeave: o },
          {
            default: ee(() => [
              t.open
                ? (P(),
                  k(
                    'div',
                    { key: 0, class: 'VPNavScreen', ref_key: 'screen', ref: r },
                    [
                      M('div', Fx, [
                        q(l.$slots, 'nav-screen-content-before', {}, void 0, !0),
                        W(Tx, { class: 'menu' }),
                        W(Vx, { class: 'translations' }),
                        W(Mx, { class: 'appearance' }),
                        W(Nx, { class: 'social-links' }),
                        q(l.$slots, 'nav-screen-content-after', {}, void 0, !0),
                      ]),
                    ],
                    512,
                  ))
                : ce('', !0),
            ]),
            _: 3,
          },
        )
      );
    },
  });
const Dx = ie(Hx, [['__scopeId', 'data-v-442bf426']]),
  Ux = ne({
    __name: 'VPNav',
    setup(t) {
      const { isScreenOpen: r, closeScreen: i, toggleScreen: o } = U3(),
        { hasSidebar: l } = Tn();
      return (
        Ao('close-screen', i),
        (u, c) => (
          P(),
          k(
            'header',
            { class: Ke(['VPNav', { 'no-sidebar': !T(l) }]) },
            [
              W(
                ex,
                { 'is-screen-open': T(r), onToggleScreen: T(o) },
                {
                  'nav-bar-title-before': ee(() => [
                    q(u.$slots, 'nav-bar-title-before', {}, void 0, !0),
                  ]),
                  'nav-bar-title-after': ee(() => [
                    q(u.$slots, 'nav-bar-title-after', {}, void 0, !0),
                  ]),
                  'nav-bar-content-before': ee(() => [
                    q(u.$slots, 'nav-bar-content-before', {}, void 0, !0),
                  ]),
                  'nav-bar-content-after': ee(() => [
                    q(u.$slots, 'nav-bar-content-after', {}, void 0, !0),
                  ]),
                  _: 3,
                },
                8,
                ['is-screen-open', 'onToggleScreen'],
              ),
              W(
                Dx,
                { open: T(r) },
                {
                  'nav-screen-content-before': ee(() => [
                    q(u.$slots, 'nav-screen-content-before', {}, void 0, !0),
                  ]),
                  'nav-screen-content-after': ee(() => [
                    q(u.$slots, 'nav-screen-content-after', {}, void 0, !0),
                  ]),
                  _: 3,
                },
                8,
                ['open'],
              ),
            ],
            2,
          )
        )
      );
    },
  });
const Wx = ie(Ux, [['__scopeId', 'data-v-2e5b0dfc']]),
  zx = {},
  Kx = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  qx = M(
    'path',
    { d: 'M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z' },
    null,
    -1,
  ),
  Gx = M(
    'path',
    { d: 'M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z' },
    null,
    -1,
  ),
  Yx = M(
    'path',
    { d: 'M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z' },
    null,
    -1,
  ),
  Zx = M(
    'path',
    { d: 'M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z' },
    null,
    -1,
  ),
  Xx = [qx, Gx, Yx, Zx];
function Jx(t, r) {
  return P(), k('svg', Kx, Xx);
}
const Qx = ie(zx, [['render', Jx]]),
  jx = (t) => (yn('data-v-29725483'), (t = t()), bn(), t),
  e5 = { key: 0, class: 'VPLocalNav' },
  t5 = ['aria-expanded'],
  n5 = jx(() => M('span', { class: 'menu-text' }, 'Menu', -1)),
  r5 = ne({
    __name: 'VPLocalNav',
    props: { open: { type: Boolean } },
    emits: ['open-menu'],
    setup(t) {
      const { hasSidebar: r } = Tn();
      function i() {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
      return (o, l) =>
        T(r)
          ? (P(),
            k('div', e5, [
              M(
                'button',
                {
                  class: 'menu',
                  'aria-expanded': t.open,
                  'aria-controls': 'VPSidebarNav',
                  onClick: l[0] || (l[0] = (u) => o.$emit('open-menu')),
                },
                [W(Qx, { class: 'menu-icon' }), n5],
                8,
                t5,
              ),
              M('a', { class: 'top-link', href: '#', onClick: i }, ' Return to top '),
            ]))
          : ce('', !0);
    },
  });
const i5 = ie(r5, [['__scopeId', 'data-v-29725483']]),
  s5 = {},
  o5 = { version: '1.1', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
  l5 = M(
    'path',
    {
      d: 'M19,2H5C3.3,2,2,3.3,2,5v14c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V5C22,3.3,20.7,2,19,2z M20,19c0,0.6-0.4,1-1,1H5c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h14c0.6,0,1,0.4,1,1V19z',
    },
    null,
    -1,
  ),
  a5 = M(
    'path',
    {
      d: 'M16,11h-3V8c0-0.6-0.4-1-1-1s-1,0.4-1,1v3H8c-0.6,0-1,0.4-1,1s0.4,1,1,1h3v3c0,0.6,0.4,1,1,1s1-0.4,1-1v-3h3c0.6,0,1-0.4,1-1S16.6,11,16,11z',
    },
    null,
    -1,
  ),
  u5 = [l5, a5];
function c5(t, r) {
  return P(), k('svg', o5, u5);
}
const f5 = ie(s5, [['render', c5]]),
  d5 = {},
  h5 = {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    viewBox: '0 0 24 24',
  },
  _5 = M(
    'path',
    {
      d: 'M19,2H5C3.3,2,2,3.3,2,5v14c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V5C22,3.3,20.7,2,19,2zM20,19c0,0.6-0.4,1-1,1H5c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h14c0.6,0,1,0.4,1,1V19z',
    },
    null,
    -1,
  ),
  p5 = M(
    'path',
    { d: 'M16,11H8c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1S16.6,11,16,11z' },
    null,
    -1,
  ),
  g5 = [_5, p5];
function v5(t, r) {
  return P(), k('svg', h5, g5);
}
const m5 = ie(d5, [['render', v5]]),
  y5 = ['innerHTML'],
  b5 = ne({
    __name: 'VPSidebarLink',
    props: { item: null, depth: { default: 1 } },
    setup(t) {
      const { page: r, frontmatter: i } = We(),
        o = ke(() => i.value.sidebarDepth || 1 / 0),
        l = vn('close-sidebar');
      return (u, c) => {
        const d = Kn('VPSidebarLink', !0);
        return (
          P(),
          k(
            be,
            null,
            [
              W(
                Or,
                {
                  class: Ke(['link', { active: T(mi)(T(r).relativePath, t.item.link) }]),
                  style: ns({ paddingLeft: 16 * (t.depth - 1) + 'px' }),
                  href: t.item.link,
                  onClick: T(l),
                },
                {
                  default: ee(() => [
                    M(
                      'span',
                      { innerHTML: t.item.text, class: Ke(['link-text', { light: t.depth > 1 }]) },
                      null,
                      10,
                      y5,
                    ),
                  ]),
                  _: 1,
                },
                8,
                ['class', 'style', 'href', 'onClick'],
              ),
              'items' in t.item && t.depth < T(o)
                ? (P(!0),
                  k(
                    be,
                    { key: 0 },
                    yt(
                      t.item.items,
                      (p) => (
                        P(),
                        ve(d, { key: p.link, item: p, depth: t.depth + 1 }, null, 8, [
                          'item',
                          'depth',
                        ])
                      ),
                    ),
                    128,
                  ))
                : ce('', !0),
            ],
            64,
          )
        );
      };
    },
  });
const w5 = ie(b5, [['__scopeId', 'data-v-3ab72ab5']]),
  x5 = ['role'],
  C5 = ['innerHTML'],
  P5 = { class: 'action' },
  $5 = { class: 'items' },
  S5 = ne({
    __name: 'VPSidebarGroup',
    props: {
      text: null,
      items: null,
      collapsible: { type: Boolean },
      collapsed: { type: Boolean },
    },
    setup(t) {
      const r = t,
        i = Fe(!1);
      ui(() => {
        i.value = !!(r.collapsible && r.collapsed);
      });
      const { page: o } = We();
      ui(() => {
        r.items.some((u) => mi(o.value.relativePath, u.link)) && (i.value = !1);
      });
      function l() {
        r.collapsible && (i.value = !i.value);
      }
      return (u, c) => (
        P(),
        k(
          'section',
          { class: Ke(['VPSidebarGroup', { collapsible: t.collapsible, collapsed: i.value }]) },
          [
            t.text
              ? (P(),
                k(
                  'div',
                  { key: 0, class: 'title', role: t.collapsible ? 'button' : void 0, onClick: l },
                  [
                    M('h2', { innerHTML: t.text, class: 'title-text' }, null, 8, C5),
                    M('div', P5, [W(m5, { class: 'icon minus' }), W(f5, { class: 'icon plus' })]),
                  ],
                  8,
                  x5,
                ))
              : ce('', !0),
            M('div', $5, [
              (P(!0),
              k(
                be,
                null,
                yt(t.items, (d) => (P(), ve(w5, { key: d.link, item: d }, null, 8, ['item']))),
                128,
              )),
            ]),
          ],
          2,
        )
      );
    },
  });
const A5 = ie(S5, [['__scopeId', 'data-v-d37d8138']]),
  T5 = (t) => (yn('data-v-4d03be81'), (t = t()), bn(), t),
  E5 = {
    class: 'nav',
    id: 'VPSidebarNav',
    'aria-labelledby': 'sidebar-aria-label',
    tabindex: '-1',
  },
  L5 = T5(() =>
    M('span', { class: 'visually-hidden', id: 'sidebar-aria-label' }, ' Sidebar Navigation ', -1),
  ),
  I5 = ne({
    __name: 'VPSidebar',
    props: { open: { type: Boolean } },
    setup(t) {
      const r = t,
        { sidebar: i, hasSidebar: o } = Tn();
      let l = Fe(null);
      function u() {
        zh(l.value, { reserveScrollBarGap: !0 });
      }
      function c() {
        Kh();
      }
      return (
        jd(async () => {
          var d;
          r.open ? (u(), (d = l.value) == null || d.focus()) : c();
        }),
        (d, p) =>
          T(o)
            ? (P(),
              k(
                'aside',
                {
                  key: 0,
                  class: Ke(['VPSidebar', { open: t.open }]),
                  ref_key: 'navEl',
                  ref: l,
                  onClick: p[0] || (p[0] = i3(() => {}, ['stop'])),
                },
                [
                  M('nav', E5, [
                    L5,
                    q(d.$slots, 'sidebar-nav-before', {}, void 0, !0),
                    (P(!0),
                    k(
                      be,
                      null,
                      yt(
                        T(i),
                        (v) => (
                          P(),
                          k('div', { key: v.text, class: 'group' }, [
                            W(
                              A5,
                              {
                                text: v.text,
                                items: v.items,
                                collapsible: v.collapsible,
                                collapsed: v.collapsed,
                              },
                              null,
                              8,
                              ['text', 'items', 'collapsible', 'collapsed'],
                            ),
                          ])
                        ),
                      ),
                      128,
                    )),
                    q(d.$slots, 'sidebar-nav-after', {}, void 0, !0),
                  ]),
                ],
                2,
              ))
            : ce('', !0)
      );
    },
  });
const k5 = ie(I5, [['__scopeId', 'data-v-4d03be81']]),
  M5 = {},
  O5 = { class: 'VPPage' };
function R5(t, r) {
  const i = Kn('Content');
  return P(), k('div', O5, [W(i)]);
}
const B5 = ie(M5, [['render', R5]]),
  V5 = ne({
    __name: 'VPButton',
    props: { tag: null, size: null, theme: null, text: null, href: null },
    setup(t) {
      const r = t,
        i = ke(() => [r.size ?? 'medium', r.theme ?? 'brand']),
        o = ke(() => r.href && Ro.test(r.href)),
        l = ke(() => (r.tag ? r.tag : r.href ? 'a' : 'button'));
      return (u, c) => (
        P(),
        ve(
          Io(T(l)),
          {
            class: Ke(['VPButton', T(i)]),
            href: t.href ? T(_o)(t.href) : void 0,
            target: T(o) ? '_blank' : void 0,
            rel: T(o) ? 'noreferrer' : void 0,
          },
          { default: ee(() => [It(Ze(t.text), 1)]), _: 1 },
          8,
          ['class', 'href', 'target', 'rel'],
        )
      );
    },
  });
const N5 = ie(V5, [['__scopeId', 'data-v-bb61c577']]),
  F5 = (t) => (yn('data-v-3c00ffcc'), (t = t()), bn(), t),
  H5 = { class: 'container' },
  D5 = { class: 'main' },
  U5 = { key: 0, class: 'name' },
  W5 = { class: 'clip' },
  z5 = { key: 1, class: 'text' },
  K5 = { key: 2, class: 'tagline' },
  q5 = { key: 3, class: 'actions' },
  G5 = { key: 0, class: 'image' },
  Y5 = { class: 'image-container' },
  Z5 = F5(() => M('div', { class: 'image-bg' }, null, -1)),
  X5 = ne({
    __name: 'VPHero',
    props: { name: null, text: null, tagline: null, image: null, actions: null },
    setup(t) {
      return (r, i) => (
        P(),
        k(
          'div',
          { class: Ke(['VPHero', { 'has-image': t.image }]) },
          [
            M('div', H5, [
              M('div', D5, [
                t.name ? (P(), k('h1', U5, [M('span', W5, Ze(t.name), 1)])) : ce('', !0),
                t.text ? (P(), k('p', z5, Ze(t.text), 1)) : ce('', !0),
                t.tagline ? (P(), k('p', K5, Ze(t.tagline), 1)) : ce('', !0),
                t.actions
                  ? (P(),
                    k('div', q5, [
                      (P(!0),
                      k(
                        be,
                        null,
                        yt(
                          t.actions,
                          (o) => (
                            P(),
                            k('div', { key: o.link, class: 'action' }, [
                              W(
                                N5,
                                {
                                  tag: 'a',
                                  size: 'medium',
                                  theme: o.theme,
                                  text: o.text,
                                  href: o.link,
                                },
                                null,
                                8,
                                ['theme', 'text', 'href'],
                              ),
                            ])
                          ),
                        ),
                        128,
                      )),
                    ]))
                  : ce('', !0),
              ]),
              t.image
                ? (P(),
                  k('div', G5, [
                    M('div', Y5, [
                      Z5,
                      W(Nh, { class: 'image-src', image: t.image }, null, 8, ['image']),
                    ]),
                  ]))
                : ce('', !0),
            ]),
          ],
          2,
        )
      );
    },
  });
const J5 = ie(X5, [['__scopeId', 'data-v-3c00ffcc']]),
  Q5 = ne({
    __name: 'VPHomeHero',
    setup(t) {
      const { frontmatter: r } = We();
      return (i, o) =>
        T(r).hero
          ? (P(),
            ve(
              J5,
              {
                key: 0,
                class: 'VPHomeHero',
                name: T(r).hero.name,
                text: T(r).hero.text,
                tagline: T(r).hero.tagline,
                image: T(r).hero.image,
                actions: T(r).hero.actions,
              },
              null,
              8,
              ['name', 'text', 'tagline', 'image', 'actions'],
            ))
          : ce('', !0);
    },
  }),
  j5 = {},
  e6 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
  t6 = M(
    'path',
    {
      d: 'M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z',
    },
    null,
    -1,
  ),
  n6 = [t6];
function r6(t, r) {
  return P(), k('svg', e6, n6);
}
const i6 = ie(j5, [['render', r6]]),
  s6 = { class: 'box' },
  o6 = { key: 0, class: 'icon' },
  l6 = { class: 'title' },
  a6 = { class: 'details' },
  u6 = { key: 1, class: 'link-text' },
  c6 = { class: 'link-text-value' },
  f6 = ne({
    __name: 'VPFeature',
    props: { icon: null, title: null, details: null, link: null, linkText: null },
    setup(t) {
      return (r, i) => (
        P(),
        ve(
          Or,
          { class: 'VPFeature', href: t.link, 'no-icon': !0 },
          {
            default: ee(() => [
              M('article', s6, [
                t.icon ? (P(), k('div', o6, Ze(t.icon), 1)) : ce('', !0),
                M('h2', l6, Ze(t.title), 1),
                M('p', a6, Ze(t.details), 1),
                t.linkText
                  ? (P(),
                    k('div', u6, [
                      M('p', c6, [It(Ze(t.linkText) + ' ', 1), W(i6, { class: 'link-text-icon' })]),
                    ]))
                  : ce('', !0),
              ]),
            ]),
            _: 1,
          },
          8,
          ['href'],
        )
      );
    },
  });
const d6 = ie(f6, [['__scopeId', 'data-v-74e5e3f0']]),
  h6 = { key: 0, class: 'VPFeatures' },
  _6 = { class: 'container' },
  p6 = { class: 'items' },
  g6 = ne({
    __name: 'VPFeatures',
    props: { features: null },
    setup(t) {
      const r = t,
        i = ke(() => {
          const o = r.features.length;
          if (o) {
            if (o === 2) return 'grid-2';
            if (o === 3) return 'grid-3';
            if (o % 3 === 0) return 'grid-6';
            if (o % 2 === 0) return 'grid-4';
          } else return;
        });
      return (o, l) =>
        t.features
          ? (P(),
            k('div', h6, [
              M('div', _6, [
                M('div', p6, [
                  (P(!0),
                  k(
                    be,
                    null,
                    yt(
                      t.features,
                      (u) => (
                        P(),
                        k(
                          'div',
                          { key: u.title, class: Ke(['item', [T(i)]]) },
                          [
                            W(
                              d6,
                              {
                                icon: u.icon,
                                title: u.title,
                                details: u.details,
                                link: u.link,
                                'link-text': u.linkText,
                              },
                              null,
                              8,
                              ['icon', 'title', 'details', 'link', 'link-text'],
                            ),
                          ],
                          2,
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
              ]),
            ]))
          : ce('', !0);
    },
  });
const v6 = ie(g6, [['__scopeId', 'data-v-85356748']]),
  m6 = ne({
    __name: 'VPHomeFeatures',
    setup(t) {
      const { frontmatter: r } = We();
      return (i, o) =>
        T(r).features
          ? (P(),
            ve(v6, { key: 0, class: 'VPHomeFeatures', features: T(r).features }, null, 8, [
              'features',
            ]))
          : ce('', !0);
    },
  }),
  y6 = { class: 'VPHome' },
  b6 = ne({
    __name: 'VPHome',
    setup(t) {
      return (r, i) => {
        const o = Kn('Content');
        return (
          P(),
          k('div', y6, [
            q(r.$slots, 'home-hero-before', {}, void 0, !0),
            W(Q5),
            q(r.$slots, 'home-hero-after', {}, void 0, !0),
            q(r.$slots, 'home-features-before', {}, void 0, !0),
            W(m6),
            q(r.$slots, 'home-features-after', {}, void 0, !0),
            W(o),
          ])
        );
      };
    },
  });
const w6 = ie(b6, [['__scopeId', 'data-v-43e78548']]);
var yd;
const yi = typeof window < 'u',
  x6 = (t) => typeof t == 'string',
  C6 = () => {};
yi &&
  (yd = window == null ? void 0 : window.navigator) != null &&
  yd.userAgent &&
  /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ja(t) {
  return typeof t == 'function' ? t() : T(t);
}
function P6(t) {
  return t;
}
function Qa(t) {
  return q2() ? (G2(t), !0) : !1;
}
function $6(t) {
  return typeof t == 'function' ? ke(t) : Fe(t);
}
function S6(t, r = !0) {
  Mo() ? an(t) : r ? t() : Fa(t);
}
function A6(t, r, i = {}) {
  const { immediate: o = !0 } = i,
    l = Fe(!1);
  let u = null;
  function c() {
    u && (clearTimeout(u), (u = null));
  }
  function d() {
    (l.value = !1), c();
  }
  function p(...v) {
    c(),
      (l.value = !0),
      (u = setTimeout(() => {
        (l.value = !1), (u = null), t(...v);
      }, Ja(r)));
  }
  return o && ((l.value = !0), yi && p()), Qa(d), { isPending: l, start: p, stop: d };
}
function T6(t) {
  var r;
  const i = Ja(t);
  return (r = i == null ? void 0 : i.$el) != null ? r : i;
}
const Gh = yi ? window : void 0;
yi && window.document;
const E6 = yi ? window.navigator : void 0;
yi && window.location;
function L6(...t) {
  let r, i, o, l;
  if ((x6(t[0]) || Array.isArray(t[0]) ? (([i, o, l] = t), (r = Gh)) : ([r, i, o, l] = t), !r))
    return C6;
  Array.isArray(i) || (i = [i]), Array.isArray(o) || (o = [o]);
  const u = [],
    c = () => {
      u.forEach((x) => x()), (u.length = 0);
    },
    d = (x, $, E) => (x.addEventListener($, E, l), () => x.removeEventListener($, E, l)),
    p = mn(
      () => T6(r),
      (x) => {
        c(), x && u.push(...i.flatMap(($) => o.map((E) => d(x, $, E))));
      },
      { immediate: !0, flush: 'post' },
    ),
    v = () => {
      p(), c();
    };
  return Qa(v), v;
}
function Yh(t, r = !1) {
  const i = Fe(),
    o = () => (i.value = Boolean(t()));
  return o(), S6(o, r), i;
}
function bd(t, r = {}) {
  const { window: i = Gh } = r,
    o = Yh(() => i && 'matchMedia' in i && typeof i.matchMedia == 'function');
  let l;
  const u = Fe(!1),
    c = () => {
      l && ('removeEventListener' in l ? l.removeEventListener('change', d) : l.removeListener(d));
    },
    d = () => {
      o.value &&
        (c(),
        (l = i.matchMedia($6(t).value)),
        (u.value = l.matches),
        'addEventListener' in l ? l.addEventListener('change', d) : l.addListener(d));
    };
  return ui(d), Qa(() => c()), u;
}
function I6(t = {}) {
  const { navigator: r = E6, read: i = !1, source: o, copiedDuring: l = 1500, legacy: u = !1 } = t,
    c = ['copy', 'cut'],
    d = Yh(() => r && 'clipboard' in r),
    p = ke(() => d.value || u),
    v = Fe(''),
    x = Fe(!1),
    $ = A6(() => (x.value = !1), l);
  function E() {
    d.value
      ? r.clipboard.readText().then((j) => {
          v.value = j;
        })
      : (v.value = Q());
  }
  if (p.value && i) for (const j of c) L6(j, E);
  async function H(j = Ja(o)) {
    p.value &&
      j != null &&
      (d.value ? await r.clipboard.writeText(j) : Y(j), (v.value = j), (x.value = !0), $.start());
  }
  function Y(j) {
    const I = document.createElement('textarea');
    (I.value = j ?? ''),
      (I.style.position = 'absolute'),
      (I.style.opacity = '0'),
      document.body.appendChild(I),
      I.select(),
      document.execCommand('copy'),
      I.remove();
  }
  function Q() {
    var j, I, D;
    return (D =
      (I =
        (j = document == null ? void 0 : document.getSelection) == null
          ? void 0
          : j.call(document)) == null
        ? void 0
        : I.toString()) != null
      ? D
      : '';
  }
  return { isSupported: p, text: v, copied: x, copy: H };
}
const wa =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {},
  xa = '__vueuse_ssr_handlers__';
wa[xa] = wa[xa] || {};
wa[xa];
var wd;
(function (t) {
  (t.UP = 'UP'), (t.RIGHT = 'RIGHT'), (t.DOWN = 'DOWN'), (t.LEFT = 'LEFT'), (t.NONE = 'NONE');
})(wd || (wd = {}));
var k6 = Object.defineProperty,
  xd = Object.getOwnPropertySymbols,
  M6 = Object.prototype.hasOwnProperty,
  O6 = Object.prototype.propertyIsEnumerable,
  Cd = (t, r, i) =>
    r in t ? k6(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : (t[r] = i),
  R6 = (t, r) => {
    for (var i in r || (r = {})) M6.call(r, i) && Cd(t, i, r[i]);
    if (xd) for (var i of xd(r)) O6.call(r, i) && Cd(t, i, r[i]);
    return t;
  };
const B6 = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6],
};
R6({ linear: P6 }, B6);
function V6() {
  const { hasSidebar: t } = Tn(),
    r = bd('(min-width: 960px)'),
    i = bd('(min-width: 1280px)');
  return { isAsideEnabled: ke(() => (!i.value && !r.value ? !1 : t.value ? i.value : r.value)) };
}
const N6 = 71;
function F6(t) {
  if (t === !1) return [];
  let r = [];
  return (
    document.querySelectorAll('h2, h3, h4, h5, h6').forEach((i) => {
      i.textContent &&
        i.id &&
        r.push({
          level: Number(i.tagName[1]),
          title: i.innerText.replace(/\s+#\s*$/, ''),
          link: `#${i.id}`,
        });
    }),
    H6(r, t)
  );
}
function H6(t, r = 2) {
  return D6(t, typeof r == 'number' ? [r, r] : r === 'deep' ? [2, 6] : r);
}
function D6(t, r) {
  const i = [];
  return (
    (t = t.map((o) => ({ ...o }))),
    t.forEach((o, l) => {
      o.level >= r[0] && o.level <= r[1] && U6(l, t, r) && i.push(o);
    }),
    i
  );
}
function U6(t, r, i) {
  if (t === 0) return !0;
  const o = r[t];
  for (let l = t - 1; l >= 0; l--) {
    const u = r[l];
    if (u.level < o.level && u.level >= i[0] && u.level <= i[1])
      return u.children == null && (u.children = []), u.children.push(o), !1;
  }
  return !0;
}
function W6(t, r) {
  const { isAsideEnabled: i } = V6(),
    o = O3(u, 100);
  let l = null;
  an(() => {
    requestAnimationFrame(u), window.addEventListener('scroll', o);
  }),
    Lo(() => {
      c(location.hash);
    }),
    hr(() => {
      window.removeEventListener('scroll', o);
    });
  function u() {
    if (!i.value) return;
    const d = [].slice.call(t.value.querySelectorAll('.outline-link')),
      p = [].slice
        .call(document.querySelectorAll('.content .header-anchor'))
        .filter((H) => d.some((Y) => Y.hash === H.hash && H.offsetParent !== null)),
      v = window.scrollY,
      x = window.innerHeight,
      $ = document.body.offsetHeight,
      E = Math.abs(v + x - $) < 1;
    if (p.length && E) {
      c(p[p.length - 1].hash);
      return;
    }
    for (let H = 0; H < p.length; H++) {
      const Y = p[H],
        Q = p[H + 1],
        [j, I] = z6(H, Y, Q);
      if (j) {
        c(I);
        return;
      }
    }
  }
  function c(d) {
    l && l.classList.remove('active'),
      d !== null && (l = t.value.querySelector(`a[href="${decodeURIComponent(d)}"]`));
    const p = l;
    p
      ? (p.classList.add('active'),
        (r.value.style.top = p.offsetTop + 33 + 'px'),
        (r.value.style.opacity = '1'))
      : ((r.value.style.top = '33px'), (r.value.style.opacity = '0'));
  }
}
function Pd(t) {
  return t.parentElement.offsetTop - N6;
}
function z6(t, r, i) {
  const o = window.scrollY;
  return t === 0 && o === 0
    ? [!0, null]
    : o < Pd(r)
    ? [!1, null]
    : !i || o < Pd(i)
    ? [!0, r.hash]
    : [!1, null];
}
const K6 = ['href'],
  q6 = ne({
    __name: 'VPDocAsideOutlineItem',
    props: { headers: null, onClick: null, root: { type: Boolean } },
    setup(t) {
      return (r, i) => {
        const o = Kn('VPDocAsideOutlineItem', !0);
        return (
          P(),
          k(
            'ul',
            { class: Ke(t.root ? 'root' : 'nested') },
            [
              (P(!0),
              k(
                be,
                null,
                yt(
                  t.headers,
                  ({ children: l, link: u, title: c }) => (
                    P(),
                    k('li', null, [
                      M(
                        'a',
                        {
                          class: 'outline-link',
                          href: u,
                          onClick: i[0] || (i[0] = (...d) => t.onClick && t.onClick(...d)),
                        },
                        Ze(c),
                        9,
                        K6,
                      ),
                      l != null && l.length
                        ? (P(),
                          ve(o, { key: 0, headers: l, onClick: t.onClick }, null, 8, [
                            'headers',
                            'onClick',
                          ]))
                        : ce('', !0),
                    ])
                  ),
                ),
                256,
              )),
            ],
            2,
          )
        );
      };
    },
  });
const G6 = ie(q6, [['__scopeId', 'data-v-dc579305']]),
  Y6 = (t) => (yn('data-v-e4230e59'), (t = t()), bn(), t),
  Z6 = { class: 'content' },
  X6 = { class: 'outline-title' },
  J6 = { 'aria-labelledby': 'doc-outline-aria-label' },
  Q6 = Y6(() =>
    M(
      'span',
      { class: 'visually-hidden', id: 'doc-outline-aria-label' },
      ' Table of Contents for current page ',
      -1,
    ),
  ),
  j6 = ne({
    __name: 'VPDocAsideOutline',
    setup(t) {
      const { frontmatter: r, theme: i } = We(),
        o = ke(() => r.value.outline ?? i.value.outline),
        l = vn('onContentUpdated');
      l.value = () => {
        u.value = F6(o.value);
      };
      const u = Fe([]),
        c = ke(() => u.value.length > 0),
        d = Fe(),
        p = Fe();
      W6(d, p);
      function v({ target: x }) {
        const $ = '#' + x.href.split('#')[1],
          E = document.querySelector(decodeURIComponent($));
        E == null || E.focus();
      }
      return (x, $) => (
        P(),
        k(
          'div',
          {
            class: Ke(['VPDocAsideOutline', { 'has-outline': T(c) }]),
            ref_key: 'container',
            ref: d,
          },
          [
            M('div', Z6, [
              M('div', { class: 'outline-marker', ref_key: 'marker', ref: p }, null, 512),
              M('div', X6, Ze(T(i).outlineTitle || 'On this page'), 1),
              M('nav', J6, [
                Q6,
                W(G6, { headers: u.value, root: !0, onClick: v }, null, 8, ['headers']),
              ]),
            ]),
          ],
          2,
        )
      );
    },
  });
const e8 = ie(j6, [['__scopeId', 'data-v-e4230e59']]),
  t8 = { class: 'VPDocAsideCarbonAds' },
  n8 = ne({
    __name: 'VPDocAsideCarbonAds',
    setup(t) {
      const r = () => null;
      return (i, o) => (P(), k('div', t8, [W(T(r))]));
    },
  }),
  r8 = (t) => (yn('data-v-26b03bfc'), (t = t()), bn(), t),
  i8 = { class: 'VPDocAside' },
  s8 = r8(() => M('div', { class: 'spacer' }, null, -1)),
  o8 = ne({
    __name: 'VPDocAside',
    setup(t) {
      const { theme: r } = We();
      return (i, o) => (
        P(),
        k('div', i8, [
          q(i.$slots, 'aside-top', {}, void 0, !0),
          q(i.$slots, 'aside-outline-before', {}, void 0, !0),
          W(e8),
          q(i.$slots, 'aside-outline-after', {}, void 0, !0),
          s8,
          q(i.$slots, 'aside-ads-before', {}, void 0, !0),
          T(r).carbonAds ? (P(), ve(n8, { key: 0 })) : ce('', !0),
          q(i.$slots, 'aside-ads-after', {}, void 0, !0),
          q(i.$slots, 'aside-bottom', {}, void 0, !0),
        ])
      );
    },
  });
const l8 = ie(o8, [['__scopeId', 'data-v-26b03bfc']]);
function a8() {
  const { theme: t, page: r } = We();
  return ke(() => {
    const { text: i = 'Edit this page', pattern: o } = t.value.editLink || {},
      { relativePath: l } = r.value;
    return { url: o.replace(/:path/g, l), text: i };
  });
}
function u8() {
  const { page: t, theme: r, frontmatter: i } = We();
  return ke(() => {
    const o = Vh(r.value.sidebar, t.value.relativePath),
      l = R3(o),
      u = l.findIndex((c) => mi(t.value.relativePath, c.link));
    return {
      prev: i.value.prev ? { ...l[u - 1], text: i.value.prev } : l[u - 1],
      next: i.value.next ? { ...l[u + 1], text: i.value.next } : l[u + 1],
    };
  });
}
const c8 = {},
  f8 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
  d8 = M(
    'path',
    {
      d: 'M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z',
    },
    null,
    -1,
  ),
  h8 = M(
    'path',
    {
      d: 'M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z',
    },
    null,
    -1,
  ),
  _8 = [d8, h8];
function p8(t, r) {
  return P(), k('svg', f8, _8);
}
const g8 = ie(c8, [['render', p8]]),
  v8 = { class: 'VPLastUpdated' },
  m8 = ['datetime'],
  y8 = ne({
    __name: 'VPDocFooterLastUpdated',
    setup(t) {
      const { theme: r, page: i } = We(),
        o = ke(() => new Date(i.value.lastUpdated)),
        l = ke(() => o.value.toISOString()),
        u = Fe('');
      return (
        an(() => {
          ui(() => {
            u.value = o.value.toLocaleString(window.navigator.language);
          });
        }),
        (c, d) => (
          P(),
          k('p', v8, [
            It(Ze(T(r).lastUpdatedText ?? 'Last updated') + ': ', 1),
            M('time', { datetime: T(l) }, Ze(u.value), 9, m8),
          ])
        )
      );
    },
  });
const b8 = ie(y8, [['__scopeId', 'data-v-4e24fb60']]),
  w8 = { key: 0, class: 'VPDocFooter' },
  x8 = { key: 0, class: 'edit-info' },
  C8 = { key: 0, class: 'edit-link' },
  P8 = { key: 1, class: 'last-updated' },
  $8 = { key: 1, class: 'prev-next' },
  S8 = { class: 'pager' },
  A8 = ['href'],
  T8 = ['innerHTML'],
  E8 = ['innerHTML'],
  L8 = ['href'],
  I8 = ['innerHTML'],
  k8 = ['innerHTML'],
  M8 = ne({
    __name: 'VPDocFooter',
    setup(t) {
      const { theme: r, page: i, frontmatter: o } = We(),
        l = a8(),
        u = u8(),
        c = ke(() => r.value.editLink && o.value.editLink !== !1),
        d = ke(() => i.value.lastUpdated && o.value.lastUpdated !== !1),
        p = ke(() => c.value || d.value || u.value.prev || u.value.next);
      return (v, x) => {
        var $, E;
        return T(p)
          ? (P(),
            k('footer', w8, [
              T(c) || T(d)
                ? (P(),
                  k('div', x8, [
                    T(c)
                      ? (P(),
                        k('div', C8, [
                          W(
                            Or,
                            { class: 'edit-link-button', href: T(l).url, 'no-icon': !0 },
                            {
                              default: ee(() => [
                                W(g8, { class: 'edit-link-icon' }),
                                It(' ' + Ze(T(l).text), 1),
                              ]),
                              _: 1,
                            },
                            8,
                            ['href'],
                          ),
                        ]))
                      : ce('', !0),
                    T(d) ? (P(), k('div', P8, [W(b8)])) : ce('', !0),
                  ]))
                : ce('', !0),
              T(u).prev || T(u).next
                ? (P(),
                  k('div', $8, [
                    M('div', S8, [
                      T(u).prev
                        ? (P(),
                          k(
                            'a',
                            { key: 0, class: 'pager-link prev', href: T(_o)(T(u).prev.link) },
                            [
                              M(
                                'span',
                                {
                                  class: 'desc',
                                  innerHTML:
                                    (($ = T(r).docFooter) == null ? void 0 : $.prev) ??
                                    'Previous page',
                                },
                                null,
                                8,
                                T8,
                              ),
                              M('span', { class: 'title', innerHTML: T(u).prev.text }, null, 8, E8),
                            ],
                            8,
                            A8,
                          ))
                        : ce('', !0),
                    ]),
                    M(
                      'div',
                      { class: Ke(['pager', { 'has-prev': T(u).prev }]) },
                      [
                        T(u).next
                          ? (P(),
                            k(
                              'a',
                              { key: 0, class: 'pager-link next', href: T(_o)(T(u).next.link) },
                              [
                                M(
                                  'span',
                                  {
                                    class: 'desc',
                                    innerHTML:
                                      ((E = T(r).docFooter) == null ? void 0 : E.next) ??
                                      'Next page',
                                  },
                                  null,
                                  8,
                                  I8,
                                ),
                                M(
                                  'span',
                                  { class: 'title', innerHTML: T(u).next.text },
                                  null,
                                  8,
                                  k8,
                                ),
                              ],
                              8,
                              L8,
                            ))
                          : ce('', !0),
                      ],
                      2,
                    ),
                  ]))
                : ce('', !0),
            ]))
          : ce('', !0);
      };
    },
  });
const O8 = ie(M8, [['__scopeId', 'data-v-d9051656']]),
  R8 = (t) => (yn('data-v-4abc8cb4'), (t = t()), bn(), t),
  B8 = { class: 'container' },
  V8 = { key: 0, class: 'aside' },
  N8 = R8(() => M('div', { class: 'aside-curtain' }, null, -1)),
  F8 = { class: 'aside-container' },
  H8 = { class: 'aside-content' },
  D8 = { class: 'content' },
  U8 = { class: 'content-container' },
  W8 = { class: 'main' },
  z8 = ne({
    __name: 'VPDoc',
    setup(t) {
      const r = _r(),
        { hasSidebar: i, hasAside: o } = Tn(),
        l = ke(() => r.path.replace(/[./]+/g, '_').replace(/_html$/, '')),
        u = Fe();
      return (
        Ao('onContentUpdated', u),
        (c, d) => {
          const p = Kn('Content');
          return (
            P(),
            k(
              'div',
              { class: Ke(['VPDoc', { 'has-sidebar': T(i), 'has-aside': T(o) }]) },
              [
                M('div', B8, [
                  T(o)
                    ? (P(),
                      k('div', V8, [
                        N8,
                        M('div', F8, [
                          M('div', H8, [
                            W(l8, null, {
                              'aside-top': ee(() => [q(c.$slots, 'aside-top', {}, void 0, !0)]),
                              'aside-bottom': ee(() => [
                                q(c.$slots, 'aside-bottom', {}, void 0, !0),
                              ]),
                              'aside-outline-before': ee(() => [
                                q(c.$slots, 'aside-outline-before', {}, void 0, !0),
                              ]),
                              'aside-outline-after': ee(() => [
                                q(c.$slots, 'aside-outline-after', {}, void 0, !0),
                              ]),
                              'aside-ads-before': ee(() => [
                                q(c.$slots, 'aside-ads-before', {}, void 0, !0),
                              ]),
                              'aside-ads-after': ee(() => [
                                q(c.$slots, 'aside-ads-after', {}, void 0, !0),
                              ]),
                              _: 3,
                            }),
                          ]),
                        ]),
                      ]))
                    : ce('', !0),
                  M('div', D8, [
                    M('div', U8, [
                      q(c.$slots, 'doc-before', {}, void 0, !0),
                      M('main', W8, [
                        W(p, { class: Ke(['vp-doc', T(l)]), onContentUpdated: u.value }, null, 8, [
                          'class',
                          'onContentUpdated',
                        ]),
                      ]),
                      q(c.$slots, 'doc-footer-before', {}, void 0, !0),
                      W(O8),
                      q(c.$slots, 'doc-after', {}, void 0, !0),
                    ]),
                  ]),
                ]),
              ],
              2,
            )
          );
        }
      );
    },
  });
const K8 = ie(z8, [['__scopeId', 'data-v-4abc8cb4']]),
  q8 = ne({
    __name: 'VPContent',
    setup(t) {
      const r = _r(),
        { frontmatter: i } = We(),
        { hasSidebar: o } = Tn(),
        l = vn('NotFound');
      return (u, c) => (
        P(),
        k(
          'div',
          {
            class: Ke(['VPContent', { 'has-sidebar': T(o), 'is-home': T(i).layout === 'home' }]),
            id: 'VPContent',
          },
          [
            T(r).component === T(l)
              ? (P(), ve(T(l), { key: 0 }))
              : T(i).layout === 'page'
              ? (P(), ve(B5, { key: 1 }))
              : T(i).layout === 'home'
              ? (P(),
                ve(
                  w6,
                  { key: 2 },
                  {
                    'home-hero-before': ee(() => [q(u.$slots, 'home-hero-before', {}, void 0, !0)]),
                    'home-hero-after': ee(() => [q(u.$slots, 'home-hero-after', {}, void 0, !0)]),
                    'home-features-before': ee(() => [
                      q(u.$slots, 'home-features-before', {}, void 0, !0),
                    ]),
                    'home-features-after': ee(() => [
                      q(u.$slots, 'home-features-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  },
                ))
              : (P(),
                ve(
                  K8,
                  { key: 3 },
                  {
                    'doc-footer-before': ee(() => [
                      q(u.$slots, 'doc-footer-before', {}, void 0, !0),
                    ]),
                    'doc-before': ee(() => [q(u.$slots, 'doc-before', {}, void 0, !0)]),
                    'doc-after': ee(() => [q(u.$slots, 'doc-after', {}, void 0, !0)]),
                    'aside-top': ee(() => [q(u.$slots, 'aside-top', {}, void 0, !0)]),
                    'aside-outline-before': ee(() => [
                      q(u.$slots, 'aside-outline-before', {}, void 0, !0),
                    ]),
                    'aside-outline-after': ee(() => [
                      q(u.$slots, 'aside-outline-after', {}, void 0, !0),
                    ]),
                    'aside-ads-before': ee(() => [q(u.$slots, 'aside-ads-before', {}, void 0, !0)]),
                    'aside-ads-after': ee(() => [q(u.$slots, 'aside-ads-after', {}, void 0, !0)]),
                    'aside-bottom': ee(() => [q(u.$slots, 'aside-bottom', {}, void 0, !0)]),
                    _: 3,
                  },
                )),
          ],
          2,
        )
      );
    },
  });
const G8 = ie(q8, [['__scopeId', 'data-v-1f75116f']]),
  Y8 = { class: 'container' },
  Z8 = ['innerHTML'],
  X8 = ['innerHTML'],
  J8 = ne({
    __name: 'VPFooter',
    setup(t) {
      const { theme: r } = We(),
        { hasSidebar: i } = Tn();
      return (o, l) =>
        T(r).footer
          ? (P(),
            k(
              'footer',
              { key: 0, class: Ke(['VPFooter', { 'has-sidebar': T(i) }]) },
              [
                M('div', Y8, [
                  T(r).footer.message
                    ? (P(),
                      k(
                        'p',
                        { key: 0, class: 'message', innerHTML: T(r).footer.message },
                        null,
                        8,
                        Z8,
                      ))
                    : ce('', !0),
                  T(r).footer.copyright
                    ? (P(),
                      k(
                        'p',
                        { key: 1, class: 'copyright', innerHTML: T(r).footer.copyright },
                        null,
                        8,
                        X8,
                      ))
                    : ce('', !0),
                ]),
              ],
              2,
            ))
          : ce('', !0);
    },
  });
const Q8 = ie(J8, [['__scopeId', 'data-v-b032e5ea']]),
  j8 = { key: 0, class: 'Layout' },
  e7 = ne({
    __name: 'Layout',
    setup(t) {
      const { isOpen: r, open: i, close: o } = Tn(),
        l = _r();
      mn(() => l.path, o), B3(r, o), Ao('close-sidebar', o);
      const { frontmatter: u } = We();
      return (c, d) => {
        const p = Kn('Content');
        return T(u).layout !== !1
          ? (P(),
            k('div', j8, [
              q(c.$slots, 'layout-top', {}, void 0, !0),
              W(N3),
              W(D3, { class: 'backdrop', show: T(r), onClick: T(o) }, null, 8, ['show', 'onClick']),
              W(Wx, null, {
                'nav-bar-title-before': ee(() => [
                  q(c.$slots, 'nav-bar-title-before', {}, void 0, !0),
                ]),
                'nav-bar-title-after': ee(() => [
                  q(c.$slots, 'nav-bar-title-after', {}, void 0, !0),
                ]),
                'nav-bar-content-before': ee(() => [
                  q(c.$slots, 'nav-bar-content-before', {}, void 0, !0),
                ]),
                'nav-bar-content-after': ee(() => [
                  q(c.$slots, 'nav-bar-content-after', {}, void 0, !0),
                ]),
                'nav-screen-content-before': ee(() => [
                  q(c.$slots, 'nav-screen-content-before', {}, void 0, !0),
                ]),
                'nav-screen-content-after': ee(() => [
                  q(c.$slots, 'nav-screen-content-after', {}, void 0, !0),
                ]),
                _: 3,
              }),
              W(i5, { open: T(r), onOpenMenu: T(i) }, null, 8, ['open', 'onOpenMenu']),
              W(
                k5,
                { open: T(r) },
                {
                  'sidebar-nav-before': ee(() => [
                    q(c.$slots, 'sidebar-nav-before', {}, void 0, !0),
                  ]),
                  'sidebar-nav-after': ee(() => [q(c.$slots, 'sidebar-nav-after', {}, void 0, !0)]),
                  _: 3,
                },
                8,
                ['open'],
              ),
              W(G8, null, {
                'home-hero-before': ee(() => [q(c.$slots, 'home-hero-before', {}, void 0, !0)]),
                'home-hero-after': ee(() => [q(c.$slots, 'home-hero-after', {}, void 0, !0)]),
                'home-features-before': ee(() => [
                  q(c.$slots, 'home-features-before', {}, void 0, !0),
                ]),
                'home-features-after': ee(() => [
                  q(c.$slots, 'home-features-after', {}, void 0, !0),
                ]),
                'doc-footer-before': ee(() => [q(c.$slots, 'doc-footer-before', {}, void 0, !0)]),
                'doc-before': ee(() => [q(c.$slots, 'doc-before', {}, void 0, !0)]),
                'doc-after': ee(() => [q(c.$slots, 'doc-after', {}, void 0, !0)]),
                'aside-top': ee(() => [q(c.$slots, 'aside-top', {}, void 0, !0)]),
                'aside-bottom': ee(() => [q(c.$slots, 'aside-bottom', {}, void 0, !0)]),
                'aside-outline-before': ee(() => [
                  q(c.$slots, 'aside-outline-before', {}, void 0, !0),
                ]),
                'aside-outline-after': ee(() => [
                  q(c.$slots, 'aside-outline-after', {}, void 0, !0),
                ]),
                'aside-ads-before': ee(() => [q(c.$slots, 'aside-ads-before', {}, void 0, !0)]),
                'aside-ads-after': ee(() => [q(c.$slots, 'aside-ads-after', {}, void 0, !0)]),
                _: 3,
              }),
              W(Q8),
              q(c.$slots, 'layout-bottom', {}, void 0, !0),
            ]))
          : (P(), ve(p, { key: 1 }));
      };
    },
  });
const t7 = ie(e7, [['__scopeId', 'data-v-fc91a531']]),
  Vo = (t) => (yn('data-v-24756079'), (t = t()), bn(), t),
  n7 = { class: 'NotFound' },
  r7 = Vo(() => M('p', { class: 'code' }, '404', -1)),
  i7 = Vo(() => M('h1', { class: 'title' }, 'PAGE NOT FOUND', -1)),
  s7 = Vo(() => M('div', { class: 'divider' }, null, -1)),
  o7 = Vo(() =>
    M(
      'blockquote',
      { class: 'quote' },
      " But if you don't change your direction, and if you keep looking, you may end up where you are heading. ",
      -1,
    ),
  ),
  l7 = { class: 'action' },
  a7 = ['href'],
  u7 = ne({
    __name: 'NotFound',
    setup(t) {
      const { site: r } = We();
      return (i, o) => (
        P(),
        k('div', n7, [
          r7,
          i7,
          s7,
          o7,
          M('div', l7, [
            M(
              'a',
              { class: 'link', href: T(r).base, 'aria-label': 'go to home' },
              ' Take me home ',
              8,
              a7,
            ),
          ]),
        ])
      );
    },
  });
const c7 = ie(u7, [['__scopeId', 'data-v-24756079']]);
const f7 = {
    Layout: t7,
    NotFound: c7,
    enhanceApp: ({ app: t }) => {
      t.component('Badge', d3);
    },
  },
  d7 = { class: 'example-showcase' },
  h7 = ne({
    __name: 'v-example',
    props: { file: { type: String, required: !0 }, demo: { type: Object, required: !0 } },
    setup(t) {
      return (r, i) => {
        const o = Kn('ClientOnly');
        return (
          P(),
          k('div', d7, [
            W(o, null, {
              default: ee(() => [
                t.demo ? (P(), ve(Io(t.demo), O2(si({ key: 0 }, r.$attrs)), null, 16)) : ce('', !0),
              ]),
              _: 1,
            }),
          ])
        );
      };
    },
  });
const _7 = ie(h7, [['__scopeId', 'data-v-53516aa5']]),
  p7 = { class: 'example-source-wrapper' },
  g7 = ['innerHTML'],
  v7 = ne({
    __name: 'v-source-code',
    props: { source: { type: String, required: !0 } },
    setup(t) {
      const r = t,
        i = ke(() => decodeURIComponent(r.source));
      return (o, l) => (
        P(),
        k('div', p7, [
          M('div', { class: 'example-source language-vue', innerHTML: T(i) }, null, 8, g7),
        ])
      );
    },
  });
const m7 = ie(v7, [['__scopeId', 'data-v-712ebf92']]),
  y7 = ne({
    __name: 'v-transition',
    setup(t) {
      const r = {
        beforeEnter(i) {
          i.dataset || (i.dataset = {}),
            (i.dataset.oldPaddingTop = i.style.paddingTop),
            (i.dataset.oldPaddingBottom = i.style.paddingBottom),
            (i.style.maxHeight = 0),
            (i.style.paddingTop = 0),
            (i.style.paddingBottom = 0);
        },
        enter(i) {
          (i.dataset.oldOverflow = i.style.overflow),
            i.scrollHeight !== 0
              ? ((i.style.maxHeight = `${i.scrollHeight}px`),
                (i.style.paddingTop = i.dataset.oldPaddingTop),
                (i.style.paddingBottom = i.dataset.oldPaddingBottom))
              : ((i.style.maxHeight = 0),
                (i.style.paddingTop = i.dataset.oldPaddingTop),
                (i.style.paddingBottom = i.dataset.oldPaddingBottom)),
            (i.style.overflow = 'hidden');
        },
        afterEnter(i) {
          (i.style.maxHeight = ''), (i.style.overflow = i.dataset.oldOverflow);
        },
        beforeLeave(i) {
          i.dataset || (i.dataset = {}),
            (i.dataset.oldPaddingTop = i.style.paddingTop),
            (i.dataset.oldPaddingBottom = i.style.paddingBottom),
            (i.dataset.oldOverflow = i.style.overflow),
            (i.style.maxHeight = `${i.scrollHeight}px`),
            (i.style.overflow = 'hidden');
        },
        leave(i) {
          i.scrollHeight !== 0 &&
            ((i.style.maxHeight = 0), (i.style.paddingTop = 0), (i.style.paddingBottom = 0));
        },
        afterLeave(i) {
          (i.style.maxHeight = ''),
            (i.style.overflow = i.dataset.oldOverflow),
            (i.style.paddingTop = i.dataset.oldPaddingTop),
            (i.style.paddingBottom = i.dataset.oldPaddingBottom);
        },
      };
      return (i, o) => (
        P(),
        ve(
          vi,
          si({ name: 'collapse-transition' }, Yy(r)),
          { default: ee(() => [q(i.$slots, 'default')]), _: 3 },
          16,
        )
      );
    },
  });
const b7 = { class: 'demoblock-message-content' },
  w7 = ne({
    __name: 'v-message',
    setup(t, { expose: r }) {
      let i = 0;
      function o() {
        return 'message_' + i++;
      }
      const l = Fe([]);
      function u(d) {
        const p = o(),
          v = { name: p, ...d };
        l.value.push(v);
        const x = d.duration;
        setTimeout(() => {
          c(p);
        }, x * 1e3);
      }
      function c(d) {
        for (const [p, v] of l.value.entries())
          if (v.name === d) {
            l.value.splice(p, 1);
            break;
          }
      }
      return (
        r({ add: u, remove: c }),
        (d, p) => (
          P(),
          ve(
            J4,
            { name: 'demoblock-fade', tag: 'div', class: 'demoblock-message-wrap' },
            {
              default: ee(() => [
                (P(!0),
                k(
                  be,
                  null,
                  yt(
                    l.value,
                    (v) => (
                      P(),
                      k(
                        'div',
                        {
                          key: v.name,
                          class: Ke([
                            'demoblock-message',
                            v.type ? `demoblock-message-${v.type}` : '',
                          ]),
                        },
                        [M('div', b7, Ze(v.content), 1)],
                        2,
                      )
                    ),
                  ),
                  128,
                )),
              ]),
              _: 1,
            },
          )
        )
      );
    },
  });
const Ca = ie(w7, [['__scopeId', 'data-v-0f3abffe']]);
Ca.newInstance = (t = {}) => {
  const r = document.createElement('div'),
    l = l3({
      render() {
        return es(Ca, { ...t, ref: 'messageRef' });
      },
    }).mount(r).$refs.messageRef;
  return (
    document.body.appendChild(r.firstElementChild),
    {
      add(u) {
        l.add(u);
      },
      remove(u) {
        l.remove(u);
      },
    }
  );
};
let oa;
function x7() {
  return (oa = oa || Ca.newInstance()), oa;
}
function $d(t, { duration: r = 3, type: i = '' }) {
  x7().add({ content: t, duration: r, type: i });
}
const la = {
    info(t, r) {
      return $d(t, { ...r });
    },
    error(t, r) {
      return $d(t, { ...r, type: 'error' });
    },
  },
  C7 = ['innerHTML'],
  P7 = { class: 'example' },
  $7 = M('span', null, '隐藏源代码', -1),
  S7 = [$7],
  A7 = ne({
    __name: 'v-demo',
    props: { demos: null, source: null, path: null, rawSource: null, description: null },
    setup(t) {
      const r = t,
        i = ke(() => decodeURIComponent(r.description)),
        o = ke(() => {
          const v = {};
          return (
            Object.keys(r.demos).forEach((x) => {
              v[x.replace('../example/', '').replace('.vue', '')] = r.demos[x].default;
            }),
            v
          );
        }),
        { copy: l, isSupported: u } = I6({ source: decodeURIComponent(r.rawSource) }),
        c = async () => {
          u || la.error('复制失败');
          try {
            await l(), la.info('复制成功');
          } catch {
            la.error('复制失败');
          }
        },
        d = Fe(!1),
        p = () => {
          d.value = !d.value;
        };
      return (v, x) => {
        const $ = Kn('ClientOnly');
        return (
          P(),
          ve($, null, {
            default: ee(() => [
              M('p', { text: 'sm', innerHTML: T(i) }, null, 8, C7),
              M('div', P7, [
                W(_7, { file: t.path, demo: T(o)[t.path] }, null, 8, ['file', 'demo']),
                M('div', { class: 'op-btns' }, [
                  M('span', { class: 'op-btn', onClick: c }, '复制'),
                  M('span', { class: 'op-btn', onClick: p }, '显示源代码'),
                ]),
                W(y7, null, {
                  default: ee(() => [
                    Hf(W(m7, { source: t.source }, null, 8, ['source']), [[ad, d.value]]),
                  ]),
                  _: 1,
                }),
                W(
                  vi,
                  { name: 'fade' },
                  {
                    default: ee(() => [
                      Hf(
                        M(
                          'div',
                          { class: 'example-float-control', onClick: x[0] || (x[0] = (E) => p()) },
                          S7,
                          512,
                        ),
                        [[ad, d.value]],
                      ),
                    ]),
                    _: 1,
                  },
                ),
              ]),
            ]),
            _: 1,
          })
        );
      };
    },
  });
const T7 = (t) => (
  (t.install = (r) => {
    const i = t;
    r.component(i.name, i);
  }),
  t
);
var Ni =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {},
  mo = {},
  E7 = {
    get exports() {
      return mo;
    },
    set exports(t) {
      mo = t;
    },
  };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ (function (t, r) {
  (function () {
    var i,
      o = '4.17.21',
      l = 200,
      u = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      c = 'Expected a function',
      d = 'Invalid `variable` option passed into `_.template`',
      p = '__lodash_hash_undefined__',
      v = 500,
      x = '__lodash_placeholder__',
      $ = 1,
      E = 2,
      H = 4,
      Y = 1,
      Q = 2,
      j = 1,
      I = 2,
      D = 4,
      G = 8,
      de = 16,
      ge = 32,
      Ve = 64,
      we = 128,
      Z = 256,
      Pe = 512,
      xe = 30,
      Ne = '...',
      se = 800,
      Te = 16,
      ae = 1,
      Pt = 2,
      qe = 3,
      Ge = 1 / 0,
      Oe = 9007199254740991,
      En = 17976931348623157e292,
      Ln = 0 / 0,
      dt = 4294967295,
      Yt = dt - 1,
      os = dt >>> 1,
      No = [
        ['ary', we],
        ['bind', j],
        ['bindKey', I],
        ['curry', G],
        ['curryRight', de],
        ['flip', Pe],
        ['partial', ge],
        ['partialRight', Ve],
        ['rearg', Z],
      ],
      qn = '[object Arguments]',
      kt = '[object Array]',
      Rr = '[object AsyncFunction]',
      Gn = '[object Boolean]',
      Zt = '[object Date]',
      bi = '[object DOMException]',
      Yn = '[object Error]',
      m = '[object Function]',
      w = '[object GeneratorFunction]',
      A = '[object Map]',
      B = '[object Number]',
      N = '[object Null]',
      U = '[object Object]',
      J = '[object Promise]',
      z = '[object Proxy]',
      K = '[object RegExp]',
      V = '[object Set]',
      le = '[object String]',
      re = '[object Symbol]',
      ue = '[object Undefined]',
      he = '[object WeakMap]',
      Le = '[object WeakSet]',
      De = '[object ArrayBuffer]',
      Re = '[object DataView]',
      nt = '[object Float32Array]',
      $t = '[object Float64Array]',
      wn = '[object Int8Array]',
      Br = '[object Int16Array]',
      In = '[object Int32Array]',
      Vr = '[object Uint8Array]',
      pt = '[object Uint8ClampedArray]',
      Mt = '[object Uint16Array]',
      Nr = '[object Uint32Array]',
      Jh = /\b__p \+= '';/g,
      Qh = /\b(__p \+=) '' \+/g,
      jh = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      ja = /&(?:amp|lt|gt|quot|#39);/g,
      eu = /[&<>"']/g,
      e_ = RegExp(ja.source),
      t_ = RegExp(eu.source),
      n_ = /<%-([\s\S]+?)%>/g,
      r_ = /<%([\s\S]+?)%>/g,
      tu = /<%=([\s\S]+?)%>/g,
      i_ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      s_ = /^\w*$/,
      o_ =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      Fo = /[\\^$.*+?()[\]{}|]/g,
      l_ = RegExp(Fo.source),
      Ho = /^\s+/,
      a_ = /\s/,
      u_ = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      c_ = /\{\n\/\* \[wrapped with (.+)\] \*/,
      f_ = /,? & /,
      d_ = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      h_ = /[()=,{}\[\]\/\s]/,
      __ = /\\(\\)?/g,
      p_ = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      nu = /\w*$/,
      g_ = /^[-+]0x[0-9a-f]+$/i,
      v_ = /^0b[01]+$/i,
      m_ = /^\[object .+?Constructor\]$/,
      y_ = /^0o[0-7]+$/i,
      b_ = /^(?:0|[1-9]\d*)$/,
      w_ = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      ls = /($^)/,
      x_ = /['\n\r\u2028\u2029\\]/g,
      as = '\\ud800-\\udfff',
      C_ = '\\u0300-\\u036f',
      P_ = '\\ufe20-\\ufe2f',
      $_ = '\\u20d0-\\u20ff',
      ru = C_ + P_ + $_,
      iu = '\\u2700-\\u27bf',
      su = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      S_ = '\\xac\\xb1\\xd7\\xf7',
      A_ = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      T_ = '\\u2000-\\u206f',
      E_ =
        ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      ou = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      lu = '\\ufe0e\\ufe0f',
      au = S_ + A_ + T_ + E_,
      Do = "['’]",
      L_ = '[' + as + ']',
      uu = '[' + au + ']',
      us = '[' + ru + ']',
      cu = '\\d+',
      I_ = '[' + iu + ']',
      fu = '[' + su + ']',
      du = '[^' + as + au + cu + iu + su + ou + ']',
      Uo = '\\ud83c[\\udffb-\\udfff]',
      k_ = '(?:' + us + '|' + Uo + ')',
      hu = '[^' + as + ']',
      Wo = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      zo = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      Fr = '[' + ou + ']',
      _u = '\\u200d',
      pu = '(?:' + fu + '|' + du + ')',
      M_ = '(?:' + Fr + '|' + du + ')',
      gu = '(?:' + Do + '(?:d|ll|m|re|s|t|ve))?',
      vu = '(?:' + Do + '(?:D|LL|M|RE|S|T|VE))?',
      mu = k_ + '?',
      yu = '[' + lu + ']?',
      O_ = '(?:' + _u + '(?:' + [hu, Wo, zo].join('|') + ')' + yu + mu + ')*',
      R_ = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      B_ = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      bu = yu + mu + O_,
      V_ = '(?:' + [I_, Wo, zo].join('|') + ')' + bu,
      N_ = '(?:' + [hu + us + '?', us, Wo, zo, L_].join('|') + ')',
      F_ = RegExp(Do, 'g'),
      H_ = RegExp(us, 'g'),
      Ko = RegExp(Uo + '(?=' + Uo + ')|' + N_ + bu, 'g'),
      D_ = RegExp(
        [
          Fr + '?' + fu + '+' + gu + '(?=' + [uu, Fr, '$'].join('|') + ')',
          M_ + '+' + vu + '(?=' + [uu, Fr + pu, '$'].join('|') + ')',
          Fr + '?' + pu + '+' + gu,
          Fr + '+' + vu,
          B_,
          R_,
          cu,
          V_,
        ].join('|'),
        'g',
      ),
      U_ = RegExp('[' + _u + as + ru + lu + ']'),
      W_ = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      z_ = [
        'Array',
        'Buffer',
        'DataView',
        'Date',
        'Error',
        'Float32Array',
        'Float64Array',
        'Function',
        'Int8Array',
        'Int16Array',
        'Int32Array',
        'Map',
        'Math',
        'Object',
        'Promise',
        'RegExp',
        'Set',
        'String',
        'Symbol',
        'TypeError',
        'Uint8Array',
        'Uint8ClampedArray',
        'Uint16Array',
        'Uint32Array',
        'WeakMap',
        '_',
        'clearTimeout',
        'isFinite',
        'parseInt',
        'setTimeout',
      ],
      K_ = -1,
      je = {};
    (je[nt] = je[$t] = je[wn] = je[Br] = je[In] = je[Vr] = je[pt] = je[Mt] = je[Nr] = !0),
      (je[qn] =
        je[kt] =
        je[De] =
        je[Gn] =
        je[Re] =
        je[Zt] =
        je[Yn] =
        je[m] =
        je[A] =
        je[B] =
        je[U] =
        je[K] =
        je[V] =
        je[le] =
        je[he] =
          !1);
    var Qe = {};
    (Qe[qn] =
      Qe[kt] =
      Qe[De] =
      Qe[Re] =
      Qe[Gn] =
      Qe[Zt] =
      Qe[nt] =
      Qe[$t] =
      Qe[wn] =
      Qe[Br] =
      Qe[In] =
      Qe[A] =
      Qe[B] =
      Qe[U] =
      Qe[K] =
      Qe[V] =
      Qe[le] =
      Qe[re] =
      Qe[Vr] =
      Qe[pt] =
      Qe[Mt] =
      Qe[Nr] =
        !0),
      (Qe[Yn] = Qe[m] = Qe[he] = !1);
    var q_ = {
        À: 'A',
        Á: 'A',
        Â: 'A',
        Ã: 'A',
        Ä: 'A',
        Å: 'A',
        à: 'a',
        á: 'a',
        â: 'a',
        ã: 'a',
        ä: 'a',
        å: 'a',
        Ç: 'C',
        ç: 'c',
        Ð: 'D',
        ð: 'd',
        È: 'E',
        É: 'E',
        Ê: 'E',
        Ë: 'E',
        è: 'e',
        é: 'e',
        ê: 'e',
        ë: 'e',
        Ì: 'I',
        Í: 'I',
        Î: 'I',
        Ï: 'I',
        ì: 'i',
        í: 'i',
        î: 'i',
        ï: 'i',
        Ñ: 'N',
        ñ: 'n',
        Ò: 'O',
        Ó: 'O',
        Ô: 'O',
        Õ: 'O',
        Ö: 'O',
        Ø: 'O',
        ò: 'o',
        ó: 'o',
        ô: 'o',
        õ: 'o',
        ö: 'o',
        ø: 'o',
        Ù: 'U',
        Ú: 'U',
        Û: 'U',
        Ü: 'U',
        ù: 'u',
        ú: 'u',
        û: 'u',
        ü: 'u',
        Ý: 'Y',
        ý: 'y',
        ÿ: 'y',
        Æ: 'Ae',
        æ: 'ae',
        Þ: 'Th',
        þ: 'th',
        ß: 'ss',
        Ā: 'A',
        Ă: 'A',
        Ą: 'A',
        ā: 'a',
        ă: 'a',
        ą: 'a',
        Ć: 'C',
        Ĉ: 'C',
        Ċ: 'C',
        Č: 'C',
        ć: 'c',
        ĉ: 'c',
        ċ: 'c',
        č: 'c',
        Ď: 'D',
        Đ: 'D',
        ď: 'd',
        đ: 'd',
        Ē: 'E',
        Ĕ: 'E',
        Ė: 'E',
        Ę: 'E',
        Ě: 'E',
        ē: 'e',
        ĕ: 'e',
        ė: 'e',
        ę: 'e',
        ě: 'e',
        Ĝ: 'G',
        Ğ: 'G',
        Ġ: 'G',
        Ģ: 'G',
        ĝ: 'g',
        ğ: 'g',
        ġ: 'g',
        ģ: 'g',
        Ĥ: 'H',
        Ħ: 'H',
        ĥ: 'h',
        ħ: 'h',
        Ĩ: 'I',
        Ī: 'I',
        Ĭ: 'I',
        Į: 'I',
        İ: 'I',
        ĩ: 'i',
        ī: 'i',
        ĭ: 'i',
        į: 'i',
        ı: 'i',
        Ĵ: 'J',
        ĵ: 'j',
        Ķ: 'K',
        ķ: 'k',
        ĸ: 'k',
        Ĺ: 'L',
        Ļ: 'L',
        Ľ: 'L',
        Ŀ: 'L',
        Ł: 'L',
        ĺ: 'l',
        ļ: 'l',
        ľ: 'l',
        ŀ: 'l',
        ł: 'l',
        Ń: 'N',
        Ņ: 'N',
        Ň: 'N',
        Ŋ: 'N',
        ń: 'n',
        ņ: 'n',
        ň: 'n',
        ŋ: 'n',
        Ō: 'O',
        Ŏ: 'O',
        Ő: 'O',
        ō: 'o',
        ŏ: 'o',
        ő: 'o',
        Ŕ: 'R',
        Ŗ: 'R',
        Ř: 'R',
        ŕ: 'r',
        ŗ: 'r',
        ř: 'r',
        Ś: 'S',
        Ŝ: 'S',
        Ş: 'S',
        Š: 'S',
        ś: 's',
        ŝ: 's',
        ş: 's',
        š: 's',
        Ţ: 'T',
        Ť: 'T',
        Ŧ: 'T',
        ţ: 't',
        ť: 't',
        ŧ: 't',
        Ũ: 'U',
        Ū: 'U',
        Ŭ: 'U',
        Ů: 'U',
        Ű: 'U',
        Ų: 'U',
        ũ: 'u',
        ū: 'u',
        ŭ: 'u',
        ů: 'u',
        ű: 'u',
        ų: 'u',
        Ŵ: 'W',
        ŵ: 'w',
        Ŷ: 'Y',
        ŷ: 'y',
        Ÿ: 'Y',
        Ź: 'Z',
        Ż: 'Z',
        Ž: 'Z',
        ź: 'z',
        ż: 'z',
        ž: 'z',
        Ĳ: 'IJ',
        ĳ: 'ij',
        Œ: 'Oe',
        œ: 'oe',
        ŉ: "'n",
        ſ: 's',
      },
      G_ = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
      Y_ = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'" },
      Z_ = { '\\': '\\', "'": "'", '\n': 'n', '\r': 'r', '\u2028': 'u2028', '\u2029': 'u2029' },
      X_ = parseFloat,
      J_ = parseInt,
      wu = typeof Ni == 'object' && Ni && Ni.Object === Object && Ni,
      Q_ = typeof self == 'object' && self && self.Object === Object && self,
      gt = wu || Q_ || Function('return this')(),
      qo = r && !r.nodeType && r,
      pr = qo && !0 && t && !t.nodeType && t,
      xu = pr && pr.exports === qo,
      Go = xu && wu.process,
      Xt = (function () {
        try {
          var b = pr && pr.require && pr.require('util').types;
          return b || (Go && Go.binding && Go.binding('util'));
        } catch {}
      })(),
      Cu = Xt && Xt.isArrayBuffer,
      Pu = Xt && Xt.isDate,
      $u = Xt && Xt.isMap,
      Su = Xt && Xt.isRegExp,
      Au = Xt && Xt.isSet,
      Tu = Xt && Xt.isTypedArray;
    function Ft(b, L, S) {
      switch (S.length) {
        case 0:
          return b.call(L);
        case 1:
          return b.call(L, S[0]);
        case 2:
          return b.call(L, S[0], S[1]);
        case 3:
          return b.call(L, S[0], S[1], S[2]);
      }
      return b.apply(L, S);
    }
    function j_(b, L, S, te) {
      for (var ye = -1, ze = b == null ? 0 : b.length; ++ye < ze; ) {
        var ut = b[ye];
        L(te, ut, S(ut), b);
      }
      return te;
    }
    function Jt(b, L) {
      for (var S = -1, te = b == null ? 0 : b.length; ++S < te && L(b[S], S, b) !== !1; );
      return b;
    }
    function ep(b, L) {
      for (var S = b == null ? 0 : b.length; S-- && L(b[S], S, b) !== !1; );
      return b;
    }
    function Eu(b, L) {
      for (var S = -1, te = b == null ? 0 : b.length; ++S < te; ) if (!L(b[S], S, b)) return !1;
      return !0;
    }
    function Zn(b, L) {
      for (var S = -1, te = b == null ? 0 : b.length, ye = 0, ze = []; ++S < te; ) {
        var ut = b[S];
        L(ut, S, b) && (ze[ye++] = ut);
      }
      return ze;
    }
    function cs(b, L) {
      var S = b == null ? 0 : b.length;
      return !!S && Hr(b, L, 0) > -1;
    }
    function Yo(b, L, S) {
      for (var te = -1, ye = b == null ? 0 : b.length; ++te < ye; ) if (S(L, b[te])) return !0;
      return !1;
    }
    function rt(b, L) {
      for (var S = -1, te = b == null ? 0 : b.length, ye = Array(te); ++S < te; )
        ye[S] = L(b[S], S, b);
      return ye;
    }
    function Xn(b, L) {
      for (var S = -1, te = L.length, ye = b.length; ++S < te; ) b[ye + S] = L[S];
      return b;
    }
    function Zo(b, L, S, te) {
      var ye = -1,
        ze = b == null ? 0 : b.length;
      for (te && ze && (S = b[++ye]); ++ye < ze; ) S = L(S, b[ye], ye, b);
      return S;
    }
    function tp(b, L, S, te) {
      var ye = b == null ? 0 : b.length;
      for (te && ye && (S = b[--ye]); ye--; ) S = L(S, b[ye], ye, b);
      return S;
    }
    function Xo(b, L) {
      for (var S = -1, te = b == null ? 0 : b.length; ++S < te; ) if (L(b[S], S, b)) return !0;
      return !1;
    }
    var np = Jo('length');
    function rp(b) {
      return b.split('');
    }
    function ip(b) {
      return b.match(d_) || [];
    }
    function Lu(b, L, S) {
      var te;
      return (
        S(b, function (ye, ze, ut) {
          if (L(ye, ze, ut)) return (te = ze), !1;
        }),
        te
      );
    }
    function fs(b, L, S, te) {
      for (var ye = b.length, ze = S + (te ? 1 : -1); te ? ze-- : ++ze < ye; )
        if (L(b[ze], ze, b)) return ze;
      return -1;
    }
    function Hr(b, L, S) {
      return L === L ? gp(b, L, S) : fs(b, Iu, S);
    }
    function sp(b, L, S, te) {
      for (var ye = S - 1, ze = b.length; ++ye < ze; ) if (te(b[ye], L)) return ye;
      return -1;
    }
    function Iu(b) {
      return b !== b;
    }
    function ku(b, L) {
      var S = b == null ? 0 : b.length;
      return S ? jo(b, L) / S : Ln;
    }
    function Jo(b) {
      return function (L) {
        return L == null ? i : L[b];
      };
    }
    function Qo(b) {
      return function (L) {
        return b == null ? i : b[L];
      };
    }
    function Mu(b, L, S, te, ye) {
      return (
        ye(b, function (ze, ut, Je) {
          S = te ? ((te = !1), ze) : L(S, ze, ut, Je);
        }),
        S
      );
    }
    function op(b, L) {
      var S = b.length;
      for (b.sort(L); S--; ) b[S] = b[S].value;
      return b;
    }
    function jo(b, L) {
      for (var S, te = -1, ye = b.length; ++te < ye; ) {
        var ze = L(b[te]);
        ze !== i && (S = S === i ? ze : S + ze);
      }
      return S;
    }
    function el(b, L) {
      for (var S = -1, te = Array(b); ++S < b; ) te[S] = L(S);
      return te;
    }
    function lp(b, L) {
      return rt(L, function (S) {
        return [S, b[S]];
      });
    }
    function Ou(b) {
      return b && b.slice(0, Nu(b) + 1).replace(Ho, '');
    }
    function Ht(b) {
      return function (L) {
        return b(L);
      };
    }
    function tl(b, L) {
      return rt(L, function (S) {
        return b[S];
      });
    }
    function wi(b, L) {
      return b.has(L);
    }
    function Ru(b, L) {
      for (var S = -1, te = b.length; ++S < te && Hr(L, b[S], 0) > -1; );
      return S;
    }
    function Bu(b, L) {
      for (var S = b.length; S-- && Hr(L, b[S], 0) > -1; );
      return S;
    }
    function ap(b, L) {
      for (var S = b.length, te = 0; S--; ) b[S] === L && ++te;
      return te;
    }
    var up = Qo(q_),
      cp = Qo(G_);
    function fp(b) {
      return '\\' + Z_[b];
    }
    function dp(b, L) {
      return b == null ? i : b[L];
    }
    function Dr(b) {
      return U_.test(b);
    }
    function hp(b) {
      return W_.test(b);
    }
    function _p(b) {
      for (var L, S = []; !(L = b.next()).done; ) S.push(L.value);
      return S;
    }
    function nl(b) {
      var L = -1,
        S = Array(b.size);
      return (
        b.forEach(function (te, ye) {
          S[++L] = [ye, te];
        }),
        S
      );
    }
    function Vu(b, L) {
      return function (S) {
        return b(L(S));
      };
    }
    function Jn(b, L) {
      for (var S = -1, te = b.length, ye = 0, ze = []; ++S < te; ) {
        var ut = b[S];
        (ut === L || ut === x) && ((b[S] = x), (ze[ye++] = S));
      }
      return ze;
    }
    function ds(b) {
      var L = -1,
        S = Array(b.size);
      return (
        b.forEach(function (te) {
          S[++L] = te;
        }),
        S
      );
    }
    function pp(b) {
      var L = -1,
        S = Array(b.size);
      return (
        b.forEach(function (te) {
          S[++L] = [te, te];
        }),
        S
      );
    }
    function gp(b, L, S) {
      for (var te = S - 1, ye = b.length; ++te < ye; ) if (b[te] === L) return te;
      return -1;
    }
    function vp(b, L, S) {
      for (var te = S + 1; te--; ) if (b[te] === L) return te;
      return te;
    }
    function Ur(b) {
      return Dr(b) ? yp(b) : np(b);
    }
    function un(b) {
      return Dr(b) ? bp(b) : rp(b);
    }
    function Nu(b) {
      for (var L = b.length; L-- && a_.test(b.charAt(L)); );
      return L;
    }
    var mp = Qo(Y_);
    function yp(b) {
      for (var L = (Ko.lastIndex = 0); Ko.test(b); ) ++L;
      return L;
    }
    function bp(b) {
      return b.match(Ko) || [];
    }
    function wp(b) {
      return b.match(D_) || [];
    }
    var xp = function b(L) {
        L = L == null ? gt : Wr.defaults(gt.Object(), L, Wr.pick(gt, z_));
        var S = L.Array,
          te = L.Date,
          ye = L.Error,
          ze = L.Function,
          ut = L.Math,
          Je = L.Object,
          rl = L.RegExp,
          Cp = L.String,
          Qt = L.TypeError,
          hs = S.prototype,
          Pp = ze.prototype,
          zr = Je.prototype,
          _s = L['__core-js_shared__'],
          ps = Pp.toString,
          Xe = zr.hasOwnProperty,
          $p = 0,
          Fu = (function () {
            var e = /[^.]+$/.exec((_s && _s.keys && _s.keys.IE_PROTO) || '');
            return e ? 'Symbol(src)_1.' + e : '';
          })(),
          gs = zr.toString,
          Sp = ps.call(Je),
          Ap = gt._,
          Tp = rl(
            '^' +
              ps
                .call(Xe)
                .replace(Fo, '\\$&')
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
              '$',
          ),
          vs = xu ? L.Buffer : i,
          Qn = L.Symbol,
          ms = L.Uint8Array,
          Hu = vs ? vs.allocUnsafe : i,
          ys = Vu(Je.getPrototypeOf, Je),
          Du = Je.create,
          Uu = zr.propertyIsEnumerable,
          bs = hs.splice,
          Wu = Qn ? Qn.isConcatSpreadable : i,
          xi = Qn ? Qn.iterator : i,
          gr = Qn ? Qn.toStringTag : i,
          ws = (function () {
            try {
              var e = wr(Je, 'defineProperty');
              return e({}, '', {}), e;
            } catch {}
          })(),
          Ep = L.clearTimeout !== gt.clearTimeout && L.clearTimeout,
          Lp = te && te.now !== gt.Date.now && te.now,
          Ip = L.setTimeout !== gt.setTimeout && L.setTimeout,
          xs = ut.ceil,
          Cs = ut.floor,
          il = Je.getOwnPropertySymbols,
          kp = vs ? vs.isBuffer : i,
          zu = L.isFinite,
          Mp = hs.join,
          Op = Vu(Je.keys, Je),
          ct = ut.max,
          bt = ut.min,
          Rp = te.now,
          Bp = L.parseInt,
          Ku = ut.random,
          Vp = hs.reverse,
          sl = wr(L, 'DataView'),
          Ci = wr(L, 'Map'),
          ol = wr(L, 'Promise'),
          Kr = wr(L, 'Set'),
          Pi = wr(L, 'WeakMap'),
          $i = wr(Je, 'create'),
          Ps = Pi && new Pi(),
          qr = {},
          Np = xr(sl),
          Fp = xr(Ci),
          Hp = xr(ol),
          Dp = xr(Kr),
          Up = xr(Pi),
          $s = Qn ? Qn.prototype : i,
          Si = $s ? $s.valueOf : i,
          qu = $s ? $s.toString : i;
        function h(e) {
          if (st(e) && !Ce(e) && !(e instanceof Me)) {
            if (e instanceof jt) return e;
            if (Xe.call(e, '__wrapped__')) return Gc(e);
          }
          return new jt(e);
        }
        var Gr = (function () {
          function e() {}
          return function (n) {
            if (!it(n)) return {};
            if (Du) return Du(n);
            e.prototype = n;
            var s = new e();
            return (e.prototype = i), s;
          };
        })();
        function Ss() {}
        function jt(e, n) {
          (this.__wrapped__ = e),
            (this.__actions__ = []),
            (this.__chain__ = !!n),
            (this.__index__ = 0),
            (this.__values__ = i);
        }
        (h.templateSettings = {
          escape: n_,
          evaluate: r_,
          interpolate: tu,
          variable: '',
          imports: { _: h },
        }),
          (h.prototype = Ss.prototype),
          (h.prototype.constructor = h),
          (jt.prototype = Gr(Ss.prototype)),
          (jt.prototype.constructor = jt);
        function Me(e) {
          (this.__wrapped__ = e),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = dt),
            (this.__views__ = []);
        }
        function Wp() {
          var e = new Me(this.__wrapped__);
          return (
            (e.__actions__ = Ot(this.__actions__)),
            (e.__dir__ = this.__dir__),
            (e.__filtered__ = this.__filtered__),
            (e.__iteratees__ = Ot(this.__iteratees__)),
            (e.__takeCount__ = this.__takeCount__),
            (e.__views__ = Ot(this.__views__)),
            e
          );
        }
        function zp() {
          if (this.__filtered__) {
            var e = new Me(this);
            (e.__dir__ = -1), (e.__filtered__ = !0);
          } else (e = this.clone()), (e.__dir__ *= -1);
          return e;
        }
        function Kp() {
          var e = this.__wrapped__.value(),
            n = this.__dir__,
            s = Ce(e),
            a = n < 0,
            f = s ? e.length : 0,
            _ = r1(0, f, this.__views__),
            g = _.start,
            y = _.end,
            C = y - g,
            O = a ? y : g - 1,
            R = this.__iteratees__,
            F = R.length,
            X = 0,
            oe = bt(C, this.__takeCount__);
          if (!s || (!a && f == C && oe == C)) return gc(e, this.__actions__);
          var _e = [];
          e: for (; C-- && X < oe; ) {
            O += n;
            for (var Ae = -1, pe = e[O]; ++Ae < F; ) {
              var Ie = R[Ae],
                Be = Ie.iteratee,
                Wt = Ie.type,
                Tt = Be(pe);
              if (Wt == Pt) pe = Tt;
              else if (!Tt) {
                if (Wt == ae) continue e;
                break e;
              }
            }
            _e[X++] = pe;
          }
          return _e;
        }
        (Me.prototype = Gr(Ss.prototype)), (Me.prototype.constructor = Me);
        function vr(e) {
          var n = -1,
            s = e == null ? 0 : e.length;
          for (this.clear(); ++n < s; ) {
            var a = e[n];
            this.set(a[0], a[1]);
          }
        }
        function qp() {
          (this.__data__ = $i ? $i(null) : {}), (this.size = 0);
        }
        function Gp(e) {
          var n = this.has(e) && delete this.__data__[e];
          return (this.size -= n ? 1 : 0), n;
        }
        function Yp(e) {
          var n = this.__data__;
          if ($i) {
            var s = n[e];
            return s === p ? i : s;
          }
          return Xe.call(n, e) ? n[e] : i;
        }
        function Zp(e) {
          var n = this.__data__;
          return $i ? n[e] !== i : Xe.call(n, e);
        }
        function Xp(e, n) {
          var s = this.__data__;
          return (this.size += this.has(e) ? 0 : 1), (s[e] = $i && n === i ? p : n), this;
        }
        (vr.prototype.clear = qp),
          (vr.prototype.delete = Gp),
          (vr.prototype.get = Yp),
          (vr.prototype.has = Zp),
          (vr.prototype.set = Xp);
        function kn(e) {
          var n = -1,
            s = e == null ? 0 : e.length;
          for (this.clear(); ++n < s; ) {
            var a = e[n];
            this.set(a[0], a[1]);
          }
        }
        function Jp() {
          (this.__data__ = []), (this.size = 0);
        }
        function Qp(e) {
          var n = this.__data__,
            s = As(n, e);
          if (s < 0) return !1;
          var a = n.length - 1;
          return s == a ? n.pop() : bs.call(n, s, 1), --this.size, !0;
        }
        function jp(e) {
          var n = this.__data__,
            s = As(n, e);
          return s < 0 ? i : n[s][1];
        }
        function e0(e) {
          return As(this.__data__, e) > -1;
        }
        function t0(e, n) {
          var s = this.__data__,
            a = As(s, e);
          return a < 0 ? (++this.size, s.push([e, n])) : (s[a][1] = n), this;
        }
        (kn.prototype.clear = Jp),
          (kn.prototype.delete = Qp),
          (kn.prototype.get = jp),
          (kn.prototype.has = e0),
          (kn.prototype.set = t0);
        function Mn(e) {
          var n = -1,
            s = e == null ? 0 : e.length;
          for (this.clear(); ++n < s; ) {
            var a = e[n];
            this.set(a[0], a[1]);
          }
        }
        function n0() {
          (this.size = 0),
            (this.__data__ = { hash: new vr(), map: new (Ci || kn)(), string: new vr() });
        }
        function r0(e) {
          var n = Fs(this, e).delete(e);
          return (this.size -= n ? 1 : 0), n;
        }
        function i0(e) {
          return Fs(this, e).get(e);
        }
        function s0(e) {
          return Fs(this, e).has(e);
        }
        function o0(e, n) {
          var s = Fs(this, e),
            a = s.size;
          return s.set(e, n), (this.size += s.size == a ? 0 : 1), this;
        }
        (Mn.prototype.clear = n0),
          (Mn.prototype.delete = r0),
          (Mn.prototype.get = i0),
          (Mn.prototype.has = s0),
          (Mn.prototype.set = o0);
        function mr(e) {
          var n = -1,
            s = e == null ? 0 : e.length;
          for (this.__data__ = new Mn(); ++n < s; ) this.add(e[n]);
        }
        function l0(e) {
          return this.__data__.set(e, p), this;
        }
        function a0(e) {
          return this.__data__.has(e);
        }
        (mr.prototype.add = mr.prototype.push = l0), (mr.prototype.has = a0);
        function cn(e) {
          var n = (this.__data__ = new kn(e));
          this.size = n.size;
        }
        function u0() {
          (this.__data__ = new kn()), (this.size = 0);
        }
        function c0(e) {
          var n = this.__data__,
            s = n.delete(e);
          return (this.size = n.size), s;
        }
        function f0(e) {
          return this.__data__.get(e);
        }
        function d0(e) {
          return this.__data__.has(e);
        }
        function h0(e, n) {
          var s = this.__data__;
          if (s instanceof kn) {
            var a = s.__data__;
            if (!Ci || a.length < l - 1) return a.push([e, n]), (this.size = ++s.size), this;
            s = this.__data__ = new Mn(a);
          }
          return s.set(e, n), (this.size = s.size), this;
        }
        (cn.prototype.clear = u0),
          (cn.prototype.delete = c0),
          (cn.prototype.get = f0),
          (cn.prototype.has = d0),
          (cn.prototype.set = h0);
        function Gu(e, n) {
          var s = Ce(e),
            a = !s && Cr(e),
            f = !s && !a && rr(e),
            _ = !s && !a && !f && Jr(e),
            g = s || a || f || _,
            y = g ? el(e.length, Cp) : [],
            C = y.length;
          for (var O in e)
            (n || Xe.call(e, O)) &&
              !(
                g &&
                (O == 'length' ||
                  (f && (O == 'offset' || O == 'parent')) ||
                  (_ && (O == 'buffer' || O == 'byteLength' || O == 'byteOffset')) ||
                  Vn(O, C))
              ) &&
              y.push(O);
          return y;
        }
        function Yu(e) {
          var n = e.length;
          return n ? e[vl(0, n - 1)] : i;
        }
        function _0(e, n) {
          return Hs(Ot(e), yr(n, 0, e.length));
        }
        function p0(e) {
          return Hs(Ot(e));
        }
        function ll(e, n, s) {
          ((s !== i && !fn(e[n], s)) || (s === i && !(n in e))) && On(e, n, s);
        }
        function Ai(e, n, s) {
          var a = e[n];
          (!(Xe.call(e, n) && fn(a, s)) || (s === i && !(n in e))) && On(e, n, s);
        }
        function As(e, n) {
          for (var s = e.length; s--; ) if (fn(e[s][0], n)) return s;
          return -1;
        }
        function g0(e, n, s, a) {
          return (
            jn(e, function (f, _, g) {
              n(a, f, s(f), g);
            }),
            a
          );
        }
        function Zu(e, n) {
          return e && Cn(n, ht(n), e);
        }
        function v0(e, n) {
          return e && Cn(n, Bt(n), e);
        }
        function On(e, n, s) {
          n == '__proto__' && ws
            ? ws(e, n, { configurable: !0, enumerable: !0, value: s, writable: !0 })
            : (e[n] = s);
        }
        function al(e, n) {
          for (var s = -1, a = n.length, f = S(a), _ = e == null; ++s < a; )
            f[s] = _ ? i : Ul(e, n[s]);
          return f;
        }
        function yr(e, n, s) {
          return e === e && (s !== i && (e = e <= s ? e : s), n !== i && (e = e >= n ? e : n)), e;
        }
        function en(e, n, s, a, f, _) {
          var g,
            y = n & $,
            C = n & E,
            O = n & H;
          if ((s && (g = f ? s(e, a, f, _) : s(e)), g !== i)) return g;
          if (!it(e)) return e;
          var R = Ce(e);
          if (R) {
            if (((g = s1(e)), !y)) return Ot(e, g);
          } else {
            var F = wt(e),
              X = F == m || F == w;
            if (rr(e)) return yc(e, y);
            if (F == U || F == qn || (X && !f)) {
              if (((g = C || X ? {} : Nc(e)), !y)) return C ? Y0(e, v0(g, e)) : G0(e, Zu(g, e));
            } else {
              if (!Qe[F]) return f ? e : {};
              g = o1(e, F, y);
            }
          }
          _ || (_ = new cn());
          var oe = _.get(e);
          if (oe) return oe;
          _.set(e, g),
            _f(e)
              ? e.forEach(function (pe) {
                  g.add(en(pe, n, s, pe, e, _));
                })
              : df(e) &&
                e.forEach(function (pe, Ie) {
                  g.set(Ie, en(pe, n, s, Ie, e, _));
                });
          var _e = O ? (C ? Tl : Al) : C ? Bt : ht,
            Ae = R ? i : _e(e);
          return (
            Jt(Ae || e, function (pe, Ie) {
              Ae && ((Ie = pe), (pe = e[Ie])), Ai(g, Ie, en(pe, n, s, Ie, e, _));
            }),
            g
          );
        }
        function m0(e) {
          var n = ht(e);
          return function (s) {
            return Xu(s, e, n);
          };
        }
        function Xu(e, n, s) {
          var a = s.length;
          if (e == null) return !a;
          for (e = Je(e); a--; ) {
            var f = s[a],
              _ = n[f],
              g = e[f];
            if ((g === i && !(f in e)) || !_(g)) return !1;
          }
          return !0;
        }
        function Ju(e, n, s) {
          if (typeof e != 'function') throw new Qt(c);
          return Oi(function () {
            e.apply(i, s);
          }, n);
        }
        function Ti(e, n, s, a) {
          var f = -1,
            _ = cs,
            g = !0,
            y = e.length,
            C = [],
            O = n.length;
          if (!y) return C;
          s && (n = rt(n, Ht(s))),
            a ? ((_ = Yo), (g = !1)) : n.length >= l && ((_ = wi), (g = !1), (n = new mr(n)));
          e: for (; ++f < y; ) {
            var R = e[f],
              F = s == null ? R : s(R);
            if (((R = a || R !== 0 ? R : 0), g && F === F)) {
              for (var X = O; X--; ) if (n[X] === F) continue e;
              C.push(R);
            } else _(n, F, a) || C.push(R);
          }
          return C;
        }
        var jn = Pc(xn),
          Qu = Pc(cl, !0);
        function y0(e, n) {
          var s = !0;
          return (
            jn(e, function (a, f, _) {
              return (s = !!n(a, f, _)), s;
            }),
            s
          );
        }
        function Ts(e, n, s) {
          for (var a = -1, f = e.length; ++a < f; ) {
            var _ = e[a],
              g = n(_);
            if (g != null && (y === i ? g === g && !Ut(g) : s(g, y)))
              var y = g,
                C = _;
          }
          return C;
        }
        function b0(e, n, s, a) {
          var f = e.length;
          for (
            s = Se(s),
              s < 0 && (s = -s > f ? 0 : f + s),
              a = a === i || a > f ? f : Se(a),
              a < 0 && (a += f),
              a = s > a ? 0 : gf(a);
            s < a;

          )
            e[s++] = n;
          return e;
        }
        function ju(e, n) {
          var s = [];
          return (
            jn(e, function (a, f, _) {
              n(a, f, _) && s.push(a);
            }),
            s
          );
        }
        function vt(e, n, s, a, f) {
          var _ = -1,
            g = e.length;
          for (s || (s = a1), f || (f = []); ++_ < g; ) {
            var y = e[_];
            n > 0 && s(y) ? (n > 1 ? vt(y, n - 1, s, a, f) : Xn(f, y)) : a || (f[f.length] = y);
          }
          return f;
        }
        var ul = $c(),
          ec = $c(!0);
        function xn(e, n) {
          return e && ul(e, n, ht);
        }
        function cl(e, n) {
          return e && ec(e, n, ht);
        }
        function Es(e, n) {
          return Zn(n, function (s) {
            return Nn(e[s]);
          });
        }
        function br(e, n) {
          n = tr(n, e);
          for (var s = 0, a = n.length; e != null && s < a; ) e = e[Pn(n[s++])];
          return s && s == a ? e : i;
        }
        function tc(e, n, s) {
          var a = n(e);
          return Ce(e) ? a : Xn(a, s(e));
        }
        function St(e) {
          return e == null ? (e === i ? ue : N) : gr && gr in Je(e) ? n1(e) : p1(e);
        }
        function fl(e, n) {
          return e > n;
        }
        function w0(e, n) {
          return e != null && Xe.call(e, n);
        }
        function x0(e, n) {
          return e != null && n in Je(e);
        }
        function C0(e, n, s) {
          return e >= bt(n, s) && e < ct(n, s);
        }
        function dl(e, n, s) {
          for (
            var a = s ? Yo : cs, f = e[0].length, _ = e.length, g = _, y = S(_), C = 1 / 0, O = [];
            g--;

          ) {
            var R = e[g];
            g && n && (R = rt(R, Ht(n))),
              (C = bt(R.length, C)),
              (y[g] = !s && (n || (f >= 120 && R.length >= 120)) ? new mr(g && R) : i);
          }
          R = e[0];
          var F = -1,
            X = y[0];
          e: for (; ++F < f && O.length < C; ) {
            var oe = R[F],
              _e = n ? n(oe) : oe;
            if (((oe = s || oe !== 0 ? oe : 0), !(X ? wi(X, _e) : a(O, _e, s)))) {
              for (g = _; --g; ) {
                var Ae = y[g];
                if (!(Ae ? wi(Ae, _e) : a(e[g], _e, s))) continue e;
              }
              X && X.push(_e), O.push(oe);
            }
          }
          return O;
        }
        function P0(e, n, s, a) {
          return (
            xn(e, function (f, _, g) {
              n(a, s(f), _, g);
            }),
            a
          );
        }
        function Ei(e, n, s) {
          (n = tr(n, e)), (e = Uc(e, n));
          var a = e == null ? e : e[Pn(nn(n))];
          return a == null ? i : Ft(a, e, s);
        }
        function nc(e) {
          return st(e) && St(e) == qn;
        }
        function $0(e) {
          return st(e) && St(e) == De;
        }
        function S0(e) {
          return st(e) && St(e) == Zt;
        }
        function Li(e, n, s, a, f) {
          return e === n
            ? !0
            : e == null || n == null || (!st(e) && !st(n))
            ? e !== e && n !== n
            : A0(e, n, s, a, Li, f);
        }
        function A0(e, n, s, a, f, _) {
          var g = Ce(e),
            y = Ce(n),
            C = g ? kt : wt(e),
            O = y ? kt : wt(n);
          (C = C == qn ? U : C), (O = O == qn ? U : O);
          var R = C == U,
            F = O == U,
            X = C == O;
          if (X && rr(e)) {
            if (!rr(n)) return !1;
            (g = !0), (R = !1);
          }
          if (X && !R)
            return _ || (_ = new cn()), g || Jr(e) ? Rc(e, n, s, a, f, _) : e1(e, n, C, s, a, f, _);
          if (!(s & Y)) {
            var oe = R && Xe.call(e, '__wrapped__'),
              _e = F && Xe.call(n, '__wrapped__');
            if (oe || _e) {
              var Ae = oe ? e.value() : e,
                pe = _e ? n.value() : n;
              return _ || (_ = new cn()), f(Ae, pe, s, a, _);
            }
          }
          return X ? (_ || (_ = new cn()), t1(e, n, s, a, f, _)) : !1;
        }
        function T0(e) {
          return st(e) && wt(e) == A;
        }
        function hl(e, n, s, a) {
          var f = s.length,
            _ = f,
            g = !a;
          if (e == null) return !_;
          for (e = Je(e); f--; ) {
            var y = s[f];
            if (g && y[2] ? y[1] !== e[y[0]] : !(y[0] in e)) return !1;
          }
          for (; ++f < _; ) {
            y = s[f];
            var C = y[0],
              O = e[C],
              R = y[1];
            if (g && y[2]) {
              if (O === i && !(C in e)) return !1;
            } else {
              var F = new cn();
              if (a) var X = a(O, R, C, e, n, F);
              if (!(X === i ? Li(R, O, Y | Q, a, F) : X)) return !1;
            }
          }
          return !0;
        }
        function rc(e) {
          if (!it(e) || c1(e)) return !1;
          var n = Nn(e) ? Tp : m_;
          return n.test(xr(e));
        }
        function E0(e) {
          return st(e) && St(e) == K;
        }
        function L0(e) {
          return st(e) && wt(e) == V;
        }
        function I0(e) {
          return st(e) && qs(e.length) && !!je[St(e)];
        }
        function ic(e) {
          return typeof e == 'function'
            ? e
            : e == null
            ? Vt
            : typeof e == 'object'
            ? Ce(e)
              ? lc(e[0], e[1])
              : oc(e)
            : Af(e);
        }
        function _l(e) {
          if (!Mi(e)) return Op(e);
          var n = [];
          for (var s in Je(e)) Xe.call(e, s) && s != 'constructor' && n.push(s);
          return n;
        }
        function k0(e) {
          if (!it(e)) return _1(e);
          var n = Mi(e),
            s = [];
          for (var a in e) (a == 'constructor' && (n || !Xe.call(e, a))) || s.push(a);
          return s;
        }
        function pl(e, n) {
          return e < n;
        }
        function sc(e, n) {
          var s = -1,
            a = Rt(e) ? S(e.length) : [];
          return (
            jn(e, function (f, _, g) {
              a[++s] = n(f, _, g);
            }),
            a
          );
        }
        function oc(e) {
          var n = Ll(e);
          return n.length == 1 && n[0][2]
            ? Hc(n[0][0], n[0][1])
            : function (s) {
                return s === e || hl(s, e, n);
              };
        }
        function lc(e, n) {
          return kl(e) && Fc(n)
            ? Hc(Pn(e), n)
            : function (s) {
                var a = Ul(s, e);
                return a === i && a === n ? Wl(s, e) : Li(n, a, Y | Q);
              };
        }
        function Ls(e, n, s, a, f) {
          e !== n &&
            ul(
              n,
              function (_, g) {
                if ((f || (f = new cn()), it(_))) M0(e, n, g, s, Ls, a, f);
                else {
                  var y = a ? a(Ol(e, g), _, g + '', e, n, f) : i;
                  y === i && (y = _), ll(e, g, y);
                }
              },
              Bt,
            );
        }
        function M0(e, n, s, a, f, _, g) {
          var y = Ol(e, s),
            C = Ol(n, s),
            O = g.get(C);
          if (O) {
            ll(e, s, O);
            return;
          }
          var R = _ ? _(y, C, s + '', e, n, g) : i,
            F = R === i;
          if (F) {
            var X = Ce(C),
              oe = !X && rr(C),
              _e = !X && !oe && Jr(C);
            (R = C),
              X || oe || _e
                ? Ce(y)
                  ? (R = y)
                  : ot(y)
                  ? (R = Ot(y))
                  : oe
                  ? ((F = !1), (R = yc(C, !0)))
                  : _e
                  ? ((F = !1), (R = bc(C, !0)))
                  : (R = [])
                : Ri(C) || Cr(C)
                ? ((R = y), Cr(y) ? (R = vf(y)) : (!it(y) || Nn(y)) && (R = Nc(C)))
                : (F = !1);
          }
          F && (g.set(C, R), f(R, C, a, _, g), g.delete(C)), ll(e, s, R);
        }
        function ac(e, n) {
          var s = e.length;
          if (s) return (n += n < 0 ? s : 0), Vn(n, s) ? e[n] : i;
        }
        function uc(e, n, s) {
          n.length
            ? (n = rt(n, function (_) {
                return Ce(_)
                  ? function (g) {
                      return br(g, _.length === 1 ? _[0] : _);
                    }
                  : _;
              }))
            : (n = [Vt]);
          var a = -1;
          n = rt(n, Ht(fe()));
          var f = sc(e, function (_, g, y) {
            var C = rt(n, function (O) {
              return O(_);
            });
            return { criteria: C, index: ++a, value: _ };
          });
          return op(f, function (_, g) {
            return q0(_, g, s);
          });
        }
        function O0(e, n) {
          return cc(e, n, function (s, a) {
            return Wl(e, a);
          });
        }
        function cc(e, n, s) {
          for (var a = -1, f = n.length, _ = {}; ++a < f; ) {
            var g = n[a],
              y = br(e, g);
            s(y, g) && Ii(_, tr(g, e), y);
          }
          return _;
        }
        function R0(e) {
          return function (n) {
            return br(n, e);
          };
        }
        function gl(e, n, s, a) {
          var f = a ? sp : Hr,
            _ = -1,
            g = n.length,
            y = e;
          for (e === n && (n = Ot(n)), s && (y = rt(e, Ht(s))); ++_ < g; )
            for (var C = 0, O = n[_], R = s ? s(O) : O; (C = f(y, R, C, a)) > -1; )
              y !== e && bs.call(y, C, 1), bs.call(e, C, 1);
          return e;
        }
        function fc(e, n) {
          for (var s = e ? n.length : 0, a = s - 1; s--; ) {
            var f = n[s];
            if (s == a || f !== _) {
              var _ = f;
              Vn(f) ? bs.call(e, f, 1) : bl(e, f);
            }
          }
          return e;
        }
        function vl(e, n) {
          return e + Cs(Ku() * (n - e + 1));
        }
        function B0(e, n, s, a) {
          for (var f = -1, _ = ct(xs((n - e) / (s || 1)), 0), g = S(_); _--; )
            (g[a ? _ : ++f] = e), (e += s);
          return g;
        }
        function ml(e, n) {
          var s = '';
          if (!e || n < 1 || n > Oe) return s;
          do n % 2 && (s += e), (n = Cs(n / 2)), n && (e += e);
          while (n);
          return s;
        }
        function Ee(e, n) {
          return Rl(Dc(e, n, Vt), e + '');
        }
        function V0(e) {
          return Yu(Qr(e));
        }
        function N0(e, n) {
          var s = Qr(e);
          return Hs(s, yr(n, 0, s.length));
        }
        function Ii(e, n, s, a) {
          if (!it(e)) return e;
          n = tr(n, e);
          for (var f = -1, _ = n.length, g = _ - 1, y = e; y != null && ++f < _; ) {
            var C = Pn(n[f]),
              O = s;
            if (C === '__proto__' || C === 'constructor' || C === 'prototype') return e;
            if (f != g) {
              var R = y[C];
              (O = a ? a(R, C, y) : i), O === i && (O = it(R) ? R : Vn(n[f + 1]) ? [] : {});
            }
            Ai(y, C, O), (y = y[C]);
          }
          return e;
        }
        var dc = Ps
            ? function (e, n) {
                return Ps.set(e, n), e;
              }
            : Vt,
          F0 = ws
            ? function (e, n) {
                return ws(e, 'toString', {
                  configurable: !0,
                  enumerable: !1,
                  value: Kl(n),
                  writable: !0,
                });
              }
            : Vt;
        function H0(e) {
          return Hs(Qr(e));
        }
        function tn(e, n, s) {
          var a = -1,
            f = e.length;
          n < 0 && (n = -n > f ? 0 : f + n),
            (s = s > f ? f : s),
            s < 0 && (s += f),
            (f = n > s ? 0 : (s - n) >>> 0),
            (n >>>= 0);
          for (var _ = S(f); ++a < f; ) _[a] = e[a + n];
          return _;
        }
        function D0(e, n) {
          var s;
          return (
            jn(e, function (a, f, _) {
              return (s = n(a, f, _)), !s;
            }),
            !!s
          );
        }
        function Is(e, n, s) {
          var a = 0,
            f = e == null ? a : e.length;
          if (typeof n == 'number' && n === n && f <= os) {
            for (; a < f; ) {
              var _ = (a + f) >>> 1,
                g = e[_];
              g !== null && !Ut(g) && (s ? g <= n : g < n) ? (a = _ + 1) : (f = _);
            }
            return f;
          }
          return yl(e, n, Vt, s);
        }
        function yl(e, n, s, a) {
          var f = 0,
            _ = e == null ? 0 : e.length;
          if (_ === 0) return 0;
          n = s(n);
          for (var g = n !== n, y = n === null, C = Ut(n), O = n === i; f < _; ) {
            var R = Cs((f + _) / 2),
              F = s(e[R]),
              X = F !== i,
              oe = F === null,
              _e = F === F,
              Ae = Ut(F);
            if (g) var pe = a || _e;
            else
              O
                ? (pe = _e && (a || X))
                : y
                ? (pe = _e && X && (a || !oe))
                : C
                ? (pe = _e && X && !oe && (a || !Ae))
                : oe || Ae
                ? (pe = !1)
                : (pe = a ? F <= n : F < n);
            pe ? (f = R + 1) : (_ = R);
          }
          return bt(_, Yt);
        }
        function hc(e, n) {
          for (var s = -1, a = e.length, f = 0, _ = []; ++s < a; ) {
            var g = e[s],
              y = n ? n(g) : g;
            if (!s || !fn(y, C)) {
              var C = y;
              _[f++] = g === 0 ? 0 : g;
            }
          }
          return _;
        }
        function _c(e) {
          return typeof e == 'number' ? e : Ut(e) ? Ln : +e;
        }
        function Dt(e) {
          if (typeof e == 'string') return e;
          if (Ce(e)) return rt(e, Dt) + '';
          if (Ut(e)) return qu ? qu.call(e) : '';
          var n = e + '';
          return n == '0' && 1 / e == -Ge ? '-0' : n;
        }
        function er(e, n, s) {
          var a = -1,
            f = cs,
            _ = e.length,
            g = !0,
            y = [],
            C = y;
          if (s) (g = !1), (f = Yo);
          else if (_ >= l) {
            var O = n ? null : Q0(e);
            if (O) return ds(O);
            (g = !1), (f = wi), (C = new mr());
          } else C = n ? [] : y;
          e: for (; ++a < _; ) {
            var R = e[a],
              F = n ? n(R) : R;
            if (((R = s || R !== 0 ? R : 0), g && F === F)) {
              for (var X = C.length; X--; ) if (C[X] === F) continue e;
              n && C.push(F), y.push(R);
            } else f(C, F, s) || (C !== y && C.push(F), y.push(R));
          }
          return y;
        }
        function bl(e, n) {
          return (n = tr(n, e)), (e = Uc(e, n)), e == null || delete e[Pn(nn(n))];
        }
        function pc(e, n, s, a) {
          return Ii(e, n, s(br(e, n)), a);
        }
        function ks(e, n, s, a) {
          for (var f = e.length, _ = a ? f : -1; (a ? _-- : ++_ < f) && n(e[_], _, e); );
          return s ? tn(e, a ? 0 : _, a ? _ + 1 : f) : tn(e, a ? _ + 1 : 0, a ? f : _);
        }
        function gc(e, n) {
          var s = e;
          return (
            s instanceof Me && (s = s.value()),
            Zo(
              n,
              function (a, f) {
                return f.func.apply(f.thisArg, Xn([a], f.args));
              },
              s,
            )
          );
        }
        function wl(e, n, s) {
          var a = e.length;
          if (a < 2) return a ? er(e[0]) : [];
          for (var f = -1, _ = S(a); ++f < a; )
            for (var g = e[f], y = -1; ++y < a; ) y != f && (_[f] = Ti(_[f] || g, e[y], n, s));
          return er(vt(_, 1), n, s);
        }
        function vc(e, n, s) {
          for (var a = -1, f = e.length, _ = n.length, g = {}; ++a < f; ) {
            var y = a < _ ? n[a] : i;
            s(g, e[a], y);
          }
          return g;
        }
        function xl(e) {
          return ot(e) ? e : [];
        }
        function Cl(e) {
          return typeof e == 'function' ? e : Vt;
        }
        function tr(e, n) {
          return Ce(e) ? e : kl(e, n) ? [e] : qc(Ye(e));
        }
        var U0 = Ee;
        function nr(e, n, s) {
          var a = e.length;
          return (s = s === i ? a : s), !n && s >= a ? e : tn(e, n, s);
        }
        var mc =
          Ep ||
          function (e) {
            return gt.clearTimeout(e);
          };
        function yc(e, n) {
          if (n) return e.slice();
          var s = e.length,
            a = Hu ? Hu(s) : new e.constructor(s);
          return e.copy(a), a;
        }
        function Pl(e) {
          var n = new e.constructor(e.byteLength);
          return new ms(n).set(new ms(e)), n;
        }
        function W0(e, n) {
          var s = n ? Pl(e.buffer) : e.buffer;
          return new e.constructor(s, e.byteOffset, e.byteLength);
        }
        function z0(e) {
          var n = new e.constructor(e.source, nu.exec(e));
          return (n.lastIndex = e.lastIndex), n;
        }
        function K0(e) {
          return Si ? Je(Si.call(e)) : {};
        }
        function bc(e, n) {
          var s = n ? Pl(e.buffer) : e.buffer;
          return new e.constructor(s, e.byteOffset, e.length);
        }
        function wc(e, n) {
          if (e !== n) {
            var s = e !== i,
              a = e === null,
              f = e === e,
              _ = Ut(e),
              g = n !== i,
              y = n === null,
              C = n === n,
              O = Ut(n);
            if (
              (!y && !O && !_ && e > n) ||
              (_ && g && C && !y && !O) ||
              (a && g && C) ||
              (!s && C) ||
              !f
            )
              return 1;
            if (
              (!a && !_ && !O && e < n) ||
              (O && s && f && !a && !_) ||
              (y && s && f) ||
              (!g && f) ||
              !C
            )
              return -1;
          }
          return 0;
        }
        function q0(e, n, s) {
          for (var a = -1, f = e.criteria, _ = n.criteria, g = f.length, y = s.length; ++a < g; ) {
            var C = wc(f[a], _[a]);
            if (C) {
              if (a >= y) return C;
              var O = s[a];
              return C * (O == 'desc' ? -1 : 1);
            }
          }
          return e.index - n.index;
        }
        function xc(e, n, s, a) {
          for (
            var f = -1,
              _ = e.length,
              g = s.length,
              y = -1,
              C = n.length,
              O = ct(_ - g, 0),
              R = S(C + O),
              F = !a;
            ++y < C;

          )
            R[y] = n[y];
          for (; ++f < g; ) (F || f < _) && (R[s[f]] = e[f]);
          for (; O--; ) R[y++] = e[f++];
          return R;
        }
        function Cc(e, n, s, a) {
          for (
            var f = -1,
              _ = e.length,
              g = -1,
              y = s.length,
              C = -1,
              O = n.length,
              R = ct(_ - y, 0),
              F = S(R + O),
              X = !a;
            ++f < R;

          )
            F[f] = e[f];
          for (var oe = f; ++C < O; ) F[oe + C] = n[C];
          for (; ++g < y; ) (X || f < _) && (F[oe + s[g]] = e[f++]);
          return F;
        }
        function Ot(e, n) {
          var s = -1,
            a = e.length;
          for (n || (n = S(a)); ++s < a; ) n[s] = e[s];
          return n;
        }
        function Cn(e, n, s, a) {
          var f = !s;
          s || (s = {});
          for (var _ = -1, g = n.length; ++_ < g; ) {
            var y = n[_],
              C = a ? a(s[y], e[y], y, s, e) : i;
            C === i && (C = e[y]), f ? On(s, y, C) : Ai(s, y, C);
          }
          return s;
        }
        function G0(e, n) {
          return Cn(e, Il(e), n);
        }
        function Y0(e, n) {
          return Cn(e, Bc(e), n);
        }
        function Ms(e, n) {
          return function (s, a) {
            var f = Ce(s) ? j_ : g0,
              _ = n ? n() : {};
            return f(s, e, fe(a, 2), _);
          };
        }
        function Yr(e) {
          return Ee(function (n, s) {
            var a = -1,
              f = s.length,
              _ = f > 1 ? s[f - 1] : i,
              g = f > 2 ? s[2] : i;
            for (
              _ = e.length > 3 && typeof _ == 'function' ? (f--, _) : i,
                g && At(s[0], s[1], g) && ((_ = f < 3 ? i : _), (f = 1)),
                n = Je(n);
              ++a < f;

            ) {
              var y = s[a];
              y && e(n, y, a, _);
            }
            return n;
          });
        }
        function Pc(e, n) {
          return function (s, a) {
            if (s == null) return s;
            if (!Rt(s)) return e(s, a);
            for (
              var f = s.length, _ = n ? f : -1, g = Je(s);
              (n ? _-- : ++_ < f) && a(g[_], _, g) !== !1;

            );
            return s;
          };
        }
        function $c(e) {
          return function (n, s, a) {
            for (var f = -1, _ = Je(n), g = a(n), y = g.length; y--; ) {
              var C = g[e ? y : ++f];
              if (s(_[C], C, _) === !1) break;
            }
            return n;
          };
        }
        function Z0(e, n, s) {
          var a = n & j,
            f = ki(e);
          function _() {
            var g = this && this !== gt && this instanceof _ ? f : e;
            return g.apply(a ? s : this, arguments);
          }
          return _;
        }
        function Sc(e) {
          return function (n) {
            n = Ye(n);
            var s = Dr(n) ? un(n) : i,
              a = s ? s[0] : n.charAt(0),
              f = s ? nr(s, 1).join('') : n.slice(1);
            return a[e]() + f;
          };
        }
        function Zr(e) {
          return function (n) {
            return Zo($f(Pf(n).replace(F_, '')), e, '');
          };
        }
        function ki(e) {
          return function () {
            var n = arguments;
            switch (n.length) {
              case 0:
                return new e();
              case 1:
                return new e(n[0]);
              case 2:
                return new e(n[0], n[1]);
              case 3:
                return new e(n[0], n[1], n[2]);
              case 4:
                return new e(n[0], n[1], n[2], n[3]);
              case 5:
                return new e(n[0], n[1], n[2], n[3], n[4]);
              case 6:
                return new e(n[0], n[1], n[2], n[3], n[4], n[5]);
              case 7:
                return new e(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
            }
            var s = Gr(e.prototype),
              a = e.apply(s, n);
            return it(a) ? a : s;
          };
        }
        function X0(e, n, s) {
          var a = ki(e);
          function f() {
            for (var _ = arguments.length, g = S(_), y = _, C = Xr(f); y--; ) g[y] = arguments[y];
            var O = _ < 3 && g[0] !== C && g[_ - 1] !== C ? [] : Jn(g, C);
            if (((_ -= O.length), _ < s)) return Ic(e, n, Os, f.placeholder, i, g, O, i, i, s - _);
            var R = this && this !== gt && this instanceof f ? a : e;
            return Ft(R, this, g);
          }
          return f;
        }
        function Ac(e) {
          return function (n, s, a) {
            var f = Je(n);
            if (!Rt(n)) {
              var _ = fe(s, 3);
              (n = ht(n)),
                (s = function (y) {
                  return _(f[y], y, f);
                });
            }
            var g = e(n, s, a);
            return g > -1 ? f[_ ? n[g] : g] : i;
          };
        }
        function Tc(e) {
          return Bn(function (n) {
            var s = n.length,
              a = s,
              f = jt.prototype.thru;
            for (e && n.reverse(); a--; ) {
              var _ = n[a];
              if (typeof _ != 'function') throw new Qt(c);
              if (f && !g && Ns(_) == 'wrapper') var g = new jt([], !0);
            }
            for (a = g ? a : s; ++a < s; ) {
              _ = n[a];
              var y = Ns(_),
                C = y == 'wrapper' ? El(_) : i;
              C && Ml(C[0]) && C[1] == (we | G | ge | Z) && !C[4].length && C[9] == 1
                ? (g = g[Ns(C[0])].apply(g, C[3]))
                : (g = _.length == 1 && Ml(_) ? g[y]() : g.thru(_));
            }
            return function () {
              var O = arguments,
                R = O[0];
              if (g && O.length == 1 && Ce(R)) return g.plant(R).value();
              for (var F = 0, X = s ? n[F].apply(this, O) : R; ++F < s; ) X = n[F].call(this, X);
              return X;
            };
          });
        }
        function Os(e, n, s, a, f, _, g, y, C, O) {
          var R = n & we,
            F = n & j,
            X = n & I,
            oe = n & (G | de),
            _e = n & Pe,
            Ae = X ? i : ki(e);
          function pe() {
            for (var Ie = arguments.length, Be = S(Ie), Wt = Ie; Wt--; ) Be[Wt] = arguments[Wt];
            if (oe)
              var Tt = Xr(pe),
                zt = ap(Be, Tt);
            if (
              (a && (Be = xc(Be, a, f, oe)), _ && (Be = Cc(Be, _, g, oe)), (Ie -= zt), oe && Ie < O)
            ) {
              var lt = Jn(Be, Tt);
              return Ic(e, n, Os, pe.placeholder, s, Be, lt, y, C, O - Ie);
            }
            var dn = F ? s : this,
              Hn = X ? dn[e] : e;
            return (
              (Ie = Be.length),
              y ? (Be = g1(Be, y)) : _e && Ie > 1 && Be.reverse(),
              R && C < Ie && (Be.length = C),
              this && this !== gt && this instanceof pe && (Hn = Ae || ki(Hn)),
              Hn.apply(dn, Be)
            );
          }
          return pe;
        }
        function Ec(e, n) {
          return function (s, a) {
            return P0(s, e, n(a), {});
          };
        }
        function Rs(e, n) {
          return function (s, a) {
            var f;
            if (s === i && a === i) return n;
            if ((s !== i && (f = s), a !== i)) {
              if (f === i) return a;
              typeof s == 'string' || typeof a == 'string'
                ? ((s = Dt(s)), (a = Dt(a)))
                : ((s = _c(s)), (a = _c(a))),
                (f = e(s, a));
            }
            return f;
          };
        }
        function $l(e) {
          return Bn(function (n) {
            return (
              (n = rt(n, Ht(fe()))),
              Ee(function (s) {
                var a = this;
                return e(n, function (f) {
                  return Ft(f, a, s);
                });
              })
            );
          });
        }
        function Bs(e, n) {
          n = n === i ? ' ' : Dt(n);
          var s = n.length;
          if (s < 2) return s ? ml(n, e) : n;
          var a = ml(n, xs(e / Ur(n)));
          return Dr(n) ? nr(un(a), 0, e).join('') : a.slice(0, e);
        }
        function J0(e, n, s, a) {
          var f = n & j,
            _ = ki(e);
          function g() {
            for (
              var y = -1,
                C = arguments.length,
                O = -1,
                R = a.length,
                F = S(R + C),
                X = this && this !== gt && this instanceof g ? _ : e;
              ++O < R;

            )
              F[O] = a[O];
            for (; C--; ) F[O++] = arguments[++y];
            return Ft(X, f ? s : this, F);
          }
          return g;
        }
        function Lc(e) {
          return function (n, s, a) {
            return (
              a && typeof a != 'number' && At(n, s, a) && (s = a = i),
              (n = Fn(n)),
              s === i ? ((s = n), (n = 0)) : (s = Fn(s)),
              (a = a === i ? (n < s ? 1 : -1) : Fn(a)),
              B0(n, s, a, e)
            );
          };
        }
        function Vs(e) {
          return function (n, s) {
            return (
              (typeof n == 'string' && typeof s == 'string') || ((n = rn(n)), (s = rn(s))), e(n, s)
            );
          };
        }
        function Ic(e, n, s, a, f, _, g, y, C, O) {
          var R = n & G,
            F = R ? g : i,
            X = R ? i : g,
            oe = R ? _ : i,
            _e = R ? i : _;
          (n |= R ? ge : Ve), (n &= ~(R ? Ve : ge)), n & D || (n &= ~(j | I));
          var Ae = [e, n, f, oe, F, _e, X, y, C, O],
            pe = s.apply(i, Ae);
          return Ml(e) && Wc(pe, Ae), (pe.placeholder = a), zc(pe, e, n);
        }
        function Sl(e) {
          var n = ut[e];
          return function (s, a) {
            if (((s = rn(s)), (a = a == null ? 0 : bt(Se(a), 292)), a && zu(s))) {
              var f = (Ye(s) + 'e').split('e'),
                _ = n(f[0] + 'e' + (+f[1] + a));
              return (f = (Ye(_) + 'e').split('e')), +(f[0] + 'e' + (+f[1] - a));
            }
            return n(s);
          };
        }
        var Q0 =
          Kr && 1 / ds(new Kr([, -0]))[1] == Ge
            ? function (e) {
                return new Kr(e);
              }
            : Yl;
        function kc(e) {
          return function (n) {
            var s = wt(n);
            return s == A ? nl(n) : s == V ? pp(n) : lp(n, e(n));
          };
        }
        function Rn(e, n, s, a, f, _, g, y) {
          var C = n & I;
          if (!C && typeof e != 'function') throw new Qt(c);
          var O = a ? a.length : 0;
          if (
            (O || ((n &= ~(ge | Ve)), (a = f = i)),
            (g = g === i ? g : ct(Se(g), 0)),
            (y = y === i ? y : Se(y)),
            (O -= f ? f.length : 0),
            n & Ve)
          ) {
            var R = a,
              F = f;
            a = f = i;
          }
          var X = C ? i : El(e),
            oe = [e, n, s, a, f, R, F, _, g, y];
          if (
            (X && h1(oe, X),
            (e = oe[0]),
            (n = oe[1]),
            (s = oe[2]),
            (a = oe[3]),
            (f = oe[4]),
            (y = oe[9] = oe[9] === i ? (C ? 0 : e.length) : ct(oe[9] - O, 0)),
            !y && n & (G | de) && (n &= ~(G | de)),
            !n || n == j)
          )
            var _e = Z0(e, n, s);
          else
            n == G || n == de
              ? (_e = X0(e, n, y))
              : (n == ge || n == (j | ge)) && !f.length
              ? (_e = J0(e, n, s, a))
              : (_e = Os.apply(i, oe));
          var Ae = X ? dc : Wc;
          return zc(Ae(_e, oe), e, n);
        }
        function Mc(e, n, s, a) {
          return e === i || (fn(e, zr[s]) && !Xe.call(a, s)) ? n : e;
        }
        function Oc(e, n, s, a, f, _) {
          return it(e) && it(n) && (_.set(n, e), Ls(e, n, i, Oc, _), _.delete(n)), e;
        }
        function j0(e) {
          return Ri(e) ? i : e;
        }
        function Rc(e, n, s, a, f, _) {
          var g = s & Y,
            y = e.length,
            C = n.length;
          if (y != C && !(g && C > y)) return !1;
          var O = _.get(e),
            R = _.get(n);
          if (O && R) return O == n && R == e;
          var F = -1,
            X = !0,
            oe = s & Q ? new mr() : i;
          for (_.set(e, n), _.set(n, e); ++F < y; ) {
            var _e = e[F],
              Ae = n[F];
            if (a) var pe = g ? a(Ae, _e, F, n, e, _) : a(_e, Ae, F, e, n, _);
            if (pe !== i) {
              if (pe) continue;
              X = !1;
              break;
            }
            if (oe) {
              if (
                !Xo(n, function (Ie, Be) {
                  if (!wi(oe, Be) && (_e === Ie || f(_e, Ie, s, a, _))) return oe.push(Be);
                })
              ) {
                X = !1;
                break;
              }
            } else if (!(_e === Ae || f(_e, Ae, s, a, _))) {
              X = !1;
              break;
            }
          }
          return _.delete(e), _.delete(n), X;
        }
        function e1(e, n, s, a, f, _, g) {
          switch (s) {
            case Re:
              if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset) return !1;
              (e = e.buffer), (n = n.buffer);
            case De:
              return !(e.byteLength != n.byteLength || !_(new ms(e), new ms(n)));
            case Gn:
            case Zt:
            case B:
              return fn(+e, +n);
            case Yn:
              return e.name == n.name && e.message == n.message;
            case K:
            case le:
              return e == n + '';
            case A:
              var y = nl;
            case V:
              var C = a & Y;
              if ((y || (y = ds), e.size != n.size && !C)) return !1;
              var O = g.get(e);
              if (O) return O == n;
              (a |= Q), g.set(e, n);
              var R = Rc(y(e), y(n), a, f, _, g);
              return g.delete(e), R;
            case re:
              if (Si) return Si.call(e) == Si.call(n);
          }
          return !1;
        }
        function t1(e, n, s, a, f, _) {
          var g = s & Y,
            y = Al(e),
            C = y.length,
            O = Al(n),
            R = O.length;
          if (C != R && !g) return !1;
          for (var F = C; F--; ) {
            var X = y[F];
            if (!(g ? X in n : Xe.call(n, X))) return !1;
          }
          var oe = _.get(e),
            _e = _.get(n);
          if (oe && _e) return oe == n && _e == e;
          var Ae = !0;
          _.set(e, n), _.set(n, e);
          for (var pe = g; ++F < C; ) {
            X = y[F];
            var Ie = e[X],
              Be = n[X];
            if (a) var Wt = g ? a(Be, Ie, X, n, e, _) : a(Ie, Be, X, e, n, _);
            if (!(Wt === i ? Ie === Be || f(Ie, Be, s, a, _) : Wt)) {
              Ae = !1;
              break;
            }
            pe || (pe = X == 'constructor');
          }
          if (Ae && !pe) {
            var Tt = e.constructor,
              zt = n.constructor;
            Tt != zt &&
              'constructor' in e &&
              'constructor' in n &&
              !(
                typeof Tt == 'function' &&
                Tt instanceof Tt &&
                typeof zt == 'function' &&
                zt instanceof zt
              ) &&
              (Ae = !1);
          }
          return _.delete(e), _.delete(n), Ae;
        }
        function Bn(e) {
          return Rl(Dc(e, i, Xc), e + '');
        }
        function Al(e) {
          return tc(e, ht, Il);
        }
        function Tl(e) {
          return tc(e, Bt, Bc);
        }
        var El = Ps
          ? function (e) {
              return Ps.get(e);
            }
          : Yl;
        function Ns(e) {
          for (var n = e.name + '', s = qr[n], a = Xe.call(qr, n) ? s.length : 0; a--; ) {
            var f = s[a],
              _ = f.func;
            if (_ == null || _ == e) return f.name;
          }
          return n;
        }
        function Xr(e) {
          var n = Xe.call(h, 'placeholder') ? h : e;
          return n.placeholder;
        }
        function fe() {
          var e = h.iteratee || ql;
          return (e = e === ql ? ic : e), arguments.length ? e(arguments[0], arguments[1]) : e;
        }
        function Fs(e, n) {
          var s = e.__data__;
          return u1(n) ? s[typeof n == 'string' ? 'string' : 'hash'] : s.map;
        }
        function Ll(e) {
          for (var n = ht(e), s = n.length; s--; ) {
            var a = n[s],
              f = e[a];
            n[s] = [a, f, Fc(f)];
          }
          return n;
        }
        function wr(e, n) {
          var s = dp(e, n);
          return rc(s) ? s : i;
        }
        function n1(e) {
          var n = Xe.call(e, gr),
            s = e[gr];
          try {
            e[gr] = i;
            var a = !0;
          } catch {}
          var f = gs.call(e);
          return a && (n ? (e[gr] = s) : delete e[gr]), f;
        }
        var Il = il
            ? function (e) {
                return e == null
                  ? []
                  : ((e = Je(e)),
                    Zn(il(e), function (n) {
                      return Uu.call(e, n);
                    }));
              }
            : Zl,
          Bc = il
            ? function (e) {
                for (var n = []; e; ) Xn(n, Il(e)), (e = ys(e));
                return n;
              }
            : Zl,
          wt = St;
        ((sl && wt(new sl(new ArrayBuffer(1))) != Re) ||
          (Ci && wt(new Ci()) != A) ||
          (ol && wt(ol.resolve()) != J) ||
          (Kr && wt(new Kr()) != V) ||
          (Pi && wt(new Pi()) != he)) &&
          (wt = function (e) {
            var n = St(e),
              s = n == U ? e.constructor : i,
              a = s ? xr(s) : '';
            if (a)
              switch (a) {
                case Np:
                  return Re;
                case Fp:
                  return A;
                case Hp:
                  return J;
                case Dp:
                  return V;
                case Up:
                  return he;
              }
            return n;
          });
        function r1(e, n, s) {
          for (var a = -1, f = s.length; ++a < f; ) {
            var _ = s[a],
              g = _.size;
            switch (_.type) {
              case 'drop':
                e += g;
                break;
              case 'dropRight':
                n -= g;
                break;
              case 'take':
                n = bt(n, e + g);
                break;
              case 'takeRight':
                e = ct(e, n - g);
                break;
            }
          }
          return { start: e, end: n };
        }
        function i1(e) {
          var n = e.match(c_);
          return n ? n[1].split(f_) : [];
        }
        function Vc(e, n, s) {
          n = tr(n, e);
          for (var a = -1, f = n.length, _ = !1; ++a < f; ) {
            var g = Pn(n[a]);
            if (!(_ = e != null && s(e, g))) break;
            e = e[g];
          }
          return _ || ++a != f
            ? _
            : ((f = e == null ? 0 : e.length), !!f && qs(f) && Vn(g, f) && (Ce(e) || Cr(e)));
        }
        function s1(e) {
          var n = e.length,
            s = new e.constructor(n);
          return (
            n &&
              typeof e[0] == 'string' &&
              Xe.call(e, 'index') &&
              ((s.index = e.index), (s.input = e.input)),
            s
          );
        }
        function Nc(e) {
          return typeof e.constructor == 'function' && !Mi(e) ? Gr(ys(e)) : {};
        }
        function o1(e, n, s) {
          var a = e.constructor;
          switch (n) {
            case De:
              return Pl(e);
            case Gn:
            case Zt:
              return new a(+e);
            case Re:
              return W0(e, s);
            case nt:
            case $t:
            case wn:
            case Br:
            case In:
            case Vr:
            case pt:
            case Mt:
            case Nr:
              return bc(e, s);
            case A:
              return new a();
            case B:
            case le:
              return new a(e);
            case K:
              return z0(e);
            case V:
              return new a();
            case re:
              return K0(e);
          }
        }
        function l1(e, n) {
          var s = n.length;
          if (!s) return e;
          var a = s - 1;
          return (
            (n[a] = (s > 1 ? '& ' : '') + n[a]),
            (n = n.join(s > 2 ? ', ' : ' ')),
            e.replace(
              u_,
              `{
/* [wrapped with ` +
                n +
                `] */
`,
            )
          );
        }
        function a1(e) {
          return Ce(e) || Cr(e) || !!(Wu && e && e[Wu]);
        }
        function Vn(e, n) {
          var s = typeof e;
          return (
            (n = n ?? Oe),
            !!n && (s == 'number' || (s != 'symbol' && b_.test(e))) && e > -1 && e % 1 == 0 && e < n
          );
        }
        function At(e, n, s) {
          if (!it(s)) return !1;
          var a = typeof n;
          return (a == 'number' ? Rt(s) && Vn(n, s.length) : a == 'string' && n in s)
            ? fn(s[n], e)
            : !1;
        }
        function kl(e, n) {
          if (Ce(e)) return !1;
          var s = typeof e;
          return s == 'number' || s == 'symbol' || s == 'boolean' || e == null || Ut(e)
            ? !0
            : s_.test(e) || !i_.test(e) || (n != null && e in Je(n));
        }
        function u1(e) {
          var n = typeof e;
          return n == 'string' || n == 'number' || n == 'symbol' || n == 'boolean'
            ? e !== '__proto__'
            : e === null;
        }
        function Ml(e) {
          var n = Ns(e),
            s = h[n];
          if (typeof s != 'function' || !(n in Me.prototype)) return !1;
          if (e === s) return !0;
          var a = El(s);
          return !!a && e === a[0];
        }
        function c1(e) {
          return !!Fu && Fu in e;
        }
        var f1 = _s ? Nn : Xl;
        function Mi(e) {
          var n = e && e.constructor,
            s = (typeof n == 'function' && n.prototype) || zr;
          return e === s;
        }
        function Fc(e) {
          return e === e && !it(e);
        }
        function Hc(e, n) {
          return function (s) {
            return s == null ? !1 : s[e] === n && (n !== i || e in Je(s));
          };
        }
        function d1(e) {
          var n = zs(e, function (a) {
              return s.size === v && s.clear(), a;
            }),
            s = n.cache;
          return n;
        }
        function h1(e, n) {
          var s = e[1],
            a = n[1],
            f = s | a,
            _ = f < (j | I | we),
            g =
              (a == we && s == G) ||
              (a == we && s == Z && e[7].length <= n[8]) ||
              (a == (we | Z) && n[7].length <= n[8] && s == G);
          if (!(_ || g)) return e;
          a & j && ((e[2] = n[2]), (f |= s & j ? 0 : D));
          var y = n[3];
          if (y) {
            var C = e[3];
            (e[3] = C ? xc(C, y, n[4]) : y), (e[4] = C ? Jn(e[3], x) : n[4]);
          }
          return (
            (y = n[5]),
            y && ((C = e[5]), (e[5] = C ? Cc(C, y, n[6]) : y), (e[6] = C ? Jn(e[5], x) : n[6])),
            (y = n[7]),
            y && (e[7] = y),
            a & we && (e[8] = e[8] == null ? n[8] : bt(e[8], n[8])),
            e[9] == null && (e[9] = n[9]),
            (e[0] = n[0]),
            (e[1] = f),
            e
          );
        }
        function _1(e) {
          var n = [];
          if (e != null) for (var s in Je(e)) n.push(s);
          return n;
        }
        function p1(e) {
          return gs.call(e);
        }
        function Dc(e, n, s) {
          return (
            (n = ct(n === i ? e.length - 1 : n, 0)),
            function () {
              for (var a = arguments, f = -1, _ = ct(a.length - n, 0), g = S(_); ++f < _; )
                g[f] = a[n + f];
              f = -1;
              for (var y = S(n + 1); ++f < n; ) y[f] = a[f];
              return (y[n] = s(g)), Ft(e, this, y);
            }
          );
        }
        function Uc(e, n) {
          return n.length < 2 ? e : br(e, tn(n, 0, -1));
        }
        function g1(e, n) {
          for (var s = e.length, a = bt(n.length, s), f = Ot(e); a--; ) {
            var _ = n[a];
            e[a] = Vn(_, s) ? f[_] : i;
          }
          return e;
        }
        function Ol(e, n) {
          if (!(n === 'constructor' && typeof e[n] == 'function') && n != '__proto__') return e[n];
        }
        var Wc = Kc(dc),
          Oi =
            Ip ||
            function (e, n) {
              return gt.setTimeout(e, n);
            },
          Rl = Kc(F0);
        function zc(e, n, s) {
          var a = n + '';
          return Rl(e, l1(a, v1(i1(a), s)));
        }
        function Kc(e) {
          var n = 0,
            s = 0;
          return function () {
            var a = Rp(),
              f = Te - (a - s);
            if (((s = a), f > 0)) {
              if (++n >= se) return arguments[0];
            } else n = 0;
            return e.apply(i, arguments);
          };
        }
        function Hs(e, n) {
          var s = -1,
            a = e.length,
            f = a - 1;
          for (n = n === i ? a : n; ++s < n; ) {
            var _ = vl(s, f),
              g = e[_];
            (e[_] = e[s]), (e[s] = g);
          }
          return (e.length = n), e;
        }
        var qc = d1(function (e) {
          var n = [];
          return (
            e.charCodeAt(0) === 46 && n.push(''),
            e.replace(o_, function (s, a, f, _) {
              n.push(f ? _.replace(__, '$1') : a || s);
            }),
            n
          );
        });
        function Pn(e) {
          if (typeof e == 'string' || Ut(e)) return e;
          var n = e + '';
          return n == '0' && 1 / e == -Ge ? '-0' : n;
        }
        function xr(e) {
          if (e != null) {
            try {
              return ps.call(e);
            } catch {}
            try {
              return e + '';
            } catch {}
          }
          return '';
        }
        function v1(e, n) {
          return (
            Jt(No, function (s) {
              var a = '_.' + s[0];
              n & s[1] && !cs(e, a) && e.push(a);
            }),
            e.sort()
          );
        }
        function Gc(e) {
          if (e instanceof Me) return e.clone();
          var n = new jt(e.__wrapped__, e.__chain__);
          return (
            (n.__actions__ = Ot(e.__actions__)),
            (n.__index__ = e.__index__),
            (n.__values__ = e.__values__),
            n
          );
        }
        function m1(e, n, s) {
          (s ? At(e, n, s) : n === i) ? (n = 1) : (n = ct(Se(n), 0));
          var a = e == null ? 0 : e.length;
          if (!a || n < 1) return [];
          for (var f = 0, _ = 0, g = S(xs(a / n)); f < a; ) g[_++] = tn(e, f, (f += n));
          return g;
        }
        function y1(e) {
          for (var n = -1, s = e == null ? 0 : e.length, a = 0, f = []; ++n < s; ) {
            var _ = e[n];
            _ && (f[a++] = _);
          }
          return f;
        }
        function b1() {
          var e = arguments.length;
          if (!e) return [];
          for (var n = S(e - 1), s = arguments[0], a = e; a--; ) n[a - 1] = arguments[a];
          return Xn(Ce(s) ? Ot(s) : [s], vt(n, 1));
        }
        var w1 = Ee(function (e, n) {
            return ot(e) ? Ti(e, vt(n, 1, ot, !0)) : [];
          }),
          x1 = Ee(function (e, n) {
            var s = nn(n);
            return ot(s) && (s = i), ot(e) ? Ti(e, vt(n, 1, ot, !0), fe(s, 2)) : [];
          }),
          C1 = Ee(function (e, n) {
            var s = nn(n);
            return ot(s) && (s = i), ot(e) ? Ti(e, vt(n, 1, ot, !0), i, s) : [];
          });
        function P1(e, n, s) {
          var a = e == null ? 0 : e.length;
          return a ? ((n = s || n === i ? 1 : Se(n)), tn(e, n < 0 ? 0 : n, a)) : [];
        }
        function $1(e, n, s) {
          var a = e == null ? 0 : e.length;
          return a ? ((n = s || n === i ? 1 : Se(n)), (n = a - n), tn(e, 0, n < 0 ? 0 : n)) : [];
        }
        function S1(e, n) {
          return e && e.length ? ks(e, fe(n, 3), !0, !0) : [];
        }
        function A1(e, n) {
          return e && e.length ? ks(e, fe(n, 3), !0) : [];
        }
        function T1(e, n, s, a) {
          var f = e == null ? 0 : e.length;
          return f
            ? (s && typeof s != 'number' && At(e, n, s) && ((s = 0), (a = f)), b0(e, n, s, a))
            : [];
        }
        function Yc(e, n, s) {
          var a = e == null ? 0 : e.length;
          if (!a) return -1;
          var f = s == null ? 0 : Se(s);
          return f < 0 && (f = ct(a + f, 0)), fs(e, fe(n, 3), f);
        }
        function Zc(e, n, s) {
          var a = e == null ? 0 : e.length;
          if (!a) return -1;
          var f = a - 1;
          return (
            s !== i && ((f = Se(s)), (f = s < 0 ? ct(a + f, 0) : bt(f, a - 1))),
            fs(e, fe(n, 3), f, !0)
          );
        }
        function Xc(e) {
          var n = e == null ? 0 : e.length;
          return n ? vt(e, 1) : [];
        }
        function E1(e) {
          var n = e == null ? 0 : e.length;
          return n ? vt(e, Ge) : [];
        }
        function L1(e, n) {
          var s = e == null ? 0 : e.length;
          return s ? ((n = n === i ? 1 : Se(n)), vt(e, n)) : [];
        }
        function I1(e) {
          for (var n = -1, s = e == null ? 0 : e.length, a = {}; ++n < s; ) {
            var f = e[n];
            a[f[0]] = f[1];
          }
          return a;
        }
        function Jc(e) {
          return e && e.length ? e[0] : i;
        }
        function k1(e, n, s) {
          var a = e == null ? 0 : e.length;
          if (!a) return -1;
          var f = s == null ? 0 : Se(s);
          return f < 0 && (f = ct(a + f, 0)), Hr(e, n, f);
        }
        function M1(e) {
          var n = e == null ? 0 : e.length;
          return n ? tn(e, 0, -1) : [];
        }
        var O1 = Ee(function (e) {
            var n = rt(e, xl);
            return n.length && n[0] === e[0] ? dl(n) : [];
          }),
          R1 = Ee(function (e) {
            var n = nn(e),
              s = rt(e, xl);
            return (
              n === nn(s) ? (n = i) : s.pop(), s.length && s[0] === e[0] ? dl(s, fe(n, 2)) : []
            );
          }),
          B1 = Ee(function (e) {
            var n = nn(e),
              s = rt(e, xl);
            return (
              (n = typeof n == 'function' ? n : i),
              n && s.pop(),
              s.length && s[0] === e[0] ? dl(s, i, n) : []
            );
          });
        function V1(e, n) {
          return e == null ? '' : Mp.call(e, n);
        }
        function nn(e) {
          var n = e == null ? 0 : e.length;
          return n ? e[n - 1] : i;
        }
        function N1(e, n, s) {
          var a = e == null ? 0 : e.length;
          if (!a) return -1;
          var f = a;
          return (
            s !== i && ((f = Se(s)), (f = f < 0 ? ct(a + f, 0) : bt(f, a - 1))),
            n === n ? vp(e, n, f) : fs(e, Iu, f, !0)
          );
        }
        function F1(e, n) {
          return e && e.length ? ac(e, Se(n)) : i;
        }
        var H1 = Ee(Qc);
        function Qc(e, n) {
          return e && e.length && n && n.length ? gl(e, n) : e;
        }
        function D1(e, n, s) {
          return e && e.length && n && n.length ? gl(e, n, fe(s, 2)) : e;
        }
        function U1(e, n, s) {
          return e && e.length && n && n.length ? gl(e, n, i, s) : e;
        }
        var W1 = Bn(function (e, n) {
          var s = e == null ? 0 : e.length,
            a = al(e, n);
          return (
            fc(
              e,
              rt(n, function (f) {
                return Vn(f, s) ? +f : f;
              }).sort(wc),
            ),
            a
          );
        });
        function z1(e, n) {
          var s = [];
          if (!(e && e.length)) return s;
          var a = -1,
            f = [],
            _ = e.length;
          for (n = fe(n, 3); ++a < _; ) {
            var g = e[a];
            n(g, a, e) && (s.push(g), f.push(a));
          }
          return fc(e, f), s;
        }
        function Bl(e) {
          return e == null ? e : Vp.call(e);
        }
        function K1(e, n, s) {
          var a = e == null ? 0 : e.length;
          return a
            ? (s && typeof s != 'number' && At(e, n, s)
                ? ((n = 0), (s = a))
                : ((n = n == null ? 0 : Se(n)), (s = s === i ? a : Se(s))),
              tn(e, n, s))
            : [];
        }
        function q1(e, n) {
          return Is(e, n);
        }
        function G1(e, n, s) {
          return yl(e, n, fe(s, 2));
        }
        function Y1(e, n) {
          var s = e == null ? 0 : e.length;
          if (s) {
            var a = Is(e, n);
            if (a < s && fn(e[a], n)) return a;
          }
          return -1;
        }
        function Z1(e, n) {
          return Is(e, n, !0);
        }
        function X1(e, n, s) {
          return yl(e, n, fe(s, 2), !0);
        }
        function J1(e, n) {
          var s = e == null ? 0 : e.length;
          if (s) {
            var a = Is(e, n, !0) - 1;
            if (fn(e[a], n)) return a;
          }
          return -1;
        }
        function Q1(e) {
          return e && e.length ? hc(e) : [];
        }
        function j1(e, n) {
          return e && e.length ? hc(e, fe(n, 2)) : [];
        }
        function eg(e) {
          var n = e == null ? 0 : e.length;
          return n ? tn(e, 1, n) : [];
        }
        function tg(e, n, s) {
          return e && e.length ? ((n = s || n === i ? 1 : Se(n)), tn(e, 0, n < 0 ? 0 : n)) : [];
        }
        function ng(e, n, s) {
          var a = e == null ? 0 : e.length;
          return a ? ((n = s || n === i ? 1 : Se(n)), (n = a - n), tn(e, n < 0 ? 0 : n, a)) : [];
        }
        function rg(e, n) {
          return e && e.length ? ks(e, fe(n, 3), !1, !0) : [];
        }
        function ig(e, n) {
          return e && e.length ? ks(e, fe(n, 3)) : [];
        }
        var sg = Ee(function (e) {
            return er(vt(e, 1, ot, !0));
          }),
          og = Ee(function (e) {
            var n = nn(e);
            return ot(n) && (n = i), er(vt(e, 1, ot, !0), fe(n, 2));
          }),
          lg = Ee(function (e) {
            var n = nn(e);
            return (n = typeof n == 'function' ? n : i), er(vt(e, 1, ot, !0), i, n);
          });
        function ag(e) {
          return e && e.length ? er(e) : [];
        }
        function ug(e, n) {
          return e && e.length ? er(e, fe(n, 2)) : [];
        }
        function cg(e, n) {
          return (n = typeof n == 'function' ? n : i), e && e.length ? er(e, i, n) : [];
        }
        function Vl(e) {
          if (!(e && e.length)) return [];
          var n = 0;
          return (
            (e = Zn(e, function (s) {
              if (ot(s)) return (n = ct(s.length, n)), !0;
            })),
            el(n, function (s) {
              return rt(e, Jo(s));
            })
          );
        }
        function jc(e, n) {
          if (!(e && e.length)) return [];
          var s = Vl(e);
          return n == null
            ? s
            : rt(s, function (a) {
                return Ft(n, i, a);
              });
        }
        var fg = Ee(function (e, n) {
            return ot(e) ? Ti(e, n) : [];
          }),
          dg = Ee(function (e) {
            return wl(Zn(e, ot));
          }),
          hg = Ee(function (e) {
            var n = nn(e);
            return ot(n) && (n = i), wl(Zn(e, ot), fe(n, 2));
          }),
          _g = Ee(function (e) {
            var n = nn(e);
            return (n = typeof n == 'function' ? n : i), wl(Zn(e, ot), i, n);
          }),
          pg = Ee(Vl);
        function gg(e, n) {
          return vc(e || [], n || [], Ai);
        }
        function vg(e, n) {
          return vc(e || [], n || [], Ii);
        }
        var mg = Ee(function (e) {
          var n = e.length,
            s = n > 1 ? e[n - 1] : i;
          return (s = typeof s == 'function' ? (e.pop(), s) : i), jc(e, s);
        });
        function ef(e) {
          var n = h(e);
          return (n.__chain__ = !0), n;
        }
        function yg(e, n) {
          return n(e), e;
        }
        function Ds(e, n) {
          return n(e);
        }
        var bg = Bn(function (e) {
          var n = e.length,
            s = n ? e[0] : 0,
            a = this.__wrapped__,
            f = function (_) {
              return al(_, e);
            };
          return n > 1 || this.__actions__.length || !(a instanceof Me) || !Vn(s)
            ? this.thru(f)
            : ((a = a.slice(s, +s + (n ? 1 : 0))),
              a.__actions__.push({ func: Ds, args: [f], thisArg: i }),
              new jt(a, this.__chain__).thru(function (_) {
                return n && !_.length && _.push(i), _;
              }));
        });
        function wg() {
          return ef(this);
        }
        function xg() {
          return new jt(this.value(), this.__chain__);
        }
        function Cg() {
          this.__values__ === i && (this.__values__ = pf(this.value()));
          var e = this.__index__ >= this.__values__.length,
            n = e ? i : this.__values__[this.__index__++];
          return { done: e, value: n };
        }
        function Pg() {
          return this;
        }
        function $g(e) {
          for (var n, s = this; s instanceof Ss; ) {
            var a = Gc(s);
            (a.__index__ = 0), (a.__values__ = i), n ? (f.__wrapped__ = a) : (n = a);
            var f = a;
            s = s.__wrapped__;
          }
          return (f.__wrapped__ = e), n;
        }
        function Sg() {
          var e = this.__wrapped__;
          if (e instanceof Me) {
            var n = e;
            return (
              this.__actions__.length && (n = new Me(this)),
              (n = n.reverse()),
              n.__actions__.push({ func: Ds, args: [Bl], thisArg: i }),
              new jt(n, this.__chain__)
            );
          }
          return this.thru(Bl);
        }
        function Ag() {
          return gc(this.__wrapped__, this.__actions__);
        }
        var Tg = Ms(function (e, n, s) {
          Xe.call(e, s) ? ++e[s] : On(e, s, 1);
        });
        function Eg(e, n, s) {
          var a = Ce(e) ? Eu : y0;
          return s && At(e, n, s) && (n = i), a(e, fe(n, 3));
        }
        function Lg(e, n) {
          var s = Ce(e) ? Zn : ju;
          return s(e, fe(n, 3));
        }
        var Ig = Ac(Yc),
          kg = Ac(Zc);
        function Mg(e, n) {
          return vt(Us(e, n), 1);
        }
        function Og(e, n) {
          return vt(Us(e, n), Ge);
        }
        function Rg(e, n, s) {
          return (s = s === i ? 1 : Se(s)), vt(Us(e, n), s);
        }
        function tf(e, n) {
          var s = Ce(e) ? Jt : jn;
          return s(e, fe(n, 3));
        }
        function nf(e, n) {
          var s = Ce(e) ? ep : Qu;
          return s(e, fe(n, 3));
        }
        var Bg = Ms(function (e, n, s) {
          Xe.call(e, s) ? e[s].push(n) : On(e, s, [n]);
        });
        function Vg(e, n, s, a) {
          (e = Rt(e) ? e : Qr(e)), (s = s && !a ? Se(s) : 0);
          var f = e.length;
          return (
            s < 0 && (s = ct(f + s, 0)),
            Gs(e) ? s <= f && e.indexOf(n, s) > -1 : !!f && Hr(e, n, s) > -1
          );
        }
        var Ng = Ee(function (e, n, s) {
            var a = -1,
              f = typeof n == 'function',
              _ = Rt(e) ? S(e.length) : [];
            return (
              jn(e, function (g) {
                _[++a] = f ? Ft(n, g, s) : Ei(g, n, s);
              }),
              _
            );
          }),
          Fg = Ms(function (e, n, s) {
            On(e, s, n);
          });
        function Us(e, n) {
          var s = Ce(e) ? rt : sc;
          return s(e, fe(n, 3));
        }
        function Hg(e, n, s, a) {
          return e == null
            ? []
            : (Ce(n) || (n = n == null ? [] : [n]),
              (s = a ? i : s),
              Ce(s) || (s = s == null ? [] : [s]),
              uc(e, n, s));
        }
        var Dg = Ms(
          function (e, n, s) {
            e[s ? 0 : 1].push(n);
          },
          function () {
            return [[], []];
          },
        );
        function Ug(e, n, s) {
          var a = Ce(e) ? Zo : Mu,
            f = arguments.length < 3;
          return a(e, fe(n, 4), s, f, jn);
        }
        function Wg(e, n, s) {
          var a = Ce(e) ? tp : Mu,
            f = arguments.length < 3;
          return a(e, fe(n, 4), s, f, Qu);
        }
        function zg(e, n) {
          var s = Ce(e) ? Zn : ju;
          return s(e, Ks(fe(n, 3)));
        }
        function Kg(e) {
          var n = Ce(e) ? Yu : V0;
          return n(e);
        }
        function qg(e, n, s) {
          (s ? At(e, n, s) : n === i) ? (n = 1) : (n = Se(n));
          var a = Ce(e) ? _0 : N0;
          return a(e, n);
        }
        function Gg(e) {
          var n = Ce(e) ? p0 : H0;
          return n(e);
        }
        function Yg(e) {
          if (e == null) return 0;
          if (Rt(e)) return Gs(e) ? Ur(e) : e.length;
          var n = wt(e);
          return n == A || n == V ? e.size : _l(e).length;
        }
        function Zg(e, n, s) {
          var a = Ce(e) ? Xo : D0;
          return s && At(e, n, s) && (n = i), a(e, fe(n, 3));
        }
        var Xg = Ee(function (e, n) {
            if (e == null) return [];
            var s = n.length;
            return (
              s > 1 && At(e, n[0], n[1]) ? (n = []) : s > 2 && At(n[0], n[1], n[2]) && (n = [n[0]]),
              uc(e, vt(n, 1), [])
            );
          }),
          Ws =
            Lp ||
            function () {
              return gt.Date.now();
            };
        function Jg(e, n) {
          if (typeof n != 'function') throw new Qt(c);
          return (
            (e = Se(e)),
            function () {
              if (--e < 1) return n.apply(this, arguments);
            }
          );
        }
        function rf(e, n, s) {
          return (n = s ? i : n), (n = e && n == null ? e.length : n), Rn(e, we, i, i, i, i, n);
        }
        function sf(e, n) {
          var s;
          if (typeof n != 'function') throw new Qt(c);
          return (
            (e = Se(e)),
            function () {
              return --e > 0 && (s = n.apply(this, arguments)), e <= 1 && (n = i), s;
            }
          );
        }
        var Nl = Ee(function (e, n, s) {
            var a = j;
            if (s.length) {
              var f = Jn(s, Xr(Nl));
              a |= ge;
            }
            return Rn(e, a, n, s, f);
          }),
          of = Ee(function (e, n, s) {
            var a = j | I;
            if (s.length) {
              var f = Jn(s, Xr(of));
              a |= ge;
            }
            return Rn(n, a, e, s, f);
          });
        function lf(e, n, s) {
          n = s ? i : n;
          var a = Rn(e, G, i, i, i, i, i, n);
          return (a.placeholder = lf.placeholder), a;
        }
        function af(e, n, s) {
          n = s ? i : n;
          var a = Rn(e, de, i, i, i, i, i, n);
          return (a.placeholder = af.placeholder), a;
        }
        function uf(e, n, s) {
          var a,
            f,
            _,
            g,
            y,
            C,
            O = 0,
            R = !1,
            F = !1,
            X = !0;
          if (typeof e != 'function') throw new Qt(c);
          (n = rn(n) || 0),
            it(s) &&
              ((R = !!s.leading),
              (F = 'maxWait' in s),
              (_ = F ? ct(rn(s.maxWait) || 0, n) : _),
              (X = 'trailing' in s ? !!s.trailing : X));
          function oe(lt) {
            var dn = a,
              Hn = f;
            return (a = f = i), (O = lt), (g = e.apply(Hn, dn)), g;
          }
          function _e(lt) {
            return (O = lt), (y = Oi(Ie, n)), R ? oe(lt) : g;
          }
          function Ae(lt) {
            var dn = lt - C,
              Hn = lt - O,
              Tf = n - dn;
            return F ? bt(Tf, _ - Hn) : Tf;
          }
          function pe(lt) {
            var dn = lt - C,
              Hn = lt - O;
            return C === i || dn >= n || dn < 0 || (F && Hn >= _);
          }
          function Ie() {
            var lt = Ws();
            if (pe(lt)) return Be(lt);
            y = Oi(Ie, Ae(lt));
          }
          function Be(lt) {
            return (y = i), X && a ? oe(lt) : ((a = f = i), g);
          }
          function Wt() {
            y !== i && mc(y), (O = 0), (a = C = f = y = i);
          }
          function Tt() {
            return y === i ? g : Be(Ws());
          }
          function zt() {
            var lt = Ws(),
              dn = pe(lt);
            if (((a = arguments), (f = this), (C = lt), dn)) {
              if (y === i) return _e(C);
              if (F) return mc(y), (y = Oi(Ie, n)), oe(C);
            }
            return y === i && (y = Oi(Ie, n)), g;
          }
          return (zt.cancel = Wt), (zt.flush = Tt), zt;
        }
        var Qg = Ee(function (e, n) {
            return Ju(e, 1, n);
          }),
          jg = Ee(function (e, n, s) {
            return Ju(e, rn(n) || 0, s);
          });
        function ev(e) {
          return Rn(e, Pe);
        }
        function zs(e, n) {
          if (typeof e != 'function' || (n != null && typeof n != 'function')) throw new Qt(c);
          var s = function () {
            var a = arguments,
              f = n ? n.apply(this, a) : a[0],
              _ = s.cache;
            if (_.has(f)) return _.get(f);
            var g = e.apply(this, a);
            return (s.cache = _.set(f, g) || _), g;
          };
          return (s.cache = new (zs.Cache || Mn)()), s;
        }
        zs.Cache = Mn;
        function Ks(e) {
          if (typeof e != 'function') throw new Qt(c);
          return function () {
            var n = arguments;
            switch (n.length) {
              case 0:
                return !e.call(this);
              case 1:
                return !e.call(this, n[0]);
              case 2:
                return !e.call(this, n[0], n[1]);
              case 3:
                return !e.call(this, n[0], n[1], n[2]);
            }
            return !e.apply(this, n);
          };
        }
        function tv(e) {
          return sf(2, e);
        }
        var nv = U0(function (e, n) {
            n = n.length == 1 && Ce(n[0]) ? rt(n[0], Ht(fe())) : rt(vt(n, 1), Ht(fe()));
            var s = n.length;
            return Ee(function (a) {
              for (var f = -1, _ = bt(a.length, s); ++f < _; ) a[f] = n[f].call(this, a[f]);
              return Ft(e, this, a);
            });
          }),
          Fl = Ee(function (e, n) {
            var s = Jn(n, Xr(Fl));
            return Rn(e, ge, i, n, s);
          }),
          cf = Ee(function (e, n) {
            var s = Jn(n, Xr(cf));
            return Rn(e, Ve, i, n, s);
          }),
          rv = Bn(function (e, n) {
            return Rn(e, Z, i, i, i, n);
          });
        function iv(e, n) {
          if (typeof e != 'function') throw new Qt(c);
          return (n = n === i ? n : Se(n)), Ee(e, n);
        }
        function sv(e, n) {
          if (typeof e != 'function') throw new Qt(c);
          return (
            (n = n == null ? 0 : ct(Se(n), 0)),
            Ee(function (s) {
              var a = s[n],
                f = nr(s, 0, n);
              return a && Xn(f, a), Ft(e, this, f);
            })
          );
        }
        function ov(e, n, s) {
          var a = !0,
            f = !0;
          if (typeof e != 'function') throw new Qt(c);
          return (
            it(s) &&
              ((a = 'leading' in s ? !!s.leading : a), (f = 'trailing' in s ? !!s.trailing : f)),
            uf(e, n, { leading: a, maxWait: n, trailing: f })
          );
        }
        function lv(e) {
          return rf(e, 1);
        }
        function av(e, n) {
          return Fl(Cl(n), e);
        }
        function uv() {
          if (!arguments.length) return [];
          var e = arguments[0];
          return Ce(e) ? e : [e];
        }
        function cv(e) {
          return en(e, H);
        }
        function fv(e, n) {
          return (n = typeof n == 'function' ? n : i), en(e, H, n);
        }
        function dv(e) {
          return en(e, $ | H);
        }
        function hv(e, n) {
          return (n = typeof n == 'function' ? n : i), en(e, $ | H, n);
        }
        function _v(e, n) {
          return n == null || Xu(e, n, ht(n));
        }
        function fn(e, n) {
          return e === n || (e !== e && n !== n);
        }
        var pv = Vs(fl),
          gv = Vs(function (e, n) {
            return e >= n;
          }),
          Cr = nc(
            (function () {
              return arguments;
            })(),
          )
            ? nc
            : function (e) {
                return st(e) && Xe.call(e, 'callee') && !Uu.call(e, 'callee');
              },
          Ce = S.isArray,
          vv = Cu ? Ht(Cu) : $0;
        function Rt(e) {
          return e != null && qs(e.length) && !Nn(e);
        }
        function ot(e) {
          return st(e) && Rt(e);
        }
        function mv(e) {
          return e === !0 || e === !1 || (st(e) && St(e) == Gn);
        }
        var rr = kp || Xl,
          yv = Pu ? Ht(Pu) : S0;
        function bv(e) {
          return st(e) && e.nodeType === 1 && !Ri(e);
        }
        function wv(e) {
          if (e == null) return !0;
          if (
            Rt(e) &&
            (Ce(e) ||
              typeof e == 'string' ||
              typeof e.splice == 'function' ||
              rr(e) ||
              Jr(e) ||
              Cr(e))
          )
            return !e.length;
          var n = wt(e);
          if (n == A || n == V) return !e.size;
          if (Mi(e)) return !_l(e).length;
          for (var s in e) if (Xe.call(e, s)) return !1;
          return !0;
        }
        function xv(e, n) {
          return Li(e, n);
        }
        function Cv(e, n, s) {
          s = typeof s == 'function' ? s : i;
          var a = s ? s(e, n) : i;
          return a === i ? Li(e, n, i, s) : !!a;
        }
        function Hl(e) {
          if (!st(e)) return !1;
          var n = St(e);
          return (
            n == Yn ||
            n == bi ||
            (typeof e.message == 'string' && typeof e.name == 'string' && !Ri(e))
          );
        }
        function Pv(e) {
          return typeof e == 'number' && zu(e);
        }
        function Nn(e) {
          if (!it(e)) return !1;
          var n = St(e);
          return n == m || n == w || n == Rr || n == z;
        }
        function ff(e) {
          return typeof e == 'number' && e == Se(e);
        }
        function qs(e) {
          return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= Oe;
        }
        function it(e) {
          var n = typeof e;
          return e != null && (n == 'object' || n == 'function');
        }
        function st(e) {
          return e != null && typeof e == 'object';
        }
        var df = $u ? Ht($u) : T0;
        function $v(e, n) {
          return e === n || hl(e, n, Ll(n));
        }
        function Sv(e, n, s) {
          return (s = typeof s == 'function' ? s : i), hl(e, n, Ll(n), s);
        }
        function Av(e) {
          return hf(e) && e != +e;
        }
        function Tv(e) {
          if (f1(e)) throw new ye(u);
          return rc(e);
        }
        function Ev(e) {
          return e === null;
        }
        function Lv(e) {
          return e == null;
        }
        function hf(e) {
          return typeof e == 'number' || (st(e) && St(e) == B);
        }
        function Ri(e) {
          if (!st(e) || St(e) != U) return !1;
          var n = ys(e);
          if (n === null) return !0;
          var s = Xe.call(n, 'constructor') && n.constructor;
          return typeof s == 'function' && s instanceof s && ps.call(s) == Sp;
        }
        var Dl = Su ? Ht(Su) : E0;
        function Iv(e) {
          return ff(e) && e >= -Oe && e <= Oe;
        }
        var _f = Au ? Ht(Au) : L0;
        function Gs(e) {
          return typeof e == 'string' || (!Ce(e) && st(e) && St(e) == le);
        }
        function Ut(e) {
          return typeof e == 'symbol' || (st(e) && St(e) == re);
        }
        var Jr = Tu ? Ht(Tu) : I0;
        function kv(e) {
          return e === i;
        }
        function Mv(e) {
          return st(e) && wt(e) == he;
        }
        function Ov(e) {
          return st(e) && St(e) == Le;
        }
        var Rv = Vs(pl),
          Bv = Vs(function (e, n) {
            return e <= n;
          });
        function pf(e) {
          if (!e) return [];
          if (Rt(e)) return Gs(e) ? un(e) : Ot(e);
          if (xi && e[xi]) return _p(e[xi]());
          var n = wt(e),
            s = n == A ? nl : n == V ? ds : Qr;
          return s(e);
        }
        function Fn(e) {
          if (!e) return e === 0 ? e : 0;
          if (((e = rn(e)), e === Ge || e === -Ge)) {
            var n = e < 0 ? -1 : 1;
            return n * En;
          }
          return e === e ? e : 0;
        }
        function Se(e) {
          var n = Fn(e),
            s = n % 1;
          return n === n ? (s ? n - s : n) : 0;
        }
        function gf(e) {
          return e ? yr(Se(e), 0, dt) : 0;
        }
        function rn(e) {
          if (typeof e == 'number') return e;
          if (Ut(e)) return Ln;
          if (it(e)) {
            var n = typeof e.valueOf == 'function' ? e.valueOf() : e;
            e = it(n) ? n + '' : n;
          }
          if (typeof e != 'string') return e === 0 ? e : +e;
          e = Ou(e);
          var s = v_.test(e);
          return s || y_.test(e) ? J_(e.slice(2), s ? 2 : 8) : g_.test(e) ? Ln : +e;
        }
        function vf(e) {
          return Cn(e, Bt(e));
        }
        function Vv(e) {
          return e ? yr(Se(e), -Oe, Oe) : e === 0 ? e : 0;
        }
        function Ye(e) {
          return e == null ? '' : Dt(e);
        }
        var Nv = Yr(function (e, n) {
            if (Mi(n) || Rt(n)) {
              Cn(n, ht(n), e);
              return;
            }
            for (var s in n) Xe.call(n, s) && Ai(e, s, n[s]);
          }),
          mf = Yr(function (e, n) {
            Cn(n, Bt(n), e);
          }),
          Ys = Yr(function (e, n, s, a) {
            Cn(n, Bt(n), e, a);
          }),
          Fv = Yr(function (e, n, s, a) {
            Cn(n, ht(n), e, a);
          }),
          Hv = Bn(al);
        function Dv(e, n) {
          var s = Gr(e);
          return n == null ? s : Zu(s, n);
        }
        var Uv = Ee(function (e, n) {
            e = Je(e);
            var s = -1,
              a = n.length,
              f = a > 2 ? n[2] : i;
            for (f && At(n[0], n[1], f) && (a = 1); ++s < a; )
              for (var _ = n[s], g = Bt(_), y = -1, C = g.length; ++y < C; ) {
                var O = g[y],
                  R = e[O];
                (R === i || (fn(R, zr[O]) && !Xe.call(e, O))) && (e[O] = _[O]);
              }
            return e;
          }),
          Wv = Ee(function (e) {
            return e.push(i, Oc), Ft(yf, i, e);
          });
        function zv(e, n) {
          return Lu(e, fe(n, 3), xn);
        }
        function Kv(e, n) {
          return Lu(e, fe(n, 3), cl);
        }
        function qv(e, n) {
          return e == null ? e : ul(e, fe(n, 3), Bt);
        }
        function Gv(e, n) {
          return e == null ? e : ec(e, fe(n, 3), Bt);
        }
        function Yv(e, n) {
          return e && xn(e, fe(n, 3));
        }
        function Zv(e, n) {
          return e && cl(e, fe(n, 3));
        }
        function Xv(e) {
          return e == null ? [] : Es(e, ht(e));
        }
        function Jv(e) {
          return e == null ? [] : Es(e, Bt(e));
        }
        function Ul(e, n, s) {
          var a = e == null ? i : br(e, n);
          return a === i ? s : a;
        }
        function Qv(e, n) {
          return e != null && Vc(e, n, w0);
        }
        function Wl(e, n) {
          return e != null && Vc(e, n, x0);
        }
        var jv = Ec(function (e, n, s) {
            n != null && typeof n.toString != 'function' && (n = gs.call(n)), (e[n] = s);
          }, Kl(Vt)),
          em = Ec(function (e, n, s) {
            n != null && typeof n.toString != 'function' && (n = gs.call(n)),
              Xe.call(e, n) ? e[n].push(s) : (e[n] = [s]);
          }, fe),
          tm = Ee(Ei);
        function ht(e) {
          return Rt(e) ? Gu(e) : _l(e);
        }
        function Bt(e) {
          return Rt(e) ? Gu(e, !0) : k0(e);
        }
        function nm(e, n) {
          var s = {};
          return (
            (n = fe(n, 3)),
            xn(e, function (a, f, _) {
              On(s, n(a, f, _), a);
            }),
            s
          );
        }
        function rm(e, n) {
          var s = {};
          return (
            (n = fe(n, 3)),
            xn(e, function (a, f, _) {
              On(s, f, n(a, f, _));
            }),
            s
          );
        }
        var im = Yr(function (e, n, s) {
            Ls(e, n, s);
          }),
          yf = Yr(function (e, n, s, a) {
            Ls(e, n, s, a);
          }),
          sm = Bn(function (e, n) {
            var s = {};
            if (e == null) return s;
            var a = !1;
            (n = rt(n, function (_) {
              return (_ = tr(_, e)), a || (a = _.length > 1), _;
            })),
              Cn(e, Tl(e), s),
              a && (s = en(s, $ | E | H, j0));
            for (var f = n.length; f--; ) bl(s, n[f]);
            return s;
          });
        function om(e, n) {
          return bf(e, Ks(fe(n)));
        }
        var lm = Bn(function (e, n) {
          return e == null ? {} : O0(e, n);
        });
        function bf(e, n) {
          if (e == null) return {};
          var s = rt(Tl(e), function (a) {
            return [a];
          });
          return (
            (n = fe(n)),
            cc(e, s, function (a, f) {
              return n(a, f[0]);
            })
          );
        }
        function am(e, n, s) {
          n = tr(n, e);
          var a = -1,
            f = n.length;
          for (f || ((f = 1), (e = i)); ++a < f; ) {
            var _ = e == null ? i : e[Pn(n[a])];
            _ === i && ((a = f), (_ = s)), (e = Nn(_) ? _.call(e) : _);
          }
          return e;
        }
        function um(e, n, s) {
          return e == null ? e : Ii(e, n, s);
        }
        function cm(e, n, s, a) {
          return (a = typeof a == 'function' ? a : i), e == null ? e : Ii(e, n, s, a);
        }
        var wf = kc(ht),
          xf = kc(Bt);
        function fm(e, n, s) {
          var a = Ce(e),
            f = a || rr(e) || Jr(e);
          if (((n = fe(n, 4)), s == null)) {
            var _ = e && e.constructor;
            f ? (s = a ? new _() : []) : it(e) ? (s = Nn(_) ? Gr(ys(e)) : {}) : (s = {});
          }
          return (
            (f ? Jt : xn)(e, function (g, y, C) {
              return n(s, g, y, C);
            }),
            s
          );
        }
        function dm(e, n) {
          return e == null ? !0 : bl(e, n);
        }
        function hm(e, n, s) {
          return e == null ? e : pc(e, n, Cl(s));
        }
        function _m(e, n, s, a) {
          return (a = typeof a == 'function' ? a : i), e == null ? e : pc(e, n, Cl(s), a);
        }
        function Qr(e) {
          return e == null ? [] : tl(e, ht(e));
        }
        function pm(e) {
          return e == null ? [] : tl(e, Bt(e));
        }
        function gm(e, n, s) {
          return (
            s === i && ((s = n), (n = i)),
            s !== i && ((s = rn(s)), (s = s === s ? s : 0)),
            n !== i && ((n = rn(n)), (n = n === n ? n : 0)),
            yr(rn(e), n, s)
          );
        }
        function vm(e, n, s) {
          return (n = Fn(n)), s === i ? ((s = n), (n = 0)) : (s = Fn(s)), (e = rn(e)), C0(e, n, s);
        }
        function mm(e, n, s) {
          if (
            (s && typeof s != 'boolean' && At(e, n, s) && (n = s = i),
            s === i &&
              (typeof n == 'boolean'
                ? ((s = n), (n = i))
                : typeof e == 'boolean' && ((s = e), (e = i))),
            e === i && n === i
              ? ((e = 0), (n = 1))
              : ((e = Fn(e)), n === i ? ((n = e), (e = 0)) : (n = Fn(n))),
            e > n)
          ) {
            var a = e;
            (e = n), (n = a);
          }
          if (s || e % 1 || n % 1) {
            var f = Ku();
            return bt(e + f * (n - e + X_('1e-' + ((f + '').length - 1))), n);
          }
          return vl(e, n);
        }
        var ym = Zr(function (e, n, s) {
          return (n = n.toLowerCase()), e + (s ? Cf(n) : n);
        });
        function Cf(e) {
          return zl(Ye(e).toLowerCase());
        }
        function Pf(e) {
          return (e = Ye(e)), e && e.replace(w_, up).replace(H_, '');
        }
        function bm(e, n, s) {
          (e = Ye(e)), (n = Dt(n));
          var a = e.length;
          s = s === i ? a : yr(Se(s), 0, a);
          var f = s;
          return (s -= n.length), s >= 0 && e.slice(s, f) == n;
        }
        function wm(e) {
          return (e = Ye(e)), e && t_.test(e) ? e.replace(eu, cp) : e;
        }
        function xm(e) {
          return (e = Ye(e)), e && l_.test(e) ? e.replace(Fo, '\\$&') : e;
        }
        var Cm = Zr(function (e, n, s) {
            return e + (s ? '-' : '') + n.toLowerCase();
          }),
          Pm = Zr(function (e, n, s) {
            return e + (s ? ' ' : '') + n.toLowerCase();
          }),
          $m = Sc('toLowerCase');
        function Sm(e, n, s) {
          (e = Ye(e)), (n = Se(n));
          var a = n ? Ur(e) : 0;
          if (!n || a >= n) return e;
          var f = (n - a) / 2;
          return Bs(Cs(f), s) + e + Bs(xs(f), s);
        }
        function Am(e, n, s) {
          (e = Ye(e)), (n = Se(n));
          var a = n ? Ur(e) : 0;
          return n && a < n ? e + Bs(n - a, s) : e;
        }
        function Tm(e, n, s) {
          (e = Ye(e)), (n = Se(n));
          var a = n ? Ur(e) : 0;
          return n && a < n ? Bs(n - a, s) + e : e;
        }
        function Em(e, n, s) {
          return s || n == null ? (n = 0) : n && (n = +n), Bp(Ye(e).replace(Ho, ''), n || 0);
        }
        function Lm(e, n, s) {
          return (s ? At(e, n, s) : n === i) ? (n = 1) : (n = Se(n)), ml(Ye(e), n);
        }
        function Im() {
          var e = arguments,
            n = Ye(e[0]);
          return e.length < 3 ? n : n.replace(e[1], e[2]);
        }
        var km = Zr(function (e, n, s) {
          return e + (s ? '_' : '') + n.toLowerCase();
        });
        function Mm(e, n, s) {
          return (
            s && typeof s != 'number' && At(e, n, s) && (n = s = i),
            (s = s === i ? dt : s >>> 0),
            s
              ? ((e = Ye(e)),
                e && (typeof n == 'string' || (n != null && !Dl(n))) && ((n = Dt(n)), !n && Dr(e))
                  ? nr(un(e), 0, s)
                  : e.split(n, s))
              : []
          );
        }
        var Om = Zr(function (e, n, s) {
          return e + (s ? ' ' : '') + zl(n);
        });
        function Rm(e, n, s) {
          return (
            (e = Ye(e)),
            (s = s == null ? 0 : yr(Se(s), 0, e.length)),
            (n = Dt(n)),
            e.slice(s, s + n.length) == n
          );
        }
        function Bm(e, n, s) {
          var a = h.templateSettings;
          s && At(e, n, s) && (n = i), (e = Ye(e)), (n = Ys({}, n, a, Mc));
          var f = Ys({}, n.imports, a.imports, Mc),
            _ = ht(f),
            g = tl(f, _),
            y,
            C,
            O = 0,
            R = n.interpolate || ls,
            F = "__p += '",
            X = rl(
              (n.escape || ls).source +
                '|' +
                R.source +
                '|' +
                (R === tu ? p_ : ls).source +
                '|' +
                (n.evaluate || ls).source +
                '|$',
              'g',
            ),
            oe =
              '//# sourceURL=' +
              (Xe.call(n, 'sourceURL')
                ? (n.sourceURL + '').replace(/\s/g, ' ')
                : 'lodash.templateSources[' + ++K_ + ']') +
              `
`;
          e.replace(X, function (pe, Ie, Be, Wt, Tt, zt) {
            return (
              Be || (Be = Wt),
              (F += e.slice(O, zt).replace(x_, fp)),
              Ie &&
                ((y = !0),
                (F +=
                  `' +
__e(` +
                  Ie +
                  `) +
'`)),
              Tt &&
                ((C = !0),
                (F +=
                  `';
` +
                  Tt +
                  `;
__p += '`)),
              Be &&
                (F +=
                  `' +
((__t = (` +
                  Be +
                  `)) == null ? '' : __t) +
'`),
              (O = zt + pe.length),
              pe
            );
          }),
            (F += `';
`);
          var _e = Xe.call(n, 'variable') && n.variable;
          if (!_e)
            F =
              `with (obj) {
` +
              F +
              `
}
`;
          else if (h_.test(_e)) throw new ye(d);
          (F = (C ? F.replace(Jh, '') : F).replace(Qh, '$1').replace(jh, '$1;')),
            (F =
              'function(' +
              (_e || 'obj') +
              `) {
` +
              (_e
                ? ''
                : `obj || (obj = {});
`) +
              "var __t, __p = ''" +
              (y ? ', __e = _.escape' : '') +
              (C
                ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                : `;
`) +
              F +
              `return __p
}`);
          var Ae = Sf(function () {
            return ze(_, oe + 'return ' + F).apply(i, g);
          });
          if (((Ae.source = F), Hl(Ae))) throw Ae;
          return Ae;
        }
        function Vm(e) {
          return Ye(e).toLowerCase();
        }
        function Nm(e) {
          return Ye(e).toUpperCase();
        }
        function Fm(e, n, s) {
          if (((e = Ye(e)), e && (s || n === i))) return Ou(e);
          if (!e || !(n = Dt(n))) return e;
          var a = un(e),
            f = un(n),
            _ = Ru(a, f),
            g = Bu(a, f) + 1;
          return nr(a, _, g).join('');
        }
        function Hm(e, n, s) {
          if (((e = Ye(e)), e && (s || n === i))) return e.slice(0, Nu(e) + 1);
          if (!e || !(n = Dt(n))) return e;
          var a = un(e),
            f = Bu(a, un(n)) + 1;
          return nr(a, 0, f).join('');
        }
        function Dm(e, n, s) {
          if (((e = Ye(e)), e && (s || n === i))) return e.replace(Ho, '');
          if (!e || !(n = Dt(n))) return e;
          var a = un(e),
            f = Ru(a, un(n));
          return nr(a, f).join('');
        }
        function Um(e, n) {
          var s = xe,
            a = Ne;
          if (it(n)) {
            var f = 'separator' in n ? n.separator : f;
            (s = 'length' in n ? Se(n.length) : s), (a = 'omission' in n ? Dt(n.omission) : a);
          }
          e = Ye(e);
          var _ = e.length;
          if (Dr(e)) {
            var g = un(e);
            _ = g.length;
          }
          if (s >= _) return e;
          var y = s - Ur(a);
          if (y < 1) return a;
          var C = g ? nr(g, 0, y).join('') : e.slice(0, y);
          if (f === i) return C + a;
          if ((g && (y += C.length - y), Dl(f))) {
            if (e.slice(y).search(f)) {
              var O,
                R = C;
              for (
                f.global || (f = rl(f.source, Ye(nu.exec(f)) + 'g')), f.lastIndex = 0;
                (O = f.exec(R));

              )
                var F = O.index;
              C = C.slice(0, F === i ? y : F);
            }
          } else if (e.indexOf(Dt(f), y) != y) {
            var X = C.lastIndexOf(f);
            X > -1 && (C = C.slice(0, X));
          }
          return C + a;
        }
        function Wm(e) {
          return (e = Ye(e)), e && e_.test(e) ? e.replace(ja, mp) : e;
        }
        var zm = Zr(function (e, n, s) {
            return e + (s ? ' ' : '') + n.toUpperCase();
          }),
          zl = Sc('toUpperCase');
        function $f(e, n, s) {
          return (e = Ye(e)), (n = s ? i : n), n === i ? (hp(e) ? wp(e) : ip(e)) : e.match(n) || [];
        }
        var Sf = Ee(function (e, n) {
            try {
              return Ft(e, i, n);
            } catch (s) {
              return Hl(s) ? s : new ye(s);
            }
          }),
          Km = Bn(function (e, n) {
            return (
              Jt(n, function (s) {
                (s = Pn(s)), On(e, s, Nl(e[s], e));
              }),
              e
            );
          });
        function qm(e) {
          var n = e == null ? 0 : e.length,
            s = fe();
          return (
            (e = n
              ? rt(e, function (a) {
                  if (typeof a[1] != 'function') throw new Qt(c);
                  return [s(a[0]), a[1]];
                })
              : []),
            Ee(function (a) {
              for (var f = -1; ++f < n; ) {
                var _ = e[f];
                if (Ft(_[0], this, a)) return Ft(_[1], this, a);
              }
            })
          );
        }
        function Gm(e) {
          return m0(en(e, $));
        }
        function Kl(e) {
          return function () {
            return e;
          };
        }
        function Ym(e, n) {
          return e == null || e !== e ? n : e;
        }
        var Zm = Tc(),
          Xm = Tc(!0);
        function Vt(e) {
          return e;
        }
        function ql(e) {
          return ic(typeof e == 'function' ? e : en(e, $));
        }
        function Jm(e) {
          return oc(en(e, $));
        }
        function Qm(e, n) {
          return lc(e, en(n, $));
        }
        var jm = Ee(function (e, n) {
            return function (s) {
              return Ei(s, e, n);
            };
          }),
          e2 = Ee(function (e, n) {
            return function (s) {
              return Ei(e, s, n);
            };
          });
        function Gl(e, n, s) {
          var a = ht(n),
            f = Es(n, a);
          s == null &&
            !(it(n) && (f.length || !a.length)) &&
            ((s = n), (n = e), (e = this), (f = Es(n, ht(n))));
          var _ = !(it(s) && 'chain' in s) || !!s.chain,
            g = Nn(e);
          return (
            Jt(f, function (y) {
              var C = n[y];
              (e[y] = C),
                g &&
                  (e.prototype[y] = function () {
                    var O = this.__chain__;
                    if (_ || O) {
                      var R = e(this.__wrapped__),
                        F = (R.__actions__ = Ot(this.__actions__));
                      return F.push({ func: C, args: arguments, thisArg: e }), (R.__chain__ = O), R;
                    }
                    return C.apply(e, Xn([this.value()], arguments));
                  });
            }),
            e
          );
        }
        function t2() {
          return gt._ === this && (gt._ = Ap), this;
        }
        function Yl() {}
        function n2(e) {
          return (
            (e = Se(e)),
            Ee(function (n) {
              return ac(n, e);
            })
          );
        }
        var r2 = $l(rt),
          i2 = $l(Eu),
          s2 = $l(Xo);
        function Af(e) {
          return kl(e) ? Jo(Pn(e)) : R0(e);
        }
        function o2(e) {
          return function (n) {
            return e == null ? i : br(e, n);
          };
        }
        var l2 = Lc(),
          a2 = Lc(!0);
        function Zl() {
          return [];
        }
        function Xl() {
          return !1;
        }
        function u2() {
          return {};
        }
        function c2() {
          return '';
        }
        function f2() {
          return !0;
        }
        function d2(e, n) {
          if (((e = Se(e)), e < 1 || e > Oe)) return [];
          var s = dt,
            a = bt(e, dt);
          (n = fe(n)), (e -= dt);
          for (var f = el(a, n); ++s < e; ) n(s);
          return f;
        }
        function h2(e) {
          return Ce(e) ? rt(e, Pn) : Ut(e) ? [e] : Ot(qc(Ye(e)));
        }
        function _2(e) {
          var n = ++$p;
          return Ye(e) + n;
        }
        var p2 = Rs(function (e, n) {
            return e + n;
          }, 0),
          g2 = Sl('ceil'),
          v2 = Rs(function (e, n) {
            return e / n;
          }, 1),
          m2 = Sl('floor');
        function y2(e) {
          return e && e.length ? Ts(e, Vt, fl) : i;
        }
        function b2(e, n) {
          return e && e.length ? Ts(e, fe(n, 2), fl) : i;
        }
        function w2(e) {
          return ku(e, Vt);
        }
        function x2(e, n) {
          return ku(e, fe(n, 2));
        }
        function C2(e) {
          return e && e.length ? Ts(e, Vt, pl) : i;
        }
        function P2(e, n) {
          return e && e.length ? Ts(e, fe(n, 2), pl) : i;
        }
        var $2 = Rs(function (e, n) {
            return e * n;
          }, 1),
          S2 = Sl('round'),
          A2 = Rs(function (e, n) {
            return e - n;
          }, 0);
        function T2(e) {
          return e && e.length ? jo(e, Vt) : 0;
        }
        function E2(e, n) {
          return e && e.length ? jo(e, fe(n, 2)) : 0;
        }
        return (
          (h.after = Jg),
          (h.ary = rf),
          (h.assign = Nv),
          (h.assignIn = mf),
          (h.assignInWith = Ys),
          (h.assignWith = Fv),
          (h.at = Hv),
          (h.before = sf),
          (h.bind = Nl),
          (h.bindAll = Km),
          (h.bindKey = of),
          (h.castArray = uv),
          (h.chain = ef),
          (h.chunk = m1),
          (h.compact = y1),
          (h.concat = b1),
          (h.cond = qm),
          (h.conforms = Gm),
          (h.constant = Kl),
          (h.countBy = Tg),
          (h.create = Dv),
          (h.curry = lf),
          (h.curryRight = af),
          (h.debounce = uf),
          (h.defaults = Uv),
          (h.defaultsDeep = Wv),
          (h.defer = Qg),
          (h.delay = jg),
          (h.difference = w1),
          (h.differenceBy = x1),
          (h.differenceWith = C1),
          (h.drop = P1),
          (h.dropRight = $1),
          (h.dropRightWhile = S1),
          (h.dropWhile = A1),
          (h.fill = T1),
          (h.filter = Lg),
          (h.flatMap = Mg),
          (h.flatMapDeep = Og),
          (h.flatMapDepth = Rg),
          (h.flatten = Xc),
          (h.flattenDeep = E1),
          (h.flattenDepth = L1),
          (h.flip = ev),
          (h.flow = Zm),
          (h.flowRight = Xm),
          (h.fromPairs = I1),
          (h.functions = Xv),
          (h.functionsIn = Jv),
          (h.groupBy = Bg),
          (h.initial = M1),
          (h.intersection = O1),
          (h.intersectionBy = R1),
          (h.intersectionWith = B1),
          (h.invert = jv),
          (h.invertBy = em),
          (h.invokeMap = Ng),
          (h.iteratee = ql),
          (h.keyBy = Fg),
          (h.keys = ht),
          (h.keysIn = Bt),
          (h.map = Us),
          (h.mapKeys = nm),
          (h.mapValues = rm),
          (h.matches = Jm),
          (h.matchesProperty = Qm),
          (h.memoize = zs),
          (h.merge = im),
          (h.mergeWith = yf),
          (h.method = jm),
          (h.methodOf = e2),
          (h.mixin = Gl),
          (h.negate = Ks),
          (h.nthArg = n2),
          (h.omit = sm),
          (h.omitBy = om),
          (h.once = tv),
          (h.orderBy = Hg),
          (h.over = r2),
          (h.overArgs = nv),
          (h.overEvery = i2),
          (h.overSome = s2),
          (h.partial = Fl),
          (h.partialRight = cf),
          (h.partition = Dg),
          (h.pick = lm),
          (h.pickBy = bf),
          (h.property = Af),
          (h.propertyOf = o2),
          (h.pull = H1),
          (h.pullAll = Qc),
          (h.pullAllBy = D1),
          (h.pullAllWith = U1),
          (h.pullAt = W1),
          (h.range = l2),
          (h.rangeRight = a2),
          (h.rearg = rv),
          (h.reject = zg),
          (h.remove = z1),
          (h.rest = iv),
          (h.reverse = Bl),
          (h.sampleSize = qg),
          (h.set = um),
          (h.setWith = cm),
          (h.shuffle = Gg),
          (h.slice = K1),
          (h.sortBy = Xg),
          (h.sortedUniq = Q1),
          (h.sortedUniqBy = j1),
          (h.split = Mm),
          (h.spread = sv),
          (h.tail = eg),
          (h.take = tg),
          (h.takeRight = ng),
          (h.takeRightWhile = rg),
          (h.takeWhile = ig),
          (h.tap = yg),
          (h.throttle = ov),
          (h.thru = Ds),
          (h.toArray = pf),
          (h.toPairs = wf),
          (h.toPairsIn = xf),
          (h.toPath = h2),
          (h.toPlainObject = vf),
          (h.transform = fm),
          (h.unary = lv),
          (h.union = sg),
          (h.unionBy = og),
          (h.unionWith = lg),
          (h.uniq = ag),
          (h.uniqBy = ug),
          (h.uniqWith = cg),
          (h.unset = dm),
          (h.unzip = Vl),
          (h.unzipWith = jc),
          (h.update = hm),
          (h.updateWith = _m),
          (h.values = Qr),
          (h.valuesIn = pm),
          (h.without = fg),
          (h.words = $f),
          (h.wrap = av),
          (h.xor = dg),
          (h.xorBy = hg),
          (h.xorWith = _g),
          (h.zip = pg),
          (h.zipObject = gg),
          (h.zipObjectDeep = vg),
          (h.zipWith = mg),
          (h.entries = wf),
          (h.entriesIn = xf),
          (h.extend = mf),
          (h.extendWith = Ys),
          Gl(h, h),
          (h.add = p2),
          (h.attempt = Sf),
          (h.camelCase = ym),
          (h.capitalize = Cf),
          (h.ceil = g2),
          (h.clamp = gm),
          (h.clone = cv),
          (h.cloneDeep = dv),
          (h.cloneDeepWith = hv),
          (h.cloneWith = fv),
          (h.conformsTo = _v),
          (h.deburr = Pf),
          (h.defaultTo = Ym),
          (h.divide = v2),
          (h.endsWith = bm),
          (h.eq = fn),
          (h.escape = wm),
          (h.escapeRegExp = xm),
          (h.every = Eg),
          (h.find = Ig),
          (h.findIndex = Yc),
          (h.findKey = zv),
          (h.findLast = kg),
          (h.findLastIndex = Zc),
          (h.findLastKey = Kv),
          (h.floor = m2),
          (h.forEach = tf),
          (h.forEachRight = nf),
          (h.forIn = qv),
          (h.forInRight = Gv),
          (h.forOwn = Yv),
          (h.forOwnRight = Zv),
          (h.get = Ul),
          (h.gt = pv),
          (h.gte = gv),
          (h.has = Qv),
          (h.hasIn = Wl),
          (h.head = Jc),
          (h.identity = Vt),
          (h.includes = Vg),
          (h.indexOf = k1),
          (h.inRange = vm),
          (h.invoke = tm),
          (h.isArguments = Cr),
          (h.isArray = Ce),
          (h.isArrayBuffer = vv),
          (h.isArrayLike = Rt),
          (h.isArrayLikeObject = ot),
          (h.isBoolean = mv),
          (h.isBuffer = rr),
          (h.isDate = yv),
          (h.isElement = bv),
          (h.isEmpty = wv),
          (h.isEqual = xv),
          (h.isEqualWith = Cv),
          (h.isError = Hl),
          (h.isFinite = Pv),
          (h.isFunction = Nn),
          (h.isInteger = ff),
          (h.isLength = qs),
          (h.isMap = df),
          (h.isMatch = $v),
          (h.isMatchWith = Sv),
          (h.isNaN = Av),
          (h.isNative = Tv),
          (h.isNil = Lv),
          (h.isNull = Ev),
          (h.isNumber = hf),
          (h.isObject = it),
          (h.isObjectLike = st),
          (h.isPlainObject = Ri),
          (h.isRegExp = Dl),
          (h.isSafeInteger = Iv),
          (h.isSet = _f),
          (h.isString = Gs),
          (h.isSymbol = Ut),
          (h.isTypedArray = Jr),
          (h.isUndefined = kv),
          (h.isWeakMap = Mv),
          (h.isWeakSet = Ov),
          (h.join = V1),
          (h.kebabCase = Cm),
          (h.last = nn),
          (h.lastIndexOf = N1),
          (h.lowerCase = Pm),
          (h.lowerFirst = $m),
          (h.lt = Rv),
          (h.lte = Bv),
          (h.max = y2),
          (h.maxBy = b2),
          (h.mean = w2),
          (h.meanBy = x2),
          (h.min = C2),
          (h.minBy = P2),
          (h.stubArray = Zl),
          (h.stubFalse = Xl),
          (h.stubObject = u2),
          (h.stubString = c2),
          (h.stubTrue = f2),
          (h.multiply = $2),
          (h.nth = F1),
          (h.noConflict = t2),
          (h.noop = Yl),
          (h.now = Ws),
          (h.pad = Sm),
          (h.padEnd = Am),
          (h.padStart = Tm),
          (h.parseInt = Em),
          (h.random = mm),
          (h.reduce = Ug),
          (h.reduceRight = Wg),
          (h.repeat = Lm),
          (h.replace = Im),
          (h.result = am),
          (h.round = S2),
          (h.runInContext = b),
          (h.sample = Kg),
          (h.size = Yg),
          (h.snakeCase = km),
          (h.some = Zg),
          (h.sortedIndex = q1),
          (h.sortedIndexBy = G1),
          (h.sortedIndexOf = Y1),
          (h.sortedLastIndex = Z1),
          (h.sortedLastIndexBy = X1),
          (h.sortedLastIndexOf = J1),
          (h.startCase = Om),
          (h.startsWith = Rm),
          (h.subtract = A2),
          (h.sum = T2),
          (h.sumBy = E2),
          (h.template = Bm),
          (h.times = d2),
          (h.toFinite = Fn),
          (h.toInteger = Se),
          (h.toLength = gf),
          (h.toLower = Vm),
          (h.toNumber = rn),
          (h.toSafeInteger = Vv),
          (h.toString = Ye),
          (h.toUpper = Nm),
          (h.trim = Fm),
          (h.trimEnd = Hm),
          (h.trimStart = Dm),
          (h.truncate = Um),
          (h.unescape = Wm),
          (h.uniqueId = _2),
          (h.upperCase = zm),
          (h.upperFirst = zl),
          (h.each = tf),
          (h.eachRight = nf),
          (h.first = Jc),
          Gl(
            h,
            (function () {
              var e = {};
              return (
                xn(h, function (n, s) {
                  Xe.call(h.prototype, s) || (e[s] = n);
                }),
                e
              );
            })(),
            { chain: !1 },
          ),
          (h.VERSION = o),
          Jt(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function (e) {
            h[e].placeholder = h;
          }),
          Jt(['drop', 'take'], function (e, n) {
            (Me.prototype[e] = function (s) {
              s = s === i ? 1 : ct(Se(s), 0);
              var a = this.__filtered__ && !n ? new Me(this) : this.clone();
              return (
                a.__filtered__
                  ? (a.__takeCount__ = bt(s, a.__takeCount__))
                  : a.__views__.push({ size: bt(s, dt), type: e + (a.__dir__ < 0 ? 'Right' : '') }),
                a
              );
            }),
              (Me.prototype[e + 'Right'] = function (s) {
                return this.reverse()[e](s).reverse();
              });
          }),
          Jt(['filter', 'map', 'takeWhile'], function (e, n) {
            var s = n + 1,
              a = s == ae || s == qe;
            Me.prototype[e] = function (f) {
              var _ = this.clone();
              return (
                _.__iteratees__.push({ iteratee: fe(f, 3), type: s }),
                (_.__filtered__ = _.__filtered__ || a),
                _
              );
            };
          }),
          Jt(['head', 'last'], function (e, n) {
            var s = 'take' + (n ? 'Right' : '');
            Me.prototype[e] = function () {
              return this[s](1).value()[0];
            };
          }),
          Jt(['initial', 'tail'], function (e, n) {
            var s = 'drop' + (n ? '' : 'Right');
            Me.prototype[e] = function () {
              return this.__filtered__ ? new Me(this) : this[s](1);
            };
          }),
          (Me.prototype.compact = function () {
            return this.filter(Vt);
          }),
          (Me.prototype.find = function (e) {
            return this.filter(e).head();
          }),
          (Me.prototype.findLast = function (e) {
            return this.reverse().find(e);
          }),
          (Me.prototype.invokeMap = Ee(function (e, n) {
            return typeof e == 'function'
              ? new Me(this)
              : this.map(function (s) {
                  return Ei(s, e, n);
                });
          })),
          (Me.prototype.reject = function (e) {
            return this.filter(Ks(fe(e)));
          }),
          (Me.prototype.slice = function (e, n) {
            e = Se(e);
            var s = this;
            return s.__filtered__ && (e > 0 || n < 0)
              ? new Me(s)
              : (e < 0 ? (s = s.takeRight(-e)) : e && (s = s.drop(e)),
                n !== i && ((n = Se(n)), (s = n < 0 ? s.dropRight(-n) : s.take(n - e))),
                s);
          }),
          (Me.prototype.takeRightWhile = function (e) {
            return this.reverse().takeWhile(e).reverse();
          }),
          (Me.prototype.toArray = function () {
            return this.take(dt);
          }),
          xn(Me.prototype, function (e, n) {
            var s = /^(?:filter|find|map|reject)|While$/.test(n),
              a = /^(?:head|last)$/.test(n),
              f = h[a ? 'take' + (n == 'last' ? 'Right' : '') : n],
              _ = a || /^find/.test(n);
            f &&
              (h.prototype[n] = function () {
                var g = this.__wrapped__,
                  y = a ? [1] : arguments,
                  C = g instanceof Me,
                  O = y[0],
                  R = C || Ce(g),
                  F = function (Ie) {
                    var Be = f.apply(h, Xn([Ie], y));
                    return a && X ? Be[0] : Be;
                  };
                R && s && typeof O == 'function' && O.length != 1 && (C = R = !1);
                var X = this.__chain__,
                  oe = !!this.__actions__.length,
                  _e = _ && !X,
                  Ae = C && !oe;
                if (!_ && R) {
                  g = Ae ? g : new Me(this);
                  var pe = e.apply(g, y);
                  return pe.__actions__.push({ func: Ds, args: [F], thisArg: i }), new jt(pe, X);
                }
                return _e && Ae
                  ? e.apply(this, y)
                  : ((pe = this.thru(F)), _e ? (a ? pe.value()[0] : pe.value()) : pe);
              });
          }),
          Jt(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function (e) {
            var n = hs[e],
              s = /^(?:push|sort|unshift)$/.test(e) ? 'tap' : 'thru',
              a = /^(?:pop|shift)$/.test(e);
            h.prototype[e] = function () {
              var f = arguments;
              if (a && !this.__chain__) {
                var _ = this.value();
                return n.apply(Ce(_) ? _ : [], f);
              }
              return this[s](function (g) {
                return n.apply(Ce(g) ? g : [], f);
              });
            };
          }),
          xn(Me.prototype, function (e, n) {
            var s = h[n];
            if (s) {
              var a = s.name + '';
              Xe.call(qr, a) || (qr[a] = []), qr[a].push({ name: n, func: s });
            }
          }),
          (qr[Os(i, I).name] = [{ name: 'wrapper', func: i }]),
          (Me.prototype.clone = Wp),
          (Me.prototype.reverse = zp),
          (Me.prototype.value = Kp),
          (h.prototype.at = bg),
          (h.prototype.chain = wg),
          (h.prototype.commit = xg),
          (h.prototype.next = Cg),
          (h.prototype.plant = $g),
          (h.prototype.reverse = Sg),
          (h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = Ag),
          (h.prototype.first = h.prototype.head),
          xi && (h.prototype[xi] = Pg),
          h
        );
      },
      Wr = xp();
    pr ? (((pr.exports = Wr)._ = Wr), (qo._ = Wr)) : (gt._ = Wr);
  }.call(Ni));
})(E7, mo);
const L7 = mo,
  I7 = ne({ name: 'IButton' }),
  k7 = ne({
    ...I7,
    props: { type: { default: 'primary' } },
    setup(t) {
      return (
        console.log(L7.chunk(['a', 'b', 'c', 'd'], 2)),
        (r, i) => (
          P(), k('button', { class: Ke(['mu_Button', t.type]) }, [q(r.$slots, 'default')], 2)
        )
      );
    },
  }),
  M7 = T7(k7),
  O7 = [M7];
function R7(t) {
  O7.forEach((r) => t.use(r));
}
const li = {
  ...f7,
  enhanceApp({ app: t }) {
    t.use(R7), t.component('Demo', A7);
  },
};
function B7(t, r) {
  let i = [],
    o = !0;
  const l = (u) => {
    if (o) {
      o = !1;
      return;
    }
    i.forEach((c) => document.head.removeChild(c)),
      (i = []),
      u.forEach((c) => {
        const d = V7(c);
        document.head.appendChild(d), i.push(d);
      });
  };
  ui(() => {
    const u = t.data,
      c = r.value,
      d = u && u.description,
      p = (u && u.frontmatter.head) || [];
    (document.title = kh(c, u)),
      document.querySelector('meta[name=description]').setAttribute('content', d || c.description),
      l(w3(c.head, F7(p)));
  });
}
function V7([t, r, i]) {
  const o = document.createElement(t);
  for (const l in r) o.setAttribute(l, r[l]);
  return i && (o.innerHTML = i), o;
}
function N7(t) {
  return t[0] === 'meta' && t[1] && t[1].name === 'description';
}
function F7(t) {
  return t.filter((r) => !N7(r));
}
const aa = new Set(),
  Zh = () => document.createElement('link'),
  H7 = (t) => {
    const r = Zh();
    (r.rel = 'prefetch'), (r.href = t), document.head.appendChild(r);
  },
  D7 = (t) => {
    const r = new XMLHttpRequest();
    r.open('GET', t, (r.withCredentials = !0)), r.send();
  };
let ro;
const U7 =
  Lt && (ro = Zh()) && ro.relList && ro.relList.supports && ro.relList.supports('prefetch')
    ? H7
    : D7;
function W7() {
  if (!Lt || !window.IntersectionObserver) return;
  let t;
  if ((t = navigator.connection) && (t.saveData || /2g/.test(t.effectiveType))) return;
  const r = window.requestIdleCallback || setTimeout;
  let i = null;
  const o = () => {
    i && i.disconnect(),
      (i = new IntersectionObserver((u) => {
        u.forEach((c) => {
          if (c.isIntersecting) {
            const d = c.target;
            i.unobserve(d);
            const { pathname: p } = d;
            if (!aa.has(p)) {
              aa.add(p);
              const v = Mh(p);
              U7(v);
            }
          }
        });
      })),
      r(() => {
        document.querySelectorAll('#app a').forEach((u) => {
          const { target: c, hostname: d, pathname: p } = u,
            v = p.match(/\.\w+$/);
          (v && v[0] !== '.html') ||
            (c !== '_blank' &&
              d === location.hostname &&
              (p !== location.pathname ? i.observe(u) : aa.add(p)));
        });
      });
  };
  an(o);
  const l = _r();
  mn(() => l.path, o),
    hr(() => {
      i && i.disconnect();
    });
}
const z7 = ne({
  setup(t, { slots: r }) {
    const i = Fe(!1);
    return (
      an(() => {
        i.value = !0;
      }),
      () => (i.value && r.default ? r.default() : null)
    );
  },
});
function K7() {
  if (Lt) {
    const t = new Map();
    window.addEventListener('click', (r) => {
      var o;
      const i = r.target;
      if (i.matches('div[class*="language-"] > button.copy')) {
        const l = i.parentElement,
          u = (o = i.nextElementSibling) == null ? void 0 : o.nextElementSibling;
        if (!l || !u) return;
        const c = /language-(shellscript|shell|bash|sh|zsh)/.test(l.className);
        let d = '';
        u.querySelectorAll('span.line:not(.diff.remove)').forEach(
          (p) =>
            (d +=
              (p.textContent || '') +
              `
`),
        ),
          (d = d.slice(0, -1)),
          c && (d = d.replace(/^ *(\$|>) /gm, '').trim()),
          q7(d).then(() => {
            i.classList.add('copied'), clearTimeout(t.get(i));
            const p = setTimeout(() => {
              i.classList.remove('copied'), i.blur(), t.delete(i);
            }, 2e3);
            t.set(i, p);
          });
      }
    });
  }
}
async function q7(t) {
  try {
    return navigator.clipboard.writeText(t);
  } catch {
    const r = document.createElement('textarea'),
      i = document.activeElement;
    (r.value = t),
      r.setAttribute('readonly', ''),
      (r.style.contain = 'strict'),
      (r.style.position = 'absolute'),
      (r.style.left = '-9999px'),
      (r.style.fontSize = '12pt');
    const o = document.getSelection(),
      l = o ? o.rangeCount > 0 && o.getRangeAt(0) : null;
    document.body.appendChild(r),
      r.select(),
      (r.selectionStart = 0),
      (r.selectionEnd = t.length),
      document.execCommand('copy'),
      document.body.removeChild(r),
      l && (o.removeAllRanges(), o.addRange(l)),
      i && i.focus();
  }
}
function G7() {
  Lt &&
    window.addEventListener('click', (t) => {
      var i, o;
      const r = t.target;
      if (r.matches('.vp-code-group input')) {
        const l = (i = r.parentElement) == null ? void 0 : i.parentElement,
          u = Array.from((l == null ? void 0 : l.querySelectorAll('input')) || []).indexOf(r),
          c = l == null ? void 0 : l.querySelector('div[class*="language-"].active'),
          d =
            (o = l == null ? void 0 : l.querySelectorAll('div[class*="language-"]')) == null
              ? void 0
              : o[u];
        c && d && c !== d && (c.classList.remove('active'), d.classList.add('active'));
      }
    });
}
const Xh = li.NotFound || (() => '404 Not Found'),
  Y7 = ne({
    name: 'VitePressApp',
    setup() {
      const { site: t } = We();
      return (
        an(() => {
          mn(
            () => t.value.lang,
            (r) => {
              document.documentElement.lang = r;
            },
            { immediate: !0 },
          );
        }),
        W7(),
        K7(),
        G7(),
        li.setup && li.setup(),
        () => es(li.Layout)
      );
    },
  });
function Z7() {
  const t = J7(),
    r = X7();
  r.provide(Rh, t);
  const i = $3(t.route);
  return (
    r.provide(Oh, i),
    r.provide('NotFound', Xh),
    r.component('Content', E3),
    r.component('ClientOnly', z7),
    Object.defineProperty(r.config.globalProperties, '$frontmatter', {
      get() {
        return i.frontmatter.value;
      },
    }),
    li.enhanceApp && li.enhanceApp({ app: r, router: t, siteData: hi }),
    { app: r, router: t, data: i }
  );
}
function X7() {
  return a3(Y7);
}
function J7() {
  let t = Lt,
    r;
  return A3((i) => {
    let o = Mh(i);
    return (
      t && (r = o),
      (t || r === o) && (o = o.replace(/\.js$/, '.lean.js')),
      Lt && (t = !1),
      Lh(() => import(o), [])
    );
  }, Xh);
}
if (Lt) {
  const { app: t, router: r, data: i } = Z7();
  r.go().then(() => {
    B7(r.route, i.site), t.mount('#app');
  });
}
export {
  be as F,
  ie as _,
  W as a,
  It as b,
  k as c,
  Z7 as createApp,
  M as d,
  g4 as e,
  ne as f,
  T3 as g,
  _r as h,
  We as i,
  an as j,
  P as o,
  Kn as r,
  T as u,
  ee as w,
};
