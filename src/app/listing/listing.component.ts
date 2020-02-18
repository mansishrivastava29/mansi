import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  term: any;
  shortlistData = [];
  displaySelected = false;
  filterData = [
    {
      firstName: 'arjun',
      lastName: 'Schimmel',
      address: '7687 Jadon Port',
      email: "arjun@gmail.com",
      phone: "989898989"
    },
    {
      firstName: 'Priyas kinny',
      lastName: 'Ziemann PhD',
      address: '156 Streich Ports',
      email: "priyas@gmail.com",
      phone: "8787878798"
    },
    {
      firstName: 'amit kumar',
      lastName: 'Schumm',
      address: '5203 Jordon Center',
      email: "amit@gmail.com",
      phone: "988889898"
    },
    {
      firstName: 'Gavin lucy',
      lastName: 'Leannon',
      address: '91057 Davion Club',
      email: "gavin@gmail.com",
      phone: "8967676768"
    },
    {
      firstName: 'mansi shrivastava',
      lastName: 'Leuschke',
      address: 'Jaipur',
      email: 'mansishrivastava12@gmail.com',
      phone: "9602344067"
    }
  ];

  shortlist(item, i) {
    this.filterData[i]['shortlist'] = 'added';
    console.log(this.filterData);
    this.shortlistData.push(item);
    console.log(this.shortlistData);
  }
  ngOnInit() { }
  openSelected() {
    if (this.displaySelected == false) { this.displaySelected = true; }
    else{
      this.displaySelected=false;
    }
  }
}