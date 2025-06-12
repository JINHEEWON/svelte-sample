import { apiFetch } from './api.js';
export async function getFiles() {
  return apiFetch('/api/files');
} 