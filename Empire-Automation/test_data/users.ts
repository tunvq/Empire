/**
 * users.ts
 * Static test user data — credentials from .env, không hardcode ở đây.
 */

export const TEST_USERS = {
  default: {
    email: process.env.TEST_USER_EMAIL ?? 'demo@empire.io.vn',
    password: process.env.TEST_USER_PASSWORD ?? '',
    displayName: 'Demo User',
  },
  admin: {
    email: process.env.ADMIN_EMAIL ?? 'admin@empire.io.vn',
    password: process.env.ADMIN_PASSWORD ?? '',
    displayName: 'Admin',
  },
} as const;

export const TABS = ['Sảnh chung', 'Reels', 'Nhóm', 'Thông báo'] as const;
export type TabName = typeof TABS[number];

export const SEARCH_KEYWORDS = {
  python: 'Python',
  hashtag: '#Python',
} as const;
