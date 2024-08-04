import type { NextPage } from "next";
import styled from "styled-components";

export type Content1Type = {
  className?: string;
};

const BackgroundIcon = styled.img`
  width: 2200px;
  position: relative;
  height: 702px;
  display: none;
`;
const LogoIcon = styled.img`
  height: 55px;
  width: 55px;
  position: relative;
  object-fit: cover;
`;
const CompanyTechSystem = styled.b`
  width: 415px;
  height: 52px;
  position: relative;
  line-height: 129.7%;
  display: inline-block;
`;
const Name1 = styled.div`
  height: 53.5px;
  width: 415px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs-5) 0px 0px;
  box-sizing: border-box;
`;
const Logo = styled.div`
  height: ;
  width: 482px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const InstagramIcon = styled.img`
  height: 21.4px;
  width: 22.3px;
  position: relative;
`;
const FacebookIcon = styled.img`
  height: 21.4px;
  width: 23px;
  position: relative;
`;
const TwiterIcon = styled.img`
  width: 21.5px;
  height: 17.2px;
  position: relative;
`;
const Twitter = styled.div`
  height: 19.4px;
  width: 21.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-10xs-2);
  box-sizing: border-box;
`;
const LinkedInIcon = styled.img`
  height: 21.7px;
  width: 21.7px;
  position: relative;
`;
const YoutubeIcon = styled.img`
  width: 26px;
  height: 19px;
  position: relative;
`;
const Youtube = styled.div`
  height: 20.3px;
  width: 26px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-11xs-3);
  box-sizing: border-box;
`;
const Follow = styled.div`
  width: 222.5px;
  height: 21.7px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-8xl);
`;
const Social = styled.div`
  height: 38.3px;
  width: 222.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base-6) 0px 0px;
  box-sizing: border-box;
`;
const Logo1 = styled.div`
  width: 1636px;
  height: ;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-5xs-7) 0px var(--padding-5xs-8);
  box-sizing: border-box;
  gap: var(--gap-897xl);
  z-index: 1;
`;
const LineIcon = styled.img`
  height: 392px;
  width: 1604.2px;
  position: absolute;
  margin: 0 !important;
  right: -0.3px;
  bottom: -25px;
  z-index: 1;
`;
const Empresa = styled.div`
  width: 95px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
`;
const Sobre = styled.div`
  width: 53px;
  height: 29px;
  position: relative;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
`;
const Testeminhos = styled.div`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 14.5px);
  right: -17px;
  text-transform: capitalize;
  font-weight: 500;
`;
const Oramento = styled.div`
  width: 98px;
  height: 29px;
  position: relative;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
`;
const Link = styled.div`
  width: 90px;
  height: ;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: var(--gap-32xl);
  font-size: var(--font-size-xl);
`;
const UsefulLink = styled.div`
  height: 210px;
  width: 95px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-49xl);
`;
const Servios = styled.div`
  width: 94px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
`;
const Produtos = styled.div`
  width: 78px;
  height: 29px;
  position: relative;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
`;
const NossaEquipe = styled.div`
  width: 122px;
  height: 29px;
  position: relative;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
`;
const Tecnologia = styled.div`
  width: 95px;
  height: 29px;
  position: relative;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
`;
const Service = styled.div`
  width: 122px;
  height: 109px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xs);
  font-size: var(--font-size-xl);
`;
const Service1 = styled.div`
  height: 210px;
  width: 122px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-49xl);
`;
const Options = styled.div`
  height: 210px;
  width: 374px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-138xl);
`;
const ContactUs = styled.div`
  width: 118px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
`;
const P = styled.p`
  margin: 0;
`;
const MailprimarilycomLocalidade = styled.div`
  height: 96px;
  width: 170px;
  position: relative;
  line-height: 160%;
  text-transform: capitalize;
  display: inline-block;
`;
const ContactAddress = styled.div`
  height: 134px;
  width: 266px;
  border-radius: var(--br-xl);
  border: 1px solid var(--color-dimgray-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-lgi) var(--padding-29xl);
`;
const Contatct = styled.div`
  width: 266px;
  height: 134px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--font-size-xl);
`;
const ContactUs1 = styled.div`
  height: 226px;
  width: 266px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-40xl);
`;
const Text1 = styled.div`
  height: ;
  width: 803px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-138xl);
`;
const ImagesIcon = styled.img`
  width: 299.2px;
  height: 263px;
  position: relative;
  object-fit: contain;
`;
const LatestNews = styled.div`
  height: 350px;
  width: 777px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  flex-shrink: 0;
`;
const News = styled.div`
  height: ;
  width: 557px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
`;
const Content2 = styled.div`
  height: 350px;
  width: 1605.3px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-22xl);
  z-index: 2;
`;
const Links = styled.div`
  height: 350px;
  width: 1605.3px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const Information = styled.div`
  width: 1612.8px;
  height: 350px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-5xs-5);
  box-sizing: border-box;
  font-size: var(--font-size-6xl);
`;
const CompanyTechSystem1 = styled.div`
  width: 558px;
  position: relative;
  line-height: 160%;
  text-transform: capitalize;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const Copyright = styled.div`
  width: 1090.6px;
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-513xl-6);
  box-sizing: border-box;
  text-align: center;
  font-size: var(--font-size-xl);
`;
const ContentRoot = styled.div`
  width: 2200px;
  height: 702px;
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-106xl) var(--padding-256xl) var(--padding-13xl)
    var(--padding-270xl);
  box-sizing: border-box;
  gap: var(--gap-35xl);
  text-align: left;
  font-size: var(--header-2-size);
  color: var(--white);
  font-family: var(--font-jost);
`;

const Content1: NextPage<Content1Type> = ({ className = "" }) => {
  return (
    <ContentRoot className={className}>
      <BackgroundIcon alt="" src="/background.svg" />
      <Logo1>
        <Logo>
          <LogoIcon alt="" src="/logo-1@2x.png" />
          <Name1>
            <CompanyTechSystem>Company Tech System</CompanyTechSystem>
          </Name1>
        </Logo>
        <Social>
          <Follow>
            <InstagramIcon alt="" src="/instagram.svg" />
            <FacebookIcon alt="" src="/facebook.svg" />
            <Twitter>
              <TwiterIcon alt="" src="/twiter.svg" />
            </Twitter>
            <LinkedInIcon alt="" src="/linked-in.svg" />
            <Youtube>
              <YoutubeIcon alt="" src="/youtube.svg" />
            </Youtube>
          </Follow>
        </Social>
      </Logo1>
      <Information>
        <Links>
          <LineIcon alt="" src="/line.svg" />
          <Content2>
            <Text1>
              <Options>
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
              </Options>
              <ContactUs1>
                <ContactUs>Contact Us</ContactUs>
                <Contatct>
                  <ContactAddress>
                    <MailprimarilycomLocalidade>
                      <P>+3255 456 789</P>
                      <P>mail@primarily.com</P>
                      <P>Localidade: Europa</P>
                    </MailprimarilycomLocalidade>
                  </ContactAddress>
                </Contatct>
              </ContactUs1>
            </Text1>
            <News>
              <LatestNews>
                <ImagesIcon alt="" src="/images2@2x.png" />
              </LatestNews>
            </News>
          </Content2>
        </Links>
      </Information>
      <Copyright>
        <CompanyTechSystem1>2020 | Company Tech System</CompanyTechSystem1>
      </Copyright>
    </ContentRoot>
  );
};

export default Content1;
