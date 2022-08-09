const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");

const api = supertest(app);

test("Check posting search prof. object", async () => {
  await api
    .post("/api/log/searchProfile")
    .send(searchProfile)
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

afterAll(() => {
  mongoose.connection.close();
});
