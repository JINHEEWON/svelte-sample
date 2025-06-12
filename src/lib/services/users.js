import { apiFetch } from './api.js';
export async function getUser(id) {
  return apiFetch(`/api/users/${id}`);
} 