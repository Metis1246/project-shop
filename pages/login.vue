<template>
  <div
    class="min-h-screen flex items-start justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full bg-white shadow-md rounded-lg p-8">
      <h1 class="text-2xl font-bold text-gray-900 mb-6 text-center">
        เข้าสู่ระบบ
      </h1>
      <form @submit.prevent="handleSubmit" class="space-y-6">
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
        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          เข้าสู่ระบบ
        </button>

        <p v-if="errorMessage" class="text-red-500 text-sm text-center mt-2">
          {{ errorMessage }}
        </p>

        <p class="text-sm text-gray-600 text-center">
          หากยังไม่มีบัญชีคลิกที่นี่เพื่อ
          <NuxtLink to="/register" class="text-blue-600 hover:text-blue-500"
            >สมัครสมาชิก</NuxtLink
          >
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  email: "",
  password: "",
});

const errorMessage = ref("");

const handleSubmit = async () => {
  try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form.value),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "เกิดข้อผิดพลาด");
    }

    alert("เข้าสู่ระบบสำเร็จ! 🎉");
    console.log("Login Success:", data);

    // สามารถเก็บ Token ไว้ใน localStorage ได้ถ้าต้องการ
    // localStorage.setItem("token", data.token);
  } catch (error) {
    errorMessage.value = error.message;
  }
};
</script>
