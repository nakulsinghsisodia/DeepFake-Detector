export default function Results() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Analysis Results</h2>
        <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Authenticity Score</h3>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div className="bg-green-500 h-4 rounded-full" style={{ width: "75%" }}></div>
            </div>
            <p className="mt-2 text-green-400">75% Authentic</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Detailed Findings</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>No signs of facial manipulation detected</li>
              <li>Audio analysis shows consistent voice patterns</li>
              <li>Metadata integrity check passed</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

