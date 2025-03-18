<template>
  <div class="p-6 max-w-screen-xl mx-auto">
    <h1 class="text-lg font-bold text-[#64a7fa] mb-4">รายการสินค้า</h1>
    <div class="grid grid-cols-5 gap-4">
      <div
        v-for="(item, index) in products"
        :key="index"
        class="border rounded-lg p-3 shadow-md bg-white w-[200px] text-left"
      >
        <!-- รูปสินค้า -->
        <div
          class="w-[180px] h-[180px] bg-black text-white flex items-center justify-center rounded-md mx-auto"
        >
          180 X 180
        </div>

        <!-- ชื่อสินค้า -->
        <h2 class="mt-2 text-blue-500 font-medium text-base">Netflix</h2>

        <!-- รายละเอียดสินค้า -->
        <div class="flex justify-between text-gray-500 text-xs mt-1">
          <span>55 บาท</span>
          <span>728 ชิ้น</span>
        </div>

        <!-- จำนวนขาย (ตรงกลาง) -->
        <p class="text-gray-600 font-semibold text-xs mt-2 text-center">
          ขายแล้ว 89 ชิ้น
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const products = new Array(10).fill({});
</script>

<style scoped></style>
