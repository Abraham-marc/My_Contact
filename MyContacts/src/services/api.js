import axios from 'axios';

const api = axios.create({
  baseURL: 'https://zoul.dev', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  // --- Users ---
  userlogin() {
    return api.post('/users/login');
  },

  userregister() {
    return api.post('/users');
  },

  allusers() {
    return api.get('/users');
  },

  profile() {
    return api.get('/users/me');
  },

  updateUser() {
    return api.put('/users/me');
  },

  changepassword() {
    return api.put('/users/me/password');
  },

  // --- CONTACTS ---
  getAllContacts() {
    return api.get('/contacts');
  },

  createContact() {
    return api.post('/contacts');
  },

  getContact() {
    return api.get('/contacts/me');
  },

  getContactById(id) {
    return api.get(`/contacts/${id}`);
  },

  updateContact(id) {
    return api.put(`/contacts/${id}`);
  },

  deleteContact(id) {
    return api.delete(`/contacts/${id}`);
  },
};



    






































