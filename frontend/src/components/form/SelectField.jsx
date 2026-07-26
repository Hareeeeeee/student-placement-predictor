export default function SelectField({
  label,
  name,
  value,
  onChange,
  children,
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-slate-600">
        {label}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="
          w-full
          rounded-xl
          border
          border-slate-300
          px-4
          py-3
          outline-none
          transition
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100
        "
      >
        {children}
      </select>
    </div>
  );
}