import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Download,
  FileOutput,
  Gem,
  Image,
  Layers,
  Merge,
  Minimize2,
  Pen,
  ScanText,
  Scissors,
  Shield,
  Upload,
  Wand2,
} from 'lucide-react'

const tools = [
  { icon: Merge, name: 'Merge', desc: 'Combine multiple documents into one' },
  { icon: Scissors, name: 'Split', desc: 'Extract pages or divide by range' },
  { icon: Minimize2, name: 'Compress', desc: 'Shrink file size, keep quality' },
  { icon: Shield, name: 'Protect', desc: 'Encrypt with password protection' },
  { icon: ScanText, name: 'OCR', desc: 'Extract text from scanned pages' },
  { icon: Image, name: 'Convert', desc: 'PDF to image, image to PDF' },
  { icon: Pen, name: 'Annotate', desc: 'Draw, highlight, and add text' },
  { icon: FileOutput, name: 'Export', desc: 'Word, image, and format tools' },
]

const steps = [
  {
    num: '01',
    icon: Upload,
    title: 'Upload',
    body: 'Drop any PDF into your workspace. Stored securely under your account.',
  },
  {
    num: '02',
    icon: Wand2,
    title: 'Process',
    body: 'Pick a tool — merge, split, compress, protect, annotate, convert, and more.',
  },
  {
    num: '03',
    icon: Download,
    title: 'Download',
    body: 'Every operation creates a new file. Your originals are never modified.',
  },
]

