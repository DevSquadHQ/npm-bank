export default function InputGroup(props) {
  const { label, id, placeholder, onChange, type = "text" } = props;

  return (
    <div className="flex flex-col text-white space-y-3">
      <label htmlFor={id}>{label}</label>
      <input
        onChange={onChange}
        id={id}
        type={type}
        name={id}
        placeholder={placeholder}
        className="bg-input  rounded-[8px] py-4 px-5 border-[#4B5563] h-[42px] outline-none"
        autoComplete="new-password"
        required
      />
    </div>
  );
}
