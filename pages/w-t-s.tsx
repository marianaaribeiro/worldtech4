import type { NextPage } from "next";
import { useCallback } from "react";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent5 from "../components/frame-component5";
import styled from "styled-components";
import FrameComponent6 from "../components/frame-component6";
import LeadContainer from "../components/lead-container";
import FrameComponent7 from "../components/frame-component7";
import FrameComponent from "../components/frame-component";
import FrameComponent14 from "../components/frame-component14";
import Testimonials from "../components/testimonials";
import Content2 from "../components/content2";
import FormContainer from "../components/form-container";
import Content1 from "../components/content1";

const Banner = styled.div`
  height: 1648px;
  width: 2200px;
  position: relative;
`;
const BannerWrapper = styled.div`
  width: 2200px;
  height: 1743px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 95px;
  box-sizing: border-box;
`;
const DecoLine = styled.div`
  height: 5px;
  width: 69px;
  position: relative;
  background: linear-gradient(225deg, #66ddf7, #57007b);
`;
const DecoLineWrapper = styled.div`
  width: 69px;
  height: 5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-183xl-5);
  box-sizing: border-box;
`;
const LeadingCompaniesTrust = styled.b`
  width: 474px;
  height: 108px;
  position: relative;
  line-height: 55px;
  display: inline-block;
  flex-shrink: 0;
`;
const HeadingH2Left1 = styled.div`
  height: 133px;
  width: 478px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;
const HeadingH2LeftWrapper = styled.div`
  width: 1293px;
  height: 273px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 815px 140px 0px;
  box-sizing: border-box;
`;
const FormFieldsChild = styled.div`
  width: 2200px;
  position: relative;
  background-color: var(--color-darkturquoise-200);
  height: 1194px;
  display: none;
`;
const BackgroundIcon = styled.img`
  height: 909.1px;
  width: 1694px;
  position: relative;
  z-index: 1;
`;
const FormFields = styled.div`
  width: 100%;
  height: 1194px;
  margin: 0 !important;
  position: absolute;
  top: 7361px;
  right: 0px;
  left: 0px;
  background-color: var(--color-darkturquoise-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 102px 227px 182.9px 279px;
  box-sizing: border-box;
`;
const Bg = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--white);
  width: 885.3px;
  height: 688px;
`;
const Bg1 = styled.div`
  width: 885.3px;
  position: relative;
  height: 688px;
  display: none;
  z-index: 6;
`;
const SaibaMaisSobre = styled.div`
  width: 693px;
  height: 53px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
`;
const BoostEnrolmentAndManage = styled.p`
  margin: 0;
`;
const BoostEnrolmentAndContainer = styled.div`
  width: 447px;
  height: 64px;
  position: relative;
  font-size: var(--font-size-xl);
  line-height: 160%;
  text-transform: capitalize;
  font-family: var(--font-open-sans);
  display: inline-block;
`;
const Content4 = styled.div`
  width: 693px;
  height: 126px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
`;
const Text1 = styled.div`
  height: 126px;
  width: 693px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
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
  height: 76px;
  width: 177px;
  border-radius: var(--br-8xs);
  background-color: var(--color-darkturquoise-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xl) var(--padding-34xl);
  box-sizing: border-box;
  cursor: pointer;
`;
const Email = styled.div`
  width: 557px;
  height: ;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 0px 0px 380px;
  box-sizing: border-box;
`;
const Content5 = styled.div`
  width: 557px;
  height: ;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const HireMe = styled.div`
  height: 76px;
  width: 557px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--font-size-xl);
  color: var(--color-darkslategray-100);
`;
const Content6 = styled.div`
  width: 1423.3px;
  height: 150.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 9.3px 24.9px 0px;
  box-sizing: border-box;
  gap: 164px;
  z-index: 1;
`;
const BackgroundIcon1 = styled.img`
  height: 950.4px;
  width: 1706px;
  position: absolute;
  margin: 0 !important;
  top: -401.6px;
  right: -227.9px;
