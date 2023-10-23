import { SpanText } from "./SpanText";

function ContentRight({ valCCB }) {
  const { nome, cpf, proposta, dataInclusao, seguro, percenSeguro } = valCCB;
  return (
    <div>
      Eu, <SpanText content={nome}>"Nome do cliente"</SpanText>, CPF:
      <SpanText content={cpf}>"000.000.000-00"</SpanText> estou ciente e
      autorizo que, a partir deste aceite eletrônico: (1) a operação vinculada à
      Proposta de Negócio nº{" "}
      <SpanText content={proposta}>"Número da Proposta de Negócio"</SpanText> de
      minha titularidade, celebrada em{" "}
      <SpanText content={dataInclusao}>"Data da inclusão"</SpanText>, será
      efetivada com o seguro BRB Crédito Protegido; (2) em caso de não aceite da
      contratação do BRB Crédito Protegido, a proposta de negócio será cancelada
      por não se enquadrar nas condições de contratação com taxa bonificada; (3)
      seja considerada por mim assinada a proposta de seguro  atrelado à
      Proposta de Negócio acima referenciada. Declaro que tive conhecimento
      prévio e concordo com as condições contratuais do referido Seguro:{" "}
      <a href="https://www.brbseguros.com.br/condicoes-gerais/">
        {" "}
        Condições gerais{" "}
      </a>
      , que possui as seguintes condições: Valor: R$
      <SpanText content={seguro}>"Seguro Prestamista"</SpanText> representando
      <SpanText content={percenSeguro}>
        "Percentual Seguro Prestamista"
      </SpanText>
      % da operação. Coberturas: Pagamento total ou parcial do saldo devedor do
      seu contrato de crédito em caso de morte ou invalidez permanente total por
      acidente.
    </div>
  );
}

export default ContentRight;
