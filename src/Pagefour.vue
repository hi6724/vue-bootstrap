<template lang="">
  <div style="display: flex; justify-content: center; gap: 3rem">
    <b-card
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
      ></b-form-textarea>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
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
  created() {
    console.log();
    axios({
      url: `http://70.12.50.129:9999/vue/api/board/${this.$router.history.current.params.no}`,
      method: "get",
    })
      .then((respData) => {
        console.log(respData);
        // if (respData.status == 200) {
        //   alert("글 조회 성공");
        // }
        this.info = respData.data;
        console.log(respData.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally();
  },
  methods: {
    editPost(e) {
      e.preventDefault();
      axios({
        url: `http://70.12.50.129:9999/vue/api/board/${this.$router.history.current.params.no}`,
        method: "put",
        data: this.info,
      });
      location.href = "/pageThree";
    },
  },
};
</script>
<style lang=""></style>
