<template lang="">
  <div class="auth-container">
    <div style="background-color: rgba(255, 255, 255, 0.7); padding: 1rem; border-radius: 1rem">
      <h1 class="sub-title">안녕하세용 (●'ᴗ'●)ﾉ♥</h1>
      <b-form
        @submit="handleSubmit"
        style="width: 40rem; min-width: 30rem; display: flex; flex-direction: column; gap: 0.5rem"
      >
        <b-form-input
          :readonly="!isFocused"
          @focus="isFocused = true"
          v-model="name"
          type="text"
          placeholder="❤닉네임❤"
          required
        ></b-form-input>
        <b-form-input
          :readonly="!isFocused"
          @focus="isFocused = true"
          v-model="userId"
          type="text"
          placeholder="❤아이디❤"
          required
        ></b-form-input>
        <b-form-input
          :readonly="!isFocused"
          @focus="isFocused = true"
          v-model="password"
          type="password"
          placeholder="❤비밀번호❤"
          required
        ></b-form-input>
        <b-form-input
          :readonly="!isFocused"
          @focus="isFocused = true"
          v-model="confirmPassword"
          type="password"
          placeholder="❤비밀번호확인❤"
          required
        ></b-form-input>
        <b-button type="submit" variant="primary">❤회원가입❤</b-button>
      </b-form>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "UserSignUp",
  data() {
    return {
      name: "",
      userId: "",
      password: "",
      confirmPassword: "",
      isFocused: false,
    };
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      if (this.password !== this.confirmPassword) {
        alert("비밀번호를 확인해주세요");
        return;
      }
      const { data } = await axios({
        url: `http://70.12.50.130:9999/vue/api/user`,
        method: "post",
        data: {
          name: this.name,
          user_id: this.userId,
          pwd: this.password,
        },
      });
      if (!data) {
        alert("이미 존재하는 아이디 입니다");
        return;
      }
      this.$store.dispatch("login", { username: "ssafy" });
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss">
.auth-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
