<template lang="">
  <div>
    <div id="list" style="padding: 0 3rem; display: flex; align-items: center; flex-direction: column">
      <h3>글목록</h3>
      <b-container style="display: grid; grid-template-columns: 1fr 1fr 1fr; justify-content: center; gap: 1rem">
        <div v-for="(info, index) in infos" :key="index">
          <b-card-group deck>
            <b-card :title="info.title" header-tag="header" style="width: 25vw">
              <template #header>
                <h6 class="mb-0">{{ info.regtime.split("T")[0] }}</h6>
              </template>
              <b-card-text style="width: 100%; overflow: hidden; white-space: nowrap; text-overflow: ellipsis">
                {{ info.content }}</b-card-text
              >
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
const addr = "http://70.12.50.129:9999/vue/api/board";
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
    console.log(data);
  },
};
</script>
<style lang=""></style>
