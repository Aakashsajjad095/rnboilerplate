// import { ChangeLoading } from '../Shared/Store/sharedSlice';
import axios from 'axios';
import store from '../redux/store';
import { baseURL } from './baseURL';

export const apiInstance = axios.create({
    // baseURL: baseURL,
    timeout: 5000,
    'Accept': 'application/json',
})

apiInstance.interceptors.request.use(function (config) {
    // store.dispatch(ChangeLoading(true));
    config.headers.Authorization = `Bearer ${store.getState().auth?.user?.token}`
    return config;
}, function (error) {
    return Promise.reject(error);
});

apiInstance.interceptors.response.use(function (response) {
    // store.dispatch(ChangeLoading(false))
    return response;
}, function (error) {
    // store.dispatch(ChangeLoading(false))
    return Promise.reject(error);
});

export const apiNoLoaderInstance = axios.create({
    // baseURL: baseURL,
    timeout: 5000,
    'Accept': 'application/json',
})

apiNoLoaderInstance.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${store.getState().auth?.user?.token}`
    return config;
}, function (error) {
    return Promise.reject(error);
});

apiNoLoaderInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export const apiNoLoaderFormInstance = axios.create({
    // baseURL: baseURL,
    timeout: 5000,
    'Accept': 'multipart/form-data',
    'Content-Type': 'multipart/form-data',
})

apiNoLoaderFormInstance.interceptors.request.use(function (config) {
    console.log(("config--->", config))
    config.headers.Authorization = `Bearer ${store.getState().auth?.user?.token}`
    return config;
}, function (error) {
    return Promise.reject(error);
});

apiNoLoaderFormInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});
