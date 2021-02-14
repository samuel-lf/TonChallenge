import api from './api';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const getFoods = async () => {
  const response = await api.get('/foods');

  return response;
};

export default getFoods;
