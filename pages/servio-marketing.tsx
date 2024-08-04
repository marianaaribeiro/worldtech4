import type { NextPage } from "next";
import { useCallback } from "react";
import { Button } from "@mui/material";
import styled from "styled-components";
import { useRouter } from "next/router";
import Content from "../components/content";

const ServioMarketingChild = styled.div`
  width: 877px;
  height: 213px;
  position: relative;
  background-color: var(--white);
  display: none;
  max-width: 100%;
`;
const BackgroundChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--white);
  width: 100%;
  height: 100%;
  display: none;
`;
const Background = styled.div`
  width: 1920px;
  height: 991px;
  position: relative;
  display: none;
  max-width: 100%;
`;
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
const LogoContainer = styled.div`
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
  cursor: pointer;
  z-index: 2;
`;
const Home = styled.div`
  position: relative;
  line-height: 160%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  min-width: 53px;
  z-index: 2;
`;
const NavItems = styled.div`
  width: 72px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) var(--padding-mid) 0px 0px;
  box-sizing: border-box;
`;
const QuemSomos = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 160%;
  text-transform: capitalize;
  font-weight: 500;
  white-space: nowrap;
  z-index: 2;
`;
const NavItems1 = styled.div`
  width: 130px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) 0px 0px;
  box-sizing: border-box;
`;
const Produtos = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  line-height: 160%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  width: 78px;
  min-width: 78px;
  z-index: 2;
`;
const Tecnologias = styled.div`
  position: absolute;
  top: 0px;
  left: 127px;
  line-height: 160%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  width: 103px;
  min-width: 103px;
  z-index: 2;
`;
const Clientes = styled.div`
  position: absolute;
  top: 0px;
  left: 280px;
  line-height: 160%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  width: 71px;
  min-width: 71px;
  z-index: 2;
`;
const ProductItems = styled.nav`
  margin: 0;
  align-self: stretch;
  height: 32px;
  position: relative;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-darkslategray-100);
  font-family: var(--font-jost);
`;
const ProductItemsWrapper = styled.nav`
  margin: 0;
  width: 355px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) var(--padding-8xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const Button1 = styled(Button)`
  height: 56px;
  width: 147px;
  cursor: pointer;
  z-index: 2;
`;
const Navigation1 = styled.nav`
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-26xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-darkslategray-100);
  font-family: var(--font-jost);
  @media screen and (max-width: 1425px) {
    display: none;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-3xl);
  }
`;
const LogoParent = styled.header`
  flex: 1;
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
const InnerWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-lg);
  box-sizing: border-box;
  max-width: 100%;
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
  @media screen and (max-width: 950px) {
    font-size: var(--font-size-25xl);
    line-height: 59px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-14xl);
    line-height: 44px;
  }
`;
const AoContratarO = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-6xl);
  line-height: 160%;
  text-transform: capitalize;
  font-family: var(--font-open-sans);
  color: var(--color-dimgray-200);
  z-index: 2;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-xl);
    line-height: 32px;
  }
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
const ServiceLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm) 0px 0px;
`;
const MarketingCta = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-17xl);
  max-width: 100%;
  font-size: var(--font-size-xl);
  @media screen and (max-width: 950px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-lg);
  }
`;
const MarketingContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-36xl);
  max-width: 100%;
  @media screen and (max-width: 950px) {
    gap: var(--gap-8xl);
  }
`;
const MarketingContentWrapper = styled.div`
  width: 792px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 80px 724px;
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 1425px) {
    padding-bottom: 471px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 950px) {
    padding-left: var(--padding-21xl);
    padding-right: var(--padding-21xl);
    padding-bottom: 306px;
    box-sizing: border-box;
  }
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
  flex: 1;
  position: relative;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  display: inline-block;
  mix-blend-mode: normal;
  max-width: 100%;
  z-index: 2;
  @media screen and (max-width: 950px) {
    font-size: var(--font-size-7xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const Image1016Icon = styled.img`
  position: absolute;
  top: 1334px;
  left: 131px;
  width: 1855px;
  height: 663px;
  object-fit: cover;
`;
const ImageIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 2127px;
  height: 1396.2px;
  object-fit: cover;
  z-index: 1;
`;
const Image1019Icon = styled.img`
  position: absolute;
  top: 352px;
  left: 829px;
  border-radius: var(--br-xl);
  width: 808.6px;
  height: 425.6px;
  object-fit: contain;
  z-index: 2;
`;
const Image1016Parent = styled.div`
  height: 1997px;
  width: 2127px;
  position: absolute;
  margin: 0 !important;
  top: -1717px;
  right: -1234px;
`;
const CriamosComOSeuLogoTodoOParent = styled.div`
  width: 786px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-13xl);
  color: var(--color-gray-100);
  font-family: var(--font-league-spartan);
`;
const ContentWrapper = styled.div`
  width: 1817px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-247xl);
  max-width: 100%;
  @media screen and (max-width: 1425px) {
    gap: var(--gap-114xl);
  }
  @media screen and (max-width: 950px) {
    gap: var(--gap-47xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-14xl);
  }
