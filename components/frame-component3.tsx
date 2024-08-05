import type { NextPage } from "next";
import { useCallback } from "react";
import styled from "styled-components";

export type FrameComponent3Type = {
  className?: string;
};

const BackgroundIcon = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  z-index: 2;
`;
const Home = styled.div`
  width: 72px;
  position: relative;
  line-height: 160%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
`;
const HomeWrapper = styled.div`
  height: 44px;
  width: 72px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) 0px 0px;
  box-sizing: border-box;
`;
const QuemSomos = styled.div`
  width: 130px;
  position: relative;
  line-height: 160%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  z-index: 3;
`;
const QuemSomosWrapper = styled.div`
  height: 44px;
  width: 130px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) 0px 0px;
  box-sizing: border-box;
`;
const Produtos = styled.div`
  width: 82px;
  position: relative;
  line-height: 160%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  z-index: 3;
`;
const ProdutosWrapper = styled.div`
  height: 44px;
  width: 82px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) 0px 0px;
  box-sizing: border-box;
`;
const Tecnologias = styled.div`
  width: 108px;
  position: relative;
  line-height: 160%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
`;
const TecnologiasWrapper = styled.div`
  height: 44px;
  width: 108px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) 0px 0px;
  box-sizing: border-box;
`;
const Clientes = styled.div`
  width: 75px;
  position: relative;
  line-height: 160%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
`;
const ClientesWrapper = styled.div`
  height: 44px;
  width: 75px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) 0px 0px;
  box-sizing: border-box;
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
  height: 56px;
  width: 147px;
  border-radius: var(--br-8xs);
  background-color: var(--color-darkslategray-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs) var(--padding-19xl);
  box-sizing: border-box;
  cursor: pointer;
  color: var(--white);
`;
const FrameParent = styled.div`
  height: 56px;
  width: 839px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-26xl);
`;
const HomeContentInner = styled.div`
  width: 993.3px;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-135xl-3) 0px 0px;
  box-sizing: border-box;
`;
const Home1 = styled.div`
  width: 72px;
  position: absolute;
  margin: 0 !important;
  top: 189px;
  left: 367px;
  line-height: 160%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  z-index: 3;
`;
const Tecnologias1 = styled.div`
  width: 108px;
  position: absolute;
  margin: 0 !important;
  top: 189px;
  right: 546px;
  line-height: 160%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  z-index: 3;
`;
const Clientes1 = styled.div`
  width: 69.1px;
  position: absolute;
  margin: 0 !important;
  top: 189px;
  right: 431.9px;
  line-height: 160%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  z-index: 3;
`;
const Contato1 = styled.div`
  position: relative;
  line-height: 160%;
  text-transform: capitalize;
  font-weight: 600;
`;
const Button2 = styled.div`
  border-radius: var(--br-8xs);
  background-color: var(--color-darkslategray-100);
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs) var(--padding-19xl);
  z-index: 5;
  color: var(--white);
`;
const QuemSomos1 = styled.div`
  width: 130px;
  position: absolute;
  margin: 0 !important;
  top: 189px;
  left: 484px;
  line-height: 160%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  z-index: 6;
`;
const Produtos1 = styled.div`
  width: 82px;
  position: absolute;
  margin: 0 !important;
  top: 189px;
  left: 659px;
  line-height: 160%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  z-index: 7;
`;
const Background = styled.div`
  position: absolute;
  top: 162.99px;
  left: 0px;
  box-shadow: 19.7px 24.9px 36.02px rgba(161, 161, 161, 0.25),
    -2.6px 2.6px 0px #fff inset;
  backdrop-filter: blur(21.44px);
  border-radius: 25.73px;
  background: linear-gradient(
    -83.52deg,
    rgba(244, 244, 244, 0.93),
    rgba(244, 244, 244, 0.93) 42.19%,
    rgba(255, 255, 255, 0.93)
  );
  width: 445.5px;
  height: 231.5px;
  transform: rotate(-21.5deg);
  transform-origin: 0 0;
`;
const PatternIcon = styled.img`
  position: absolute;
  top: 122.7px;
  left: 71px;
  width: 377px;
  height: 198.7px;
  object-fit: contain;
  z-index: 3;
