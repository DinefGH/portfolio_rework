import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceDash',
  standalone: true // Ensure the pipe is standalone
})
export class ReplaceDashPipe implements PipeTransform {

  transform(value: string): string {
    return value
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

}