import { useAuthStore } from '~/composables/useAuth';

export default defineNuxtPlugin(async () => {
  const authStore = useAuthStore();
  await authStore.initialize();
  
  return {
    provide: {
      auth: authStore
    }
  };
});