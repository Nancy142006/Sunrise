function Slider({ value, onChange }) {
  const labels = ["Low Range", "Low-Mid Range", "High-Mid Range", "High Range"];

  return (
    <div className="ml-[300px]">
      <input
        type="range"
        min="0"
        max="3"
        step="1"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-[300px] "
      />

      {/* Labels - aligned to match slider width */}
      <div className="w-[345px] ml-[-20px] flex justify-between text-xs font-inter text-gray-600 mt-2">
        {labels.map((label, index) => (
          <span
            key={index}
            className={`text-center flex-1 ${
              value === index ? "font-semibold" : ""
            }`}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Slider;
