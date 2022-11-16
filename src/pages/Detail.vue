<template lang="">
  <div>
    <div style="display: flex; justify-content: center; gap: 3rem">
      <b-card
        :title="info.title"
        style="width: 40rem; height: 100%; min-height: 30rem; background-color: rgba(255, 255, 255, 0.9)"
      >
        <b-card-sub-title
          style="
            display: flex;
            justify-content: space-between;
            padding-bottom: 1rem;
            margin-bottom: 1rem;
            border-bottom: 1px solid black;
          "
        >
          <span>
            {{ info.regtime.split("T")[0] }}
          </span>
          <span> 작성자 : {{ user.name }} </span>
        </b-card-sub-title>
        <b-card-text style="white-space: break-spaces">
          {{ info.content }}
        </b-card-text>
      </b-card>

      <b-form
        @submit="editPost"
        style="width: 40rem; min-width: 30rem; display: flex; flex-direction: column; gap: 0.5rem"
        v-if="info.writer === this.$store.state.user.user_id || this.$store.state.user.user_id === 'admin'"
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
    <b-form-textarea
      v-if="this.$store.state.user.user_id === 'admin'"
      id="textarea"
      v-model="info.answer"
      placeholder="답변작성"
      rows="3"
      max-rows="6"
      style="height: 25rem; margin-top: 4rem"
    ></b-form-textarea>
    <b-jumbotron v-else class="mt-4" header="" :lead="info.answer ? info.answer : '현제가 고민중이에용  '">
    </b-jumbotron>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "PageFour",
  data() {
    return {
      info: { content: "", no: "", regtime: "", title: "", writer: "", answer: "" },
      user: {},
    };
  },
  async created() {
    if (this.$store.state.user === null) {
      this.$router.replace("/");
      alert("답변을 보려면 로그인 해 주세요");
      return;
    }
    const { data } = await axios({
      url: `http://70.12.50.130:9999/vue/api/board/${this.$router.history.current.params.no}`,
      method: "get",
    });
    this.info = data;
    const userData = await axios({
      url: `http://70.12.50.130:9999/vue/api/${data.writer}`,
      method: "get",
      params: data.user_id,
    });
    this.user = userData.data;
  },
  methods: {
    async editPost(e) {
      e.preventDefault();
      if (this.info.answer !== null && this.$store.state.user.user_id !== "admin") {
        alert("답변이 달린 후에는 변경할 수 없습니다");
        return;
      }
      await axios({
        url: `http://70.12.50.130:9999/vue/api/board/${this.$router.history.current.params.no}`,
        method: "put",
        data: this.info,
      });
      !this.$store.state.user.user_id === "admin" && this.$router.push("/");
    },
    async handleDelete() {
      await axios({
        url: `http://70.12.50.130:9999/vue/api/board/${this.$router.history.current.params.no}`,
        method: "DELETE",
      });
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss">
.card-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}
</style>
