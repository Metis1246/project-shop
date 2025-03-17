<template>
  <div
    class="min-h-screen flex items-start justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full bg-white shadow-md rounded-lg p-8">
      <h1 class="text-2xl font-bold text-gray-900 mb-6 text-center">
        สมัครสมาชิก
      </h1>
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700"
            >ชื่อผู้ใช้</label
          >
          <input
            type="text"
            id="username"
            v-model="form.username"
            placeholder="กรุณากรอกชื่อผู้ใช้"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700"
            >อีเมล</label
          >
          <input
            type="email"
            id="email"
            v-model="form.email"
            placeholder="กรุณากรอกอีเมล"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700"
            >รหัสผ่าน</label
          >
          <input
            type="password"
            id="password"
            v-model="form.password"
            placeholder="กรุณากรอกรหัสผ่าน"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            for="confirmPassword"
            class="block text-sm font-medium text-gray-700"
            >ยืนยันรหัสผ่าน</label
          >
          <input
            type="password"
            id="confirmPassword"
            v-model="form.confirmPassword"
            placeholder="กรุณายืนยันรหัสผ่าน"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          สมัครสมาชิก
        </button>
        <p class="text-sm text-gray-600 text-center">
          หากมีบัญชีคลิกที่นี่เพื่อ
          <NuxtLink to="/login" class="text-blue-600 hover:text-blue-500"
            >เข้าสู่ระบบ</NuxtLink
          >
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const handleSubmit = async () => {
  console.log("Sending data:", form.value); // Log ข้อมูลที่ส่ง

  try {
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form.value),
    });

    const data = await response.json();
    if (response.ok) {
      alert(data.message); // แจ้งเตือนสมัครสมาชิกสำเร็จ
    } else {
      alert(data.message); // แจ้งเตือนข้อผิดพลาด
    }
  } catch (error) {
    console.error("เกิดข้อผิดพลาดในการสมัครสมาชิก:", error);
  }
};
</script>
