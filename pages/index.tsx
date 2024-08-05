import type { NextPage } from "next";
import { useCallback } from "react";
import { Button } from "@mui/material";
import styled from "styled-components";
import FrameComponent1 from "../components/frame-component1";
import Content from "../components/content";

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
  position: relative;
  line-height: 160%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  min-width: 53px;
  z-index: 2;
`;
const HomeLink = styled.div`
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
const HomeLink1 = styled.div`
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
const ImageIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
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
const ProductsDropdownContent = styled.div`
  height: 1396.2px;
  width: 2127px;
  position: absolute;
  margin: 0 !important;
  bottom: -1259.2px;
  left: -1504px;
`;
const Tecnologias = styled.div`
  position: relative;
  line-height: 160%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  min-width: 103px;
  z-index: 2;
`;
const ProductsDropdownContentParent = styled.div`
  position: absolute;
  top: 0px;
  left: 127px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
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
const ProductsLink = styled.div`
  align-self: stretch;
  height: 32px;
  position: relative;
`;
const ProductsLinkWrapper = styled.div`
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
const HomeLinkParent = styled.nav`
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
const FrameParent = styled.div`
  width: 1799px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 266px;
  max-width: 100%;
  @media screen and (max-width: 1425px) {
    gap: 133px;
  }
  @media screen and (max-width: 950px) {
    gap: var(--gap-47xl);
  }
  @media screen and (max-width: 450px) {
    gap: 33px;
  }
`;
const RootInner = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-6xl) 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const RootRoot = styled.div`
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
  gap: 1842px;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 1425px) {
    gap: 921px;
  }
  @media screen and (max-width: 950px) {
    gap: 460px;
  }
  @media screen and (max-width: 450px) {
    gap: 230px;
  }
`;

const Root: NextPage = () => {
  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='background']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <RootRoot>
      <Background>
        <BackgroundChild />
      </Background>
      <RootInner>
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
            <HomeLinkParent>
              <HomeLink>
                <Home>Home</Home>
              </HomeLink>
              <HomeLink1>
                <QuemSomos>Quem Somos</QuemSomos>
              </HomeLink1>
              <ProductsLinkWrapper>
                <ProductsLink>
                  <Produtos>produtos</Produtos>
                  <ProductsDropdownContentParent>
                    <ProductsDropdownContent>
                      <ImageIcon alt="" src="/image3@2x.png" />
                      <Image1019Icon
                        loading="lazy"
                        alt=""
                        src="/image-10191@2x.png"
                      />
                    </ProductsDropdownContent>
                    <Tecnologias>tecnologias</Tecnologias>
                  </ProductsDropdownContentParent>
                  <Clientes>Clientes</Clientes>
                </ProductsLink>
              </ProductsLinkWrapper>
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
            </HomeLinkParent>
          </LogoParent>
          <FrameComponent1 propWidth="756px" />
        </FrameParent>
      </RootInner>
      <Content
        background="/background.svg"
        line="/line.svg"
        images="/images11@2x.png"
        logo="/logo-111@2x.png"
        lineIconRight="unset"
        lineIconLeft="297.9px"
      />
    </RootRoot>
  );
};

export default Root;