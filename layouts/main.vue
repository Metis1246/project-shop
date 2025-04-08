<template>
  <div>
    <!-- Header สำหรับผู้ใช้ที่ล็อกอินแล้ว -->
    <header>
      <div class="header-container">
        <!-- ชื่อเว็บ -->
        <div class="logo">
          <h1>Swift Shop</h1>
        </div>

        <!-- เมนู -->
        <div class="nav-links">
          <NuxtLink to="/">หน้าแรก</NuxtLink>
          <NuxtLink to="/shops">สินค้า</NuxtLink>
          <NuxtLink to="/wallet">เติมเงิน</NuxtLink>
        </div>

        <!-- ส่วนโปรไฟล์ผู้ใช้ -->
        <div class="user-profile">
          <span class="username">{{ user.name }}</span>
          <div class="avatar">
            <!-- ไอคอนหรือรูปโปรไฟล์ -->
            <img v-if="user.avatar" :src="user.avatar" alt="Profile" />
            <div v-else class="avatar-initials">
              {{ getInitials(user.name) }}
            </div>
          </div>
        </div>
      </div>
    </header>
    <NuxtPage />
  </div>
</template>

<script setup>
// ข้อมูลผู้ใช้ (ควรดึงจาก store หรือ API)
const user = ref({
  name: "Metis N.", // เปลี่ยนเป็นชื่อผู้ใช้จริง
  avatar: null,
});

// ฟังก์ชันสร้างตัวอักษรแรกของชื่อ
const getInitials = (name) => {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
};
</script>

<style scoped>
/* สไตล์เดิมจาก default layout */
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

/* สไตล์ส่วนโปรไฟล์ผู้ใช้ */
.user-profile {
  display: flex;
  align-items: center;
  gap: 10px;
}

.username {
  font-weight: bold;
  color: #333;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #64a7fa;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  overflow: hidden;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-initials {
  font-size: 16px;
}
</style>
