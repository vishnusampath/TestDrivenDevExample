var should = require("chai").should(),
expect = require("chai").expect,
assert = require("chai").assert,
supertest = require("supertest"),
app = require("../bin/www");

var url = supertest("http://localhost:8080");

describe("Testing the first route", function(err){
  it("should handle the request", function(done){
    url
        .get("/")
        .expect(200)
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
        //  expect(res.text).to.be.equal('<!DOCTYPE html><html><head><title>Express</title><link rel="stylesheet" href="/stylesheets/style.css"></head><body><h1>Express</h1><p>Welcome to Express</p></body></html>');
        expect(res.text).contains('Welcome to Express');
        //  res.text.should.be.equal("Hello!");
        //  assert(res.text == "Hello!","Test has failed");
          done();
        });
  });
});

describe("Testing the second route", function(err){
  it("should handle and send the computed info", function(done){
    url
        .get("/product/5/6")
        .expect(200)
        .end(function(err,res){
          should.not.exist(err);
          parseFloat(res.text).should.be.equal(30);
          done();
        });

  });
});

describe("Testing the third route", function(err){
  it("should handle and send the JSON data Part 1", function(done){
    url
        .get("/data")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
          should.not.exist(err);
          var myObj = JSON.parse(res.text);
          myObj[1].Title.should.be.equal("Inception");
          done();
        });

  });

  it("should handle and send the JSON data Part 2", function(done){
    url
        .get("/data")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
          should.not.exist(err);
          var myObj = JSON.parse(res.text);
          myObj[0].Title.should.be.equal("Inception");
          done();
        });

  });

});
