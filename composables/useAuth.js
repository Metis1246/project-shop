import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.token || !!state.user,
    getUser: (state) => state.user,
  },

  actions: {
    async login(email, password) {
      try {
        const response = await fetch("http://localhost:5000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
          credentials: "include", // สำคัญสำหรับการรับ cookie
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "เกิดข้อผิดพลาดในการเข้าสู่ระบบ");
        }

        // เก็บข้อมูลใน state
        this.token = data.token || true; // ถ้าไม่มี token ในข้อมูลตอบกลับ ให้เป็น true
        this.user = data.user;

        // เก็บข้อมูลใน localStorage เพื่อให้คงอยู่หลัง refresh
        localStorage.setItem("user", JSON.stringify(data.user));

        return { success: true };
      } catch (error) {
        return {
          success: false,
          message: error.message,
        };
      }
    },

    async logout() {
      try {
        await fetch("http://localhost:5000/api/logout", {
          method: "POST",
          credentials: "include", // ส่ง cookie ไปด้วย
        });

        this.user = null;
        this.token = null;

        // ลบข้อมูลจาก localStorage
        localStorage.removeItem("user");

        return { success: true };
      } catch (error) {
        return {
          success: false,
          message: error.message,
        };
      }
    },

    async fetchUser() {
      try {
        // ตรวจสอบว่ามีข้อมูลใน localStorage หรือไม่ (เป็นการเช็คเบื้องต้น)
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          this.user = JSON.parse(storedUser);
          if (!this.token) this.token = true;
        }

        // ดึงข้อมูลผู้ใช้จาก API (ซึ่งจะใช้ cookie ที่เก็บ token)
        const response = await fetch("http://localhost:5000/api/me", {
          credentials: "include", // สำคัญมาก! ส่ง cookie ไปด้วย
        });

        if (!response.ok) {
          // ถ้าไม่สามารถดึงข้อมูลได้ แสดงว่า token ไม่ถูกต้องหรือหมดอายุ
          throw new Error("ไม่สามารถดึงข้อมูลผู้ใช้ได้");
        }

        const data = await response.json();
        this.user = data.user;

        // เก็บข้อมูลใน localStorage อีกครั้ง (อัพเดตข้อมูลล่าสุด)
        localStorage.setItem("user", JSON.stringify(data.user));

        // ถ้าสามารถดึงข้อมูลได้ แสดงว่ามีการ authenticate แล้ว
        if (!this.token) {
          this.token = true;
        }

        return { success: true };
      } catch (error) {
        // ล้างข้อมูลทั้งหมดเมื่อเกิดข้อผิดพลาด
        this.user = null;
        this.token = null;
        localStorage.removeItem("user");

        return {
          success: false,
          message: error.message,
        };
      }
    },

    // เพิ่มฟังก์ชันสำหรับโหลดข้อมูลจาก localStorage เมื่อเริ่มแอพ
    initializeAuth() {
      try {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          this.user = JSON.parse(storedUser);
          this.token = true;
          return true;
        }
        return false;
      } catch (error) {
        console.error("Error initializing auth from localStorage:", error);
        return false;
      }
    },
  },
});
