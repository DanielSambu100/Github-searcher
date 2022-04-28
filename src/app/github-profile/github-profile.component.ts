import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../profile-service.service';
import { Profile } from '../profile';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  user:any;
  profile:Profile | undefined;
  constructor(private profileServiceService:ProfileServiceService) { }

  ngOnInit(): void {}
  onSubmit(userName:string){
    console.log(userName);

    this.profileServiceService.getUser(userName).then((result)=>{
      console.log(result);
      this.userName=result;
    })

  }
}
