import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs'
import {Product} from './product';
import {ProductService} from './product.service';

@Injectable({
    providedIn: 'root'
})

export class ProductResolver implements Resolve<Product>{

    constructor(private productService: ProductService) {
    
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
        const id = + route.paramMap.get('id');

        // note that we do not subscribe here because the resolver manages the subscription for us, and
        // does not continue until the data is available, and subscription is complete

        // one of the benefits of using resolver for data retrieval is to handles error.
        return this.productService.getProduct(id);
    }
    
}