import { AvatarHolder } from "@/components/avatar-holder/AvaterHolder";
import { SocialHolder } from "@/components/socials-holder/SocialsHolder";

export default function Home() {
  return (
    <div className="font-lato py-12 px-6">
      <div className="flex flex-col gap-2">
        <AvatarHolder />
        <h1 className="">Aakash Khanal</h1>
        <h2>Full-Stack Developer</h2>
        <h3 className="text-sm text-foregroundMute" >From server-side to client-side, I turn ideas into fully functional web applications.</h3>
        <SocialHolder />
      </div>
    </div>
  );
}
