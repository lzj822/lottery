import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'
import interceptorPage from "./utils/interceptorPage";

Vue.config.productionTip = false
Vue.use(uView)

App.mpType = 'app'

const whiteList = ["/pages/login/index"];

function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === "object" || typeof obj === "function") &&
    typeof obj.then === "function"
  );
}

uni.addInterceptor({
  returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise((resolve, reject) => {
      res.then((res) => {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  },
});

const app = new Vue({
  ...App
})
app.$mount()

interceptorPage()

