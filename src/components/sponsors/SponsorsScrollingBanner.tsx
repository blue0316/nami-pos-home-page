/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn, ScrollShadow } from '@nextui-org/react';
import React from 'react';

interface SponsorsScrollingBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  isReverse?: boolean;
  showShadow?: boolean;
  shouldPauseOnHover?: boolean;
  noAnimation?: boolean;
  isVertical?: boolean;
  gap?: string;
  duration?: number; // in seconds
}

const SponsorsScrollingBanner: React.ForwardRefRenderFunction<
  HTMLDivElement,
  SponsorsScrollingBannerProps
> = (
  {
    className,
    isReverse,
    isVertical = false,
    gap = '1rem',
    showShadow = true,
    shouldPauseOnHover = true,
    duration = 50,
    children,
    noAnimation = false,
    ...props
  },
  ref
) => {
  const shadowProps = {
    isEnabled: showShadow,
    offset: -20,
    size: 300,
    orientation: isVertical ? 'vertical' : 'horizontal',
    visibility: 'both',
  };

  return (
    <ScrollShadow
      {...props}
      {...shadowProps}
      ref={ref}
      className={cn(
        'flex',
        {
          'w-full': !isVertical,
          'overflow-y-hidden': isVertical,
          'overflow-x-hidden': !isVertical,
          'max-h-[calc(100vh_-_200px)]': isVertical,
        },
        className
      )}
      style={{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        '--gap': gap,
        '--duration': `${duration}s`,
      }}
    >
      <div
        className={cn('flex w-max items-stretch gap-[--gap]', {
          'flex-col': isVertical,
          'h-full': isVertical,
          'animate-scrolling-banner': !isVertical && !noAnimation,
          'animate-scrolling-banner-vertical': isVertical && !noAnimation,
          '[animation-direction:reverse]': isReverse && !noAnimation,
          'hover:[animation-play-state:paused]': shouldPauseOnHover && !noAnimation,
          'animation-play-state:paused': noAnimation,
        })}
      >
        {React.Children.map(children, (child) => React.cloneElement(child as any))}
      </div>
    </ScrollShadow>
  );
};

SponsorsScrollingBanner.displayName = 'SponsorsScrollingBanner';

export default React.forwardRef(SponsorsScrollingBanner);
