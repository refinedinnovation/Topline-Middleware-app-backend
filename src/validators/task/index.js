"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaskValidation = exports.TaskInput = void 0;
const enum_1 = require("@/api/models/task/enum");
const celebrate_1 = require("celebrate");
const taskStatusValues = Object.values(enum_1.TaskStatus);
exports.TaskInput = {
    [celebrate_1.Segments.BODY]: celebrate_1.Joi.object().keys({
        title: celebrate_1.Joi.string().required(),
        description: (_a = celebrate_1.Joi === null || celebrate_1.Joi === void 0 ? void 0 : celebrate_1.Joi.string().max(100)) === null || _a === void 0 ? void 0 : _a.required(),
        status: celebrate_1.Joi.string().valid(...taskStatusValues).required(),
        dueDate: celebrate_1.Joi.string().pattern(/^\d{4}-\d{2}-\d{2}$/).required()
    })
};
exports.UpdateTaskValidation = {
    [celebrate_1.Segments.BODY]: celebrate_1.Joi.object().keys({
        title: celebrate_1.Joi.string(),
        description: celebrate_1.Joi.string().max(100),
        status: celebrate_1.Joi.string().valid(...taskStatusValues),
        dueDate: celebrate_1.Joi.string().pattern(/^\d{4}-\d{2}-\d{2}$/)
    }).or('title', 'description', 'status', 'dueDate')
};
