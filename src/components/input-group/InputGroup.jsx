export default function InputGroup(props) {
  const { label, id, placeholder, type = "text", register, errors } = props;

  const inputClass = errors[id]
    ? "border border-red-700"
    : "border-transparent";

  const patterns = {
    onlyPersian: /^[\u0600-\u06FF\s]+$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phoneNumber: /((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/g,
    exactlyTenDigits: /^\d{10}$/,
    exactlyTenDigits: /^\d{10}$/, 
    onlyNumbers: /^[0-9]+$/,
  };

  const validateIranianNationalCode = (code) => {
    // Normalize Persian digits to English digits directly
    const normalizedCode = code.trim().replace(/[۰-۹]/g, (char) => {
      return String.fromCharCode(char.charCodeAt(0) - 1728); // Converts Persian digits to English (Arabic) digits
    });

    if (!patterns.onlyNumbers.test(normalizedCode)) {
      return { isValid: false, message: "کد ملی باید فقط شامل اعداد باشد" };
    }

    // Check if the code is exactly 10 digits
    if (!patterns.exactlyTenDigits.test(normalizedCode)) {
      return { isValid: false, message: "کد ملی باید دقیقاً ۱۰ رقم باشد" }; // Must be exactly 10 digits
    }

    const digits = normalizedCode.split("").map(Number);
    const checkDigit = digits.pop();
    const sum = digits.reduce((acc, digit, idx) => acc + digit * (10 - idx), 0);
    const remainder = sum % 11;

    if (
      (remainder < 2 && checkDigit === remainder) ||
      (remainder >= 2 && checkDigit === 11 - remainder)
    ) {
      return { isValid: true }; // Valid national code.
    } else {
      return { isValid: false, message: "کد ملی نامعتبر است" }; // Invalid national code.
    }
  };

  const getValidateRules = (fieldId) => {
    switch (fieldId) {
      case "nationalCode":
        return {
          required: "وارد کردن کد ملی الزامی است",
          validate: (value) => {
            const validation = validateIranianNationalCode(value);
            // Check if validation is defined
            if (validation && !validation.isValid) {
              return validation.message; // Return the error message from the validation function.
            }
            return true; // Return true if validation is successful
          },
        };

      case "name":
        return {
          required: "لطفا نام را وارد کنید",
          pattern: {
            value: patterns.onlyPersian,
            message: "لطفا نام را به فارسی وارد کنید",
          },
        };
      case "lastName":
        return {
          required: "لطفا نام خانوادگی را وارد کنید",
          pattern: {
            value: patterns.onlyPersian,
            message: "لطفا نام خانوادگی را به فارسی وارد کنید",
          },
        };
      case "PhoneNumber":
        return {
          required: "لطفا شماره تلفن را وارد کنید",
          pattern: {
            value: patterns.phoneNumber,
            message: "لطفا شماره تلفن معتبر وارد کنید",
          },
        };
      case "email":
        return {
          required: "ایمیل الزامی است",
          pattern: {
            value: patterns.email,
            message: "لطفا یک ایمیل معتبر وارد کنید",
          },
        };
      default:
        return {
          required: `${fieldId} ضروری است`,
        };
    }
  };
  return (
    <>
      <div className="flex flex-col text-white space-y-4">
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className={`bg-input  rounded-[8px] py-3 px-5 border-[#4B5563]  outline-none ${inputClass}`}
          autoComplete="new-password"
          {...register(id, getValidateRules(id))}
          aria-invalid={errors[id] ? "true" : "false"}
          maxLength={id === "nationalCode" ? 10 : undefined}
        />
      </div>
      {errors[id] && (
        <p className="text-sm text-red-700">{errors[id].message}</p>
      )}
    </>
  );
}
