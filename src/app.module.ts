import { Module } from '@nestjs/common';
import { LocationModule } from './location/location.module';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    LocationModule,
    TypeOrmModule.forRoot()
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
