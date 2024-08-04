import type { NextPage } from "next";
import { useCallback } from "react";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent4 from "../components/frame-component4";
import styled from "styled-components";
import LeadManagementFeatures from "../components/lead-management-features";
import FrameComponent from "../components/frame-component";
import PointsContent from "../components/points-content";
import { useRouter } from "next/router";
import FrameComponent14 from "../components/frame-component14";
import ContactForm from "../components/contact-form";
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
  text-align: center;
  font-size: var(--headings-headings-h2-size);
  color: var(--gray-gray-900);
  font-family: var(--paragraphs-para-1);
`;
const DiveIntoThe = styled.div`
  width: 201px;
  position: relative;
  text-transform: uppercase;
  font-weight: 600;
  display: inline-block;
`;
const CardsContainEverything = styled.div`
  width: 645px;
  position: relative;
  font-size: var(--header-2-size);
  line-height: 54px;
  font-weight: 600;
  color: var(--dark);
  display: inline-block;
`;
const DetailHeader = styled.div`
  width: 645px;
  height: 86px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const WeDesign = styled.div`
  width: 645px;
  height: 84px;
  position: relative;
  line-height: 28px;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
`;
const CheckIcon = styled.img`
  width: 20px;
  position: relative;
  height: 20px;
  z-index: 3;
`;
const CheckIcon1 = styled.img`
  width: 20px;
  position: relative;
  height: 20px;
`;
const CheckIcon2 = styled.img`
  width: 20px;
  height: 20px;
  position: relative;
`;
const CheckList = styled.div`
  height: 104px;
  width: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xl);
`;
const BestkitCardsAre = styled.div`
  width: 420px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  z-index: 3;
`;
const EverySinglePart = styled.div`
  width: 537px;
  position: relative;
  font-weight: 500;
  display: inline-block;
`;
const OpenAnyCard = styled.div`
  width: 508px;
  position: relative;
  font-weight: 500;
  display: inline-block;
`;
const ListDescription = styled.div`
  height: 106px;
  width: 537px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;
const DetailList = styled.div`
  width: 569px;
  height: 106px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  color: var(--dark);
`;
const DetailDescription = styled.div`
  width: 645px;
  height: 230px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-mini);
  box-sizing: border-box;
  gap: var(--gap-6xl);
  color: var(--body-text);
`;
const BtnBg = styled.div`
  width: 173px;
  position: relative;
  border-radius: var(--br-10xs);
  background-color: var(--primary);
  height: 55px;
  display: none;
`;
const LearnMore = styled.div`
  width: 92px;
  position: relative;
  font-weight: 600;
  display: inline-block;
  z-index: 1;
`;
const VectorIcon = styled.img`
  width: 7.1px;
  height: 12px;
  position: relative;
  z-index: 1;
`;
const VectorWrapper = styled.div`
  height: 16px;
  width: 7.1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) 0px 0px;
  box-sizing: border-box;
`;
const LearnMoreButton = styled.div`
  width: 173px;
  height: 55px;
  border-radius: var(--br-10xs);
  background-color: var(--primary);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-lg) 4.6px var(--padding-mini) 30px;
  box-sizing: border-box;
  gap: 39.3px;
  text-align: center;
  color: var(--white);
`;
const DetailWrapper = styled.div`
  width: 645px;
  height: 421px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xl);
`;
const DetailContent = styled.div`
  height: 446px;
  width: 645px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-6xl);
  box-sizing: border-box;
`;
const LeftSideIcon = styled.img`
  height: 472px;
  width: 784px;
  position: relative;
  object-fit: cover;
`;
const DetailContainer = styled.div`
  height: 472px;
  width: 1778px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 349px;
`;
const DetailContainerWrapper = styled.div`
  width: 1940px;
  height: 617px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 162px 145px 0px;
  box-sizing: border-box;
  color: var(--primary);
`;
const ImagesIcon = styled.img`
  height: 816px;
  width: 936px;
  position: relative;
  object-fit: cover;
`;
const GreatFeatures = styled.div`
  width: 149px;
  position: relative;
  text-transform: uppercase;
  font-weight: 600;
  display: inline-block;
`;
const SpecialFeatures = styled.div`
  width: 645px;
  height: 86px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  font-size: var(--short-title-size);
  color: var(--primary);
`;
const IconBg = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-10xs);
  background-color: var(--primary);
  width: 60px;
  height: 60px;
  display: none;
`;
const Money1Icon = styled.img`
  position: absolute;
  top: 15px;
  left: 15px;
  width: 30px;
  height: 30px;
  overflow: hidden;
`;
const Icon = styled.div`
  width: 60px;
  position: relative;
  border-radius: var(--br-10xs);
  background-color: var(--primary);
  height: 60px;
  z-index: 2;
`;
const TransferYourBalances = styled.div`
  width: 245px;
  position: relative;
  font-weight: 600;
  display: inline-block;
  z-index: 2;
`;
const LoremIpsumDolor = styled.div`
  width: 308px;
  position: relative;
  font-size: var(--short-title-size);
  line-height: 28px;
  font-weight: 500;
  color: var(--body-text);
  display: inline-block;
  height: 84px;
  flex-shrink: 0;
  z-index: 1;
`;
const TransferYourBalancesParent = styled.div`
  width: 308px;
  height: 128px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini);
`;
const CardOne = styled.div`
  height: 218px;
  width: 308px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xl);
`;
const IconBg1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-10xs);
  background-color: var(--secondary);
  width: 60px;
  height: 60px;
  display: none;
`;
const CreditCardIcon = styled.img`
  position: absolute;
  top: 17px;
  left: 15px;
  width: 30px;
  height: 27px;
  overflow: hidden;
`;
const Icon1 = styled.div`
  width: 60px;
  position: relative;
  border-radius: var(--br-10xs);
  background-color: var(--secondary);
  height: 60px;
  z-index: 2;
`;
const RequestAPayment = styled.div`
  width: 204px;
  position: relative;
  font-weight: 600;
  display: inline-block;
  z-index: 2;
`;
const CardRowOne = styled.div`
  width: 646px;
  height: 218px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xl);
`;
const IconBg2 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-10xs);
  background-color: var(--yellow);
  width: 60px;
  height: 60px;
  display: none;
`;
const MoneyGrowthIcon = styled.img`
  position: absolute;
  top: 17px;
  left: 15px;
  width: 30px;
  height: 26px;
  overflow: hidden;
`;
const Icon2 = styled.div`
  width: 60px;
  position: relative;
  border-radius: var(--br-10xs);
  background-color: var(--yellow);
  height: 60px;
  z-index: 2;
`;
const ReceivingPayments = styled.div`
  width: 211px;
  position: relative;
  font-weight: 600;
  display: inline-block;
  z-index: 2;
`;
const IconBg3 = styled.div`
  width: 60px;
  position: relative;
  border-radius: var(--br-10xs);
  background-color: var(--purple);
  height: 60px;
  display: none;
`;
const BuildingIcon = styled.img`
  height: 34px;
  width: 30px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
`;
const Icon3 = styled.div`
  width: 60px;
  height: 60px;
  border-radius: var(--br-10xs);
  background-color: var(--purple);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 13px var(--padding-mini);
  box-sizing: border-box;
`;
const WithdrawToYour = styled.div`
  width: 248px;
  position: relative;
  font-weight: 600;
  display: inline-block;
`;
const LoremIpsumDolor1 = styled.div`
  width: 308px;
  height: 84px;
  position: relative;
  font-size: var(--short-title-size);
  line-height: 28px;
  font-weight: 500;
  color: var(--body-text);
  display: inline-block;
  flex-shrink: 0;
`;
const CardContainer = styled.div`
  width: 646px;
  height: 622px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 50px;
`;
const CardList = styled.div`
  height: 685px;
  width: 646px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 63px 0px 0px;
  box-sizing: border-box;
`;
const FeatureContent = styled.div`
  width: 1876px;
  height: 816px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 294px;
`;
const LineShapeIcon = styled.img`
  height: 1px;
  width: 1320px;
  position: relative;
`;
const LineShapeWrapper = styled.div`
  width: 1321px;
  height: 1px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
`;
const FeatureContainer = styled.div`
  height: 894px;
  width: 1876px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 77px;
`;
const FeatureContainerWrapper = styled.div`
  width: 2049px;
  height: 1247px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 173px 353px 0px;
  box-sizing: border-box;
  font-size: var(--h4-size);
`;
const BackgroundIcon = styled.img`
  height: 1077.4px;
  width: 769.2px;
  position: absolute;
  margin: 0 !important;
  bottom: -231.4px;
  left: -261px;
  object-fit: contain;
`;
const Background = styled.div`
  width: 731px;
  position: relative;
  box-shadow: -33px 60px 72px rgba(155, 155, 155, 0.2);
  border-radius: var(--br-11xl);
  background-color: var(--color-whitesmoke-300);
  height: 736px;
  display: none;
  z-index: 0;
`;
const Lead = styled.div`
  width: 32px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  z-index: 2;
`;
const Qualification = styled.div`
  width: 84px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
`;
const Validation = styled.div`
  width: 66px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
`;
const Supply = styled.div`
  width: 46px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
`;
const LeadImageOptions = styled.div`
  width: 84px;
  height: 131px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mid);
`;
const FrameChild = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 307px;
  height: 136.5px;
  mix-blend-mode: normal;
  z-index: 3;
`;
const ProgressPoint = styled.div`
  position: absolute;
  top: 96px;
  left: 42px;
  border-radius: 50%;
  background-color: var(--color-whitesmoke-100);
  border: 0px solid var(--color-deepskyblue-300);
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  z-index: 5;
`;
const VectorParent = styled.div`
  position: absolute;
  top: 3px;
  left: 0px;
  width: 307px;
  height: 136.5px;
`;
const ThisWeek = styled.div`
  width: 47px;
  position: relative;
  line-height: 133.2%;
  text-transform: lowercase;
  display: inline-block;
  z-index: 2;
`;
const ProgressValue = styled.div`
  width: 30px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  display: inline-block;
  z-index: 2;
`;
const WeekNumber = styled.div`
  width: 112px;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 82px;
  box-sizing: border-box;
  font-size: var(--font-size-mini);
  color: var(--color-darkslategray-100);
`;
const LeadWeek = styled.div`
  position: absolute;
  top: 0px;
  left: 41px;
  width: 112px;
  height: 39px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 3px;
`;
const ProgressLabel = styled.div`
  position: absolute;
  top: 78px;
  left: 35px;
  font-size: var(--font-size-mini);
  line-height: 133.2%;
  text-transform: capitalize;
  color: var(--color-darkslategray-100);
  z-index: 2;
