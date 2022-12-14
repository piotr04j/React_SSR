import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../client/reducers'
import axios from 'axios'

const createServerStore = (req) => {
  const axiosInstance = axios.create({
    baseURL: 'https://react-ssr-api.herokuapp.com',
    headers: { cookie: req.get('cookie') || '' }
  })
  const store = createStore(reducers, {} , applyMiddleware(thunk.withExtraArgument(axiosInstance)))

  return store
}

export default createServerStore