const primaryButtonClass =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-brand-500 to-brand-600 px-6 py-3.5 text-[15px] font-medium text-white shadow-[0_2px_24px_rgba(45,98,255,.35)] transition-all hover:-translate-y-px hover:shadow-[0_4px_32px_rgba(45,98,255,.5)] active:translate-y-0'

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050e18] text-slate-200">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,500;1,600&display=swap');

        @keyframes reveal {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .anim-reveal { animation: reveal .8s cubic-bezier(.16,1,.3,1) both; }
        .anim-d1 { animation-delay: .08s; }
        .anim-d2 { animation-delay: .16s; }
        .anim-d3 { animation-delay: .24s; }
        .anim-d4 { animation-delay: .36s; }
        .anim-fade { animation: fade .6s ease both; }

        .dot-grid {
          background-image: radial-gradient(rgba(148,163,184,.07) 1px, transparent 1px);
          background-size: 24px 24px;
        }

        .prism {
          position: relative;
          width: min(72vw, 340px);
          height: min(72vw, 340px);
        }

        .prism::before {
          position: absolute;
          inset: 0;
          content: '';
          background: conic-gradient(
            from 160deg,
            rgba(45,98,255,.18),
            rgba(96,165,250,.12),
            rgba(56,189,248,.08),
            rgba(45,98,255,.04),
            rgba(96,165,250,.14),
            rgba(45,98,255,.18)
          );
          clip-path: polygon(50% 4%, 93% 28%, 93% 72%, 50% 96%, 7% 72%, 7% 28%);
          animation: rotate-slow 40s linear infinite;
        }

        .prism::after {
          position: absolute;
          inset: 9%;
          content: '';
          background: conic-gradient(
            from 220deg,
            rgba(96,165,250,.1),
            transparent,
            rgba(56,189,248,.06),
            transparent,
            rgba(96,165,250,.1)
          );
          clip-path: polygon(50% 6%, 91% 29%, 91% 71%, 50% 94%, 9% 71%, 9% 29%);
          animation: rotate-slow 60s linear infinite reverse;
        }

        .tool-card {
          background: rgba(255,255,255,.02);
          border: 1px solid rgba(255,255,255,.05);
          transition: all .25s ease;
        }

        .tool-card:hover {
          background: rgba(255,255,255,.04);
          border-color: rgba(96,165,250,.18);
          box-shadow: 0 16px 48px -12px rgba(0,0,0,.5), 0 0 0 1px rgba(96,165,250,.08);
          transform: translateY(-2px);
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute left-1/2 top-[-18rem] h-[42rem] w-[42rem] max-w-none -translate-x-1/2 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(45,98,255,.1) 0%, transparent 65%)' }}
        />
        <div
          className="absolute right-[-14rem] top-[55%] h-[30rem] w-[30rem] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,.05) 0%, transparent 65%)' }}
        />
      </div>

      <nav
        className="sticky top-0 z-50 border-b border-white/[.04] backdrop-blur-xl"
        style={{ background: 'rgba(5,14,24,.75)' }}
      >
        <div className="mx-auto flex min-h-16 max-w-6xl flex-wrap items-center gap-x-2 gap-y-1 px-4 py-2 sm:flex-nowrap sm:px-6 sm:py-0">
          <Link to="/" className="flex min-h-11 shrink-0 items-center gap-2.5 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-blue-400 shadow-lg shadow-brand-500/20 transition-shadow group-hover:shadow-brand-500/40">
              <Gem size={14} className="text-white" />
            </div>
            <span className="font-display text-lg font-semibold tracking-tight text-white">
              Crystal<span className="text-blue-400">PDF</span>
            </span>
          </Link>

          <div className="ml-auto flex items-center gap-1 sm:gap-2">
            <Link
              to="/login"
              className="inline-flex min-h-11 items-center justify-center whitespace-nowrap px-3 py-2 text-sm text-slate-400 transition-colors hover:text-white sm:px-4"
            >
              Sign in
            </Link>
            <Link
              to="/register"
              className="inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-lg border border-brand-500/25 bg-brand-500/15 px-3 py-2 text-sm font-medium text-blue-300 transition-all hover:border-brand-500/40 hover:bg-brand-500/25 sm:px-4"
            >
              Get started
            </Link>
          </div>
        </div>
      </nav>

      <section className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-20 md:grid-cols-[minmax(0,1fr),auto] md:gap-12 md:pb-36 md:pt-32">
        <div className="min-w-0 max-w-2xl">
          <h1 className="anim-reveal font-display text-[clamp(2.2rem,11vw,4.8rem)] font-semibold leading-[1.1] tracking-tight text-white sm:text-[clamp(2.2rem,5.5vw,4.8rem)]">
            Every<br className="hidden sm:block" /> PDF tool<br className="hidden sm:block" /> you'll ever{' '}
            <em className="not-italic text-blue-400">need.</em>
          </h1>

          <p className="anim-reveal anim-d2 mt-7 max-w-md text-[clamp(1rem,1.8vw,1.2rem)] leading-relaxed text-slate-400">
            Merge, split, compress, protect, convert, and annotate — from one elegant workspace. No subscriptions, no upload limits.
          </p>

          <div className="anim-reveal anim-d3 mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
            <Link to="/register" className={`${primaryButtonClass} w-full sm:w-auto`}>
              Start for free <ArrowRight size={15} strokeWidth={2.2} />
            </Link>
            <Link
              to="/login"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 text-[15px] font-medium text-slate-300 transition-all hover:border-white/20 hover:bg-white/[.03] sm:w-auto"
            >
              Sign in to workspace
            </Link>
          </div>
        </div>

        <div className="anim-fade anim-d4 hidden items-center justify-center md:flex" aria-hidden="true">
          <div className="prism">
            <div className="absolute inset-0 flex items-center justify-center">
              <Layers size={48} className="text-blue-400/30" strokeWidth={1} />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 dot-grid">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 md:py-32">
          <div className="mb-10 max-w-lg sm:mb-14">
            <p className="mb-4 text-xs font-medium uppercase tracking-[.15em] text-brand-400">Toolkit</p>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-white">
              Everything in<br className="hidden sm:block" /> one workspace
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-500">
              Every operation produces a new file — your originals stay untouched.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:grid-cols-4">
            {tools.map((tool) => (
              <div key={tool.name} className="tool-card group cursor-default rounded-2xl p-4 sm:p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/[.12] bg-blue-400/[.08] transition-colors group-hover:border-blue-400/[.2] group-hover:bg-blue-400/[.12]">
                  <tool.icon size={18} className="text-blue-400" strokeWidth={1.8} />
                </div>
                <p className="mb-1 text-[15px] font-semibold tracking-tight text-white">{tool.name}</p>
                <p className="text-[13px] leading-snug text-slate-500">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-white/[.04]">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 md:py-32">
          <div className="mx-auto mb-12 max-w-lg text-center sm:mb-16">
            <p className="mb-4 text-xs font-medium uppercase tracking-[.15em] text-brand-400">How it works</p>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-white">
              Three steps, that's it
            </h2>
          </div>

          <div>
            {steps.map((step, index) => (
              <div key={step.num}>
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="flex shrink-0 flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10">
                      <step.icon size={20} className="text-blue-400" strokeWidth={1.6} />
                    </div>
                  </div>
                  <div className="min-w-0 pt-1">
                    <p className="mb-1 text-xs font-medium tracking-wider text-brand-400/60">Step {step.num}</p>
                    <h3 className="mb-1.5 text-base font-semibold tracking-tight text-white">{step.title}</h3>
                    <p className="max-w-sm text-sm leading-relaxed text-slate-500">{step.body}</p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="flex items-stretch gap-4 py-1 sm:gap-5" aria-hidden="true">
                    <div className="flex w-12 shrink-0 justify-center">
                      <div className="h-8 w-px bg-gradient-to-b from-brand-500/20 to-transparent" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-white/[.04]">
        <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28 md:py-36">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-64"
            style={{ background: 'radial-gradient(ellipse 50% 100% at 50% 0%, rgba(45,98,255,.06), transparent)' }}
            aria-hidden="true"
          />
          <p className="relative mb-4 text-sm text-slate-500">Free to use. No credit card required.</p>
          <h2 className="relative mb-8 font-display text-[clamp(2.4rem,11vw,4.5rem)] font-semibold leading-[.95] tracking-tight text-white sm:mb-10 sm:text-[clamp(2.4rem,5.5vw,4.5rem)]">
            Start working with<br /> your PDFs today.
          </h2>
          <div className="relative flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link to="/register" className={`${primaryButtonClass} w-full px-7 sm:w-auto`}>
              Create free account <ArrowRight size={15} strokeWidth={2.2} />
            </Link>
            <Link
              to="/login"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-[15px] font-medium text-slate-400 transition-colors hover:text-slate-200 sm:w-auto"
            >
              or sign in
            </Link>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/[.04]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-8 text-center sm:flex-row sm:justify-between sm:gap-4 sm:px-6 sm:text-left">
          <span className="font-display text-sm font-semibold text-slate-600">
            Crystal<span className="text-blue-400/50">PDF</span>
          </span>
          <p className="text-xs text-slate-700">Secure, server-side processing. Your files never leave your account.</p>
        </div>
      </footer>
    </div>
  )
}
