import originAxios from 'axios'

export default function axios(option) {
  return new Promise((resolve, reject) => {
    const instance = originAxios.create({
      baseURL: 'http://127.0.0.1:3000/',
      timeout: 5000
    })

    instance(option).then(res => resolve(res)).catch(err => reject(err))
  })

}