export enum SocialProvider {
  google = 'google'
}

export interface JWTPayload {
  readonly id: string;
}

export interface GoogleAuthUserPayload {
  readonly id: string;
}

export const JWT_COOKIE_NAME = 'jwt';
export const JWT_COOKIE_MAX_AGE = 7 * 24 * 60 * 60 * 1000;
export const PASSWORD_HASH_COMPLEXITY = 12;
