import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../user';
import { Repository } from '../repository';
import { promise } from 'protractor';
import { resolve, reject } from 'q';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GitSearchService {
  user:User;
  repo:Repository;
  constructor(public http:HttpClient) {
    this.user = new User('','','','','',0,0,new Date,0,'');
    this.repo = new Repository('', '', '');
   }
   searchUsers(searchTerm:string){
    console.log(searchTerm)
    interface ApiResponse {
    avatar_url:string;
  login:string;
  company: string;
  location: string;
    name: string;
  followers: number;
  following: number;
  created_at: Date;
  public_repos: number;
  html_url: string;
    }
    let searchPoint = 'https://api.github.com/users/' + searchTerm + '?access_token=' + environment.GITAPIKEY;
    console.log(searchPoint);

    let promise = new Promise((resolve, reject) => {

      this.http.get<ApiResponse>(searchPoint).toPromise().then(
        (results) => {

          console.log(results);
          this.user = results;
          console.log(this.user);

          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
    return promise;
  }

  getRepos(searchTerm) {

    interface ApiResponse {
     name: string;
     description: string;
     html_url: string;
     
    }

    let searchPoint = 'https://api.github.com/users/' + searchTerm + '/repos?access_token=' + environment.GITAPIKEY;

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(searchPoint).toPromise().then(
        (repoResults) => {
          console.log(repoResults);
          this.repo = repoResults;
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
    return promise;
  }
}
