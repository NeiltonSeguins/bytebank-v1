function cov_2hwkmtkyx2() {
  var path = "C:\\Users\\Leny\\Documents\\bytebank-v1\\src\\common\\hooks\\useHomeContext.js";
  var hash = "97a797ea1cce4366ad3f022fab577379635e861a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Leny\\Documents\\bytebank-v1\\src\\common\\hooks\\useHomeContext.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 30
        },
        end: {
          line: 24,
          column: 1
        }
      },
      "1": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 27
        }
      },
      "2": {
        start: {
          line: 12,
          column: 22
        },
        end: {
          line: 12,
          column: 54
        }
      },
      "3": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 24
        }
      },
      "4": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 29
        }
      },
      "5": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 44
        }
      },
      "6": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 28
        }
      },
      "7": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 23,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 30
          },
          end: {
            line: 7,
            column: 31
          }
        },
        loc: {
          start: {
            line: 7,
            column: 36
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 7
      },
      "1": {
        name: "realizarTransacao",
        decl: {
          start: {
            line: 11,
            column: 11
          },
          end: {
            line: 11,
            column: 28
          }
        },
        loc: {
          start: {
            line: 11,
            column: 38
          },
          end: {
            line: 17,
            column: 3
          }
        },
        line: 11
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "97a797ea1cce4366ad3f022fab577379635e861a"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2hwkmtkyx2 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2hwkmtkyx2();
import { HomeContext } from 'common/context/HomeContext';
import { atualizaSaldo } from 'common/services/saldo';
import { salvaTransacao } from 'common/services/transacoes';
import { calculaNovoSaldo } from 'common/utils';
import { useContext } from 'react';
cov_2hwkmtkyx2().s[0]++;
export const useHomeContext = () => {
  cov_2hwkmtkyx2().f[0]++;
  const {
    saldo,
    setSaldo,
    transacoes,
    setTransacoes
  } = (cov_2hwkmtkyx2().s[1]++, useContext(HomeContext));
  function realizarTransacao(valores) {
    cov_2hwkmtkyx2().f[1]++;
    const novoSaldo = (cov_2hwkmtkyx2().s[2]++, calculaNovoSaldo(valores, saldo));
    cov_2hwkmtkyx2().s[3]++;
    setSaldo(novoSaldo);
    cov_2hwkmtkyx2().s[4]++;
    atualizaSaldo(novoSaldo);
    cov_2hwkmtkyx2().s[5]++;
    setTransacoes([...transacoes, valores]);
    cov_2hwkmtkyx2().s[6]++;
    salvaTransacao(valores);
  }
  cov_2hwkmtkyx2().s[7]++;
  return {
    saldo,
    transacoes,
    realizarTransacao
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMmh3a210a3l4MiIsImFjdHVhbENvdmVyYWdlIiwiSG9tZUNvbnRleHQiLCJhdHVhbGl6YVNhbGRvIiwic2FsdmFUcmFuc2FjYW8iLCJjYWxjdWxhTm92b1NhbGRvIiwidXNlQ29udGV4dCIsInMiLCJ1c2VIb21lQ29udGV4dCIsImYiLCJzYWxkbyIsInNldFNhbGRvIiwidHJhbnNhY29lcyIsInNldFRyYW5zYWNvZXMiLCJyZWFsaXphclRyYW5zYWNhbyIsInZhbG9yZXMiLCJub3ZvU2FsZG8iXSwic291cmNlcyI6WyJ1c2VIb21lQ29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIb21lQ29udGV4dCB9IGZyb20gJ2NvbW1vbi9jb250ZXh0L0hvbWVDb250ZXh0JztcclxuaW1wb3J0IHsgYXR1YWxpemFTYWxkbyB9IGZyb20gJ2NvbW1vbi9zZXJ2aWNlcy9zYWxkbyc7XHJcbmltcG9ydCB7IHNhbHZhVHJhbnNhY2FvIH0gZnJvbSAnY29tbW9uL3NlcnZpY2VzL3RyYW5zYWNvZXMnO1xyXG5pbXBvcnQgeyBjYWxjdWxhTm92b1NhbGRvIH0gZnJvbSAnY29tbW9uL3V0aWxzJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VIb21lQ29udGV4dCA9ICgpID0+IHtcclxuICBjb25zdCB7IHNhbGRvLCBzZXRTYWxkbywgdHJhbnNhY29lcywgc2V0VHJhbnNhY29lcyB9ID1cclxuICAgIHVzZUNvbnRleHQoSG9tZUNvbnRleHQpO1xyXG5cclxuICBmdW5jdGlvbiByZWFsaXphclRyYW5zYWNhbyh2YWxvcmVzKSB7XHJcbiAgICBjb25zdCBub3ZvU2FsZG8gPSBjYWxjdWxhTm92b1NhbGRvKHZhbG9yZXMsIHNhbGRvKTtcclxuICAgIHNldFNhbGRvKG5vdm9TYWxkbyk7XHJcbiAgICBhdHVhbGl6YVNhbGRvKG5vdm9TYWxkbyk7XHJcbiAgICBzZXRUcmFuc2Fjb2VzKFsuLi50cmFuc2Fjb2VzLCB2YWxvcmVzXSk7XHJcbiAgICBzYWx2YVRyYW5zYWNhbyh2YWxvcmVzKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzYWxkbyxcclxuICAgIHRyYW5zYWNvZXMsXHJcbiAgICByZWFsaXphclRyYW5zYWNhbyxcclxuICB9O1xyXG59O1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsY0FBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsY0FBQTtBQWZaLFNBQVNFLFdBQVcsUUFBUSw0QkFBNEI7QUFDeEQsU0FBU0MsYUFBYSxRQUFRLHVCQUF1QjtBQUNyRCxTQUFTQyxjQUFjLFFBQVEsNEJBQTRCO0FBQzNELFNBQVNDLGdCQUFnQixRQUFRLGNBQWM7QUFDL0MsU0FBU0MsVUFBVSxRQUFRLE9BQU87QUFBQ04sY0FBQSxHQUFBTyxDQUFBO0FBRW5DLE9BQU8sTUFBTUMsY0FBYyxHQUFHQSxDQUFBLEtBQU07RUFBQVIsY0FBQSxHQUFBUyxDQUFBO0VBQ2xDLE1BQU07SUFBRUMsS0FBSztJQUFFQyxRQUFRO0lBQUVDLFVBQVU7SUFBRUM7RUFBYyxDQUFDLElBQUFiLGNBQUEsR0FBQU8sQ0FBQSxPQUNsREQsVUFBVSxDQUFDSixXQUFXLENBQUM7RUFFekIsU0FBU1ksaUJBQWlCQSxDQUFDQyxPQUFPLEVBQUU7SUFBQWYsY0FBQSxHQUFBUyxDQUFBO0lBQ2xDLE1BQU1PLFNBQVMsSUFBQWhCLGNBQUEsR0FBQU8sQ0FBQSxPQUFHRixnQkFBZ0IsQ0FBQ1UsT0FBTyxFQUFFTCxLQUFLLENBQUM7SUFBQ1YsY0FBQSxHQUFBTyxDQUFBO0lBQ25ESSxRQUFRLENBQUNLLFNBQVMsQ0FBQztJQUFDaEIsY0FBQSxHQUFBTyxDQUFBO0lBQ3BCSixhQUFhLENBQUNhLFNBQVMsQ0FBQztJQUFDaEIsY0FBQSxHQUFBTyxDQUFBO0lBQ3pCTSxhQUFhLENBQUMsQ0FBQyxHQUFHRCxVQUFVLEVBQUVHLE9BQU8sQ0FBQyxDQUFDO0lBQUNmLGNBQUEsR0FBQU8sQ0FBQTtJQUN4Q0gsY0FBYyxDQUFDVyxPQUFPLENBQUM7RUFDekI7RUFBQ2YsY0FBQSxHQUFBTyxDQUFBO0VBRUQsT0FBTztJQUNMRyxLQUFLO0lBQ0xFLFVBQVU7SUFDVkU7RUFDRixDQUFDO0FBQ0gsQ0FBQyJ9