import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { screen, waitFor } from '@testing-library/dom';
import { CareerPath } from '../CareerPath';
import { useCareerPath } from '@/hooks/useFirestore';

// Mock the useCareerPath hook
vi.mock('@/hooks/useFirestore', () => ({
  useCareerPath: vi.fn(),
}));

describe('CareerPath', () => {
  const mockExperiences = [
    {
      id: '1',
      company: 'Company 1',
      title: 'Role 1',
      description: 'Description 1',
      range: 'Jan 2020 - Jan 2021',
      location: 'Location 1',
      technologies: ['React', 'TypeScript'],
      url: 'https://company1.com',
    },
    {
      id: '2',
      company: 'Company 2',
      title: 'Role 2',
      description: 'Description 2',
      range: 'Jan 2021 - Present',
      location: 'Location 2',
      technologies: ['Vue', 'JavaScript'],
      url: null,
    },
  ];
  it('renders experiences when data is loaded', async () => {
    (useCareerPath as any).mockReturnValue({
      experiences: mockExperiences,
      loading: false,
      error: null,
    });

    render(<CareerPath />);

    await waitFor(() => {
      expect(screen.getByText('Company 1')).toBeInTheDocument();
      expect(screen.getByText('Company 2')).toBeInTheDocument();
      expect(screen.getByText('Role 1')).toBeInTheDocument();
      expect(screen.getByText('Role 2')).toBeInTheDocument();
      expect(screen.getByText('Description 1')).toBeInTheDocument();
      expect(screen.getByText('Description 2')).toBeInTheDocument();
    });

    // Check date ranges and locations
    expect(screen.getByText('Jan 2020 - Jan 2021')).toBeInTheDocument();
    expect(screen.getByText('Jan 2021 - Present')).toBeInTheDocument();
    expect(screen.getByText('Location 1')).toBeInTheDocument();
    expect(screen.getByText('Location 2')).toBeInTheDocument();

    // Check technologies
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Vue')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();

    // Check company links
    const companyLinks = screen.getAllByRole('link');
    expect(companyLinks).toHaveLength(1); // Only Company 1 has a URL
    expect(companyLinks[0]).toHaveAttribute('href', 'https://company1.com');
  });

  it('renders experiences in correct order', async () => {
    (useCareerPath as any).mockReturnValue({
      experiences: mockExperiences,
      loading: false,
      error: null,
    });

    render(<CareerPath />);

    await waitFor(() => {
      const headings = screen.getAllByRole('heading', { level: 3 });
      expect(headings[0]).toHaveTextContent('Role 1');
      expect(headings[1]).toHaveTextContent('Role 2');
    });
  });

  it('renders experience with multiple roles correctly', async () => {
    const multiRoleExperience = [
      {
        id: '3',
        company: 'Company 3',
        range: 'Jan 2019 - Jan 2020',
        location: 'Location 3',
        technologies: ['Node.js'],
        url: null,
        roles: [
          {
            range: 'Jan 2019 - Jun 2019',
            title: 'Intern',
            description: 'Worked on internal tools',
          },
          {
            range: 'Jul 2019 - Jan 2020',
            title: 'Junior Developer',
            description: 'Built client features',
          },
        ],
      },
    ];

    (useCareerPath as any).mockReturnValue({
      experiences: multiRoleExperience,
      loading: false,
      error: null,
    });

    render(<CareerPath />);

    await waitFor(() => {
      expect(screen.getByText('Intern')).toBeInTheDocument();
      expect(screen.getByText('Junior Developer')).toBeInTheDocument();
      expect(screen.getByText('Worked on internal tools')).toBeInTheDocument();
      expect(screen.getByText('Built client features')).toBeInTheDocument();
    });
  });
});
