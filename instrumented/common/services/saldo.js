function cov_g5gupmy4h() {
  var path = "C:\\Users\\Leny\\Documents\\bytebank-v1\\src\\common\\services\\saldo.js";
  var hash = "8e10e02c5e4d255293449d5d6005a16fd0716386";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Leny\\Documents\\bytebank-v1\\src\\common\\services\\saldo.js",
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
          column: 56
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
          column: 16
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
          line: 18,
          column: 38
        }
      },
      "7": {
        start: {
          line: 17,
          column: 20
        },
        end: {
          line: 17,
          column: 44
        }
      },
      "8": {
        start: {
          line: 18,
          column: 20
        },
        end: {
          line: 18,
          column: 36
        }
      }
    },
    fnMap: {
      "0": {
        name: "buscaSaldo",
        decl: {
          start: {
            line: 3,
            column: 22
          },
          end: {
            line: 3,
            column: 32
          }
        },
        loc: {
          start: {
            line: 3,
            column: 35
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 3
      },
      "1": {
        name: "atualizaSaldo",
        decl: {
          start: {
            line: 13,
            column: 22
          },
          end: {
            line: 13,
            column: 35
          }
        },
        loc: {
          start: {
            line: 13,
            column: 47
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 13
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 17,
            column: 10
          },
          end: {
            line: 17,
            column: 11
          }
        },
        loc: {
          start: {
            line: 17,
            column: 20
          },
          end: {
            line: 17,
            column: 44
          }
        },
        line: 17
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 18,
            column: 11
          },
          end: {
            line: 18,
            column: 12
          }
        },
        loc: {
          start: {
            line: 18,
            column: 20
          },
          end: {
            line: 18,
            column: 36
          }
        },
        line: 18
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
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8e10e02c5e4d255293449d5d6005a16fd0716386"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_g5gupmy4h = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_g5gupmy4h();
import api from './api';
export async function buscaSaldo() {
  cov_g5gupmy4h().f[0]++;
  const userId = (cov_g5gupmy4h().s[0]++, localStorage.getItem('userId'));
  cov_g5gupmy4h().s[1]++;
  try {
    const resp = (cov_g5gupmy4h().s[2]++, await api.get(`/users/${userId}/saldo`));
    cov_g5gupmy4h().s[3]++;
    return resp.data;
  } catch (err) {
    cov_g5gupmy4h().s[4]++;
    return 1000;
  }
}
export async function atualizaSaldo(novoSaldo) {
  cov_g5gupmy4h().f[1]++;
  const userId = (cov_g5gupmy4h().s[5]++, localStorage.getItem('userId'));
  cov_g5gupmy4h().s[6]++;
  api.put(`/users/${userId}/saldo`, {
    saldo: novoSaldo
  }).then(resp => {
    cov_g5gupmy4h().f[2]++;
    cov_g5gupmy4h().s[7]++;
    return console.log(resp.status);
  }).catch(err => {
    cov_g5gupmy4h().f[3]++;
    cov_g5gupmy4h().s[8]++;
    return console.log(err);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfZzVndXBteTRoIiwiYWN0dWFsQ292ZXJhZ2UiLCJhcGkiLCJidXNjYVNhbGRvIiwiZiIsInVzZXJJZCIsInMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVzcCIsImdldCIsImRhdGEiLCJlcnIiLCJhdHVhbGl6YVNhbGRvIiwibm92b1NhbGRvIiwicHV0Iiwic2FsZG8iLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImNhdGNoIl0sInNvdXJjZXMiOlsic2FsZG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwaSBmcm9tICcuL2FwaSc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYnVzY2FTYWxkbygpIHtcclxuICBjb25zdCB1c2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBhcGkuZ2V0KGAvdXNlcnMvJHt1c2VySWR9L3NhbGRvYCk7XHJcbiAgICByZXR1cm4gcmVzcC5kYXRhO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmV0dXJuIDEwMDA7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXR1YWxpemFTYWxkbyhub3ZvU2FsZG8pIHtcclxuICBjb25zdCB1c2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgYXBpXHJcbiAgICAucHV0KGAvdXNlcnMvJHt1c2VySWR9L3NhbGRvYCwgeyBzYWxkbzogbm92b1NhbGRvIH0pXHJcbiAgICAudGhlbigocmVzcCkgPT4gY29uc29sZS5sb2cocmVzcC5zdGF0dXMpKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsYUFBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsYUFBQTtBQWZaLE9BQU9FLEdBQUcsTUFBTSxPQUFPO0FBRXZCLE9BQU8sZUFBZUMsVUFBVUEsQ0FBQSxFQUFHO0VBQUFILGFBQUEsR0FBQUksQ0FBQTtFQUNqQyxNQUFNQyxNQUFNLElBQUFMLGFBQUEsR0FBQU0sQ0FBQSxPQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQUM7RUFBQ1IsYUFBQSxHQUFBTSxDQUFBO0VBQzlDLElBQUk7SUFDRixNQUFNRyxJQUFJLElBQUFULGFBQUEsR0FBQU0sQ0FBQSxPQUFHLE1BQU1KLEdBQUcsQ0FBQ1EsR0FBRyxDQUFFLFVBQVNMLE1BQU8sUUFBTyxDQUFDO0lBQUNMLGFBQUEsR0FBQU0sQ0FBQTtJQUNyRCxPQUFPRyxJQUFJLENBQUNFLElBQUk7RUFDbEIsQ0FBQyxDQUFDLE9BQU9DLEdBQUcsRUFBRTtJQUFBWixhQUFBLEdBQUFNLENBQUE7SUFDWixPQUFPLElBQUk7RUFDYjtBQUNGO0FBRUEsT0FBTyxlQUFlTyxhQUFhQSxDQUFDQyxTQUFTLEVBQUU7RUFBQWQsYUFBQSxHQUFBSSxDQUFBO0VBQzdDLE1BQU1DLE1BQU0sSUFBQUwsYUFBQSxHQUFBTSxDQUFBLE9BQUdDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBQztFQUFDUixhQUFBLEdBQUFNLENBQUE7RUFDOUNKLEdBQUcsQ0FDQWEsR0FBRyxDQUFFLFVBQVNWLE1BQU8sUUFBTyxFQUFFO0lBQUVXLEtBQUssRUFBRUY7RUFBVSxDQUFDLENBQUMsQ0FDbkRHLElBQUksQ0FBRVIsSUFBSSxJQUFLO0lBQUFULGFBQUEsR0FBQUksQ0FBQTtJQUFBSixhQUFBLEdBQUFNLENBQUE7SUFBQSxPQUFBWSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1YsSUFBSSxDQUFDVyxNQUFNLENBQUM7RUFBRCxDQUFDLENBQUMsQ0FDeENDLEtBQUssQ0FBRVQsR0FBRyxJQUFLO0lBQUFaLGFBQUEsR0FBQUksQ0FBQTtJQUFBSixhQUFBLEdBQUFNLENBQUE7SUFBQSxPQUFBWSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsR0FBRyxDQUFDO0VBQUQsQ0FBQyxDQUFDO0FBQ3JDIn0=