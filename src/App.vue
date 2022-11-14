<template>
  <div id="app">
    <b-jumbotron>
      <template #header>SSAFY 게시판</template>

      <template #lead> http://70.12.50.129:8080 </template>

      <p>뀨티현제님 놀러오세요~ ❤*.(๓´͈ ˘ `͈๓).*❤</p>

      <b-button style="margin-right: 1rem" @click="() => this.$router.push('/')" variant="primary" href="#"
        >홈으로</b-button
      >
      <b-button @click="() => this.$router.push('/regist')" variant="success" href="#">글작성</b-button>
    </b-jumbotron>

    <router-view style="min-height: 60vh"></router-view>

    <div style="padding: 1rem 2rem; border-top: 1px solid black; font-size: 0.8rem">
      <p>㈜이령컴패니 / 대표: 박이령 / 대표전화: 02-1234-5678 / &copy; 박이령 손유진 안재하 하훈목</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: "mapleStory", "Courier New", Courier, monospace;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>
