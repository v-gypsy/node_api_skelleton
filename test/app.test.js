// this test file will ensure all the env keys are properly set

require("dotenv").config("./.env")

const chai = require("chai"),
    chaiHttp = require("chai-http"),
    expect = chai.expect

chai.use(chaiHttp)

describe("ASSERT ENV VARIABLES", () => {
    it("should check if all env variables are loaded into app context (Node Process)", async () => {
        expect(process.env.PORT).to.exist.to.not.be.undefined.to.not.equal("")
        expect(process.env.NODE_ENV).to.exist.to.not.be.undefined.to.not.equal("")

        expect(process.env.DB_HOST).to.exist.to.not.be.undefined.to.not.equal("")
        expect(process.env.DB_PORT).to.exist.to.not.be.undefined.to.not.equal("")
        expect(process.env.DB_DIALECT).to.exist.to.not.be.undefined.to.not.equal("")
        expect(process.env.DB_USER).to.exist.to.not.be.undefined.to.not.equal("")
        expect(process.env.DB_PASS).to.exist.to.not.be.undefined.to.not.equal("")
        expect(process.env.DB_NAME).to.exist.to.not.be.undefined.to.not.equal("")
        expect(process.env.DB_REPLICA_HOST).to.exist.to.not.be.undefined.to.not.equal("")
    })
})