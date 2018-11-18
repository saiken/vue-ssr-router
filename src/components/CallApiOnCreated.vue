/**
 * createdで呼んでいるAPIがサーバ側とクライアント側で2回実行されます
 */
<template>
  <div id="callApiOnCreated">
    <p>CallApiOnCreated</p>
    <p>{{ info }}</p>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'callApiOnCreated',
  data (){
    return {
      info: null
    }
  },
  created () {
    axios.get('http://localhost:8080/api/sleep5')
      .then(response => (this.info = response))
  }
}
</script>
