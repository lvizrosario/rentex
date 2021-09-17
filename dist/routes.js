"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCourse = void 0;
var CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
function CreateCourse(request, response) {
    CreateCourseService_1.default.execute({
        name: "NodeJS",
        educator: "Luiz",
        duration: 10,
    });
    CreateCourseService_1.default.execute({
        name: "ReactJS",
        educator: "Carlos",
    });
    return response.send();
}
exports.CreateCourse = CreateCourse;
