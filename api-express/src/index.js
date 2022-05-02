const express = require('express');
var XLSX = require('xlsx-extract').XLSX;

const app = express();
app.use(express.json());
/*
    Criar Classe rotas com os numeros de idas no dia. E resetar esses valores no dia seguinte.

*/
const content = []
const data = new XLSX().extract('rotas.xlsx', { sheet_id: 0 });

data.on('row', (row ) => {
    if (row[2] === 2022115181) { console.log(row[1]); }
    //   console.log(row)

}).on('row',(row) => content.push(row))


app.get("/courses", (request, response) => {
    const query = request.query;
    console.log(query)
    return response.json(content[2]);
})

//Inicia o servidor na porta localhost:{porta escolhida}
app.listen(3333);
