import { SectionReveal } from "./section-reveal";

const stack = [
  { name: "TypeScript", note: "Primary" },
  { name: "Python", note: "AI & Scripting" },
  { name: "Java", note: "OOP & DSA" },
  { name: "C", note: "Embedded" },
  { name: "Next.js", note: "Full-Stack" },
  { name: "React", note: "Frontend" },
  { name: "Node.js", note: "Backend" },
  { name: "Express", note: "APIs" },
  { name: "ESP32", note: "IoT Hardware" },
  { name: "Tailwind", note: "Styling" },
  { name: "Vercel", note: "Deployment" },
  { name: "Git", note: "Version Control" },
];

export function TechStack() {
  return (
    <section id="stack" className="py-28 sm:py-36 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] mb-16">
            Stack
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-border-subtle rounded-xl overflow-hidden border border-border-subtle">
            {stack.map((tech) => (
              <div
                key={tech.name}
                className="bg-background p-5 sm:p-6 hover:bg-surface transition-colors duration-300"
              >
                <p className="text-[0.95rem] font-medium">{tech.name}</p>
                <p className="text-xs text-muted mt-1.5 font-light">
                  {tech.note}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
