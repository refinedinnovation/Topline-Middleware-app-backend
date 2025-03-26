"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddFtp = void 0;
const shared_1 = require("@/shared");
const ftp_1 = require("@/services/ftp/ftp");
const AddFtp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const data = req.body;
    req.body.createdBy = (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.firstName;
    req.body.isSecure = true;
    const newFtp = yield (0, ftp_1.createFtp)(data);
    return (0, shared_1.ApiResponse)(true, "New Ftp Added Successfully", newFtp, 201, res);
});
exports.AddFtp = AddFtp;
