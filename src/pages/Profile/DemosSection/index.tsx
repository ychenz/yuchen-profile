import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as BarChartIcon } from "assets/BarChart.svg";
import { ReactComponent as GamePadIcon } from "assets/GamePad.svg";
import { ReactComponent as CloudApiIcon } from "assets/CloudApi.svg";
import { ReactComponent as DocumentIcon } from "assets/Document.svg";
import { ReactComponent as GithubOutlineIcon } from "assets/GithubOutline.svg";
import { ReactComponent as PlayOutlineIcon } from "assets/PlayOutline.svg";
import bitcoinIcon from "assets/bitcoin.png";

import { SectionSubTitle } from "../styles";
import {
  Root,
  DemoCard,
  DemoCardContent,
  DemoCardIconContainer,
  DemoCardActionsContainer,
  DemoCardActionsViewCode,
  DemoCardActionsPlay,
  PngIcon
} from "./styles";

export interface DemoOption {
  name: string;
  value: string | null;
  description: string;
  url: string | null;
  sourceUrl: string;
}

export const demosList: DemoOption[] = [
  {
    name: "Analytics",
    value: "analytics",
    description: "This demos a line chart for Apple stock using real market data fetched from FMP APIs",
    url: "https://stock-chart-demo.yuchenz.net/",
    sourceUrl: "https://github.com/ychenz/stock-chart-demo"
  },
  {
    name: "Web Game",
    value: "web-game",
    description: "Play Gomuku game with a smart bot player",
    url: "https://gomoku-demo.yuchenz.net/",
    sourceUrl: "https://github.com/ychenz/gomoku-web-game-demo"
  },
  {
    name: "Web3 Blog Creator",
    value: null,
    description: "Prize winning web3 demo project that allows user creating a blog on decentralized web with just a few clicks",
    url: null,
    sourceUrl: "https://github.com/ychenz/web3-blog-creator"
  },
  // {
  //   name: "Integrations",
  //   value: "integrations",
  //   description: "Talking to my virtual assistant on Messenger integration, wikipedia integration",
  //   url: "#",
  //   sourceUrl: "#"
  // },
  // {
  //   name: "Personal Website",
  //   value: "personal-website",
  //   description: "Headless wordpress with custom Nextjs frontend using server side rendering and SEO",
  //   url: "#",
  //   sourceUrl: "#"
  // },
];

export default function DemosSection(): ReactElement {
  const iconsList = [
    <BarChartIcon />,
    <GamePadIcon />,
    <PngIcon src={bitcoinIcon} alt="bitcoin-logo" />,
    <DocumentIcon />
  ];

  const colors = [
    "#A161BF",
    "#1DA7DA",
    "#F06E10",
    "#4DD488"
  ];

  return (
    <Root>
      {demosList.map((demoOption, i) => (
        <DemoCard key={demoOption.value}>
          <DemoCardIconContainer>
            {iconsList[i]}
          </DemoCardIconContainer>
          <div>
            <SectionSubTitle>{demoOption.name}</SectionSubTitle>
            <DemoCardContent>{demoOption.description}</DemoCardContent>
            <DemoCardActionsContainer>
              <DemoCardActionsViewCode color="black" href={demoOption.sourceUrl}>
                <GithubOutlineIcon />
              </DemoCardActionsViewCode>
              {demoOption.value && (
                <Link to={`/demo/${demoOption.value}`}>
                  <DemoCardActionsPlay color={colors[i]}><PlayOutlineIcon /></DemoCardActionsPlay>
                </Link>
              )}
            </DemoCardActionsContainer>
          </div>
        </DemoCard>
      ))}
    </Root>
  );
}
