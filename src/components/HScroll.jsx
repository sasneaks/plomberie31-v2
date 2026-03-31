/* Horizontal scroll container for mobile — replaces vertical card stacks */
export default function HScroll({ children, className = '' }) {
  return (
    <div className={`flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory -mx-5 px-5 ${className}`}>
      {children}
    </div>
  )
}

export function HScrollCard({ children, className = '', width = 'min-w-[280px]' }) {
  return (
    <div className={`${width} snap-start shrink-0 ${className}`}>
      {children}
    </div>
  )
}
