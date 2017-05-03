var tratamentos = (function(){
  var t = {}

  var listaTratamentos = [
    {
      "codigo": 1,
      "descricao": "Tratamento de Gastrite",
      "duracao": "180 dias"
    },
    {
      "codigo": 2,
      "descricao": "Tratamento para a gripe",
      "duracao": "5 dias"
    },
    {
      "codigo": 3,
      "descricao": "Fisioterapia",
      "duracao": "6 meses"
    },
    {
      "codigo": 4,
      "descricao": "Tratamento do coração",
      "duracao": "6 meses"
    }
  ]

  t.all = function(){
    return listaTratamentos;
  }

  return t;
}());