`;
const Background = styled.div`
  width: 1424.5px;
  position: relative;
  box-shadow: 40px 48px 105px #ebebeb;
  backdrop-filter: blur(62px);
  border-radius: var(--br-11xl);
  background-color: var(--color-gray-300);
  border: 1px solid var(--color-lightgray);
  box-sizing: border-box;
  height: 887.4px;
  display: none;
  z-index: 0;
`;
const NetcoreIcon = styled.img`
  height: 94px;
  width: 166px;
  position: absolute;
  margin: 0 !important;
  right: 450.1px;
  bottom: 173px;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 2;
`;
const MenuIcon = styled.img`
  height: 769.8px;
  width: 115.8px;
  position: relative;
  z-index: 1;
`;
const Dashboard = styled.div`
  width: 147.4px;
  height: 37px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const DashboardContainer = styled.div`
  height: 42.9px;
  width: 147.4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5.9px 0px 0px;
  box-sizing: border-box;
`;
const Background1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-7xl);
  background-color: var(--white);
  border: 0.6px solid var(--white);
  box-sizing: border-box;
  width: 387.8px;
  height: 45.1px;
  display: none;
`;
const SearchHere = styled.div`
  position: absolute;
  top: 12px;
  left: 56.2px;
  letter-spacing: -0.01em;
  font-weight: 500;
  display: inline-block;
  width: 82.9px;
  height: 19px;
`;
const SearchIcon = styled.img`
  position: absolute;
  height: 35.7%;
  width: 4.15%;
  top: 32.59%;
  right: 88.34%;
  bottom: 31.71%;
  left: 7.5%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Search = styled.div`
  width: 387.8px;
  position: relative;
  border-radius: var(--br-7xl);
  background-color: var(--white);
  border: 0.6px solid var(--white);
  box-sizing: border-box;
  height: 45.1px;
  font-size: var(--font-size-xs-4);
  color: var(--color-lightsteelblue);
  font-family: var(--font-zen-kaku-gothic-antique);
`;
const SearchContainer = styled.div`
  height: 45.1px;
  width: 546.4px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 11.2px;
`;
const NotifyIcon = styled.img`
  width: 46.3px;
  position: relative;
  height: 45.1px;
  z-index: 2;
`;
const ImageIcon = styled.img`
  width: 46.3px;
  position: relative;
  height: 45.1px;
  object-fit: cover;
  z-index: 1;
`;
const NotifyParent = styled.div`
  height: 45.1px;
  width: 104.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-smi-3);
`;
const Content7 = styled.div`
  width: 1101.8px;
  height: 45.1px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 450.5px;
`;
const Background2 = styled.div`
  width: 1114px;
  position: relative;
  box-shadow: 0px 8.4px 58.91px 3.37px rgba(128, 159, 186, 0.2);
  border-radius: 29.46px;
  background-color: var(--white);
  height: 317px;
  display: none;
`;
const FrontEnd = styled.div`
  width: 355.3px;
  height: 31px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const Df2647290ef3b75d74f2cA2bc8130Icon = styled.img`
  width: 187px;
  height: 65px;
  position: relative;
  object-fit: cover;
`;
const Df2647290ef3b75d74f2cA2bc8130Wrapper = styled.div`
  height: 102px;
  width: 187px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-18xl);
  box-sizing: border-box;
`;
const SeparatorIcon = styled.img`
  width: 240px;
  height: 126px;
  position: relative;
  object-fit: cover;
`;
const SeparatorWrapper = styled.div`
  height: 136px;
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-3xs);
  box-sizing: border-box;
