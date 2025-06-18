import './Projects.css';
import { useProjects } from '@/hooks/useFirestore';
import { Project } from '@/types';
import { Section } from '../Section/Section';
import classNames from 'classnames';
import { Card } from '../Card/Card';
import { ChipGroup } from '../Chip/ChipGroup';
import { GithubRepositoryIcon } from '../icons/GithubLink';
import { FetchState } from '../FetchState/FetchState';
import { SkeletonLoader } from '../SkeletonLoader/SkeletonLoader';

export function Projects() {
  const { projects, loading, error } = useProjects();

  return (
    <Section id="projects" title="Projects" aria-busy={loading} aria-live="polite">
      <FetchState
        data={projects}
        loading={loading}
        error={error}
        skeleton={<SkeletonLoader count={3} height="h-64" />}
      >
        {(projects) => (
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                clickable={!!project.demoUrl}
                href={project.demoUrl}
                index={index}
              >
                <ProjectContent project={project} />
              </Card>
            ))}
          </div>
        )}
      </FetchState>
    </Section>
  );
}

// Extracted project content to avoid duplication
function ProjectContent({ project }: { project: Project }) {
  return (
    <div className="project-card">
      {/* Content Section */}
      <div className={classNames('project-card-body-wrapper')}>
        <div className="project-card-body">
          <header className="project-card-body-header">
            <h3 className="project-card-body-title">{project.title}</h3>
          </header>

          <div className="flex-grow">
            <p className="project-card-body-description">{project.description}</p>
          </div>

          <footer className="project-card-body-footer">
            <ChipGroup chips={project.technologies} aria-label="Technologies used" />

            {project.githubUrl && (
              <a
                data-testid="github-link"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="project-card-body-footer-github-link"
                aria-label="GitHub Repository"
                onClick={(e) => e.stopPropagation()}
              >
                <GithubRepositoryIcon />
              </a>
            )}
          </footer>
        </div>
      </div>
    </div>
  );
}
