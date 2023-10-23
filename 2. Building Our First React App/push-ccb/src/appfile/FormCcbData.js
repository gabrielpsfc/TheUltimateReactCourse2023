import { useState } from "react";
import PropTypes from "prop-types";

FormCcbData.propTypes = {
  handleDados: PropTypes.func,
  dados: PropTypes.object,
};

export function FormCcbData({ handleDados, dados }) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [produto, setProduto] = useState("");
  const [gerente, setGerente] = useState("");
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
  const [taxaMensal, setTaxaMensal] = useState("");
  const [cetMensal, setCetMensal] = useState("");
  const [cetAnual, setAnual] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const dadosCCB = {
      nome,
      cpf,
      produto,
      gerente,
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
      nParcelas,
      taxaMensal,
      cetMensal,
      cetAnual,
    };

    handleDados(dadosCCB);
    console.log(dados.nome);
  }

  return (
    <>
      <h1>Dados CCB</h1>
      <form className="form-add-friend" onSubmit={(e) => handleSubmit(e)}>
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
            type="date"
            value={dataInclusao}
            onChange={(e) => setDataInclusao(e.target.value)}
            placeholder="Data Proposta GCR dd/mm/aa"
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
        <button className="button">Submit</button>
      </form>
    </>
  );
}
