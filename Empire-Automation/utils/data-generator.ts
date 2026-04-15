/**
 * data-generator.ts
 * Step 4 — Test Data Strategy
 *
 * Sinh dữ liệu test unique + traceable.
 * Format: [prefix]_[testName]_[timestamp]_[random]
 *
 * Ví dụ: auto_login_20260415_A3F2@test.com
 *
 * Rule: KHÔNG hardcode data cho trường unique — luôn dùng class này.
 */

export class DataGenerator {
  /**
   * Sinh timestamp ngắn dạng YYYYMMDD
   */
  private static timestamp(): string {
    return new Date().toISOString().replace(/[-:T.Z]/g, '').slice(0, 8);
  }

  /**
   * Sinh random suffix 4 ký tự hex uppercase
   */
  private static randomSuffix(): string {
    return Math.floor(Math.random() * 0xffff)
      .toString(16)
      .toUpperCase()
      .padStart(4, '0');
  }

  /**
   * Sinh email unique traceable
   * Format: auto_[testName]_[YYYYMMDD]_[XXXX]@empire.test
   */
  static email(testName: string = 'test'): string {
    const safe = testName.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return `auto_${safe}_${this.timestamp()}_${this.randomSuffix()}@empire.test`;
  }

  /**
   * Sinh username unique traceable
   */
  static username(testName: string = 'user'): string {
    const safe = testName.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return `auto_${safe}_${this.timestamp()}_${this.randomSuffix()}`;
  }

  /**
   * Sinh display name có thể đọc được
   */
  static displayName(prefix: string = 'Auto User'): string {
    return `${prefix} ${this.randomSuffix()}`;
  }

  /**
   * Sinh số điện thoại VN format: 09XXXXXXXX
   */
  static phoneVN(): string {
    const digits = Math.floor(Math.random() * 100_000_000)
      .toString()
      .padStart(8, '0');
    return `09${digits}`;
  }

  /**
   * Sinh password mạnh có đủ upper, lower, digit, special
   */
  static password(): string {
    return `Auto@${this.timestamp()}#${this.randomSuffix()}`;
  }

  /**
   * Sinh post content ngắn unique
   */
  static postContent(topic: string = 'automation'): string {
    return `[AUTO TEST] ${topic} ${this.timestamp()} ${this.randomSuffix()}`;
  }

  /**
   * Sinh comment content
   */
  static commentContent(): string {
    return `[AUTO COMMENT] ${this.timestamp()} ${this.randomSuffix()}`;
  }

  /**
   * Sinh full user profile object cho một test
   */
  static userProfile(testName: string = 'test') {
    return {
      email: this.email(testName),
      username: this.username(testName),
      displayName: this.displayName(),
      phone: this.phoneVN(),
      password: this.password(),
    };
  }
}
