import ReactSpeedometer from "react-d3-speedometer";

const RiskIndicator = ({ title, value, description }) => (
  <div className="bg-[#F5F0E6] bg-opacity-10 border border-[#6F6F6F] rounded-md w-[295px] h-[220px] flex flex-col items-center justify-between p-3">
    <h3 className="text-white text-sm font-semibold mt-2">{title}</h3>

    <ReactSpeedometer
      maxValue={100}
      value={value}
      valueTextFontSize={0} // hides value text
      needleColor="black"
      width={265}
      height={120}
      segmentColors={["#C0392B", "#E67E22", "#F1C40F", "#27AE60"]}
      segments={4}
      ringWidth={30}
      currentValueText=""
      customSegmentLabels={[
        {
          text: "HIGH",
          position: "INSIDE",
          color: "#fff",
          fontSize: "10px",
        },
        {
          text: "MEDIUM",
          position: "INSIDE",
          color: "#fff",
          fontSize: "10px",
        },
        {
          text: "LOW",
          position: "INSIDE",
          color: "#fff",
          fontSize: "10px",
        },
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

    <p className="text-gray-300 text-[12px] text-center px-2 mb-2">
      {description}
    </p>
  </div>
);

export default RiskIndicator;
