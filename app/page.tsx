import Banner from "./components/Banner"
import FirstBody from "./components/FirstBody"
import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <FirstBody />
      <div>Hello world</div>
    </>
  )
}
