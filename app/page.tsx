import Header from "./components/Header"
import Hero from "./components/Hero"
import FileUpload from "./components/FileUpload"
import Results from "./components/Results"
import Features from "./components/Features"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <main>
        <Hero />
        <FileUpload />
        <Results />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

