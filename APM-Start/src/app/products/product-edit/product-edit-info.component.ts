import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Product } from '../product';

@Component({
  templateUrl: './product-edit-info.component.html'
})
export class ProductEditInfoComponent implements OnInit {
  @ViewChild(NgForm, {static: false}) productForm: NgForm;

  errorMessage: string;
  //product = { id: 1, productName: 'test', productCode: 'test', description: 'test' };
  product: Product;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent.data.subscribe(data => {
      if(this.productForm)
      {
        // reset the form when the user selects toa dd new product. it reset the validation state of the form
        this.productForm.reset()
      }
      this.product = data['resolvedData'].product;
    })
  }
}
