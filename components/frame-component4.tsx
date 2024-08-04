import type { NextPage } from "next";
import { useCallback } from "react";
import styled from "styled-components";

export type FrameComponent4Type = {
  className?: string;
};

const BackgroundChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--white);
  width: 1920px;
  height: 991px;
  display: none;
`;
const PatternIcon = styled.img`
  position: absolute;
  top: 192.2px;
  left: 73px;
  width: 1701px;
  height: 573.2px;
  z-index: 3;
`;
const CompanyTechSystem = styled.div`
  position: absolute;
  top: 292px;
  left: 260px;
  font-size: var(--font-size-36xl);
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
  width: 583px;
  z-index: 4;
`;
const ProvideExcellentCustomer = styled.div`
  position: absolute;
  top: 386px;
  left: 260px;
  font-size: var(--font-size-6xl);
  line-height: 160%;
  text-transform: capitalize;
  font-family: var(--font-open-sans);
  color: var(--color-dimgray-200);
  display: inline-block;
  width: 632px;
  height: 87px;
  z-index: 4;
`;
const Contato = styled.div`
  height: 32px;
  width: 71px;
  position: relative;
  line-height: 160%;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
`;
const Button1 = styled.div`
  position: absolute;
  top: 507px;
  left: 260px;
  border-radius: var(--br-8xs);
  background-color: var(--color-darkslategray-100);
  width: 149px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-sm) var(--padding-20xl);
  box-sizing: border-box;
  cursor: pointer;
  z-index: 4;
  color: var(--white);
`;
const HowItWork = styled.div`
  position: absolute;
  top: 521px;
  left: 445px;
  line-height: 160%;
  text-transform: capitalize;
  font-weight: 600;
  z-index: 4;
`;
const Cts = styled.b`
  position: absolute;
  top: 3px;
  left: 63px;
  line-height: 129.7%;
`;
const LogoIcon = styled.img`
  position: relative;
  width: 330px;
  height: 59px;
  object-fit: cover;
`;
const Logo = styled.div`
  position: absolute;
  top: 51px;
  left: 260px;
  width: 330px;
  height: 59px;
  z-index: 1;
  font-size: var(--header-2-size);
`;
const LogoIcon1 = styled.img`
  position: relative;
  width: 330px;
  height: 59px;
  object-fit: cover;
  cursor: pointer;
`;
const Logo1 = styled.div`
  position: absolute;
  top: 51px;
  left: 260px;
  width: 330px;
  height: 59px;
  font-size: var(--header-2-size);
`;
const Background = styled.div`
  position: absolute;
  top: 23px;
  left: 0px;
  width: 1920px;
  height: 991px;
`;
const PatternIcon1 = styled.img`
  position: absolute;
  top: 0px;
  left: 647px;
  width: 1293.3px;
  height: 1293.3px;
  object-fit: contain;
  z-index: 1;
`;
const ImageHere = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  box-shadow: 0px 10px 45px rgba(0, 0, 0, 0.05);
  border-radius: var(--br-8xs);
  background-color: var(--white);
  width: 278px;
  height: 460px;
  display: none;
`;
const Image1015Icon = styled.img`
  position: absolute;
  top: 5px;
  left: 6px;
  width: 251px;
  height: 455px;
  object-fit: cover;
  z-index: 1;
`;
const Image1 = styled.div`
  position: absolute;
  top: 179px;
  left: 0px;
  box-shadow: 0px 10px 45px rgba(0, 0, 0, 0.05);
  border-radius: var(--br-8xs);
  background-color: var(--white);
  width: 278px;
  height: 460px;
`;
const ImageHere1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  box-shadow: 0px 10px 45px rgba(0, 0, 0, 0.05);
  border-radius: var(--br-8xs);
  background-color: var(--white);
  width: 309px;
  height: 540px;
`;
const Image1013Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 332px;
  height: 540px;
  object-fit: cover;
  z-index: 1;
`;
const Image2 = styled.div`
  position: absolute;
  top: 99px;
  left: 239px;
  width: 332px;
  height: 540px;
  z-index: 2;
`;
const ImageHere2 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  box-shadow: 0px 10px 45px rgba(0, 0, 0, 0.05);
  border-radius: var(--br-8xs);
  background-color: var(--white);
  width: 318px;
  height: 460px;
  display: none;