`;
const ProgressDotsChild = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 307px;
  height: 109.7px;
  mix-blend-mode: normal;
  z-index: 4;
`;
const Point = styled.div`
  position: absolute;
  top: 36px;
  left: 126px;
  border-radius: 50%;
  background-color: var(--color-whitesmoke-100);
  border: 0px solid var(--color-deepskyblue-300);
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  z-index: 5;
`;
const Point1 = styled.div`
  position: absolute;
  top: 5px;
  left: 208px;
  border-radius: 50%;
  background-color: var(--color-whitesmoke-100);
  border: 0px solid var(--color-deepskyblue-300);
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  z-index: 5;
`;
const Point2 = styled.div`
  position: absolute;
  top: 25px;
  left: 280px;
  border-radius: 50%;
  background-color: var(--color-whitesmoke-100);
  border: 0px solid var(--color-deepskyblue-300);
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  z-index: 5;
`;
const ProgressDots = styled.div`
  position: absolute;
  top: 3px;
  left: 0px;
  width: 307px;
  height: 109.7px;
`;
const WeeklyLeadDetails = styled.div`
  position: absolute;
  top: 0px;
  left: 1px;
  width: 307px;
  height: 112.7px;
`;
const WeeklyLeadChart = styled.div`
  height: 139.5px;
  width: 308px;
  position: relative;
`;
const WeeklyLeads = styled.div`
  width: 314.2px;
  height: 139.5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 6.2px;
  box-sizing: border-box;
  font-size: 12px;
  color: #9a9a9a;
`;
const LeadImageWrapper = styled.div`
  height: 403.7px;
  width: 314.2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 133.2px;
`;
const Bar = styled.div`
  width: 31px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  z-index: 2;
`;
const Bar1 = styled.div`
  width: 31px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
`;
const PlaceholderItems = styled.div`
  height: 131px;
  width: 31px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mid);
  flex-shrink: 0;
`;
const PlaceholderWrapper = styled.div`
  width: 105.2px;
  height: 131px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 74.2px 0px 0px;
  box-sizing: border-box;
`;
const ChartGridIcon = styled.img`
  width: 253.2px;
  height: 251.1px;
  position: relative;
  flex-shrink: 0;
  z-index: 1;
`;
const PlaceholderContent = styled.div`
  width: 253.2px;
  height: 418.3px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 36.2px;
`;
const PlaceholderContentWrapper = styled.div`
  height: 420.3px;
  width: 253.2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0px 0px;
  box-sizing: border-box;
`;
const LeadImageContent = styled.div`
  height: 420.3px;
  width: 607.2px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 39.8px;
`;
const LeadImageContentWrapper = styled.div`
  width: 624.7px;
  height: 420.3px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 17.5px;
  box-sizing: border-box;
  font-size: var(--font-size-mini);
`;
const ChartTitle = styled.div`
  width: 44px;
  position: absolute;
  margin: 0 !important;
  bottom: 304px;
  left: 91px;
  font-size: 36px;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
  z-index: 2;
`;
const ChartDescription = styled.div`
  width: 29px;
  position: absolute;
  margin: 0 !important;
  right: 320px;
  bottom: 307px;
  font-size: var(--font-size-mini);
  line-height: 133.2%;
  text-transform: capitalize;
  display: inline-block;
  z-index: 2;
`;
const CountBar = styled.div`
  height: calc(100% - 3.6px);
  width: calc(100% - 2.3px);
  position: absolute;
  margin: 0 !important;
  top: 3.57px;
  right: 2.3px;
  bottom: 0.03px;
  left: 0px;
  box-shadow: 0px 14px 28px rgba(205, 205, 205, 0.25),
    -2.6px 2.6px 0px #fff inset;
  backdrop-filter: blur(21.44px);
  border-radius: var(--br-6xl);
  background: linear-gradient(
    -83.52deg,
    rgba(244, 244, 244, 0.93),
    rgba(244, 244, 244, 0.93) 42.19%,
    rgba(255, 255, 255, 0.93)
  );
  transform: rotate(-0.6deg);
  transform-origin: 0 0;
`;
const NumberOfLeads = styled.div`
  width: 158px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  z-index: 1;
`;
const CountContainer = styled.div`
  height: 235.4px;
  width: 367.4px;
  margin: 0 !important;
  position: absolute;
  bottom: -150.1px;
  left: -238px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xl-9) 27.8px 180.5px;
  box-sizing: border-box;
  z-index: 1;
`;
const CountValue = styled.div`
  width: 27.6px;
  position: relative;
  font-size: var(--font-size-mini);
  line-height: 133.2%;
  text-transform: capitalize;
  display: inline-block;
  z-index: 2;
`;
const LeadAnalytics = styled.div`
  width: 27.6px;
  height: 20px;
  margin: 0 !important;
  position: absolute;
  top: 394px;
  left: 303px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const BarElement = styled.div`
  position: absolute;
  top: 5.85px;
  left: 0px;
  box-shadow: 0px 14px 28px rgba(205, 205, 205, 0.25),
    -2.6px 2.6px 0px #fff inset;
  backdrop-filter: blur(21.44px);
  border-radius: var(--br-6xl);
  background: linear-gradient(
    -83.52deg,
    rgba(244, 244, 244, 0.93),
    rgba(244, 244, 244, 0.93) 42.19%,
    rgba(255, 255, 255, 0.93)
  );
  width: 598.3px;
  height: 233.7px;
  transform: rotate(-0.6deg);
  transform-origin: 0 0;
`;
const SaleAnalytics = styled.div`
  position: absolute;
  top: 32.1px;
  left: 27.8px;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 500;
`;
const BarChart = styled.div`
  position: absolute;
  top: 78.3px;
  right: 92.6px;
  border-radius: var(--br-4xl);
  background-color: var(--color-whitesmoke-200);
  width: 376px;
  height: 16px;
  z-index: 2;
`;
const BarChart1 = styled.div`
  position: absolute;
  top: 78.3px;
  left: 132px;
  border-radius: var(--br-4xl);
  background-color: #49dde2;
  width: 325px;
  height: 16px;
  z-index: 3;
`;
const BarChart2 = styled.div`
  position: absolute;
  right: 92.6px;
  bottom: 108.3px;
  border-radius: var(--br-4xl);
  background-color: var(--color-whitesmoke-200);
  width: 376px;
  height: 16px;
`;
const BarChart3 = styled.div`
  position: absolute;
  bottom: 108.3px;
  left: 132px;
  border-radius: var(--br-4xl);
  background-color: #ffb545;
  width: 217px;
  height: 16px;
`;
const BarChart4 = styled.div`
  position: absolute;
  right: 92.6px;
  bottom: 71.3px;
  border-radius: var(--br-4xl);
  background-color: var(--color-whitesmoke-200);
  width: 376px;
  height: 16px;
`;
const BarChart5 = styled.div`
  position: absolute;
  right: 110.6px;
  bottom: 71.3px;
  border-radius: var(--br-4xl);
  background-color: #6b7aff;
  width: 358px;
  height: 16px;
`;
const BarChart6 = styled.div`
  position: absolute;
  right: 92.6px;
  bottom: 34.3px;
  border-radius: var(--br-4xl);
  background-color: var(--color-whitesmoke-200);
  width: 376px;
  height: 16px;
`;
const BarChart7 = styled.div`
  position: absolute;
  bottom: 34.3px;
  left: 132px;
  border-radius: var(--br-4xl);
  background-color: #ff6e88;
  width: 235px;
  height: 16px;
`;
const SalesChart = styled.div`
  width: 600.6px;
  height: 239.6px;
  position: absolute;
  margin: 0 !important;
  top: 67.7px;
  left: 63px;
  z-index: 5;
`;
const Background1 = styled.div`
  height: calc(100% - 5.8px);
  width: calc(100% - 0.7px);
  position: absolute;
  margin: 0 !important;
  top: 5.79px;
  right: 0.7px;
  bottom: 0.01px;
  left: 0px;
  box-shadow: 0px 14px 28px rgba(205, 205, 205, 0.25),
    -2.6px 2.6px 0px #fff inset;
  backdrop-filter: blur(21.44px);
  border-radius: var(--br-3xs);
  background: linear-gradient(
    -83.52deg,
    rgba(244, 244, 244, 0.93),
    rgba(244, 244, 244, 0.93) 42.19%,
    rgba(255, 255, 255, 0.93)
  );
  transform: rotate(-0.6deg);
  transform-origin: 0 0;
`;
const TaskAssignedTo = styled.div`
  width: 183px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  z-index: 1;
`;
const TaskIcons = styled.img`
  height: 34px;
  width: 34px;
  position: relative;
  z-index: 1;
`;
const TaskIcon = styled.img`
  width: 32px;
  height: 32px;
  position: relative;
  z-index: 1;
`;
const FirstIcon = styled.div`
  height: 33px;
  width: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
`;
const SecondIconChild = styled.img`
  width: 35px;
  height: 29px;
  position: relative;
  z-index: 1;
`;
const SecondIcon = styled.div`
  height: 30px;
  width: 35px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
`;
const TaskIcons1 = styled.div`
  width: 258px;
  height: 34px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-22xl);
`;
const TaskDetails = styled.div`
  height: 35px;
  width: 258px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
`;
const Div = styled.div`
  width: 592.9px;
  height: 85.7px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 28.8px 33.7px 21.9px;
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-47xl);
  z-index: 1;
`;
const Image1 = styled.div`
  height: 736px;
  width: 731px;
  box-shadow: -33px 60px 72px rgba(155, 155, 155, 0.2);
  border-radius: var(--br-11xl);
  background-color: var(--color-whitesmoke-300);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 141.8px 33px 63.1px 73.3px;
  box-sizing: border-box;
  position: relative;
  gap: 25.1px;
  z-index: 1;
`;
const LeadContent = styled.div`
  height: 736px;
  width: 731px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const AllocateLeadsAnd = styled.div`
  width: 589px;
  height: 123px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
  flex-shrink: 0;
`;
const UniqueAndPowerful = styled.div`
  width: 553px;
  height: 141px;
  position: relative;
  font-size: var(--font-size-xl);
  line-height: 160%;
  text-transform: capitalize;
  font-family: var(--font-open-sans);
  color: var(--color-dimgray-200);
  display: inline-block;
  flex-shrink: 0;
`;
const SoftwareDescription = styled.div`
  width: 589px;
  height: 264px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const SoftwareContent = styled.div`
  width: 589px;
  height: 646px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xl);
`;
const SoftwareContentWrapper = styled.div`
  height: 691px;
  width: 589px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-26xl) 0px 0px;
  box-sizing: border-box;
  font-size: var(--header-2-size);
`;
const LeadContentParent = styled.div`
  height: 736px;
  width: 1398px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-59xl);
`;
const LeadContainer = styled.div`
  width: 1936px;
  height: 1066px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 538px 330px 0px;
  box-sizing: border-box;
  font-size: var(--font-size-xl);
  color: var(--color-darkslategray-100);
  font-family: var(--font-jost);
`;
const ManagementBackgroundChild = styled.div`
  width: 2200px;
  position: relative;
  background-color: var(--color-darkturquoise-200);
  height: 1194px;
  display: none;
`;
const BackgroundIcon1 = styled.img`
  height: 909.1px;
  width: 1694px;
  position: relative;
  z-index: 1;
`;
const ManagementBackground = styled.div`
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
const WaysAProject = styled.div`
  width: 537px;
  height: 106px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
`;
const UniqueAndPowerful1 = styled.div`
  width: 553px;
  height: 96px;
  position: relative;
  font-size: var(--font-size-xl);
  line-height: 160%;
  text-transform: capitalize;
  font-family: var(--font-open-sans);
  color: var(--color-dimgray-200);
  display: inline-block;
`;
const Text1 = styled.div`
  width: 553px;
  height: ;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mid);
`;
const PointIcon = styled.img`
  height: 30px;
  width: 28px;
  position: relative;
`;
const PointBackgroundIcon = styled.img`
  height: 44px;
  width: 58px;
  position: relative;
`;
const Icon4 = styled.div`
  width: 94px;
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const CrmSecurity = styled.div`
  width: 179px;
  height: 40px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
`;
const CardsAndMake = styled.div`
  width: 299px;
  height: 64px;
  position: relative;
  font-size: var(--font-size-xl);
  line-height: 160%;
  text-transform: capitalize;
  font-family: var(--font-open-sans);
  color: var(--color-dimgray-200);
  display: inline-block;
`;
const MarketingHubParent = styled.div`
  width: 299px;
  height: 113px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
