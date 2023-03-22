function cov_7nr039tn() {
  var path = "C:\\Users\\Leny\\Documents\\bytebank-v1\\src\\common\\services\\transacoes.js";
  var hash = "68b37a94e5aeb4f64e2e664b4edeba949ee98e34";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Leny\\Documents\\bytebank-v1\\src\\common\\services\\transacoes.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 17
        },
        end: {
          line: 4,
          column: 47
        }
      },
      "1": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 10,
          column: 3
        }
      },
      "2": {
        start: {
          line: 6,
          column: 17
        },
        end: {
          line: 6,
          column: 62
        }
      },
      "3": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 21
        }
      },
      "4": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 14
        }
      },
      "5": {
        start: {
          line: 14,
          column: 17
        },
        end: {
          line: 14,
          column: 47
        }
      },
      "6": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 20,
          column: 3
        }
      },
      "7": {
        start: {
          line: 16,
          column: 17
        },
        end: {
          line: 16,
          column: 78
        }
      },
      "8": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 23
        }
      },
      "9": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 32
        }
      }
    },
    fnMap: {
      "0": {
        name: "buscaTransacoes",
        decl: {
          start: {
            line: 3,
            column: 22
          },
          end: {
            line: 3,
            column: 37
          }
        },
        loc: {
          start: {
            line: 3,
            column: 40
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 3
      },
      "1": {
        name: "salvaTransacao",
        decl: {
          start: {
            line: 13,
            column: 22
          },
          end: {
            line: 13,
            column: 36
          }
        },
        loc: {
          start: {
            line: 13,
            column: 52
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 13
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
      "7": 0,
      "8": 0,
      "9": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "68b37a94e5aeb4f64e2e664b4edeba949ee98e34"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_7nr039tn = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_7nr039tn();
import api from './api';
export async function buscaTransacoes() {
  cov_7nr039tn().f[0]++;
  const userId = (cov_7nr039tn().s[0]++, localStorage.getItem('userId'));
  cov_7nr039tn().s[1]++;
  try {
    const resp = (cov_7nr039tn().s[2]++, await api.get(`/users/${userId}/transations`));
    cov_7nr039tn().s[3]++;
    return resp.data;
  } catch (err) {
    cov_7nr039tn().s[4]++;
    return [];
  }
}
export async function salvaTransacao(novaTransacao) {
  cov_7nr039tn().f[1]++;
  const userId = (cov_7nr039tn().s[5]++, localStorage.getItem('userId'));
  cov_7nr039tn().s[6]++;
  try {
    const resp = (cov_7nr039tn().s[7]++, await api.post(`/users/${userId}/transations`, novaTransacao));
    cov_7nr039tn().s[8]++;
    return resp.status;
  } catch (err) {
    cov_7nr039tn().s[9]++;
    return 'Erro na requisição';
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfN25yMDM5dG4iLCJhY3R1YWxDb3ZlcmFnZSIsImFwaSIsImJ1c2NhVHJhbnNhY29lcyIsImYiLCJ1c2VySWQiLCJzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlc3AiLCJnZXQiLCJkYXRhIiwiZXJyIiwic2FsdmFUcmFuc2FjYW8iLCJub3ZhVHJhbnNhY2FvIiwicG9zdCIsInN0YXR1cyJdLCJzb3VyY2VzIjpbInRyYW5zYWNvZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwaSBmcm9tICcuL2FwaSc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYnVzY2FUcmFuc2Fjb2VzKCkge1xyXG4gIGNvbnN0IHVzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGFwaS5nZXQoYC91c2Vycy8ke3VzZXJJZH0vdHJhbnNhdGlvbnNgKTtcclxuICAgIHJldHVybiByZXNwLmRhdGE7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2FsdmFUcmFuc2FjYW8obm92YVRyYW5zYWNhbykge1xyXG4gIGNvbnN0IHVzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGFwaS5wb3N0KGAvdXNlcnMvJHt1c2VySWR9L3RyYW5zYXRpb25zYCwgbm92YVRyYW5zYWNhbyk7XHJcbiAgICByZXR1cm4gcmVzcC5zdGF0dXM7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXR1cm4gJ0Vycm8gbmEgcmVxdWlzacOnw6NvJztcclxuICB9XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxZQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxZQUFBO0FBZlosT0FBT0UsR0FBRyxNQUFNLE9BQU87QUFFdkIsT0FBTyxlQUFlQyxlQUFlQSxDQUFBLEVBQUc7RUFBQUgsWUFBQSxHQUFBSSxDQUFBO0VBQ3RDLE1BQU1DLE1BQU0sSUFBQUwsWUFBQSxHQUFBTSxDQUFBLE9BQUdDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBQztFQUFDUixZQUFBLEdBQUFNLENBQUE7RUFDOUMsSUFBSTtJQUNGLE1BQU1HLElBQUksSUFBQVQsWUFBQSxHQUFBTSxDQUFBLE9BQUcsTUFBTUosR0FBRyxDQUFDUSxHQUFHLENBQUUsVUFBU0wsTUFBTyxjQUFhLENBQUM7SUFBQ0wsWUFBQSxHQUFBTSxDQUFBO0lBQzNELE9BQU9HLElBQUksQ0FBQ0UsSUFBSTtFQUNsQixDQUFDLENBQUMsT0FBT0MsR0FBRyxFQUFFO0lBQUFaLFlBQUEsR0FBQU0sQ0FBQTtJQUNaLE9BQU8sRUFBRTtFQUNYO0FBQ0Y7QUFFQSxPQUFPLGVBQWVPLGNBQWNBLENBQUNDLGFBQWEsRUFBRTtFQUFBZCxZQUFBLEdBQUFJLENBQUE7RUFDbEQsTUFBTUMsTUFBTSxJQUFBTCxZQUFBLEdBQUFNLENBQUEsT0FBR0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsUUFBUSxDQUFDO0VBQUNSLFlBQUEsR0FBQU0sQ0FBQTtFQUM5QyxJQUFJO0lBQ0YsTUFBTUcsSUFBSSxJQUFBVCxZQUFBLEdBQUFNLENBQUEsT0FBRyxNQUFNSixHQUFHLENBQUNhLElBQUksQ0FBRSxVQUFTVixNQUFPLGNBQWEsRUFBRVMsYUFBYSxDQUFDO0lBQUNkLFlBQUEsR0FBQU0sQ0FBQTtJQUMzRSxPQUFPRyxJQUFJLENBQUNPLE1BQU07RUFDcEIsQ0FBQyxDQUFDLE9BQU9KLEdBQUcsRUFBRTtJQUFBWixZQUFBLEdBQUFNLENBQUE7SUFDWixPQUFPLG9CQUFvQjtFQUM3QjtBQUNGIn0=