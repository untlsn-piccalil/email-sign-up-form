export default function validateEmail(email: string) {
  // more or less than one @
  if (email.match(/@/g)?.length != 1) return false;

  const domain = email.split('@')[1]!;

  // more or less than one .
  return domain.match(/\./g)?.length == 1;
}
