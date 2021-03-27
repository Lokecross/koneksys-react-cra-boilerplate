export interface IUser {
  reposAmount: number;
  createdAt: Date;
}

export interface IUserApiModel {
  public_repos: number;
  created_at: string;
}

export default class User implements IUser {
  public readonly reposAmount: number;

  public readonly createdAt: Date;

  constructor(reposAmount: number, createdAt: Date) {
    this.reposAmount = reposAmount;
    this.createdAt = createdAt;
  }

  static fromApiModel(apiModel: IUserApiModel) {
    const { created_at, public_repos } = apiModel;

    const createdAt = new Date(Date.parse(created_at));

    return new User(public_repos, createdAt);
  }
}