`;
const BackgroundIcon1 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 421.2px;
  height: 315.5px;
  object-fit: contain;
  z-index: 1;
`;
const ContactCreated = styled.div`
  position: absolute;
  top: 155.17px;
  left: 6.9px;
  letter-spacing: 0.43px;
  font-weight: 600;
  transform: rotate(-20.9deg);
  transform-origin: 0 0;
  z-index: 2;
`;
const PatternIcon1 = styled.img`
  position: absolute;
  top: 24.8px;
  left: 351.7px;
  width: 18.5px;
  height: 16.1px;
  object-fit: contain;
  z-index: 2;
`;
const PatternIcon2 = styled.img`
  position: absolute;
  top: 77.6px;
  left: 27.2px;
  width: 361.8px;
  height: 161.6px;
  object-fit: contain;
  z-index: 4;
`;
const ContactForm1 = styled.div`
  position: absolute;
  top: 45.4px;
  left: 43.8px;
  width: 421.2px;
  height: 315.5px;
`;
const PatternIcon3 = styled.img`
  position: absolute;
  top: 92.8px;
  left: 60.3px;
  width: 396.3px;
  height: 252.4px;
  object-fit: contain;
  z-index: 5;
`;
const Div = styled.div`
  position: absolute;
  top: -7.26px;
  left: 294.3px;
  letter-spacing: 0.43px;
  font-weight: 600;
  transform: rotate(-20.9deg);
  transform-origin: 0 0;
  z-index: 2;
`;
const PatternIcon4 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 380px;
  height: 212.1px;
  object-fit: contain;
  z-index: 6;
`;
const FormMessage = styled.div`
  position: absolute;
  top: 92.9px;
  left: 60.7px;
  width: 380px;
  height: 212.1px;
  color: var(--color-forestgreen);
`;
const Div1 = styled.div`
  position: absolute;
  top: 30px;
  left: 746px;
  width: 499.3px;
  height: 378.4px;
  z-index: 4;
`;
const Background1 = styled.div`
  position: absolute;
  top: 91.32px;
  left: 0px;
  box-shadow: 19.7px 24.9px 36.02px rgba(161, 161, 161, 0.25),
    -2.6px 2.6px 0px #fff inset;
  backdrop-filter: blur(21.44px);
  border-radius: 25.73px;
  background: linear-gradient(
    -83.52deg,
    rgba(244, 244, 244, 0.93),
    rgba(244, 244, 244, 0.93) 42.19%,
    rgba(255, 255, 255, 0.93)
  );
  width: 249.6px;
  height: 122px;
  transform: rotate(-21.5deg);
  transform-origin: 0 0;
`;
const Div2 = styled.div`
  position: absolute;
  top: 80.68px;
  left: 102.9px;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 600;
  transform: rotate(-20.4deg);
  transform-origin: 0 0;
  z-index: 1;
`;
const Pattern = styled.div`
  position: absolute;
  top: 115.91px;
  left: 117.4px;
  font-size: var(--font-size-sm-7);
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 600;
  transform: rotate(-20.4deg);
  transform-origin: 0 0;
  z-index: 2;
`;
const Pattern1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color-lavender);
  width: 67.7px;
  height: 67.7px;
  z-index: 2;
`;
const Pattern2 = styled.div`
  position: absolute;
  top: 16.3px;
  left: 16.2px;
  box-shadow: 2.6px 6px 5.15px #b9abd7;
  border-radius: 50%;
  background-color: var(--color-mediumpurple);
  border: 0px solid var(--color-mediumslateblue-100);
  box-sizing: border-box;
  width: 35.2px;
  height: 35.2px;
  z-index: 3;
`;
const PatternParent = styled.div`
  position: absolute;
  top: 95.2px;
  left: 38.6px;
  width: 67.7px;
  height: 67.7px;
`;
const Div3 = styled.div`
  position: absolute;
  top: 0px;
  left: 395.6px;
  width: 276.9px;
  height: 204.8px;
  z-index: 4;
  font-size: var(--font-size-11xl);
  color: var(--color-darkslategray-100);
`;
const Background2 = styled.div`
  position: absolute;
  top: 114.69px;
  left: 0px;
  box-shadow: 19.7px 24.9px 36.02px rgba(161, 161, 161, 0.25),
    -2.6px 2.6px 0px #fff inset;
  backdrop-filter: blur(21.44px);
  border-radius: var(--br-15xl-3);
  background: linear-gradient(
    -83.52deg,
    rgba(244, 244, 244, 0.93),
    rgba(244, 244, 244, 0.93) 42.19%,
    rgba(255, 255, 255, 0.93)
  );
  width: 313.5px;
  height: 314.4px;
  transform: rotate(-21.5deg);
  transform-origin: 0 0;
`;
const PatternIcon5 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 292.6px;
  height: 292.6px;
  object-fit: contain;