`;
const ReactNative11Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 225px;
  height: 148px;
  object-fit: cover;
`;
const Df2647290ef3b75d74f2cA2bc8130Icon1 = styled.img`
  position: absolute;
  top: 22px;
  left: 213px;
  width: 314px;
  height: 106px;
  object-fit: cover;
  z-index: 1;
`;
const ReactNative11Parent = styled.div`
  height: 148px;
  width: 527px;
  position: relative;
`;
const FrameGroup = styled.div`
  height: 148px;
  width: 772px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-8xs);
`;
const FrameParent = styled.div`
  height: 148px;
  width: 1021px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 62px;
  z-index: 1;
`;
const FrontEndLogos = styled.div`
  width: 1022.4px;
  height: 148px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 1.4px;
  box-sizing: border-box;
`;
const Div = styled.div`
  width: 1114px;
  height: 317px;
  box-shadow: 0px 8.4px 58.91px 3.37px rgba(128, 159, 186, 0.2);
  border-radius: 29.46px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-37xl) 40.6px var(--padding-29xl) 51px;
  box-sizing: border-box;
  gap: var(--gap-15xl);
  z-index: 1;
`;
const Background3 = styled.div`
  width: 674px;
  position: relative;
  box-shadow: 0px 8.4px 58.91px 3.37px rgba(128, 159, 186, 0.2);
  border-radius: 29.46px;
  background-color: var(--white);
  height: 308px;
  display: none;
`;
const BackEnd = styled.div`
  height: 31px;
  width: 242.7px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 2;
`;
const BackEndWrapper = styled.div`
  width: 291.2px;
  height: 31px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 48.5px;
  box-sizing: border-box;
`;
const NodejsIcon = styled.img`
  height: 94px;
  width: 166px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 2;
`;
const PhpIcon = styled.img`
  height: 94px;
  width: 166px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  z-index: 2;
`;
const BackEndLogos = styled.div`
  width: 608px;
  height: 188px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const InnerContent = styled.div`
  height: 308px;
  width: 674px;
  box-shadow: 0px 8.4px 58.91px 3.37px rgba(128, 159, 186, 0.2);
  border-radius: 29.46px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-36xl-2) var(--padding-11xs) var(--padding-mid);
  box-sizing: border-box;
  gap: 16.8px;
  z-index: 1;
`;
const Background4 = styled.div`
  width: 383px;
  position: relative;
  box-shadow: 0px 8.4px 58.91px 3.37px rgba(128, 159, 186, 0.2);
  border-radius: 29.46px;
  background-color: var(--white);
  height: 308px;
  display: none;
`;
const BancoDeDados = styled.div`
  width: 182.6px;
  height: 31px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const KisspngMysqliPhpDatabaseLiIcon = styled.img`
  height: 80px;
  width: 160px;
  position: relative;
  object-fit: cover;
  display: none;
`;
const DatabasePlaceholder = styled.div`
  height: 80px;
  width: 160px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-image: url("/kisspngmysqliphpdatabaselinuxcoding5ac4824a2e87e0-1@2x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  z-index: 1;
`;
const DatabaseIcon = styled.div`
  width: 231.5px;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 71.5px;
  box-sizing: border-box;
`;
const BancoDeDadosParent = styled.div`
  height: 122.8px;
  width: 231.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 11.8px;
`;
const DatabaseContent = styled.div`
  width: 252px;
  height: 122.8px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 20.5px 0px 0px;
  box-sizing: border-box;
`;
const Mon1Icon = styled.img`
  height: 54px;
  width: 201px;
  position: relative;
  object-fit: cover;
  display: none;
`;
const AdditionalDatabaseInfo = styled.div`
  width: 201px;
  height: 54px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-image: url("/mon-1@2x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  z-index: 1;
`;
const Div1 = styled.div`
  height: 308px;
  width: 383px;
  box-shadow: 0px 8.4px 58.91px 3.37px rgba(128, 159, 186, 0.2);
  border-radius: 29.46px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-36xl-2) 90px 46px 41px;
  box-sizing: border-box;
  gap: var(--gap-11xl);
  z-index: 1;
`;
const InnerContent1 = styled.div`
  width: 1113.6px;
  height: 308px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 56.6px;
`;
const List = styled.div`
  height: 669px;
  width: 1114px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 44px;
`;
const TechStack = styled.div`
  width: 1131.4px;
  height: 669px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 17.4px;
  box-sizing: border-box;
  font-size: var(--font-size-2xl);
`;
const MenuContainer = styled.div`
  height: 769.6px;
  width: 1131.4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-36xl-5);
`;
const Image1 = styled.div`
  height: 887.4px;
  width: 1424.5px;
  box-shadow: 40px 48px 105px #ebebeb;
  backdrop-filter: blur(62px);
  border-radius: var(--br-11xl);
  background-color: var(--color-gray-300);
  border: 1px solid var(--color-lightgray);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 55.8px 32.5px 61.8px 70.7px;
  position: relative;
  gap: 74.1px;
  z-index: 1;
`;
const TechnologyBg = styled.div`
  height: 887.4px;
  width: 1424.5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const TechnologyBgWrapper = styled.div`
  width: 1512.3px;
  height: 887.4px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 87.8px 0px 0px;
  box-sizing: border-box;
  font-size: var(--font-size-6xl-2);
  color: var(--color-gray-200);
