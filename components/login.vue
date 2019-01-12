<template>
  <div class="login">
  	<button   open-type='getUserInfo' @getuserinfo='getuserinfo'></button>  	    
  </div>
</template>

<script>
import ut from '@/utils/index'
export default {
  props: ['text'],
  methods: {
      getuserinfo: function (e) {
		      console.log(e)
		  }
  }
}
</script>

<style>
.login{height: 100%;width: 100%;background: transparent;position: absolute;z-index: 1500;}
.login button{background: transparent;width: 100%;height: 100%;color: transparent;}
.login button:after{border: none;}
</style>