`;
const Image1014Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 318px;
  height: 460px;
  object-fit: cover;
  z-index: 1;
`;
const Image3 = styled.div`
  position: absolute;
  top: 179px;
  left: 1132px;
  box-shadow: 0px 10px 45px rgba(0, 0, 0, 0.05);
  border-radius: var(--br-8xs);
  background-color: var(--white);
  width: 318px;
  height: 460px;
`;
const ImageHere3 = styled.div`
  position: absolute;
  top: 0px;
  left: 25px;
  box-shadow: 0px 10px 45px rgba(0, 0, 0, 0.05);
  border-radius: var(--br-8xs);
  background-color: var(--white);
  width: 345px;
  height: 540px;
`;
const Image1012Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 370px;
  height: 540px;
  object-fit: cover;
  z-index: 1;
`;
const Image4 = styled.div`
  position: absolute;
  top: 99px;
  left: 825px;
  width: 370px;
  height: 540px;
  z-index: 2;
`;
const ImageHere4 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  box-shadow: 0px 10px 45px rgba(0, 0, 0, 0.07);
  border-radius: var(--br-8xs);
  background-color: var(--white);
  width: 334px;
  height: 639px;
  display: none;
`;
const Image1009Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 334px;
  height: 639px;
  object-fit: cover;
  z-index: 1;
`;
const Image5 = styled.div`
  position: absolute;
  top: 0px;
  left: 545px;
  box-shadow: 0px 10px 45px rgba(0, 0, 0, 0.07);
  border-radius: var(--br-8xs);
  background-color: var(--white);
  width: 334px;
  height: 639px;
  z-index: 3;
`;
const BannerImage = styled.div`
  position: absolute;
  top: 906px;
  left: 434px;
  width: 1450px;
  height: 639px;
  z-index: 3;
`;
const MainFooterRoot = styled.div`
  position: absolute;
  top: 103px;
  left: 0px;
  width: 1940.3px;
  height: 1545px;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-darkslategray-100);
  font-family: var(--font-jost);
`;

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  const onButtonContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLogoImageClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='bannerContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <MainFooterRoot className={className}>
      <Background>
        <BackgroundChild />
        <PatternIcon alt="" src="/pattern6.svg" />
        <CompanyTechSystem>company Tech System</CompanyTechSystem>
        <ProvideExcellentCustomer>
          Provide excellent customer service. Answer more tickets all-in-one
          Primarily software.
        </ProvideExcellentCustomer>
        <Button1 onClick={onButtonContainerClick}>
          <Contato>Contato</Contato>
        </Button1>
        <HowItWork>How It Work</HowItWork>
        <Logo>
          <Cts>CTS</Cts>
          <LogoIcon alt="" src="/image-1022@2x.png" />
        </Logo>
        <Logo1>
          <Cts>CTS</Cts>
          <LogoIcon1
            alt=""
            src="/image-1022@2x.png"
            onClick={onLogoImageClick}
          />
        </Logo1>
      </Background>
      <PatternIcon1 alt="" src="/pattern7@2x.png" />
      <BannerImage>
        <Image1>
          <ImageHere />
          <Image1015Icon alt="" src="/image-1015@2x.png" />
        </Image1>
        <Image2>
          <ImageHere1 />
          <Image1013Icon alt="" src="/image-1013@2x.png" />
        </Image2>
        <Image3>
          <ImageHere2 />
          <Image1014Icon alt="" src="/image-1014@2x.png" />
        </Image3>
        <Image4>
          <ImageHere3 />
          <Image1012Icon alt="" src="/image-1012@2x.png" />
        </Image4>
        <Image5>
          <ImageHere4 />
          <Image1009Icon alt="" src="/image-1009@2x.png" />
        </Image5>
      </BannerImage>
    </MainFooterRoot>
  );
};

export default FrameComponent4;
