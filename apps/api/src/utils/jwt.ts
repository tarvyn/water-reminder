import { Secret, verify } from 'jsonwebtoken';

export const verifyJWT = (
  token: string,
  secretKey: Secret
): Promise<void> => {
  return new Promise((resolve, reject) => {
    verify(token, secretKey, error => {
      if (error) {
        return reject(error);
      }
      resolve();
    });
  });
};
