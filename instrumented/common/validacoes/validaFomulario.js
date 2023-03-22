function cov_16xgp0w0qc() {
  var path = "C:\\Users\\Leny\\Documents\\bytebank-v1\\src\\common\\validacoes\\validaFomulario.js";
  var hash = "fa807f31bbf47886bfd1621e5ed6275b285bcc42";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Leny\\Documents\\bytebank-v1\\src\\common\\validacoes\\validaFomulario.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 20
        },
        end: {
          line: 10,
          column: 4
        }
      },
      "1": {
        start: {
          line: 12,
          column: 23
        },
        end: {
          line: 19,
          column: 4
        }
      },
      "2": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 28,
          column: 3
        }
      },
      "3": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 62
        }
      },
      "4": {
        start: {
          line: 22,
          column: 26
        },
        end: {
          line: 22,
          column: 62
        }
      },
      "5": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 53
        }
      },
      "6": {
        start: {
          line: 23,
          column: 20
        },
        end: {
          line: 23,
          column: 53
        }
      },
      "7": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 25,
          column: 75
        }
      },
      "8": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 67
        }
      }
    },
    fnMap: {
      "0": {
        name: "validaDadosFormulario",
        decl: {
          start: {
            line: 3,
            column: 15
          },
          end: {
            line: 3,
            column: 36
          }
        },
        loc: {
          start: {
            line: 3,
            column: 43
          },
          end: {
            line: 29,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 22,
            column: 4
          },
          end: {
            line: 22,
            column: 62
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 22,
            column: 4
          },
          end: {
            line: 22,
            column: 62
          }
        }, {
          start: {
            line: 22,
            column: 4
          },
          end: {
            line: 22,
            column: 62
          }
        }],
        line: 22
      },
      "1": {
        loc: {
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 23,
            column: 53
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 23,
            column: 53
          }
        }, {
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 23,
            column: 53
          }
        }],
        line: 23
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
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "fa807f31bbf47886bfd1621e5ed6275b285bcc42"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_16xgp0w0qc = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_16xgp0w0qc();
import * as yup from 'yup';
async function validaDadosFormulario(user) {
  cov_16xgp0w0qc().f[0]++;
  let schemaLogin = (cov_16xgp0w0qc().s[0]++, yup.object().shape({
    email: yup.string().email('O email digitado é inválido').required('O campo email é obrigatório'),
    senha: yup.string().required('O campo de senha é obrigatório')
  }));
  let schemaCadastro = (cov_16xgp0w0qc().s[1]++, yup.object().shape({
    nome: yup.string().required('O campo de nome é obrigatório'),
    email: yup.string().email('O email digitado é inválido').required('O campo email é obrigatório'),
    senha: yup.string().required('O campo de senha é obrigatório')
  }));
  cov_16xgp0w0qc().s[2]++;
  try {
    cov_16xgp0w0qc().s[3]++;
    if (user.nome === '') {
      cov_16xgp0w0qc().b[0][0]++;
      cov_16xgp0w0qc().s[4]++;
      await schemaCadastro.validate(user);
    } else {
      cov_16xgp0w0qc().b[0][1]++;
    }
    cov_16xgp0w0qc().s[5]++;
    if (!user.nome) {
      cov_16xgp0w0qc().b[1][0]++;
      cov_16xgp0w0qc().s[6]++;
      await schemaLogin.validate(user);
    } else {
      cov_16xgp0w0qc().b[1][1]++;
    }
    cov_16xgp0w0qc().s[7]++;
    return {
      valid: true,
      path: '',
      message: 'Validação foi um sucesso!'
    };
  } catch (erro) {
    cov_16xgp0w0qc().s[8]++;
    return {
      valid: false,
      path: erro.path,
      message: erro.errors
    };
  }
}
export { validaDadosFormulario };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMTZ4Z3AwdzBxYyIsImFjdHVhbENvdmVyYWdlIiwieXVwIiwidmFsaWRhRGFkb3NGb3JtdWxhcmlvIiwidXNlciIsImYiLCJzY2hlbWFMb2dpbiIsInMiLCJvYmplY3QiLCJzaGFwZSIsImVtYWlsIiwic3RyaW5nIiwicmVxdWlyZWQiLCJzZW5oYSIsInNjaGVtYUNhZGFzdHJvIiwibm9tZSIsImIiLCJ2YWxpZGF0ZSIsInZhbGlkIiwicGF0aCIsIm1lc3NhZ2UiLCJlcnJvIiwiZXJyb3JzIl0sInNvdXJjZXMiOlsidmFsaWRhRm9tdWxhcmlvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gdmFsaWRhRGFkb3NGb3JtdWxhcmlvKHVzZXIpIHtcclxuICBsZXQgc2NoZW1hTG9naW4gPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgZW1haWw6IHl1cFxyXG4gICAgICAuc3RyaW5nKClcclxuICAgICAgLmVtYWlsKCdPIGVtYWlsIGRpZ2l0YWRvIMOpIGludsOhbGlkbycpXHJcbiAgICAgIC5yZXF1aXJlZCgnTyBjYW1wbyBlbWFpbCDDqSBvYnJpZ2F0w7NyaW8nKSxcclxuICAgIHNlbmhhOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoJ08gY2FtcG8gZGUgc2VuaGEgw6kgb2JyaWdhdMOzcmlvJyksXHJcbiAgfSk7XHJcblxyXG4gIGxldCBzY2hlbWFDYWRhc3RybyA9IHl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgICBub21lOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoJ08gY2FtcG8gZGUgbm9tZSDDqSBvYnJpZ2F0w7NyaW8nKSxcclxuICAgIGVtYWlsOiB5dXBcclxuICAgICAgLnN0cmluZygpXHJcbiAgICAgIC5lbWFpbCgnTyBlbWFpbCBkaWdpdGFkbyDDqSBpbnbDoWxpZG8nKVxyXG4gICAgICAucmVxdWlyZWQoJ08gY2FtcG8gZW1haWwgw6kgb2JyaWdhdMOzcmlvJyksXHJcbiAgICBzZW5oYTogeXVwLnN0cmluZygpLnJlcXVpcmVkKCdPIGNhbXBvIGRlIHNlbmhhIMOpIG9icmlnYXTDs3JpbycpLFxyXG4gIH0pO1xyXG5cclxuICB0cnkge1xyXG4gICAgaWYgKHVzZXIubm9tZSA9PT0gJycpIGF3YWl0IHNjaGVtYUNhZGFzdHJvLnZhbGlkYXRlKHVzZXIpO1xyXG4gICAgaWYgKCF1c2VyLm5vbWUpIGF3YWl0IHNjaGVtYUxvZ2luLnZhbGlkYXRlKHVzZXIpO1xyXG5cclxuICAgIHJldHVybiB7IHZhbGlkOiB0cnVlLCBwYXRoOiAnJywgbWVzc2FnZTogJ1ZhbGlkYcOnw6NvIGZvaSB1bSBzdWNlc3NvIScgfTtcclxuICB9IGNhdGNoIChlcnJvKSB7XHJcbiAgICByZXR1cm4geyB2YWxpZDogZmFsc2UsIHBhdGg6IGVycm8ucGF0aCwgbWVzc2FnZTogZXJyby5lcnJvcnMgfTtcclxuICB9XHJcbn1cclxuZXhwb3J0IHsgdmFsaWRhRGFkb3NGb3JtdWxhcmlvIH07XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGNBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGNBQUE7QUFmWixPQUFPLEtBQUtFLEdBQUcsTUFBTSxLQUFLO0FBRTFCLGVBQWVDLHFCQUFxQkEsQ0FBQ0MsSUFBSSxFQUFFO0VBQUFKLGNBQUEsR0FBQUssQ0FBQTtFQUN6QyxJQUFJQyxXQUFXLElBQUFOLGNBQUEsR0FBQU8sQ0FBQSxPQUFHTCxHQUFHLENBQUNNLE1BQU0sRUFBRSxDQUFDQyxLQUFLLENBQUM7SUFDbkNDLEtBQUssRUFBRVIsR0FBRyxDQUNQUyxNQUFNLEVBQUUsQ0FDUkQsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQ3BDRSxRQUFRLENBQUMsNkJBQTZCLENBQUM7SUFDMUNDLEtBQUssRUFBRVgsR0FBRyxDQUFDUyxNQUFNLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDLGdDQUFnQztFQUMvRCxDQUFDLENBQUM7RUFFRixJQUFJRSxjQUFjLElBQUFkLGNBQUEsR0FBQU8sQ0FBQSxPQUFHTCxHQUFHLENBQUNNLE1BQU0sRUFBRSxDQUFDQyxLQUFLLENBQUM7SUFDdENNLElBQUksRUFBRWIsR0FBRyxDQUFDUyxNQUFNLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDLCtCQUErQixDQUFDO0lBQzVERixLQUFLLEVBQUVSLEdBQUcsQ0FDUFMsTUFBTSxFQUFFLENBQ1JELEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUNwQ0UsUUFBUSxDQUFDLDZCQUE2QixDQUFDO0lBQzFDQyxLQUFLLEVBQUVYLEdBQUcsQ0FBQ1MsTUFBTSxFQUFFLENBQUNDLFFBQVEsQ0FBQyxnQ0FBZ0M7RUFDL0QsQ0FBQyxDQUFDO0VBQUNaLGNBQUEsR0FBQU8sQ0FBQTtFQUVILElBQUk7SUFBQVAsY0FBQSxHQUFBTyxDQUFBO0lBQ0YsSUFBSUgsSUFBSSxDQUFDVyxJQUFJLEtBQUssRUFBRSxFQUFFO01BQUFmLGNBQUEsR0FBQWdCLENBQUE7TUFBQWhCLGNBQUEsR0FBQU8sQ0FBQTtNQUFBLE1BQU1PLGNBQWMsQ0FBQ0csUUFBUSxDQUFDYixJQUFJLENBQUM7SUFBQSxDQUFDO01BQUFKLGNBQUEsR0FBQWdCLENBQUE7SUFBQTtJQUFBaEIsY0FBQSxHQUFBTyxDQUFBO0lBQzFELElBQUksQ0FBQ0gsSUFBSSxDQUFDVyxJQUFJLEVBQUU7TUFBQWYsY0FBQSxHQUFBZ0IsQ0FBQTtNQUFBaEIsY0FBQSxHQUFBTyxDQUFBO01BQUEsTUFBTUQsV0FBVyxDQUFDVyxRQUFRLENBQUNiLElBQUksQ0FBQztJQUFBLENBQUM7TUFBQUosY0FBQSxHQUFBZ0IsQ0FBQTtJQUFBO0lBQUFoQixjQUFBLEdBQUFPLENBQUE7SUFFakQsT0FBTztNQUFFVyxLQUFLLEVBQUUsSUFBSTtNQUFFQyxJQUFJLEVBQUUsRUFBRTtNQUFFQyxPQUFPLEVBQUU7SUFBNEIsQ0FBQztFQUN4RSxDQUFDLENBQUMsT0FBT0MsSUFBSSxFQUFFO0lBQUFyQixjQUFBLEdBQUFPLENBQUE7SUFDYixPQUFPO01BQUVXLEtBQUssRUFBRSxLQUFLO01BQUVDLElBQUksRUFBRUUsSUFBSSxDQUFDRixJQUFJO01BQUVDLE9BQU8sRUFBRUMsSUFBSSxDQUFDQztJQUFPLENBQUM7RUFDaEU7QUFDRjtBQUNBLFNBQVNuQixxQkFBcUIifQ==