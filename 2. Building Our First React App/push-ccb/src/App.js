import "./App.css";
import { useState } from "react";

function FormCcbData({ handleDados, dados }) {
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
        <label>Nome do cliente</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <label>CPF</label>
        <input
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <label>Produto</label>
        <input
          type="text"
          value={produto}
          onChange={(e) => setProduto(e.target.value)}
        />
        <label>Gerente</label>
        <input
          type="text"
          value={gerente}
          onChange={(e) => setGerente(e.target.value)}
        />
        <label>Órgão</label>
        <input
          type="text"
          value={orgao}
          onChange={(e) => setOrgao(e.target.value)}
        />
        <label>Matrícula do cliente</label>
        <input
          type="text"
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)}
        />
        <label>Nº Proposta GCR</label>
        <input
          type="text"
          value={proposta}
          onChange={(e) => setProposta(e.target.value)}
        />
        <label>Data Proposta GCR</label>
        <input
          type="text"
          value={dataInclusao}
          onChange={(e) => setDataInclusao(e.target.value)}
        />
        <label>Valor bruto</label>
        <input
          type="text"
          value={valorBruto}
          onChange={(e) => setValorBruto(e.target.value)}
        />
        <label>Valor Líquido</label>
        <input
          type="text"
          value={valorLiquido}
          onChange={(e) => setValorLiquido(e.target.value)}
        />
        <label>IOF</label>
        <input
          type="text"
          value={iof}
          onChange={(e) => setIof(e.target.value)}
        />
        <label>Seguro</label>
        <input
          type="text"
          value={seguro}
          onChange={(e) => setSeguro(e.target.value)}
        />
        <label>Total das despesas</label>
        <input
          type="text"
          value={despesas}
          onChange={(e) => setDespesas(e.target.value)}
        />
        <label>Percentual IOF</label>
        <input
          type="text"
          value={percenIOF}
          onChange={(e) => setPercenIof(e.target.value)}
        />
        <label>Percentual Seguro</label>
        <input
          type="text"
          value={percenSeguro}
          onChange={(e) => setPercenSeguro(e.target.value)}
        />
        <label>Percentual despesas</label>
        <input
          type="text"
          value={perceDespesas}
          onChange={(e) => setPercenDespesas(e.target.value)}
        />
        <label>Quantidade de parcelas</label>
        <input
          type="text"
          value={nParcelas}
          onChange={(e) => setNParcelas(e.target.value)}
        />
        <label>Data da 1ª parcela</label>
        <input
          type="text"
          value={dataParcela}
          onChange={(e) => setDataParcela(e.target.value)}
        />
        <label>Taxa mensal</label>
        <input
          type="text"
          value={taxaMensal}
          onChange={(e) => setTaxaMensal(e.target.value)}
        />
        <label>CET mensal</label>
        <input
          type="text"
          value={cetMensal}
          onChange={(e) => setCetMensal(e.target.value)}
        />
        <label>CET anual</label>
        <input
          type="text"
          value={cetAnual}
          onChange={(e) => setAnual(e.target.value)}
        />
        <button className="button">Submit</button>
      </form>
    </>
  );
}

function App() {
  const [dados, setDados] = useState({});

  return (
    <div className="app">
      <div className="sidebar">
        <FormCcbData handleDados={setDados} dados={dados} />
      </div>
    </div>
  );
}

export default App;

/**
 * .App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
 */
