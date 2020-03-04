import chai from 'chai';
import chaiHttp from 'chai-http';
// import app from '../index';
import db from '../../models';

const { expect } = chai;
chai.use(chaiHttp);

describe('LIKE/DISLIKE TESTS', () => {
  it('should increase the user likes by 1', async () => {
    const id = '5bb72db7-5514-4a50-9g15-e23f103116d3';
    const increment = await db.Facilities.increment('likes', { where: { id } });
    expect(increment).to.be.an('array');
    expect(increment[0][0][0].likes).to.equal(3);
  });

  it('should remove the like of the facility and return to 0', async () => {
    const id = '5bb72db7-5514-4a50-9g15-e23f103116d3';
    const decrement = await db.Facilities.decrement('likes', { where: { id } });
    expect(decrement).to.be.an('array');
    expect(decrement[0][0][0].likes).to.equal(2);
  });
});