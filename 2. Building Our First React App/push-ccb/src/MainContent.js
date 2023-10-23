import React from "react";
import { useState } from "react";
import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";

export function MainContent() {
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
  const valoresParaCCB = {
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
  };

  function handleSubmit() {
    alert(nome);
  }

  return (
    <div className="main-content">
      <div class="container">
        <div class="formulario">
          <div className="item">
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome do cliente"
            />
          </div>

          <div className="item">
            <input
              type="text"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              placeholder="CPF"
            />
          </div>

          <div className="item">
            <input
              type="text"
              value={conta}
              onChange={(e) => setConta(e.target.value)}
              placeholder="conta"
            />
          </div>

          <div className="item">
            <input
              type="text"
              value={produto}
              onChange={(e) => setProduto(e.target.value)}
              placeholder="Produto"
            />
          </div>

          <div className="item">
            <input
              type="text"
              value={gerente}
              onChange={(e) => setGerente(e.target.value)}
              placeholder="Gerente"
            />
          </div>

          <div className="item">
            <input
              type="text"
              value={nAgencia}
              onChange={(e) => setNAgencia(e.target.value)}
              placeholder="Número da agência"
            />
          </div>

          <div className="item">
            <input
              type="text"
              value={orgao}
              onChange={(e) => setOrgao(e.target.value)}
              placeholder="Órgão"
            />
          </div>

          <div className="item">
            <input
              type="text"
              value={matricula}
              onChange={(e) => setMatricula(e.target.value)}
              placeholder="Matrícula do cliente"
            />
          </div>

          <div className="item">
            <input
              type="text"
              value={proposta}
              onChange={(e) => setProposta(e.target.value)}
              placeholder="Nº Proposta GCR"
            />
          </div>

          <div className="item">
            <input
              type="text"
              value={dataInclusao}
              onChange={(e) => setDataInclusao(e.target.value)}
              placeholder="Data Proposta dd/mm/aa"
            />
          </div>

          <div className="item">
            <input
              type="number"
              step="0.01"
              value={valorBruto}
              onChange={(e) => setValorBruto(e.target.value)}
              placeholder="Valor bruto"
            />
          </div>

          <div className="item">
            <input
              type="text"
              value={valorLiquido}
              onChange={(e) => setValorLiquido(e.target.value)}
              placeholder="Valor Líquido"
            />
          </div>

          <div className="item">
            <input
              type="text"
              value={iof}
              onChange={(e) => setIof(e.target.value)}
              placeholder="IOF"
            />
          </div>

          <div className="item">
            <input
              type="text"
              value={seguro}
              onChange={(e) => setSeguro(e.target.value)}
              placeholder="Seguro"
            />
          </div>

          <div className="item">
            <input
              type="text"
              value={despesas}
              onChange={(e) => setDespesas(e.target.value)}
              placeholder="Total das despesas"
            />
          </div>

          <div className="item">
            <input
              type="text"
              value={percenIOF}
              onChange={(e) => setPercenIof(e.target.value)}
              placeholder="Percentual IOF"
            />
          </div>

          <div className="item">
            <input
              type="text"
              value={percenSeguro}
              onChange={(e) => setPercenSeguro(e.target.value)}
              placeholder="Percentual Seguro"
            />
          </div>

          <div className="item">
            <input
              type="text"
              value={perceDespesas}
              onChange={(e) => setPercenDespesas(e.target.value)}
              placeholder="Percentual despesas"
            />
          </div>

          <div className="item">
            <input
              type="text"
              value={nParcelas}
              onChange={(e) => setNParcelas(e.target.value)}
              placeholder="Quantidade de parcelas"
            />
          </div>

          <div className="item">
            <input
              type="text"
              value={parcela}
              onChange={(e) => setParcela(e.target.value)}
              placeholder="Número de parcelas"
            />
          </div>

          <div className="item">
            <input
              type="text"
              value={dataParcela}
              onChange={(e) => setDataParcela(e.target.value)}
              placeholder="Data da 1ª parcela"
            />
          </div>

          <div className="item">
            <input
              type="text"
              value={taxaMensal}
              onChange={(e) => setTaxaMensal(e.target.value)}
              placeholder="Taxa mensal"
            />
          </div>
          <div className="item">
            <input
              type="text"
              value={taxaAnual}
              onChange={(e) => setTaxaAnual(e.target.value)}
              placeholder="Taxa anual"
            />
          </div>

          <div className="item">
            <input
              type="text"
              value={taxaMensalSR}
              onChange={(e) => setTaxaMensalSR(e.target.value)}
              placeholder="Taxa mensal S/R"
            />
          </div>
          <div className="item">
            <input
              type="text"
              value={taxaAnualSR}
              onChange={(e) => setTaxaAnualSR(e.target.value)}
              placeholder="Taxa anual S/R"
            />
          </div>

          <div className="item">
            <input
              type="text"
              value={cetMensal}
              onChange={(e) => setCetMensal(e.target.value)}
              placeholder="CET mensal"
            />
          </div>
          <div className="item">
            <input
              type="text"
              value={cetAnual}
              onChange={(e) => setAnual(e.target.value)}
              placeholder="CET anual"
            />
          </div>
          <br />
        </div>
      </div>
      <ContentLeft valCCB={valoresParaCCB}></ContentLeft>
      <ContentRight valCCB={valoresParaCCB} />
    </div>
  );
}
