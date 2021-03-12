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
            .set('Content-Type', 'text/xml')
            .end((err, res) => {
                res.should.have.status(200);
                res.header['content-type'].should.eql("text/xml; charset=utf-8");
                res.text.should.contain('Hello world');
                done();
            });
    });
});