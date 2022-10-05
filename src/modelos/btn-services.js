const esOperador = valor => {
    return isNaN(valor) && (valor != '.') && (valor != '=')
};

export const btnServices = {
    esOperador
}