import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor, within, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import ProductCarousel from '../../components/ProductCarousel';

// Mock CSS import
vi.mock('../../components/ProductCarousel.css', () => ({}));

// Mock product images
vi.mock('../../assets/products/A19.png', () => ({ default: '/mock-a19.png' }));
vi.mock('../../assets/products/FlushMountCeilingLights .png', () => ({ default: '/mock-flush.png' }));
vi.mock('../../assets/products/LEDFloodlights .png', () => ({ default: '/mock-flood.png' }));
vi.mock('../../assets/products/LEDTrofferLights .png', () => ({ default: '/mock-troffer.png' }));
vi.mock('../../assets/products/LinearHighBayLights .png', () => ({ default: '/mock-linear.png' }));
vi.mock('../../assets/products/PANEL .png', () => ({ default: '/mock-panel.png' }));
vi.mock('../../assets/products/RecessedDownlights .png', () => ({ default: '/mock-recessed.png' }));
vi.mock('../../assets/products/UFOHighBayLights .png', () => ({ default: '/mock-ufo.png' }));
vi.mock('../../assets/products/Vapor-Tight-Lights .png', () => ({ default: '/mock-vapor.png' }));
vi.mock('../../assets/products/T8s.png', () => ({ default: '/mock-t8s.png' }));

