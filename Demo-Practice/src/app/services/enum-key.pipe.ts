import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumKey',
})
export class EnumKeyPipe implements PipeTransform {
  transform(value: any, enumType: any): string {
    const keys = Object.keys(enumType).filter((key) =>
      isNaN(parseInt(key, 10))
    );
    return keys.find((key) => enumType[key] === value) || '';
  }
}

@Pipe({
  name: 'enumToDropdown',
})
export class EnumToDropdownPipe implements PipeTransform {
  transform(value: any): Array<{ value: number; label: string }> {
    return Object.keys(value)
      .filter((key) => !isNaN(Number(value[key])))
      .map((key) => ({ value: Number(value[key]), label: key }));
  }
}
