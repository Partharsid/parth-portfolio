import { getGitHubUser } from "@/lib/github";
import { SectionReveal } from "./section-reveal";

export async function About() {
  const user = await getGitHubUser();

  return (
    <section id="about" className="py-28 sm:py-36 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] mb-14">
            About
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-[1fr_260px] gap-16 items-start">
          <SectionReveal delay={0.08}>
            <div className="space-y-5 text-muted text-[1.05rem] leading-[1.75] font-light">
              <p>
                I&rsquo;m a second&#8209;year Computer Science student at VIT&#8209;AP
                University with a focus on building software that bridges
                hardware and intelligence.
              </p>
              <p>
                My work spans ultra&#8209;low&#8209;power Edge&nbsp;AI systems on
                ESP32 microcontrollers, cybersecurity reconnaissance tools for
                AI&nbsp;agents, and full&#8209;stack web applications built with
                TypeScript and Next.js. I care about shipping real products, not
                just prototypes.
              </p>
              <p>
                Currently seeking software engineering internships where I can
                contribute to meaningful engineering challenges.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.18}>
            <dl className="space-y-0">
              {[
                { label: "Public repos", value: String(user.public_repos) },
                { label: "Focus", value: "Edge AI · Full-Stack" },
                { label: "University", value: "VIT-AP" },
                { label: "Status", value: "Open to internships", accent: true },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className={`flex justify-between py-4 text-sm ${
                    i < 3 ? "border-b border-border-subtle" : ""
                  }`}
                >
                  <dt className="text-muted">{item.label}</dt>
                  <dd
                    className={`font-medium ${
                      item.accent ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