`;
const Description = styled.div`
  height: 1139.3px;
  width: 1512.3px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 0px 988.4px;
  box-sizing: border-box;
  gap: var(--gap-82xl);
`;
const DescriptionWrapper = styled.div`
  width: 1879.4px;
  height: 1487.5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 367.1px 348.2px 0px;
  box-sizing: border-box;
  text-align: left;
  font-size: var(--header-2-size);
  color: var(--white);
  font-family: var(--font-jost);
`;
const BackgroundIcon2 = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: contain;
`;
const BackgroundIcon3 = styled.img`
  height: 1077.4px;
  width: 769.2px;
  position: relative;
  object-fit: contain;
  z-index: 2;
`;
const BackgroundParent = styled.div`
  width: 769.2px;
  height: 1077.4px;
  margin: 0 !important;
  position: absolute;
  top: 9618px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const WtsRoot = styled.div`
  width: 100%;
  height: 16725px;
  position: relative;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  text-align: center;
  font-size: var(--headings-headings-h2-size);
  color: var(--gray-gray-900);
  font-family: var(--paragraphs-para-1);
`;

const WTS: NextPage = () => {
  const onButtonContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <WtsRoot>
      <BannerWrapper>
        <Banner data-scroll-to="bannerContainer">
          <FrameComponent3 />
          <FrameComponent5 />
        </Banner>
      </BannerWrapper>
      <HeadingH2LeftWrapper>
        <HeadingH2Left1>
          <DecoLineWrapper>
            <DecoLine />
          </DecoLineWrapper>
          <LeadingCompaniesTrust>
            Serviço de Desenvolvimento
          </LeadingCompaniesTrust>
        </HeadingH2Left1>
      </HeadingH2LeftWrapper>
      <FrameComponent6 />
      <LeadContainer />
      <FrameComponent7 />
      <FormFields>
        <FormFieldsChild />
        <BackgroundIcon alt="" src="/background4.svg" />
      </FormFields>
      <Bg1>
        <Bg />
      </Bg1>
      <FrameComponent />
      <DescriptionWrapper>
        <Description>
          <Content6>
            <Text1>
              <Content4>
                <SaibaMaisSobre>
                  Saiba mais sobre nossas tecnologias
                </SaibaMaisSobre>
                <BoostEnrolmentAndContainer>
                  <BoostEnrolmentAndManage>{`Boost enrolment and
