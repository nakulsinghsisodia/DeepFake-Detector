import { Aperture } from "lucide-react"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Aperture className="w-8 h-8 text-purple-500" />
          <span className="text-xl font-bold">DeepFake Detector</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#" className="hover:text-purple-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-purple-400">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-purple-400">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

