var tratamentos = (function(){
  var t = {}

  var listaTratamentos = [
    {
      "codigo": 1,
      "descricao": "Tratamento para a calvice",
      "duracao": "30 dias"
    },
    {
      "codigo": 2,
      "descricao": "Tratamento para a gripe",
      "duracao": "7 dias"
    },
    {
      "codigo": 3,
      "descricao": "Tratamento para o cancêr",
      "duracao": "6 meses"
    },
    {
      "codigo": 4,
      "descricao": "Tratamento de rompimento de LCA",
      "duracao": "6 meses"
    }
  ]

  t.all = function(){
    return listaTratamentos;
  }

  return t;
}());