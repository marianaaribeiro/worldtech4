import type { NextPage } from "next";
import { type CSSProperties } from "react";
import styled from "styled-components";

export type ContentType = {
  className?: string;
  background?: string;
  line?: string;
  images?: string;
  logo?: string;

  /** Style props */
  lineIconRight?: CSSProperties["right"];
  lineIconLeft?: CSSProperties["left"];
};

const BackgroundIcon = styled.img`
  height: 702px;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
`;
const LineIcon = styled.img<{
  lineIconRight?: CSSProperties["right"];
  lineIconLeft?: CSSProperties["left"];
}>`height: 392px;
  width: 1604.2px;
  position: absolute;
  margin: 0 !important;
  right: 297.9px;
  bottom: 91px;
  z-index: 1;
  right: ${(p) => p.lineIconRight}
  left: ${(p) => p.lineIconLeft}
`;
const BackgroundWrapper = styled.div`
  width: 100%;
  margin: 0 !important;
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  height: 100%;
`;
const LogoIcon = styled.img`
  height: 55px;
  width: 55px;
  position: relative;
  object-fit: cover;
  min-height: 55px;
`;
const CompanyTechSystem = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 52px;
  font-weight: 700;
  font-family: inherit;
  @media screen and (max-width: 950px) {
    font-size: var(--font-size-13xl);
    line-height: 42px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--h4-size);
    line-height: 31px;
  }
`;
const CompanyNameContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs-5) 0px 0px;
  box-sizing: border-box;
  min-width: 270px;
  max-width: 100%;
`;
const Logo = styled.div`
  width: 482px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-9xs) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-5xs);
  max-width: 100%;
  @media screen and (max-width: 950px) {
    flex-wrap: wrap;
  }
`;
const InstagramIcon = styled.img`
  height: 21.4px;
  width: 22.3px;
  position: relative;
  min-height: 21px;
`;
const FacebookIcon = styled.img`
  height: 21.4px;
  width: 23px;
  position: relative;
  min-height: 21px;
`;
const TwiterIcon = styled.img`
  width: 21.5px;
  height: 17.2px;
  position: relative;
`;
const TwitterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-10xs-2);
`;
const LinkedInIcon = styled.img`
  height: 21.7px;
  width: 21.7px;
  position: relative;
  min-height: 22px;
`;
const YoutubeIcon = styled.img`
  width: 26px;
  height: 19px;
  position: relative;
`;
const YoutubeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-11xs-3);
`;
const Follow = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--gap-xl);
`;
const SocialLinks = styled.div`
  width: 222.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base-6) 0px 0px;
  box-sizing: border-box;
`;
const Logo1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px var(--padding-5xs) 0px var(--padding-6xs);
  box-sizing: border-box;
  max-width: 100%;
  gap: var(--gap-xl);
  z-index: 1;
  @media screen and (max-width: 1425px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const Empresa = styled.div`
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  min-width: 95px;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-xl);
    line-height: 27px;
  }
`;
const Sobre = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  min-width: 53px;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const Testeminhos = styled.div`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 14.5px);
  right: -17px;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  min-width: 107px;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const Oramento = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  min-width: 98px;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const Link = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: var(--gap-32xl);
  font-size: var(--font-size-xl);
`;
const UsefulLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-49xl);
`;
const Servios = styled.div`
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  min-width: 94px;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-xl);
    line-height: 27px;
  }
`;
const Produtos = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  min-width: 78px;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const NossaEquipe = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  min-width: 122px;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const Tecnologia = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  min-width: 95px;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const Service = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xs);
  font-size: var(--font-size-xl);
`;
const Service1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-49xl);
  min-width: 79px;
`;
const NavigationItems = styled.div`
  width: 374px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-138xl);
  min-width: 374px;
  max-width: 100%;
  @media screen and (max-width: 1425px) {
    flex: 1;
    min-width: 100%;
  }
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
    gap: var(--gap-59xl);
  }
`;
const ContactUs = styled.div`
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  min-width: 118px;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-xl);
    line-height: 27px;
  }
`;
const P = styled.p`
  margin: 0;
`;
const MailprimarilycomLocalidade = styled.div`
  position: relative;
  line-height: 160%;
  text-transform: capitalize;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
    line-height: 26px;
  }
`;
const Div = styled.div`
  border-radius: var(--br-xl);
  border: 1px solid var(--color-dimgray-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-mid) var(--padding-28xl);
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const Contatct = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--font-size-xl);
`;
const ContactUs1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-40xl);
  min-width: 266px;
  @media screen and (max-width: 1425px) {
    flex: 1;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-10xl);
  }
`;
const Text1 = styled.div`
  width: 803px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px var(--padding-7xs) 0px 0px;
  box-sizing: border-box;
  min-width: 803px;
  max-width: 100%;
  gap: var(--gap-xl);
  @media screen and (max-width: 1900px) {
    flex: 1;
    padding-right: 0px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 1425px) {
    flex: 1;
    flex-wrap: wrap;
    padding-right: 0px;
    box-sizing: border-box;
    min-width: 100%;
  }
  @media screen and (max-width: 950px) {
    flex: 1;
    padding-right: 0px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    flex: 1;
    padding-right: 0px;
    box-sizing: border-box;
  }
