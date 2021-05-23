const hardCodedVersion = 1

class VersionUtil {
  constructor() {
    this.version = hardCodedVersion
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
