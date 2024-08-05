import type { NextPage } from "next";
import styled from "styled-components";

export type Content3Type = {
  className?: string;
};

const BackgroundIcon = styled.img`
  width: 1440px;
  height: 702px;
  position: relative;
  display: none;
  max-width: 100%;
`;
const CompanyTechSystem = styled.h1`
  margin: 0;
  width: 473px;
  position: relative;
  font-size: inherit;
  line-height: 52px;
  font-weight: 700;
  font-family: inherit;
  display: inline-block;
  flex-shrink: 0;
  max-width: 398%;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-13xl);
    line-height: 42px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--h4-size);
    line-height: 31px;
  }
`;
const Logo = styled.div`
  width: 119px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
`;
const InstagramIcon = styled.img`
  height: 21.4px;
  width: 22.3px;
  position: relative;
  min-height: 21px;
  flex-shrink: 0;
`;
const FacebookIcon = styled.img`
  height: 21.4px;
  width: 23px;
  position: relative;
  min-height: 21px;
  flex-shrink: 0;
`;
const TwiterIcon = styled.img`
  height: 17.2px;
  width: 21.5px;
  position: relative;
  flex-shrink: 0;
`;
const LinkedInIcon = styled.img`
  height: 21.7px;
  width: 21.7px;
  position: relative;
  min-height: 22px;
  flex-shrink: 0;
`;
const YoutubeIcon = styled.img`
  height: 19px;
  width: 26px;
  position: relative;
  flex-shrink: 0;
`;
const Follow = styled.div`
  width: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-8xl);
`;
const FooterSocial = styled.div`
  width: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base-1) 0px 0px;
  box-sizing: border-box;
`;
const Logo1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px var(--padding-2xs) 0px var(--padding-3xs);
  gap: var(--gap-xl);
  z-index: 1;
`;
const LineIcon = styled.img`
  height: 392px;
  width: 1050px;
  position: absolute;
  margin: 0 !important;
  right: -0.1px;
  bottom: -25px;
  z-index: 1;
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
const LinksColumn = styled.div`
  width: 334px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-98xl);
  min-width: 334px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    flex: 1;
  }
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
    gap: var(--gap-39xl);
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
const MaliitcontactgmailcomLocal = styled.div`
  position: relative;
  line-height: 160%;
  text-transform: capitalize;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
    line-height: 26px;
  }
`;
const ContactDetails = styled.div`
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
  min-width: 320px;
  @media screen and (max-width: 750px) {
    flex: 1;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-10xl);
  }
`;
const Text1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px var(--padding-13xl) 0px 0px;
  box-sizing: border-box;
  flex-shrink: 0;
  max-width: 100%;
  gap: var(--gap-xl);
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
    min-width: 100%;
  }
`;
const ImagesIcon = styled.img`
  width: 299.2px;
  height: 263px;
  position: absolute;
  margin: 0 !important;
  bottom: 0px;
  left: -92.2px;
  object-fit: cover;
`;
const LatestNews = styled.div`
  height: 350px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const News = styled.div`
  width: 207px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
`;
const Content4 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-22xl);
  max-width: 100%;
  z-index: 2;
  @media screen and (max-width: 750px) {
    gap: var(--gap-xl);
  }
`;
const FooterLinks = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  max-width: 100%;
  font-size: var(--font-size-6xl);
`;
const FooterContent = styled.div`
  width: 1056px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-40xl);
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: var(--gap-10xl);
  }
`;
const CompanyTechSystem1 = styled.div`
  width: 365.3px;
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
  width: 1056px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 0px 0px var(--padding-5xs);
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-xl);
`;
const ContentRoot = styled.footer`
  align-self: stretch;
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-106xl) var(--padding-7xl) var(--padding-13xl)
    var(--padding-xl);
  box-sizing: border-box;
  gap: var(--gap-33xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--header-2-size);
  color: var(--white);
  font-family: var(--font-jost);
  @media screen and (max-width: 750px) {
    gap: var(--gap-7xl);
    padding-top: var(--padding-62xl);
    padding-bottom: var(--padding-2xl);
    box-sizing: border-box;
  }
`;

const Content3: NextPage<Content3Type> = ({ className = "" }) => {
  return (
    <ContentRoot className={className}>
      <BackgroundIcon alt="" src="/background.svg" />
      <FooterContent>
        <Logo1>
          <Logo>
            <CompanyTechSystem>Company Tech System</CompanyTechSystem>
          </Logo>
          <FooterSocial>
            <Follow>
              <InstagramIcon loading="lazy" alt="" src="/instagram.svg" />
              <FacebookIcon loading="lazy" alt="" src="/facebook.svg" />
              <TwiterIcon loading="lazy" alt="" src="/twiter.svg" />
              <LinkedInIcon loading="lazy" alt="" src="/linked-in.svg" />
              <YoutubeIcon loading="lazy" alt="" src="/youtube.svg" />
            </Follow>
          </FooterSocial>
        </Logo1>
        <FooterLinks>
          <LineIcon alt="" src="/line.svg" />
          <Content4>
            <Text1>
              <LinksColumn>
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
              </LinksColumn>
              <ContactUs1 data-scroll-to="contactUsContainer">
                <ContactUs>Contact Us</ContactUs>
                <Contatct>
                  <ContactDetails>
                    <MaliitcontactgmailcomLocal>
                      <P>+351 966 659 669</P>
                      <P>mali.itcontact@gmail.com</P>
                      <P>Localidade: Europa</P>
                    </MaliitcontactgmailcomLocal>
                  </ContactDetails>
                </Contatct>
              </ContactUs1>
            </Text1>
            <News>
              <LatestNews>
                <ImagesIcon loading="lazy" alt="" src="/images@2x.png" />
              </LatestNews>
            </News>
          </Content4>
        </FooterLinks>
      </FooterContent>
      <Copyright>
        <CompanyTechSystem1>2024 | Company Tech System</CompanyTechSystem1>
      </Copyright>
    </ContentRoot>
  );
};

export default Content3;
