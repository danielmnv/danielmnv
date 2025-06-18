import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FetchState } from '../FetchState';

describe('FetchState', () => {
  it('renders skeleton when loading is true', () => {
    render(
      <FetchState data={null} loading={true} error={null} skeleton={<div data-testid="skeleton" />}>
        {() => <div>Should not render</div>}
      </FetchState>
    );
    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
    expect(screen.queryByText('Should not render')).not.toBeInTheDocument();
  });

  it('renders error message when error is present', () => {
    render(
      <FetchState data={null} loading={false} error={new Error('Error')} skeleton={null}>
        {() => <div>Should not render</div>}
      </FetchState>
    );
    expect(screen.getByText(/failed to load/i)).toBeInTheDocument();
    expect(screen.queryByText('Should not render')).not.toBeInTheDocument();
  });

  it('renders children when data is available', () => {
    render(
      <FetchState data={{ value: 1 }} loading={false} error={null} skeleton={null}>
        {(data) => <div>Data value: {data.value}</div>}
      </FetchState>
    );
    expect(screen.getByText('Data value: 1')).toBeInTheDocument();
  });
});