`;
const MainContainer = styled.section`
  width: 2177px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl) 467px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-36xl);
  color: var(--color-darkslategray-100);
  font-family: var(--font-jost);
  @media screen and (max-width: 1425px) {
    padding-bottom: 198px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 950px) {
    padding-bottom: 129px;
    box-sizing: border-box;
  }
`;
const ServioMarketingItem = styled.div`
  width: 673px;
  height: 1px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  max-width: 100%;
`;
const Image1020Icon = styled.img`
  position: absolute;
  height: 100%;
  top: 0px;
  bottom: 0px;
  left: 65px;
  max-height: 100%;
  width: 784px;
  object-fit: cover;
`;
const TopFooterChild = styled.img`
  position: absolute;
  top: 218px;
  left: 0px;
  width: 107px;
  height: 1.3px;
  object-fit: contain;
  z-index: 3;
`;
const TopFooter = styled.div`
  height: 479px;
  width: 849px;
  position: relative;
  max-width: 100%;
`;
const Image1018Icon = styled.img`
  position: absolute;
  top: 555px;
  left: 1058px;
  width: 860px;
  height: 528px;
  object-fit: cover;
`;
const Image1019Icon1 = styled.img`
  position: absolute;
  top: 1289px;
  left: 43px;
  width: 939px;
  height: 422px;
  object-fit: cover;
`;
const LinksImagesChild = styled.img`
  position: absolute;
  top: 169px;
  left: 1011.5px;
  width: 0px;
  height: 1006.5px;
  z-index: 1;
`;
const Image1021Icon = styled.img`
  position: absolute;
  top: 2432px;
  left: 161px;
  width: 572px;
  height: 510px;
  object-fit: cover;
`;
const Image1028Icon = styled.img`
  position: absolute;
  top: 3199px;
  left: 1166px;
  width: 683px;
  height: 184px;
  object-fit: cover;
`;
const Image1029Icon = styled.img`
  position: absolute;
  top: 3383px;
  left: 1192px;
  width: 649px;
  height: 222px;
  object-fit: cover;
  z-index: 1;
`;
const LinksImagesItem = styled.div`
  position: absolute;
  top: 4359px;
  left: 83px;
  border-radius: var(--br-285xl-5);
  background-color: var(--color-crimson);
  width: 525px;
  height: 508px;
`;
const LinksImagesInner = styled.div`
  position: absolute;
  top: 5106px;
  left: 1280px;
  border-radius: var(--br-285xl-5);
  background-color: var(--color-crimson);
  width: 525px;
  height: 508px;
`;
const Image1031Icon = styled.img`
  position: absolute;
  top: 4529px;
  left: 351px;
  border-radius: var(--br-3xs);
  width: 556px;
  height: 391px;
  object-fit: cover;
  z-index: 1;
`;
const Image1032Icon = styled.img`
  position: absolute;
  top: 5185px;
  left: 1537px;
  width: 302px;
  height: 466px;
  object-fit: cover;
  z-index: 1;
`;
const Image1033Icon = styled.img`
  position: absolute;
  top: 5309px;
  left: 1386px;
  width: 302px;
  height: 466px;
  object-fit: cover;
  z-index: 2;
`;
const LineIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 1050px;
  width: 2px;
  height: 5615px;
  object-fit: contain;
  z-index: 2;
`;
const LinksImagesChild1 = styled.img`
  position: absolute;
  top: 1551px;
  left: 936px;
  width: 111px;
  height: 28.9px;
  object-fit: contain;
  z-index: 1;
`;
const LinksImagesChild2 = styled.img`
  position: absolute;
  top: 832.8px;
  left: 1056px;
  width: 187px;
  height: 2.3px;
  object-fit: contain;
  z-index: 1;
`;
const Image1017Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: none;
`;
const FrameChild = styled.img`
  position: absolute;
  top: 317.5px;
  left: 860px;
  width: 187px;
  height: 28.9px;
  object-fit: contain;
  z-index: 2;
