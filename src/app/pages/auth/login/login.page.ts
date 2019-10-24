import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
jwt = new JwtHelperService;
  constructor(
      private modalController: ModalController,
      private authService: AuthService,
      private navCtrl: NavController,
      private alertService: AlertService
  ) { }
  ngOnInit() {
  }
  // Dismiss Login Modal
  dismissLogin() {
    this.modalController.dismiss();
  }
  // On Register button tap, dismiss login modal and open register modal
  async registerModal() {
    this.dismissLogin();
    const registerModal = await this.modalController.create({
      component: RegisterPage
    });
    return await registerModal.present();
  }
  login(form) {
    this.authService.login(form.value.username, form.value.password).subscribe(
        (data) => {
          this.alertService.presentToast("Logged In");
    
          if (data) {
                       //localStorage.setItem('token', data.token);
                       //const Decode = this.jwt.decodeToken(data.token);
                       //localStorage.setItem('username', Decode.username);
                       //localStorage.setItem('roles', Decode.roles[0]);
                       //localStorage.setItem('nom', Decode.nom);
               
                  }
        },
        error => {
          console.log(error);
        },
        () => {
          this.dismissLogin();
          this.navCtrl.navigateRoot('/dashboard');
        }
    );
  }
}
