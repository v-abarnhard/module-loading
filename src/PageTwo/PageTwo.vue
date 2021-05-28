<template>
  <div>
    <h1>Page Two</h1>
    <table>
      <tbody>
        <tr><td>Component File Version</td><td>{{fileVersion}}</td></tr>
      </tbody>
    </table>
    <h1>VersionUtil</h1>
    <table>
      <tbody>
        <tr><td>Instance File Version</td><td>{{instanceFileVersion}}</td></tr>
        <tr><td>Singleton File Version</td><td>{{singletonFileVersion}}</td></tr>
        <tr><td>Singleton Data</td><td>{{singletonServerVersion}}</td></tr>
        <tr><td>Instance Data</td><td>{{dynamicVersion}}</td></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import singletonVersionUtil from '@/Shared/singletonVersionUtil'
import VersionUtil from '@/Shared/versionUtil'
const versionUtil = new VersionUtil()

export default {
  name: 'PageTwo',
  data() {
    return {
      fileVersion: 1,
      serverVersion: 'N/A',
      singletonServerVersion: 'N/A'
    }
  },
  computed: {
    instanceFileVersion() {
      return versionUtil.fileVersion
    },
    singletonFileVersion() {
      return singletonVersionUtil.fileVersion
    },
    dynamicVersion() {
      return this.serverVersion
    },
    singletonDynamicVersion() {
      return this.singletonServerVersion
    }
  },
  mounted() {
    versionUtil.serverPromise.then((data) => {
      this.serverVersion = data.serverVersion
    })

    singletonVersionUtil.serverPromise.then((data) => {
      this.singletonServerVersion = data.serverVersion
    })
  }
}
</script>
<style scoped>
  table {
    margin: auto;
    font-size: 40px;
  }
</style>
