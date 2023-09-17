const request = require("supertest");
const app = require("../app.js"); // Import your Express app

describe("study test node", () => {
  let server;

  beforeAll(() => {
    server = app.listen(3000); // Start the server on port 3000
  });

  afterAll((done) => {
    server.close(done); // Close the server after all tests are done
  });

  describe("GET /", () => {
    it("should return status code 200", (done) => {
      request(server)
        .get("/")
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });

    it("should return 'hello world'", (done) => {
      request(server)
        .get("/")
        .expect(200)
        .expect("hello world")
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });
  });

  describe("GET /iti", () => {
    it("should return status code 200", (done) => {
      request(server)
        .get("/iti")
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });

    it("should return 'ITI is awesome'", (done) => {
      request(server)
        .get("/iti")
        .expect(200)
        .expect("ITI is awesome")
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });
  });
});
