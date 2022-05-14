import axios from 'axios'

const api = axios.create({
  baseURL: 'https://gist.githubusercontent.com/andersonassisb/ce30026038d310f66abfb16f83cff0d9/raw/b08a7976d3e7f0e55bf0d66aced9678716d47719/gistemojiapi.json',
})

export default api