`;
const TextIcon = styled.img`
  position: absolute;
  top: 107.3px;
  left: 107.5px;
  width: 68.2px;
  height: 69px;
  object-fit: contain;
  z-index: 2;
`;
const GlobalContent = styled.div`
  position: absolute;
  top: 72px;
  left: 61.4px;
  width: 292.6px;
  height: 292.6px;
`;
const GlobalStatistic = styled.div`
  position: absolute;
  top: 129.76px;
  left: 46px;
  letter-spacing: 0.43px;
  font-weight: 600;
  transform: rotate(-20.9deg);
  transform-origin: 0 0;
  z-index: 2;
`;
const Div4 = styled.div`
  position: absolute;
  top: 132.1px;
  left: 403.4px;
  width: 406.8px;
  height: 407.3px;
  z-index: 7;
`;
const Icon = styled.img`
  position: absolute;
  top: 247.3px;
  left: 97.3px;
  width: 406px;
  height: 425.6px;
  object-fit: contain;
  z-index: 8;
`;
const Icon1 = styled.img`
  position: absolute;
  top: 20.5px;
  left: 0px;
  width: 414.1px;
  height: 318.6px;
  object-fit: contain;
  z-index: 9;
`;
const Parent1 = styled.div`
  width: 1245.3px;
  height: 672.9px;
  position: relative;
  font-size: var(--font-size-mid-2);
  color: var(--color-darkslateblue);
`;
const HomeContentRoot = styled.div`
  position: absolute;
  top: 0px;
  left: 760px;
  width: 1440px;
  height: 1028px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-158xl) var(--padding-60xl-7) var(--padding-56xl-1);
  box-sizing: border-box;
  gap: var(--gap-28xl);
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-darkslategray-100);
  font-family: var(--font-jost);
`;

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  const onButtonContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <HomeContentRoot className={className}>
      <BackgroundIcon alt="" src="/background1@2x.png" />
      <HomeContentInner>
        <FrameParent>
          <HomeWrapper>
            <Home>Home</Home>
          </HomeWrapper>
          <QuemSomosWrapper>
            <QuemSomos>Quem Somos</QuemSomos>
          </QuemSomosWrapper>
          <ProdutosWrapper>
            <Produtos>produtos</Produtos>
          </ProdutosWrapper>
          <TecnologiasWrapper>
            <Tecnologias>tecnologias</Tecnologias>
          </TecnologiasWrapper>
          <ClientesWrapper>
            <Clientes>Clientes</Clientes>
          </ClientesWrapper>
          <Button1 onClick={onButtonContainerClick}>
            <Contato>Contato</Contato>
          </Button1>
        </FrameParent>
      </HomeContentInner>
      <Home1>Home</Home1>
      <Tecnologias1>tecnologias</Tecnologias1>
      <Clientes1>Clientes</Clientes1>
      <Button2>
        <Contato1>Contato</Contato1>
      </Button2>
      <QuemSomos1>Quem Somos</QuemSomos1>
      <Produtos1>produtos</Produtos1>
      <Parent1>
        <Div1>
          <Background />
          <PatternIcon alt="" src="/pattern.svg" />
          <ContactForm1>
            <BackgroundIcon1 alt="" src="/background2.svg" />
            <ContactCreated>Contact Created</ContactCreated>
            <PatternIcon1 alt="" src="/pattern1.svg" />
            <PatternIcon2 alt="" src="/pattern2.svg" />
          </ContactForm1>
          <PatternIcon3 alt="" src="/pattern3.svg" />
          <FormMessage>
            <Div>15%</Div>
            <PatternIcon4 alt="" src="/pattern4.svg" />
          </FormMessage>
        </Div1>
        <Div3>
          <Background1 />
          <Div2>$4.658</Div2>
          <Pattern>Earned this month</Pattern>
          <PatternParent>
            <Pattern1 />
            <Pattern2 />
          </PatternParent>
        </Div3>
        <Div4>
          <Background2 />
          <GlobalContent>
            <PatternIcon5 alt="" src="/pattern5@2x.png" />
            <TextIcon alt="" src="/text@2x.png" />
          </GlobalContent>
          <GlobalStatistic>Global Statistic</GlobalStatistic>
        </Div4>
        <Icon alt="" src="/2@2x.png" />
        <Icon1 alt="" src="/1@2x.png" />
      </Parent1>
    </HomeContentRoot>
  );
};

export default FrameComponent3;