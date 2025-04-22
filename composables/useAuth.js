import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  // State
  const user = ref(null);
  const token = ref(null);
  
  // Runtime config
  const config = useRuntimeConfig();
  const apiUrl = config.public.apiBaseUrl;

  // Getters
  const isAuthenticated = computed(() => !!token.value || !!user.value);
  const getUser = computed(() => user.value);

  // Actions
  const login = async (email, password) => {
    try {
      const response = await $fetch(`${apiUrl}/api/login`, {
        method: "POST",
        body: { email, password },
        credentials: "include"
      });

      token.value = response.token || true;
      user.value = response.user;
      
      if (process.client) {
        localStorage.setItem("user", JSON.stringify(response.user));
      }

      return { success: true, data: response };
    } catch (error) {
      return {
        success: false,
        message: error.data?.message || "เกิดข้อผิดพลาดในการเข้าสู่ระบบ"
      };
    }
  };

  const logout = async () => {
    try {
      await $fetch(`${apiUrl}/api/login/logout`, {
        method: "POST",
        credentials: "include"
      });

      user.value = null;
      token.value = null;

      if (process.client) {
        localStorage.removeItem("user");
      }

      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.data?.message || "เกิดข้อผิดพลาดในการออกจากระบบ"
      };
    }
  };

  const fetchUser = async () => {
    try {
      if (process.client) {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          user.value = JSON.parse(storedUser);
          if (!token.value) token.value = true;
        }
      }
  
      const response = await $fetch(`${apiUrl}/api/login/me`, {
        credentials: "include",
        headers: {
          // เพิ่ม header นี้เพื่อป้องกัน caching ที่อาจทำให้ได้ 401
          'Cache-Control': 'no-cache'
        }
      });
  
      user.value = response.user;
      token.value = true; // ตั้งค่า token เป็น true เมื่อดึงข้อมูลผู้ใช้สำเร็จ
  
      if (process.client) {
        localStorage.setItem("user", JSON.stringify(response.user));
      }
  
      return { success: true, data: response };
    } catch (error) {
      // ล้างข้อมูลการล็อกอินเมื่อเกิดข้อผิดพลาด
      user.value = null;
      token.value = null;
  
      if (process.client) {
        localStorage.removeItem("user");
      }
  
      return {
        success: false,
        message: error.data?.message || "ไม่สามารถดึงข้อมูลผู้ใช้ได้"
      };
    }
  };
  

  const initializeAuth = () => {
    if (process.client) {
      try {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          user.value = JSON.parse(storedUser);
          token.value = true;
          return true;
        }
      } catch (error) {
        console.error("Error initializing auth from localStorage:", error);
      }
    }
    return false;
  };

  return {
    user,
    token,
    isAuthenticated,
    getUser,
    login,
    logout,
    fetchUser,
    initializeAuth
  };
});