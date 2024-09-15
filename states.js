const fatuEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
  };
  
  const valorTotal = Object.values(fatuEstado).reduce((acc, curr) => acc + curr, 0);
  
  for (const estado in fatuEstado) {
    const percentual = (fatuEstado[estado] / valorTotal) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
  }
  