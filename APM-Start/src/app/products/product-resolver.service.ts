import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs'
import { catchError, map } from 'rxjs/operators';
import {Product, ProductResolved} from './product';
import {ProductService} from './product.service';

@Injectable({
    providedIn: 'root'
})

export class ProductResolver implements Resolve<ProductResolved>{

    constructor(private productService: ProductService) {
    
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductResolved> {
        const id = route.paramMap.get('id');
        if(isNaN(+id))
        {
            const message = `Product id was not a number: ${id}`;
            console.error(message);
            return of({product: null, error: message});
        }

        // note that we do not subscribe here because the resolver manages the subscription for us, and
        // does not continue until the data is available, and subscription is complete

        // one of the benefits of using resolver for data retrieval is to handles error.
        return this.productService.getProduct(+id)
        .pipe(
            map(product => ({product: product})),
            catchError(error =>{
                const message = `Retrieval errorr: ${error}`;
                console.error(message);
                return of({product: null, error: message})
            })
        );
    }
    
}