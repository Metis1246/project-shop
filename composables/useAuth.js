import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
  }),
  
  getters: {
    isAuthenticated: (state) => !!state.token,
    getUser: (state) => state.user,
  },
  
  actions: {
    async login(email, password) {
      try {
        const { $cookies } = useNuxtApp();
        
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.message || 'เกิดข้อผิดพลาดในการเข้าสู่ระบบ');
        }
        
        // เก็บข้อมูลใน state (เฉพาะในเซสชั่นปัจจุบัน)
        this.token = data.token;
        this.user = data.user;
        
        // Cookie จะถูกตั้งค่าจากฝั่ง backend แล้ว (httpOnly: true)
        
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
        await fetch('/api/logout', {
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
        const response = await fetch('/api/me', {
          credentials: 'include' // ส่ง cookie ไปด้วย
        });
        
        if (!response.ok) {
          throw new Error('ไม่สามารถดึงข้อมูลผู้ใช้ได้');
        }
        
        const data = await response.json();
        this.user = data.user;
        
        return { success: true };
      } catch (error) {
        this.user = null;
        this.token = null;
        
        return { 
          success: false, 
          message: error.message 
        };
      }
    }
  }
});