// Small gold floral divider.
export default function Ornament({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-10 bg-gold/60" />
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 2c1.5 2 1.5 4-0 6-1.5-2-1.5-4 0-6ZM10 12c1.5 2 1.5 4 0 6-1.5-2-1.5-4 0-6ZM2 10c2-1.5 4-1.5 6 0-2 1.5-4 1.5-6 0ZM12 10c2-1.5 4-1.5 6 0-2 1.5-4 1.5-6 0Z"
          fill="#C9A66B"
        />
        <circle cx="10" cy="10" r="1.6" fill="#C9A66B" />
      </svg>
      <span className="h-px w-10 bg-gold/60" />
    </div>
  )
}
