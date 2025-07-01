import { cn } from "@/lib/utils";
import Image from "next/image";
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
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
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
  image,
  upcoming = false
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  image?: string;
  upcoming?: boolean
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl p-4 transition duration-200 border border-white/[0.2] bg-black overflow-hidden",
        className,
      )}
    >
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className="mt-2 mb-2 font-sans text-xl font-bold text-neutral-200 flex gap-2">
          {title}
          {
            upcoming && (
              <Badge className='h-max py-1'>
                Upcoming
              </Badge>
            )
          }
        </div>
        <div className="font-sans text-sm font-normal text-neutral-300">
          {description}
        </div>
      </div>

      {
        image && (
          <div className='relative'>
            <Image
              src={image}
              height={500}
              width={500}
              alt={'feature'}
              className='w-full rounded-lg'
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-10% to-90% from-transparent to-black/80" />
          </div>
        )
      }
    </div>
  );
};
