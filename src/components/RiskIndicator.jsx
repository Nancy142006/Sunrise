import ReactSpeedometer from "react-d3-speedometer";

const RiskIndicator = ({
  title,
  value,
  description,
  selected,
  onSelect,
  selectable = false,
}) => (
  <div
    className={`relative bg-[#F5F0E6] bg-opacity-10 border ${
      selected ? "border-yellow-400" : "border-[#6F6F6F]"
    } rounded-md w-[377px] h-[294px] flex flex-col items-center justify-between p-3`}
  >

    {selectable && (
      <input
        type="checkbox"
        checked={selected}
        onChange={onSelect}
        className="absolute top-3 right-3 w-4 h-4"
      />
    )}

    <h3 className="text-white font-montserrat text-sm font-semibold mt-2">
      {title}
    </h3>

    <ReactSpeedometer
      maxValue={100}
      value={value}
      valueTextFontSize={0}
      needleColor="black"
      width={285}
      height={140}
      segmentColors={["#C0392B", "#E67E22", "#F1C40F", "#27AE60"]}
      segments={4}
      ringWidth={30}
      currentValueText=""
      customSegmentLabels={[
        { text: "HIGH", position: "INSIDE", color: "#fff", fontSize: "10px" },
        { text: "MEDIUM", position: "INSIDE", color: "#fff", fontSize: "10px" },
        { text: "LOW", position: "INSIDE", color: "#fff", fontSize: "10px" },
        {
          text: "VERY LOW",
          position: "INSIDE",
          color: "#fff",
          fontSize: "10px",
        },
      ]}
      labelFontFamily="Arial"
      labelFontSize="10"
    />

    <p className="text-gray-300 font-inter text-[12px] text-center px-2 mb-2">
      {description}
    </p>
  </div>
);

export default RiskIndicator;
