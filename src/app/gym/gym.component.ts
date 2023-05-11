import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { log } from 'console';

@Component({
  selector: 'app-gym',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.css']
})
export class GymComponent implements OnInit {

  constructor(private appService:AppServiceService) { }
 classes:any[]=[];

  ngOnInit(): void {
    this.getData();
  }

  scrollToSection(sectionId: string): void {
    const yOffset:number = -40; 
const element = document.getElementById(sectionId);

    if (element) {
      const y:any = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      // element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  }

  getData(){
    this.appService.getRequest('http://127.0.0.1:5000/api/class').subscribe((res)=>{
      console.log(res);
      this.classes= res.data;
      
    });
  }
}
