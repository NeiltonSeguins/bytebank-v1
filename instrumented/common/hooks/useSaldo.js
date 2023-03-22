function cov_13aifgovuq() {
  var path = "C:\\Users\\Leny\\Documents\\bytebank-v1\\src\\common\\hooks\\useSaldo.js";
  var hash = "65c91a32643485160aabe2b2ee66da375447415f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Leny\\Documents\\bytebank-v1\\src\\common\\hooks\\useSaldo.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 28
        },
        end: {
          line: 5,
          column: 39
        }
      },
      "1": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 33
        }
      },
      "2": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 13,
          column: 14
        }
      },
      "3": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 17
        }
      },
      "4": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 15,
          column: 27
        }
      }
    },
    fnMap: {
      "0": {
        name: "useSaldo",
        decl: {
          start: {
            line: 4,
            column: 24
          },
          end: {
            line: 4,
            column: 32
          }
        },
        loc: {
          start: {
            line: 4,
            column: 35
          },
          end: {
            line: 16,
            column: 1
          }
        },
        line: 4
      },
      "1": {
        name: "obtemSaldo",
        decl: {
          start: {
            line: 7,
            column: 17
          },
          end: {
            line: 7,
            column: 27
          }
        },
        loc: {
          start: {
            line: 7,
            column: 30
          },
          end: {
            line: 9,
            column: 3
          }
        },
        line: 7
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 11,
            column: 12
          },
          end: {
            line: 11,
            column: 13
          }
        },
        loc: {
          start: {
            line: 11,
            column: 18
          },
          end: {
            line: 13,
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
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "65c91a32643485160aabe2b2ee66da375447415f"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_13aifgovuq = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_13aifgovuq();
import { useEffect, useState } from 'react';
import { buscaSaldo } from '../services/saldo';
export default function useSaldo() {
  cov_13aifgovuq().f[0]++;
  const [saldo, setSaldo] = (cov_13aifgovuq().s[0]++, useState(0));
  async function obtemSaldo() {
    cov_13aifgovuq().f[1]++;
    cov_13aifgovuq().s[1]++;
    setSaldo(await buscaSaldo());
  }
  cov_13aifgovuq().s[2]++;
  useEffect(() => {
    cov_13aifgovuq().f[2]++;
    cov_13aifgovuq().s[3]++;
    obtemSaldo();
  }, [saldo]);
  cov_13aifgovuq().s[4]++;
  return [saldo, setSaldo];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMTNhaWZnb3Z1cSIsImFjdHVhbENvdmVyYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJidXNjYVNhbGRvIiwidXNlU2FsZG8iLCJmIiwic2FsZG8iLCJzZXRTYWxkbyIsInMiLCJvYnRlbVNhbGRvIl0sInNvdXJjZXMiOlsidXNlU2FsZG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgYnVzY2FTYWxkbyB9IGZyb20gJy4uL3NlcnZpY2VzL3NhbGRvJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVNhbGRvKCkge1xyXG4gIGNvbnN0IFtzYWxkbywgc2V0U2FsZG9dID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIG9idGVtU2FsZG8oKSB7XHJcbiAgICBzZXRTYWxkbyhhd2FpdCBidXNjYVNhbGRvKCkpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG9idGVtU2FsZG8oKTtcclxuICB9LCBbc2FsZG9dKTtcclxuXHJcbiAgcmV0dXJuIFtzYWxkbywgc2V0U2FsZG9dO1xyXG59XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsY0FBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsY0FBQTtBQWZaLFNBQVNFLFNBQVMsRUFBRUMsUUFBUSxRQUFRLE9BQU87QUFDM0MsU0FBU0MsVUFBVSxRQUFRLG1CQUFtQjtBQUU5QyxlQUFlLFNBQVNDLFFBQVFBLENBQUEsRUFBRztFQUFBTCxjQUFBLEdBQUFNLENBQUE7RUFDakMsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxJQUFBUixjQUFBLEdBQUFTLENBQUEsT0FBR04sUUFBUSxDQUFDLENBQUMsQ0FBQztFQUVyQyxlQUFlTyxVQUFVQSxDQUFBLEVBQUc7SUFBQVYsY0FBQSxHQUFBTSxDQUFBO0lBQUFOLGNBQUEsR0FBQVMsQ0FBQTtJQUMxQkQsUUFBUSxDQUFDLE1BQU1KLFVBQVUsRUFBRSxDQUFDO0VBQzlCO0VBQUNKLGNBQUEsR0FBQVMsQ0FBQTtFQUVEUCxTQUFTLENBQUMsTUFBTTtJQUFBRixjQUFBLEdBQUFNLENBQUE7SUFBQU4sY0FBQSxHQUFBUyxDQUFBO0lBQ2RDLFVBQVUsRUFBRTtFQUNkLENBQUMsRUFBRSxDQUFDSCxLQUFLLENBQUMsQ0FBQztFQUFDUCxjQUFBLEdBQUFTLENBQUE7RUFFWixPQUFPLENBQUNGLEtBQUssRUFBRUMsUUFBUSxDQUFDO0FBQzFCIn0=