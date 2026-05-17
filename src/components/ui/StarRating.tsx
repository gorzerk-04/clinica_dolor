import { Star } from 'lucide-react'

interface StarRatingProps {
  rating: number
  size?: number
}

export function StarRating({ rating, size = 18 }: StarRatingProps) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={
            i < rating
              ? 'fill-amber-400 text-amber-400'
              : 'fill-slate-200 text-slate-200'
          }
          aria-hidden
        />
      ))}
    </div>
  )
}
