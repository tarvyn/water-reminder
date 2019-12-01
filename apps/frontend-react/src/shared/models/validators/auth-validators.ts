export const nameIsValid = (name: string): boolean => {
  return /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i.test(name);
};

export const emailIsValid = (email: string): boolean => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
};

export const passwordIsComplexEnough = (password: string): boolean => {
  if (password.length < 8) {
    return false;
  }

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasNonAlphas = /\W/.test(password);
  const compliedRequirementsCount = [hasUpperCase, hasLowerCase, hasNumbers, hasNonAlphas]
    .filter(Boolean)
    .length;

  return compliedRequirementsCount >= 3;
};
