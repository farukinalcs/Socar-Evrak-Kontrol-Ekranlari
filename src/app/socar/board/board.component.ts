import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SocarService } from '../socar.service';
import { Subscription } from 'rxjs';
import { HelperService } from 'src/app/_helpers/helper.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  private unsubscribe: Subscription[] = [];

  socarEvrak:any;
  interval:any;
  constructor(
    private socar : SocarService,
    private ref: ChangeDetectorRef,
    public helper: HelperService,
    public datepipe:DatePipe) { }

  ngOnInit(): void {

    // console.log("userLoginModel",this.helper.userLoginModel);
    this.interval = setInterval(() => {
      this.getData();
    }, 5000);
  }

  tckn(number:string):string{
    const start = number.substring(0,2);
    const end = number.substring(9);
    const masked = start+"*******"+end;
    return masked;
  }

  kalanSure(evrak) {
    if (!evrak) {
      return ''; // Eğer evrak değeri undefined ise boş bir string döndür
    }
    var current: any = new Date(); // Şu anki tarih
    var dateEvrakString: string = evrak; // 'dd-MM-yyyy' formatında gelen tarih string'i
    var dateEvrak: any = this.parseDateString(dateEvrakString); // 'dd-MM-yyyy' formatındaki string'i Date nesnesine dönüştür
    var kalangun: any = Math.floor((dateEvrak - current) / (1000 * 60 * 60 * 24));

    return kalangun;
  }

  parseDateString(dateString: string): Date {
    const parts = dateString.split('-');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Ay, 0-based index ile tutulur
    const year = parseInt(parts[2], 10);
    
    return new Date(year, month, day);
  }

  getData(){
    this.unsubscribe.push(this.socar.getData(this.helper.userLoginModel.tokenid)
    .subscribe((data)=>{
      this.socarEvrak = data[0];
      // console.log("SOCAR KART OKUTMA",this.socarEvrak);
      this.ref.detectChanges();
    }))
  }


  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
    clearInterval(this.interval);
  }

}
