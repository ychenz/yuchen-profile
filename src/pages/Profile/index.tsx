import React, { ReactElement, useEffect } from "react";
import TagCloud from "TagCloud";

import { ReactComponent as LogoIcon } from "assets/LogoV1.svg";
import { ReactComponent as EmailIcon }  from "assets/Email1.svg";
import { ReactComponent as FacebookIcon }  from "assets/Facebook1.svg";
import { ReactComponent as GithubIcon }  from "assets/Github1.svg";
import { ReactComponent as LinkedinIcon }  from "assets/Linkedin1.svg";
import DemosSection from "./DemosSection";
import EmploymentHistorySection from "./EmploymentHistorySection";

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

  const renderDemosSection = (): ReactElement => (
    <S.SectionContainer>
      <S.SectionTitle>DEMOS</S.SectionTitle>
      <DemosSection />
    </S.SectionContainer>
  );

  const pastWorkData = [
    { thumbNail: "https://i.pinimg.com/originals/61/38/5d/61385d2070289b91e3f48de78a388ace.png", title: "Analytics Line Charts" },
    { thumbNail: "https://i.pinimg.com/originals/7c/af/52/7caf52b79a22b58e8a45bcc61e24b1ed.png", title: "Analytics Table" },
    { thumbNail: "https://i.pinimg.com/originals/c1/76/eb/c176ebd4c94025a3249cbb93718ae720.png", title: "Analytics Dashboard" },
  ];
  const renderPastWorkSection = (): ReactElement => (
    <S.SectionContainer>
      <S.SectionTitle>PAST WORKS</S.SectionTitle>
      <S.PastWorkSectionContainer>
        {pastWorkData.map(data => (
          <S.PastWorkSectionEntry key={data.title}>
            <S.PastWorkSectionEntryThumbnail>
              <img src={data.thumbNail} alt={data.title} />
            </S.PastWorkSectionEntryThumbnail>
            <S.PastWorkSectionEntryTitle type="button">{data.title}</S.PastWorkSectionEntryTitle>
          </S.PastWorkSectionEntry>
        ))}
      </S.PastWorkSectionContainer>
    </S.SectionContainer>
  );

  const renderEmploymentHistorySection = (): ReactElement => (
    <S.SectionContainer>
      <S.SectionTitle>EMPLOYMENT HISTORY</S.SectionTitle>
      <EmploymentHistorySection />
    </S.SectionContainer>
  );

  const renderSkillsSection = (): ReactElement => (
    <S.SectionContainer>
      <S.SectionTitle>SKILLS</S.SectionTitle>
      <S.SkillsSectionTagCloudContainer>
        <div className="tagcloud" />
      </S.SkillsSectionTagCloudContainer>
    </S.SectionContainer>
  );

  const renderContactSection = (): ReactElement => (
    <S.SectionContainer>
      <S.SectionTitle>CONNECT WITH ME</S.SectionTitle>
      <S.ContactSectionContainer>
        <S.SectionContent>
          Let’s connect!
        </S.SectionContent>
        <S.ContactSectionSocialIconsContainer>
          <S.ContactSectionSocialIconsButton href="https://www.linkedin.com/in/yuchen-zhao-69a3a3ab">
            <LinkedinIcon />
          </S.ContactSectionSocialIconsButton>
          {/* <S.ContactSectionSocialIconsButton href="https://www.facebook.com/profile.php?id=100008167328586">
            <FacebookIcon />
          </S.ContactSectionSocialIconsButton> */}
          <S.ContactSectionSocialIconsButton href="https://github.com/ychenz">
            <GithubIcon />
          </S.ContactSectionSocialIconsButton>
          <S.ContactSectionSocialIconsButton href="mailto:yuchen@yuchenz.net">
            <EmailIcon />
          </S.ContactSectionSocialIconsButton>
        </S.ContactSectionSocialIconsContainer>
        <a href={process.env.PUBLIC_URL + "/resume-2022.pdf"}>
          <S.ContactSectionDownloadResumeButton type="button">
            Download Resume
          </S.ContactSectionDownloadResumeButton>
        </a>
        <S.ContactSectionCopyRight>
          © Yuchen Zhao 2020 - 2022
        </S.ContactSectionCopyRight>
      </S.ContactSectionContainer>
    </S.SectionContainer>
  );

  return (
    <S.Root>
      <S.TopBar>
        <a href="http://blog.yuchenz.net">
          <S.BackButton type="button">&#8592;{" "}BACK TO BLOG</S.BackButton>
        </a>
        <S.IconContainer href="http://blog.yuchenz.net">
            <LogoIcon />
        </S.IconContainer>
      </S.TopBar>
      {renderSelfIntroSection()}
      {renderDemosSection()}
      {renderPastWorkSection()}
      {renderEmploymentHistorySection()}

      <S.FooterContainer>
        {renderSkillsSection()}
        {renderContactSection()}
      </S.FooterContainer>
    </S.Root>
  );
}

export default Profile;