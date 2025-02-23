export default function Hero() {
  return (
    <section className="py-20 text-center bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Detect DeepFakes with Confidence</h1>
        <p className="text-xl text-gray-300 mb-8">
          Our advanced AI technology helps you identify manipulated content with high accuracy.
        </p>
        <a
          href="#upload"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
        >
          Start Detection
        </a>
      </div>
    </section>
  )
}

