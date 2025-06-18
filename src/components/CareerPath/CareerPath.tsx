import './CareerPath.css';

import { useCareerPath } from '@/hooks/useFirestore';
import { Experience } from '@/types';
import { Section } from '../Section/Section';
import { Card } from '../Card/Card';
import { ChipGroup } from '../Chip/ChipGroup';
import { SkeletonLoader } from '../SkeletonLoader/SkeletonLoader';
import { FetchState } from '../FetchState/FetchState';

export function CareerPath() {
  const { experiences, loading, error } = useCareerPath();

  return (
    <Section id="career-path" title="Career Path" aria-busy={loading} aria-live="polite">
      <FetchState
        data={experiences}
        loading={loading}
        error={error}
        skeleton={<SkeletonLoader count={3} height="h-96" />}
      >
        {(experiences) => (
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <Card
                key={experience.id}
                clickable={!!experience.url}
                href={experience.url}
                index={index}
              >
                <ExperienceContent experience={experience} />
              </Card>
            ))}
          </div>
        )}
      </FetchState>
    </Section>
  );
}

// Extracted experience content to avoid duplication
function ExperienceContent({ experience }: { experience: Experience }) {
  return (
    <div className="career-path-card">
      <header className="career-path-card-header">
        <div className="career-path-card-details">
          <div className="career-path-card-details-time">
            <time className="career-path-card-details-time-range">{experience.range}</time>
            <span>·</span>
            <span className="career-path-card-details-time-location">{experience.location}</span>
          </div>

          <div className="career-path-card-details-company">{experience.company}</div>

          {Array.isArray(experience.roles) ? (
            <div className="career-path-card-details-roles">
              {experience.roles.map((role, index: number) => (
                <div key={index} className="career-path-card-details-roles-item">
                  {/* Role dot */}
                  <div className="career-path-card-details-roles-item-dot">
                    <div className="career-path-card-details-roles-item-dot-inner"></div>
                  </div>
                  <div className="career-path-card-details-roles-item-content">
                    <div>
                      <time className="career-path-card-details-roles-item-content-time-range">
                        {role.range}
                      </time>
                    </div>
                    <h3 className="career-path-card-details-roles-item-content-title">
                      {role.title}
                    </h3>
                    <p className="career-path-card-details-roles-item-content-description">
                      {role.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <h3 className="career-path-card-details-roles-item-content-title">
                {experience.title}
              </h3>
              <div className="mb-6">
                <p className="career-path-card-details-roles-item-content-description">
                  {experience.description}
                </p>
              </div>
            </>
          )}
        </div>
      </header>

      {experience.technologies.length > 0 && (
        <footer>
          <ChipGroup chips={experience.technologies} aria-label="Technologies used" />
        </footer>
      )}
    </div>
  );
}
