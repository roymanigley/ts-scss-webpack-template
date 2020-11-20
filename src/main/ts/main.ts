const outputElement: Element | null = document.getElementById('output');
if (outputElement)
  outputElement.innerHTML = `its ${new Date().toISOString()}`;