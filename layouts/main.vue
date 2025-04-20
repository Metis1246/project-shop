<template>
  <div>
    <!-- Header -->
    <header>
      <div class="header-container">
        <!-- ชื่อเว็บ -->
        <div class="logo">
          <NuxtLink to="/">
            <h1>Swift Shop</h1>
          </NuxtLink>
        </div>

        <!-- เมนู -->
        <div class="nav-links">
          <NuxtLink to="/">หน้าแรก</NuxtLink>
          <NuxtLink to="/shops">สินค้า</NuxtLink>
          <NuxtLink to="/wallet">เติมเงิน</NuxtLink>
        </div>

        <!-- ปุ่ม -->
        <div class="buttons">
          <button @click="handleLogout" class="btn-primary">ออกจากระบบ</button>
        </div>
      </div>
    </header>
    <slot />
  </div>
</template>

<script setup>
import { useAuthStore } from "~/composables/useAuth";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";

const authStore = useAuthStore();
const router = useRouter();

const handleLogout = async () => {
  try {
    const result = await authStore.logout();

    if (result.success) {
      await Swal.fire({
        title: "สำเร็จ!",
        text: "ออกจากระบบสำเร็จ!",
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
      throw new Error(result.message || "เกิดข้อผิดพลาดในการออกจากระบบ");
    }
  } catch (error) {
    console.error("Logout error:", error);

    await Swal.fire({
      title: "เกิดข้อผิดพลาด!",
      text: `❌ ${error.message}`,
      icon: "error",
      confirmButtonText: "เข้าใจแล้ว",
      buttonsStyling: false,
      customClass: {
        confirmButton:
          "bg-[#7f8c9f] hover:bg-[#64a7fa] text-white font-medium py-2 px-4 rounded-md transition-colors duration-200",
      },
    });
  }
};
</script>

<style scoped>
/* กำหนด Header */
header {
  width: 100%;
  max-width: 1200px;
  height: 65px;
  margin: 0 auto;
  padding: 5px 20px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo h1 {
  font-size: 40px;
  font-weight: bold;
  color: #64a7fa;
}

.nav-links {
  display: flex;
  gap: 70px;
}

.nav-links a {
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  color: #7f8c9f;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #64a7fa;
}

.buttons {
  display: flex;
  gap: 10px;
}

.buttons button,
.buttons a {
  text-decoration: none;
  display: inline-block;
  padding: 6px 10px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  border: none;
}

.buttons button.btn-primary,
.buttons a.btn-primary {
  background-color: #64a7fa;
  color: white;
}

.buttons button.btn-primary:hover,
.buttons a.btn-primary:hover {
  background-color: #4a8fdb;
}

.buttons a.btn-secondary {
  background-color: #c4c4c4;
  color: white;
}

.buttons a.btn-secondary:hover {
  background-color: #cbd5e1;
}
</style>
