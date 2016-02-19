/**
 * Created by elporfirio on 19/02/2016.
 */
'use strict';

// Variables
var inputA = null;
var inputB = null;

//Métodos

function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

var sumarAInputs = function () {
  var valA = parseInt(inputA.value);
  var valB = parseInt(inputB.value);

  var resultadoA = valA + 1;
  var resultadoB = valB + 1;

  inputA.value = resultadoA;
  inputB.value = resultadoB;
};

// Inicializadores
var init = function () {
  inputA = document.getElementById('valorA');
  inputB = document.getElementById('valorB');
};

ready(init());