manage student lifecycle `}</BoostEnrolmentAndManage>
                  <BoostEnrolmentAndManage>
                    with our 360° CRM
                  </BoostEnrolmentAndManage>
                </BoostEnrolmentAndContainer>
              </Content4>
            </Text1>
            <HireMe>
              <Content5>
                <Email>
                  <Button1 onClick={onButtonContainerClick}>
                    <Contato>Contato</Contato>
                  </Button1>
                </Email>
              </Content5>
            </HireMe>
          </Content6>
          <TechnologyBgWrapper>
            <TechnologyBg>
              <BackgroundIcon1 alt="" src="/background6.svg" />
              <Image1>
                <Background />
                <NetcoreIcon alt="" src="/netcore.svg" />
                <MenuIcon alt="" src="/menu.svg" />
                <MenuContainer>
                  <Content7>
                    <SearchContainer>
                      <DashboardContainer>
                        <Dashboard>Dashboard</Dashboard>
                      </DashboardContainer>
                      <Search>
                        <Background1 />
                        <SearchHere>Search here...</SearchHere>
                        <SearchIcon alt="" src="/search.svg" />
                      </Search>
                    </SearchContainer>
                    <NotifyParent>
                      <NotifyIcon alt="" src="/notify.svg" />
                      <ImageIcon alt="" src="/image1@2x.png" />
                    </NotifyParent>
                  </Content7>
                  <TechStack>
                    <List>
                      <Div>
                        <Background2 />
                        <FrontEnd>Front End</FrontEnd>
                        <FrontEndLogos>
                          <FrameParent>
                            <Df2647290ef3b75d74f2cA2bc8130Wrapper>
                              <Df2647290ef3b75d74f2cA2bc8130Icon
                                alt=""
                                src="/629df2647290ef3b75d74f2c-a2bc81309136b0c1864f582b1af95307-546c60cadefd5c0f5e78014543c554cb-1-1@2x.png"
                              />
                            </Df2647290ef3b75d74f2cA2bc8130Wrapper>
                            <FrameGroup>
                              <SeparatorWrapper>
                                <SeparatorIcon alt="" src="/separator@2x.png" />
                              </SeparatorWrapper>
                              <ReactNative11Parent>
                                <ReactNative11Icon
                                  alt=""
                                  src="/reactnative1-1@2x.png"
                                />
                                <Df2647290ef3b75d74f2cA2bc8130Icon1
                                  alt=""
                                  src="/629df2647290ef3b75d74f2c-a2bc81309136b0c1864f582b1af95307-546c60cadefd5c0f5e78014543c554cb-1-2@2x.png"
                                />
                              </ReactNative11Parent>
                            </FrameGroup>
                          </FrameParent>
                        </FrontEndLogos>
                      </Div>
                      <InnerContent1>
                        <InnerContent>
                          <Background3 />
                          <BackEndWrapper>
                            <BackEnd>Back End</BackEnd>
                          </BackEndWrapper>
                          <BackEndLogos>
                            <NodejsIcon alt="" src="/nodejs.svg" />
                            <PhpIcon alt="" src="/php@2x.png" />
                            <NodejsIcon alt="" src="/java.svg" />
                            <PhpIcon alt="" src="/python@2x.png" />
                            <NodejsIcon alt="" src="/rubyonrails.svg" />
                            <NodejsIcon alt="" src="/go.svg" />
                          </BackEndLogos>
                        </InnerContent>
                        <Div1>
                          <Background4 />
                          <DatabaseContent>
                            <BancoDeDadosParent>
                              <BancoDeDados>Banco de Dados</BancoDeDados>
                              <DatabaseIcon>
                                <DatabasePlaceholder>
                                  <KisspngMysqliPhpDatabaseLiIcon
                                    alt=""
                                    src="/kisspngmysqliphpdatabaselinuxcoding5ac4824a2e87e0-1@2x.png"
                                  />
                                </DatabasePlaceholder>
                              </DatabaseIcon>
                            </BancoDeDadosParent>
                          </DatabaseContent>
                          <AdditionalDatabaseInfo>
                            <Mon1Icon alt="" src="/mon-1@2x.png" />
                          </AdditionalDatabaseInfo>
                        </Div1>
                      </InnerContent1>
                    </List>
                  </TechStack>
                </MenuContainer>
              </Image1>
            </TechnologyBg>
          </TechnologyBgWrapper>
        </Description>
      </DescriptionWrapper>
      <FrameComponent14 />
      <Testimonials />
      <Content2 />
      <FormContainer />
      <BackgroundParent>
        <BackgroundIcon2 alt="" src="/background8@2x.png" />
        <BackgroundIcon3 alt="" src="/background8@2x.png" />
      </BackgroundParent>
      <Content1 />
    </WtsRoot>
  );
};

export default WTS;
