// ARQUIVO: utils.js — React, datas, formatação e constantes
const { useState, useEffect } = React;

const hoje = () => new Date().toISOString().slice(0,10);
const dias = n => new Date(Date.now()-n*864e5).toISOString().slice(0,10);
/* ============ UTILITÁRIOS ============ */
const uid = () => Math.random().toString(36).slice(2,9);
const brl = n => Number(n||0).toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const dt = d => d ? d.split("-").reverse().join("/") : "";
const STATUS = ["Recebido","Em análise","Aguardando aprovação","Em reparo","Pronto","Entregue"];
const COR = {"Recebido":"g2","Em análise":"g3","Aguardando aprovação":"g3","Em reparo":"g2","Pronto":"g1","Entregue":"g1"};
const TECNICOS = ["Lucas Andrade","Bruno Reis","Camila Torres"];
const TIPOS = ["Celular","Computador","Notebook","Videogame","Outro eletrônico"];
