import axios from 'axios';
import { U } from 'vue-router/dist/index-BzEKChPW.js';

const api = axios.create({
  baseURL: 'https://api-contact.zoul.dev/', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {

 userlogin() {
    return api.post('/users/login'),
    },

    userregister() {
    return api.post('/users'),
    },
  
    allusers() {
    return api.get('/users'),
    },

      profile() {
  return api.get(`/users/me`),
    },

     updateUser() {
        return api.put('/users/me'),
    },
      
    changepassword() {
        return api.put('/users/me/password'),
    },


    //
    getAllContacts(){
  return api.get('/contacts'),
    },

    createContact(){
    return api.post('/contacts'),
    },
 
    getContact(){
        return api.get('/contacts/me')
    },

    getContactById(id) {
  return api.get(`/contacts/${id}`),
    },

    UpdateContact() {
        return api.put('/contacts/{id}'),
    },

    deleteContact() {
        return api.delete('/contacts/{id}'),
    },



}


    






































