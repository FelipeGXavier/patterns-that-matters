export class Person {
  private readonly name: string;
  private birth: Date | null = null;
  private email: string = "";
  private address: string = "";
  private adminType: boolean = false;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  getBirth(): Date | null {
    return this.birth;
  }

  getEmail(): string {
    return this.email;
  }

  getAddress(): string {
    return this.address;
  }

  isAdminType(): boolean {
    return this.adminType;
  }

  withBirth(date: Date) {
    this.birth = date;
    return this;
  }

  withEmail(email: string) {
    this.email = email;
    return this;
  }

  withAddress(address: string) {
    this.address = address;
    return this;
  }

  withAdminType(adminType: boolean) {
    this.adminType = adminType;
    return this;
  }
}
