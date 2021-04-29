export class User {

  id: number;
  name: string;
  password: string;
  enabled: boolean;

  constructor(name: string, password: string, enabled: boolean)
  {
    this.name = name;
    this.password = password;
    this.enabled = enabled;
  }
}
