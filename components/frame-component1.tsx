import type { NextPage } from "next";
import { type CSSProperties } from "react";
import styled from "styled-components";

export type FrameComponent1Type = {
  className?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const AcordoDeServios = styled.p`
  margin: 0;
`;
const AcordoDeServiosContainer = styled.div`
  align-self: stretch;
  position: relative;
  mix-blend-mode: normal;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const GalleryCaptionRoot = styled.div<{ propWidth?: CSSProperties["width"] }>`
  width: 514px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3594xl) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  margin-left: -542px;
  text-align: center;
  font-size: var(--h4-size);
  color: var(--color-gray-100);
  font-family: var(--font-league-spartan);
  @media screen and (max-width: 1200px) {
    padding-top: var(--padding-3594xl);
    box-sizing: border-box;
  }
  width: ${(p) => p.propWidth};
`;

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  className = "",
  propWidth,
}) => {
  return (
    <GalleryCaptionRoot propWidth={propWidth} className={className}>
      <AcordoDeServiosContainer>
        <AcordoDeServios>Acordo de serviços</AcordoDeServios>
        <AcordoDeServios>Acordo de não concorrência</AcordoDeServios>
        <AcordoDeServios>Terminação do contrato</AcordoDeServios>
        <AcordoDeServios>Acordo de Marketing</AcordoDeServios>
        <AcordoDeServios>Acordo de Vendas</AcordoDeServios>
        <AcordoDeServios>Acordo Mútuo de não divulgação</AcordoDeServios>
        <AcordoDeServios>Alteração ao Contrato</AcordoDeServios>
        <AcordoDeServios>Carta de intenções</AcordoDeServios>
        <AcordoDeServios>Acordo de joint venture</AcordoDeServios>
        <AcordoDeServios>
          Formulário de Autorização e liberação de depoimento do cliente
        </AcordoDeServios>
        <AcordoDeServios>Liberação geral de responsabilidade</AcordoDeServios>
        <AcordoDeServios>Aviso de violação de contrato</AcordoDeServios>
        <AcordoDeServios>Extensão do contrato</AcordoDeServios>
        <AcordoDeServios>
          Acordo de não divulgação do fornecedor
        </AcordoDeServios>
      </AcordoDeServiosContainer>
    </GalleryCaptionRoot>
  );
};

export default FrameComponent1;