`;
const ImagesIcon = styled.img`
  width: 299.2px;
  height: 263px;
  position: relative;
  object-fit: contain;
`;
const LatestNews = styled.div`
  align-self: stretch;
  width: 777px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  flex-shrink: 0;
  max-width: 140%;
  @media screen and (max-width: 450px) {
    gap: var(--gap-7xl);
  }
`;
const News = styled.div`
  height: 350px;
  width: 557px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
  min-width: 557px;
  max-width: 100%;
  @media screen and (max-width: 1900px) {
    flex: 1;
  }
  @media screen and (max-width: 1425px) {
    flex: 1;
    min-width: 100%;
  }
  @media screen and (max-width: 950px) {
    flex: 1;
  }
  @media screen and (max-width: 450px) {
    flex: 1;
  }
`;
const Content2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-22xl);
  max-width: 100%;
  z-index: 2;
  @media screen and (max-width: 1900px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 1425px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 950px) {
    flex-wrap: wrap;
    gap: var(--gap-xl);
  }
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const FooterNavigation = styled.div`
  width: 1619.8px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-6xs);
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-6xl);
`;
const CompanyTechSystem1 = styled.div`
  width: 558px;
  position: relative;
  line-height: 160%;
  text-transform: capitalize;
  display: inline-block;
  flex-shrink: 0;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
    line-height: 26px;
  }
`;
const Copyright = styled.div`
  width: 1622.6px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-xl);
`;
const ContentRoot = styled.footer`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-106xl) var(--padding-256xl) var(--padding-13xl)
    var(--padding-270xl);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-35xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--header-2-size);
  color: var(--white);
  font-family: var(--font-jost);
  @media screen and (max-width: 1425px) {
    padding-left: var(--padding-125xl);
    padding-right: var(--padding-118xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 950px) {
    gap: var(--gap-8xl);
    padding: var(--padding-62xl) var(--padding-49xl) var(--padding-2xl)
      var(--padding-53xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;

const Content: NextPage<ContentType> = ({
  className = "",
  background,
  line,
  images,
  logo,
  lineIconRight,
  lineIconLeft,
}) => {
  return (
    <ContentRoot className={className}>
      <BackgroundWrapper>
        <BackgroundIcon alt="" src={background} data-scroll-to="background" />
        <LineIcon
          alt=""
          src={line}
          lineIconRight={lineIconRight}
          lineIconLeft={lineIconLeft}
        />
      </BackgroundWrapper>
      <Logo1>
        <Logo>
          <LogoIcon alt="" src={logo} />
          <CompanyNameContainer>
            <CompanyTechSystem>Company Tech System</CompanyTechSystem>
          </CompanyNameContainer>
        </Logo>
        <SocialLinks>
          <Follow>
            <InstagramIcon loading="lazy" alt="" src="/instagram.svg" />
            <FacebookIcon loading="lazy" alt="" src="/facebook.svg" />
            <TwitterContainer>
              <TwiterIcon loading="lazy" alt="" src="/twiter.svg" />
            </TwitterContainer>
            <LinkedInIcon loading="lazy" alt="" src="/linked-in.svg" />
            <YoutubeContainer>
              <YoutubeIcon loading="lazy" alt="" src="/youtube.svg" />
            </YoutubeContainer>
          </Follow>
        </SocialLinks>
      </Logo1>
      <FooterNavigation>
        <Content2>
          <Text1>
            <NavigationItems>
              <UsefulLink>
                <Empresa>Empresa</Empresa>
                <Link>
                  <Sobre>Sobre</Sobre>
                  <Testeminhos>Testeminhos</Testeminhos>
                  <Oramento>Orçamento</Oramento>
                </Link>
              </UsefulLink>
              <Service1>
                <Servios>Serviços</Servios>
                <Service>
                  <Produtos>Produtos</Produtos>
                  <NossaEquipe>Nossa Equipe</NossaEquipe>
                  <Tecnologia>Tecnologia</Tecnologia>
                </Service>
              </Service1>
            </NavigationItems>
            <ContactUs1>
              <ContactUs>Contact Us</ContactUs>
              <Contatct>
                <Div>
                  <MailprimarilycomLocalidade>
                    <P>+3255 456 789</P>
                    <P>mail@primarily.com</P>
                    <P>Localidade: Europa</P>
                  </MailprimarilycomLocalidade>
                </Div>
              </Contatct>
            </ContactUs1>
          </Text1>
          <News>
            <LatestNews>
              <ImagesIcon loading="lazy" alt="" src={images} />
            </LatestNews>
          </News>
        </Content2>
      </FooterNavigation>
      <Copyright>
        <CompanyTechSystem1>2020 | Company Tech System</CompanyTechSystem1>
      </Copyright>
    </ContentRoot>
  );
};

export default Content;
