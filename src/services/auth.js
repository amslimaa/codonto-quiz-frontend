import api from './api';

export const isAutenticated = async (token) => {
  const bearerToken = ` Bearer ${token}`;
  const response = await api.get('/profile', {
    headers: { Authorization: bearerToken },
  });
  if (response.status === 200) {
    localStorage.setItem('id', response.data.id);
    localStorage.setItem('name', response.data.name);
    localStorage.setItem('email', response.data.email);
    console.log(response);
    return true;
  }

  return false;
};
