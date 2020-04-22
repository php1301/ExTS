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
const app_1 = require("../src/app");
const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;
describe("GET api/genres", () => {
    it("GET 200", (done) => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request(app_1.default).get("/api/genres");
        expect(res.status).to.equal(200);
        done();
    }));
});
