import api from '../api'

export const getCountry = async () => {
  const { data } = await api.get('/country')
  
    return data
}