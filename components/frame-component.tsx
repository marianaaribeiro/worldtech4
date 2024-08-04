import type { NextPage } from "next";
import { useCallback } from "react";
import styled from "styled-components";

export type FrameComponentType = {
  className?: string;
};

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
const Content2 = styled.div`
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
  padding: 0px 0px 0px var(--padding-361xl);
  box-sizing: border-box;
`;
const Content3 = styled.div`
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
const Content4 = styled.div`
  width: 1423.3px;
  height: 150.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-3xs-3) var(--padding-5xl-9) 0px;
  box-sizing: border-box;
  gap: var(--gap-145xl);
  z-index: 1;
`;
const BackgroundIcon = styled.img`
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
const DashboardWrapper = styled.div`
  height: 42.9px;
  width: 147.4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs-9) 0px 0px;
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
const FrameContainer = styled.div`
  height: 45.1px;
  width: 546.4px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs-2);
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
const Notifications = styled.div`
  height: 45.1px;
  width: 104.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-smi-3);
`;
const FrameGroup = styled.div`
  width: 1101.8px;
  height: 45.1px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-431xl-5);
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
const FrameParent = styled.div`
  height: 148px;
  width: 772px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-8xs);
`;
const GroupDiv = styled.div`
  height: 148px;
  width: 1021px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-43xl);
  z-index: 1;
`;
const Inner = styled.div`
  width: 1022.4px;
  height: 148px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-11xs-4);
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
  padding: var(--padding-37xl) var(--padding-21xl-6) var(--padding-29xl)
    var(--padding-32xl);
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
  padding: 0px 0px 0px var(--padding-29xl-5);
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
const List = styled.div`
  width: 608px;
  height: 188px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const BackgroundGroup = styled.div`
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
  gap: var(--gap-base-8);
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
const DatabasePlaceholderWrapper = styled.div`
  width: 231.5px;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-52xl-5);
  box-sizing: border-box;
`;
const BancoDeDadosParent = styled.div`
  height: 122.8px;
  width: 231.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs-8);
`;
const Child = styled.div`
  width: 252px;
  height: 122.8px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-xl-5) 0px 0px;
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
  padding: var(--padding-36xl-2) var(--padding-71xl) var(--padding-27xl)
    var(--padding-22xl);
  box-sizing: border-box;
  gap: var(--gap-11xl);
  z-index: 1;
`;
const FrameParent1 = styled.div`
  width: 1113.6px;
  height: 308px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-37xl-6);
`;
const Parent1 = styled.div`
  height: 669px;
  width: 1114px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-25xl);
`;
const FrameDiv = styled.div`
  width: 1131.4px;
  height: 669px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-mid-4);
  box-sizing: border-box;
  font-size: var(--font-size-2xl);
`;
const FrameParent2 = styled.div`
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
  padding: var(--padding-36xl-8) var(--padding-13xl-5) var(--padding-42xl-8)
    var(--padding-51xl-7);
  position: relative;
  gap: var(--gap-55xl-1);
  z-index: 1;
`;
const BackgroundParent = styled.div`
  height: 887.4px;
  width: 1424.5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const FrameWrapper = styled.div`
  width: 1512.3px;
  height: 887.4px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-68xl-8) 0px 0px;
  box-sizing: border-box;
  font-size: var(--font-size-6xl-2);
  color: var(--color-gray-200);
`;
const ContentParent = styled.div`
  height: 1139.3px;
  width: 1512.3px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-969xl-4);
  box-sizing: border-box;
  gap: var(--gap-82xl);
`;
const WtsInnerRoot = styled.div`
  width: 1879.4px;
  height: 1487.5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-348xl-1) var(--padding-329xl-2) 0px;
  box-sizing: border-box;
  text-align: left;
  font-size: var(--header-2-size);
  color: var(--white);
  font-family: var(--font-jost);
`;

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  const onButtonContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <WtsInnerRoot className={className}>
      <ContentParent>
        <Content4>
          <Text1>
            <Content2>
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
            </Content2>
          </Text1>
          <HireMe>
            <Content3>
              <Email>
                <Button1 onClick={onButtonContainerClick}>
                  <Contato>Contato</Contato>
                </Button1>
              </Email>
            </Content3>
          </HireMe>
        </Content4>
        <FrameWrapper>
          <BackgroundParent>
            <BackgroundIcon alt="" src="/background6.svg" />
            <Image1>
              <Background />
              <NetcoreIcon alt="" src="/netcore.svg" />
              <MenuIcon alt="" src="/menu.svg" />
              <FrameParent2>
                <FrameGroup>
                  <FrameContainer>
                    <DashboardWrapper>
                      <Dashboard>Dashboard</Dashboard>
                    </DashboardWrapper>
                    <Search>
                      <Background1 />
                      <SearchHere>Search here...</SearchHere>
                      <SearchIcon alt="" src="/search.svg" />
                    </Search>
                  </FrameContainer>
                  <Notifications>
                    <NotifyIcon alt="" src="/notify.svg" />
                    <ImageIcon alt="" src="/image1@2x.png" />
                  </Notifications>
                </FrameGroup>
                <FrameDiv>
                  <Parent1>
                    <Div>
                      <Background2 />
                      <FrontEnd>Front End</FrontEnd>
                      <Inner>
                        <GroupDiv>
                          <Df2647290ef3b75d74f2cA2bc8130Wrapper>
                            <Df2647290ef3b75d74f2cA2bc8130Icon
                              alt=""
                              src="/629df2647290ef3b75d74f2c-a2bc81309136b0c1864f582b1af95307-546c60cadefd5c0f5e78014543c554cb-1-1@2x.png"
                            />
                          </Df2647290ef3b75d74f2cA2bc8130Wrapper>
                          <FrameParent>
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
                          </FrameParent>
                        </GroupDiv>
                      </Inner>
                    </Div>
                    <FrameParent1>
                      <BackgroundGroup>
                        <Background3 />
                        <BackEndWrapper>
                          <BackEnd>Back End</BackEnd>
                        </BackEndWrapper>
                        <List>
                          <NodejsIcon alt="" src="/nodejs.svg" />
                          <PhpIcon alt="" src="/php@2x.png" />
                          <NodejsIcon alt="" src="/java.svg" />
                          <PhpIcon alt="" src="/python@2x.png" />
                          <NodejsIcon alt="" src="/rubyonrails.svg" />
                          <NodejsIcon alt="" src="/go.svg" />
                        </List>
                      </BackgroundGroup>
                      <Div1>
                        <Background4 />
                        <Child>
                          <BancoDeDadosParent>
                            <BancoDeDados>Banco de Dados</BancoDeDados>
                            <DatabasePlaceholderWrapper>
                              <DatabasePlaceholder>
                                <KisspngMysqliPhpDatabaseLiIcon
                                  alt=""
                                  src="/kisspngmysqliphpdatabaselinuxcoding5ac4824a2e87e0-1@2x.png"
                                />
                              </DatabasePlaceholder>
                            </DatabasePlaceholderWrapper>
                          </BancoDeDadosParent>
                        </Child>
                        <AdditionalDatabaseInfo>
                          <Mon1Icon alt="" src="/mon-1@2x.png" />
                        </AdditionalDatabaseInfo>
                      </Div1>
                    </FrameParent1>
                  </Parent1>
                </FrameDiv>
              </FrameParent2>
            </Image1>
          </BackgroundParent>
        </FrameWrapper>
      </ContentParent>
    </WtsInnerRoot>
  );
};

export default FrameComponent;
