
const chai = require("chai"),
    chaiHttp = require("chai-http"),
    expect = chai.expect

chai.use(chaiHttp)

const app = require("../app"),
    helpers = require("../utils/helpers"),
    userService = require("../services/usersService"),
    userModel = require("../models").Users;

describe("Unit Test Cases For UsersService Layer", () => {
    it("Unit-Test for createUser function", async () => {

        let reqData = {
            body: {
                name: "test user",
                email: "test@gmail.com",
                password: await helpers.encryptPassword("test@123")
            }
        }

        let user = await userService.createUser(reqData);
        expect(user.name).to.equal(reqData.body.name)
        expect(user.email).to.equal(reqData.body.email)
    })

    afterEach(async () => {
        await userModel.destroy({
            where: {name: "test user"}
        })
    })
})

describe("E2E Users Module", () => {
    it("e2e test case-200", async () => {
        let res = await chai
            .request(app)
            .post("/user/create")
            .set('Content-Type', "application/json")
            .send({
                name: "test user",
                email: "test@gmail.com",
                password: "test@123"
            })

        expect(res.status).to.be.equal(200)
        expect(res.body.status).to.be.equal(1)
    })

    it("e2e test case-422 (name)", async () => {
        let res = await chai
            .request(app)
            .post("/user/create")
            .set('Content-Type', "application/json")
            .send({
                name: "",
                email: "test@gmail.com",
                password: "test@123"
            })

        expect(res.status).to.be.equal(422)
    })

    afterEach(async () => {
        await userModel.destroy({
            where: {name: "test user"}
        })
    })
})