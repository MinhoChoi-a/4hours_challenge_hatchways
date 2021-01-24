import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
chai.should();

describe("ping", () => {

    describe("GET /", () => {

        it("should be able to ping", (done) => {
            chai.request(app)
                .get('/api/ping')
                .end((err, res) => {
                    res.should.have.status(200);
                    //res.body.should.be.a('object');
                    done();
                })
        })


        //another it
    })


})

