import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.page.html',
  styleUrls: ['./retrait.page.scss'],
})
export class RetraitPage implements OnInit {
  private transfere : FormGroup;
  constructor(private FormBuilder:FormBuilder) {
    this.transfere = this.FormBuilder.group({
      cni: ['', Validators.required],
      codeenvoie: ['', Validators.required],
    });
   
   }

  ngOnInit() {
  }
  logForm(){
    console.log(this.transfere.value)
   //res => {
    //console.log(res)
   /* localStorage.setItem('token', res.token)*/
   
  
  }
}
