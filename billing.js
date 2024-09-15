const fs = require('fs');

fs.readFile('fat.json', 'utf8', (err, data) => {
  if (err) {
    console.error('error:', err);
    return;
  }

  const faturamento = JSON.parse(data);
  
  let totalFatu = 0;
  let faturamentoDia = 0;
  let menorFaturamento = Infinity;
  let maiorFaturamento = -Infinity;

  faturamento.forEach(dia => {
    if (dia.faturamento > 0) {
      faturamentoDia++;
      totalFatu += dia.faturamento;

      if (dia.faturamento < menorFaturamento) {
        menorFaturamento = dia.faturamento;
      }

      if (dia.faturamento > maiorFaturamento) {
        maiorFaturamento = dia.faturamento;
      }
    }
  });

  const mediaFaturamento = totalFatu / faturamentoDia;
  let diaMedAcima = faturamento.filter(dia => dia.faturamento > mediaFaturamento).length;

  console.log(`menor faturamento: R$${menorFaturamento}`);
  console.log(`maior faturamento: R$${maiorFaturamento}`);
  console.log(`acima de media: ${diaMedAcima}`);
});
