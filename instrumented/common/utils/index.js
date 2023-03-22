function cov_1fkqg6ir74() {
  var path = "C:\\Users\\Leny\\Documents\\bytebank-v1\\src\\common\\utils\\index.js";
  var hash = "55aed2e077ca8214a2cacfcb663f05e0099d7cb3";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Leny\\Documents\\bytebank-v1\\src\\common\\utils\\index.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 32
        },
        end: {
          line: 7,
          column: 1
        }
      },
      "1": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 6,
          column: 3
        }
      },
      "2": {
        start: {
          line: 3,
          column: 4
        },
        end: {
          line: 3,
          column: 43
        }
      },
      "3": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 5,
          column: 43
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 32
          },
          end: {
            line: 1,
            column: 33
          }
        },
        loc: {
          start: {
            line: 1,
            column: 52
          },
          end: {
            line: 7,
            column: 1
          }
        },
        line: 1
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 6,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 6,
            column: 3
          }
        }, {
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 6,
            column: 3
          }
        }],
        line: 2
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "55aed2e077ca8214a2cacfcb663f05e0099d7cb3"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1fkqg6ir74 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1fkqg6ir74();
cov_1fkqg6ir74().s[0]++;
export const calculaNovoSaldo = (valores, saldo) => {
  cov_1fkqg6ir74().f[0]++;
  cov_1fkqg6ir74().s[1]++;
  if (valores.tipoTransacao === 'Depósito') {
    cov_1fkqg6ir74().b[0][0]++;
    cov_1fkqg6ir74().s[2]++;
    return saldo + parseInt(valores.valor);
  } else {
    cov_1fkqg6ir74().b[0][1]++;
    cov_1fkqg6ir74().s[3]++;
    return saldo - parseInt(valores.valor);
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMWZrcWc2aXI3NCIsImFjdHVhbENvdmVyYWdlIiwicyIsImNhbGN1bGFOb3ZvU2FsZG8iLCJ2YWxvcmVzIiwic2FsZG8iLCJmIiwidGlwb1RyYW5zYWNhbyIsImIiLCJwYXJzZUludCIsInZhbG9yIl0sInNvdXJjZXMiOlsiaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNhbGN1bGFOb3ZvU2FsZG8gPSAodmFsb3Jlcywgc2FsZG8pID0+IHtcclxuICBpZiAodmFsb3Jlcy50aXBvVHJhbnNhY2FvID09PSAnRGVww7NzaXRvJykge1xyXG4gICAgcmV0dXJuIHNhbGRvICsgcGFyc2VJbnQodmFsb3Jlcy52YWxvcik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBzYWxkbyAtIHBhcnNlSW50KHZhbG9yZXMudmFsb3IpO1xyXG4gIH1cclxufTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGNBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGNBQUE7QUFBQUEsY0FBQSxHQUFBRSxDQUFBO0FBZlosT0FBTyxNQUFNQyxnQkFBZ0IsR0FBR0EsQ0FBQ0MsT0FBTyxFQUFFQyxLQUFLLEtBQUs7RUFBQUwsY0FBQSxHQUFBTSxDQUFBO0VBQUFOLGNBQUEsR0FBQUUsQ0FBQTtFQUNsRCxJQUFJRSxPQUFPLENBQUNHLGFBQWEsS0FBSyxVQUFVLEVBQUU7SUFBQVAsY0FBQSxHQUFBUSxDQUFBO0lBQUFSLGNBQUEsR0FBQUUsQ0FBQTtJQUN4QyxPQUFPRyxLQUFLLEdBQUdJLFFBQVEsQ0FBQ0wsT0FBTyxDQUFDTSxLQUFLLENBQUM7RUFDeEMsQ0FBQyxNQUFNO0lBQUFWLGNBQUEsR0FBQVEsQ0FBQTtJQUFBUixjQUFBLEdBQUFFLENBQUE7SUFDTCxPQUFPRyxLQUFLLEdBQUdJLFFBQVEsQ0FBQ0wsT0FBTyxDQUFDTSxLQUFLLENBQUM7RUFDeEM7QUFDRixDQUFDIn0=