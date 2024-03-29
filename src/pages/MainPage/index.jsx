import { TopNavBar } from '../../components/common/TopNavbar'
import { PersonalInfo } from '../../components/PersonalInfo'
import { Projects } from '../../components/Projects'
import { Skills } from '../../components/Skills'
import { WorkExperience } from '../../components/WorkExperience'
import { Education } from '../../components/Education'
import { Footer } from '../../components/common/Footer'

export const MainPage = () => {
    return (
        <>
            <TopNavBar />
            <PersonalInfo />
            <Skills />
            <WorkExperience />
            <Projects />
            <Education />
            <Footer />
        </>
    )
}