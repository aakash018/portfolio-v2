import { AboutSection } from "@/components/about-section/AboutSection";
import { AvatarHolder } from "@/components/avatar-holder/AvaterHolder";
import { GlowBall } from "@/components/background-glow-ball/GlowBall";
import { ExpSection } from "@/components/exp-section/ExpSection";
import { Navigator } from "@/components/navigator/Navigator";
import { ProjectSection } from "@/components/project-section/ProjectSection";
import { SocialHolder } from "@/components/socials-holder/SocialsHolder";
import { WritingSection } from "@/components/writing-section/WritingSection";

export default function Home() {
  return (
    <div className="w-screen flex justify-center" >
      <GlowBall />
      <div className="font-lato py-12 lg:py-0 px-6 md:px-12 gap-40 lg:min-w-[1080px] lg:max-w-[1140px] lg:flex lg:w-[70%]  ">
        <div className="flex flex-col gap-2 lg:py-12 lg:justify-between lg:h-screen lg:sticky lg:top-0 md:gap-1">
          <div className="flex flex-col gap-2 md:gap-1">
            <AvatarHolder />
            <h1 className="md:text-[36px] font-extrabold">Aakash Khanal</h1>
            <h2 className="font-bold text-[20px]">Full-Stack Developer</h2>
            <h3 className="text-sm text-foregroundMute md:w-[300px] md:text-md" >From server-side to client-side, I turn ideas into fully functional web applications.</h3>
            <Navigator />
          </div>
          <SocialHolder />
        </div>
        <div className="mt-4 flex flex-col gap-12 lg:gap-36 lg:py-12 lg:mt-24">
          <AboutSection />
          <ExpSection />
          <ProjectSection />
          <WritingSection />
        </div>
      </div>
    </div>
  );
}
