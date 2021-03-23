export interface IUser {
  name: string;
  expiration: Date;
}

export interface IUserApiModel {
  name: string;
  expirationTokenTime: string;
}

export default class User implements IUser {
  public readonly name: string;

  public readonly expiration: Date;

  constructor(name: string, expiration: Date) {
    this.name = name;
    this.expiration = expiration;
  }

  public isAuth(): boolean {
    const today = new Date();

    return this.expiration < today;
  }

  static fromApiModel(apiModel: IUserApiModel) {
    const expirationTokenTime = new Date(
      Date.parse(apiModel.expirationTokenTime),
    );

    const { name } = apiModel;

    return new User(name, expirationTokenTime);
  }
}
