import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public propertyId: number;
  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.propertyId = this.route.snapshot.params['id'];
  }
  onBack(){
    this.router.navigate(['/']);
  }

}
