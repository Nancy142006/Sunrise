function Slider({ value, onChange }) {
  const labels = ["Low Range", "Low-Mid Range", "High-Mid Range", "High Range"];
  const descriptions = [
    "Whatever the outcome is going to look like will be reflected on this side",
  ];

  return (
    <div className="bg-[#F5F0E6] bg-opacity-10 text-white p-8 rounded-md w-[551px] h-[311px] shadow-md">
      <h2 className="text-[20px] font-montserrat font-bold mb-10">Slider Selection</h2>

      <div className="relative h-7 flex items-center justify-between px-4 mb-4">
        <div className="absolute top-1/2 left-0 right-0 h-2 bg-[#AEAEAE] rounded-full transform -translate-y-1/2" />

        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`w-5 h-5 rounded-full z-10 ${
              value === i ? "bg-[#FFC235]" : "bg-white"
            } cursor-pointer`}
            onClick={() => onChange(i)}
          />
        ))}
      </div>

      <div className="flex font-inter text-[14px] justify-between text-xs text-gray-300 px-1 mb-10">
        {labels.map((label, i) => (
          <div
            key={i}
            className={`text-center w-1/4 ${
              value === i ? "font-semibold text-white" : ""
            }`}
          >
            {label}
          </div>
        ))}
      </div>

      <div>
        <p className="text-[16px] font-inter font-bold mb-3">{labels[value]}</p>
        <p className="text-[16px] font-inter ">{descriptions}</p>
      </div>
    </div>
  );
}

export default Slider;
