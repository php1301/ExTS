import app from "../src/app";
import * as request from "supertest";
import * as chai from "chai";
const expect = chai.expect;
describe("GET api/genres", () => {
	it("GET 200", async (done) => {
		const res = await request(app).get("/api/genres");
		expect(res.status).to.equal(200);
		done();
	});
});
