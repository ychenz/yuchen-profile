import React, { ReactElement } from "react";
import { Link, useParams } from "react-router-dom";

import { demosList } from "pages/Profile/DemosSection";

import * as PortfolioPageStyle from "pages/Profile/styles";
import { ReactComponent as LogoIcon } from "assets/LogoV1.svg";
import { ReactComponent as OpenInNewIcon }  from "assets/OpenInNew.svg";

import * as S from "./styles";

export default function Demo(): ReactElement {
  const { demoName } = useParams();
  console.log(demoName);

  const selectedDemoOption = demosList.find(
    demoOption => demoOption.value === demoName
  );

  // This can be none on 1st render after refresh before value is injected from router
  if (!selectedDemoOption) {
    return <></>;
  }

  return (
    <PortfolioPageStyle.Root>
      <PortfolioPageStyle.TopBar>
        <Link to="/">
          <PortfolioPageStyle.BackButton type="button">&#8592;{" "}BACK</PortfolioPageStyle.BackButton>
        </Link>
        <PortfolioPageStyle.IconContainer href="/">
          <LogoIcon />
        </PortfolioPageStyle.IconContainer>
      </PortfolioPageStyle.TopBar>
      <S.Title>
        {selectedDemoOption.name}
      </S.Title>
      <S.Description>
        {selectedDemoOption.description}
      </S.Description>
      <S.DemoIFrameContainer>
        <S.DemoIFrame src={selectedDemoOption.url} title={`${selectedDemoOption.name} Demo`} frameBorder="0" />
      </S.DemoIFrameContainer>
      <S.ViewCodeButton href={selectedDemoOption.sourceUrl}>
        <div>View Code</div>
        <OpenInNewIcon />
      </S.ViewCodeButton>
    </PortfolioPageStyle.Root>
  );
}
