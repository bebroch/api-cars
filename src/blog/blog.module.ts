import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from 'src/database/entities/blog.entity';
import { NewsUserCreateEntity } from 'src/database/entities/newscrud_route.entity';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';

@Module({
  imports: [TypeOrmModule.forFeature([BlogEntity, NewsUserCreateEntity])],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
