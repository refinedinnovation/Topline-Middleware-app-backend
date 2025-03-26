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
exports.UpdateFtp = void 0;
const shared_1 = require("@/shared");
const ftp_1 = require("@/services/ftp/ftp");
const UpdateFtp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const data = req.body;
    const ftpToUpdate = yield (0, ftp_1.updateFtp)((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a._id, data);
    return (0, shared_1.ApiResponse)(true, "Ftp Updated Successfully", ftpToUpdate, 201, res);
});
exports.UpdateFtp = UpdateFtp;
