function SwitchToggle({ selected, onChange }) {
  const options = ["Option 1", "Option 2"];
  const descriptions = {
    "Option 1":
      "Whatever the outcome is going to look like will be reflected on this side",
    "Option 2":
      "A different outcome will appear here depending on this selection",
  };

  return (
    <div className="bg-[#F5F0E6] bg-opacity-10 text-white p-8 rounded-md w-[551px] h-[311px]  shadow-md">
      <h2 className="text-[20px] font-bold font-montserrat mb-9">
        Switch Selection
      </h2>

      <div className="flex bg-white ml-1 rounded-full overflow-hidden w-fit mx-auto h-16 mb-10">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`px-6 py-2 font-bold text-sm uppercase transition-all duration-300 ${
              selected === option
                ? "bg-yellow-400 text-black"
                : "bg-white text-black"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="font-inter text-[16px]">
        <p className="font-bold  mb-3">{selected}</p>
        <p>{descriptions[selected]}</p>
      </div>
    </div>
  );
}

export default SwitchToggle;
