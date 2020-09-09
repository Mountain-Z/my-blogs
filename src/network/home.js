import axios from './axios'

export function getarticleDetail() {
  return axios({
    url: '/home/articleDetail'
  })
}