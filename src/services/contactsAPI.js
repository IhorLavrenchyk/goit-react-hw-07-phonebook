import axios from 'axios';

const contactsAPI = axios.create({
  baseURL: 'https://644ec89a1b4567f4d590030a.mockapi.io',
});

export const getContacts = async () => {
  const { data } = await contactsAPI.get('/contacts');
  return data;
};

export const addContacts = async contact => {
  const { data } = await contactsAPI.post('/contacts', contact);
  return data;
};

export const deleteContacts = async id => {
  console.log(id);
  const { data } = await contactsAPI.delete(`/contacts/${id}`);
  return data;
};
