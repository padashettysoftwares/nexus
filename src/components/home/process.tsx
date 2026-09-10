import { PROCESS_STEPS } from "@/lib/site-data";
import { SectionHeading, Section, Shell } from "./primitives";
import { Reveal } from "./reveal";

/**
 * The engagement, drawn as a single rail rather than four cards. Each step
 * hangs from one continuous hairline that runs across the row on desktop and
 * down the left edge on mobile, so it reads as one process instead of four
 * unrelated boxes.
 */
export function Process() {
  return (
    <Section tone="white" divided>
      <Shell>
        <SectionHeading
          eyebrow="How we work"
          title="Four steps, and you always know which one you are on."
          lede="Every engagement runs the same way, whether it is a single trademark filing or a full company setup with licences and monthly books."
        />

        <ol className="relative mt-14 grid grid-cols-1 gap-10 sm:mt-16 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14 lg:grid-cols-4 lg:gap-8">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 80} className="relative pl-8 lg:pl-0 lg:pt-8">
              {/* The rail: vertical on mobile, horizontal from lg. */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-2 h-full w-px bg-rule lg:left-0 lg:top-0 lg:h-px lg:w-full"
              />
              <span
                aria-hidden="true"
                className="absolute left-0 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent lg:left-0 lg:top-0 lg:-translate-y-1/2 lg:translate-x-0"
              />

              <span className="font-display block text-sm font-semibold tabular-nums text-ink-300">
                Step {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display mt-3 text-lg font-semibold tracking-[-0.01em] text-ink-900">
                {step.title}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-[1.75] text-ink-500">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </Shell>
    </Section>
  );
}