`;
const PointContainer = styled.div`
  height: 167px;
  width: 299px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const Icon5 = styled.img`
  width: 66px;
  height: 37px;
  position: relative;
`;
const MarketingHub = styled.div`
  width: 198px;
  height: 40px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
`;
const MarketingPoint = styled.div`
  height: 171px;
  width: 299px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 21px;
`;
const Points = styled.div`
  width: 641px;
  height: 171px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 43px;
  font-size: var(--font-size-11xl);
`;
const GetStarted = styled.div`
  height: 32px;
  width: 105px;
  position: relative;
  line-height: 160%;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
`;
const Button1 = styled.div`
  width: 183px;
  height: 60px;
  border-radius: var(--br-8xs);
  background-color: var(--color-darkslategray-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-sm) var(--padding-20xl);
  box-sizing: border-box;
  text-align: center;
  font-size: var(--font-size-xl);
  color: var(--white);
`;
const Text2 = styled.div`
  width: 641px;
  height: 560px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-36xl);
`;
const TeamDescription = styled.div`
  height: 631px;
  width: 641px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 71px 0px 0px;
  box-sizing: border-box;
`;
const BackgroundIcon2 = styled.img`
  height: 1077.4px;
  width: 769.2px;
  position: absolute;
  margin: 0 !important;
  right: -246.2px;
  bottom: -276.4px;
  object-fit: contain;
`;
const Background2 = styled.div`
  width: 699px;
  position: relative;
  box-shadow: 40px 48px 105px rgba(106, 106, 106, 0.2);
  border-radius: var(--br-11xl);
  background-color: var(--color-whitesmoke-300);
  height: 702px;
  display: none;
`;
const FrameItem = styled.div`
  position: absolute;
  top: 2.29px;
  left: 0px;
  box-shadow: 0px 14px 28px rgba(205, 205, 205, 0.25),
    -2.6px 2.6px 0px #fff inset;
  backdrop-filter: blur(21.44px);
  border-radius: var(--br-98xl);
  background: linear-gradient(
    -83.52deg,
    rgba(244, 244, 244, 0.93),
    rgba(244, 244, 244, 0.93) 42.19%,
    rgba(255, 255, 255, 0.93)
  );
  width: 234px;
  height: 234px;
  transform: rotate(-0.6deg);
  transform-origin: 0 0;
`;
const FrameInner = styled.div`
  position: absolute;
  top: 20.92px;
  left: 19px;
  box-shadow: 0px 14px 28px rgba(205, 205, 205, 0.25),
    -2.6px 2.6px 0px #fff inset;
  backdrop-filter: blur(21.44px);
  border-radius: var(--br-98xl);
  background: linear-gradient(
    -83.52deg,
    rgba(244, 244, 244, 0.93),
    rgba(244, 244, 244, 0.93) 42.19%,
    rgba(255, 255, 255, 0.93)
  );
  width: 196.4px;
  height: 196.4px;
  transform: rotate(-0.6deg);
  transform-origin: 0 0;
  z-index: 1;
`;
const Crm = styled.div`
  position: absolute;
  top: 67px;
  left: 43px;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 600;
  z-index: 2;
`;
const ActiveDot = styled.div`
  position: absolute;
  top: 654.01px;
  left: 138.21px;
  border-radius: 50%;
  background-color: #dfdfdf;
  width: 534px;
  height: 534px;
  transform: rotate(-105deg);
  transform-origin: 0 0;
  z-index: 1;
`;
const Icon6 = styled.img`
  position: absolute;
  top: 81px;
  left: 434px;
  width: 134.6px;
  height: 134.6px;
  z-index: 3;
`;
const Icon7 = styled.img`
  position: absolute;
  top: 252px;
  left: 503px;
  width: 134.6px;
  height: 134.6px;
  z-index: 2;
`;
const Icon8 = styled.img`
  position: absolute;
  top: 418px;
  left: 434px;
  width: 134.6px;
  height: 134.6px;
  z-index: 3;
`;
const Icon9 = styled.img`
  position: absolute;
  top: 499px;
  left: 261px;
  width: 134.6px;
  height: 134.6px;
  z-index: 2;
`;
const Icon10 = styled.img`
  position: absolute;
  top: 418px;
  left: 91px;
  width: 134.6px;
  height: 134.6px;
  z-index: 3;
`;
const Icon11 = styled.img`
  position: absolute;
  top: 251px;
  left: 12px;
  width: 134.6px;
  height: 134.6px;
  z-index: 2;
`;
const Icon12 = styled.img`
  position: absolute;
  top: 81px;
  left: 91px;
  width: 134.6px;
  height: 134.6px;
  z-index: 3;
`;
const ActiveDotParent = styled.div`
  position: absolute;
  top: -214px;
  right: -215.7px;
  width: 654px;
  height: 654px;
`;
const Crm1 = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 2;
`;
const RectangleParent = styled.div`
  width: 236.3px;
  height: 236.3px;
  position: relative;
  z-index: 2;
`;
const Image2 = styled.div`
  height: 702px;
  width: 699px;
  box-shadow: 40px 48px 105px rgba(106, 106, 106, 0.2);
  border-radius: var(--br-11xl);
  background-color: var(--color-whitesmoke-300);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-214xl) 231px 232.7px;
  box-sizing: border-box;
  z-index: 1;
`;
const BackgroundParent = styled.div`
  height: 702px;
  width: 699px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  font-size: var(--font-size-49xl);
`;
const TeamContent = styled.div`
  height: 702px;
  width: 1416px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 76px;
`;
const TeamContentWrapper = styled.div`
  width: 1620px;
  height: 1172.7px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 204px 470.7px 0px;
  box-sizing: border-box;
  font-size: var(--header-2-size);
  color: var(--color-darkslategray-100);
  font-family: var(--font-jost);
`;
const SellServe = styled.div`
  width: 418px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
  z-index: 2;
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
  z-index: 2;
`;
const SellServeAutomateParent = styled.div`
  height: 126px;
  width: 447px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
`;
const YourBusinessEmail = styled.div`
  width: 255px;
  height: 32px;
  position: relative;
  line-height: 160%;
  display: inline-block;
  z-index: 2;
`;
const EmailChild = styled.div`
  width: 366px;
  position: relative;
  border-radius: var(--br-8xs);
  background-color: var(--white);
  height: 77px;
  display: none;
`;
const Email = styled.div`
  width: 320.6px;
  position: relative;
  line-height: 160%;
  text-transform: capitalize;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const Email1 = styled.div`
  height: 77px;
  width: 366px;
  border-radius: var(--br-8xs);
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xl) var(--padding-mini-4) var(--padding-3xl)
    var(--padding-12xl);
  box-sizing: border-box;
  z-index: 2;
`;
const TryNow = styled.div`
  height: 32px;
  width: 76px;
  position: relative;
  line-height: 160%;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
`;
const Button2 = styled.div`
  height: 76px;
  width: 182px;
  border-radius: var(--br-8xs);
  background-color: var(--color-darkturquoise-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xl) var(--padding-34xl);
  box-sizing: border-box;
  z-index: 2;
  color: var(--color-darkslategray-100);
`;
const EmailParent = styled.div`
  width: 557px;
  height: 77px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
  color: #939393;
`;
const YourBusinessEmailAddressParent = styled.div`
  height: 127px;
  width: 557px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-lg);
  font-size: var(--font-size-xl);
`;
const FrameGroup = styled.div`
  height: 127px;
  width: 1401px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 397px;
`;
const FrameWrapper = styled.div`
  width: 1427.4px;
  height: 154.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 26.4px var(--padding-8xl-9) 0px;
  box-sizing: border-box;
`;
const Background3 = styled.div`
  width: 1414.5px;
  position: relative;
  box-shadow: 40px 48px 105px #ebebeb;
  backdrop-filter: blur(62px);
  border-radius: var(--br-11xl);
  background-color: var(--color-gray-300);
  border: 1px solid var(--color-lightgray);
  box-sizing: border-box;
  height: 848.9px;
  display: none;
`;
const MenuIcon = styled.img`
  height: 736.4px;
  width: 114.9px;
  position: relative;
  z-index: 1;
`;
const Dashboard = styled.div`
  width: 146.4px;
  height: 37px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const DashboardWrapper = styled.div`
  height: 42.7px;
  width: 146.4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs-7) 0px 0px;
  box-sizing: border-box;
`;
const Background4 = styled.div`
  width: 385.1px;
  position: relative;
  border-radius: var(--br-7xl);
  background-color: var(--white);
  border: 0.6px solid var(--white);
  box-sizing: border-box;
  height: 43.1px;
  display: none;
`;
const SearchIcon = styled.img`
  width: 16px;
  height: 15.4px;
  position: relative;
  z-index: 1;
`;
const SearchWrapper = styled.div`
  height: 18px;
  width: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs-6) 0px 0px;
  box-sizing: border-box;
`;
const SearchHere = styled.div`
  height: 18.2px;
  width: 82.3px;
  position: relative;
  letter-spacing: -0.01em;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const Search = styled.div`
  height: 43.1px;
  width: 385.1px;
  border-radius: var(--br-7xl);
  background-color: var(--white);
  border: 0.6px solid var(--white);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 11.5px 29px 13.4px;
  gap: 10.9px;
  z-index: 1;
  font-size: var(--font-size-xs-4);
  color: var(--color-lightsteelblue);
  font-family: var(--font-zen-kaku-gothic-antique);
`;
const FrameParent = styled.div`
  width: 573.8px;
  height: 43.1px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 42.3px;
`;
const Background5 = styled.div`
  width: 754.6px;
  position: relative;
  box-shadow: 0px 8.4px 58.91px 3.37px rgba(128, 159, 186, 0.2);
  border-radius: 29.46px;
  background-color: var(--white);
  height: 420.8px;
  display: none;
`;
const CrmAnalyticalReport = styled.div`
  height: 31px;
  width: 251.7px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const Pattern = styled.div`
  width: 12.2px;
  height: 11.5px;
  position: relative;
  border-radius: 50%;
  background-color: #76cbfd;
  z-index: 1;
`;
const IncomeData = styled.div`
  height: 20.1px;
  width: 12.2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs-6) 0px 0px;
  box-sizing: border-box;
`;
const Income = styled.div`
  height: 23.9px;
  width: 53.2px;
  position: relative;
  letter-spacing: -0.01em;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const IncomeDataParent = styled.div`
  width: 72.4px;
  height: 23.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7px;
`;
const ReportDetails = styled.div`
  height: 28.7px;
  width: 80.6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs-8) 8.2px 0px 0px;
  box-sizing: border-box;
`;
const ExpensesChartIcon = styled.div`
  width: 12.2px;
  height: 11.5px;
  position: relative;
  border-radius: 50%;
  background-color: var(--color-hotpink);
  z-index: 1;
`;
const Expenses = styled.div`
  height: 23.9px;
  width: 71.4px;
  position: relative;
  letter-spacing: -0.01em;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const ExpenseData = styled.div`
  width: 93.8px;
  height: 23.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10.2px;
`;
const ExpenseDataWrapper = styled.div`
  height: 29.6px;
  width: 93.8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs-7) 0px 0px;
  box-sizing: border-box;
`;
const Btn = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: 12.62px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 0.8px solid var(--color-lightsteelblue);
  box-sizing: border-box;
`;
const Monthly = styled.div`
  height: 23.9px;
  width: 59.3px;
  position: relative;
  letter-spacing: -0.01em;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const KeyboardArrowDownIcon = styled.img`
  width: 18.3px;
  height: 17.2px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
`;
const TimeDropdown = styled.div`
  height: 23.8px;
  width: 18.3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 6.6px 0px 0px;
  box-sizing: border-box;
`;
const AllTime = styled.div`
  height: 38.3px;
  width: 132.4px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs-8) 16.4px 9.6px 18.3px;
  box-sizing: border-box;
  position: relative;
  gap: 20.1px;
  z-index: 1;
`;
const MenuIcon1 = styled.img`
  width: 5.6px;
  height: 21px;
  position: relative;
  z-index: 1;
`;
const MenuWrapper = styled.div`
  height: 29.6px;
  width: 5.6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs-6) 0px 0px;
  box-sizing: border-box;
`;
const TimeFilter = styled.div`
  height: 38.3px;
  width: 157.3px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 19.3px;
`;
const ReportDetailsParent = styled.div`
  height: 38.3px;
  width: 376.3px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 22.3px;
  text-align: center;
  font-size: var(--font-size-mini-3);
  color: var(--color-lightsteelblue);
  font-family: var(--font-zen-kaku-gothic-antique);
`;
const CrmAnalyticalReportParent = styled.div`
  height: 38.3px;
  width: 674.7px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 46.7px;
