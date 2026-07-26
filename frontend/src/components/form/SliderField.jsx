export default function SliderField({
  label,
  name,
  value,
  onChange,
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <label className="text-sm font-semibold text-slate-600">
          {label}
        </label>

        <span className="font-bold text-blue-600">
          {value}/10
        </span>
      </div>

      <input
        type="range"
        min="0"
        max="10"
        step="1"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full accent-blue-600"
      />
    </div>
  );
}