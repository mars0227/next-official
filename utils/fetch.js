import queryString from 'query-string';
import contentTypeParser from 'content-type';
import fetch from 'node-fetch';
import { pipeAsync } from './functional';

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

export const defaultRoute = process.env.REACT_APP_ENV === 'dev'
  ? 'http://localhost:3004'
  : null;

const parseResult = async (res) => {
  const contentType = contentTypeParser.parse(res.headers.get('Content-Type'));

  let result;

  switch (contentType.type) {
    case 'application/json':
      result = await res.json();
      break;
    case 'text/html':
    default:
      console.log('not json content type', contentType.type);
      result = await res.text();
      break;
  }
  return result;
}

const defaultFetch = async (payload) => {
  const { method, url, headers, body } = payload;
  const path = defaultRoute
    ? `${defaultRoute}/${url}`
    : `${url}`;

  try {
    const res = await fetch(path, {
      method,
      headers,
      mode: 'cors',
      cache: 'default',
      body
    });


    const { status: statusCode, ok } = res;
    const result = await parseResult(res);

    return {
      statusCode,
      ok,
      result
    };
  } catch (error) {
    console.log(method, url, 'api error: ', error);
  }
};

const getUrl = ({route, query, ...params}) => ({
  ...params,
  url: query
    ? `${route}?${queryString.stringify(query)}`
    : route
});

const withToken = ({token, ...params}) => ({
  ...params,
  headers: {Authorization: `Bearer ${token}`},
  retry: true
});

const getBody = ({payload, ...params}) => ({
  ...params,
  body: JSON.stringify(payload)
});

const getFormData = ({ payload, ...params }) => {
  let formData = new FormData();
  const { files, ...others } = payload;

  for (let key in others) {
    formData.append(key, payload[key]);
  }

  [...files].forEach(file => {
    formData.append('file', file)
  });
  return {
    ...params,
    body: formData
  }
};

export const fetchGet = async (route, query) => await pipeAsync(
  getUrl,
  defaultFetch
)({route, query, method: 'GET', headers: defaultHeaders});

export const fetchGetWithToken = async (route, token, query) => await pipeAsync(
  getUrl,
  withToken,
  defaultFetch
)({route, token, query, method: 'GET', headers: defaultHeaders});

export const fetchPost = async (url, payload) => await pipeAsync(
  getBody,
  defaultFetch
)({url, payload, method: 'POST', headers: defaultHeaders});

export const fetchPostWithToken = async (url, token, payload) => await pipeAsync(
  getBody,
  withToken,
  defaultFetch
)({url, token, payload, method: 'POST', headers: defaultHeaders});

export const fetchPut = async (url, payload) => await pipeAsync(
  getBody,
  defaultFetch
)({url, payload, method: 'PUT', headers: defaultHeaders});

export const fetchPutWithToken = async (url, token, payload) => await pipeAsync(
  getBody,
  withToken,
  defaultFetch
)({url, token, payload, method: 'PUT', headers: defaultHeaders});

export const fetchPutFiles = async (url, body) => await defaultFetch({ url, body, method: 'PUT', headers: defaultHeaders });

export const fetchPatch = async (url, payload) => await pipeAsync(
  getBody,
  defaultFetch
)({ url, payload, method: 'PATCH', headers: defaultHeaders });

export const fetchDeleteWithToken = async (url, token, payload) => await pipeAsync(
  getBody,
  withToken,
  defaultFetch
)({ url, token, payload, method: 'DELETE', headers: defaultHeaders });


export const fetchDelete = async (url, payload) => await pipeAsync(
  getBody,
  defaultFetch
)({ url, payload, method: 'DELETE', headers: defaultHeaders });

export const fetchPostWithFile = async (url, payload) => await pipeAsync(
  getFormData,
  defaultFetch
)({url, payload, method: 'POST'});
