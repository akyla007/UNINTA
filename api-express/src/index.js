const express = require('express');
var XLSX = require('xlsx-extract').XLSX;

const app = express();
app.use(express.json());
/*
    Criar Classe rotas com os numeros de idas no dia. E resetar esses valores no dia seguinte.

*/
let content = []

const validate = async (number) => {
    const data = new XLSX().extract('rotas.xlsx', { sheet_id: 0 });
    data.on('row', (row) => {
        if (row[2] === parseInt(number)) {
            content.push(row);
            console.log(content + "valor do array")
            return true
        }
        //   console.log(row)
        // 2022115181
    })
}

// data.on('row', (row) => {
//     if (row[2] === 2022115181) { console.log(row[1]); }
//     //   console.log(row)

// }).on('row', (row) => content.push(row))


app.post("/student", (request, response) => {
    const register = request.query;
    if (content !== null) {
        content = [];
    }
    if(validate(register.register)){
        return response.status(200).send({ message: "Sucesso!" })
    }
    // if(content[2] === register){
    //     return response.json(content);
    // }

    return response.status(400).send({ message: "Matrícula Errada." })
})

app.get("/students", (request, response) => {
    console.log(content)
    return response.json(content);
})

//Inicia o servidor na porta localhost:{porta escolhida}
app.listen(3333);
