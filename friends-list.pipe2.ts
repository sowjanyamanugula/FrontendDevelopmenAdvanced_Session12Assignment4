import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'LowercasePipe'
})

export class LowerCase implements PipeTransform{
    transform(value:string,args:string):string{
           return value.toLowerCase();
    }
}