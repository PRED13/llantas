import heapq

EMPRESAS = {
    "Empresa1": {"T": 20, "H": 30, "V": 20, "W": 40},
    "Empresa2": {"T": 50, "H": 50, "V": 40, "W": 50},
    "Empresa3": {"T": 60, "H": 55, "V": 50, "W": 60},
    "Empresa4": {"T": 100, "H": 80, "V": 60, "W": 70},
}

TIPOS = ["T", "H", "V", "W"]

class Nodo:
    def __init__(self, asignaciones, empresas_usadas, costo):
        self.asignaciones = asignaciones
        self.empresas_usadas = empresas_usadas
        self.costo = costo

    def __lt__(self, other):
        return self.costo < other.costo


def heuristica(tipos_restantes, empresas_disponibles):
    """
    h(n):
    suma de los costos mínimos posibles
    """
    h = 0

    for tipo in tipos_restantes:
        minimo = float('inf')

        for empresa in empresas_disponibles:
            precio = EMPRESAS[empresa][tipo]

            if precio < minimo:
                minimo = precio

        h += minimo

    return h


def algoritmo_aestrella():
    abiertos = []

    nodo_inicial = Nodo([], [], 0)

    heapq.heappush(abiertos, (0, nodo_inicial))

    mejor_solucion = None
    mejor_costo = float('inf')

    pasos = []

    while abiertos:

        _, actual = heapq.heappop(abiertos)

        nivel = len(actual.asignaciones)

        if nivel == len(TIPOS):

            if actual.costo < mejor_costo:
                mejor_costo = actual.costo
                mejor_solucion = actual

            continue

        tipo_actual = TIPOS[nivel]

        for empresa in EMPRESAS.keys():

            if empresa not in actual.empresas_usadas:

                costo_nuevo = (
                    actual.costo +
                    EMPRESAS[empresa][tipo_actual]
                )

                nuevas_asignaciones = (
                    actual.asignaciones +
                    [(tipo_actual, empresa)]
                )

                nuevas_empresas = (
                    actual.empresas_usadas +
                    [empresa]
                )

                tipos_restantes = TIPOS[nivel + 1:]

                empresas_restantes = [
                    e for e in EMPRESAS.keys()
                    if e not in nuevas_empresas
                ]

                h = heuristica(
                    tipos_restantes,
                    empresas_restantes
                )

                f = costo_nuevo + h

                pasos.append({
                    "asignaciones": nuevas_asignaciones,
                    "g": costo_nuevo,
                    "h": h,
                    "f": f
                })

                nuevo_nodo = Nodo(
                    nuevas_asignaciones,
                    nuevas_empresas,
                    costo_nuevo
                )

                heapq.heappush(
                    abiertos,
                    (f, nuevo_nodo)
                )

    return {
        "mejor_costo": mejor_costo,
        "solucion": mejor_solucion.asignaciones,
        "pasos": pasos
    }