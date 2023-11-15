export class UserLocalService {
  public static getUser() {
    const localUser = localStorage.getItem('user');
    if (localUser) {
      return JSON.parse(localUser).user
    }
  }
}
