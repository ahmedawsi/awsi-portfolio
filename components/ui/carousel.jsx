"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CarouselContext = React.createContext(null);

const Carousel = React.forwardRef(
  (
    {
      orientation = "horizontal",
      opts,
      plugins,
      setApi,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((emblaApi) => {
      if (!emblaApi) return;
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => api && api.scrollPrev(), [api]);
    const scrollNext = React.useCallback(() => api && api.scrollNext(), [api]);

    const handleKeyDown = React.useCallback(
      (event) => {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
        if (event.key === "ArrowLeft") scrollPrev();
        if (event.key === "ArrowRight") scrollNext();
      },
      [scrollPrev, scrollNext]
    );

    React.useEffect(() => {
      if (!api) return;
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      onSelect(api);
      return () => {
        api.off("reInit", onSelect);
        api.off("select", onSelect);
      };
    }, [api, onSelect]);

    React.useEffect(() => {
      if (!setApi || !api) return;
      setApi(api);
    }, [api, setApi]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          orientation,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        }}>
        <div
          ref={ref}
          className={cn("relative", className)}
          onKeyDown={handleKeyDown}
          role="region"
          aria-roledescription="carousel"
          {...props}>
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = "Carousel";

const useCarousel = () => {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
};

const CarouselContent = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn(
            "flex",
            orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            className
          )}
          {...props}>
          {children}
        </div>
      </div>
    );
  }
);
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return (
      <div
        ref={ref}
        className={cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className
        )}
        role="group"
        aria-roledescription="slide"
        {...props}
      />
    );
  }
);
CarouselItem.displayName = "CarouselItem";

const NavButton = React.forwardRef(
  ({ direction, className, children, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur transition hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed",
        className
      )}
      {...props}>
      {children}
    </button>
  )
);
NavButton.displayName = "NavButton";

const CarouselPrevious = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return (
      <NavButton
        ref={ref}
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className={cn(
          "absolute",
          orientation === "horizontal"
            ? "left-2 top-1/2 -translate-y-1/2"
            : "left-1/2 top-2 -translate-x-1/2 rotate-90",
          className
        )}
        {...props}>
        <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        <span className="sr-only">Previous slide</span>
      </NavButton>
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return (
      <NavButton
        ref={ref}
        onClick={scrollNext}
        disabled={!canScrollNext}
        className={cn(
          "absolute",
          orientation === "horizontal"
            ? "right-2 top-1/2 -translate-y-1/2"
            : "left-1/2 bottom-2 -translate-x-1/2 rotate-90",
          className
        )}
        {...props}>
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
        <span className="sr-only">Next slide</span>
      </NavButton>
    );
  }
);
CarouselNext.displayName = "CarouselNext";

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
};