`;
const ReportContentInner = styled.div`
  width: 676.3px;
  height: 38.3px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-11xs-6);
  box-sizing: border-box;
`;
const K = styled.div`
  width: 27.8px;
  height: 21px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const K1 = styled.div`
  width: 25.4px;
  height: 21px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const K2 = styled.div`
  width: 26.6px;
  height: 21px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const Div1 = styled.div`
  height: 23.9px;
  width: 9.7px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const UserName = styled.div`
  width: 11.3px;
  height: 23.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-11xs-6) 0px 0px;
  box-sizing: border-box;
`;
const UserInitials = styled.div`
  height: 253.4px;
  width: 28.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-36xl-5);
`;
const Line = styled.div`
  position: absolute;
  top: 1px;
  left: 0px;
  border-top: 0.8px solid var(--color-lightsteelblue);
  box-sizing: border-box;
  width: 619px;
  height: 0.8px;
  opacity: 0.3;
  z-index: 1;
`;
const Line1 = styled.div`
  position: absolute;
  top: 154px;
  left: 0px;
  border-top: 0.8px solid var(--color-lightsteelblue);
  box-sizing: border-box;
  width: 619px;
  height: 0.8px;
  opacity: 0.3;
  z-index: 1;
`;
const Line2 = styled.div`
  position: absolute;
  top: 77.5px;
  left: 0px;
  border-top: 0.8px solid var(--color-lightsteelblue);
  box-sizing: border-box;
  width: 619px;
  height: 0.8px;
  opacity: 0.3;
  z-index: 1;
`;
const Line3 = styled.div`
  position: absolute;
  top: 230.5px;
  left: 0px;
  border-top: 0.8px solid var(--color-lightsteelblue);
  box-sizing: border-box;
  width: 619px;
  height: 0.8px;
  opacity: 0.3;
  z-index: 1;
`;
const PatternIcon = styled.img`
  position: absolute;
  top: 47.8px;
  left: 0px;
  width: 618.2px;
  height: 182.7px;
  z-index: 2;
`;
const PatternIcon1 = styled.img`
  position: absolute;
  top: 1px;
  left: 0px;
  width: 618.2px;
  height: 229.5px;
  z-index: 3;
`;
const HoverIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 489.8px;
  width: 61.1px;
  height: 230.5px;
  z-index: 4;
`;
const Graph = styled.div`
  width: 618.2px;
  height: 231.3px;
  position: relative;
`;
const GraphWrapper = styled.div`
  height: 239.1px;
  width: 618.2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-5xs-8);
  box-sizing: border-box;
`;
const User1 = styled.div`
  width: 672.8px;
  height: 253.4px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 26.1px;
`;
const Jan = styled.div`
  height: 23.9px;
  width: 27.8px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const Feb = styled.div`
  width: 29px;
  height: 23.9px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const MonthLabels = styled.div`
  height: 23.9px;
  width: 33.2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 4.2px 0px 0px;
  box-sizing: border-box;
`;
const Mar = styled.div`
  height: 23.9px;
  width: 29px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const Apr = styled.div`
  width: 27.8px;
  height: 23.9px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const MonthLabels1 = styled.div`
  height: 23.9px;
  width: 30.4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-10xs-6) 0px 0px;
  box-sizing: border-box;
`;
const May = styled.div`
  width: 31.5px;
  height: 23.9px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const MonthLabels2 = styled.div`
  height: 23.9px;
  width: 35px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 3.5px 0px 0px;
  box-sizing: border-box;
`;
const Jul = styled.div`
  width: 23px;
  height: 23.9px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const MonthLabels3 = styled.div`
  height: 23.9px;
  width: 25.8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 2.8px 0px 0px;
  box-sizing: border-box;
`;
const Aug = styled.div`
  height: 23.9px;
  width: 30.3px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const Months = styled.div`
  height: 23.9px;
  width: 598.1px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 51.1px;
`;
const MonthsWrapper = styled.div`
  width: 608.6px;
  height: 23.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 10.5px 0px 0px;
  box-sizing: border-box;
  text-align: center;
`;
const UserParent = styled.div`
  width: 672.8px;
  height: 286.9px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 9.6px;
  text-align: right;
  font-size: var(--font-size-mini-3);
  color: var(--color-lightsteelblue);
  font-family: var(--font-zen-kaku-gothic-antique);
`;
const ReportContent = styled.div`
  width: 754.6px;
  height: 420.8px;
  box-shadow: 0px 8.4px 58.91px 3.37px rgba(128, 159, 186, 0.2);
  border-radius: 29.46px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 30.6px var(--padding-18xl) 35.4px;
  box-sizing: border-box;
  gap: 29.6px;
  z-index: 1;
  font-size: var(--font-size-2xl);
`;
const FrameParent1 = styled.div`
  width: 754.6px;
  height: 487.9px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const Background6 = styled.div`
  width: 364.2px;
  position: relative;
  box-shadow: 0px 8.4px 58.91px 3.37px rgba(128, 159, 186, 0.2);
  border-radius: 29.46px;
  background-color: var(--white);
  height: 201.1px;
  display: none;
`;
const TskReport = styled.div`
  height: 31px;
  width: 116.2px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const MenuIcons = styled.div`
  height: 21px;
  width: 5.6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs-6) 0px 0px;
  box-sizing: border-box;
`;
const TaskAndRevenue = styled.div`
  width: 286.4px;
  height: 32.7px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-88xl-9);
`;
const Pattern1 = styled.div`
  position: absolute;
  top: 0px;
  left: 262.7px;
  border-radius: 16.83px;
  background-color: var(--color-mistyrose);
  width: 21.4px;
  height: 77.5px;
`;
const Pattern2 = styled.div`
  position: absolute;
  top: 34.3px;
  left: 262.7px;
  border-radius: 16.83px;
  background-color: var(--color-mediumslateblue-200);
  width: 21.4px;
  height: 43.2px;
  z-index: 1;
`;
const Pattern3 = styled.div`
  position: absolute;
  top: 0px;
  left: 219px;
  border-radius: 16.83px;
  background-color: var(--color-mistyrose);
  width: 21.4px;
  height: 77.5px;
`;
const Pattern4 = styled.div`
  position: absolute;
  top: 52.1px;
  left: 219px;
  border-radius: 16.83px;
  background-color: var(--color-mediumslateblue-200);
  width: 21.4px;
  height: 25.4px;
  z-index: 1;
`;
const Pattern5 = styled.div`
  position: absolute;
  top: 0px;
  left: 175.2px;
  border-radius: 16.83px;
  background-color: var(--color-mistyrose);
  width: 21.4px;
  height: 77.5px;
`;
const Pattern6 = styled.div`
  position: absolute;
  top: 17.8px;
  left: 175.2px;
  border-radius: 16.83px;
  background-color: var(--color-mediumslateblue-200);
  width: 21.4px;
  height: 59.7px;
  z-index: 1;
`;
const Pattern7 = styled.div`
  position: absolute;
  top: 0px;
  left: 131.4px;
  border-radius: 16.83px;
  background-color: var(--color-mistyrose);
  width: 21.4px;
  height: 77.5px;
`;
const Pattern8 = styled.div`
  position: absolute;
  top: 25.4px;
  left: 131.4px;
  border-radius: 16.83px;
  background-color: var(--color-mediumslateblue-200);
  width: 21.4px;
  height: 52.1px;
  z-index: 1;
`;
const Pattern9 = styled.div`
  position: absolute;
  top: 0px;
  left: 87.6px;
  border-radius: 16.83px;
  background-color: var(--color-mistyrose);
  width: 21.4px;
  height: 77.5px;
`;
const Pattern10 = styled.div`
  position: absolute;
  top: 34.3px;
  left: 87.6px;
  border-radius: 16.83px;
  background-color: var(--color-mediumslateblue-200);
  width: 21.4px;
  height: 43.2px;
  z-index: 1;
`;
const Pattern11 = styled.div`
  position: absolute;
  top: 0px;
  left: 43.8px;
  border-radius: 16.83px;
  background-color: var(--color-mistyrose);
  width: 21.4px;
  height: 77.5px;
`;
const Pattern12 = styled.div`
  position: absolute;
  top: 14px;
  left: 43.8px;
  border-radius: 16.83px;
  background-color: var(--color-mediumslateblue-200);
  width: 21.4px;
  height: 63.5px;
  z-index: 1;
`;
const Pattern13 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 16.83px;
  background-color: var(--color-mistyrose);
  width: 21.4px;
  height: 77.5px;
`;
const Pattern14 = styled.div`
  position: absolute;
  top: 45.8px;
  left: 0px;
  border-radius: 16.83px;
  background-color: var(--color-mediumslateblue-200);
  width: 21.4px;
  height: 31.8px;
  z-index: 1;
`;
const Chart = styled.div`
  width: 284.1px;
  height: 77.5px;
  position: relative;
  z-index: 1;
`;
const Div2 = styled.div`
  height: 201.1px;
  width: 364.2px;
  box-shadow: 0px 8.4px 58.91px 3.37px rgba(128, 159, 186, 0.2);
  border-radius: 29.46px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-17xl) var(--padding-19xl-6) var(--padding-3xl-6);
  box-sizing: border-box;
  gap: var(--gap-15xl);
  z-index: 1;
`;
const Background7 = styled.div`
  width: 365.4px;
  position: relative;
  box-shadow: 0px 8.4px 58.91px 3.37px rgba(128, 159, 186, 0.2);
  border-radius: 29.46px;
  background-color: var(--white);
  height: 201.1px;
  display: none;
`;
const RevenueGraph = styled.div`
  height: 31px;
  width: 174.2px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const RevenueGraphParent = styled.div`
  width: 287.7px;
  height: 31px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-88xl-9);
`;
const Pattern15 = styled.div`
  position: absolute;
  top: 0px;
  left: 262.8px;
  border-radius: 16.83px;
  background-color: var(--color-lightblue);
  width: 21.4px;
  height: 77.5px;
`;
const Pattern16 = styled.div`
  position: absolute;
  top: 38.3px;
  left: 262.8px;
  border-radius: 16.83px;
  background-color: var(--color-deepskyblue-200);
  width: 21.4px;
  height: 39.2px;
  z-index: 1;
`;
const Pattern17 = styled.div`
  position: absolute;
  top: 0px;
  left: 219px;
  border-radius: 16.83px;
  background-color: var(--color-lightblue);
  width: 21.4px;
  height: 77.5px;
`;
const Pattern18 = styled.div`
  position: absolute;
  top: 54.6px;
  left: 219px;
  border-radius: 16.83px;
  background-color: var(--color-deepskyblue-200);
  width: 21.4px;
  height: 23px;
  z-index: 1;
`;
const Pattern19 = styled.div`
  position: absolute;
  top: 0px;
  left: 175.2px;
  border-radius: 16.83px;
  background-color: var(--color-lightblue);
  width: 21.4px;
  height: 77.5px;
`;
const Pattern20 = styled.div`
  position: absolute;
  top: 23px;
  left: 175.2px;
  border-radius: 16.83px;
  background-color: var(--color-deepskyblue-200);
  width: 21.4px;
  height: 54.5px;
  z-index: 1;
`;
const Pattern21 = styled.div`
  position: absolute;
  top: 0px;
  left: 131.4px;
  border-radius: 16.83px;
  background-color: var(--color-lightblue);
  width: 21.4px;
  height: 77.5px;
`;
const Pattern22 = styled.div`
  position: absolute;
  top: 29.7px;
  left: 131.4px;
  border-radius: 16.83px;
  background-color: var(--color-deepskyblue-200);
  width: 21.4px;
  height: 47.8px;
  z-index: 1;
`;
const Pattern23 = styled.div`
  position: absolute;
  top: 0px;
  left: 87.6px;
  border-radius: 16.83px;
  background-color: var(--color-lightblue);
  width: 21.4px;
  height: 77.5px;
