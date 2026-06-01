export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-left">
      <div className="text-sm font-semibold text-sky-400">Sky-Elect</div>
      <h2 className="mt-2 text-3xl md:text-4xl font-black leading-tight">{title}</h2>
      {subtitle ? <p className="mt-3 text-sm md:text-base text-[var(--text)] max-w-2xl">{subtitle}</p> : null}
    </div>
  )
}

