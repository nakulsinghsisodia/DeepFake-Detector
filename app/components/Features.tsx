import { Shield, Zap, Eye } from "lucide-react"

export default function Features() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Detection Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Shield className="w-16 h-16 mx-auto mb-4 text-purple-500" />
            <h3 className="text-xl font-semibold mb-2">Advanced AI Analysis</h3>
            <p className="text-gray-400">
              Utilizes state-of-the-art machine learning models to detect subtle inconsistencies.
            </p>
          </div>
          <div className="text-center">
            <Zap className="w-16 h-16 mx-auto mb-4 text-purple-500" />
            <h3 className="text-xl font-semibold mb-2">Real-Time Processing</h3>
            <p className="text-gray-400">
              Get results in seconds, allowing for quick decision-making and content verification.
            </p>
          </div>
          <div className="text-center">
            <Eye className="w-16 h-16 mx-auto mb-4 text-purple-500" />
            <h3 className="text-xl font-semibold mb-2">Multi-Modal Detection</h3>
            <p className="text-gray-400">
              Analyzes both visual and audio components for comprehensive deepfake identification.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

