import { writable } from 'svelte/store';
export const authStore = writable({ user: null, accessToken: null, isAuthenticated: false }); 