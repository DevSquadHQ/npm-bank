const validateMessages = {
  required: "${label} الزامی است",
  types: {
    email: "فرمت ${label} معتبر نیست",
  },
  string: {
    len: "${label} باید ${len} کاراکتر باشد",
    min: "${label} باید حداقل ${min} کاراکتر باشد",
    max: "${label} باید حداکثر ${max} کاراکتر باشد",
  },
  pattern: {
    mismatch: "${label} معتبر نیست",
  },
};

const validationRules = {
  password: {
    pattern:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    message: "رمز عبور باید ۸ کاراکتر، حروف بزرگ، کوچک، عدد و نماد داشته باشد",
  },
  phoneNumber: {
    pattern: /^(09|\+989)\d{9}$/,
    message: "شماره موبایل معتبر نیست",
  },
  perName: {
    pattern: /^[\u0600-\u06FF\s]+$/,
    message: "فقط حروف فارسی وارد کنید",
  },
};

export { validateMessages, validationRules };
