import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'UppercasePipe',
    
})

export class UpperCase implements PipeTransform{
    transform(value:string,args:string):string{
          return value.toUpperCase();
    }
}