import React from "react";
import { SpanText } from "./SpanText";

function ContentLeft({ valCCB }) {
  const {
    nome,
    cpf,
    conta,
    produto,
    gerente,
    nAgencia,
    orgao,
    matricula,
    proposta,
    dataInclusao,
    valorBruto,
    valorLiquido,
    iof,
    seguro,
    despesas,
    percenIOF,
    percenSeguro,
    perceDespesas,
    dataParcela,
    nParcelas,
    parcela,
    taxaMensal,
    taxaAnual,
    taxaMensalSR,
    taxaAnualSR,
    cetMensal,
    cetAnual,
  } = valCCB;
  return (
    <div className="left-content">
      Eu, <SpanText content={nome}>"Nome do cliente"</SpanText>, CPF:{" "}
      <SpanText content={cpf}>"000.000.000-00"</SpanText>, titular da conta
      corrente nº <SpanText content={conta}>"123.456789-0"</SpanText>, autorizo
      a liberação de <SpanText content={produto}>Produto de crédito</SpanText>,
      firmada na Agência nº{" "}
      <SpanText content={nAgencia}>"Número da agência"</SpanText>, Gerente{" "}
      <SpanText content={gerente}>"Nome do Gerente"</SpanText>, por meio de nova
      Proposta de Negócio nº{" "}
      <SpanText content={proposta}>"Número da Proposta de Negócio"</SpanText>,
      de minha titularidade, celebrada em{" "}
      <SpanText content={dataInclusao}>"Data da inclusão"</SpanText>. Estou
      ciente e concordo que, a partir deste aceite eletrônico, o contrato estará
      vinculado à minha matrícula nº
      <SpanText content={matricula}>"matricula do cliente"</SpanText>, do órgão{" "}
      <SpanText content={orgao}>"orgão do cliente"</SpanText>, e será efetivado
      com as seguintes condições: Valor Bruto: R${" "}
      <SpanText content={valorBruto}>"Valor Bruto"</SpanText>; IOF: R${" "}
      <SpanText content={iof}>"IOF"</SpanText>, representando{" "}
      <SpanText content={percenIOF}>"percenIOF"</SpanText>% da operação; Seguro
      Prestamista: R$ <SpanText content={seguro}>"Seguro Prestamista"</SpanText>
      , representando{" "}
      <SpanText content={percenSeguro}>
        "Percentual Seguro Prestamista"
      </SpanText>
      % da operação; Total das despesas vinculadas à concessão de crédito: R${" "}
      <SpanText content={despesas}>"Total de Despesas"</SpanText>, representando{" "}
      <SpanText content={perceDespesas}>"Percentual de Despesas"</SpanText>% da
      operação; Valor líquido: R${" "}
      <SpanText content={valorLiquido}>"Valor Líquido"</SpanText>; Quantidade de
      parcelas:{" "}
      <SpanText content={nParcelas}>"Quantidade de Parcelas"</SpanText>; Valor
      da parcela: R$ <SpanText content={parcela}>"Valor da Parcela"</SpanText>;
      Taxa mensal: <SpanText content={taxaMensal}>"Taxa Mensal"</SpanText>%;
      Taxa anual do contrato:{" "}
      <SpanText content={taxaAnual}>"Taxa Anual"</SpanText>%; CET mensal do
      contrato:
      <SpanText content={cetMensal}>"CET Mensal"</SpanText>%; CET anual do
      contrato: <SpanText content={cetAnual}>"CET Anual"</SpanText>%, com
      vencimento da primeira parcela em{" "}
      <SpanText content={dataParcela}>"Data Primeira Parcela"</SpanText>. Estou
      ciente que as condições de contratações referem-se à taxa bonificada pelo
      Seguro BRB Crédito Protegido e, caso tenha optado pela não contratação do
      seguro, as novas condições da proposta seriam: taxa mensal:{" "}
      <SpanText content={taxaMensalSR}>"Taxa Mensal S/R"</SpanText>%; taxa
      anual:
      <SpanText content={taxaAnualSR}>"Taxa anual S/R"</SpanText>%; CET mensal:
      <SpanText content={taxaMensalSR * 1.2}>"CET Mensal S/R"</SpanText>%; CET
      anual: <SpanText content={taxaAnualSR * 1.2}>"CET Anual S/R"</SpanText>%.
      Conforme resolução BACEN nº 4.790 de 26 de março de 2020 art. 4º, eu,
      <SpanText content={nome}>"Nome do Cliente"</SpanText>, CPF nº{" "}
      <SpanText content={cpf}>"CPF"</SpanText>, autorizo inequivocamente, por
      prazo indeterminado, o débito do contrato nº{" "}
      <SpanText content={proposta}>"Número Proposta de Negócio"</SpanText> na
      conta nº
      <SpanText content={conta}>"Número da Conta"</SpanText>, sob as seguintes
      condições: 1) Inclusive sobre limite de crédito em conta; e 2) Decorrente
      de obrigação vencida, inclusive por meio de lançamentos parciais.
      Cláusulas Gerais do Contrato de Abertura de Crédito Parcelado e seus
      aditivos registrados no Cartório do 2º Ofício de Registro de Títulos e
      Documentos de Brasília (DF), em 03/03/2021, sob o microfilme nº
      0004508852.
    </div>
  );
}

export default ContentLeft;

/**
 * 
 * const [taxaMensalSR, setTaxaMensalSR] = useState("");
  const [taxaAnualSR, setTaxaAnualSR] = useState("");
 */
