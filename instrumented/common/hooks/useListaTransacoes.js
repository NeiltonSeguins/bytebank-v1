function cov_bhbczyyi6() {
  var path = "C:\\Users\\Leny\\Documents\\bytebank-v1\\src\\common\\hooks\\useListaTransacoes.js";
  var hash = "ea28ed223de75bb6d04188f8a1843919f8abb9c5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Leny\\Documents\\bytebank-v1\\src\\common\\hooks\\useListaTransacoes.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 38
        },
        end: {
          line: 5,
          column: 50
        }
      },
      "1": {
        start: {
          line: 8,
          column: 23
        },
        end: {
          line: 8,
          column: 46
        }
      },
      "2": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 30
        }
      },
      "3": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 14,
          column: 9
        }
      },
      "4": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 22
        }
      },
      "5": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 16,
          column: 37
        }
      }
    },
    fnMap: {
      "0": {
        name: "useListaTransacoes",
        decl: {
          start: {
            line: 4,
            column: 24
          },
          end: {
            line: 4,
            column: 42
          }
        },
        loc: {
          start: {
            line: 4,
            column: 45
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 4
      },
      "1": {
        name: "listaTransacoes",
        decl: {
          start: {
            line: 7,
            column: 17
          },
          end: {
            line: 7,
            column: 32
          }
        },
        loc: {
          start: {
            line: 7,
            column: 35
          },
          end: {
            line: 10,
            column: 3
          }
        },
        line: 7
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 12,
            column: 12
          },
          end: {
            line: 12,
            column: 13
          }
        },
        loc: {
          start: {
            line: 12,
            column: 18
          },
          end: {
            line: 14,
            column: 3
          }
        },
        line: 12
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ea28ed223de75bb6d04188f8a1843919f8abb9c5"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_bhbczyyi6 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_bhbczyyi6();
import { useEffect, useState } from 'react';
import { buscaTransacoes } from '../services/transacoes';
export default function useListaTransacoes() {
  cov_bhbczyyi6().f[0]++;
  const [transacoes, setTransacoes] = (cov_bhbczyyi6().s[0]++, useState([]));
  async function listaTransacoes() {
    cov_bhbczyyi6().f[1]++;
    const transacoes = (cov_bhbczyyi6().s[1]++, await buscaTransacoes());
    cov_bhbczyyi6().s[2]++;
    setTransacoes(transacoes);
  }
  cov_bhbczyyi6().s[3]++;
  useEffect(() => {
    cov_bhbczyyi6().f[2]++;
    cov_bhbczyyi6().s[4]++;
    listaTransacoes();
  }, []);
  cov_bhbczyyi6().s[5]++;
  return [transacoes, setTransacoes];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfYmhiY3p5eWk2IiwiYWN0dWFsQ292ZXJhZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImJ1c2NhVHJhbnNhY29lcyIsInVzZUxpc3RhVHJhbnNhY29lcyIsImYiLCJ0cmFuc2Fjb2VzIiwic2V0VHJhbnNhY29lcyIsInMiLCJsaXN0YVRyYW5zYWNvZXMiXSwic291cmNlcyI6WyJ1c2VMaXN0YVRyYW5zYWNvZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgYnVzY2FUcmFuc2Fjb2VzIH0gZnJvbSAnLi4vc2VydmljZXMvdHJhbnNhY29lcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VMaXN0YVRyYW5zYWNvZXMoKSB7XHJcbiAgY29uc3QgW3RyYW5zYWNvZXMsIHNldFRyYW5zYWNvZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBsaXN0YVRyYW5zYWNvZXMoKSB7XHJcbiAgICBjb25zdCB0cmFuc2Fjb2VzID0gYXdhaXQgYnVzY2FUcmFuc2Fjb2VzKCk7XHJcbiAgICBzZXRUcmFuc2Fjb2VzKHRyYW5zYWNvZXMpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxpc3RhVHJhbnNhY29lcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIFt0cmFuc2Fjb2VzLCBzZXRUcmFuc2Fjb2VzXTtcclxufVxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsYUFBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsYUFBQTtBQWZaLFNBQVNFLFNBQVMsRUFBRUMsUUFBUSxRQUFRLE9BQU87QUFDM0MsU0FBU0MsZUFBZSxRQUFRLHdCQUF3QjtBQUV4RCxlQUFlLFNBQVNDLGtCQUFrQkEsQ0FBQSxFQUFHO0VBQUFMLGFBQUEsR0FBQU0sQ0FBQTtFQUMzQyxNQUFNLENBQUNDLFVBQVUsRUFBRUMsYUFBYSxDQUFDLElBQUFSLGFBQUEsR0FBQVMsQ0FBQSxPQUFHTixRQUFRLENBQUMsRUFBRSxDQUFDO0VBRWhELGVBQWVPLGVBQWVBLENBQUEsRUFBRztJQUFBVixhQUFBLEdBQUFNLENBQUE7SUFDL0IsTUFBTUMsVUFBVSxJQUFBUCxhQUFBLEdBQUFTLENBQUEsT0FBRyxNQUFNTCxlQUFlLEVBQUU7SUFBQ0osYUFBQSxHQUFBUyxDQUFBO0lBQzNDRCxhQUFhLENBQUNELFVBQVUsQ0FBQztFQUMzQjtFQUFDUCxhQUFBLEdBQUFTLENBQUE7RUFFRFAsU0FBUyxDQUFDLE1BQU07SUFBQUYsYUFBQSxHQUFBTSxDQUFBO0lBQUFOLGFBQUEsR0FBQVMsQ0FBQTtJQUNkQyxlQUFlLEVBQUU7RUFDbkIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUFDVixhQUFBLEdBQUFTLENBQUE7RUFFUCxPQUFPLENBQUNGLFVBQVUsRUFBRUMsYUFBYSxDQUFDO0FBQ3BDIn0=