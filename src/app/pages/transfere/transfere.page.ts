import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-transfere',
  templateUrl: './transfere.page.html',
  styleUrls: ['./transfere.page.scss'],
})
export class TransferePage implements OnInit {

    
  depotUserData = {}
 
    constructor(private modalController: ModalController, private authService: AuthService,private navCtrl: NavController,
      private alertService: AlertService,
      private toastr:ToastrService
      ){ }
  ngOnInit(){
    }
  

  transfere(form: NgForm) {
    this.authService.transfere(form.value.nomexp, form.value.prenomexp, form.value.telephoneexp,form.value.nomrecep, form.value.prenomrecep, form.value.telephonerecep, form.value.montantenvoie, form.value.montanttotal, form.value.numerocompte)
    .subscribe(
      res =>{
        console.log(res)
        this.toastr.success('envoie avec succsé', 'EMP. Register')
       
      },
      err =>console.log(err)
      );
        
  }

  }
  

