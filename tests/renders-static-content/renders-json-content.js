let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
chai.should();

process.env.FILE_LOCATION = __dirname + '/files';

let app = require('../../app');

describe('returns the static content requested', function () {
    beforeEach(function(done) {
        done();
    });

    it('returns specific issues', function (done) {
        chai.request(app)
            .get('/test')
            .end((err, res) => {
                res.should.have.status(200);
                res.header['content-type'].should.eql("application/json; charset=utf-8");
                res.body.should.be.a('object');
                res.body.test.should.eql('static');
                done();
            });
    });
});