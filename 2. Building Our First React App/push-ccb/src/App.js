import "./App.css";
import { useState } from "react";

function App() {
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

  return (
    <div className="app">
      <div class="navbar">
        <h1>Minha Página Web</h1>
        <nav></nav>
      </div>

      <div class="container">
        <div class="formulario">
          <h2>Formulário</h2>
          <form>
            <h1>Dados CCB</h1>
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
            <br />

            <input type="submit" value="Enviar" />
          </form>
        </div>

        <div class="display-text">
          <div class="display">
            <h2>Display 1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam enim
              nostrum excepturi vitae dolor natus nulla. Et suscipit, veniam hic
              dicta quo blanditiis illo sit, omnis molestias qui rerum corrupti?
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
              culpa eligendi natus asperiores alias quo doloribus, dolore omnis
              velit molestiae, laudantium tempore mollitia iure sed, sit
              necessitatibus amet! Nam, ipsa!
            </p>
          </div>

          <div class="display">
            <h2>Display 2</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              incidunt ad facilis reiciendis, architecto nihil, beatae non
              quisquam, natus eius doloribus neque est. Quaerat deserunt esse
              neque repellat cum exercitationem!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;

/**
 *   <body>
    <div class="testbox">
      <form action="/">
        <h1>Workplace Complaint Form</h1>
        <div class="item">
          <p>Your name</p>
          <div>
            <input type="text" name="name" placeholder="First" />
            <input type="text" name="name" placeholder="Last" />
          </div>
        </div>
        <div class="item">
          <p>Your email</p>
          <input type="text" name="name"/>
        </div>
        <div class="item">
          <p>Date of complaint</p>
          <input type="date" name="name" required/>
          <i class="fas fa-calendar-alt"></i>
        </div>
        <div class="item">
          <p>Your department</p>
          <select>
            <option value="">*Please select*</option>
            <option value="A">Department A</option>
            <option value="B">Department B</option>
            <option value="C">Department C</option>
            <option value="D">Department D</option>
            <option value="E">Department E</option>
          </select>
        </div>
        <div class="item">
          <p>Office manager name</p>
          <input type="text" name="name"/>
        </div>
        <div class="item">
          <p>The person(s) involved in this complaint are</p>
          <textarea rows="5"></textarea>
        </div>
        <div class="item">
          <p>Note all relevant dates, places, events, etc. pertaining to the complaint</p>
          <textarea rows="5"></textarea>
        </div>
        <div class="item">
          <p>Signature</p>
          <textarea rows="5"></textarea>
        </div>
        <div class="btn-block">
          <button type="submit" href="/">Send</button>
        </div>
      </form>
    </div>
  </body>
</html>
 */

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
