import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import * as path from "node:path";
import {Person} from "./person.entity";


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: path.join(__dirname, 'db', 'database.db'),
      entities: [Person],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Person]),
  ],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule {}
