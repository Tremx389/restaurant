export enum Role {
  GUEST, USER, ADMIN
}

export class User {
  id: number;  

  username: String;
  password: String;
  email: String;
  role: Role;

  constructor(id?: number, username?: String, password?: String, email?: String, role?: Role) {
    this.id = id;
    this.username = username || "";
    this.password = password || "";
    this.email = email || "";
    this.role = role || Role.GUEST;
  }
}
