import Banner from "./components/Banner"
import FirstBody from "./components/FirstBody"
import Navbar from "./components/Navbar"
import ProjectSection from "./components/ProjectSection"

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <FirstBody />
      <ProjectSection />
      <div>Hello world</div>
    </>
  )
}
