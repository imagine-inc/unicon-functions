const CreateRandomUsers = require('../index').CreateRandomUsers;
//const assert = require('chai');
const httpMocks = require('node-mocks-http');
const events = require('events');
//const code from '../src/common/code';

describe('/CreateRandomUsers', () => {
  describe('OK', () => {
    it('should insert random users to db', (done) => {
      const req = httpMocks.createRequest({
        method: 'POST',
      });
      const res = httpMocks.createResponse({
        eventEmitter: events.EventEmitter
      });

      res.on('end', () => {
 //       assert.strictEqual(res.statusCode, code.http.OK);
 //       const data = JSON.parse(res._getData());
 //       assert.typeOf(data.nonce, 'number');
 //       assert.isAbove(data.nonce, 10);
        done();
      });

      CreateRandomUsers(req, res);
    });
  });

 // describe('Error', () => {
 //   describe('Invalid address', () => {
 //     it('should return InvalidArgument', (done) => {
 //       const req = httpMocks.createRequest({
 //         method: 'POST',
 //         headers: { authorization: `Bearer ${validToken}` },
 //         body: { address: '7E5F4552091A69125d5DfCb7b8C2659029395Bdf' }
 //       });
 //       const res = httpMocks.createResponse({
 //         eventEmitter: events.EventEmitter
 //       });

 //       res.on('end', () => {
 //         assert.strictEqual(res.statusCode, code.http.BadRequest);
 //         const data = JSON.parse(res._getData());
 //         assert.strictEqual(data.code, code.grpc.InvalidArgument);
 //         assert.include(data.error, 'invalid argument');
 //         done();
 //       });

 //       GetEthNonce(req, res);
 //     });
 //   });
 // });
});

