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
      <div class="inner-section inner1"></div>
      <div class="inner-section inner2"></div>
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
  width: 100vw;
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
  height: 475px;
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
  height: auto; /* เปลี่ยนจาก height เป็น auto เพื่อให้ความสูงตามเนื้อหา */
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
  height: 100vh; /* ปรับเป็น 100vh เพื่อให้ความสูงเต็มจอ */
  overflow: hidden; /* ป้องกันการแสดงเนื้อหาส่วนเกิน */
}

.inner-section {
  width: 100%;
}

.inner1 {
  height: 30%;
  background-color: #dbeafe;
}

.inner2 {
  height: 15%;
  background-color: #64a7fa;
}
</style>
