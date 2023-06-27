import ApiBase from './apiBase.ts';

class Accounts extends ApiBase{
    private listUsers = 'api/users?page=2';

    public get listUsersResponse() {
        return `${this.baseUrl}${this.listUsers}`;
    }
}

export default new Accounts();
