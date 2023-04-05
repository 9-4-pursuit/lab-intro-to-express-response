// const supertest = require('supertest')

//  it('Testing to see if supertest works', ()=> {
//    expect(1).toBe(1)
//  })

// DEPENDENCIES
const app = require('../app.js')
const request = require('supertest')

describe("Test the root path", () => {
  test("It should respond 'I'll be back'", () => {
    return request(app)
      .get("/terminator")
      .then(response => {
        expect(response.statusCode).toBe(200)
      })
  })
})

describe("Test the root path", () => {
  test("It should respond 'Hello World'", () => {
    return request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200)
      })
  })
})

describe("Test the root path", () => {
    test("It should respond 'I'm listening'", () => {
      return request(app)
        .get("/Fraiser")
        .then(response => {
          expect(response.statusCode).toBe(200)
        })
    })
  })

  describe("Test the root path", () => {
    test("It should respond 'Don't make me angry'", () => {
      return request(app)
        .get("/Bruce-Banner")
        .then(response => {
          expect(response.statusCode).toBe(200)
        })
    })
  })

  describe("Test the root path", () => {
    test("It should respond 'To the Batmobile!'", () => {
      return request(app)
        .get("/Batman")
        .then(response => {
          expect(response.statusCode).toBe(200)
        })
    })
  })

  describe("Test the root path", () => {
    test("It should respond 'I'm king of the world!'", () => {
      return request(app)
        .get("/Jack-Dawson")
        .then(response => {
          expect(response.statusCode).toBe(200)
        })
    })
  })

  describe("Test the root path", () => {
    test("It should respond 'the name is Bond, James Bond'", () => {
      return request(app)
        .get("/James-Bond")
        .then(response => {
          expect(response.statusCode).toBe(200)
        })
    })
  })

  describe("Test the root path", () => {
    test("It should respond 'Yo, Adrian'", () => {
      return request(app)
        .get("/Rocky")
        .then(response => {
          expect(response.statusCode).toBe(200)
        })
    })
  })

  describe("Test the root path", () => {
    test("It should respond 'Bam!'", () => {
      return request(app)
        .get("/Emeril")
        .then(response => {
          expect(response.statusCode).toBe(200)
        })
    })
  })

  describe("Test the root path", () => {
    test("It should respond 'Resistance is futile'", () => {
      return request(app)
        .get("/Borg")
        .then(response => {
          expect(response.statusCode).toBe(200)
        })
    })
  })

  describe("Test the root path", () => {
    test("It should respond 'Is that your final answer?'", () => {
      return request(app)
        .get("/Regis")
        .then(response => {
          expect(response.statusCode).toBe(200)
        })
    })
  })
  
 
  
  
  
  
  
  