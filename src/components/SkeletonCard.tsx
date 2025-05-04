// components/SkeletonCard.tsx
import { Skeleton } from "@/components/ui/skeleton"

const SkeletonCard = () => {
  return (
    <div className="bg-slate-50 rounded-xl overflow-hidden shadow-lg w-full max-w-sm mx-auto">
      <Skeleton className="h-48 w-full" /> {/* Image placeholder */}
      <div className="p-4 space-y-2">
        <Skeleton className="h-6 w-3/4 mx-auto" /> {/* Title */}
        <div className="text-center space-y-1">
          <Skeleton className="h-4 w-1/2 mx-auto" />
          <Skeleton className="h-4 w-1/2 mx-auto" />
          <Skeleton className="h-4 w-1/2 mx-auto" />
          <Skeleton className="h-4 w-1/2 mx-auto" />
        </div>
      </div>
    </div>
  )
}

export default SkeletonCard;
