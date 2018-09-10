import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';
// import { Message } from 'element-ui';
// import wsCache from 'web-storage-cache';

// 响应时间
axios.defaults.timeout = 5 * 1000;
// 配置cookie
// axios.defaults.withCredentials = true
// 配置请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// 静态资源
//Vue.prototype.$static = '';

// 配置接口地址
//axios.defaults.baseURL = '';

// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use(
	config => {
		if(Vue.prototype.$wsCache.get('userInfo')) {
			config.headers.token = Vue.prototype.$wsCache.get('userInfo').token;
		}
		if(config.method === 'post') {
			config.data = qs.stringify(config.data);
		}
		return config;
	},
	(err) => {
		Message.error('请求错误')
		return Promise.reject(err);
	}
)
// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
	(res) => {
		if(res.data.resultCode === '0000') {
			return res.data;
		} else if(res.data.resultCode === '1001') {
			Message.error(res.data.message);
		} else if(res.data.resultCode === '1002') {
			Message.error(res.data.message);
		} else if(res.data.resultCode === '1003') {
			Message.error(res.data.message);
		} else if(res.data.resultCode === '1005') {
			Message.error(res.data.message);
		} else if(res.data.resultCode === '1006') {
			Message.error(res.data.message);
		} else if(res.data.resultCode === '1007') {
			Message.error(res.data.message);
		} else if(res.data.resultCode === '500') {
			Message.error(res.data.message);
		} else if(res.data.resultCode === '3510') {
			Message.error(res.data.message);
		} else if(res.data.resultCode === '3511') {
			Message.error(res.data.message);
		} else if(res.data.resultCode === '3512') {
			Message.error(res.data.message);
		} else if(res.data.resultCode === '3501') {
			Message.error(res.data.message);
		} else if(res.data.resultCode === '3502') {
			Message.error(res.data.message);
		} else {
			return res.data;
		}
	},
	(err) => {
		Message.error('请求失败，请稍后再试');
		return Promise.reject(err);
	}
)
// 发送请求
export function post(url, params) {
	return new Promise((resolve, reject) => {
		axios.post(url, params)
			.then(res => {
				resolve(res);				
			})
			.catch(err => {
				reject(err);
			})
	})
}
export function get(url, params) {
	return new Promise((resolve, reject) => {
		axios.get(url, {
				params: params
			})
			.then(res => {
				resolve(res);
			})
			.catch(err => {
				reject(err);
			})
	})
}