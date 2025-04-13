"use client";
import { ContainerScroll } from "@/components/ui/container-scoll-animation";
import video from "@/assets/video.mp4"

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
            a new quest, a new win.<br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        <video
          src={video} // place this in your /public folder or import properly
          autoPlay
          loop
          muted
          playsInline
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
        />
      </ContainerScroll>
    </div>
  );
}
