import { useUnderline } from '../../context/UnderlineContext';
import useDataFetching from '../../hooks/useDataFetching';
import { CentralizedWrapper, HorizontalTechStackList, MainTitle, SmallParagraph, SubTitle, VerticalListWithDots } from '../../styles/GlobalStyle';
import { ProjectItem, StyledT2, StyledT3, WorkWrapper } from './index.styles';

export const WorkExperience = () => {
      const { wrapWithUnderline } = useUnderline();
    const workExperience = useDataFetching('workExperience');

    if (!workExperience || workExperience.length === 0) return;
    return (
        <CentralizedWrapper>
            <MainTitle>Work Experience</MainTitle>
            {workExperience.map((work, idx) => (
                <WorkWrapper key={idx}>
                    <div>
                        <SubTitle>{work.name}</SubTitle>
                        <SmallParagraph>{work.position}</SmallParagraph>
                        <SmallParagraph>{work.term}</SmallParagraph>
                        {work.description && <p>{wrapWithUnderline(work.description)}</p>}
                        {work.url && (<SmallParagraph>{work.url}</SmallParagraph>)}
                    </div>
                    <div>
                        {work.projects.length > 0 && (
                            work.projects.map((project, p_idx) => (
                                <ProjectItem key={p_idx}>
                                    <StyledT2>{project.name}</StyledT2>
                                    <SmallParagraph>{project.position}</SmallParagraph>
                                    <SmallParagraph>{project.term}</SmallParagraph>
                                    <StyledT3>Description</StyledT3>
                                    <p>{wrapWithUnderline(project.description)}</p>
                                    <StyledT3>What Did I do</StyledT3>
                                    <VerticalListWithDots fontSize='0.9rem'>
                                        {project.tasks.map((task, t_idx) => (
                                            <li key={t_idx}>{wrapWithUnderline(task)}</li>
                                        ))}
                                    </VerticalListWithDots>
                                    <StyledT3>Tech Stacks</StyledT3>
                                    <HorizontalTechStackList>
                                        {project.techStacks.length > 0 && 
                                            project.techStacks.map((stack, s_idx) => (
                                                <li key={s_idx}>{stack}</li>
                                        ))}
                                    </HorizontalTechStackList>
                                </ProjectItem>
                            )
                        ))}
                    </div>
                </WorkWrapper>
            ))}
        </CentralizedWrapper>
    )
}