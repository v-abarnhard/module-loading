const fileVersion = 1

class VersionUtilSingleton {
  constructor() {
    this.name = 'VersionUtilSingleton'
    this.fileVersion = fileVersion
    this.serverPromise = new Promise((resolve, reject) => {
      fetch('/server-version.json')
      .then((response) => response.json())
      .then((data) => {
        resolve(data)
      })
      .catch(reject)
    })
  }
}

export default new VersionUtilSingleton()
