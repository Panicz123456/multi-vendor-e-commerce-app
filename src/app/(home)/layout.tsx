import { Footer } from "./_components/Footer"
import { Navbar } from "./_components/Navbar"

interface Props {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 bg-[#F4F4F0]">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout