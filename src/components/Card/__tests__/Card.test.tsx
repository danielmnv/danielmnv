import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from '../Card';

describe('Card', () => {
  it('renders children content', () => {
    render(
      <Card>
        <div>Test Content</div>
      </Card>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies clickable styles when clickable prop is true', () => {
    render(
      <Card clickable href="https://example.com">
        <div>Test Content</div>
      </Card>
    );

    const card = screen.getByRole('link');
    expect(card).toHaveClass('clickable');
  });

  it('renders as a div when clickable is false', () => {
    render(
      <Card clickable={false}>
        <div>Test Content</div>
      </Card>
    );

    const card = screen.getByText('Test Content').parentElement;
    expect(card).toHaveClass('card');
    expect(card).not.toHaveClass('clickable');
  });

  it('applies custom className', () => {
    render(
      <Card className="custom-class">
        <div>Test Content</div>
      </Card>
    );

    const card = screen.getByText('Test Content').parentElement;
    expect(card).toHaveClass('custom-class');
  });
});
