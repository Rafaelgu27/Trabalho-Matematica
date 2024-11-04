function cilindro(r, h) {
    const pi = Math.PI;
    const areaLateral = 2 * pi * r * h;
    const areaTotal = 2 * pi * r * (r + h);
    const volume = pi * r ** 2 * h;
    return { areaLateral, areaTotal, volume };
}

function calcularCilindro() {
    const r = parseFloat(document.getElementById("cilindroR").value);
    const h = parseFloat(document.getElementById("cilindroH").value);
    const resultado = cilindro(r, h);
    document.getElementById("resultadoCilindro").innerText =
        `Área Lateral: ${resultado.areaLateral.toFixed(2)}, Área Total: ${resultado.areaTotal.toFixed(2)}, Volume: ${resultado.volume.toFixed(2)}`;
}

function cone(r, h) {
    const pi = Math.PI;
    const areaLateral = pi * r * Math.sqrt(r ** 2 + h ** 2);
    const areaTotal = pi * r * (r + Math.sqrt(r ** 2 + h ** 2));
    const volume = (1 / 3) * pi * r ** 2 * h;
    return { areaLateral, areaTotal, volume };
}

function calcularCone() {
    const r = parseFloat(document.getElementById("coneR").value);
    const h = parseFloat(document.getElementById("coneH").value);
    const resultado = cone(r, h);
    document.getElementById("resultadoCone").innerText =
        `Área Lateral: ${resultado.areaLateral.toFixed(2)}, Área Total: ${resultado.areaTotal.toFixed(2)}, Volume: ${resultado.volume.toFixed(2)}`;
}

function troncoCone(r1, r2, h) {
    const pi = Math.PI;
    const areaLateral = pi * (r1 + r2) * Math.sqrt((r2 - r1) ** 2 + h ** 2);
    const areaTotal = areaLateral + pi * (r1 ** 2 + r2 ** 2);
    const volume = (1 / 3) * pi * h * (r1 ** 2 + r2 ** 2 + r1 * r2);
    return { areaLateral, areaTotal, volume };
}

function calcularTroncoCone() {
    const r1 = parseFloat(document.getElementById("troncoR1").value);
    const r2 = parseFloat(document.getElementById("troncoR2").value);
    const h = parseFloat(document.getElementById("troncoH").value);
    const resultado = troncoCone(r1, r2, h);
    document.getElementById("resultadoTroncoCone").innerText =
        `Área Lateral: ${resultado.areaLateral.toFixed(2)}, Área Total: ${resultado.areaTotal.toFixed(2)}, Volume: ${resultado.volume.toFixed(2)}`;
}

function esfera(r) {
    const pi = Math.PI;
    const area = 4 * pi * r ** 2;
    const volume = (4 / 3) * pi * r ** 3;
    return { area, volume };
}

function calcularEsfera() {
    const r = parseFloat(document.getElementById("esferaR").value);
    const resultado = esfera(r);
    document.getElementById("resultadoEsfera").innerText =
        `Área: ${resultado.area.toFixed(2)}, Volume: ${resultado.volume.toFixed(2)}`;
}
