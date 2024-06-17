import { Component } from '@angular/core'
import { PanelModule } from 'primeng/panel'
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext'
import { MessagesModule } from 'primeng/messages'
import { FormsModule, ReactiveFormsModule, Validators, FormGroup, FormControl } from '@angular/forms'
import { AuthService } from '../../services/auth/auth.service'
import { Router } from '@angular/router'
import { Message } from 'primeng/api'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    PanelModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    MessagesModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  /** The control set for the login form. */
  public loginForm = new FormGroup({
    /** The username control. */
    username: new FormControl(null, [Validators.required]),
    /** The password control. */
    password: new FormControl(null, [Validators.required]),
  })

  public failureMessages: Message[] = []

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  public async authenticateUser() {
    const formData = this.loginForm.getRawValue()
    this.failureMessages = []

    try {
      await this.authService.login(formData)
      this.router.navigate(['/home'])
    } catch (error: any) {
      console.error(error)
      this.failureMessages = [
        { severity: 'warn', summary: error.message }
      ]
    }
  }
}
