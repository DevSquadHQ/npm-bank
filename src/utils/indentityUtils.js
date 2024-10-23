//  [کد ملی]  Function to validate Iranian National Code 

export const validateIranianNationalCode = (code) => {
    if (!/^\d*$/.test(code)) {
      return "کد ملی نباید شامل حروف باشد";
    }
  
    if (code.length !== 10) {
      return "کد ملی باید دقیقا ۱۰ رقم باشد";
    }
  
    const digits = code.split("").map(Number);
    const checkDigit = digits.pop();
    const s = digits.reduce((sum, digit, index) => sum + digit * (10 - index), 0);
    const R = s % 11;
  
    return (R < 2 && checkDigit === R) || (R >= 2 && checkDigit === 11 - R)
      ? true
      : "کد ملی نامعتبر است";
  };