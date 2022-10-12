/**
 * @param email
 * @returns {boolean}
 * Test if the email is valid
 */
const testEmail = (email: string) => {
  const regex = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;
  return regex.test(email);
};

export default testEmail;
