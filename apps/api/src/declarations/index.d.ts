import { } from '@water-reminder/api-interfaces';
import { GoogleAuthUserPayload } from '@api/auth/auth.model';

declare module 'express' {
  interface Request {
    readonly cookies: { readonly jwt: string };
    readonly user?: GoogleAuthUserPayload;
  }
}
