/**
 * @param phoneNumber
 * @returns {boolean}
 * Test if the phone number is valid and is in the format +33 6 12 34 56 78
 */
const testPhoneNumber = (phoneNumber: string) => {
  const regex = /^\+33\s6\s\d{2}\s\d{2}\s\d{2}\s\d{2}$/;
  return regex.test(phoneNumber);
};

export default testPhoneNumber;