`;
const Image1017Parent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1140px;
  height: 478px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;
const LinksImagesChild3 = styled.img`
  position: absolute;
  top: 3635px;
  left: 1051px;
  width: 115px;
  height: 0.3px;
  object-fit: contain;
  z-index: 3;
`;
const LinksImagesChild4 = styled.img`
  position: absolute;
  top: 5345px;
  left: 1050px;
  width: 187px;
  height: 2.3px;
  object-fit: contain;
  z-index: 3;
`;
const LinksImagesChild5 = styled.img`
  position: absolute;
  top: 2728px;
  left: 860px;
  width: 187px;
  height: 28.9px;
  object-fit: contain;
`;
const LinksImagesChild6 = styled.img`
  position: absolute;
  top: 4735px;
  left: 959px;
  width: 91px;
  height: 1px;
  object-fit: contain;
  z-index: 3;
`;
const LinksImages = styled.div`
  height: 5775px;
  width: 1918px;
  position: absolute;
  margin: 0 !important;
  bottom: -3268px;
  left: calc(50% - 959px);
`;
const Footer = styled.div`
  align-self: stretch;
  height: 702px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 66px 159px;
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-3xs);
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 1425px) {
    padding-left: var(--padding-60xl);
    padding-right: var(--padding-60xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 950px) {
    padding: 43px var(--padding-20xl);
    box-sizing: border-box;
  }
`;
const AcordoDeServiosContainer = styled.h2`
  margin: 0;
  width: 786px;
  position: relative;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  display: inline-block;
  flex-shrink: 0;
  mix-blend-mode: normal;
  max-width: 100%;
  @media screen and (max-width: 950px) {
    font-size: var(--font-size-7xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const Legal = styled.div`
  width: 1084px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const FooterContainer = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 1157px;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-13xl);
  color: var(--color-gray-100);
  font-family: var(--font-league-spartan);
  @media screen and (max-width: 1425px) {
    gap: 578px;
  }
  @media screen and (max-width: 950px) {
    gap: 289px;
  }
  @media screen and (max-width: 450px) {
    gap: 145px;
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
  gap: 1826px;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 1425px) {
    gap: 913px;
  }
  @media screen and (max-width: 950px) {
    gap: 456px;
  }
  @media screen and (max-width: 450px) {
    gap: 228px;
  }
`;

const ServioMarketing: NextPage = () => {
  const router = useRouter();

  const onLogoContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='background']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <ServioMarketingRoot>
      <ServioMarketingChild />
      <Background>
        <BackgroundChild />
      </Background>
      <MainContainer>
        <ContentWrapper>
          <InnerWrapper>
            <LogoParent>
              <Logo onClick={onLogoContainerClick}>
                <Image1022Icon alt="" src="/image-1022@2x.png" />
                <LogoContainer>
                  <LogoIcon loading="lazy" alt="" src="/logo@2x.png" />
                </LogoContainer>
                <CtsWrapper>
                  <Cts>CTS</Cts>
                </CtsWrapper>
              </Logo>
              <Navigation1>
                <NavItems>
                  <Home>Home</Home>
                </NavItems>
                <NavItems1>
                  <QuemSomos>Quem Somos</QuemSomos>
                </NavItems1>
                <ProductItemsWrapper>
                  <ProductItems>
                    <Produtos>produtos</Produtos>
                    <Tecnologias>tecnologias</Tecnologias>
                    <Clientes>Clientes</Clientes>
                  </ProductItems>
                </ProductItemsWrapper>
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
                    width: 147,
                    height: 56,
                  }}
                  onClick={onButtonClick}
                >
                  Contato
                </Button1>
              </Navigation1>
            </LogoParent>
          </InnerWrapper>
          <MarketingContentWrapper>
            <MarketingContent>
              <CompanyTechSystemParent>
                <CompanyTechSystem>company Tech System</CompanyTechSystem>
                <AoContratarO>
                  Ao contratar o pack de marketing customizado, fornecemos todo
                  o suporte e o desenvolvimento do que a sua empresa precisa!
                </AoContratarO>
              </CompanyTechSystemParent>
              <MarketingCta>
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
                <ServiceLink>
                  <VerServioDe>Ver serviço de marketing</VerServioDe>
                </ServiceLink>
              </MarketingCta>
            </MarketingContent>
          </MarketingContentWrapper>
          <CriamosComOSeuLogoTodoOParent>
            <CriamosComOContainer>
              <CriamosComO>{`Criamos com o seu logo todo o material personalizado `}</CriamosComO>
              <CriamosComO>que sua empresa precisa</CriamosComO>
              <ParaEventosPresentear>{`para eventos, presentear  um grupo e material para realizar o seu marketing `}</ParaEventosPresentear>
            </CriamosComOContainer>
            <Image1016Parent>
              <Image1016Icon loading="lazy" alt="" src="/image-1016@2x.png" />
              <ImageIcon alt="" src="/image@2x.png" />
              <Image1019Icon loading="lazy" alt="" src="/image-1019@2x.png" />
            </Image1016Parent>
          </CriamosComOSeuLogoTodoOParent>
        </ContentWrapper>
      </MainContainer>
      <ServioMarketingItem />
      <FooterContainer>
        <Footer>
          <TopFooter>
            <Image1020Icon loading="lazy" alt="" src="/image-1020@2x.png" />
            <TopFooterChild alt="" src="/line-141.svg" />
          </TopFooter>
          <LinksImages>
            <Image1018Icon loading="lazy" alt="" src="/image-1018@2x.png" />
            <Image1019Icon1 alt="" src="/image-1019-1@2x.png" />
            <LinksImagesChild loading="lazy" alt="" />
            <Image1021Icon loading="lazy" alt="" src="/image-1021@2x.png" />
            <Image1028Icon loading="lazy" alt="" src="/image-1028@2x.png" />
            <Image1029Icon loading="lazy" alt="" src="/image-1029@2x.png" />
            <LinksImagesItem />
            <LinksImagesInner />
            <Image1031Icon loading="lazy" alt="" src="/image-1031@2x.png" />
            <Image1032Icon loading="lazy" alt="" src="/image-1032@2x.png" />
            <Image1033Icon alt="" src="/image-1032@2x.png" />
            <LineIcon alt="" />
            <LinksImagesChild1 loading="lazy" alt="" src="/line-144.svg" />
            <LinksImagesChild2 alt="" src="/line-140.svg" />
            <Image1017Parent>
              <Image1017Icon alt="" src="/image-1017@2x.png" />
              <FrameChild alt="" src="/line-139.svg" />
            </Image1017Parent>
            <LinksImagesChild3 loading="lazy" alt="" src="/line-142.svg" />
            <LinksImagesChild4 loading="lazy" alt="" src="/line-143.svg" />
            <LinksImagesChild5 loading="lazy" alt="" src="/line-145.svg" />
            <LinksImagesChild6 alt="" src="/line-146.svg" />
          </LinksImages>
        </Footer>
        <Legal>
          <AcordoDeServiosContainer>
            <CriamosComO>Acordo de serviços</CriamosComO>
            <CriamosComO>Acordo de não concorrência</CriamosComO>
            <CriamosComO>Terminação do contrato</CriamosComO>
            <CriamosComO>Acordo de Marketing</CriamosComO>
            <CriamosComO>Acordo de Vendas</CriamosComO>
            <CriamosComO>Acordo Mútuo de não divulgação</CriamosComO>
            <CriamosComO>Alteração ao Contrato</CriamosComO>
            <CriamosComO>Carta de intenções</CriamosComO>
            <CriamosComO>Acordo de joint venture</CriamosComO>
            <CriamosComO>
              Formulário de Autorização e liberação de depoimento do cliente
            </CriamosComO>
            <CriamosComO>Liberação geral de responsabilidade</CriamosComO>
            <CriamosComO>Aviso de violação de contrato</CriamosComO>
            <CriamosComO>Extensão do contrato</CriamosComO>
            <CriamosComO>Acordo de não divulgação do fornecedor</CriamosComO>
          </AcordoDeServiosContainer>
        </Legal>
      </FooterContainer>
      <Content
        background="/background.svg"
        line="/line.svg"
        images="/images@2x.png"
        logo="/logo-1@2x.png"
      />
    </ServioMarketingRoot>
  );
};

export default ServioMarketing;
