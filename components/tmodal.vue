<template>
	<div @click.stop="changeVisibileModal(!visibile)" v-show="visibile" catchtouchmove="true" class="action-sheet">
	  <div class="action-main-wrap" @click.stop="cancelVisibileModal">
		  <div class="action-main">
			  <div @click.stop="changeVisibileModal(false)" class="action-close">&times;</div>
			  <slot v-if="visibile"></slot>
		  </div>
	  </div>
	</div>
</template>

<script>
export default {
  props: ["visibile","changeVisible"],
  methods: {
	  changeVisibileModal(status) {
			this.$emit('changeVisible', status);
			//this.$parent.changeVisible(status);
	  },
		cancelVisibileModal() {
			return;
		}
  }
}
</script>

<style>
	.action-sheet {
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.3);
		position: fixed;
		top: 0px;
		left: 0px;
		z-index: 99;
	}
	.action-main-wrap {
		width: 100%;
		max-height: 890px;
		overflow: auto;
		background: #fff;
		position: absolute;
		bottom: 0px;
		box-sizing: border-box;
		padding: 30px;
	}
	.action-main {
		width: 100%;
		height: 100%;
		position: relative;
		overflow:hidden;
	}
	.action-close {
		width: 30px;
		height: 30px;
		box-sizing: border-box;
		border: 1px solid #fec200;
		border-radius: 50%;
		color: #fec200;
		font-size: 20px;
		display:flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
		position: absolute;
		right: 0px;
		z-index: 10;
	}
</style>
