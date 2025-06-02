import download from "../assets/icons/pdf.svg";

const reports = [
  {
    title: "Tariffs report",
    description:
      "We assess that Trump will continue to kick Mexico's ass for the foreseeable future.",
    date: "May 10, 2025",
  },
  {
    title: "Security breakdown",
    description: "Binational cooperation is going to hell.",
    date: "April 15, 2025",
  },
];

const ReportCard = () => {
  return (
    <div className="bg-[#F5F0E6] bg-opacity-10 text-white p-6 rounded-lg h-[384px] shadow-md overflow-y-auto">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-lg font-bold font-montserrat">COMPASS MEXICO:</h2>
          <h1 className="text-lg font-bold font-montserrat leading-tight">
            TRUMP ADMINISTRATION ANNOUNCES TARIFFS
          </h1>
        </div>
        <button className="flex items-center gap-2 bg-[#E6A740] text-black px-4 py-2 rounded-md font-semibold hover:opacity-90">
          <img src={download} alt="icon" className="w-6 h-6" />
          Download
        </button>
      </div>

      <div className="space-y-4">
        {[...Array(3)].map((_, idx) => (
          <div key={idx} className="space-y-4">
            {reports.map((report, i) => (
              <p key={`${idx}-${i}`} className="text-sm font-montserrat">
                <span className="font-bold text-white underline cursor-pointer">
                  {report.title}
                </span>
                {" - "}
                <span className="font-light">
                  {report.description} {report.date}.
                </span>
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportCard;