`;
const Pattern24 = styled.div`
  position: absolute;
  top: 38.3px;
  left: 87.6px;
  border-radius: 16.83px;
  background-color: var(--color-deepskyblue-200);
  width: 21.4px;
  height: 39.2px;
  z-index: 1;
`;
const Pattern25 = styled.div`
  position: absolute;
  top: 0px;
  left: 43.8px;
  border-radius: 16.83px;
  background-color: var(--color-lightblue);
  width: 21.4px;
  height: 77.5px;
`;
const Pattern26 = styled.div`
  position: absolute;
  top: 19.2px;
  left: 43.8px;
  border-radius: 16.83px;
  background-color: var(--color-deepskyblue-200);
  width: 21.4px;
  height: 58.3px;
  z-index: 1;
`;
const Pattern27 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 16.83px;
  background-color: var(--color-lightblue);
  width: 21.4px;
  height: 77.5px;
`;
const Pattern28 = styled.div`
  position: absolute;
  top: 48.8px;
  left: 0px;
  border-radius: 16.83px;
  background-color: var(--color-deepskyblue-200);
  width: 21.4px;
  height: 28.7px;
  z-index: 1;
`;
const Div3 = styled.div`
  height: 201.1px;
  width: 365.4px;
  box-shadow: 0px 8.4px 58.91px 3.37px rgba(128, 159, 186, 0.2);
  border-radius: 29.46px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-17xl) var(--padding-19xl-6) var(--padding-3xl-6);
  box-sizing: border-box;
  gap: var(--gap-15xl);
  z-index: 1;
`;
const Dashboard1 = styled.div`
  width: 755px;
  height: 201.1px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 25.4px;
  font-size: var(--font-size-2xl);
`;
const FrameDiv = styled.div`
  height: 736.2px;
  width: 755px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 47.2px;
`;
const NotifyIcon = styled.img`
  height: 43.1px;
  width: 45.9px;
  position: relative;
  z-index: 1;
`;
const ImageIcon = styled.img`
  height: 43.1px;
  width: 45.9px;
  position: relative;
  object-fit: cover;
  z-index: 1;
`;
const NotificationIcon = styled.div`
  height: 43.1px;
  width: 104.1px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-smi-3);
`;
const Notify = styled.div`
  width: 123.4px;
  height: 43.1px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 19.3px 0px 0px;
  box-sizing: border-box;
`;
const Background8 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  box-shadow: 0px 8.4px 58.91px 3.37px rgba(128, 159, 186, 0.2);
  border-radius: 29.46px;
  background-color: var(--white);
  width: 364.6px;
  height: 669.5px;
  display: none;
`;
const Background9 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color-mediumslateblue-200);
  width: 307.6px;
  height: 288.8px;
  z-index: 3;
`;
const B = styled.b`
  position: absolute;
  top: 28.7px;
  left: 167.1px;
  display: inline-block;
  width: 49.3px;
  height: 24px;
  z-index: 4;
`;
const ActivityCounter = styled.div`
  position: absolute;
  top: 96.6px;
  left: 28.5px;
  width: 307.6px;
  height: 288.8px;
`;
const Background10 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color-deepskyblue-200);
  width: 307.6px;
  height: 288.8px;
  z-index: 2;
`;
const B1 = styled.b`
  position: absolute;
  top: 204.8px;
  left: 211.8px;
  display: inline-block;
  width: 49.3px;
  height: 29.8px;
  z-index: 4;
`;
const ProgressBar = styled.div`
  position: absolute;
  top: 0px;
  left: 1.1px;
  width: 307.6px;
  height: 288.8px;
`;
const Background11 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color-hotpink);
  width: 307.6px;
  height: 288.8px;
  z-index: 1;
`;
const B2 = styled.b`
  position: absolute;
  top: 170.8px;
  left: 19.4px;
  display: inline-block;
  width: 49.3px;
  height: 29.8px;
  z-index: 4;
`;
const ProgressBar1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 307.6px;
  height: 288.8px;
`;
const Bars = styled.div`
  width: 308.7px;
  height: 288.8px;
  position: relative;
`;
const Icon13 = styled.img`
  width: 61.1px;
  position: relative;
  height: 57.4px;
  z-index: 3;
`;
const Icon14 = styled.img`
  width: 61.1px;
  position: relative;
  height: 57.4px;
`;
const Icon15 = styled.img`
  width: 61.1px;
  height: 57.4px;
  position: relative;
  z-index: 1;
`;
const TransactionIcons = styled.div`
  width: 61.1px;
  height: 210.4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 19.1px;
`;
const Transaction = styled.div`
  height: 215.2px;
  width: 61.1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs-8) 0px 0px;
  box-sizing: border-box;
`;
const Entertainment = styled.div`
  width: 124.6px;
  position: relative;
  letter-spacing: -0.01em;
  font-weight: 500;
  display: inline-block;
  height: 24px;
  flex-shrink: 0;
`;
const TypeLabels = styled.div`
  width: 125.7px;
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-11xs-1);
  box-sizing: border-box;
`;
const ActivityCategoryLabel = styled.div`
  width: 64.1px;
  height: 40.9px;
  position: relative;
  font-size: var(--font-size-6xl-2);
  font-weight: 500;
  font-family: var(--font-jost);
  color: var(--color-gray-200);
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const Types = styled.div`
  width: 125.7px;
  height: 68.7px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs-8);
`;
const Travel = styled.div`
  width: 54.5px;
  position: relative;
  letter-spacing: -0.01em;
  font-weight: 500;
  display: inline-block;
  height: 24px;
  flex-shrink: 0;
`;
const TravelWrapper = styled.div`
  width: 55.6px;
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-11xs-1);
  box-sizing: border-box;
`;
const Div4 = styled.div`
  width: 61.7px;
  position: relative;
  font-size: var(--font-size-6xl-2);
  font-weight: 500;
  font-family: var(--font-jost);
  color: var(--color-gray-200);
  display: inline-block;
  height: 40.9px;
  flex-shrink: 0;
  z-index: 1;
`;
const Types1 = styled.div`
  width: 61.7px;
  height: 68.7px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs-8);
`;
const Shopping = styled.div`
  height: 24px;
  width: 83.5px;
  position: relative;
  letter-spacing: -0.01em;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const ShoppingWrapper = styled.div`
  width: 84.6px;
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-11xs-1);
  box-sizing: border-box;
`;
const Div5 = styled.div`
  width: 61.7px;
  height: 40.9px;
  position: relative;
  font-size: var(--font-size-6xl-2);
  font-weight: 500;
  font-family: var(--font-jost);
  color: var(--color-gray-200);
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const Types2 = styled.div`
  width: 84.6px;
  height: 68.7px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs-8);
`;
const TransactionTypes = styled.div`
  height: 221.7px;
  width: 125.7px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7.8px;
`;
const Transactions = styled.div`
  height: 221.7px;
  width: 208.2px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xl-4);
`;
const DownlaodIcon = styled.img`
  width: 21.9px;
  position: relative;
  height: 18.9px;
  z-index: 3;
`;
const DownlaodIcon1 = styled.img`
  width: 21.9px;
  position: relative;
  height: 18.9px;
`;
const DownlaodIcon2 = styled.img`
  width: 21.9px;
  height: 18.9px;
  position: relative;
  z-index: 1;
`;
const DownloadButtons = styled.div`
  width: 21.9px;
  height: 172px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 57.7px;
`;
const Downloads = styled.div`
  height: 191.5px;
  width: 21.9px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 19.5px 0px 0px;
  box-sizing: border-box;
`;
const TransactionList = styled.div`
  width: 301.5px;
  height: 221.7px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 71.4px;
  text-align: left;
  color: var(--color-lightsteelblue);
  font-family: var(--font-zen-kaku-gothic-antique);
`;
const ProgressBars = styled.div`
  position: absolute;
  top: 96.6px;
  left: 28.5px;
  width: 308.7px;
  height: 541.1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 30.6px;
`;
const DailyActivities = styled.div`
  height: 31px;
  width: 164.6px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const MenuIcon2 = styled.img`
  width: 5.6px;
  height: 21px;
  position: relative;
  flex-shrink: 0;
  z-index: 1;
`;
const DailyActivity = styled.div`
  position: absolute;
  top: 30.6px;
  left: 38.7px;
  width: 287.7px;
  height: 31px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 117.5px;
  text-align: left;
  font-size: var(--font-size-2xl);
  color: var(--color-gray-200);
`;
const ActivitiesContent = styled.div`
  width: 364.6px;
  height: 669.5px;
  position: relative;
  box-shadow: 0px 8.4px 58.91px 3.37px rgba(128, 159, 186, 0.2);
  border-radius: 29.46px;
  background-color: var(--white);
  z-index: 1;
`;
const Notifications = styled.div`
  height: 736.6px;
  width: 364.6px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  text-align: center;
  font-size: var(--font-size-base-8);
  color: var(--white);
`;
const FrameContainer = styled.div`
  height: 736.6px;
  width: 1144.6px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xl);
`;
const Image3 = styled.div`
  height: 848.9px;
  width: 1414.5px;
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
  padding: 53.4px 42.4px 58.9px 70.2px;
  gap: 42.4px;
  z-index: 2;
`;
const ImageWrapper = styled.div`
  width: 1427.4px;
  height: 848.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 12.9px 0px 0px;
  box-sizing: border-box;
  font-size: var(--font-size-6xl-2);
  color: var(--color-gray-200);
`;
const HeadingH2Left2 = styled.div`
  height: 133px;
  width: 474px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;
const Heading = styled.div`
  width: 927px;
  height: 133px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 453px 0px 0px;
  box-sizing: border-box;
`;
const Image1034Icon = styled.img`
  width: 800px;
  height: 491px;
  position: relative;
  object-fit: cover;
`;
const Image1035Icon = styled.img`
  height: 372px;
  width: 611px;
  position: relative;
  border-radius: var(--br-xl);
  object-fit: cover;
  z-index: 3;
`;
const Image1035Wrapper = styled.div`
  width: 656px;
  height: 372px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-26xl) 0px 0px;
  box-sizing: border-box;
`;
const Image1036Icon = styled.img`
  width: 701px;
  height: 505px;
  position: relative;
  border-radius: var(--br-xl);
  object-fit: cover;
  z-index: 3;
`;
const Image1025Icon = styled.img`
  height: 509px;
  width: 449px;
  position: relative;
  object-fit: cover;
  z-index: 1;
`;
const Image1025Wrapper = styled.div`
  width: 542px;
  height: 509px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-74xl) 0px 0px;
  box-sizing: border-box;
`;
const FrameParent2 = styled.div`
  height: 1484px;
  width: 701px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 49px;
`;
const FrameWrapper1 = styled.div`
  width: 717px;
  height: 1484px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 16px;
  box-sizing: border-box;
`;
const Image1034Parent = styled.div`
  width: 800px;
  height: 2076px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-82xl);
`;
const ImageGridInner = styled.div`
  height: 2110px;
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px 34px;
  box-sizing: border-box;
`;
const CriaoInovadoraDe = styled.div`
  width: 589px;
  height: 123px;
  position: relative;
  letter-spacing: -0.02px;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
  flex-shrink: 0;
`;
const AoContratarO = styled.div`
  width: 553px;
  height: 141px;
  position: relative;
  font-size: var(--font-size-xl);
  line-height: 160%;
  text-transform: capitalize;
  font-family: var(--font-open-sans);
  color: var(--color-dimgray-200);
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const Description = styled.div`
  width: 589px;
  height: 264px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--header-2-size);
  color: var(--color-darkslategray-100);
`;
const Points1 = styled.div`
  width: 562px;
  height: 1493px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 59px;
  box-sizing: border-box;
  gap: var(--gap-11xl);
`;
const SaberMais = styled.div`
  height: 32px;
  width: 102px;
  position: relative;
  line-height: 160%;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
