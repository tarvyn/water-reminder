export enum SocialProvider {
  google = 'google'
}

export interface JWTPayload {
  readonly id: string;
  readonly provider: SocialProvider;
  readonly thirdPartyId: string;
}

export interface GoogleAuthUserPayload {
  readonly jwt: string;
}

export const JWT_COOKIE_MAX_AGE = 36000000;
