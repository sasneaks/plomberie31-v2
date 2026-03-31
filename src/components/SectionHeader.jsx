export default function SectionHeader({ label, title, subtitle, center = false, light = false }) {
  return (
    <div className={center ? 'text-center' : ''}>
      <div className={`flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.1em] mb-3
        ${center ? 'justify-center' : ''}
        ${light ? 'text-accent-400' : 'text-accent-500'}`}>
        <div className={`w-8 h-[2px] rounded-full ${light ? 'bg-accent-400' : 'bg-accent-500'}`} />
        {label}
        {center && <div className={`w-8 h-[2px] rounded-full ${light ? 'bg-accent-400' : 'bg-accent-500'}`} />}
      </div>
      <h2 className={`font-[Plus_Jakarta_Sans] text-[1.6rem] lg:text-[2.2rem] font-extrabold tracking-tight leading-[1.1] mb-3
        ${light ? 'text-white' : 'text-brand-900'}`}
        dangerouslySetInnerHTML={{ __html: title }} />
      {subtitle && (
        <p className={`text-[0.9rem] leading-relaxed ${center ? 'max-w-md mx-auto' : 'max-w-lg'}
          ${light ? 'text-white/40' : 'text-warm-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
