<template>
  <div>
    <div>{{ staticVersion }}</div>
    <div>{{ dynamicVersion }}</div>
  </div>
</template>

<script>
import VersionUtil from '@/Shared/versionUtil'
const versionUtil = new VersionUtil()

export default {
  name: 'PageTwo',
  data() {
    return {
      versionUtil: {},
      serverVersion: 'N/A'
    }
  },
  computed: {
    staticVersion() {
      return `Page Two hardcoded version: ${versionUtil.version}`
    },
    dynamicVersion() {
      return `Page Two dynamic version: ${this.serverVersion}`
    }
  },
  mounted() {
    versionUtil.serverPromise.then((data) => {
      this.serverVersion = data.serverVersion
    })
  }
}
</script>
