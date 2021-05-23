<template>
  <div>
    <div>{{ staticVersion }}</div>
    <div>{{ dynamicVersion }}</div>
    <div>{{ singletonDynamicVersion }}</div>
  </div>
</template>

<script>
import singletonVersionUtil from '@/Shared/singletonVersionUtil'
import VersionUtil from '@/Shared/versionUtil'
const versionUtil = new VersionUtil()

export default {
  name: 'PageOne',
  data() {
    return {
      serverVersion: 'N/A',
      singletonServerVersion: 'N/A'
    }
  },
  computed: {
    staticVersion() {
      return `Page One hardcoded version: ${versionUtil.version}`
    },
    dynamicVersion() {
      return `Page One server version: ${this.serverVersion}`
    },
    singletonDynamicVersion() {
      return `Page One server singleton version: ${this.singletonServerVersion}`
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
