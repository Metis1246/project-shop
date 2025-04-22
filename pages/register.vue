<template>
  <div
    class="min-h-screen flex items-start justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full bg-white shadow-md rounded-lg p-8">
      <h1 class="text-2xl font-bold text-gray-900 mb-6 text-center">
        สมัครสมาชิก
      </h1>
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div v-if="errorMessage" class="text-red-500 text-sm text-center">
          {{ errorMessage }}
        </div>
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
          :disabled="loading"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {{ loading ? "กำลังสมัคร..." : "สมัครสมาชิก" }}
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
import { useRouter } from "vue-router";
import axios from "axios";
import Swal from "sweetalert2";

const router = useRouter();
const form = ref({
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
});
const errorMessage = ref("");
const loading = ref(false);

const config = useRuntimeConfig();
const apiBaseUrl = config.public.apiBaseUrl
console.log("api", apiBaseUrl);
const handleSubmit = async () => {
  errorMessage.value = "";
  loading.value = true;

  try {
    const { data } = await axios.post(
      `${apiBaseUrl}/register`,
      form.value
    );

    if (data.success) {
      await Swal.fire({
        title: "สำเร็จ!",
        text: data.message || "สมัครสมาชิกสำเร็จ! กรุณาเข้าสู่ระบบ",
        icon: "success",
        confirmButtonText: "ตกลง",
        buttonsStyling: false,
        customClass: {
          confirmButton:
            "bg-[#7f8c9f] hover:bg-[#64a7fa] text-white font-medium py-2 px-4 rounded-md transition-colors duration-200",
        },
      });
      router.push("/login");
    } else {
      throw new Error(data.message || "เกิดข้อผิดพลาดในการสมัครสมาชิก");
    }
  } catch (error) {
    errorMessage.value = error.response?.data?.message || error.message;
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
/* สไตล์เสริมสำหรับ SweetAlert2 */
.swal2-confirm {
  background-color: #7f8c9f !important;
  color: white !important;
}
.swal2-confirm:hover {
  background-color: #64a7fa !important;
}
</style>