`;
const Button3 = styled.div`
  width: 589px;
  height: 60px;
  border-radius: var(--br-8xs);
  background-color: var(--primary);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm) 243.5px;
  box-sizing: border-box;
  cursor: pointer;
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
const Button4 = styled.div`
  width: 149px;
  height: 60px;
  border-radius: var(--br-8xs);
  background-color: var(--color-darkslategray-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm) var(--padding-20xl);
  box-sizing: border-box;
  cursor: pointer;
`;
const MarketingPack = styled.div`
  height: 2012px;
  width: 589px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-26xl);
`;
const ImageGrid = styled.div`
  width: 1552px;
  height: 2110px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 163px;
`;
const Image1027Icon = styled.img`
  height: 577px;
  width: 545px;
  position: relative;
  object-fit: cover;
`;
const Image1026Icon = styled.img`
  height: 516px;
  width: 594px;
  position: relative;
  object-fit: cover;
`;
const Images = styled.div`
  height: 577px;
  width: 1318px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 179px;
`;
const Gallery = styled.div`
  width: 1425px;
  height: 577px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 107px 0px 0px;
  box-sizing: border-box;
`;
const Content2 = styled.div`
  width: 1552px;
  height: 2729px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 42px;
  font-size: var(--font-size-xl);
  color: var(--white);
  font-family: var(--font-jost);
`;
const HeadingParent = styled.div`
  width: 1552px;
  height: 2899px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 37px;
  text-align: center;
  font-size: var(--headings-headings-h2-size);
  color: var(--gray-gray-900);
  font-family: var(--paragraphs-para-1);
`;
const FrameParent3 = styled.div`
  height: 4074.8px;
  width: 1552px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 86px;
`;
const WtsInner = styled.div`
  width: 1904px;
  height: 4147.8px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 352px 73px 0px;
  box-sizing: border-box;
  font-size: var(--header-2-size);
  color: var(--white);
  font-family: var(--font-jost);
`;
const LoremIpsumIs = styled.div`
  height: 112px;
  width: 340px;
  position: absolute;
  margin: 0 !important;
  bottom: 400px;
  left: 459px;
  line-height: 28px;
  font-weight: 500;
  display: inline-block;
  z-index: 2;
`;
const GroupIcon = styled.img`
  height: 30px;
  width: 18.4px;
  position: absolute;
  margin: 0 !important;
  top: 487px;
  left: 470.7px;
  z-index: 2;
`;
const GroupIcon1 = styled.img`
  height: 30px;
  width: 18.4px;
  position: absolute;
  margin: 0 !important;
  top: 487px;
  left: 496.2px;
  z-index: 2;
`;
const LoremIpsumIs1 = styled.div`
  height: 112px;
  width: 340px;
  position: absolute;
  margin: 0 !important;
  right: 449px;
  bottom: 400px;
  line-height: 28px;
  font-weight: 500;
  display: inline-block;
  z-index: 3;
`;
const GroupIcon2 = styled.img`
  height: 30px;
  width: 18.4px;
  position: absolute;
  margin: 0 !important;
  top: 487px;
  right: 495.7px;
  z-index: 4;
`;
const GroupIcon3 = styled.img`
  height: 30px;
  width: 18.4px;
  position: absolute;
  margin: 0 !important;
  top: 487px;
  right: 470.2px;
  z-index: 5;
`;
const LoremIpsumIs2 = styled.div`
  height: 112px;
  width: 340px;
  position: absolute;
  margin: 0 !important;
  right: 925px;
  bottom: 400px;
  line-height: 28px;
  font-weight: 500;
  color: var(--white);
  display: inline-block;
  z-index: 6;
`;
const GroupIcon4 = styled.img`
  height: 30px;
  width: 18.4px;
  position: absolute;
  margin: 0 !important;
  top: 487px;
  left: 1078.3px;
  z-index: 7;
`;
const GroupIcon5 = styled.img`
  height: 30px;
  width: 18.4px;
  position: absolute;
  margin: 0 !important;
  top: 487px;
  right: 1077.8px;
  z-index: 8;
`;
const ContentChild = styled.div`
  width: 2200px;
  position: relative;
  background-color: var(--color-gray-100);
  height: 1054px;
  display: none;
`;
const Testimonial = styled.div`
  width: 116px;
  position: relative;
  text-transform: uppercase;
  font-weight: 600;
  display: inline-block;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.37);
  z-index: 1;
`;
const SeeWhatOthersContainer = styled.div`
  width: 532px;
  position: relative;
  font-size: var(--header-2-size);
  line-height: 54px;
  font-weight: 600;
  color: var(--primary);
  display: inline-block;
  z-index: 1;
`;
const Header = styled.div`
  width: 532px;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const BgIcon = styled.img`
  width: 420px;
  height: 266px;
  position: relative;
  object-fit: cover;
  z-index: 1;
`;
const AvatarIcon = styled.img`
  height: 60px;
  width: 60px;
  position: relative;
  z-index: 1;
`;
const JhonSmith = styled.div`
  width: 121px;
  position: relative;
  font-weight: 600;
  display: inline-block;
  z-index: 1;
`;
const WebDeveloper = styled.div`
  width: 123px;
  position: relative;
  font-size: var(--short-title-size);
  font-weight: 500;
  color: var(--primary);
  display: inline-block;
  z-index: 1;
`;
const JhonSmithParent = styled.div`
  width: 123px;
  height: 56px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xs);
`;
const Details = styled.div`
  height: 58px;
  width: 123px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0px 0px;
  box-sizing: border-box;
`;
const Avatar = styled.div`
  height: 60px;
  width: 205px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xl);
`;
const Content3 = styled.div`
  width: 247px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-23xl);
  box-sizing: border-box;
`;
const Background12 = styled.div`
  height: 346px;
  width: 420px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;
const BgIcon1 = styled.img`
  width: 420px;
  position: relative;
  height: 266px;
  object-fit: cover;
  z-index: 2;
`;
const AvatarIcon1 = styled.img`
  width: 60px;
  position: relative;
  height: 60px;
  z-index: 2;
`;
const MdShamimHossain = styled.div`
  width: 217px;
  position: relative;
  font-weight: 600;
  display: inline-block;
`;
const UiuxDesigner = styled.div`
  width: 124px;
  position: relative;
  font-size: var(--short-title-size);
  font-weight: 500;
  color: var(--white);
  display: inline-block;
`;
const MdShamimHossainParent = styled.div`
  width: 217px;
  height: 56px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xs);
`;
const FrameWrapper2 = styled.div`
  height: 58px;
  width: 217px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0px 0px;
  box-sizing: border-box;
`;
const AvatarParent = styled.div`
  height: 60px;
  width: 297px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;
const BackgroundInner = styled.div`
  width: 339px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-23xl);
  box-sizing: border-box;
`;
const Background13 = styled.div`
  height: 346px;
  width: 420px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
  color: var(--primary);
`;
const JesicaLirona = styled.div`
  width: 140px;
  position: relative;
  font-weight: 600;
  display: inline-block;
`;
const FrontEndDeveloper = styled.div`
  width: 166px;
  position: relative;
  font-size: var(--short-title-size);
  font-weight: 500;
  color: var(--primary);
  display: inline-block;
`;
const JesicaLironaParent = styled.div`
  width: 166px;
  height: 56px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xs);
`;
const AuthorInfo = styled.div`
  height: 58px;
  width: 166px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0px 0px;
  box-sizing: border-box;
`;
const AvatarGroup = styled.div`
  height: 60px;
  width: 246px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;
const CardInfo = styled.div`
  width: 288px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-23xl);
  box-sizing: border-box;
`;
const Item = styled.div`
  height: 346px;
  width: 1372px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 56px;
`;
const ItemWrapper = styled.div`
  width: 1498px;
  height: 346px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 126px;
  box-sizing: border-box;
  font-size: var(--h4-size);
`;
const Content4 = styled.div`
  height: 1054px;
  width: 2200px;
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 243px 293px 261px;
  box-sizing: border-box;
  gap: 64px;
  color: var(--white);
`;
const Description1 = styled.div`
  height: 1054px;
  width: 2200px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const Testimonials = styled.div`
  width: 2200px;
  height: 1185px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 131px;
  box-sizing: border-box;
`;
const BackgroundIcon3 = styled.img`
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
const BackgroundIcon4 = styled.img`
  height: 1077.4px;
  width: 769.2px;
  position: relative;
  object-fit: contain;
  z-index: 2;
`;
const Footer = styled.div`
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
  text-align: left;
  font-size: var(--short-title-size);
  color: var(--dark);
  font-family: var(--short-title);
`;

