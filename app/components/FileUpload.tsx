import { Upload } from "lucide-react"

export default function FileUpload() {
  return (
    <section id="upload" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Upload Content for Analysis</h2>
        <div className="max-w-xl mx-auto bg-gray-700 p-8 rounded-lg shadow-lg">
          <div className="border-2 border-dashed border-gray-500 rounded-lg p-8 text-center">
            <Upload className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <p className="mb-4">Drag and drop your file here, or click to select a file</p>
            <input type="file" className="hidden" id="fileInput" />
            <label
              htmlFor="fileInput"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer transition duration-300"
            >
              Select File
            </label>
          </div>
        </div>
      </div>
    </section>
  )
}

