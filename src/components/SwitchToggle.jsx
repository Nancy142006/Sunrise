 function SwitchToggle({ selected, onChange }) {
  return (
    <div className="ml-[200px] flex border border-[#0D92CB] rounded-[1.2rem] overflow-hidden w-fit">
      {["Option 1", "Option 2"].map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`px-6 py-5 font-semibold text-sm ${
            selected === option
              ? "bg-[#0D92CB] text-white"
              : "bg-white text-[#0D92CB]"
          }`}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
export default SwitchToggle;