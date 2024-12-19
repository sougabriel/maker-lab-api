import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/entities/user.entity';


const user_test: User = {
  email: 'test-user@email.com',
  password: 'test123',
  isActive: true
}

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('get me', () => {
    it('should return "Hello test-user!"', () => {
      expect(appController.getMe(user_test)).toBe(`Hello test-user!`);
    });
  });
});
