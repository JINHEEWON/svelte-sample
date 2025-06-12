import { apiFetch } from './api.js';

export async function login(email, password) {
  return apiFetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
} 