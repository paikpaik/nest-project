import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './cats.schema';
import { CatRequestDto } from './dto/cats.request.dto';

@Injectable()
export class CatsRepository {
  constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>) {}

  // 현재 validation에서 에러처리가 잘 작동이 되므로 에러처리를 위한 try catch구문을 사용할 필요는 없음.
  // 다만 필요하다면 에러처리는 이곳에서 try catch로 처리함.
  async existByEmail(email: string): Promise<boolean> {
    try {
      const result = await this.catModel.exists({ email });
      return result ? true : false;
    } catch (error) {
      throw new HttpException('db error', 400);
    }
  }

  async create(cat: CatRequestDto): Promise<Cat> {
    return await this.catModel.create(cat);
  }
}
