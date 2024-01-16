import userData from '../../data/db.json';
import noImage from '../../assets/images/noImage.png'
import { FaGithub } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import { FiBookOpen } from "react-icons/fi";
import { LinkWrapper, ProjectItem, StyledT3 } from './index.styles';
import { CentralizedWrapper, MainTitle, SubTitle, SmallParagraph, VerticalListWithDots, HorizontalTechStackList } from '../../styles/GlobalStyle';

export const Projects = () => {
    const { projects } = userData;

    if (!projects || projects.length === 0) return;
    return (
        <CentralizedWrapper>
            <MainTitle>Projects</MainTitle>
            <ul>
                {projects.map((project, idx) => (
                    <ProjectItem key={idx}>
                        <div>
                            <SubTitle>{project.title}</SubTitle>
                            <SmallParagraph>{project.member} / {project.position}</SmallParagraph>
                            <SmallParagraph>{project.term}</SmallParagraph>
                            {project.description !== '' && (
                                <>
                                    <StyledT3>Description</StyledT3>
                                    <p>{project.description}</p>
                                </>
                            )}
                            {project.attribution.length > 0 && (
                                <>
                                    <StyledT3>What Did I do</StyledT3>
                                    <VerticalListWithDots fontSize='0.9rem'>
                                        {project.attribution.map((task, task_idx) => (
                                            <li key={task_idx}>{task}</li>
                                        ))}
                                    </VerticalListWithDots>
                                </>
                            )}
                            {project.techStacks.length > 0 && (
                                <>
                                    <StyledT3>Tech Stacks</StyledT3>
                                    <HorizontalTechStackList>
                                        {project.techStacks.map((stack, s_idx) => (
                                            <li key={s_idx}>{stack}</li>
                                        ))}
                                    </HorizontalTechStackList>
                                </>
                            )}
                            {
                                (project.projectUrl !== '' ||
                                    project.githubUrl !== '' ||
                                    project.blogUrl !== '') && (
                                    <>
                                        <StyledT3>Links</StyledT3>
                                        <LinkWrapper>
                                            {project.projectUrl && (<a href={project.projectUrl} target='_blank' rel='noreferrer'><MdOpenInNew /></a>)}
                                            {project.githubUrl && (<a href={project.githubUrl} target='_blank' rel='noreferrer'><FaGithub /></a>)}
                                            {project.blogUrl && (<a href={project.blogUrl} target='_blank' rel='noreferrer'><FiBookOpen /></a>)}
                                        </LinkWrapper>
                                    </>
                                )
                            }
                        </div>
                        <img src={project.imgUrl === '' ? noImage : project.imgUrl} alt='project' />
                    </ProjectItem>
                ))}
            </ul>
        </CentralizedWrapper>
    )
}