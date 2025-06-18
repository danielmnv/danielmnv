import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { Projects } from '../Projects';
import { useProjects } from '@/hooks/useFirestore';
import { partition } from 'lodash';

// Mock the useProjects hook
vi.mock('@/hooks/useFirestore', () => ({
  useProjects: vi.fn(),
}));

describe('Projects', () => {
  const mockProjects = [
    {
      id: '1',
      title: 'Project 1',
      description: 'Description 1',
      demoUrl: 'https://project1.com',
      technologies: ['React', 'TypeScript'],
      orderIndex: 1,
    },
    {
      id: '2',
      title: 'Project 2',
      description: 'Description 2',
      githubUrl: 'https://github.com/project2',
      technologies: ['Vue', 'JavaScript'],
      orderIndex: 2,
    },
    {
      id: '3',
      title: 'Project 3',
      description: 'Description 3',
      demoUrl: 'https://project3.com',
      githubUrl: 'https://github.com/project3',
      technologies: [],
      orderIndex: 3,
    },
  ];

  it('renders experiences when data is loaded', async () => {
    (useProjects as any).mockReturnValue({
      projects: mockProjects,
      loading: false,
      error: null,
    });

    render(<Projects />);

    await waitFor(() => {
      expect(screen.getByText('Project 1')).toBeInTheDocument();
      expect(screen.getByText('Project 2')).toBeInTheDocument();
      expect(screen.getByText('Description 1')).toBeInTheDocument();
      expect(screen.getByText('Description 2')).toBeInTheDocument();
    });

    // Check technologies
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Vue')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();

    // Filter GitHub and Demo links
    const allLinks = screen.getAllByRole('link');
    const [githubLinks, demoLinks] = partition(allLinks, (link) =>
      link.getAttribute('href')?.includes('github.com')
    );

    // Check GitHub links
    expect(githubLinks).toHaveLength(2);
    expect(githubLinks[0]).toHaveAttribute('href', 'https://github.com/project2');
    expect(githubLinks[1]).toHaveAttribute('href', 'https://github.com/project3');

    // Check Demo links
    expect(demoLinks).toHaveLength(2);
    expect(demoLinks[0]).toHaveAttribute('href', 'https://project1.com');
    expect(demoLinks[1]).toHaveAttribute('href', 'https://project3.com');
  });

  it('renders experiences in correct order', async () => {
    (useProjects as any).mockReturnValue({
      projects: mockProjects,
      loading: false,
      error: null,
    });

    render(<Projects />);

    await waitFor(() => {
      const headings = screen.getAllByRole('heading', { level: 3 });
      const texts = headings.map((el) => el.textContent);
      expect(texts).toEqual(['Project 1', 'Project 2', 'Project 3']);
    });
  });

  it('clicking the GitHub link does not trigger card click handler', async () => {
    (useProjects as any).mockReturnValue({
      projects: mockProjects.slice(0, 2),
      loading: false,
      error: null,
    });

    const handleClick = vi.fn();

    render(<Projects />);

    // Attach listener to the card manually (simulating click behavior)
    const card = await screen.findByText('Project 1');
    card.closest('.card')?.addEventListener('click', handleClick);

    const githubLink = await screen.findByTestId('github-link');
    githubLink.click();

    expect(handleClick).not.toHaveBeenCalled();
  });
});
