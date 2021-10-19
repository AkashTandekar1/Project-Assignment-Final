import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  title = 'sellerform';
  currentIndex = -1;
  mydata:any = [];
  currencies=["USD","EUR","GBR","INR"];
  offices=["JP","UK","USA","AUS"];

  myform1:FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,Validators.email]),
    currency: new FormControl(),
    office: new FormControl() ,
    contactnumber: new FormControl(),
    Dealdone:new FormControl('', [Validators.required]),
    Dealbidded:new FormControl('', [Validators.required])
    

  });

  constructor() { }

  ngOnInit(): void {
  }


  submit()
  {
    console.log("inside submit")
    console.log(this.myform1.value)
    console.log(this.currentIndex)
    if(this.currentIndex == -1)
    this.mydata.push(this.myform1.value)
    else
    {
      this.mydata[this.currentIndex] = this.myform1.value;
      this.currentIndex == -1;
    }
    console.log(this.mydata)
    this.myform1.reset()
    
  }

  editData(obj,i)
  {
    console.log("inside edit")
    this.myform1.patchValue(obj)
    this.currentIndex = i;
  }

  ondelete(i)
  {
    this.mydata.splice(i,1)

  }
}
