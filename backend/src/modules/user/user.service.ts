import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  // Function to create a user
  create(createUserDto: CreateUserDto): Promise<User | undefined> {
    // Saving the user to the database
    try {
      return this.userModel.create(createUserDto);
    } catch (error) {
      throw error;
    }
  }

  // Function to find a user by email
  async findOne(email: string): Promise<User | undefined> {
    try {
      return await this.userModel.findOne({ email });
    } catch (error) {
      throw error;
    }
  }
}
