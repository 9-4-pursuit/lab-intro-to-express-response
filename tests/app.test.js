const app = require('../app.js');
const request = require('supertest')

 it('Testing to see if supertest works', ()=> {
   expect(1).toBe(1)
 })

 describe("Test the root path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/terminator")
        .then(res => {
            expect(res.statusCode).toBe(418)
        })
    })
  })

 describe("Test the root path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/homer-simpson")
        .then(res => {
            expect(res.statusCode).toBe(200)
        })
    })
  })

 describe("Test the root path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/batman")
        .then(res => {
            expect(res.statusCode).toBe(200)
        })
    })
  })

 describe("Test the root path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/tony-montana")
        .then(res => {
            expect(res.statusCode).toBe(200)
        })
    })
  })

 describe("Test the root path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/zeus")
        .then(res => {
            expect(res.statusCode).toBe(200)
        })
    })
  })

 describe("Test the root path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/travis-bickle")
        .then(res => {
            expect(res.statusCode).toBe(200)
        })
    })
  })

 describe("Test the root path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/jack-dawson")
        .then(res => {
            expect(res.statusCode).toBe(200)
        })
    })
  })

 describe("Test the root path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/frankenstein")
        .then(res => {
            expect(res.statusCode).toBe(200)
        })
    })
  })

 describe("Test the root path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/gollum")
        .then(res => {
            expect(res.statusCode).toBe(200)
        })
    })
  })
  
