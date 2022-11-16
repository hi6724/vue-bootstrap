<template lang="">
  <div style="display: flex; justify-content: center; gap: 3rem">
    <b-form
      @submit="onSubmit"
      style="width: 30vw; min-width: 30rem; display: flex; flex-direction: column; gap: 0.5rem"
    >
      <b-form-group id="input-group-1" label="Title:" label-for="input-1">
        <b-form-input id="input-1" v-model="info.title" type="text" placeholder="Enter Title" required></b-form-input>
      </b-form-group>

      <b-form-textarea
        id="textarea"
        v-model="info.content"
        placeholder="Enter Content..."
        rows="3"
        max-rows="6"
        style="height: 25rem"
      ></b-form-textarea>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  // eslint-disable-next-line
  name: "regist",
  data() {
    return {
      info: { content: "", regtime: "", title: "", writer: "" },
    };
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      const url = "http://70.12.50.125:9999/vue/api/board";
      const regtime = new Date().toISOString();
      const data = {
        ...this.info,
        writer: "ssafy",
        regtime,
      };
      await axios({
        url,
        method: "POST",
        data,
      });
      this.$router.push("/");
    },
  },
};
</script>
<style lang=""></style>
