process.env.NODE_ENV = 'test';
import mongoose from 'mongoose';
import Hotel from '../lib/models/hotel';
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

chai.use(chaiHttp).should();

describe('Hotels', ()=>{
    describe('/GET hotels', () => {
        it('it should GET all hotels', (done) => {
            chai.request(server)
                .get('/api/hotels')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(3);
                    done();
                });
        });
    });
});
