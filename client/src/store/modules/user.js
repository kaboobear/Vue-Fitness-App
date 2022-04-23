import axios from 'axios';
const url =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000'
    : 'https://kaboo-vue-app.herokuapp.com';

const state = {
  user: {},
  token: localStorage.getItem('token'),
  isAuth: false,
  isLoading: true,
  errors: {},
  excercices: [
    {
      complexTitle: 'Yoga',
      complexArray: [
        {
          id: 1,
          title: 'Excercise 1',
          time: 3,
          img: '1',
        },
        {
          id: 2,
          title: 'Excercise 2',
          time: 3,
          img: '1',
        },
        {
          id: 3,
          title: 'Excercise 3',
          time: 3,
          img: '1',
        },
      ],
      isBought: true,
    },
    {
      complexTitle: 'Plank',
      complexArray: [
        {
          id: 1,
          title: 'Full Plank',
          time: 5,
          img: '1',
        },
        {
          id: 2,
          title: 'Plank at the Elbows',
          time: 4,
          img: '2',
        },
        {
          id: 3,
          title: 'Plank with right foot up',
          time: 3,
          img: '3',
        },
        {
          id: 4,
          title: 'Plank with left foot up',
          time: 4,
          img: '3',
        },
        // {
        //     id:5,
        //     title:"Right side plank",
        //     time:30,
        //     img:'4'
        // },
        // {
        //     id:6,
        //     title:"Left side plank",
        //     time:30,
        //     img:'4'
        // },
        // {
        //     id:7,
        //     title:"Full Plank",
        //     time:30,
        //     img:'1'
        // },
        // {
        //     id:8,
        //     title:"Plank at the elbows",
        //     time:60,
        //     img:'2'
        // },
      ],
      isBought: true,
    },
    {
      complexTitle: 'Jogging',
      complexArray: [
        {
          id: 1,
          title: 'Excercise 1',
          time: 3,
          img: '1',
        },
        {
          id: 2,
          title: 'Excercise 2',
          time: 3,
          img: '1',
        },
        {
          id: 3,
          title: 'Excercise 3',
          time: 3,
          img: '1',
        },
      ],
      isBought: true,
    },
    {
      complexTitle: 'Sunbathing',
      complexArray: [],
      isBought: false,
    },
    {
      complexTitle: 'Health',
      complexArray: [],
      isBought: false,
    },
    {
      complexTitle: 'Gym',
      complexArray: [],
      isBought: false,
    },
    {
      complexTitle: 'Swimming',
      complexArray: [],
      isBought: false,
    },
    {
      complexTitle: 'Pull-ups',
      complexArray: [],
      isBought: false,
    },
  ],
};

const getters = {
  getUser: (state) => state.user,
  getIsAuth: (state) => state.isAuth,
  getIsLoading: (state) => state.isLoading,
  getUserErrors: (state) => state.errors,
  getExcercises: (state) => state.excercices,
};

const actions = {
  fetchUser({ commit }) {
    return new Promise((resolve, reject) => {
      const token = state.token;
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
      if (token) {
        config.headers['x-auth-token'] = token;
      }
      axios
        .get(url + '/user/info', config)
        .then((res) => {
          commit('fetchUser', res.data);
          resolve(res);
        })
        .catch(() => {
          commit('fetchUser', {});
          reject();
        });
    });
  },
  login({ commit }, loginData) {
    return new Promise((resolve, reject) => {
      const config = { headers: { 'Content-type': 'application/json' } };
      const body = JSON.stringify(loginData);
      axios
        .post(url + '/user/login', body, config)
        .then((res) => {
          localStorage.setItem('token', res.data.token);
          commit('login', res.data);
          resolve(res);
        })
        .catch((err) => {
          if (err.response) commit('setErrors', err.response.data);
          console.log(err);
          reject(err);
        });
    });
  },
  register({ commit }, registerData) {
    return new Promise((resolve, reject) => {
      const config = { headers: { 'Content-type': 'application/json' } };
      const body = JSON.stringify(registerData);
      axios
        .post(url + '/user/register', body, config)
        .then((res) => {
          localStorage.setItem('token', res.data.token);
          commit('register', res.data);
          resolve(res);
        })
        .catch((err) => {
          commit('setErrors', err.response.data);
          console.log(err.response.data);
          reject(err);
        });
    });
  },
  logout({ commit }) {
    localStorage.removeItem('token');
    commit('logout');
  },
  clearErrors({ commit }) {
    commit('setErrors', {});
  },
  setErrors({ commit }, errors) {
    commit('setErrors', errors);
  },
};

const mutations = {
  fetchUser: (state, user) => {
    state.user = user;
    state.isAuth = true;
    state.isLoading = false;
  },
  login: (state, data) => {
    state.user = data.user;
    state.isAuth = true;
    state.token = data.token;
  },
  register: (state, data) => {
    state.user = data.user;
    state.isAuth = true;
    state.token = data.token;
  },
  setErrors: (state, errors) => {
    state.errors = errors;
  },
  logout: (state) => {
    state.user = {};
    state.token = null;
    state.isAuth = false;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
