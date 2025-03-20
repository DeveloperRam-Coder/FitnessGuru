
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const progressVariants = cva(
  "h-full rounded-full transition-all duration-500 ease-out",
  {
    variants: {
      color: {
        default: "bg-primary",
        blue: "bg-blue-500",
        green: "bg-green-500",
        red: "bg-red-500",
        amber: "bg-amber-500",
        purple: "bg-purple-500",
      },
      size: {
        sm: "h-1.5",
        md: "h-2",
        lg: "h-3",
      },
      animated: {
        true: "relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-white/20 after:animate-shimmer after:rounded-full",
        false: "",
      }
    },
    defaultVariants: {
      color: "default",
      size: "md",
      animated: false,
    },
  }
);

interface ProgressBarProps {
  value: number;
  max: number;
  className?: string;
  label?: string;
  showPercentage?: boolean;
  color?: "default" | "blue" | "green" | "red" | "amber" | "purple";
  size?: "sm" | "md" | "lg";
  animated?: boolean;
  showValue?: boolean;
  valuePrefix?: string;
  valueSuffix?: string;
}

export function ProgressBar({
  value,
  max,
  className,
  label,
  showPercentage = false,
  color = "default",
  size = "md",
  animated = false,
  showValue = false,
  valuePrefix = "",
  valueSuffix = "",
}: ProgressBarProps) {
  const percentage = Math.round((value / max) * 100);
  const displayValue = showValue ? `${valuePrefix}${value}${valueSuffix}` : null;

  return (
    <div className={cn("space-y-1", className)}>
      {(label || showPercentage || displayValue) && (
        <div className="flex justify-between text-sm items-center">
          <div className="flex items-center space-x-2">
            {label && <span className="text-slate-600 dark:text-slate-400">{label}</span>}
            {displayValue && (
              <span className="font-medium text-slate-800 dark:text-slate-200">{displayValue}</span>
            )}
          </div>
          {showPercentage && (
            <span className="font-medium text-slate-800 dark:text-slate-200">{percentage}%</span>
          )}
        </div>
      )}
      <div className={cn("bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden", `h-${size}`)}>
        <div
          className={progressVariants({ color, size, animated })}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
