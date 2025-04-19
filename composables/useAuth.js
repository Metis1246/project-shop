import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    initialized: false
  }),
  
  getters: {
    isAuthenticated: (state) => !!state.token || !!state.user,
    getUser: (state) => state.user,
  },
  
  actions: {
    // เพิ่มฟังก์ชันใหม่สำหรับตรวจสอบการ login สำเร็จ
    async checkAuthSuccess() {
      const route = useRoute();
      
      // ตรวจสอบพารามิเตอร์ auth=success จาก redirect
      if (route.query.auth === 'success') {
        // ลบพารามิเตอร์ออกจาก URL เพื่อความสะอาด
        const router = useRouter();
        router.replace({ query: {} });
        
        // ดึงข้อมูลผู้ใช้
        await this.fetchUser();
        return true;
      }
      return false;
    },
    
    async login(email, password) {
      try {
        const response = await fetch('http://localhost:5000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
          credentials: 'include', // สำคัญสำหรับ cookie
        });
        
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.message || 'เกิดข้อผิดพลาดในการเข้าสู่ระบบ');
        }
        
        // เก็บข้อมูลใน state
        this.token = data.token;
        this.user = data.user;
        
        return { success: true };
      } catch (error) {
        return {
          success: false,
          message: error.message
        };
      }
    },
    
    async logout() {
      try {
        await fetch('http://localhost:5000/api/logout', {
          method: 'POST',
          credentials: 'include' // ส่ง cookie ไปด้วย
        });
        
        this.user = null;
        this.token = null;
        
        return { success: true };
      } catch (error) {
        return {
          success: false,
          message: error.message
        };
      }
    },
    
    async fetchUser() {
      try {
        const response = await fetch('http://localhost:5000/api/me', {
          credentials: 'include' // ส่งคุกกี้ไปด้วย
        });
        
        if (!response.ok) {
          // ถ้าการตอบกลับไม่ OK ให้ล้างสถานะ auth
          this.user = null;
          this.token = null;
          return { success: false, message: 'ไม่สามารถเรียกข้อมูลผู้ใช้ได้' };
        }
        
        const data = await response.json();
        this.user = data.user;
        
        // ตั้งค่า token เพื่อระบุว่ามีการยืนยันตัวตนแล้ว
        this.token = true;
        
        return { success: true, user: data.user };
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการเรียกข้อมูลผู้ใช้:', error);
        this.user = null;
        this.token = null;
        return { success: false, message: error.message };
      }
    },
    
    async initialize() {
      if (this.initialized) return;
      
      await this.fetchUser();
      await this.checkAuthSuccess(); // ตรวจสอบการ login ผ่าน Google/Line
      this.initialized = true;
    }
  }
});