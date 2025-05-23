import ReactSpeedometer from "react-d3-speedometer";

const RiskIndicator = () => (
  <ReactSpeedometer
    maxValue={100}
    value={50}
    valueTextFontSize={0}
    needleColor="black"
    width={295}
    height={146}
    segmentColors={["#C0392B", "#E67E22", "#F1C40F", "#27AE60"]}
    segments={4}
    customSegmentLabels={[
      {
        text: "HIGH",
        position: "INSIDE",
        color: "#fff",
      },
      {
        text: "MEDIUM",
        position: "INSIDE",
        color: "#fff",
      },
      {
        text: "LOW",
        position: "INSIDE",
        color: "#fff",
      },
      {
        text: "VERY LOW",
        position: "INSIDE",
        color: "#fff",
      },
    ]}
    labelFontFamily="Times New Roman, sans-serif"
    labelFontSize="12"
  />
);
export default RiskIndicator;
