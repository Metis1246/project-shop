<template>
  <div class="min-h-screen w-full overflow-x-hidden">
    <!-- Section 1 -->
    <div class="flex items-center justify-center px-40 h-[675px]">
      <div class="w-full flex flex-col justify-center items-start text-left">
        <p class="text-5xl font-bold text-black">การซื้อบัญชี</p>
        <p>
          <span
            :class="[
              'text-5xl font-bold',
              {
                'text-[#a412d9]': textColor === '#a412d9',
                'text-[#DB242D]': textColor === '#DB242D',
              },
            ]"
          >
            {{ animatedText }}
          </span>
          <span class="text-5xl font-bold text-[#64a7fa]">
            ได้สะดวกทุกเวลา</span
          >
        </p>
        <div class="flex gap-2 mt-4">
          <NuxtLink
            to="/shops"
            class="bg-[#64a7fa] text-white px-4 py-2 rounded-lg font-bold"
          >
            ช็อปเลย
          </NuxtLink>
          <NuxtLink
            to="/promotions"
            class="bg-[#7f8c9f] text-white px-4 py-2 rounded-lg font-bold"
          >
            ดูโปรโมชั่น
          </NuxtLink>
        </div>
      </div>
      <div class="w-1/2 flex justify-center">
        <img
          src="/images/shop.png"
          alt="Image"
          class="max-w-[600px] rounded-lg"
        />
      </div>
    </div>

    <!-- Section 2 -->
    <div class="w-full">
      <div class="bg-[#64a7fa] w-full py-5">
        <p class="text-2xl font-bold text-white ml-48">ข่าวสารและโปรโมชั่น</p>
        <div class="flex gap-5 justify-center mt-5">
          <div
            class="w-[375px] h-[375px] bg-white text-black flex items-center justify-center rounded-lg text-2xl font-bold"
          >
            375 X 375
          </div>
          <div
            class="w-[375px] h-[375px] bg-white text-black flex items-center justify-center rounded-lg text-2xl font-bold"
          >
            375 X 375
          </div>
          <div
            class="w-[375px] h-[375px] bg-white text-black flex items-center justify-center rounded-lg text-2xl font-bold"
          >
            375 X 375
          </div>
        </div>
      </div>
      <div
        class="bg-white w-full h-[400px] flex justify-center items-center px-24"
      >
        <div class="flex items-center gap-12 max-w-[1200px] w-full ml-48">
          <div ref="bottomImage" class="slide-in-left">
            <img src="/images/post.png" alt="" class="w-[350px] rounded-lg" />
          </div>
          <div ref="bottomText" class="slide-in-right max-w-[600px]">
            <h2 class="text-4xl font-bold text-[#64a7fa]">
              ทำไมต้องใช้บริการเว็บไซต์ของเรา
            </h2>
            <p class="text-lg text-[#7f8c9f] mt-4 leading-relaxed">
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

    <!-- Section 3 -->
    <div class="w-full h-[250px] flex flex-col">
      <div class="h-[70%] bg-[#dbeafe] flex justify-between items-center px-48">
        <div class="max-w-[40%] mt--1">
          <h2 class="text-3xl font-bold text-[#64a7fa]">Store Shop</h2>
          <p class="text-sm text-[#7f8c9f] mt-2">
            ร้านค้าออนไลน์ที่จำหน่ายสินค้าที่เกี่ยวข้องกับบัญชีแอปสตรีมมิ่งบัญชีอีเมล
            และอื่นๆ
          </p>
        </div>
        <div class="flex gap-10 text-left">
          <div>
            <h3 class="text-xl text-[#333] mb-2">ศูนย์ช่วยเหลือ</h3>
            <NuxtLink
              to="/terms"
              class="text-sm text-[#7f8c9f] cursor-pointer hover:text-[#64a7fa] transition-colors duration-300"
            >
              ข้อกำหนดและเงื่อนไขการใช้งาน
            </NuxtLink>
            <NuxtLink
              to="/privacy"
              class="text-sm text-[#7f8c9f] cursor-pointer hover:text-[#64a7fa] transition-colors duration-300"
              ><br />
              นโยบายความเป็นส่วนตัว
            </NuxtLink>
          </div>
          <div>
            <h3 class="text-xl text-[#333] mb-2">เกี่ยวกับ Store Shop</h3>
            <NuxtLink
              to="/about"
              class="text-sm text-[#7f8c9f] cursor-pointer hover:text-[#64a7fa] transition-colors duration-300"
            >
              เกี่ยวกับเรา
            </NuxtLink>
          </div>
          <div>
            <h3 class="text-xl text-[#333] mb-2">ติดต่อเรา</h3>
            <NuxtLink
              to="https://facebook.com"
              target="_blank"
              class="text-sm text-[#7f8c9f] cursor-pointer hover:text-[#64a7fa] transition-colors duration-300"
            >
              Facebook
            </NuxtLink>
            <br />
            <NuxtLink
              to="mailto:metis0987568205@gmail.com"
              class="text-sm text-[#7f8c9f] cursor-pointer hover:text-[#64a7fa] transition-colors duration-300"
            >
              Email
            </NuxtLink>
            <br />
            <NuxtLink
              to="https://line.me"
              target="_blank"
              class="text-sm text-[#7f8c9f] cursor-pointer hover:text-[#64a7fa] transition-colors duration-300"
            >
              Line
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="h-[30%] bg-[#64a7fa] flex justify-center items-center">
        <p class="text-xl text-white font-bold">Made With Metis</p>
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
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
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

<style>
.slide-in-left {
  opacity: 0;
  transform: translateX(-100px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.slide-in-right {
  opacity: 0;
  transform: translateX(100px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.slide-in-left.active {
  opacity: 1;
  transform: translateX(0);
}

.slide-in-right.active {
  opacity: 1;
  transform: translateX(0);
}
</style>
