import { useLocation } from "react-router-dom";

const headings = {
  "/section-1": "REPORT: COMPASS MEXICO",
  "/section-2": "SECTION 2",
  "/section-3": "SECTION 3",
};

const Report1 = () => {
  const location = useLocation();
  const heading = headings[location.pathname] || "REPORT";

  return (
    <div className="bg-[#F5F0E6] bg-opacity-10 text-white p-6 rounded-lg w-[614px] mt-10 shadow-lg font-sans">
      <h2 className="text-white text-lg font-bold mb-4">{heading}</h2>
      <p className="text-sm mb-4">
        As of mid-May 2025, the next three months under the Trump
        administration's tariff policies are projected to significantly
        influence the U.S. and global economies. Here's an outlook based on
        current analyses:
      </p>

      <div className="space-y-5 text-sm">
        <div>
          <p className="font-semibold mb-1">📉 Economic Growth Projections</p>
          <p>
            U.S. GDP Growth: The OECD forecasts a slowdown to 2.2% in 2025, down
            from previous estimates of 2.4%, with further deceleration to 1.6%
            in 2026.
            <br />
            <span className="text-gray-400">
              CNN
              <br />
              NBC New York
            </span>
          </p>
          <p className="mt-2">
            Global Growth: Anticipated to decrease from 3.2% in 2024 to 3.1% in
            2025 and 3.0% in 2026, primarily due to escalating trade tensions.
            <br />
            <span className="text-gray-400">NBC New York</span>
          </p>
        </div>

        <div>
          <p className="font-semibold mb-1">💰 Inflationary Pressures</p>
          <p>
            U.S. Inflation: The OECD projects a rise to 2.8% in 2025, influenced
            by increased tariffs on imports.
            <br />
            <span className="text-gray-400">CNN</span>
          </p>
          <p className="mt-2">
            Consumer Prices: Retailers like Walmart have indicated that higher
            prices are imminent due to tariffs, with noticeable increases
            expected in May and June.
            <br />
            <span className="text-gray-400">Business Insider</span>
          </p>
          <p className="text-gray-300 mt-1">
            Economic stability could be further challenged if trade disputes
            intensify.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Report1;
