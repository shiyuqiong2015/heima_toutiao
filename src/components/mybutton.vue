<template>
  <div
    class="btn"
    :class="{'primary':type =='primary','success':type=='success','danger':type=='danger'}"
    @click='hendleClick'
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
    },
  },
  methods: {
    hendleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="less" scoped>
.btn {
  margin: 0 auto;
  width: 315 * 100vw/360;
  // width: 90%;
  height: 40px;

  border-radius: 20px;
  text-align: center;
  line-height: 40px;
}
.primary {
  background-color: #ccc;
  color: #666;
}
.danger {
  background-color: #cc3300;
  color: #eac4a9;
}
.success {
  background-color: green;
  color: #fff;
}
</style>
