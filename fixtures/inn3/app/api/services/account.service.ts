import request from 'axios';
import Accounts from '../endpoints/accounts.ts'

class AccountService {

    public async retreiveListedUsers(){
        let response = request.get(Accounts.listUsersResponse);
        return response;
    }
}

export default new AccountService();