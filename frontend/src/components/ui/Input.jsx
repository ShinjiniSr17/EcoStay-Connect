/**
 * Input Component
 * Props:
 * label
 * placeholder
 * type
 * value
 * onChange
 * error
 */

export default function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error
}) {
  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
        border
        rounded-lg
        p-3
        "
      />

      {error && (
        <p className="text-red-500 text-sm">
          {error}
        </p>
      )}
    </div>
  );
}