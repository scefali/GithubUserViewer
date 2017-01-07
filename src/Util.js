import reactCookie from 'react-cookie';
import axios from 'axios';

const ip = 'localhost';
const port = '9000';
const localURL = `http://${ip}:${port}`;
const herokuURL = 'https://githubuserviewer.herokuapp.com';
//const serverURL = (reactCookie.load('UseDev') === '1') ? localURL : herokuURL;
const serverURL = localURL;



exports.search = (userName) => {
  const url = `${serverURL}/search/${userName}`;
  return axios.get(url).then( response => {
    console.log('response', response.data);
    return response.data;
  });
}