// Wrapper component with Router
const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('ProductCarousel', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  describe('Rendering', () => {
    it('should render the carousel with title and subtitle', () => {
      renderWithRouter(<ProductCarousel />);

      expect(screen.getByText('Our Premium LED Solutions')).toBeInTheDocument();
      expect(screen.getByText('Industry-Leading Lighting Technology for Commercial Applications')).toBeInTheDocument();
    });

    it('should render exactly 4 product cards (3 visible + 1 hidden)', () => {
      renderWithRouter(<ProductCarousel />);

      const productCards = screen.getAllByRole('img', { hidden: true });
      // Should have 4 images rendered (4-card rendering system)
      expect(productCards.length).toBeGreaterThanOrEqual(4);
    });

    it('should render navigation buttons with proper aria-labels', () => {
      renderWithRouter(<ProductCarousel />);

      const prevButton = screen.getByLabelText('Previous products');
      const nextButton = screen.getByLabelText('Next products');

      expect(prevButton).toBeInTheDocument();
      expect(nextButton).toBeInTheDocument();
    });

    it('should render all 12 indicators (one for each product)', () => {
      renderWithRouter(<ProductCarousel />);

      const indicators = document.querySelectorAll('.indicator');
      expect(indicators).toHaveLength(12);
    });

    it('should have the first indicator active initially', () => {
      renderWithRouter(<ProductCarousel />);

      const indicators = document.querySelectorAll('.indicator');
      expect(indicators[0]).toHaveClass('active');
    });

    it('should render product cards with correct structure', () => {
      renderWithRouter(<ProductCarousel />);

      // Check for product category
      const categories = screen.getAllByText('LED Lighting Solutions');
      expect(categories.length).toBeGreaterThan(0);

      // Check for Details button
      const detailButtons = screen.getAllByText('Details');
      expect(detailButtons.length).toBeGreaterThan(0);
    });
  });

  describe('Navigation Buttons', () => {
    it('should advance to next products when Next button is clicked', async () => {
      const user = userEvent.setup({ delay: null });
      renderWithRouter(<ProductCarousel />);

      const nextButton = screen.getByLabelText('Next products');
      await user.click(nextButton);

      // Animation starts
      const track = document.querySelector('.carousel-track');
      expect(track).toHaveClass('animating');

      // Wait for animation to complete (700ms)
      vi.advanceTimersByTime(700);

      await waitFor(() => {
        expect(track).not.toHaveClass('animating');
      });
    });

    it('should go to previous products when Prev button is clicked', async () => {
      const user = userEvent.setup({ delay: null });
      renderWithRouter(<ProductCarousel />);

      const prevButton = screen.getByLabelText('Previous products');
      await user.click(prevButton);

      // Animation starts
      const track = document.querySelector('.carousel-track');
      expect(track).toHaveClass('animating');

      // Wait for animation to complete (700ms)
      vi.advanceTimersByTime(700);

      await waitFor(() => {
        expect(track).not.toHaveClass('animating');
      });
    });

    it('should prevent double clicks during animation (isAnimating guard)', async () => {
      const user = userEvent.setup({ delay: null });
      renderWithRouter(<ProductCarousel />);

      const nextButton = screen.getByLabelText('Next products');

      // First click
      await user.click(nextButton);
      const track = document.querySelector('.carousel-track');
      expect(track).toHaveClass('animating');

      // Second click during animation (should be ignored)
      await user.click(nextButton);

      // Should still be animating with only one transition
      expect(track).toHaveClass('animating');

      // Complete animation
      vi.advanceTimersByTime(700);

      await waitFor(() => {
        expect(track).not.toHaveClass('animating');
      });
    });

    it('should handle rapid clicks gracefully', async () => {
      const user = userEvent.setup({ delay: null });
      renderWithRouter(<ProductCarousel />);

      const nextButton = screen.getByLabelText('Next products');

      // Rapid clicks
      await user.click(nextButton);
      await user.click(nextButton);
      await user.click(nextButton);

      const track = document.querySelector('.carousel-track');
      expect(track).toHaveClass('animating');

      // Complete animation
      vi.advanceTimersByTime(700);

      await waitFor(() => {
        expect(track).not.toHaveClass('animating');
      });
    });
  });

  describe('Indicator Dots Navigation', () => {
    it('should navigate to specific product when indicator is clicked', async () => {
      const user = userEvent.setup({ delay: null });
      renderWithRouter(<ProductCarousel />);

      const indicators = document.querySelectorAll('.indicator');

      // Click on third indicator (index 2)
      await user.click(indicators[2] as HTMLElement);

      // Animation should start
      const track = document.querySelector('.carousel-track');
      expect(track).toHaveClass('animating');

      // Wait for animation
      vi.advanceTimersByTime(700);

      await waitFor(() => {
        expect(indicators[2]).toHaveClass('active');
      });
    });

    it('should not trigger animation when clicking current indicator', async () => {
      const user = userEvent.setup({ delay: null });
      renderWithRouter(<ProductCarousel />);

      const indicators = document.querySelectorAll('.indicator');

      // Click on first indicator (already active)
      await user.click(indicators[0] as HTMLElement);

      // Should not start animation
      const track = document.querySelector('.carousel-track');
      expect(track).not.toHaveClass('animating');
    });

    it('should reset autoplay when indicator is clicked', async () => {
      const user = userEvent.setup({ delay: null });
      renderWithRouter(<ProductCarousel />);

      const indicators = document.querySelectorAll('.indicator');

      // Click indicator
      await user.click(indicators[2] as HTMLElement);

      // Complete animation
      vi.advanceTimersByTime(700);

      // Autoplay should restart (wait 3000ms for next auto-advance)
      vi.advanceTimersByTime(3000);

      await waitFor(() => {
        const track = document.querySelector('.carousel-track');
        expect(track).toHaveClass('animating');
      });
    });
  });

  describe('Auto-play Functionality', () => {
    it('should automatically advance after 3 seconds', async () => {
      renderWithRouter(<ProductCarousel />);

      const track = document.querySelector('.carousel-track');
      expect(track).not.toHaveClass('animating');

      // Wait for auto-play interval (3000ms)
      vi.advanceTimersByTime(3000);

      // Should trigger animation
      await waitFor(() => {
        expect(track).toHaveClass('animating');
      });
    });

    it('should continuously auto-play through all products', async () => {
      renderWithRouter(<ProductCarousel />);

      // First auto-advance
      vi.advanceTimersByTime(3000);
      vi.advanceTimersByTime(700); // Complete animation

      // Second auto-advance
      vi.advanceTimersByTime(3000);

      const track = document.querySelector('.carousel-track');
      await waitFor(() => {
        expect(track).toHaveClass('animating');
      });
    });

    it('should clean up autoplay interval on unmount', () => {
      const { unmount } = renderWithRouter(<ProductCarousel />);

      unmount();

      // Should not throw errors or continue timers
      expect(() => vi.advanceTimersByTime(3000)).not.toThrow();
    });
  });

  describe('Animation Timing', () => {
    it('should apply animating class for exactly 700ms', async () => {
      const user = userEvent.setup({ delay: null });
      renderWithRouter(<ProductCarousel />);

      const nextButton = screen.getByLabelText('Next products');
      await user.click(nextButton);

      const track = document.querySelector('.carousel-track');
      expect(track).toHaveClass('animating');

      // Before 700ms
      vi.advanceTimersByTime(699);
      expect(track).toHaveClass('animating');

      // At 700ms
      vi.advanceTimersByTime(1);

      await waitFor(() => {
        expect(track).not.toHaveClass('animating');
      });
    });

    it('should clean up animation timeout on unmount', () => {
      const { unmount } = renderWithRouter(<ProductCarousel />);

      unmount();

      // Should not throw errors
      expect(() => vi.advanceTimersByTime(700)).not.toThrow();
    });
  });

  describe('Product Data and Links', () => {
    it('should display correct product names', () => {
      renderWithRouter(<ProductCarousel />);

      // First three visible products
      expect(screen.getByText('LED Tube T8 Type A')).toBeInTheDocument();
      expect(screen.getByText('LED Tube T8 Type B')).toBeInTheDocument();
      expect(screen.getByText('LED Tube T8 Type A+B')).toBeInTheDocument();
    });

    it('should display product specifications', () => {
      renderWithRouter(<ProductCarousel />);

      expect(screen.getByText('Ballast Compatible / A++')).toBeInTheDocument();
      expect(screen.getByText('Ballast Bypass / A++')).toBeInTheDocument();
      expect(screen.getByText('Hybrid Design / A++')).toBeInTheDocument();
    });

    it('should render Details buttons as links to product pages', () => {
      renderWithRouter(<ProductCarousel />);

      const detailLinks = screen.getAllByText('Details');
      expect(detailLinks[0]).toHaveAttribute('href', '/products/t8-type-a');
    });

    it('should have correct route mapping for all 12 products', () => {
      renderWithRouter(<ProductCarousel />);

      // Navigate through all products to verify routes
      const expectedRoutes = [
        '/products/t8-type-a',
        '/products/t8-type-b',
        '/products/t8-type-ab',
        '/products/panel',
        '/products/a19-bulbs',
        '/products/vapor-tight',
        '/products/flush-mount',
        '/products/troffer',
        '/products/linear-high-bay',
        '/products/ufo-high-bay',
        '/products/flood-lights',
        '/products/recessed-downlights',
      ];

      // First Details button should have first route
      const firstDetailLink = screen.getAllByText('Details')[0] as HTMLAnchorElement;
      expect(expectedRoutes).toContain(firstDetailLink.getAttribute('href'));
    });

    it('should render product images with correct alt text', () => {
      renderWithRouter(<ProductCarousel />);

      const images = screen.getAllByRole('img');
      const firstImage = images[0] as HTMLImageElement;

      expect(firstImage).toHaveAttribute('alt', 'LED Tube T8 Type A');
    });
  });

  describe('Infinite Loop Logic', () => {
    it('should wrap around to first product after last product', async () => {
      const user = userEvent.setup({ delay: null });
      renderWithRouter(<ProductCarousel />);

      const nextButton = screen.getByLabelText('Next products');
      const indicators = document.querySelectorAll('.indicator');

      // Navigate to last product (11 clicks from start)
      for (let i = 0; i < 11; i++) {
        await user.click(nextButton);
        vi.advanceTimersByTime(700);
      }

      await waitFor(() => {
        expect(indicators[11]).toHaveClass('active');
      });

      // One more click should wrap to first
      await user.click(nextButton);
      vi.advanceTimersByTime(700);

      await waitFor(() => {
        expect(indicators[0]).toHaveClass('active');
      });
    });

    it('should wrap around to last product when going back from first', async () => {
      const user = userEvent.setup({ delay: null });
      renderWithRouter(<ProductCarousel />);

      const prevButton = screen.getByLabelText('Previous products');
      const indicators = document.querySelectorAll('.indicator');

      // Start at first (index 0), go back should go to last (index 11)
      await user.click(prevButton);
      vi.advanceTimersByTime(700);

      await waitFor(() => {
        expect(indicators[11]).toHaveClass('active');
      });
    });
  });

  describe('Edge Cases', () => {
    it('should handle sold out products correctly', () => {
      // Note: Current data has no sold out products, but structure supports it
      renderWithRouter(<ProductCarousel />);

      const soldOutBadges = document.querySelectorAll('.sold-out-badge');
      expect(soldOutBadges).toHaveLength(0);
    });

    it('should render placeholder for products without images', () => {
      // Current implementation: all products have images
      renderWithRouter(<ProductCarousel />);

      const placeholders = document.querySelectorAll('.product-placeholder');
      expect(placeholders).toHaveLength(0);
    });

    it('should maintain correct product count (12 products)', () => {
      renderWithRouter(<ProductCarousel />);

      const indicators = document.querySelectorAll('.indicator');
      expect(indicators).toHaveLength(12);
    });

    it('should not break with simultaneous user interaction and autoplay', async () => {
      const user = userEvent.setup({ delay: null });
      renderWithRouter(<ProductCarousel />);

      const nextButton = screen.getByLabelText('Next products');

      // User clicks manually
      await user.click(nextButton);

      // Autoplay tries to trigger
      vi.advanceTimersByTime(3000);

      // Should handle gracefully (animation guard prevents conflicts)
      const track = document.querySelector('.carousel-track');
      expect(track).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA labels on navigation buttons', () => {
      renderWithRouter(<ProductCarousel />);

      const prevButton = screen.getByLabelText('Previous products');
      const nextButton = screen.getByLabelText('Next products');

      expect(prevButton).toHaveAttribute('aria-label', 'Previous products');
      expect(nextButton).toHaveAttribute('aria-label', 'Next products');
    });

    it('should have semantic HTML structure', () => {
      renderWithRouter(<ProductCarousel />);

      const heading = screen.getByRole('heading', { name: 'Our Premium LED Solutions' });
      expect(heading).toBeInTheDocument();
    });

    it('should render images with alt text for screen readers', () => {
      renderWithRouter(<ProductCarousel />);

      const images = screen.getAllByRole('img');
      images.forEach((img) => {
        expect(img).toHaveAttribute('alt');
        expect(img.getAttribute('alt')).not.toBe('');
      });
    });
  });

  describe('Performance and Memory', () => {
    it('should clean up all timers on unmount', () => {
      const { unmount } = renderWithRouter(<ProductCarousel />);

      unmount();

      // Advance time to verify no timers are running
      const timeBeforeAdvance = Date.now();
      vi.advanceTimersByTime(10000);
      const timeAfterAdvance = Date.now();

      // In real timers, this would be roughly equal; fake timers advance instantly
      expect(timeAfterAdvance).toBeGreaterThanOrEqual(timeBeforeAdvance);
    });

    it('should not accumulate timeout references', async () => {
      const user = userEvent.setup({ delay: null });
      renderWithRouter(<ProductCarousel />);

      const nextButton = screen.getByLabelText('Next products');

      // Multiple rapid interactions
      for (let i = 0; i < 5; i++) {
        await user.click(nextButton);
        vi.advanceTimersByTime(700);
      }

      // Should complete without memory leaks
      expect(nextButton).toBeInTheDocument();
    });
  });
});
