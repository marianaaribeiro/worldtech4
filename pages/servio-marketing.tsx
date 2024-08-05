import type { NextPage } from "next";
import { useCallback } from "react";
import { Button } from "@mui/material";
import styled from "styled-components";
import FrameComponent11 from "../components/frame-component11";
import Content3 from "../components/content3";

const Image1022Icon = styled.img`
  align-self: stretch;
  width: 330px;
  position: relative;
  max-height: 100%;
  object-fit: cover;
  min-height: 59px;
  max-width: 100%;
  z-index: 1;
`;
const LogoIcon = styled.img`
  width: 55px;
  height: 55px;
  position: relative;
  object-fit: cover;
`;
const LogoWrapper = styled.div`
  width: 297px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0px 0px;
  box-sizing: border-box;
  margin-left: -234px;
`;
const Cts = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 52px;
  font-weight: 700;
  font-family: inherit;
  display: inline-block;
  min-width: 75px;
  white-space: nowrap;
`;
const CtsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) 0px 0px;
  margin-left: -234px;
`;
const Logo = styled.div`
  width: 330px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  z-index: 2;
`;
const Home = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 160%;
  text-transform: capitalize;
  font-weight: 500;
  cursor: pointer;
  z-index: 2;
`;
const HomeNavItem = styled.div`
  width: 108px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) 0px 0px;
  box-sizing: border-box;
`;
const Button1 = styled(Button)`
  height: 56px;
  flex: 1;
  cursor: pointer;
  z-index: 2;
`;
const Navigation1 = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-26xl);
  font-size: var(--font-size-xl);
  @media screen and (max-width: 750px) {
    display: none;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-3xl);
  }
`;
const LogoParent = styled.header`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 100%;
  gap: var(--gap-xl);
  text-align: left;
  font-size: var(--header-2-size);
  color: var(--color-darkslategray-100);
  font-family: var(--font-jost);
`;
const CompanyTechSystem = styled.h1`
  margin: 0;
  width: 583px;
  position: relative;
  font-size: inherit;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 600;
  font-family: inherit;
  display: inline-block;
  max-width: 100%;
  z-index: 2;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-25xl);
    line-height: 59px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-14xl);
    line-height: 44px;
  }
`;
const AoContratarO = styled.div`
  flex: 1;
  position: relative;
  line-height: 160%;
  text-transform: capitalize;
  display: inline-block;
  max-width: 100%;
  z-index: 2;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-xl);
    line-height: 32px;
  }
`;
const Image1016Icon = styled.img`
  position: absolute;
  top: 1117px;
  left: 0px;
  width: 1341px;
  height: 478px;
  object-fit: cover;
`;
const ImageIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 32px;
  width: 2127px;
  height: 1396.2px;
  object-fit: cover;
  z-index: 1;
`;
const Image1019Icon = styled.img`
  position: absolute;
  top: 426px;
  left: 746px;
  border-radius: var(--br-xl);
  width: 607px;
  height: 332.5px;
  object-fit: contain;
  z-index: 2;
`;
const Image1016Parent = styled.div`
  height: 1595px;
  width: 1399px;
  position: absolute;
  margin: 0 !important;
  right: -680px;
  bottom: -990px;
`;
const HeroDescription = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  max-width: 100%;
  font-size: var(--font-size-6xl);
  color: var(--color-dimgray-200);
  font-family: var(--font-open-sans);
`;
const CompanyTechSystemParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-12xs);
  max-width: 100%;
`;
const Button2 = styled(Button)`
  height: 60px;
  width: 149px;
  z-index: 2;
`;
const VerServioDe = styled.div`
  position: relative;
  line-height: 160%;
  text-transform: capitalize;
  font-weight: 600;
  z-index: 2;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
    line-height: 26px;
  }
`;
const HeroServiceLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm) 0px 0px;
`;
const HeroCta = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-17xl);
  max-width: 100%;
  font-size: var(--font-size-xl);
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-lg);
  }
`;
const HeroContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-36xl);
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: var(--gap-8xl);
  }
`;
const Hero = styled.div`
  width: 776px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-53xl);
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    padding-left: var(--padding-17xl);
    padding-right: var(--padding-17xl);
    box-sizing: border-box;
  }
`;
const FrameParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 259px;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    gap: 129px;
  }
  @media screen and (max-width: 750px) {
    gap: 65px;
  }
  @media screen and (max-width: 450px) {
    gap: 32px;
  }
