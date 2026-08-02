export default function PageHero({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <section className="bg-rice">
      <div className="container-x py-16 sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl leading-tight text-forest sm:text-5xl">
          {title}
        </h1>
        {desc && <p className="mt-4 max-w-2xl text-lg text-ink/70">{desc}</p>}
      </div>
    </section>
  );
}
