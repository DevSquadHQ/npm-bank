export default function InputGroup(props) {
  const { label, id, placeholder, type = "text", register, errors } = props;

  const inputClass = errors[id]
    ? "border border-red-700"
    : "border-transparent";

  const onlyPersian = /^[\u0600-\u06FF\s]+$/;

  // Email regex pattern
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validatePhoneNumber = /((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/g;

  const validateIranianNationalCode = (code) => {
    if (!/^\d{10}$/.test(code)) return false;

    const digits = code.split("").map(Number);
    const checkDigit = digits.pop();
    const s = digits.reduce(
      (sum, digit, index) => sum + digit * (10 - index),
      0
    );
    const R = s % 11;
    if ((R < 2 && checkDigit === R) || (R >= 2 && checkDigit == 11 - R)) {
      return true;
    } else {
      return false;
    }
  };

  const getValidateRules = (fieldId) => {
    switch (fieldId) {
      case "nationalCode":
        return {
          required: "وارد کردن کد ملی الزامی است",
          validate: (value) =>
            validateIranianNationalCode(value) || "کد ملی نامعتبر است",
        };

      case "name":
        return {
          required: "لطفا نام را وارد کنید",
          pattern: {
            value: onlyPersian,
            message: "لطفا نام را به فارسی وارد کنید",
          },
        };
      case "name":
        return {
          required: "لطفا نام خانوادگی را وارد کنید",
          pattern: {
            value: onlyPersian,
            message: "لطفا نام خانوادگی را به فارسی وارد کنید",
          },
        };
      case "PhoneNumber":
        return {
          required: "لطفا شماره تلفن را وارد کنید",
          pattern: {
            value: validatePhoneNumber,
            message: "لطفا شماره تلفن معتبر وارد کنید",
          },
        };
      case "email":
        return {
          required: "ایمیل الزامی است",
          pattern: {
            value: emailPattern,
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
        />
      </div>
      {errors[id] && (
        <p className="text-sm text-red-700">{errors[id].message}</p>
      )}
    </>
  );
}
