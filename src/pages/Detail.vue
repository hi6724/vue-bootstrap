<template lang="">
  <div>
    <div style="display: flex; justify-content: center; gap: 3rem">
      <b-card
        :title="info.title"
        :sub-title="info.regtime.split('T')[0]"
        style="width: 40rem; height: 100%; min-height: 30rem"
      >
        <b-card-text style="white-space: break-spaces">
          {{ info.content }}
        </b-card-text>
      </b-card>

      <b-form
        @submit="editPost"
        style="width: 40rem; min-width: 30rem; display: flex; flex-direction: column; gap: 0.5rem"
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
        <b-button @click="handleDelete" type="button" variant="danger">Delete</b-button>
      </b-form>
    </div>
    <div>여기에 답변이 들어갈거임</div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "PageFour",
  data() {
    return {
      info: { content: "", no: "", regtime: "", title: "", writer: "", answer: "" },
    };
  },
  async created() {
    if (this.$store.state.user === null) {
      this.$router.replace("/");
      alert("답변을 보려면 로그인 해 주세요");
      return;
    }
    const { data } = await axios({
      url: `http://70.12.50.129:9999/vue/api/board/${this.$router.history.current.params.no}`,
      method: "get",
    });
    this.info = data;
  },
  methods: {
    async editPost(e) {
      e.preventDefault();
      await axios({
        url: `http://70.12.50.129:9999/vue/api/board/${this.$router.history.current.params.no}`,
        method: "put",
        data: this.info,
      });
      this.$router.push("/");
    },
    async handleDelete() {
      await axios({
        url: `http://70.12.50.129:9999/vue/api/board/${this.$router.history.current.params.no}`,
        method: "DELETE",
      });
      this.$router.push("/");
    },
  },
};
</script>
<style lang=""></style>
