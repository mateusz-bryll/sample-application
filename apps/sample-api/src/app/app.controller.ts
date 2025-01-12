import {Controller, Get, Param} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('people')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getData(@Param('id') id: number) {
    return this.appService.get(id);
  }
}
