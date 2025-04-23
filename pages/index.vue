<template>
  <div class="min-h-screen w-full overflow-x-hidden">
    <!-- Section 1 -->
    <div
      class="flex flex-col md:flex-row items-center justify-center px-4 md:px-10 lg:px-40 py-10 md:py-0 md:h-[80vh]"
    >
      <div
        class="w-full md:w-1/2 flex flex-col justify-center items-start text-left order-2 md:order-1 mt-8 md:mt-0"
      >
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
          การซื้อบัญชี
        </h1>
        <p class="mt-2">
          <span
            :class="[
              'text-3xl md:text-4xl lg:text-5xl font-bold',
              {
                'text-[#a412d9]': textColor === '#a412d9',
                'text-[#DB242D]': textColor === '#DB242D',
              },
            ]"
          >
            {{ animatedText }}
          </span>
          <span
            class="text-3xl md:text-4xl lg:text-5xl font-bold text-[#64a7fa]"
          >
            ได้สะดวกทุกเวลา</span
          >
        </p>
        <div class="flex gap-2 mt-6">
          <NuxtLink
            to="/shops"
            class="bg-[#64a7fa] text-white px-4 py-2 rounded-lg font-bold text-sm md:text-base"
          >
            ช็อปเลย
          </NuxtLink>
          <button
            @click="scrollToPromotions"
            class="bg-[#7f8c9f] text-white px-4 py-2 rounded-lg font-bold cursor-pointer text-sm md:text-base"
          >
            ดูโปรโมชั่น
          </button>
        </div>
      </div>
      <div class="w-full md:w-1/2 flex justify-center order-1 md:order-2">
        <img
          src="/images/shop.png"
          alt="Image"
          class="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[600px] rounded-lg"
        />
      </div>
    </div>

    <!-- Section 2 -->
    <div class="w-full" ref="promotionsSection">
      <div class="bg-[#64a7fa] w-full py-5">
        <p
          class="text-xl md:text-2xl font-bold text-white text-center md:text-left md:ml-12 lg:ml-48"
        >
          ข่าวสารและโปรโมชั่น
        </p>
        <div class="relative mt-5 px-4">
          <!-- Mobile slider -->
          <div
            class="md:hidden overflow-x-auto whitespace-nowrap pb-4 scrollbar-hide"
          >
            <div class="inline-flex gap-4">
              <div
                class="w-[280px] h-[280px] inline-block bg-white text-black flex items-center justify-center rounded-lg text-xl font-bold mx-1"
              >
                โปรโมชั่น 1
              </div>
              <div
                class="w-[280px] h-[280px] inline-block bg-white text-black flex items-center justify-center rounded-lg text-xl font-bold mx-1"
              >
                โปรโมชั่น 2
              </div>
              <div
                class="w-[280px] h-[280px] inline-block bg-white text-black flex items-center justify-center rounded-lg text-xl font-bold mx-1"
              >
                โปรโมชั่น 3
              </div>
            </div>
          </div>

          <!-- Desktop view -->
          <div class="hidden md:flex gap-5 justify-center">
            <div
              class="w-[280px] md:w-[320px] h-[280px] md:h-[320px] bg-white text-black flex items-center justify-center rounded-lg text-xl md:text-2xl font-bold"
            >
              โปรโมชั่น 1
            </div>
            <div
              class="w-[280px] md:w-[320px] h-[280px] md:h-[320px] bg-white text-black flex items-center justify-center rounded-lg text-xl md:text-2xl font-bold"
            >
              โปรโมชั่น 2
            </div>
            <div
              class="w-[280px] md:w-[320px] h-[280px] md:h-[320px] bg-white text-black flex items-center justify-center rounded-lg text-xl md:text-2xl font-bold"
            >
              โปรโมชั่น 3
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-white w-full py-10 md:py-20 flex justify-center items-center px-4 md:px-24"
      >
        <div
          class="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full max-w-6xl md:ml-12 lg:ml-48"
        >
          <div ref="bottomImage" class="slide-in-left w-full md:w-auto">
            <img
              src="/images/post.png"
              alt=""
              class="w-full max-w-[280px] md:max-w-[350px] mx-auto rounded-lg"
            />
          </div>
          <div ref="bottomText" class="slide-in-right w-full md:max-w-[600px]">
            <h2
              class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#64a7fa] text-center md:text-left"
            >
              ทำไมต้องใช้บริการเว็บไซต์ของเรา
            </h2>
            <p
              class="text-base md:text-lg text-[#7f8c9f] mt-4 leading-relaxed text-center md:text-left"
            >
              เราเป็นร้านค้าออนไลน์ที่จำหน่ายบัญชีแอปสตรีมมิ่ง บัญชีอีเมล และ
              สินค้าอื่นๆ อีกมากมาย มั่นใจได้ในความสะดวก ปลอดภัยและรวดเร็ว
              ด้วยระบบอัตโนมัติราคาประหยัด คุ้มค่าพร้อมโปรโมชั่นสุดพิเศษตลอด
              มีสินค้าหลากหลายให้เลือกซื้อ ระบบชำระเงินใช้งานง่าย ตลอด 24
              ชั่วโมง
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 3 -->
    <div class="w-full flex flex-col">
      <div
        class="bg-[#dbeafe] flex flex-col lg:flex-row justify-between items-start lg:items-center py-10 px-4 lg:px-12 xl:px-48"
      >
        <div class="w-full lg:max-w-[40%] mb-8 lg:mb-0">
          <h2 class="text-2xl md:text-3xl font-bold text-[#64a7fa]">
            Store Shop
          </h2>
          <p class="text-sm md:text-base text-[#7f8c9f] mt-2">
            ร้านค้าออนไลน์ที่จำหน่ายสินค้าที่เกี่ยวข้องกับบัญชีแอปสตรีมมิ่งบัญชีอีเมล
            และอื่นๆ
          </p>
        </div>
        <div
          class="w-full grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 text-left"
        >
          <div>
            <h3 class="text-base md:text-lg lg:text-xl text-[#333] mb-2">
              ศูนย์ช่วยเหลือ
            </h3>
            <NuxtLink
              to="/terms"
              class="text-xs md:text-sm text-[#7f8c9f] cursor-pointer hover:text-[#64a7fa] transition-colors duration-300 block mb-1"
            >
              ข้อกำหนดและเงื่อนไขการใช้งาน
            </NuxtLink>
            <NuxtLink
              to="/privacy"
              class="text-xs md:text-sm text-[#7f8c9f] cursor-pointer hover:text-[#64a7fa] transition-colors duration-300 block"
            >
              นโยบายความเป็นส่วนตัว
            </NuxtLink>
          </div>
          <div>
            <h3 class="text-base md:text-lg lg:text-xl text-[#333] mb-2">
              เกี่ยวกับ Store Shop
            </h3>
            <NuxtLink
              to="/about"
              class="text-xs md:text-sm text-[#7f8c9f] cursor-pointer hover:text-[#64a7fa] transition-colors duration-300 block"
            >
              เกี่ยวกับเรา
            </NuxtLink>
          </div>
          <div>
            <h3 class="text-base md:text-lg lg:text-xl text-[#333] mb-2">
              ติดต่อเรา
            </h3>
            <NuxtLink
              to="https://facebook.com"
              target="_blank"
              class="text-xs md:text-sm text-[#7f8c9f] cursor-pointer hover:text-[#64a7fa] transition-colors duration-300 block mb-1"
            >
              Facebook
            </NuxtLink>
            <NuxtLink
              to="mailto:metis0987568205@gmail.com"
              class="text-xs md:text-sm text-[#7f8c9f] cursor-pointer hover:text-[#64a7fa] transition-colors duration-300 block mb-1"
            >
              Email
            </NuxtLink>
            <NuxtLink
              to="https://line.me"
              target="_blank"
              class="text-xs md:text-sm text-[#7f8c9f] cursor-pointer hover:text-[#64a7fa] transition-colors duration-300 block"
            >
              Line
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="bg-[#64a7fa] flex justify-center items-center py-4">
        <p class="text-base md:text-lg lg:text-xl text-white font-bold">
          Made With Metis
        </p>
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
const promotionsSection = ref(null);

const scrollToPromotions = () => {
  if (promotionsSection.value) {
    promotionsSection.value.scrollIntoView({ behavior: "smooth" });
  }
};

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
  transform: translateX(-50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.slide-in-right {
  opacity: 0;
  transform: translateX(50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.slide-in-left.active {
  opacity: 1;
  transform: translateX(0);
}

.slide-in-right.active {
  opacity: 1;
  transform: translateX(0);
}

/* Hide scrollbar for promotion slider */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@media (max-width: 767px) {
  .slide-in-left,
  .slide-in-right {
    transform: none;
    opacity: 1;
    transition: none;
  }
}
</style>
