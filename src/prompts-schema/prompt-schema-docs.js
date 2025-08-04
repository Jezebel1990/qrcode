import chalk from "chalk";

const promptSchemaDocs = [
  {
    name: "type",
    description: chalk.yellow.bold(
      "Escolha o tipo de documento:\n" +  
      "(1- CPF\n" +  
      "(2- CNPJ\n"
    ),
    pattern: /^[1-2]+$/, // aceita apenas 1 ou 2
    message: chalk.red.italic("Digite apenas 1 (CPF) ou 2 (CNPJ)"),
    required: true,
  },
  {
    name: "document",
    description: chalk.yellow.bold("Digite o número do documento"),
    pattern: /^[0-9 .-]+$/, // só aceita números e caracteres de formatação
    message: chalk.red.italic("Digite apenas números válidos (sem letras)"),
    required: true,
  },
];

export default promptSchemaDocs;
