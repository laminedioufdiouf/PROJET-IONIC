import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-transfere',
  templateUrl: './transfere.page.html',
  styleUrls: ['./transfere.page.scss'],
})
export class TransferePage implements OnInit {
      private transfere : FormGroup;
      constructor(private formBuilder: FormBuilder){
      this.transfere = this.formBuilder.group({
        nomexp: ['', Validators.required],
        prenomexp: ['', Validators.required],
        telephoneexp: ['', Validators.required],
        nomrecep: ['', Validators.required],
        prenomrecep: ['', Validators.required],
        telephonerecep: ['', Validators.required],
        codeenvoie: ['', Validators.required],
        montanttotal: ['', Validators.required],
       
      });
     }
    
  ngOnInit(){
    }
  // Dismiss transfere Modal
  logForm(){
    console.log(this.transfere.value)
   //res => {
    //console.log(res)
   /* localStorage.setItem('token', res.token)*/
   
  
  }
}

