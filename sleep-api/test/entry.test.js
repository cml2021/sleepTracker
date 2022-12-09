import chai, {expect} from "chai";
import chaiHttp from "chai-http";
import * as entry from "../entry.js";
import app from "../server.js"

chai.use(chaiHttp);

before( (done) => {
    entry.clear();
    done();
});

after( (done) => {
    entry.clear();
    done();
})


describe ("Test Create Diary Endpoint", () => {

    it("should create a diary entry", (done) => {
        chai.request(app)
            .post("/diary")
            .set("content-type", "application/json")
            .send({
                "date": "2022-11-29",
                "timeIntoBed": "2022-11-29T22:30:00.000",
                "timeSleepAttempted": "2022-11-29T22:50:00.000",
                "sleepDelay": 15,
                "numberAwakenings": 2,
                "durationAwakenings": 15,
                "timeFinalAwakening": "2022-11-30T06:45:00.000",
                "timeOutOfBed": "2022-11-30T07:15:00.000",
                "qualityRating": "Good",
                "comments": "Slept pretty hard. Some difficulty getting up in the morning."
            })
            .end( (err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(201);
            })
            done();
    });

    it("should fail to create a diary entry", (done) => {
        chai.request(app)
            .post("/diary")
            .set("content-type", "application/json")
            .send({
                "date": "2022-11-29",
                "timeSleepAttempted": "2022-11-29T22:50:00.000",
                "sleepDelay": 15,
                "numberAwakenings": 2,
                "durationAwakenings": 15,
                "timeFinalAwakening": "2022-11-30T06:45:00.000",
                "timeOutOfBed": "2022-11-30T07:15:00.000",
                "qualityRating": "Good",
                "comments": "Slept pretty hard. Some difficulty getting up in the morning."
            })
            .end( (err, res) => {
                expect(res).to.have.status(500);
            });
            done();
    })

})