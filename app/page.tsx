import Banner from "./components/Banner"
import CustomerReviews from "./components/CustomerReviews"
import FirstBody from "./components/FirstBody"
import Navbar from "./components/Navbar"
import ProjectControlSection from "./components/ProjectControlSection"
import ProjectSection from "./components/ProjectSection"
import ViewProjects from "./components/ViewProjects"

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <FirstBody />
      <ProjectControlSection />
      <ProjectSection />
      <ViewProjects />
      <CustomerReviews />
      <div>Hello world</div>
    </>
  )
}
