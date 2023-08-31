export function TextCCB({ data = { name: "name", id: "id" } }) {
  return (
    <div>
      {Object.values(data).map((s) => (
        <p>{s}</p>
      ))}
      Eu, Fulano da Silva, CPF: 111.000.000-00, titular da conta corrente nº
      123.456789-0, autorizo a liberação de BRB Parc Refin (348), firmada na
      Agência nº 043, Gerente Ciclano de Sousa, por meio de nova Proposta de
      Negócio nº 05434852, de minha titularidade, celebrada em 14/02/2023. Estou
      ciente e concordo que, a partir deste aceite eletrônico, o contrato estará
      vinculado à minha matrícula nº 0113458-9, do órgão CBMDF, e será efetivado
      com as seguintes condições: Valor Bruto: R$ 8.160,66; IOF: R$ 216,62,
      representando 2,65% da operação; Seguro Prestamista: R$ 144,04,
      representando 1,77% da operação; Total das despesas vinculadas à concessão
      de crédito: R$ 360,66, representando 4,42% da operação; Valor líquido: R$
      7.800,00; Quantidade de parcelas: 48; Valor da parcela: R$ 100,00; Taxa
      mensal: 1,69%; Taxa anual do contrato: 22,61%; CET mensal do contrato:
      2,19%; CET anual do contrato: 29,70%, com vencimento da primeira parcela
      em 05/04/2023. Estou ciente que as condições de contratações referem-se à
      taxa bonificada pelo Seguro BRB Crédito Protegido e, caso tenha optado
      pela não contratação do seguro, as novas condições da proposta seriam:
      taxa mensal: 3,38%; taxa anual: 45,23%; CET mensal: 3,55%; CET anual:
      52,05%. Conforme resolução BACEN nº 4.790 de 26 de março de 2020 art. 4º,
      eu, Fulano da Silva, CPF nº 111.000.000-00, autorizo inequivocamente, por
      prazo indeterminado, o débito do contrato nº 05434852 na conta nº
      123.456789-0, sob as seguintes condições: 1) Inclusive sobre limite de
      crédito em conta; e 2) Decorrente de obrigação vencida, inclusive por meio
      de lançamentos parciais. Cláusulas Gerais do Contrato de Abertura de
      Crédito Parcelado e seus aditivos registrados no Cartório do 2º Ofício de
      Registro de Títulos e Documentos de Brasília (DF), em 03/03/2021, sob o
      microfilme nº 0004508852.
    </div>
  );
}