const WTS: NextPage = () => {
  const router = useRouter();

  const onButtonContainerClick = useCallback(() => {
    router.push("/servio-marketing");
  }, [router]);

  const onButtonContainerClick1 = useCallback(() => {
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
          <FrameComponent4 />
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
      <DetailContainerWrapper>
        <DetailContainer>
          <DetailContent>
            <DetailWrapper>
              <DetailHeader>
                <DiveIntoThe>DIVE INTO THE DETAILS</DiveIntoThe>
                <CardsContainEverything>
                  Cards Contain Everything You Need
                </CardsContainEverything>
              </DetailHeader>
              <DetailDescription>
                <WeDesign>{`We design & build brand, campaigns & digital projects for business large & small with customer experiences. Due to its fo widespread use as filler text for layouts, non-readability is of great importance human perception.`}</WeDesign>
                <DetailList>
                  <CheckList>
                    <CheckIcon alt="" src="/check.svg" />
                    <CheckIcon1 alt="" src="/check.svg" />
                    <CheckIcon2 alt="" src="/check.svg" />
                  </CheckList>
                  <ListDescription>
                    <BestkitCardsAre>
                      Bestkit cards are your portal to more organized work
                    </BestkitCardsAre>
                    <EverySinglePart>
                      Every single part of your task can be managed, tracked,
                      and shared
                    </EverySinglePart>
                    <OpenAnyCard>
                      Open any card to uncover of checklists, due dates,
                      attachments
                    </OpenAnyCard>
                  </ListDescription>
                </DetailList>
              </DetailDescription>
              <LearnMoreButton>
                <BtnBg />
                <LearnMore>Learn More</LearnMore>
                <VectorWrapper>
                  <VectorIcon alt="" src="/vector.svg" />
                </VectorWrapper>
              </LearnMoreButton>
            </DetailWrapper>
          </DetailContent>
          <LeftSideIcon alt="" src="/left-side@2x.png" />
        </DetailContainer>
      </DetailContainerWrapper>
      <FeatureContainerWrapper>
        <FeatureContainer>
          <FeatureContent>
            <ImagesIcon alt="" src="/images1@2x.png" />
            <CardList>
              <CardContainer>
                <SpecialFeatures>
                  <GreatFeatures>Great Features</GreatFeatures>
                  <CardsContainEverything>
                    What Make’s Us Special
                  </CardsContainEverything>
                </SpecialFeatures>
                <CardRowOne>
                  <CardOne>
                    <Icon>
                      <IconBg />
                      <Money1Icon alt="" src="/money-1.svg" />
                    </Icon>
                    <TransferYourBalancesParent>
                      <TransferYourBalances>
                        Transfer Your Balances
                      </TransferYourBalances>
                      <LoremIpsumDolor>
                        Lorem ipsum dolor sit a Captivate your guests with
                        seamls, browsing experience across all devices.
                      </LoremIpsumDolor>
                    </TransferYourBalancesParent>
                  </CardOne>
                  <CardOne>
                    <Icon1>
                      <IconBg1 />
                      <CreditCardIcon alt="" src="/creditcard.svg" />
                    </Icon1>
                    <TransferYourBalancesParent>
                      <RequestAPayment>Request a Payment</RequestAPayment>
                      <LoremIpsumDolor>
                        Lorem ipsum dolor sit a Captivate your guests with
                        seamls, browsing experience across all devices.
                      </LoremIpsumDolor>
                    </TransferYourBalancesParent>
                  </CardOne>
                </CardRowOne>
                <CardRowOne>
                  <CardOne>
                    <Icon2>
                      <IconBg2 />
                      <MoneyGrowthIcon alt="" src="/moneygrowth.svg" />
                    </Icon2>
                    <TransferYourBalancesParent>
                      <ReceivingPayments>Receiving Payments</ReceivingPayments>
                      <LoremIpsumDolor>
                        Lorem ipsum dolor sit a Captivate your guests with
                        seamls, browsing experience across all devices.
                      </LoremIpsumDolor>
                    </TransferYourBalancesParent>
                  </CardOne>
                  <CardOne>
                    <Icon3>
                      <IconBg3 />
                      <BuildingIcon alt="" src="/building.svg" />
                    </Icon3>
                    <TransferYourBalancesParent>
                      <WithdrawToYour>Withdraw to Your Bank</WithdrawToYour>
                      <LoremIpsumDolor1>
                        Lorem ipsum dolor sit a Captivate your guests with
                        seamls, browsing experience across all devices.
                      </LoremIpsumDolor1>
                    </TransferYourBalancesParent>
                  </CardOne>
                </CardRowOne>
              </CardContainer>
            </CardList>
          </FeatureContent>
          <LineShapeWrapper>
            <LineShapeIcon alt="" src="/line-shape.svg" />
          </LineShapeWrapper>
        </FeatureContainer>
      </FeatureContainerWrapper>
      <LeadContainer>
        <LeadContentParent>
          <LeadContent>
            <BackgroundIcon alt="" src="/background3@2x.png" />
            <Image1>
              <Background />
              <LeadImageContentWrapper>
                <LeadImageContent>
                  <LeadImageWrapper>
                    <LeadImageOptions>
                      <Lead>Lead</Lead>
                      <Qualification>Qualification</Qualification>
                      <Validation>Validation</Validation>
                      <Supply>Supply</Supply>
                    </LeadImageOptions>
                    <WeeklyLeads>
                      <WeeklyLeadChart>
                        <VectorParent>
                          <FrameChild alt="" src="/vector-242.svg" />
                          <ProgressPoint />
                        </VectorParent>
                        <WeeklyLeadDetails>
                          <LeadWeek>
                            <ThisWeek>This week</ThisWeek>
                            <WeekNumber>
                              <ProgressValue>40%</ProgressValue>
                            </WeekNumber>
                          </LeadWeek>
                          <ProgressLabel>10%</ProgressLabel>
                          <ProgressDots>
                            <ProgressDotsChild alt="" src="/vector-243.svg" />
                            <Point />
                            <Point1 />
                            <Point2 />
                          </ProgressDots>
                        </WeeklyLeadDetails>
                      </WeeklyLeadChart>
                    </WeeklyLeads>
                  </LeadImageWrapper>
                  <PlaceholderContentWrapper>
                    <PlaceholderContent>
                      <PlaceholderWrapper>
                        <PlaceholderItems>
                          <Bar>80%</Bar>
                          <Bar1>45%</Bar1>
                          <Bar1>90%</Bar1>
                          <Bar1>60%</Bar1>
                        </PlaceholderItems>
                      </PlaceholderWrapper>
                      <ChartGridIcon alt="" src="/chart-grid.svg" />
                    </PlaceholderContent>
                  </PlaceholderContentWrapper>
                </LeadImageContent>
              </LeadImageContentWrapper>
              <ChartTitle>85</ChartTitle>
              <ChartDescription>50%</ChartDescription>
              <LeadAnalytics>
                <CountContainer>
                  <CountBar />
                  <NumberOfLeads>Number of leads</NumberOfLeads>
                </CountContainer>
                <CountValue>60%</CountValue>
              </LeadAnalytics>
              <SalesChart>
                <BarElement />
                <SaleAnalytics>{`Sale analytics `}</SaleAnalytics>
                <BarChart />
                <BarChart1 />
                <BarChart2 />
                <BarChart3 />
                <BarChart4 />
                <BarChart5 />
                <BarChart6 />
                <BarChart7 />
              </SalesChart>
              <Div>
                <Background1 />
                <TaskAssignedTo>Task Assigned to me</TaskAssignedTo>
                <TaskDetails>
                  <TaskIcons1>
                    <TaskIcons alt="" src="/task-icons.svg" />
                    <FirstIcon>
                      <TaskIcon alt="" src="/task-icon.svg" />
                    </FirstIcon>
                    <TaskIcons alt="" src="/task-icons1.svg" />
                    <SecondIcon>
                      <SecondIconChild alt="" src="/group-2461.svg" />
                    </SecondIcon>
                  </TaskIcons1>
                </TaskDetails>
              </Div>
            </Image1>
          </LeadContent>
          <SoftwareContentWrapper>
            <SoftwareContent>
              <SoftwareDescription>
                <AllocateLeadsAnd>
                  Allocate Leads and Simplify Lead Management
                </AllocateLeadsAnd>
                <UniqueAndPowerful>
                  Unique and powerful suite of software to run your entire
                  business, brought to you by a company with the long term
                  vision to transform the way you work.
                </UniqueAndPowerful>
              </SoftwareDescription>
              <LeadManagementFeatures
                leadGeneration="Lead generation"
                guideHelpsCompaniesIncrea={`Guide Helps Companies Increase Customer & Agent Satisfaction, Also Reducing Support Costs.`}
              />
              <LeadManagementFeatures
                leadGeneration="Team Email"
                guideHelpsCompaniesIncrea="Group Your Contacts By Location, Age, And Almost Any Behavior With Advanced Segmentation Tools."
              />
            </SoftwareContent>
          </SoftwareContentWrapper>
        </LeadContentParent>
      </LeadContainer>
      <ManagementBackground>
        <ManagementBackgroundChild />
        <BackgroundIcon1 alt="" src="/background4.svg" />
      </ManagementBackground>
      <Bg1>
        <Bg />
      </Bg1>
      <TeamContentWrapper>
        <TeamContent>
          <TeamDescription>
            <Text2>
              <Text1>
                <WaysAProject>
                  Ways a project management tool can help your team
                </WaysAProject>
                <UniqueAndPowerful1>
                  Unique and powerful suite of software to run your entire
                  business, brought to you by a company with the long term
                  vision to transform the way you work.
                </UniqueAndPowerful1>
              </Text1>
              <Points>
                <PointContainer>
                  <Icon4>
                    <PointIcon alt="" src="/point-icon.svg" />
                    <PointBackgroundIcon alt="" src="/point-background.svg" />
                  </Icon4>
                  <MarketingHubParent>
                    <CrmSecurity>CRM Security</CrmSecurity>
                    <CardsAndMake>
                      cards and make more sales while chatting
                    </CardsAndMake>
                  </MarketingHubParent>
                </PointContainer>
                <MarketingPoint>
                  <Icon5 alt="" src="/icon.svg" />
                  <MarketingHubParent>
                    <MarketingHub>Marketing Hub</MarketingHub>
                    <CardsAndMake>
                      Show off your goods in elegant product cards and mak.
                    </CardsAndMake>
                  </MarketingHubParent>
                </MarketingPoint>
              </Points>
              <Button1>
                <GetStarted>Get Started</GetStarted>
              </Button1>
            </Text2>
          </TeamDescription>
          <BackgroundParent>
            <BackgroundIcon2 alt="" src="/background5@2x.png" />
            <Image2>
              <Background2 />
              <RectangleParent>
                <FrameItem />
                <FrameInner />
                <Crm>CRM</Crm>
                <ActiveDotParent>
                  <ActiveDot />
                  <Icon6 alt="" src="/7.svg" />
                  <Icon7 alt="" src="/6.svg" />
                  <Icon8 alt="" src="/5.svg" />
                  <Icon9 alt="" src="/4.svg" />
                  <Icon10 alt="" src="/3.svg" />
                  <Icon11 alt="" src="/2.svg" />
                  <Icon12 alt="" src="/1.svg" />
                </ActiveDotParent>
                <Crm1>
                  <FrameItem />
                  <FrameInner />
                  <Crm>CRM</Crm>
                </Crm1>
              </RectangleParent>
            </Image2>
          </BackgroundParent>
        </TeamContent>
      </TeamContentWrapper>
      <FrameComponent />
      <WtsInner>
        <FrameParent3>
          <FrameWrapper>
            <FrameGroup>
              <SellServeAutomateParent>
                <SellServe>Sell | Serve | Automate</SellServe>
                <BoostEnrolmentAndContainer>
                  <BoostEnrolmentAndManage>{`Boost enrolment and
manage student lifecycle `}</BoostEnrolmentAndManage>
                  <BoostEnrolmentAndManage>
                    with our 360° CRM
                  </BoostEnrolmentAndManage>
                </BoostEnrolmentAndContainer>
              </SellServeAutomateParent>
              <YourBusinessEmailAddressParent>
                <YourBusinessEmail>
                  *Your Business Email Address
                </YourBusinessEmail>
                <EmailParent>
                  <Email1>
                    <EmailChild />
                    <Email>Email</Email>
                  </Email1>
                  <Button2>
                    <TryNow>Try Now</TryNow>
                  </Button2>
                </EmailParent>
              </YourBusinessEmailAddressParent>
            </FrameGroup>
          </FrameWrapper>
          <ImageWrapper>
            <Image3>
              <Background3 />
              <MenuIcon alt="" src="/menu1.svg" />
              <FrameContainer>
                <FrameDiv>
                  <FrameParent1>
                    <FrameParent>
                      <DashboardWrapper>
                        <Dashboard>Dashboard</Dashboard>
                      </DashboardWrapper>
                      <Search>
                        <Background4 />
                        <SearchWrapper>
                          <SearchIcon alt="" src="/search1.svg" />
                        </SearchWrapper>
                        <SearchHere>Search here...</SearchHere>
                      </Search>
                    </FrameParent>
                    <ReportContent>
                      <Background5 />
                      <ReportContentInner>
                        <CrmAnalyticalReportParent>
                          <CrmAnalyticalReport>
                            CRM Analytical Report
                          </CrmAnalyticalReport>
                          <ReportDetailsParent>
                            <ReportDetails>
                              <IncomeDataParent>
                                <IncomeData>
                                  <Pattern />
                                </IncomeData>
                                <Income>Income</Income>
                              </IncomeDataParent>
                            </ReportDetails>
                            <ExpenseDataWrapper>
                              <ExpenseData>
                                <IncomeData>
                                  <ExpensesChartIcon />
                                </IncomeData>
                                <Expenses>Expenses</Expenses>
                              </ExpenseData>
                            </ExpenseDataWrapper>
                            <TimeFilter>
                              <AllTime>
                                <Btn />
                                <Monthly>Monthly</Monthly>
                                <TimeDropdown>
                                  <KeyboardArrowDownIcon
                                    alt=""
                                    src="/keyboard-arrow-down.svg"
                                  />
                                </TimeDropdown>
                              </AllTime>
                              <MenuWrapper>
                                <MenuIcon1 alt="" src="/menu2.svg" />
                              </MenuWrapper>
                            </TimeFilter>
                          </ReportDetailsParent>
                        </CrmAnalyticalReportParent>
                      </ReportContentInner>
                      <UserParent>
                        <User1>
                          <UserInitials>
                            <K>30K</K>
                            <K1>15K</K1>
                            <K2>10K</K2>
                            <UserName>
                              <Div1>0</Div1>
                            </UserName>
                          </UserInitials>
                          <GraphWrapper>
                            <Graph>
                              <Line />
                              <Line1 />
                              <Line2 />
                              <Line3 />
                              <PatternIcon alt="" src="/pattern8.svg" />
                              <PatternIcon1 alt="" src="/pattern9.svg" />
                              <HoverIcon alt="" src="/hover.svg" />
                            </Graph>
                          </GraphWrapper>
                        </User1>
                        <MonthsWrapper>
                          <Months>
                            <Jan>Jan</Jan>
                            <MonthLabels>
                              <Feb>Feb</Feb>
                            </MonthLabels>
                            <Mar>Mar</Mar>
                            <MonthLabels1>
                              <Apr>Apr</Apr>
                            </MonthLabels1>
                            <MonthLabels2>
                              <May>May</May>
                            </MonthLabels2>
                            <Jan>Jun</Jan>
                            <MonthLabels3>
                              <Jul>Jul</Jul>
                            </MonthLabels3>
                            <Aug>Aug</Aug>
                          </Months>
                        </MonthsWrapper>
                      </UserParent>
                    </ReportContent>
                  </FrameParent1>
                  <Dashboard1>
                    <Div2>
                      <Background6 />
                      <TaskAndRevenue>
                        <TskReport>Tsk Report</TskReport>
                        <MenuIcons>
                          <MenuIcon1 alt="" src="/menu3.svg" />
                        </MenuIcons>
                      </TaskAndRevenue>
                      <Chart>
                        <Pattern1 />
                        <Pattern2 />
                        <Pattern3 />
                        <Pattern4 />
                        <Pattern5 />
                        <Pattern6 />
                        <Pattern7 />
                        <Pattern8 />
                        <Pattern9 />
                        <Pattern10 />
                        <Pattern11 />
                        <Pattern12 />
                        <Pattern13 />
                        <Pattern14 />
                      </Chart>
                    </Div2>
                    <Div3>
                      <Background7 />
                      <RevenueGraphParent>
                        <RevenueGraph>Revenue Graph</RevenueGraph>
                        <MenuWrapper>
                          <MenuIcon1 alt="" src="/menu4.svg" />
                        </MenuWrapper>
                      </RevenueGraphParent>
                      <Chart>
                        <Pattern15 />
                        <Pattern16 />
                        <Pattern17 />
                        <Pattern18 />
                        <Pattern19 />
                        <Pattern20 />
                        <Pattern21 />
                        <Pattern22 />
                        <Pattern23 />
                        <Pattern24 />
                        <Pattern25 />
                        <Pattern26 />
                        <Pattern27 />
                        <Pattern28 />
                      </Chart>
                    </Div3>
                  </Dashboard1>
                </FrameDiv>
                <Notifications>
                  <Notify>
                    <NotificationIcon>
                      <NotifyIcon alt="" src="/notify1.svg" />
                      <ImageIcon alt="" src="/image2@2x.png" />
                    </NotificationIcon>
                  </Notify>
                  <ActivitiesContent>
                    <Background8 />
                    <ActivityCounter>
                      <Background9 />
                      <B>40%</B>
                    </ActivityCounter>
                    <ProgressBars>
                      <Bars>
                        <ProgressBar>
                          <Background10 />
                          <B1>25%</B1>
                        </ProgressBar>
                        <ProgressBar1>
                          <Background11 />
                          <B2>35%</B2>
                        </ProgressBar1>
                      </Bars>
                      <TransactionList>
                        <Transactions>
                          <Transaction>
                            <TransactionIcons>
                              <Icon13 alt="" src="/icon1.svg" />
                              <Icon14 alt="" src="/icon2.svg" />
                              <Icon15 alt="" src="/icon3.svg" />
                            </TransactionIcons>
                          </Transaction>
                          <TransactionTypes>
                            <Types>
                              <TypeLabels>
                                <Entertainment>Entertainment</Entertainment>
                              </TypeLabels>
                              <ActivityCategoryLabel>40%</ActivityCategoryLabel>
                            </Types>
                            <Types1>
                              <TravelWrapper>
                                <Travel>Travel</Travel>
                              </TravelWrapper>
                              <Div4>35%</Div4>
                            </Types1>
                            <Types2>
                              <ShoppingWrapper>
                                <Shopping>Shopping</Shopping>
                              </ShoppingWrapper>
                              <Div5>25%</Div5>
                            </Types2>
                          </TransactionTypes>
                        </Transactions>
                        <Downloads>
                          <DownloadButtons>
                            <DownlaodIcon alt="" src="/downlaod.svg" />
                            <DownlaodIcon1 alt="" src="/downlaod.svg" />
                            <DownlaodIcon2 alt="" src="/downlaod1.svg" />
                          </DownloadButtons>
                        </Downloads>
                      </TransactionList>
                    </ProgressBars>
                    <DailyActivity>
                      <DailyActivities>Daily Activities</DailyActivities>
                      <MenuWrapper>
                        <MenuIcon2 alt="" src="/menu5.svg" />
                      </MenuWrapper>
                    </DailyActivity>
                  </ActivitiesContent>
                </Notifications>
              </FrameContainer>
            </Image3>
          </ImageWrapper>
          <HeadingParent>
            <Heading>
              <HeadingH2Left2>
                <DecoLineWrapper>
                  <DecoLine />
                </DecoLineWrapper>
                <LeadingCompaniesTrust>
                  Serviço de Marketing
                </LeadingCompaniesTrust>
              </HeadingH2Left2>
            </Heading>
            <Content2>
              <ImageGrid>
                <ImageGridInner>
                  <Image1034Parent>
                    <Image1034Icon alt="" src="/image-1034@2x.png" />
                    <FrameWrapper1>
                      <FrameParent2>
                        <Image1035Wrapper>
                          <Image1035Icon alt="" src="/image-1035@2x.png" />
                        </Image1035Wrapper>
                        <Image1036Icon alt="" src="/image-1036@2x.png" />
                        <Image1025Wrapper>
                          <Image1025Icon alt="" src="/image-1025@2x.png" />
                        </Image1025Wrapper>
                      </FrameParent2>
                    </FrameWrapper1>
                  </Image1034Parent>
                </ImageGridInner>
                <MarketingPack>
                  <Description>
                    <CriaoInovadoraDe>
                      Criação inovadora de Marketing
                    </CriaoInovadoraDe>
                    <AoContratarO>
                      Ao contratar o pack de marketing customizado, fornecemos
                      todo o suporte e o desenvolvimento do que a sua empresa
                      precisa! Confiram a lista de serviço:
                    </AoContratarO>
                  </Description>
                  <Points1>
                    <PointsContent oSeuLogotipoPersonalizado="o seu Logotipo  personalizado" />
                    <PointsContent
                      oSeuLogotipoPersonalizado="Cartão de visita digital"
                      propDisplay="inline-block"
                      propMinWidth="unset"
                    />
                    <PointsContent
                      oSeuLogotipoPersonalizado="Cartão de visita Fisico"
                      propDisplay="inline-block"
                      propMinWidth="unset"
                    />
                    <PointsContent
                      oSeuLogotipoPersonalizado="Merchandise personalizada"
                      propDisplay="inline-block"
                      propMinWidth="unset"
                    />
                    <PointsContent
                      oSeuLogotipoPersonalizado="Capas sociais personalizadas"
                      propDisplay="inline-block"
                      propMinWidth="unset"
                    />
                    <PointsContent
                      oSeuLogotipoPersonalizado="Banners"
                      propDisplay="inline-block"
                      propMinWidth="unset"
                    />
                    <PointsContent
                      oSeuLogotipoPersonalizado="autocolantes personalizados"
                      propDisplay="inline-block"
                      propMinWidth="unset"
                    />
                    <PointsContent
                      oSeuLogotipoPersonalizado="Poster"
                      propDisplay="inline-block"
                      propMinWidth="unset"
                    />
                    <PointsContent
                      oSeuLogotipoPersonalizado="Flyer"
                      propDisplay="inline-block"
                      propMinWidth="unset"
                    />
                    <PointsContent
                      oSeuLogotipoPersonalizado="modelo de Documentos comerciais redigidos por advogados"
                      propDisplay="inline-block"
                      propMinWidth="unset"
                    />
                    <PointsContent
                      oSeuLogotipoPersonalizado="Apresentação Power pont personalizada"
                      propDisplay="inline-block"
                      propMinWidth="unset"
                    />
                    <PointsContent
                      oSeuLogotipoPersonalizado="Apresentação comerciais em word"
                      propDisplay="inline-block"
                      propMinWidth="unset"
                    />
                  </Points1>
                  <Button3 onClick={onButtonContainerClick}>
                    <SaberMais>Saber mais</SaberMais>
                  </Button3>
                  <Button4 onClick={onButtonContainerClick1}>
                    <Contato>Contato</Contato>
                  </Button4>
                </MarketingPack>
              </ImageGrid>
              <Gallery>
                <Images>
                  <Image1027Icon alt="" src="/image-1027@2x.png" />
                  <Image1026Icon alt="" src="/image-1026@2x.png" />
                </Images>
              </Gallery>
            </Content2>
          </HeadingParent>
        </FrameParent3>
      </WtsInner>
      <Testimonials>
        <Description1>
          <LoremIpsumIs>
            Lorem Ipsum is a simply dummy text of an the printing and type
            settings for has been the industry's standard dumy text the ever
            since unknown printer.
          </LoremIpsumIs>
          <GroupIcon alt="" src="/group.svg" />
          <GroupIcon1 alt="" src="/group1.svg" />
          <LoremIpsumIs1>
            Lorem Ipsum is a simply dummy text of an the printing and type
            settings for has been the industry's standard dumy text the ever
            since unknown printer.
          </LoremIpsumIs1>
          <GroupIcon2 alt="" src="/group.svg" />
          <GroupIcon3 alt="" src="/group1.svg" />
          <LoremIpsumIs2>
            Lorem Ipsum is a simply dummy text of an the printing and type
            settings for has been the industry's standard dumy text the ever
            since unknown printer.
          </LoremIpsumIs2>
          <GroupIcon4 alt="" src="/group2.svg" />
          <GroupIcon5 alt="" src="/group3.svg" />
          <Content4>
            <ContentChild />
            <Header>
              <Testimonial>Testimonial</Testimonial>
              <SeeWhatOthersContainer>
                <BoostEnrolmentAndManage>
                  See What Others Have
                </BoostEnrolmentAndManage>
                <BoostEnrolmentAndManage>
                  to Say About Us
                </BoostEnrolmentAndManage>
              </SeeWhatOthersContainer>
            </Header>
            <ItemWrapper>
              <Item>
                <Background12>
                  <BgIcon alt="" src="/bg@2x.png" />
                  <Content3>
                    <Avatar>
                      <AvatarIcon alt="" src="/avatar.svg" />
                      <Details>
                        <JhonSmithParent>
                          <JhonSmith>Jhon Smith</JhonSmith>
                          <WebDeveloper>Web Developer</WebDeveloper>
                        </JhonSmithParent>
                      </Details>
                    </Avatar>
                  </Content3>
                </Background12>
                <Background13>
                  <BgIcon1 alt="" src="/bg1@2x.png" />
                  <BackgroundInner>
                    <AvatarParent>
                      <AvatarIcon1 alt="" src="/avatar1.svg" />
                      <FrameWrapper2>
                        <MdShamimHossainParent>
                          <MdShamimHossain>Md Shamim Hossain</MdShamimHossain>
                          <UiuxDesigner>UI/UX Designer</UiuxDesigner>
                        </MdShamimHossainParent>
                      </FrameWrapper2>
                    </AvatarParent>
                  </BackgroundInner>
                </Background13>
                <Background12>
                  <BgIcon1 alt="" src="/bg@2x.png" />
                  <CardInfo>
                    <AvatarGroup>
                      <AvatarIcon1 alt="" src="/avatar2.svg" />
                      <AuthorInfo>
                        <JesicaLironaParent>
                          <JesicaLirona>Jesica Lirona</JesicaLirona>
                          <FrontEndDeveloper>
                            Front End Developer
                          </FrontEndDeveloper>
                        </JesicaLironaParent>
                      </AuthorInfo>
                    </AvatarGroup>
                  </CardInfo>
                </Background12>
              </Item>
            </ItemWrapper>
          </Content4>
        </Description1>
      </Testimonials>
      <FrameComponent14 />
      <ContactForm />
      <Footer>
        <BackgroundIcon3 alt="" src="/background8@2x.png" />
        <BackgroundIcon4 alt="" src="/background8@2x.png" />
      </Footer>
      <Content1 />
    </WtsRoot>
  );
};

export default WTS;
