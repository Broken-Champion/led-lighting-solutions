import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import Navbar from '../../components/Navbar';

describe('Navbar', () => {
  beforeEach(() => {
    // Reset scroll position
    window.scrollY = 0;
    vi.clearAllMocks();
  });

  it('should render the logo', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const logo = screen.getByAltText('LED Lighting Solutions');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src');
  });

  it('should render all navigation links', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('should highlight the active route', () => {
    render(
      <MemoryRouter initialEntries={['/products']}>
        <Navbar />
      </MemoryRouter>
    );

    const productsLink = screen.getByText('Products');
    expect(productsLink).toHaveClass('active');
  });

  it('should not highlight inactive routes', () => {
    render(
      <MemoryRouter initialEntries={['/products']}>
        <Navbar />
      </MemoryRouter>
    );

    const homeLink = screen.getByText('Home');
    expect(homeLink).not.toHaveClass('active');
  });

  it('should render mobile menu toggle button', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const toggleButton = screen.getByRole('button', { name: /toggle menu/i });
    expect(toggleButton).toBeInTheDocument();
  });

  it('should open mobile menu when toggle is clicked', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const toggleButton = screen.getByRole('button', { name: /toggle menu/i });
    await user.click(toggleButton);

    const navLinks = container.querySelector('.nav-links');
    expect(navLinks).toHaveClass('mobile-open');
  });

  it('should close mobile menu when link is clicked', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    // Open menu
    const toggleButton = screen.getByRole('button', { name: /toggle menu/i });
    await user.click(toggleButton);

    const navLinks = container.querySelector('.nav-links');
    expect(navLinks).toHaveClass('mobile-open');

    // Click a link
    const homeLink = screen.getByText('Home');
    await user.click(homeLink);

    expect(navLinks).not.toHaveClass('mobile-open');
  });

  it('should toggle mobile menu on/off', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const toggleButton = screen.getByRole('button', { name: /toggle menu/i });
    const navLinks = container.querySelector('.nav-links');

    // Initially closed
    expect(navLinks).not.toHaveClass('mobile-open');

    // Open
    await user.click(toggleButton);
    expect(navLinks).toHaveClass('mobile-open');

    // Close
    await user.click(toggleButton);
    expect(navLinks).not.toHaveClass('mobile-open');
  });

  it('should add scrolled class when page is scrolled', () => {
    const { container, rerender } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const navbar = container.querySelector('.navbar-container');
    expect(navbar).not.toHaveClass('scrolled');

    // Simulate scroll
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 100,
    });

    window.dispatchEvent(new Event('scroll'));

    // Re-render to pick up state change
    rerender(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(navbar).toHaveClass('scrolled');
  });

  it('should apply floating class on home page', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>
    );

    const navbar = container.querySelector('.navbar-container');
    expect(navbar).toHaveClass('floating');
    expect(navbar).not.toHaveClass('fixed');
  });

  it('should apply fixed class on non-home pages', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/products']}>
        <Navbar />
      </MemoryRouter>
    );

    const navbar = container.querySelector('.navbar-container');
    expect(navbar).toHaveClass('fixed');
    expect(navbar).not.toHaveClass('floating');
  });

  it('should have correct link hrefs', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const homeLink = screen.getByText('Home');
    const productsLink = screen.getByText('Products');
    const aboutLink = screen.getByText('About Us');
    const servicesLink = screen.getByText('Services');
    const contactLink = screen.getByText('Contact');

    expect(homeLink).toHaveAttribute('href', '/');
    expect(productsLink).toHaveAttribute('href', '/products');
    expect(aboutLink).toHaveAttribute('href', '/about');
    expect(servicesLink).toHaveAttribute('href', '/services');
    expect(contactLink).toHaveAttribute('href', '/contact');
  });

  it('should cleanup scroll listener on unmount', () => {
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');

    const { unmount } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function)
    );
  });
});
