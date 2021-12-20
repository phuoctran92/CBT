import Images from "config/images";
import { routes } from "routers/routes";

export const navs = [
  {
    title: "Dasboard",
    icon: <img src={Images.icOrganization} alt="icon" />,
    path: routes.dashboard,
  }
];

