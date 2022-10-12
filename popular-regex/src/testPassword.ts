/**
 * @param password
 * @returns {boolean}
 * Test if the password is strong enough : at least 8 characters, at least one uppercase, at least one lowercase, at least one number, at least one special character
 */
const testPassword = (password: string) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
  return regex.test(password);
};

export default testPassword;
