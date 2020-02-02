import { Secret, verify } from 'jsonwebtoken';

export const verifyJWT = (
  token: string,
  secretKey: Secret
): Promise<boolean> => {
  return new Promise(resolve => {
    verify(token, secretKey, error => {
      if (error) {
        return resolve(false);
      }
      resolve(true);
    });
  });
};
