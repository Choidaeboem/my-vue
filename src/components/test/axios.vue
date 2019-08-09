<template>
    <div>

    </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      resData: [],
      Domain: '',
      Option: '&display=Y&sellAccept=Y'
      // Key: [
      //   {axios.defaults.headers.common['Shopkey'] = 'dfe42ba4517bd78d5fd0caa6e8bc0fe4'},
      //   {axios.defaults.headers.common['Licensekey'] = 'MThjN2NhYzg2NjcyNjZlMDVlMTQxYzhmNmMyOTliY2U='}
      // ]
    }
  },
  methods: {
    request (methods, url, data) {
      return axios.get({
        methods,
        url: 'http://www.okkane.co.kr/list/open_api.html?mode=search&type=' +

        +'&display=Y&sellAccept=Y',
        data
      })
    }
  },
  created () {
    const r = this.request('get', 'product', this.Key)
    r.then(res => {
      console.log('res -> ', res)
    })
      .catch(err => {
        console.log('err -> ', err)
      })
  }
}
</script>

<style>

</style>
