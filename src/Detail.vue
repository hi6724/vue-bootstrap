<template lang="">
  <div style="display: flex; justify-content: center; gap: 3rem">
    <!-- <b-card
      :title="info.title"
      img-src="https://placekitten.com/g/450/300"
      img-alt="Image"
      img-top
      style="width: 30vw; min-width: 30rem"
    >
      <b-card-text>
        {{ info.content }}
      </b-card-text>
      <template #footer>
        <small class="text-muted">{{ info.regtime.split("T")[0] }}</small>
      </template>
    </b-card> -->

    <b-card
      :title="info.title"
      :sub-title="info.regtime.split('T')[0]"
      style="width: 30vw; height: 100%; min-height: 30rem"
    >
      <b-card-text>
        {{ info.content }}
      </b-card-text>
    </b-card>

    <b-form
      @submit="editPost"
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
      <b-button @click="handleDelete" type="button" variant="danger">Delete</b-button>
    </b-form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "PageFour",
  data() {
    return {
      info: { content: "", no: "", regtime: "", title: "", writer: "" },
    };
  },
  async created() {
    const { data } = await axios({
      url: `http://70.12.50.125:9999/vue/api/board/${this.$router.history.current.params.no}`,
      method: "get",
    });
    this.info = data;
  },
  methods: {
    async editPost(e) {
      e.preventDefault();
      await axios({
        url: `http://70.12.50.125:9999/vue/api/board/${this.$router.history.current.params.no}`,
        method: "put",
        data: this.info,
      });
      this.$router.push("/");
    },
    async handleDelete() {
      await axios({
        url: `http://70.12.50.125:9999/vue/api/board/${this.$router.history.current.params.no}`,
        method: "DELETE",
      });
      this.$router.push("/");
    },
  },
};
</script>
<style lang=""></style>
