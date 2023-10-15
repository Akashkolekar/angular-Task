import { Component } from '@angular/core';
import { SbookserviceService } from '../sbookservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sbook',
  templateUrl: './sbook.component.html',
  styleUrls: ['./sbook.component.css']
})
export class SbookComponent {
  constructor(private sbookService: SbookserviceService, private route: Router) { }

  isEdit: boolean = false;
  errorMsg: any = '';
  errorMsgN: any = '';

  createAc() {
    this.isEdit = true;
  }
  loginAc() {
    this.isEdit = false;
  }


  createAcc(data: any) {
    this.sbookService.createData(data).subscribe((res) => {
      if (res) {
        this.errorMsgN = 'Successfully Created';
        setTimeout(() => { this.errorMsgN = undefined }, 3000);
      }
    })
  }
  loginPage(data: any) {

    this.sbookService.getData().subscribe((res: any) => {
      const user = res.find((a: any) => {
        return a.email === data.email && a.password === data.password;
      })

      if (user) {
        localStorage.setItem('userData', JSON.stringify(user));
        this.route.navigate(['post-page']);
      } else {
        this.errorMsg = 'username or password wrong'
        setTimeout(() => { this.errorMsg = undefined }, 3000);
      }

    })
  }
}
