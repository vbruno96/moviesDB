const fakeUser = 'user@moviesdb.com'
const fakeUserPassword = 'moviesDB123'

export function fakeAuthUser(user: string, password: string): Promise<string> {
  /*if (user !== fakeUser && password !== fakeUserPassword) {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve('ok')
      }, 2000)
    })
  } else {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        reject(new Error('unauthorize'))
      }, 2000)
    })
  }*/

  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (user !== fakeUser && password !== fakeUserPassword) {
        reject(new Error('unauthorize'))
      }
      resolve('ok')
    }, 2000)
  })
}