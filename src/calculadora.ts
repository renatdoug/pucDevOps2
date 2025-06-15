// src/calculadora.ts

import { adicionar } from './operacoes/adicao';
import { subtrair } from './operacoes/subtracao';
import { multiplicar } from './operacoes/multiplicacao';
import { dividir } from './operacoes/divisao';

export class Calculadora {
  somar(a: number, b: number): number {
    return adicionar(a, b);
  }

  subtrair(a: number, b: number): number {
    return subtrair(a, b);
  }

  multiplicar(a: number, b: number): number {
    return multiplicar(a, b);
  }

  dividir(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Divisão por zero não é permitida.');
    }
    return dividir(a, b);
  }
}
