const fileVersion = 1

class VersionUtil {
  constructor() {
    this.name = 'VersionUtil'
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

export default VersionUtil
