import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { DatabaseModule } from './database/database.module';
import { NewscrudRoutesModule } from './newscrud_routes/newscrud_routes.module';
import { SparesModule } from './spares/spares.module';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SparesModule,
    DatabaseModule,
    ScheduleModule.forRoot(),
    NewscrudRoutesModule,
    CacheModule.register({ isGlobal: true, ttl: 5 * 60000 }),
    BlogModule, //Данные хранятся в кеше 5 минут
    // TestttModule, // Если нужно будет использовать мою загрузку в бд
  ],
})
export class AppModule {}
