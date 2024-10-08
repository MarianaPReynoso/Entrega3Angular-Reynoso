import { Component, signal, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APP_CONFIG } from '../../../core/injection-tokens';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    @Inject (APP_CONFIG) private appConfig: any
  ) {
    this.loginForm = this.fb.group({
      email: [null, Validators.required, Validators.email],
      contraseña: [null, Validators.required],
      rol: [null, Validators.required]
    });
  }

  onSubmit(): void {
    if(this.loginForm.invalid) {
      alert('Debe completar los datos solicitados');
      return;
    } else {
      this.authService.login();
    }
  };

  hide = signal(true);

  esconder(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
