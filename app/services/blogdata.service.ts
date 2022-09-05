import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class BlogdataService {

  constructor(private http:HttpClient) { }
  getblogdata(){
   return this.http.get(`http://localhost:3000/blogs`)
  }

  saveblog(data:any){
    return this.http.post(`http://localhost:3000/blogs`,data)
  }

  deleteblogdata(id:any){
    return this.http.delete(`http://localhost:3000/blogs/${id}`)
  }

  updateblogdata(id:any,data:any){
    console.log("hvhvhv",id,data)
    return this.http.put(`http://localhost:3000/blogs/${id}`,data)
  }
}
