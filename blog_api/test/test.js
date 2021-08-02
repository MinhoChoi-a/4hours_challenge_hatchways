import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
chai.should();

//test each case of requests

describe("GET", () => {

        it("should be able to ping", (done) => {
            chai.request(app)
                .get('/api/ping')
                .end((err, res) => {
                    res.should.have.status(200);                    
                    done();
                })
        })

        it("should be able to get data", (done) => {
            chai.request(app)
                .get('/api/posts?tags=history,tech&sortBy=reads&direction=desc')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                })
        })

        it("should not be able to get data / empty parameter(tag)", (done) => {
            chai.request(app)
                .get('/api/posts')
                .end((err, res) => {
                    res.should.have.status(400);                    
                    done();
                })
        })

        it("should not be able to get data / wrong parameter(sortBy)", (done) => {
            chai.request(app)
                .get('/api/posts?tags=history,tech&sortBy=reas&direction=desc')
                .end((err, res) => {
                    res.should.have.status(400);                    
                    done();
                })
        })

        it("should not be able to get data / wrong parameter(direction)", (done) => {
            chai.request(app)
                .get('/api/posts?tags=history,tech&sortBy=reads&direction=dec')
                .end((err, res) => {
                    res.should.have.status(400);                    
                    done();
                })
        })
})


