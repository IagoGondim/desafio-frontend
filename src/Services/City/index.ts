import api from '../api'

export const getCity = async () => {
  const { data } = await api.get('/city')
  
    return data
}