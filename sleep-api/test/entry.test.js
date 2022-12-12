import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import * as entry from "../entry.js";
import app from "../server.js"

chai.use(chaiHttp);

before((done) => {
    entry.clear();
    done();
});

after((done) => {
    entry.clear();
    done();
})


describe("Test Create Diary Endpoint", () => {

    it("should create a diary entry", (done) => {
        chai.request(app)
            .post("/diary")
            .set("content-type", "application/json")
            .send({
                "date": "2022-11-28",
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
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(201);
            })
        done();
    })
});


describe("Test calculating summary statistics", () => {

    const timeIntoBed = new Date("January 1, 2022 22:00:00");
    const timeOutOfBed = new Date("January 2, 2022 6:30:00");
    const timeSleepAttempted = new Date("January 1, 2022 22:30:00");
    const timeFinalAwakening = new Date("January 2, 2022 6:00:00");

    it("should calculate durationInBed, durationAsleep, sleepEfficiency", () => {
        const result = entry.calcStats(timeIntoBed, timeOutOfBed, timeSleepAttempted, timeFinalAwakening)
        expect(result[0]).to.be.equal(510);
        expect(result[1]).to.be.equal(450);
        expect(result[2]).to.be.equal(88);
    });
})