import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { configService } from '@config/config.service';
import { DBService } from './db.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        ...configService.getTypeOrmConfig(),
        autoLoadEntities: true,
        synchronize: false,
      }),
    }),
  ],
  providers: [DBService, Logger],
  exports: [DBService],
})
export class DBModule {}
