// src/calculadora.ts

// testes/calculadora.test.ts
import { Calculadora } from '../src/calculadora';
import { adicionar } from '../src/operacoes/adicao';
import { subtrair } from '../src/operacoes/subtracao';
import { multiplicar } from '../src/operacoes/multiplicacao';
import { dividir } from '../src/operacoes/divisao';

// Testes unitários da classe Calculadora

describe('Calculadora', () => {
  let calculadora: Calculadora;

  beforeEach(() => {
    calculadora = new Calculadora();
  });

  it('deve somar dois números corretamente', () => {
    const resultado = calculadora.somar(2, 3);
    expect(resultado).toBe(5);
  });

  it('deve subtrair dois números corretamente', () => {
    const resultado = calculadora.subtrair(10, 4);
    expect(resultado).toBe(6);
  });

  it('deve multiplicar dois números corretamente', () => {
    const resultado = calculadora.multiplicar(3, 5);
    expect(resultado).toBe(15);
  });

  it('deve dividir dois números corretamente', () => {
    const resultado = calculadora.dividir(10, 2);
    expect(resultado).toBe(5);
  });

  it('deve lançar erro ao dividir por zero', () => {
    expect(() => calculadora.dividir(10, 0)).toThrow('Divisão por zero não é permitida.');
  });
});
