import { apiFetch } from './api.js';
export async function getPosts() {
  return apiFetch('/api/posts');
} 