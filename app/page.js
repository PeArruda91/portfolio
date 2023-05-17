import About from '@/components/About'
import RootLayout from './layout'
import Gallery from '@/components/Gallery'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
      <About />
      <Gallery />
      </div>      
    </main>
  )
}
