import '@testing-library/jest-dom/vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import LandingPage from './LandingPage'

function renderPage() {
  return render(
    <MemoryRouter>
      <LandingPage />
    </MemoryRouter>,
  )
}

describe('LandingPage responsive layout contract', () => {
  it('renders every user-facing tool and workflow step', () => {
    renderPage()

    expect(screen.getByText('Merge')).toBeInTheDocument()
    expect(screen.getByText('Split')).toBeInTheDocument()
    expect(screen.getByText('Compress')).toBeInTheDocument()
    expect(screen.getByText('Protect')).toBeInTheDocument()
    expect(screen.getByText('OCR')).toBeInTheDocument()
    expect(screen.getByText('Convert')).toBeInTheDocument()
    expect(screen.getByText('Annotate')).toBeInTheDocument()
    expect(screen.getByText('Export')).toBeInTheDocument()

    expect(screen.getByText('Step 01')).toBeInTheDocument()
    expect(screen.getByText('Step 02')).toBeInTheDocument()
    expect(screen.getByText('Step 03')).toBeInTheDocument()
  })

  it('preserves functional routes for every conversion CTA', () => {
    renderPage()

    const registerLinks = screen.getAllByRole('link', { name: /start for free|create free account|get started/i })
    const loginLinks = screen.getAllByRole('link', { name: /sign in|sign in to workspace|or sign in/i })

    expect(registerLinks.length).toBeGreaterThanOrEqual(3)
    expect(loginLinks.length).toBeGreaterThanOrEqual(3)

    for (const link of registerLinks) {
      expect(link).toHaveAttribute('href', '/register')
    }

    for (const link of loginLinks) {
      expect(link).toHaveAttribute('href', '/login')
    }
  })

  it('enforces narrow-screen overflow containment and mobile-first gutters', () => {
    const { container } = renderPage()
    const root = container.firstElementChild

    expect(root).toHaveClass('overflow-x-hidden')

    const mobileContainers = container.querySelectorAll('.px-4')
    expect(mobileContainers.length).toBeGreaterThanOrEqual(5)

    for (const element of mobileContainers) {
      expect(element.className).toContain('sm:px-6')
    }
  })

  it('stacks calls to action on handsets and restores horizontal layout from sm breakpoint', () => {
    const { container } = renderPage()
    const actionGroups = [...container.querySelectorAll('div')].filter((element) =>
      element.className.includes('flex-col') &&
      element.className.includes('sm:flex-row'),
    )

    expect(actionGroups.length).toBeGreaterThanOrEqual(2)

    for (const group of actionGroups) {
      expect(group.className).toContain('flex-col')
      expect(group.className).toContain('sm:flex-row')
    }

    expect(screen.getByRole('link', { name: /start for free/i })).toHaveClass('w-full', 'sm:w-auto')
    expect(screen.getByRole('link', { name: /create free account/i })).toHaveClass('w-full', 'sm:w-auto')
  })

  it('uses a one-column sub-420px tool layout without removing desktop density', () => {
    const { container } = renderPage()
    const toolGrid = [...container.querySelectorAll('div')].find((element) =>
      element.className.includes('min-[420px]:grid-cols-2') &&
      element.className.includes('sm:grid-cols-4'),
    )

    expect(toolGrid).toBeDefined()
    expect(toolGrid).toHaveClass('grid-cols-1')
    expect(toolGrid).toHaveClass('min-[420px]:grid-cols-2')
    expect(toolGrid).toHaveClass('sm:grid-cols-4')
  })

  it('provides touch-safe navigation targets and reduced-motion support', () => {
    const { container } = renderPage()

    expect(screen.getByRole('link', { name: /^sign in$/i })).toHaveClass('min-h-11')
    expect(screen.getByRole('link', { name: /^get started$/i })).toHaveClass('min-h-11')

    const css = container.querySelector('style')?.textContent ?? ''
    expect(css).toContain('@media (prefers-reduced-motion: reduce)')
    expect(css).toContain('.prism')
    expect(css).toContain('width: min(72vw, 340px)')
  })
})
