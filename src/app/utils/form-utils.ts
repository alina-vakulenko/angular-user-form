import { AbstractControl } from '@angular/forms';

export function showErrorStyle(control: AbstractControl | null): boolean {
  if (!control) return false;
  return control.invalid && (control.dirty || control.touched);
}

export function showErrorMessage(
  control: AbstractControl | null,
  error: string
): boolean {
  if (!control) return false;
  return control.hasError(error) && (control.dirty || control.touched);
}
