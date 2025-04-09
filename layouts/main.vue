<template>
  <div>
    <!-- Header -->
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

        <!-- ปุ่ม -->
        <div class="buttons">
          <NuxtLink to="/login" class="btn-primary">ออกจากระบบ</NuxtLink>
        </div>
      </div>
    </header>
    <NuxtPage />
  </div>
</template>

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

.buttons a {
  text-decoration: none;
  display: inline-block;
  padding: 6px 10px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
}

.buttons a.btn-primary {
  background-color: #64a7fa;
  color: white;
}

.buttons a.btn-primary:hover {
  background-color: #64a7fa;
}

.buttons a.btn-secondary {
  background-color: #c4c4c4;
  color: white;
}

.buttons a.btn-secondary:hover {
  background-color: #cbd5e1;
}
</style>
