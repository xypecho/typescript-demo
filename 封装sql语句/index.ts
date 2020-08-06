interface DBI<T> {
    add(info: T): boolean;
    delete(id: number): boolean;
    update(info: T, id: number): boolean;
    get(id: number): any[];
}

class mysqlDb<T> implements DBI<T>{
    add(info: T): boolean {
        console.log(info)
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        throw new Error("Method not implemented.");
    }

}

class User {
    public name: string | undefined;
    public password: string | undefined;
}

var u = new User();
u.name = 'admin';
u.password = '123456';

var omysqlDb=new mysqlDb<User>();
omysqlDb.add(u);
