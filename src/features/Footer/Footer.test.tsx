import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders footer text', () => {
    render(<Footer text={'hello'}/>);
    expect(screen.getByText(/hello/)).toBeInTheDocument();
  });

});
