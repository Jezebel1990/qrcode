import chalk from "chalk";
import prompt from "prompt";
import { cpf, cnpj } from "cpf-cnpj-validator";
import promptSchemaDocs from "../../prompts-schema/prompt-schema-docs.js";

async function validateDocs() {
  prompt.get(promptSchemaDocs, (err, result) => {
    if (err) {
      console.log(chalk.red("Erro ao capturar entrada!"));
      return;
    }

    const value = result.document.replace(/\D/g, ""); // remove caracteres não numéricos
    const isCpf = result.type === "1";

    const isValid = isCpf ? cpf.isValid(value) : cnpj.isValid(value);

    if (isValid) {
      console.log(chalk.green("\n✅ Documento válido!\n"));
    } else {
      console.log(chalk.red("\n❌ Documento inválido!\n"));
    }
  });

  prompt.start();
}

export default validateDocs;
