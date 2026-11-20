import AgentPortrait from "@/components/brand/AgentPortrait";
import { aeoAnswers } from "@/lib/aeo";
import { BRAND } from "@/lib/brand";

type AeoAnswerBlockProps = {
  title?: string;
  answers?: Array<{ question: string; answer: string }>;
};

/**
 * Visible, citation-ready Q&A for answer engines (AEO) and local SEO.
 */
export default function AeoAnswerBlock({
  title = `Quick answers about ${BRAND.name}`,
  answers = [...aeoAnswers],
}: AeoAnswerBlockProps) {
  return (
    <section className="py-14 md:py-16 bg-slate-50 border-y border-slate-200" aria-label="Answer engine FAQ">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <AgentPortrait size="md" />
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#c9a227] font-semibold mb-1">
              AEO · Local Answers
            </p>
            <h2
              className="text-2xl md:text-3xl font-semibold text-slate-900 aeo-summary"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              {title}
            </h2>
          </div>
        </div>
        <div className="space-y-6">
          {answers.map((item) => (
            <article key={item.question} className="aeo-answer">
              <h3 className="font-semibold text-slate-900 mb-2">{item.question}</h3>
              <p className="text-slate-700 leading-relaxed">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
