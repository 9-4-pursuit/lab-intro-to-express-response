const request = require("supertest");
const app = require("../app");

it("testing for pulse", () => {
  expect(1).toBe(1);
});

describe("Test the root path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/")
        .then(response => {
            expect(response.statusCode).toBe(418)
        })
    })
  })
