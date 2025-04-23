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
          <button class="menu-toggle" @click="toggleMenu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        <!-- เมนู -->
        <div class="nav-links" :class="{ active: isMenuOpen }">
          <NuxtLink to="/">หน้าแรก</NuxtLink>
          <NuxtLink to="/shops">สินค้า</NuxtLink>
          <NuxtLink to="/wallet">เติมเงิน</NuxtLink>
        </div>

        <!-- ปุ่ม -->
        <div class="buttons" :class="{ active: isMenuOpen }">
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
import { ref } from "vue";

const authStore = useAuthStore();
const router = useRouter();
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

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
  height: auto;
  min-height: 65px;
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
  flex-wrap: wrap;
  position: relative;
}

.logo {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo h1 {
  font-size: 40px;
  font-weight: bold;
  color: #64a7fa;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
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

/* Responsive Styles */
@media (max-width: 992px) {
  .nav-links {
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }

  .logo {
    width: 100%;
    justify-content: space-between;
  }

  .logo h1 {
    font-size: 28px;
  }

  .menu-toggle {
    display: block;
  }

  .nav-links,
  .buttons {
    width: 100%;
    flex-direction: column;
    gap: 15px;
    padding: 15px 0;
    display: none;
  }

  .nav-links.active,
  .buttons.active {
    display: flex;
  }

  .nav-links a {
    font-size: 18px;
  }

  .buttons {
    margin-top: 10px;
  }

  .buttons button,
  .buttons a {
    width: 100%;
    padding: 10px;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .logo h1 {
    font-size: 24px;
  }
}
</style>