`;
const ServioMarketingInner = styled.section`
  width: 1423px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-37xl) 911px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-36xl);
  color: var(--color-darkslategray-100);
  font-family: var(--font-jost);
  @media screen and (max-width: 1200px) {
    padding-bottom: 592px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 1050px) {
    padding-bottom: 385px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    padding-left: var(--padding-9xl);
    padding-right: var(--padding-9xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-bottom: 250px;
    box-sizing: border-box;
  }
`;
const ServioMarketingChild = styled.div`
  width: 1920px;
  height: 991px;
  position: relative;
  background-color: var(--white);
  display: none;
  max-width: 100%;
`;
const QuoteShape = styled.div`
  position: absolute;
  height: 100%;
  top: 0px;
  bottom: 0px;
  left: 0px;
  background-color: var(--white);
  width: 877px;
`;
const CriamosComO = styled.p`
  margin: 0;
`;
const ParaEventosPresentear = styled.p`
  margin: 0;
  white-space: pre-wrap;
`;
const CriamosComOContainer = styled.h2`
  margin: 0;
  position: absolute;
  top: 0px;
  left: 147px;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  display: inline-block;
  width: 753px;
  height: 135px;
  mix-blend-mode: normal;
  z-index: 1;
  @media screen and (max-width: 1050px) {
    font-size: 26px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const QuoteShapeParent = styled.div`
  height: 213px;
  flex: 1;
  position: relative;
  max-width: 100%;
`;
const FeaturesInner = styled.div`
  width: 900px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const Features = styled.section`
  width: 1282px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-13xl);
  color: var(--color-gray-100);
  font-family: var(--font-league-spartan);
`;
const ServioMarketingItem = styled.div`
  width: 441px;
  height: 1px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  max-width: 100%;
`;
const FrameSection = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-2xs) 117px;
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    padding-bottom: var(--padding-13xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    padding-bottom: var(--padding-2xl);
    box-sizing: border-box;
  }
`;
const ServioMarketingRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-74xl) 0px 0px;
  box-sizing: border-box;
  gap: 31px;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 750px) {
    gap: var(--gap-mini);
  }
`;

const ServioMarketing: NextPage = () => {
  const onHomeTextClick = useCallback(() => {
    // Please sync "WTS" to the project
  }, []);

  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contactUsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <ServioMarketingRoot>
      <ServioMarketingInner>
        <FrameParent>
          <LogoParent>
            <Logo>
              <Image1022Icon alt="" src="/image-1022@2x.png" />
              <LogoWrapper>
                <LogoIcon loading="lazy" alt="" src="/logo@2x.png" />
              </LogoWrapper>
              <CtsWrapper>
                <Cts>CTS</Cts>
              </CtsWrapper>
            </Logo>
            <Navigation1>
              <HomeNavItem>
                <Home onClick={onHomeTextClick}>Home</Home>
              </HomeNavItem>
              <Button1
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "20",
                  background: "#303030",
                  borderRadius: "5px",
                  "&:hover": { background: "#303030" },
                  height: 56,
                }}
                onClick={onButtonClick}
              >
                Contato
              </Button1>
            </Navigation1>
          </LogoParent>
          <Hero>
            <HeroContent>
              <CompanyTechSystemParent>
                <CompanyTechSystem>company Tech System</CompanyTechSystem>
                <HeroDescription>
                  <AoContratarO>
                    Ao contratar o pack de marketing customizado, fornecemos
                    todo o suporte e o desenvolvimento do que a sua empresa
                    precisa!
                  </AoContratarO>
                  <Image1016Parent>
                    <Image1016Icon alt="" src="/image-1016@2x.png" />
                    <ImageIcon alt="" src="/image@2x.png" />
                    <Image1019Icon
                      loading="lazy"
                      alt=""
                      src="/image-1019@2x.png"
                    />
                  </Image1016Parent>
                </HeroDescription>
              </CompanyTechSystemParent>
              <HeroCta>
                <Button2
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "20",
                    background: "#303030",
                    borderRadius: "5px",
                    "&:hover": { background: "#303030" },
                    width: 149,
                    height: 60,
                  }}
                >
                  Contato
                </Button2>
                <HeroServiceLink>
                  <VerServioDe>Ver serviço de marketing</VerServioDe>
                </HeroServiceLink>
              </HeroCta>
            </HeroContent>
          </Hero>
        </FrameParent>
      </ServioMarketingInner>
      <ServioMarketingChild />
      <Features>
        <FeaturesInner>
          <QuoteShapeParent>
            <QuoteShape />
            <CriamosComOContainer>
              <CriamosComO>{`Criamos com o seu logo todo o material personalizado `}</CriamosComO>
              <CriamosComO>que sua empresa precisa</CriamosComO>
              <ParaEventosPresentear>{`para eventos, presentear  um grupo e material para realizar o seu marketing `}</ParaEventosPresentear>
            </CriamosComOContainer>
          </QuoteShapeParent>
        </FeaturesInner>
      </Features>
      <ServioMarketingItem />
      <FrameSection>
        <FrameComponent11 />
      </FrameSection>
      <Content3 />
    </ServioMarketingRoot>
  );
};

export default ServioMarketing;