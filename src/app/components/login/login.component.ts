import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/assets/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
 
  allUser:User[] = [];

  current:String="";

  hide = true;

  hide_insc = true;

  password = new FormControl('', [Validators.required]);

  user = new FormControl('', Validators.required);

  loginform = new FormGroup({ user: this.user, password: this.password });

  nom = new FormControl('', Validators.required);
  prenom = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  contact = new FormControl('', Validators.required);
  username_insc = new FormControl('', Validators.required);
  password_insc = new FormControl('', [Validators.required , Validators.minLength(7)]);
  sexe = new FormControl('true', Validators.required);
  inscriptionform = new FormGroup({ nom: this.nom, prenom: this.prenom, email: this.email, contact: this.contact, username: this.username_insc, password: this.password_insc, sexe: this.sexe });
  

  getEmailError() {
    if (this.email.hasError('required')) {
      return 'Complétez ce champ pour continuer';
    }

    return this.email.hasError('email') ? 'Pas un email valide' : '';
  }

  getErrorMessage(champ: FormControl) {
    if (champ.hasError('required')) {
      return 'Complétez ce champ pour continuer';
    }
    return '';
  }

  getPasswordError() {
    if (this.password_insc.hasError('required')) {
      return 'Complétez ce champ pour continuer';
    }
    return (this.password_insc.hasError('minlength')) ? 'Mot de passe : 7 caractères minimum' : '';
  }

  formReset(form: FormGroup) {

    form.reset();

    Object.keys(form.controls).forEach(key => {
      form.get(key)?.setErrors(null);
    });
    
  }

  logout(){
    // Curentuser.isConnected = false;
    // Curentuser.status = "";
    // Curentuser.name = "";
    // Curentuser.id = "";
    // Curentuser.username = "";
    // this.isConnected = Curentuser.isConnected;
    // this.router.navigate(['']);
    // this.api.getAllUser().subscribe(
    //   data => {
    //     this.allUser = data;
    //   },
    //   err => {
    //     console.log(err)
    //   }
    // )
    // this.user.setValue('');
    // this.password.setValue('');
  }

  onSubmitLogin() {
    if (this.loginform.valid) {
      console.log(this.user);
      var user: any = this.allUser.find(
        x => (x.username === this.user.value) || (x.email === this.user.value) && (x.password === this.password.value)
      );
      if (user !== undefined) {
        var btnClose = document.getElementById("closeLog");
        btnClose?.click();
        this.openSnackBar("Connexion réussie", "Fermer");
        // Curentuser.name = user.nom + " " + user.prenom; 
        // Curentuser.username = user.username;
        // Curentuser.id = user._id;
        // Curentuser.status = user.status;
        // Curentuser.sexe = user.sexe;
        // this.current = Curentuser.username;
        // Curentuser.isConnected = true;
        // this.isConnected = Curentuser.isConnected;
        // console.log(Curentuser);
        // switch (Curentuser.status) {
        //   case "Candidat":
        //     this.router.navigate(['/candidat']);
        //     break;
        //   case "Recruteur":
        //     this.router.navigate(['/recruteur']);
        //     break;
        //   case "Administrateur":
        //     this.router.navigate(['/admin']);
        //     break;
        //   default:
        //     break;
        // }
        
      }
      else {
        console.log("tsy miexiste");
        this.openSnackBarError("Erreur de connexion", "Fermer")
      }
      // this.formReset(this.loginform);
    }
  }

  onSubmitInscription() {
    // console.log(this.sexe.value)
    if (this.inscriptionform.valid) {
      this.createUser();
      this.formReset(this.inscriptionform);
    }
  }

  constructor(private snackBar: MatSnackBar,private api:UserService) { }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['green-snackbar']
    });
  }

  openSnackBarError(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['red-snackbar']
    });
  }
  openSnackBarWarning(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['orange-snackbar']
    });
  }
  ngOnInit(): void {
   this.getUserData();
  }

  //login
  getUserData() {

    this.api.getAllUser().subscribe(
      data => {
        this.allUser = data;
      },
      err => {
        console.log(err)
      }
    )
  }
  //inscription

  createUser() {
    var myUser = new User();
    // let encrypted:string = this.EncrDecr.set('123456$#@$^@1ERF', this.password_insc.value);
    myUser = {
      lastname: this.nom.value,
      firstname: this.prenom.value,
      phone: this.contact.value,
      email: this.email.value,
      password: this.password_insc.value,
      sexe: this.sexe.value,
      username: this.username_insc.value,
    }
    this.api.createUser(myUser).subscribe(
      data => {
        this.openSnackBar("Inscription réussie", "Fermer");
        var btn = document.getElementById("connecter");
        var btnClose = document.getElementById("closeInsc");
        btnClose?.click();
        btn?.click();
        // location.reload();
        // this.api.getAllUser().subscribe(
        // data => {
        //   this.allUser = data;
        //   var btn = document.getElementById("connecter");
        //   var btnClose = document.getElementById("closeInsc");
        //   btnClose?.click();
        //   btn?.click();
        // },
        // err => {
        //   console.log(err)
        // })
      }, err => {
        console.log(err);
        this.openSnackBarError("Erreur de l'inscription", "Fermer")
      }
    )
  }



}
