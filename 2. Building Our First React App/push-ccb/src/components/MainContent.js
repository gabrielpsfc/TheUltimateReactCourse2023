import React from "react";
import { useState } from "react";
import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";
import ImputDiv from "./ImputDiv";
import useValidCPF from "../hooks/useValidCpf";

export function MainContent({ redirecionamento }) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [conta, setConta] = useState("");
  const [produto, setProduto] = useState("");
  const [gerente, setGerente] = useState("");
  const [nAgencia, setNAgencia] = useState("");
  const [orgao, setOrgao] = useState("");
  const [matricula, setMatricula] = useState("");
  const [proposta, setProposta] = useState("");
  const [dataInclusao, setDataInclusao] = useState("");
  const [valorBruto, setValorBruto] = useState("");
  const [valorLiquido, setValorLiquido] = useState("");
  const [iof, setIof] = useState("");
  const [seguro, setSeguro] = useState("");
  const [despesas, setDespesas] = useState("");
  const [percenIOF, setPercenIof] = useState("");
  const [percenSeguro, setPercenSeguro] = useState("");
  const [perceDespesas, setPercenDespesas] = useState("");
  const [dataParcela, setDataParcela] = useState("");
  const [nParcelas, setNParcelas] = useState("");
  const [parcela, setParcela] = useState("");
  const [taxaMensal, setTaxaMensal] = useState("");
  const [taxaAnual, setTaxaAnual] = useState("");
  const [taxaMensalSR, setTaxaMensalSR] = useState("");
  const [taxaAnualSR, setTaxaAnualSR] = useState("");
  const [cetMensal, setCetMensal] = useState("");
  const [cetAnual, setAnual] = useState("");

  const [valoresParaCCB, setValoresParaCCB] = useState({});

  function HandleSubmit(e) {
    e.preventDefault();

    const NovosValoresParaCCB = {
      nome,
      cpf: useValidCPF(cpf) ? cpf : "CPF inválido",
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
    };

    setValoresParaCCB(NovosValoresParaCCB);
    console.log(valoresParaCCB);
  }
  return (
    <div className="main-content">
      <div className="container">
        <div className="formulario">
          <form onSubmit={(e) => HandleSubmit(e)}>
            <ImputDiv set={setNome} state={nome}>
              Nome do Cliente
            </ImputDiv>
            <ImputDiv set={setCpf} state={cpf}>
              CPF
            </ImputDiv>
            <ImputDiv set={setConta} state={conta}>
              conta
            </ImputDiv>
            <ImputDiv set={setProduto} state={produto}>
              Produto
            </ImputDiv>
            <ImputDiv set={setGerente} state={gerente}>
              Gerente
            </ImputDiv>
            <ImputDiv set={setNAgencia} state={nAgencia}>
              Número da agência
            </ImputDiv>
            <ImputDiv set={setOrgao} state={orgao}>
              Órgão
            </ImputDiv>
            <ImputDiv set={setMatricula} state={matricula}>
              Matrícula do cliente
            </ImputDiv>
            <ImputDiv set={setProposta} state={proposta}>
              Nº Proposta GCR
            </ImputDiv>
            <ImputDiv set={setDataInclusao} state={dataInclusao}>
              Data Proposta dd/mm/aa
            </ImputDiv>
            <ImputDiv set={setValorBruto} state={valorBruto}>
              Valor bruto
            </ImputDiv>
            <ImputDiv set={setValorLiquido} state={valorLiquido}>
              Valor Líquido
            </ImputDiv>
            <ImputDiv set={setIof} state={iof}>
              IOF
            </ImputDiv>
            <ImputDiv set={setSeguro} state={seguro}>
              Seguro
            </ImputDiv>
            <ImputDiv set={setDespesas} state={despesas}>
              Total das despesas
            </ImputDiv>
            <ImputDiv set={setPercenIof} state={percenIOF}>
              Percentual IOF
            </ImputDiv>
            <ImputDiv set={setPercenSeguro} state={percenSeguro}>
              Percentual Seguro
            </ImputDiv>
            <ImputDiv set={setPercenDespesas} state={perceDespesas}>
              Percentual despesas
            </ImputDiv>
            <ImputDiv set={setNParcelas} state={nParcelas}>
              Quantidade de parcelas
            </ImputDiv>
            <ImputDiv set={setParcela} state={parcela}>
              Valor da parcela
            </ImputDiv>
            <ImputDiv set={setDataParcela} state={dataParcela}>
              Data da 1ª parcela
            </ImputDiv>
            <ImputDiv set={setTaxaMensal} state={taxaMensal}>
              Taxa mensal
            </ImputDiv>
            <ImputDiv set={setTaxaAnual} state={taxaAnual}>
              Taxa anual
            </ImputDiv>
            <ImputDiv set={setTaxaMensalSR} state={taxaMensalSR}>
              Taxa mensal S/R
            </ImputDiv>
            <ImputDiv set={setTaxaAnualSR} state={taxaAnualSR}>
              Taxa anual S/R
            </ImputDiv>
            <ImputDiv set={setCetMensal} state={cetMensal}>
              CET mensal
            </ImputDiv>
            <ImputDiv set={setAnual} state={cetAnual}>
              CET anual
            </ImputDiv>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <ContentLeft valCCB={valoresParaCCB}></ContentLeft>
      <ContentRight valCCB={valoresParaCCB} />
    </div>
  );
}
