import { PersonalInfo } from '../../components/PersonalInfo'
import { Projects } from '../../components/Projects'
import { Skills } from '../../components/Skills'
import { WorkExperience } from '../../components/WorkExperience'

export const MainPage = () => {
    return (
        <>
            <PersonalInfo />
            <Skills />
            <WorkExperience />
            <Projects />
        </>
    )
}