(function (e) {
  function t(t) {
    for (
      var n, o, c = t[0], a = t[1], u = t[2], d = 0, m = [];
      d < c.length;
      d++
    )
      (o = c[d]),
        Object.prototype.hasOwnProperty.call(r, o) && r[o] && m.push(r[o][0]),
        (r[o] = 0);
    for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    l && l(t);
    while (m.length) m.shift()();
    return s.push.apply(s, u || []), i();
  }
  function i() {
    for (var e, t = 0; t < s.length; t++) {
      for (var i = s[t], n = !0, c = 1; c < i.length; c++) {
        var a = i[c];
        0 !== r[a] && (n = !1);
      }
      n && (s.splice(t--, 1), (e = o((o.s = i[0]))));
    }
    return e;
  }
  var n = {},
    r = { app: 0 },
    s = [];
  function o(t) {
    if (n[t]) return n[t].exports;
    var i = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(i.exports, i, i.exports, o), (i.l = !0), i.exports;
  }
  (o.m = e),
    (o.c = n),
    (o.d = function (e, t, i) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (o.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (o.r(i),
        Object.defineProperty(i, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          o.d(
            i,
            n,
            function (t) {
              return e[t];
            }.bind(null, n),
          );
      return i;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e['default'];
            }
          : function () {
              return e;
            };
      return o.d(t, 'a', t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = '/');
  var c = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    a = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var u = 0; u < c.length; u++) t(c[u]);
  var l = a;
  s.push([0, 'chunk-vendors']), i();
})({
  0: function (e, t, i) {
    e.exports = i('56d7');
  },
  '034f': function (e, t, i) {
    'use strict';
    var n = i('85ec'),
      r = i.n(n);
    r.a;
  },
  '39bd': function (e, t, i) {
    'use strict';
    var n = i('95a4'),
      r = i.n(n);
    r.a;
  },
  '56d7': function (e, t, i) {
    'use strict';
    i.r(t);
    i('e260'), i('e6cf'), i('cca6'), i('a79d');
    var n = i('2b0e'),
      r = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          'div',
          { staticClass: 'wrapper', attrs: { id: 'app' } },
          [i('router-view')],
          1,
        );
      },
      s = [],
      o = i('5530'),
      c = i('2f62'),
      a = {
        name: 'App',
        components: {},
        methods: Object(o['a'])({}, Object(c['b'])(['fetchUser'])),
        created: function () {
          var e = this;
          this.fetchUser()
            .then(function (t) {
              t.data.user &&
                '/home' != e.$route.path &&
                e.$router.push('/home');
            })
            .catch(function () {
              '/' != e.$route.path && e.$router.push('/');
            });
        },
      },
      u = a,
      l = (i('034f'), i('2877')),
      d = Object(l['a'])(u, r, s, !1, null, null, null),
      m = d.exports,
      g = i('8c4f'),
      p = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return e.getIsLoading
          ? e._e()
          : i('div', [
              i('div', { staticClass: 'login-page log-block' }, [
                i('div', { staticClass: 'login-form' }, [
                  e._m(0),
                  e._m(1),
                  i('div', { staticClass: 'login-title' }, [e._v(' Login ')]),
                  i('div', { staticClass: 'log-error' }, [
                    e.getUserErrors.username
                      ? i('div', [e._v(e._s(e.getUserErrors.username))])
                      : e._e(),
                  ]),
                  i('div', { staticClass: 'simple-input' }, [
                    i('input', {
                      directives: [
                        {
                          name: 'model',
                          rawName: 'v-model',
                          value: e.loginUsername,
                          expression: 'loginUsername',
                        },
                      ],
                      attrs: { type: 'text', placeholder: 'Username' },
                      domProps: { value: e.loginUsername },
                      on: {
                        input: function (t) {
                          t.target.composing ||
                            (e.loginUsername = t.target.value);
                        },
                      },
                    }),
                  ]),
                  i(
                    'div',
                    { staticClass: 'login-btn', on: { click: e.loginHandler } },
                    [e._v(' Go ')],
                  ),
                ]),
                i(
                  'div',
                  { staticClass: 'open-btn', class: { isOpen: e.isReg } },
                  [
                    i('span', { on: { click: e.openReg } }, [e._v('+')]),
                    i(
                      'div',
                      {
                        staticClass: 'register-page log-block',
                        class: { isOpen: e.isReg },
                      },
                      [
                        i('div', { staticClass: 'register-page-inner' }, [
                          i('div', { staticClass: 'login-title' }, [
                            e._v(' Register '),
                          ]),
                          i('div', { staticClass: 'log-error' }, [
                            e.getUserErrors.username
                              ? i('div', [e._v(e._s(e.getUserErrors.username))])
                              : e._e(),
                          ]),
                          i('div', { staticClass: 'simple-input' }, [
                            i('input', {
                              directives: [
                                {
                                  name: 'model',
                                  rawName: 'v-model',
                                  value: e.registerUsername,
                                  expression: 'registerUsername',
                                },
                              ],
                              attrs: { type: 'text', placeholder: 'Username' },
                              domProps: { value: e.registerUsername },
                              on: {
                                input: function (t) {
                                  t.target.composing ||
                                    (e.registerUsername = t.target.value);
                                },
                              },
                            }),
                          ]),
                          i(
                            'div',
                            {
                              staticClass: 'login-btn',
                              on: { click: e.registerHandler },
                            },
                            [e._v(' Go ')],
                          ),
                        ]),
                      ],
                    ),
                  ],
                ),
              ]),
            ]);
      },
      h = [
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            'div',
            {
              staticClass: 'abs-img1',
              attrs: {
                'data-aos-delay': '100',
                'data-aos-duration': '1000',
                'data-aos': 'fade-right',
              },
            },
            [i('img', { attrs: { src: '/img/img1.png', alt: '' } })],
          );
        },
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            'div',
            {
              staticClass: 'abs-img2',
              attrs: {
                'data-aos-delay': '600',
                'data-aos-duration': '1000',
                'data-aos': 'fade-left',
              },
            },
            [i('img', { attrs: { src: '/img/img2.png', alt: '' } })],
          );
        },
      ],
      f = {
        name: 'Login',
        data: function () {
          return {
            isReg: !1,
            loginUsername: '',
            registerUsername: '',
            clickSound: new Audio('/click.mp3'),
          };
        },
        computed: Object(c['c'])([
          'getUserErrors',
          'getIsLoading',
          'getIsAuth',
        ]),
        methods: Object(o['a'])(
          Object(o['a'])(
            {},
            Object(c['b'])(['login', 'register', 'clearErrors', 'setErrors']),
          ),
          {},
          {
            openReg: function () {
              (this.isReg = !this.isReg), this.clearErrors();
            },
            loginHandler: function () {
              var e = this;
              if ('' === this.loginUsername)
                this.setErrors({ username: 'Username is required' });
              else {
                var t = { username: this.loginUsername, password: '1111' };
                this.login(t).then(function () {
                  e.$router.push('/home'), e.clickSound.play();
                });
              }
            },
            registerHandler: function () {
              var e = this,
                t = { username: this.registerUsername };
              this.register(t).then(function () {
                e.$router.push('/home'), e.clickSound.play();
              });
            },
          },
        ),
        created: function () {
          this.getIsAuth && !this.getIsLoading && this.$router.push('/home');
        },
      },
      v = f,
      x = (i('d6db'), Object(l['a'])(v, p, h, !1, null, null, null)),
      y = x.exports,
      b = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return e.getIsLoading
          ? e._e()
          : i('div', [
              i(
                'div',
                { staticClass: 'center-circle circle' },
                [
                  i(
                    'div',
                    {
                      staticClass: 'center-circle-inner circle',
                      attrs: {
                        'data-aos-delay': '1500',
                        'data-aos-duration': '1500',
                        'data-aos': 'fadeIn',
                      },
                    },
                    [
                      i('div', { staticClass: 'center-circle-content' }, [
                        i('div', { staticClass: 'time-title' }, [
                          e._v(' Time '),
                        ]),
                        i('div', { staticClass: 'time' }, [
                          e._v(' ' + e._s(this.datetime) + ' '),
                        ]),
                      ]),
                    ],
                  ),
                  e._l(e.getExcercises, function (t, n) {
                    return [
                      i(
                        'div',
                        {
                          key: n,
                          staticClass: 'small-circle circle',
                          class: { disabled: !t.isBought },
                          attrs: { 'data-ex': n + 1 },
                          on: {
                            click: function (i) {
                              return t.isBought ? e.openEx(i) : null;
                            },
                          },
                        },
                        [
                          i(
                            'div',
                            {
                              staticClass: 'small-cirlce-content',
                              attrs: {
                                'data-aos-delay': 200 + 150 * (n + 1),
                                'data-aos-duration': '1000',
                                'data-aos': 'fadeIn',
                              },
                            },
                            [
                              i('img', {
                                attrs: {
                                  src: '/img/ico' + (n + 1) + '.png',
                                  alt: '',
                                },
                              }),
                            ],
                          ),
                        ],
                      ),
                    ];
                  }),
                ],
                2,
              ),
            ]);
      },
      k = [],
      S = {
        name: 'Home',
        components: {},
        computed: Object(c['c'])([
          'getIsLoading',
          'getIsAuth',
          'getExcercises',
        ]),
        methods: {
          getNow: function () {
            var e = new Date(),
              t =
                (e.getHours() < 10 ? '0' : '') +
                e.getHours() +
                ':' +
                (e.getMinutes() < 10 ? '0' : '') +
                e.getMinutes();
            this.datetime = t;
          },
          openEx: function (e) {
            this.clickSound.play();
            var t = e.target.closest('.small-circle').getAttribute('data-ex');
            this.$router.push({ path: '/excercise', query: { ex: t } });
          },
        },
        data: function () {
          return { datetime: '', clickSound: new Audio('/click.mp3') };
        },
        created: function () {
          this.getNow(),
            setInterval(this.getNow, 1e3),
            this.getIsAuth || this.getIsLoading || this.$router.push('/');
        },
      },
      E = S,
      _ = (i('cccb'), Object(l['a'])(E, b, k, !1, null, null, null)),
      w = _.exports,
      C = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return e.getIsLoading
          ? e._e()
          : i('div', [
              i('div', { staticClass: 'ex-content active' }, [
                i('div', { staticClass: 'ex-glob-title' }, [
                  i('div', { staticClass: 'glob-title-img' }, [
                    e._v(e._s(this.excercise.complexTitle)),
                  ]),
                ]),
                i('div', { staticClass: 'ex-block' }, [
                  i('div', { staticClass: 'ex-title' }, [
                    e._v(' ' + e._s(this.title) + ' '),
                  ]),
                  e._m(0),
                ]),
              ]),
            ]);
      },
      T = [
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i('div', { staticClass: 'ex-photo' }, [
            i('img', { attrs: { src: '', alt: '' } }),
            i('div', { staticClass: 'ex-timer' }, [
              i('div', { staticClass: 'ex-timer-inner' }, [
                i('div', { staticClass: 'timer-circle' }),
                i('div', { staticClass: 'timer-line' }),
              ]),
            ]),
            i('div', { staticClass: 'countdown' }),
          ]);
        },
      ],
      A =
        (i('99af'),
        {
          name: 'Home',
          components: {},
          computed: Object(c['c'])([
            'getIsLoading',
            'getIsAuth',
            'getExcercises',
          ]),
          methods: {
            loadScreen: function () {
              document.querySelector('.ex-content').classList.toggle('active');
            },
            countdown: function () {
              var e = this,
                t = document.querySelector('.countdown');
              (t.innerText = '3'),
                this.tickSound.play(),
                setTimeout(function () {
                  (t.innerText = '2'),
                    e.tickSound.play(),
                    setTimeout(function () {
                      (t.innerText = '1'),
                        e.tickSound.play(),
                        setTimeout(function () {
                          (t.innerText = ''),
                            document
                              .querySelector('.ex-timer')
                              .classList.toggle('active'),
                            e.end.play();
                        }, 1e3);
                    }, 1e3);
                }, 1e3);
            },
            startExcercice: function (e) {
              var t = this,
                i = this.excercise.complexTitle,
                n = this.excercise.complexArray[e];
              e < this.excercise.complexArray.length
                ? ((document.querySelector('.ex-block .ex-title').innerText =
                    n.title),
                  document
                    .querySelector('.ex-block .ex-photo img')
                    .setAttribute(
                      'src',
                      '/img/'.concat(i, '/').concat(n.img, '.jpg'),
                    ),
                  setTimeout(function () {
                    t.loadScreen(),
                      setTimeout(function () {
                        document
                          .querySelector('.ex-block')
                          .classList.toggle('active'),
                          setTimeout(function () {
                            t.countdown(),
                              setTimeout(function () {
                                (document.querySelector(
                                  '.timer-line',
                                ).style.animation = 'rotate linear '.concat(
                                  n.time,
                                  's',
                                )),
                                  setTimeout(function () {
                                    (document.querySelector(
                                      '.ex-timer',
                                    ).style.animation = 'bounce 1s'),
                                      t.endSound.play(),
                                      setTimeout(function () {
                                        t.loadScreen(),
                                          setTimeout(function () {
                                            document
                                              .querySelector('.ex-block')
                                              .classList.toggle('active'),
                                              document
                                                .querySelector('.ex-timer')
                                                .classList.toggle('active'),
                                              (document.querySelector(
                                                '.timer-line',
                                              ).style.animation = 'none'),
                                              (document.querySelector(
                                                '.ex-timer',
                                              ).style.animation = 'none'),
                                              (t.currentEx = t.currentEx + 1),
                                              t.startExcercice(t.currentEx);
                                          }, 500);
                                      }, 2e3);
                                  }, 1e3 * n.time);
                              }, 3100);
                          }, 1e3);
                      }, 2e3);
                  }, 300))
                : this.end();
            },
            start: function () {
              var e = this;
              setTimeout(function () {
                e.loadScreen(),
                  setTimeout(function () {
                    e.loadScreen(),
                      setTimeout(function () {
                        (document.querySelector(
                          '.glob-title-img',
                        ).style.display = 'none'),
                          (document.querySelector('.ex-block').style.display =
                            'block'),
                          e.startExcercice(e.currentEx);
                      }, 500);
                  }, 1500);
              }, 300);
            },
            end: function () {
              var e = this;
              (document.querySelector('.ex-glob-title').innerText =
                'Congratulations'),
                (document.querySelector('.ex-block').style.display = 'none'),
                setTimeout(function () {
                  e.loadScreen(),
                    setTimeout(function () {
                      e.loadScreen(),
                        setTimeout(function () {
                          e.$router.push('/home');
                        }, 500);
                    }, 1500);
                }, 250);
            },
            exEngine: function () {
              this.start();
            },
          },
          data: function () {
            return {
              bgMusic: new Audio('/intro.mp3'),
              tickSound: new Audio('/tick.mp3'),
              endSound: new Audio('/end.mp3'),
              excercise: {},
              currentEx: 0,
            };
          },
          created: function () {
            this.getIsAuth || this.getIsLoading || this.$router.push('/'),
              (this.excercise = this.getExcercises[this.$route.query.ex - 1]),
              (this.endSound.volume = 0.8),
              (this.bgMusic.loop = !0),
              (this.bgMusic.volume = 0.6),
              this.bgMusic.play(),
              this.exEngine();
          },
          beforeDestroy: function () {
            this.bgMusic.pause();
          },
        }),
      U = A,
      O = (i('39bd'), Object(l['a'])(U, C, T, !1, null, null, null)),
      j = O.exports;
    n['a'].use(g['a']);
    var I = [
        { path: '/', component: y },
        { path: '/home', component: w },
        { path: '/excercise', component: j },
      ],
      L = new g['a']({ mode: 'history', routes: I }),
      $ = L,
      q = (i('d3b7'), i('bc3a')),
      P = i.n(q),
      M = 'https://kaboo-vue-app.herokuapp.com',
      B = {
        user: {},
        token: localStorage.getItem('token'),
        isAuth: !1,
        isLoading: !0,
        errors: {},
        excercices: [
          {
            complexTitle: 'Yoga',
            complexArray: [
              { id: 1, title: 'Excercise 1', time: 3, img: '1' },
              { id: 2, title: 'Excercise 2', time: 3, img: '1' },
              { id: 3, title: 'Excercise 3', time: 3, img: '1' },
            ],
            isBought: !0,
          },
          {
            complexTitle: 'Plank',
            complexArray: [
              { id: 1, title: 'Full Plank', time: 5, img: '1' },
              { id: 2, title: 'Plank at the Elbows', time: 4, img: '2' },
              { id: 3, title: 'Plank with right foot up', time: 3, img: '3' },
              { id: 4, title: 'Plank with left foot up', time: 4, img: '3' },
            ],
            isBought: !0,
          },
          {
            complexTitle: 'Jogging',
            complexArray: [
              { id: 1, title: 'Excercise 1', time: 3, img: '1' },
              { id: 2, title: 'Excercise 2', time: 3, img: '1' },
              { id: 3, title: 'Excercise 3', time: 3, img: '1' },
            ],
            isBought: !0,
          },
          { complexTitle: 'Sunbathing', complexArray: [], isBought: !1 },
          { complexTitle: 'Health', complexArray: [], isBought: !1 },
          { complexTitle: 'Gym', complexArray: [], isBought: !1 },
          { complexTitle: 'Swimming', complexArray: [], isBought: !1 },
          { complexTitle: 'Pull-ups', complexArray: [], isBought: !1 },
        ],
      },
      H = {
        getUser: function (e) {
          return e.user;
        },
        getIsAuth: function (e) {
          return e.isAuth;
        },
        getIsLoading: function (e) {
          return e.isLoading;
        },
        getUserErrors: function (e) {
          return e.errors;
        },
        getExcercises: function (e) {
          return e.excercices;
        },
      },
      R = {
        fetchUser: function (e) {
          var t = e.commit;
          return new Promise(function (e, i) {
            var n = B.token,
              r = { headers: { 'Content-type': 'application/json' } };
            n && (r.headers['x-auth-token'] = n),
              P.a
                .get(M + '/user/info', r)
                .then(function (i) {
                  t('fetchUser', i.data), e(i);
                })
                .catch(function () {
                  t('fetchUser', {}), i();
                });
          });
        },
        login: function (e, t) {
          var i = e.commit;
          return new Promise(function (e, n) {
            var r = { headers: { 'Content-type': 'application/json' } },
              s = JSON.stringify(t);
            P.a
              .post(M + '/user/login', s, r)
              .then(function (t) {
                localStorage.setItem('token', t.data.token),
                  i('login', t.data),
                  e(t);
              })
              .catch(function (e) {
                e.response && i('setErrors', e.response.data),
                  console.log(e),
                  n(e);
              });
          });
        },
        register: function (e, t) {
          var i = e.commit;
          return new Promise(function (e, n) {
            var r = { headers: { 'Content-type': 'application/json' } },
              s = JSON.stringify(t);
            P.a
              .post(M + '/user/register', s, r)
              .then(function (t) {
                localStorage.setItem('token', t.data.token),
                  i('register', t.data),
                  e(t);
              })
              .catch(function (e) {
                i('setErrors', e.response.data),
                  console.log(e.response.data),
                  n(e);
              });
          });
        },
        logout: function (e) {
          var t = e.commit;
          localStorage.removeItem('token'), t('logout');
        },
        clearErrors: function (e) {
          var t = e.commit;
          t('setErrors', {});
        },
        setErrors: function (e, t) {
          var i = e.commit;
          i('setErrors', t);
        },
      },
      N = {
        fetchUser: function (e, t) {
          (e.user = t), (e.isAuth = !0), (e.isLoading = !1);
        },
        login: function (e, t) {
          (e.user = t.user), (e.isAuth = !0), (e.token = t.token);
        },
        register: function (e, t) {
          (e.user = t.user), (e.isAuth = !0), (e.token = t.token);
        },
        setErrors: function (e, t) {
          e.errors = t;
        },
        logout: function (e) {
          (e.user = {}), (e.token = null), (e.isAuth = !1);
        },
      },
      J = { state: B, getters: H, actions: R, mutations: N };
    n['a'].use(c['a']);
    var G = new c['a'].Store({ modules: { user: J } }),
      D = i('f5af'),
      F = i.n(D);
    i('e829');
    (n['a'].config.productionTip = !1),
      new n['a']({
        created: function () {
          F.a.init();
        },
        router: $,
        store: G,
        render: function (e) {
          return e(m);
        },
      }).$mount('#app');
  },
  '5ced': function (e, t, i) {},
  '85ec': function (e, t, i) {},
  '95a4': function (e, t, i) {},
  cccb: function (e, t, i) {
    'use strict';
    var n = i('5ced'),
      r = i.n(n);
    r.a;
  },
  d6db: function (e, t, i) {
    'use strict';
    var n = i('e67a'),
      r = i.n(n);
    r.a;
  },
  e67a: function (e, t, i) {},
});
//# sourceMappingURL=app.32106c7a.js.map
