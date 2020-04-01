import { CampaignSelect } from "./components/pages/CampaignSelect";
import { CampaignPage } from "./components/pages/Campaign";
import CharacterPage from "./components/pages/Character";
import { GMPage } from "./components/pages/GM";
export const routes = [
  {
    path: "/:campaignKey/character/:name/:pc",
    main: CharacterPage
  },
  {
    path: "/:campaignKey/GM",
    main: GMPage
  },
  {
    path: "/:campaignKey",
    main: CampaignPage
  },
  {
    exact: true,
    path: "/",
    main: CampaignSelect
    // sidebar: null,
  }
];
