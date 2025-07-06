import { cn } from "@/lib/utils";
import { Badge } from "./badge";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[10rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  upcoming = false
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  upcoming?: boolean
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl p-4 transition duration-200 border border-white/[0.2] bg-black overflow-hidden",
        className,
      )}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-white font-sans font-bold mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans text-sm font-normal text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};