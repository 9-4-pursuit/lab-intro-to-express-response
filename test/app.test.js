const request = require("supertest");
const app = require("../app.js");

// it ("Testing to see if supertest works", () => {
//     expect(1).toBe(2)
// })

describe('Test text in landing page', () => {
    test("It should respond the GET method", () => {
        return request(app)
        .get('/')
        .then(response => {
            expect(response.text).toBe("Hello, world!")
        })
    })
})

describe("Test the root path", () => {
  test("It should repond the GET method", () => {
    return request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("test the root path", () => {
    test("It should repond the GEt method", () => {
        return request(app)
            .get("/terminator")
            .then(reponse => {
                expect(reponse.statusCode).toBe(418)
            })
    })

})

describe("Test text of Emeril page", () => {
    test("It should respond 'Bam!", () => {
        return request(app)
            .get("/emeril")
            .then(response => {
                expect(response.text).toBe("Bam!")
            })
    })
})

describe("Test text of Steve McGarret page", () => {
    test("It should respond 'Book 'em Danno!'", () => {
        return request(app)
        .get("/steve-mcgarrett")
        .then(response => {
            expect(response.text).toBe("Book 'em Danno!")
        })
    })
})

describe("Test text of Coach Taylor page", () => {
    test("It should respond 'Clear eyes, full hearts, can't Lose'", () => {
        return request(app)
        .get("/coach-taylor")
        .then(response => {
            expect(response.text).toBe("Clear eyes, full hearts, can't Lose")
        })
    })
})

describe("Test text of Homer Simpson page", () => {
    test("It should respond 'D'Oh'", () => {
        return request(app)
        .get('/homer-simpson')
        .then(response => {
            expect(response.text).toBe("D'Oh")
        })
    })
})

describe("Test text of JJ Evans page", () => {
    test("It should respond 'Dy-no-myte!'", () => {
        return request(app)
        .get('/jj-evans')
        .then(response => {
            expect(response.text).toBe("Dy-no-myte!")
        })
    })
})

describe("Test text of Batman page", () => {
    test("It should respond 'To the Batmobile!'", () => {
        return request(app)
        .get("/batman")
        .then(response => {
            expect(response.text).toBe("To the Batmobile!")
        })
    })
})

describe("Test text of Hannibal Smith page", () => {
    test("It should respond 'I love it when a plan comes together'", () => {
        return request(app)
        .get("/hannibal-smith")
        .then(response => {
            expect(response.text).toBe("I love it when a plan comes together")
        })
    })
})

describe("Test the rooth path", () => {
    test("It should repsond the GET method", () => {
        return request(app)
        .get('/magic8')
        .then(response => {
            expect(response.statusCode).toBe(405)
        })
    })
})