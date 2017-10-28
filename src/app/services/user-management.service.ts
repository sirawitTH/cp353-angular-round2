import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserManagementService {

  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) { }

  getAllUser() {
    return this.http.get("http://61.90.233.80:8082/admin/all")
      .map((res) => res.json());
  }

  createNewUser(username, password, email, status) {

    const body = {
      "username": username,
      "email": email,
      "password": password,
      "status": status
    }

    return this.http.post("http://61.90.233.80:8082/admin/newadmin", body)
      .map((res) => res.json());
  }

  deleteUser(id) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'q=0.8;application/json;q=0.9'
    });
    this.options = new RequestOptions({ headers: this.headers });

    console.log("http://61.90.233.80:8082/admin/removeadmin/" + id);
    return this.http.delete("http://61.90.233.80:8082/admin/removeadmin/" + id, this.options)
      .map((res) => res.json());
  }

  editUser(id, username, password, email, status) {

    const body = {
      "adm_id": id,
      "username": username,
      "email": email,
      "password": password,
      "status": status
    }

    return this.http.put("http://61.90.233.80:8082/admin/editadmin/" + id, body)
      .map((res) => res.json());
  }

}
