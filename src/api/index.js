import axios from 'axios';

const BASE = 'http://fitnesstrac-kr.herokuapp.com/api'

export async function login(username, password) {
  try {
    const { data } = await axios.post(`${ BASE }/users/login`, {
      username, 
      password
    });
    return data;
  } catch (error) {
    throw error;
  }
}
export async function register(username, password) {
  try {
    const { data } = await axios.post(`${ BASE }/users/register`, {
      username, 
      password
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getMe() {
  try {
    // const { data } = await axios.get(`${ BASE }/users/me`);
    // return data;
  } catch (error) {
    throw error;
  }
}



export async function getSingleUsersRoutines() {
  try {
    // const { data } = await axios.get(`${ BASE }/users/:username/routines`);
    // return data;
  } catch (error) {
    throw error;
  }
}
