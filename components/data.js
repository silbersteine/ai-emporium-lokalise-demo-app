import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";
import { Trans } from "react-i18next";

const benefitOne = {
  title: "Showcase Your Marketing Strengths",
  desc: "Use this section to highlight your core marketing benefits or features that set your brand apart. You can also add an engaging image or illustration alongside key bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Deep Customer Insights",
      desc: "Understand your audience’s needs and preferences to tailor your marketing strategies effectively.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Boost Lead Acquisition",
      desc: "Implement targeted campaigns that attract and convert new customers.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Enhance Customer Loyalty",
      desc: "Use proven techniques to retain clients and increase lifetime value.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Unlock Additional Marketing Advantages",
  desc: "Highlight more benefits of your marketing solutions with a dynamic layout and complementary imagery, helping prospects understand your full value.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Optimized for All Devices",
      desc: "Our strategies and tools ensure seamless experiences on mobile, desktop, and beyond.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Cutting-Edge Tech",
      desc: "Leverage the latest marketing technologies and data-driven insights for superior results.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Flexible Branding Modes",
      desc: "Adapt your campaigns with light and dark themes to match your brand identity perfectly.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
