/**
 * Button Component
 * Props:
 * variant: primary | secondary | outline
 * size: sm | md | lg
 * disabled
 * onClick
 * children
 */

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick
}) {
  const variants = {
    primary: "bg-green-600 text-white",
    secondary: "bg-blue-500 text-white",
    outline: "border border-green-600 text-green-600"
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2",
    lg: "px-6 py-3 text-lg"
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
      rounded-lg
      ${variants[variant]}
      ${sizes[size]}
      ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {children}
    </button>
  );
}