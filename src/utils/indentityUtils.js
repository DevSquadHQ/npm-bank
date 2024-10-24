import { DateObject } from "react-multi-date-picker";

// const validateIranianNationalCode = (code) => {
//   if (!/^\d*$/.test(code)) {
//     return "کد ملی نباید شامل حروف باشد";
//   }

//   if (code.length !== 10) {
//     return "کد ملی باید دقیقا ۱۰ رقم باشد";
//   }

//   const digits = code.split("").map(Number);
//   const checkDigit = digits.pop();
//   const s = digits.reduce((sum, digit, index) => sum + digit * (10 - index), 0);
//   const R = s % 11;

//   return (R < 2 && checkDigit === R) || (R >= 2 && checkDigit === 11 - R)
//     ? true
//     : "کد ملی نامعتبر است";
// };

// ***********************  [کد ملی]  Function to validate Iranian National Code *********************** 

// Converts Per digits to Eng digits
const convertPersianToEnglish = (input) =>
  input.replace(/[۰-۹]/g, (char) =>
    String.fromCharCode(char.charCodeAt(0) - 1728)
  );

const validateIranianNationalCode = (code) => {
  // trim any whitespace
  const normalizedCode = convertPersianToEnglish(code.trim());

  // no letters or other characters
  if (!/^\d*$/.test(normalizedCode)) {
    return { isValid: false, message: "کد ملی نباید شامل حروف باشد" };
  }

  // Ensure the code is exactly 10 digits
  if (!/^\d{10}$/.test(normalizedCode)) {
    return { isValid: false, message: "کد ملی باید ۱۰ رقم باشد" };
  }

  // Convert the string into an array of numbers
  const digits = normalizedCode.split("").map(Number);

  const checkDigit = digits.pop();
  const sum = digits.reduce((acc, digit, idx) => acc + digit * (10 - idx), 0);
  const remainder = sum % 11;

  return (remainder < 2 && checkDigit === remainder) ||
    (remainder >= 2 && checkDigit === 11 - remainder)
    ? { isValid: true }
    : { isValid: false, message: "کد ملی نامعتبر است" };
};

// *********************** [زیر 18] u can just pick from 18 years ago *********************** 

const getEighteenYearsAgo = () => {
  const today = new Date();
  today.setFullYear(today.getFullYear() - 18); // 18 سال از تاریخ امروز کم می‌کنیم
  return new DateObject(today);
};

export { validateIranianNationalCode, getEighteenYearsAgo };
