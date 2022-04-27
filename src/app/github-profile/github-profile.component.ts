import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../profile-service.service';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private profileServiceService:ProfileServiceService) { }

  ngOnInit(): void {
  }

}
