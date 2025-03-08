<template>
  <div class="container">
    <div class="section section1">
      <div class="content-left">
        <p class="title">การซื้อบัญชี</p>
        <p>
          <span class="changing-text" :style="{ color: textColor }">
            {{ animatedText }}
          </span>
          <span class="blue-text"> ได้สะดวกทุกเวลา</span>
        </p>

        <div class="buttons">
          <button>ช็อปเลย</button>
          <button>ดูโปรโมชั่น</button>
        </div>
      </div>
      <div class="content-right">
        <img src="/images/shop.png" alt="Image" />
      </div>
    </div>

    <div class="section section2">
      <div class="sub-section top-section">
        <p class="section-title">ข่าวสารและโปรโมชั่น</p>
        <div class="image-container">
          <div class="image-box">375 X 375</div>
          <div class="image-box">375 X 375</div>
          <div class="image-box">375 X 375</div>
        </div>
      </div>
      <div class="sub-section bottom-section">
        <div class="bottom-content">
          <div ref="bottomImage" class="bottom-image hidden">
            <img src="/images/post.png" alt="" />
          </div>
          <div ref="bottomText" class="bottom-text hidden">
            <h2>ทำไมต้องใช้บริการเว็บไซต์ของเรา</h2>
            <p>
              เราเป็นร้านค้าออนไลน์ที่จำหน่ายบัญชีแอปสตรีมมิ่ง บัญชีอีเมล และ
              สินค้าอื่นๆ อีกมากมาย มั่นใจได้ในความสะดวก ปลอดภัยและรวดเร็ว
              ด้วยระบบอัตโนมัติราคาประหยัด คุ้มค่าพร้อมโปรโมชั่นสุดพิเศษตลอด
              มีสินค้าหลากหลายให้เลือกซื้อ ระบบเติมเงินใช้งานง่าย ตลอด 24
              ชั่วโมง
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="section section3">
      <div class="inner-section inner1">
        <div class="left-content">
          <h2>Store Shop</h2>
          <p>
            ร้านค้าออนไลน์ที่จำหน่ายสินค้าที่เกี่ยวข้องกับบัญชีแอปสตรีมมิ่งบัญชีอีเมล
            และอื่นๆ
          </p>
        </div>
        <div class="right-content">
          <div class="topic">
            <h3>ศูนย์ช่วยเหลือ</h3>
            <p @click="navigateTo('terms')">ข้อกำหนดและเงื่อนไขการใช้งาน</p>
            <p @click="navigateTo('privacy')">นโยบายความเป็นส่วนตัว</p>
          </div>
          <div class="topic">
            <h3>เกี่ยวกับ Store Shop</h3>
            <p @click="navigateTo('about')">เกี่ยวกับเรา</p>
          </div>
          <div class="topic">
            <h3>ติดต่อเรา</h3>
            <p @click="navigateTo('facebook')">Facebook</p>
            <p @click="navigateTo('email')">Email</p>
            <p @click="navigateTo('line')">Line</p>
          </div>
        </div>
      </div>
      <div class="inner-section inner2">
        <p class="made-with-metis">Made With Metis</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const texts = ["สตรีมมิ่ง", "เกมส์"];
const colors = ["#a412d9", "#DB242D"];
const animatedText = ref(texts[0]);
const textColor = ref(colors[0]);

let index = 0;
let interval = null;

const bottomImage = ref(null);
const bottomText = ref(null);
onMounted(() => {
  interval = setInterval(() => {
    index = (index + 1) % texts.length;
    animatedText.value = texts[index];
    textColor.value = colors[index];
  }, 7000);

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold: 0.3 }
  );

  if (bottomImage.value) observer.observe(bottomImage.value);
  if (bottomText.value) observer.observe(bottomText.value);
});

onUnmounted(() => {
  clearInterval(interval);
});

