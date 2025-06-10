import { Component } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, of } from 'rxjs';

@Component({
  selector: 'app-cpf',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cpf.html',
  styleUrls: ['./cpf.css']
})
export class CpfComponent {
  form: FormGroup;
  
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      cpf: ['', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
        Validators.pattern(/^\d+$/),
        this.cpfValidator],]
    });
  }
  cpfValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const cpf = control.value;
    
    if (!cpf) return null;
    
    if (!/^\d+$/.test(cpf)) {
      return { pattern: true };
    }
    
    if (cpf.length !== 11) {
      return { cpfInvalido: true };
    }    
    return null;
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      alert("Formulário enviado com sucesso!");
    } else {
      this.form.markAllAsTouched();
    }
  }
}