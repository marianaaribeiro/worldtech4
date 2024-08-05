import type { NextPage } from "next";
import styled from "styled-components";

export type LeadContainerType = {
  className?: string;
};

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
const WhatMakesUs = styled.div`
  width: 645px;
  position: relative;
  font-size: var(--header-2-size);
  line-height: 54px;
  font-weight: 600;
  color: var(--dark);
  display: inline-block;
`;
const GreatFeaturesParent = styled.div`
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
  width: 250px;
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
  gap: var(--gap-sm);
`;
const IconParent = styled.div`
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
  width: 208px;
  position: relative;
  font-weight: 600;
  display: inline-block;
  z-index: 2;
`;
const FrameGroup = styled.div`
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
  width: 218px;
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
  padding: var(--padding-smi) var(--padding-mini);
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
const WithdrawToYourBankParent = styled.div`
  width: 308px;
  height: 128px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini);
`;
const FrameParent = styled.div`
  width: 646px;
  height: 622px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-31xl);
`;
const FeaturesGrid = styled.div`
  height: 685px;
  width: 646px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-44xl) 0px 0px;
  box-sizing: border-box;
`;
const ImagesParent = styled.div`
  width: 1876px;
  height: 816px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-275xl);
`;
const LineShapeIcon = styled.img`
  height: 1px;
  width: 1320px;
  position: relative;
`;
const Separator = styled.div`
  width: 1321px;
  height: 1px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
`;
const ImageRow = styled.div`
  height: 894px;
  width: 1876px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-58xl);
`;
const LeadContainerRoot = styled.div`
  width: 2049px;
  height: 1247px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-154xl) var(--padding-334xl) 0px;
  box-sizing: border-box;
  text-align: left;
  font-size: var(--h4-size);
  color: var(--dark);
  font-family: var(--short-title);
`;

const LeadContainer: NextPage<LeadContainerType> = ({ className = "" }) => {
  return (
    <LeadContainerRoot className={className}>
      <ImageRow>
        <ImagesParent>
          <ImagesIcon alt="" src="/images1@2x.png" />
          <FeaturesGrid>
            <FrameParent>
              <GreatFeaturesParent>
                <GreatFeatures>Great Features</GreatFeatures>
                <WhatMakesUs>What Make’s Us Special</WhatMakesUs>
              </GreatFeaturesParent>
              <FrameGroup>
                <IconParent>
                  <Icon>
                    <IconBg />
                    <Money1Icon alt="" src="/money-1.svg" />
                  </Icon>
                  <TransferYourBalancesParent>
                    <TransferYourBalances>
                      Transfer Your Balances
                    </TransferYourBalances>
                    <LoremIpsumDolor>
                      Lorem ipsum dolor sit a Captivate your guests with seamls,
                      browsing experience across all devices.
                    </LoremIpsumDolor>
                  </TransferYourBalancesParent>
                </IconParent>
                <IconParent>
                  <Icon1>
                    <IconBg1 />
                    <CreditCardIcon alt="" src="/creditcard.svg" />
                  </Icon1>
                  <TransferYourBalancesParent>
                    <RequestAPayment>Request a Payment</RequestAPayment>
                    <LoremIpsumDolor>
                      Lorem ipsum dolor sit a Captivate your guests with seamls,
                      browsing experience across all devices.
                    </LoremIpsumDolor>
                  </TransferYourBalancesParent>
                </IconParent>
              </FrameGroup>
              <FrameGroup>
                <IconParent>
                  <Icon2>
                    <IconBg2 />
                    <MoneyGrowthIcon alt="" src="/moneygrowth.svg" />
                  </Icon2>
                  <TransferYourBalancesParent>
                    <ReceivingPayments>Receiving Payments</ReceivingPayments>
                    <LoremIpsumDolor>
                      Lorem ipsum dolor sit a Captivate your guests with seamls,
                      browsing experience across all devices.
                    </LoremIpsumDolor>
                  </TransferYourBalancesParent>
                </IconParent>
                <IconParent>
                  <Icon3>
                    <IconBg3 />
                    <BuildingIcon alt="" src="/building.svg" />
                  </Icon3>
                  <WithdrawToYourBankParent>
                    <WithdrawToYour>Withdraw to Your Bank</WithdrawToYour>
                    <LoremIpsumDolor1>
                      Lorem ipsum dolor sit a Captivate your guests with seamls,
                      browsing experience across all devices.
                    </LoremIpsumDolor1>
                  </WithdrawToYourBankParent>
                </IconParent>
              </FrameGroup>
            </FrameParent>
          </FeaturesGrid>
        </ImagesParent>
        <Separator>
          <LineShapeIcon alt="" src="/line-shape.svg" />
        </Separator>
      </ImageRow>
    </LeadContainerRoot>
  );
};

export default LeadContainer;
