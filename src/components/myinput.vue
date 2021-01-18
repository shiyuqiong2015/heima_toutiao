<template>
  <input
    type="text"
    class="myinput"
    @input="hendleInput"
    :class="{success:flag,error:!flag}"
  >
</template>

<script>
export default {
  data() {
    return {
      flag: false,
    };
  },
  props: {
    rules: {
      type: RegExp,
    },
  },
  methods: {
    hendleInput(e) {
      let v = e.target.value;
      if (this.rules) {
        if (this.rules.test(v)) {
          // console.log("ok");
          this.flag = true;
        } else {
          // console.log("no");
          this.flag = false;
        }
      }
      this.$emit("input", v);
    },
  },
};
</script>

<style lang="less" scoped>
.myinput {
  width: 315 * 100vw /360;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  border: none;
  outline: none;
  background-color: #f2f2f2;
  border-bottom: 2px solid #949494;
  font-size: 18px;
}
.success {
  border-bottom: 2px solid green;
}
.error {
  border-bottom: 2px solid #cc3300;
}
</style>
