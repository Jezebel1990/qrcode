import chalk from "chalk";

const promptSchemaQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QR CODE"),
    },
    {
        name: "type",
        description: chalk.yellow(
            "Escolha entre o tipo de QRCode\n" +  
            "(1- NORMAL\n" +   
            "(2- TERMINAL\n"
        ),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true,
    },
];

export default promptSchemaQRCode;