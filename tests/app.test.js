const app = require('../app.js')
const request = require('supertest')
// it('Testing to see if supertest works', ()=> {
//     expect(1).toBe(1)
// })

// it('Testing to see if supertest works', ()=> {
//     expect(1).toBe(2)
// })

describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app)
            .get("/")
            .then(response => {
                expect(response.statusCode).toBe(200)
            })
    })
})
describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app)
            .get("/terminator")
            .then(response => {
                expect(response.statusCode).toBe(418)
            })
    })
})
describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app)
            .get("/tim-gunn")
            .then(response => {
                expect(response.statusCode).toBe(200)
            })
    })
})
describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app)
            .get("/emeril")
            .then(response => {
                expect(response.statusCode).toBe(200)
            })
    })
})
describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app)
            .get("/coach-taylor")
            .then(response => {
                expect(response.statusCode).toBe(200)
            })
    })
})
describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app)
            .get("/homer-simpson")
            .then(response => {
                expect(response.statusCode).toBe(200)
            })
    })
})
describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app)
            .get("/fraiser")
            .then(response => {
                expect(response.statusCode).toBe(200)
            })
    })
})
describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app)
            .get("/regis")
            .then(response => {
                expect(response.statusCode).toBe(200)
            })
    })
})
describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app)
            .get("/zeus")
            .then(response => {
                expect(response.statusCode).toBe(200)
            })
    })
})
describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app)
            .get("/james-bond")
            .then(response => {
                expect(response.statusCode).toBe(200)
            })
    })
})
describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app)
            .get("/frankenstein")
            .then(response => {
                expect(response.statusCode).toBe(200)
            })
    })
})
describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app)
            .get("/jim-lovell")
            .then(response => {
                expect(response.statusCode).toBe(200)
            })
    })
})
describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app)
            .get("/magic8")
            .then(response => {
                expect(response.statusCode).toBe(200)
            })
    })
})
describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app)
            .get("/")
            .then(response => {
                expect(response.statusCode).toBe(200)
            })
    })
})