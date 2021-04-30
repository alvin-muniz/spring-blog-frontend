export class User {

  id: number;
  username: string;
  password: string;
  enabled: boolean;

  constructor(name: string, password: string, enabled: boolean)
  {
    this.username = name;
    this.password = password;
    this.enabled = enabled;
  }
}
