<template>
  <div id="app">
    <b-jumbotron>
      <template #header
        ><img style="height: 4.5rem" src="/favi.ico" />
        <span class="title">쁘띠현제한테 물어보세용 ㅎㅎ</span>
        <img style="height: 4.5rem" src="/favi.ico" />
      </template>
      <div class="header-items">
        <p>http://70.12.50.129:8080</p>
        <p>많은 질문 기다릴게요 ❤*.(๓´͈ ˘ `͈๓).*❤</p>
        <div v-if="this.$store.state.user">
          <b-button @click="() => this.$router.push('/')" variant="primary" href="#">홈으로</b-button>
          <b-button @click="() => this.$router.push('/regist')" variant="success" href="#">질문작성</b-button>
          <b-button @click="() => this.$store.dispatch('logout')" variant="success" href="#">로그아웃</b-button>
        </div>
        <div v-else>
          <b-button @click="() => this.$router.push('/')" variant="primary" href="#">홈으로</b-button>
          <b-button @click="() => this.$router.push('/login')" variant="success" href="#">로그인</b-button>
          <b-button @click="() => this.$router.push('/signup')" variant="success" href="#">회원가입</b-button>
        </div>
      </div>
    </b-jumbotron>

    <router-view class="app-view"></router-view>

    <div class="app-footer">
      <p>㈜현제컴패니 / 대표: 최현제 / 대표전화: 02-1234-5678 / &copy; 박이령 하훈목</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      img: require("./assets/bg.jpeg"),
    };
  },
  created() {
    const user = localStorage.getItem("user");
    user && this.$store.dispatch("login", JSON.parse(user));
  },
};
</script>

<style lang="scss">
@import "./reset.scss";
@font-face {
  font-family: "mapleStory";
  src: url("./assets/font.ttf");
}
@font-face {
  font-family: "boldFont";
  src: url("./assets/fontBold.ttf");
}
#app {
  font-family: "mapleStory", "Courier New", Courier, monospace;
}
.header-items {
  p {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
  }
  div {
    margin-top: 1rem;
    display: flex;
    gap: 0.5rem;
  }
}
.app-footer {
  padding: 1rem 2rem;
  border-top: 1px solid black;
  font-size: 0.8rem;
}
.app-view {
  min-height: 60vh;
  background-image: url("../public/bg.jpeg");
  background-repeat: repeat;
  background-size: contain;
  padding: 1rem;
}
.title {
  background-image: linear-gradient(90deg, red, orange, yellow, green, blue, navy, purple);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;
}
</style>
