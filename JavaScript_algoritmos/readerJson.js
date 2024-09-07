// fileUtils.js
const fs = require('fs');
const path = require('path');

/**
 * Lê um arquivo JSON e retorna seu conteúdo.
 * @param {string} fileName - O nome do arquivo JSON.
 * @returns {Promise<object>} - O conteúdo do arquivo JSON.
 */
function readJsonFile(fileName) {
    return new Promise((resolve, reject) => {
        const filePath = path.join(__dirname, fileName);
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return reject(err);
            }
            try {
                const jsonData = JSON.parse(data);
                resolve(jsonData);
            } catch (parseError) {
                reject(parseError);
            }
        });
    });
}

module.exports = {
    readJsonFile
};

// Para utilizar o módulo acima, basta seguir o seguinte template
/* 
const express = require('express');
const { readJsonFile } = require('./fileUtils');
const app = express();
const port = 3000;

// Rota para servir o arquivo JSON
app.get('/data', async (req, res) => {
  try {
    const data = await readJsonFile('data.json');
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  } catch (err) {
    res.status(500).send('Erro ao ler o arquivo JSON');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

*/