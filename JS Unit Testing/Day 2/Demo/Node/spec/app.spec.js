const request = require("request");
describe("study test node",()=>{
    var server;
    var data = {}
//? test endpoint "bonus ==> two endpoints"
    beforeAll((done)=>{
        server = require("../app.js");
        request.get("http://localhost:3000/", (error, res,body)=>{
          data.status =  res.statusCode;
          data.body =  body;
          done()
        })
    });
    afterAll(()=>{
        server.close();
    });

    it("test status code",()=>{
        expect(data.status).toEqual(200)
    })
    it("test body",()=>{
        expect(data.body).toEqual("hello world")
    })
})