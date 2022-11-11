<template lang="">
  <div>
    <div id="list" style="padding: 0 3rem; display: flex; align-items: center; flex-direction: column">
      <h3>글목록</h3>
      <b-container style="display: grid; grid-template-columns: 1fr 1fr 1fr">
        <div v-for="(info, index) in infos" :key="index">
          <b-card
            :title="info.no + ' ' + info.title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text style="width: 100%; overflow: hidden; white-space: nowrap; text-overflow: ellipsis">
              {{ info.content }}
            </b-card-text>
            <b-button href="#" variant="primary">
              <router-link :to="'/pageFour/' + info.no" style="color: white"> 자세히 보기 </router-link>
            </b-button>
          </b-card>
        </div>
      </b-container>
    </div>
  </div>
</template>
<script>
import axios from "axios";

const addr = "http://70.12.50.129:9999/vue/api/board";
export default {
  name: "PageThree",
  data() {
    return {
      infos: [],
      info: {
        no: "",
        title: "",
        writer: "",
        content: "",
      },
      editInfo: {
        no: "",
        title: "",
        writer: "",
        content: "",
      },
    };
  },
  methods: {
    handleClick(e) {
      console.log(e);
    },
  },
  created() {
    // <목록조회>
    axios
      .get(addr)
      .then((response) => {
        //정상처리
        console.log(response);
        this.infos = response.data;
      })
      .catch((error) => {
        //에러발생
        console.log(error);
      });
    axios({
      url: addr,
      method: "get",
    })
      .then((respData) => {
        this.infos = respData.data;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally();
  },
};
</script>
<style lang=""></style>
