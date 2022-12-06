import * as entry from "../entry.js";
import {expect} from "chai";

describe("Entry model methods", () => {
    describe("Create a new entry", () => {
        it("Should return a new entry document with correct property values", async () => {
            const response = await entry.createEntry(
                "2022-11-29",
                "2022-11-29T22:30:00.000",
                "2022-11-29T22:50:00.000",
                2,
                15,
                "2022-11-30T06:45:00.000",
                "2022-11-30T07:15:00.000",
                "Good",
                "Slept pretty hard. Some difficulty getting up in the morning."
            )
            expect(response["date"].getTime()).to.equal(new Date("2022-11-29T00:00:00.000Z").getTime());
            expect(response["timeIntoBed"].getTime()).to.equal(new Date("2022-11-30T05:30:00.000Z").getTime());
            expect(response["timeSleepAttempted"].getTime()).to.equal(new Date("2022-11-30T05:50:00.000Z").getTime());
            expect(response["numberAwakenings"]).to.equal(2);
            expect(response["durationAwakenings"]).to.equal(15);
            expect(response["timeFinalAwakening"].getTime()).to.equal(new Date("2022-11-30T13:45:00.000Z").getTime());
            expect(response["timeOutOfBed"].getTime()).to.equal(new Date("2022-11-30T14:15:00.000Z").getTime());
            expect(response["qualityRating"]).to.equal("Good");
            expect(response["comments"]).to.equal("Slept pretty hard. Some difficulty getting up in the morning.");
        })
    })
})
