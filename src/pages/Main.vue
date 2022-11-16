<template lang="">
  <div>
    <div id="list" style="padding: 0 3rem; display: flex; align-items: center; flex-direction: column">
      <h3 class="sub-title">나한테 모가 그러케 궁그맹??</h3>
      <b-container style="display: grid; grid-template-columns: 1fr 1fr 1fr; justify-content: center; gap: 1rem">
        <div v-for="(info, index) in infos" :key="index">
          <b-card-group deck>
            <b-card :title="info.title" header-tag="header" style="width: 25vw; font-size: 1.4rem">
              <template #header>
                <h6 style="font-size: 0.8rem; margin-bottom: 0.2rem">{{ info.regtime.split("T")[0] }}</h6>
                <h6 style="font-size: 0.8rem">작성자: {{ info.name ? info.name : info.writer }}</h6>
              </template>
              <b-card-text class="overflow-text mb-4" style="font-size: 1rem"> {{ info.content }}</b-card-text>
              <b-button href="#" variant="primary">
                <router-link :to="'/detail/' + info.no" style="color: white"> 자세히 보기 </router-link>
              </b-button>
            </b-card>
          </b-card-group>
        </div>
      </b-container>
    </div>
  </div>
</template>
<script>
import axios from "axios";
const addr = "http://70.12.50.130:9999/vue/api/board";
let intervalId;
export default {
  // eslint-disable-next-line
  name: "Main",
  data() {
    return {
      infos: [],
    };
  },
  methods: {
    handleClick(e) {
      console.log(e);
    },
  },
  async created() {
    // <목록조회>
    const { data } = await axios.get(addr);
    this.infos = data;
    console.log(intervalId);
    // intervalId = setInterval(async () => {
    //   const { data } = await axios.get(addr);
    //   this.infos = data;
    //   console.log(data);
    // }, 1000);
  },
  // destroyed() {
  //   clearInterval(intervalId);
  // },
};
</script>
<style lang="scss">
.overflow-text,
.card-title {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.card-title {
  font-family: "boldFont";
}
.sub-title {
  font-family: "boldFont";
  font-size: 3rem;
  margin-bottom: 2rem;
  color: black;
}
</style>
