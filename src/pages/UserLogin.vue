<template lang="">
  <div class="auth-container">
    <div style="background-color: rgba(255, 255, 255, 0.7); padding: 1rem; border-radius: 1rem">
      <h1 class="sub-title">돌아와줘서 고마워요 |ૂ•ᴗ•⸝⸝)”</h1>
      <b-form
        @submit="handleSubmit"
        style="width: 40rem; min-width: 30rem; display: flex; flex-direction: column; gap: 0.5rem"
      >
        <b-form-input
          :readonly="!isFocused"
          @focus="isFocused = true"
          id="input-1"
          v-model="userId"
          type="text"
          placeholder="❤아이디❤"
          required
        ></b-form-input>
        <b-form-input
          :readonly="!isFocused"
          @focus="isFocused = true"
          id="input-1"
          v-model="password"
          type="password"
          placeholder="❤비밀번호❤"
          required
        ></b-form-input>
        <b-button type="submit" variant="primary">❤로그인❤</b-button>
      </b-form>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "UserLogin",
  data() {
    return {
      userId: "",
      password: "",
      isFocused: false,
    };
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();

      const { data } = await axios({
        url: `http://70.12.50.130:9999/vue/api/login`,
        method: "post",
        data: {
          user_id: this.userId,
          pwd: this.password,
        },
      });
      if (!data) {
        alert("틀렸습니다");
        return;
      }
      this.$store.dispatch("login", { username: "ssafy" });
      this.$router.push("/");
    },
  },
};
</script>
<style lang=""></style>
