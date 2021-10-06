import UxIcon from "./icons/Ux";
import ArIcon from "./icons/ar";
import AppsIcon from "./icons/apps";
import VideosIcon from "./icons/videos";
import UpdatesIcon from "./icons/updates";
import Advertisements from "./icons/Advertisements";
import IllustrationIcon from "./icons/illustration";
import DocumentationIcon from "./icons/documentation";
import Travel from "./icons/Travel";

const data = [
  {
    section: "Apps",
    content: [
      {
        title: "All Apps",
        icon: <AppsIcon />,
        link: "/",
      },
      {
        title: "Updates",
        icon: <UpdatesIcon />,
        link: "/updates",
      },
    ],
  },
  {
    section: "Categories",
    content: [
      {
        title: "Advertisements",
        icon: <Advertisements />,
        link: "/advertisements",
      },
      {
        title: "Travel",
        icon: <Travel />,
        link: "/travel",
      },
      {
        title: "Videos",
        icon: <VideosIcon />,
        link: "/videos",
      },
      {
        title: "Illustrations",
        icon: <IllustrationIcon />,
        link: "/illustration",
      },
      {
        title: "UI/UX",
        icon: <UxIcon />,
        link: "/ux",
      },
      {
        title: "3D/AR",
        icon: <ArIcon />,
        link: "/ar",
      },
    ],
  },
  {
    section: "Guides",
    content: [
      {
        title: "Documentation",
        icon: <DocumentationIcon />,
        link: "/admin/documentation",
      },
    ],
  },
];

export default data;