const navigateTo = (page) => {
  switch (page) {
    case "terms":
      window.location.href = "/terms";
      break;
    case "privacy":
      window.location.href = "/privacy";
      break;
    case "about":
      window.location.href = "/about";
      break;
    case "facebook":
      window.location.href = "https://facebook.com";
      break;
    case "email":
      window.location.href = "metis0987568205@gmail.com";
      break;
    case "line":
      window.location.href = "https://line.me";
      break;
    default:
      window.location.href = "/shops";
  }
};
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-x: hidden;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  overflow-x: hidden;
}

.section1 {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 170px;
  height: 670px;
}

.content-left {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: left;
}

.title {
  font-size: 35px;
  font-weight: bold;
  color: black;
}

.changing-text {
  font-size: 35px;
  font-weight: bold;
  transition: color 1s ease-in-out;
}

.blue-text {
  font-size: 35px;
  font-weight: bold;
  color: #64a7fa;
}

.buttons button {
  margin-right: 10px;
  margin-top: 10px;
  padding: 5px 13px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  cursor: pointer;
}

.buttons button:first-child {
  background-color: #64a7fa;
  color: white;
}

.buttons button:last-child {
  background-color: #7f8c9f;
  color: white;
}

.content-right {
  width: 50%;
  display: flex;
  justify-content: center;
}

.content-right img {
  max-width: 600px;
  height: auto;
  border-radius: 8px;
}

.sub-section {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
}

.top-section {
  background-color: #64a7fa;
  padding: 20px 0;
  width: 100vw;
}

.bottom-section {
  background-color: #ffffffff;
  width: 100vw;
  height: 900px;
}

.section-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
  align-self: flex-start;
  margin-left: 187px;
}

.image-container {
  display: flex;
  gap: 20px;
}

.image-box {
  width: 375px;
  height: 375px;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  border-radius: 10px;
}

.bottom-section {
  background-color: #ffffff;
  width: 100vw;
  height: 25vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 100px;
}

.bottom-content {
  display: flex;
  align-items: center;
  gap: 50px;
  max-width: 1200px;
  width: 100%;
  margin-left: 170px;
}

.bottom-image img {
  width: 350px;
  height: auto;
  border-radius: 10px;
}

.bottom-text {
  max-width: 600px;
  font-size: 20px;
  color: #333;
}
.bottom-text h2 {
  font-size: 36px;
  color: #64a7fa;
  font-weight: bold;
}

.bottom-text p {
  font-size: 18px;
  color: #7f8c9f;
  line-height: 1.6;
}

.hidden {
  opacity: 0;
  transform: translateX(100px);
}

.show {
  opacity: 1;
  transform: translateX(0);
  transition: all 1s ease-out;
}

.bottom-image {
  transform: translateX(-100px);
  transition: all 1s ease-out;
}

.bottom-text {
  transform: translateX(100px);
  transition: all 1s ease-out;
}

.bottom-image.show {
  transform: translateX(0);
}

.bottom-text.show {
  transform: translateX(0);
}
.section3 {
  display: flex;
  flex-direction: column;
  width: 100vw;
  overflow: hidden;
  height: 250px;
  padding-bottom: 0;
}

.inner-section {
  width: 100%;
}

.inner1 {
  height: 70%;
  background-color: #dbeafe;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 170px;
}

.left-content {
  max-width: 40%;
  align-self: flex-start;
  margin-top: 30px;
}

.left-content h2 {
  font-size: 32px;
  color: #64a7fa;
}

.left-content p {
  font-size: 15.5px;
  color: #7f8c9f;
}

.right-content {
  display: flex;
  gap: 40px;
  text-align: left;
}

.topic {
  text-align: left;
}

.topic h3 {
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
}

.topic p {
  font-size: 16px;
  color: #7f8c9f;
  cursor: pointer;
  transition: color 0.3s ease;
  margin: 5px 0;
}

.topic p:hover {
  color: #64a7fa;
}
.inner2 {
  height: 30%;
  background-color: #64a7fa;
  display: flex;
  justify-content: center;
  align-items: center;
}

.made-with-metis {
  font-size: 20px;
  color: white;
  font-weight: bold;
}
</style>
