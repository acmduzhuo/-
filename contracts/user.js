"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apis_1 = require("../configs/apis");
var helper_1 = require("./helper");
exports.contractUserToken = helper_1.genNormalContract(apis_1.default.userToken);
exports.contractUserTokenExist = helper_1.genNormalContract(apis_1.default.userTokenExist);
exports.contractUserInfo = helper_1.genTokenContract(apis_1.default.userInfo);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBa0M7QUFDbEMsbUNBQStEO0FBZWxELFFBQUEsaUJBQWlCLEdBQUcsMEJBQWlCLENBQXNDLGNBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQVUxRixRQUFBLHNCQUFzQixHQUFHLDBCQUFpQixDQUFtQyxjQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7QUFjakcsUUFBQSxnQkFBZ0IsR0FBRyx5QkFBZ0IsQ0FBOEIsY0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwaSBmcm9tICcuLi9jb25maWdzL2FwaXMnO1xuaW1wb3J0IHsgZ2VuTm9ybWFsQ29udHJhY3QsIGdlblRva2VuQ29udHJhY3QgfSBmcm9tICcuL2hlbHBlcic7XG5cbi8qKlxuICogVXNlclRva2VuXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBJQ0lucHV0VXNlclRva2VuIHtcbiAgdXNlcm5hbWU6IHN0cmluZzsgLy8g55So5oi35ZCN77yI5a2m5Y+377yJXG4gIHBhc3N3b3JkOiBzdHJpbmc7IC8vIOWvhueggVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDT3V0cHV0VXNlclRva2VuIHtcbiAgdG9rZW46IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGNvbnRyYWN0VXNlclRva2VuID0gZ2VuTm9ybWFsQ29udHJhY3Q8SUNJbnB1dFVzZXJUb2tlbiwgSUNPdXRwdXRVc2VyVG9rZW4+KGFwaS51c2VyVG9rZW4pO1xuXG4vKipcbiAqIFVzZXJUb2tlbkV4aXN0XG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBJQ0lucHV0VXNlclRva2VuRXhpc3Qge1xuICB0b2tlbjogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgY29udHJhY3RVc2VyVG9rZW5FeGlzdCA9IGdlbk5vcm1hbENvbnRyYWN0PElDSW5wdXRVc2VyVG9rZW5FeGlzdCwgdW5kZWZpbmVkPihhcGkudXNlclRva2VuRXhpc3QpO1xuXG4vKipcbiAqIFVzZXJJbmZvXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBJQ091dHB1dFVzZXJJbmZvIHtcbiAgbmFtZTogc3RyaW5nO1x0Ly8g55So5oi355qE5aeT5ZCNXG4gIHVzZXJpZDogc3RyaW5nOyAvLyDnlKjmiLfnmoTlrablj7dcbiAgZGVwYXJ0bWVudDogc3RyaW5nOyAvLyDnlKjmiLfnmoTpg6jpl6gv5a2m6ZmiXG4gIGZsb29yOiBzdHJpbmc7IC8vIOeUqOaIt+eahOWuv+iIjealvFxuICByb29tOiBzdHJpbmc7IC8vIOeUqOaIt+eahOaIv+mXtOWPt1xufVxuXG5leHBvcnQgY29uc3QgY29udHJhY3RVc2VySW5mbyA9IGdlblRva2VuQ29udHJhY3Q8dW5kZWZpbmVkLCBJQ091dHB1dFVzZXJJbmZvPihhcGkudXNlckluZm8pO1xuIl19