import React, { ReactElement, useEffect } from "react";
import TagCloud from "TagCloud";
import { ReactComponent as LogoIcon } from './LogoV1.svg';

import * as S from "./styles";

const container = ".tagcloud";
const texts = [
    "JavaScript", "HTML5", "CSS3",
    "SCSS", "React", "Redux",
    "API Integration","Python", "MySQL",
    "MongoDB", "WebSocket", "TypeScript"
];

function Profile(): ReactElement {
  /**
   * Rendering tag cloud sphere
   * Docs: https://www.npmjs.com/package/TagCloud?activeTab=readme
   */
  useEffect(() => {
    TagCloud(container, texts, {});
  }, []);

  const renderSelfIntroSection = (): ReactElement => (
    <S.SelfIntroSectionContainer>
      <S.SectionTitle>HI, I’M</S.SectionTitle>
      <S.SelfIntroSectionTitle>YUCHEN</S.SelfIntroSectionTitle>
      <S.SelfIntroSectionContainer>
        <S.SectionContent>
          I’m a professional full-stack web engineer based in Toronto.
          <br />
          Since 2018, I have been working for Ada as a web developer and the projects I built have assisted the
          company to grow its revenue by 100% from 2018 to year end 2020. I am specialized in building front-end
          applications using React & Redux to implement design solutions that satisfy complex user requirements.
          I strive to write high performance code that is highly modular and maintainable.
        </S.SectionContent>
      </S.SelfIntroSectionContainer>
    </S.SelfIntroSectionContainer>
  );

    return (
        <S.Root>
            <S.TopBar>
                <S.IconContainer href="http://blog.yuchenz.net">
                    <LogoIcon />
                </S.IconContainer>
            </S.TopBar>
            {renderSelfIntroSection()}

        </S.Root>
    );
}

export default Profile;