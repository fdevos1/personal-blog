import { ComponentProps } from "react";

import IconGitHub from "./github";
import IconInstagram from "./instagram";
import IconLinkedin from "./linkedin";
import IconLogo from "./logo";
import IconTwitter from "./twitter";

export type IconProps = ComponentProps<"svg"> & {
  name: string;
};

const Icon = ({ name }: IconProps) => {
  switch (name) {
    case "github":
      return <IconGitHub />;
    case "instagram":
      return <IconInstagram />;
    case "linkedin":
      return <IconLinkedin />;
    case "logo":
      return <IconLogo />;
    case "twitter":
      return <IconTwitter />;
    default:
      return;
  }
};

export default Icon;
