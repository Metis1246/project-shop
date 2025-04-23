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
        if (!token.value) token.value = JSON.parse(localStorage.getItem("token")); // ควรเก็บ token ด้วย
      }
    }

    // Ensure credentials are included in the request
    const response = await $fetch(`${apiUrl}/api/login/me`, {
      credentials: "include", // ส่งคุกกี้ไปกับ request
      headers: {
        'Cache-Control': 'no-cache', // ป้องกันการแคช request
      }
    });

    if (response.token) {
      token.value = response.token; // เก็บ token จาก response
    }
    
    user.value = response.user;
    
    if (process.client) {
      localStorage.setItem("user", JSON.stringify(response.user)); // เก็บข้อมูล user ลง localStorage
      localStorage.setItem("token", JSON.stringify(response.token)); // เก็บ token ลง localStorage
    }

    return { success: true, data: response };

  } catch (error) {
    user.value = null;
    token.value = null;

    if (process.client) {
      localStorage.removeItem("user"); // ลบข้อมูล user เมื่อเกิดข้อผิดพลาด
      localStorage.removeItem("token"); // ลบ token เมื่อเกิดข้อผิดพลาด
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