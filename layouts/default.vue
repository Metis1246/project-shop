<template>
  <div>
    <!-- Header -->
    <header>
      <div class="header-container">
        <!-- ชื่อเว็บ -->
        <div class="logo">
          <h1>Store Shop</h1>
        </div>

        <!-- เมนู -->
        <div class="nav-links">
          <NuxtLink to="/">หน้าแรก</NuxtLink>
          <NuxtLink to="/shops">สินค้า</NuxtLink>
          <NuxtLink to="/shops">เติมเงิน</NuxtLink>
        </div>

        <!-- ปุ่ม -->
        <div class="buttons">
          <button class="btn-primary">เข้าสู่ระบบ</button>
          <button class="btn-secondary">สมัครสมาชิก</button>
        </div>
      </div>
    </header>
    <NuxtPage />
  </div>
</template>

<script setup></script>

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

.btn-primary {
  background-color: #64a7fa;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
}

.btn-secondary {
  background-color: #c4c4c4;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #64a7fa;
}

.btn-secondary:hover {
  background-color: #cbd5e1;
}
</style>
