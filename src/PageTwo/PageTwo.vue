<template>
  <div>
    <h2>Page Two internal version: {{internalVersion}}</h2>
    <table>
      <tbody>
        <tr><td>Hardcoded Version</td><td>{{staticVersion}}</td></tr>
        <tr><td>Server Singleton Version</td><td>{{singletonServerVersion}}</td></tr>
        <tr><td>Server Version</td><td>{{dynamicVersion}}</td></tr>
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
      internalVersion: 1,
      serverVersion: 'N/A',
      singletonServerVersion: 'N/A'
    }
  },
  computed: {
    staticVersion() {
      return versionUtil.version
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
  }
</style>
