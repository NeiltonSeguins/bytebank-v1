function cov_2mqx9yn4hz() {
  var path = "C:\\Users\\Leny\\Documents\\bytebank-v1\\src\\common\\services\\api.js";
  var hash = "9cddcd25ffddcd1f9c8d48bb7bbd695ec585a65a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Leny\\Documents\\bytebank-v1\\src\\common\\services\\api.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 12
        },
        end: {
          line: 9,
          column: 2
        }
      },
      "1": {
        start: {
          line: 11,
          column: 0
        },
        end: {
          line: 25,
          column: 2
        }
      },
      "2": {
        start: {
          line: 14,
          column: 18
        },
        end: {
          line: 14,
          column: 49
        }
      },
      "3": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 17,
          column: 5
        }
      },
      "4": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 16,
          column: 55
        }
      },
      "5": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 18
        }
      },
      "6": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 48
        }
      },
      "7": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 33
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        },
        loc: {
          start: {
            line: 12,
            column: 20
          },
          end: {
            line: 19,
            column: 3
          }
        },
        line: 12
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 20,
            column: 3
          }
        },
        loc: {
          start: {
            line: 20,
            column: 19
          },
          end: {
            line: 24,
            column: 3
          }
        },
        line: 20
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 17,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 17,
            column: 5
          }
        }, {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 17,
            column: 5
          }
        }],
        line: 15
      },
      "1": {
        loc: {
          start: {
            line: 15,
            column: 8
          },
          end: {
            line: 15,
            column: 31
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 15,
            column: 8
          },
          end: {
            line: 15,
            column: 13
          }
        }, {
          start: {
            line: 15,
            column: 17
          },
          end: {
            line: 15,
            column: 31
          }
        }],
        line: 15
      }
    },
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
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "9cddcd25ffddcd1f9c8d48bb7bbd695ec585a65a"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2mqx9yn4hz = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2mqx9yn4hz();
import axios from 'axios';
const api = (cov_2mqx9yn4hz().s[0]++, axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    Accept: 'application/json',
    Content: 'application/json'
  }
}));
cov_2mqx9yn4hz().s[1]++;
api.interceptors.request.use(function (config) {
  cov_2mqx9yn4hz().f[0]++;
  // Do something before request is sent
  const token = (cov_2mqx9yn4hz().s[2]++, sessionStorage.getItem('token'));
  cov_2mqx9yn4hz().s[3]++;
  if ((cov_2mqx9yn4hz().b[1][0]++, token) && (cov_2mqx9yn4hz().b[1][1]++, config.headers)) {
    cov_2mqx9yn4hz().b[0][0]++;
    cov_2mqx9yn4hz().s[4]++;
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    cov_2mqx9yn4hz().b[0][1]++;
  }
  cov_2mqx9yn4hz().s[5]++;
  return config;
}, function (error) {
  cov_2mqx9yn4hz().f[1]++;
  cov_2mqx9yn4hz().s[6]++;
  // Do something with request error
  console.log('Erro no interceptor do axios');
  cov_2mqx9yn4hz().s[7]++;
  return Promise.reject(error);
});
export default api;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMm1xeDl5bjRoeiIsImFjdHVhbENvdmVyYWdlIiwiYXhpb3MiLCJhcGkiLCJzIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJBY2NlcHQiLCJDb250ZW50IiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsImYiLCJ0b2tlbiIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImIiLCJBdXRob3JpemF0aW9uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiUHJvbWlzZSIsInJlamVjdCJdLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiAnaHR0cDovL2xvY2FsaG9zdDo4MDAwJyxcclxuICBoZWFkZXJzOiB7XHJcbiAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIENvbnRlbnQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICB9LFxyXG59KTtcclxuXHJcbmFwaS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXHJcbiAgZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgLy8gRG8gc29tZXRoaW5nIGJlZm9yZSByZXF1ZXN0IGlzIHNlbnRcclxuICAgIGNvbnN0IHRva2VuID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgIGlmICh0b2tlbiAmJiBjb25maWcuaGVhZGVycykge1xyXG4gICAgICBjb25maWcuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke3Rva2VufWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH0sXHJcbiAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCByZXF1ZXN0IGVycm9yXHJcbiAgICBjb25zb2xlLmxvZygnRXJybyBubyBpbnRlcmNlcHRvciBkbyBheGlvcycpO1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICB9XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGk7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsY0FBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsY0FBQTtBQWZaLE9BQU9FLEtBQUssTUFBTSxPQUFPO0FBRXpCLE1BQU1DLEdBQUcsSUFBQUgsY0FBQSxHQUFBSSxDQUFBLE9BQUdGLEtBQUssQ0FBQ0csTUFBTSxDQUFDO0VBQ3ZCQyxPQUFPLEVBQUUsdUJBQXVCO0VBQ2hDQyxPQUFPLEVBQUU7SUFDUEMsTUFBTSxFQUFFLGtCQUFrQjtJQUMxQkMsT0FBTyxFQUFFO0VBQ1g7QUFDRixDQUFDLENBQUM7QUFBQ1QsY0FBQSxHQUFBSSxDQUFBO0FBRUhELEdBQUcsQ0FBQ08sWUFBWSxDQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FDMUIsVUFBVUMsTUFBTSxFQUFFO0VBQUFiLGNBQUEsR0FBQWMsQ0FBQTtFQUNoQjtFQUNBLE1BQU1DLEtBQUssSUFBQWYsY0FBQSxHQUFBSSxDQUFBLE9BQUdZLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sQ0FBQztFQUFDakIsY0FBQSxHQUFBSSxDQUFBO0VBQzlDLElBQUksQ0FBQUosY0FBQSxHQUFBa0IsQ0FBQSxVQUFBSCxLQUFLLE1BQUFmLGNBQUEsR0FBQWtCLENBQUEsVUFBSUwsTUFBTSxDQUFDTixPQUFPLEdBQUU7SUFBQVAsY0FBQSxHQUFBa0IsQ0FBQTtJQUFBbEIsY0FBQSxHQUFBSSxDQUFBO0lBQzNCUyxNQUFNLENBQUNOLE9BQU8sQ0FBQ1ksYUFBYSxHQUFJLFVBQVNKLEtBQU0sRUFBQztFQUNsRCxDQUFDO0lBQUFmLGNBQUEsR0FBQWtCLENBQUE7RUFBQTtFQUFBbEIsY0FBQSxHQUFBSSxDQUFBO0VBQ0QsT0FBT1MsTUFBTTtBQUNmLENBQUMsRUFDRCxVQUFVTyxLQUFLLEVBQUU7RUFBQXBCLGNBQUEsR0FBQWMsQ0FBQTtFQUFBZCxjQUFBLEdBQUFJLENBQUE7RUFDZjtFQUNBaUIsT0FBTyxDQUFDQyxHQUFHLENBQUMsOEJBQThCLENBQUM7RUFBQ3RCLGNBQUEsR0FBQUksQ0FBQTtFQUM1QyxPQUFPbUIsT0FBTyxDQUFDQyxNQUFNLENBQUNKLEtBQUssQ0FBQztBQUM5QixDQUFDLENBQ0Y7QUFFRCxlQUFlakIsR0FBRyJ9