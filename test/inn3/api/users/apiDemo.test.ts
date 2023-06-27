import { expect } from 'chai';
import AccountService from '../../../../fixtures/inn3/app/api/services/account.service.ts'

describe('api testing', async ()=>{
    it('should retrieve user data', async () => {
        const response = AccountService.retreiveListedUsers();
        const users = (await response).data;
        console.log(users)
        expect((await response).status).to.equal(200);
      });
      
})

