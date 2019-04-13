<template>
	<div @click.stop="changeVisibileModal(!visibile)" v-show="visibile"  class="action-sheet">
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
		top: 0upx;
		left: 0upx;
		z-index: 9999;
	}
	.action-main-wrap {
		width: 100%;
		max-height: 890upx;
		overflow: auto;
		background: #fff;
		position: absolute;
		bottom: 0upx;
		box-sizing: border-box;
		padding: 30upx;
	}
	.action-main {
		width: 100%;
		height: 100%;
		position: relative;
		overflow:hidden;
	}
	.action-close {
		width: 30upx;
		height: 30upx;
		box-sizing: border-box;
		border: 1px solid #fec200;
		border-radius: 50%;
		color: #fec200;
		font-size: 20upx;
		display:flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
		position: absolute;
		right: 0upx;
		z-index: 10;
	}
</style>
