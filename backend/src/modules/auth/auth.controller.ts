import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { SignInDto } from './dto/sign-in.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // User registration API controller
  @Post('signup')
  async signUp(
    @Body() createUserDto: CreateUserDto,
  ): Promise<auth | undefined> {
    // Creating the user
    return this.authService.signUp(createUserDto);
  }

  // User login API controller
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInDto): Promise<auth | undefined> {
    return this.authService.signIn(signInDto);
  }
}
