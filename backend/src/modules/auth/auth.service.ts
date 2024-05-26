import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { SignInDto } from './dto/sign-in.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signUp(createUserDto: CreateUserDto): Promise<auth | undefined> {
    try {
      // Checking whether the user is already present or not
      const present_user = await this.userService.findOne(createUserDto.email);
      if (present_user)
        throw new ConflictException('User with this email is already present.');

      // Converting the plain password to a hashed string
      const hash = await bcrypt.hash(
        createUserDto.password,
        parseInt(process.env.SALT_ROUNDS),
      );
      createUserDto.password = hash;

      // Calling the user service file to save the user
      this.userService.create(createUserDto);

      // Creates a payload for JWT
      const payload = { name: createUserDto.name, email: createUserDto.email };

      // Generates an access token from the payload
      const access_token = await this.jwtService.signAsync(payload);

      // Returning the response
      return {
        message: 'User Registered Successfully',
        access_token,
      };
    } catch (error) {
      throw error;
    }
  }

  async signIn(signInDto: SignInDto): Promise<auth | undefined> {
    try {
      // Checks whether the user is present in the database or not
      const user_present = await this.userService.findOne(signInDto.email);
      if (!user_present) throw new NotFoundException();

      // Checks the entered password with the saved password in the database
      const isMatch = await bcrypt.compare(
        signInDto.password,
        user_present.password,
      );
      if (!isMatch) throw new UnauthorizedException();

      // Creates a payload for JWT
      const payload = { name: user_present.name, email: user_present.email };

      // Generates an access token from the payload
      const access_token = await this.jwtService.signAsync(payload);

      // Returns the access token
      return {
        message: 'User logged in successfully',
        access_token,
      };
    } catch (error) {
      throw error;
    }
  }
}
