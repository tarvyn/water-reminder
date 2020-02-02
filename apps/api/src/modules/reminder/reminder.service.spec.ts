import { Test, TestingModule } from '@nestjs/testing';
import { DoseVolume } from '@water-reminder/api-interfaces';
import { formatISO, isEqual } from 'date-fns';
import { HydrationService } from '../hydration/hydration.service';
import { UserService } from '../user/user.service';
import { calculateNextDrinkTime } from './reminder.model';
import { ReminderService } from './reminder.service';

jest.mock('../hydration/hydration.service');
jest.mock('../user/user.service');

describe('Reminder service', () => {
  let reminderService: ReminderService;
  let userService: UserService;
  let module: TestingModule;
  let hydrationService: HydrationService;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      providers: [ReminderService, UserService, HydrationService]
    }).compile();
    reminderService = module.get(ReminderService);
    userService = module.get(UserService);
    hydrationService = module.get(HydrationService);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  fit('should 2', async () => {
    const generateTime = hour => {
      const pureHour = Math.round(hour);
      const minutes = (hour - pureHour) * 60;

      return new Date(2020, 1, 1, pureHour, minutes);
    };
    const mockUser: any = {
      _id: null,
      awakeTime: 8,
      sleepTime: 22
    };
    const mockDoses: any = Array.from({ length: 1 }, () => ({
      volume: DoseVolume.cup,
      time: '2020-02-01T08:00:00.000+02:00'
    }));

    jest
      .spyOn(hydrationService, 'find')
      .mockResolvedValue(Promise.resolve(mockDoses));

    for (let i = 0; i < 32; i++) {
      const now = generateTime(7.5 + i / 2);
      if (now.toISOString() === '2020-02-01T10:00:00.000Z') {
        debugger;
      }
      const nextTime = await reminderService.calculateNextDrinkTime(
        mockUser,
        now
      );

      console.log('now:', now, 'nextTime:', nextTime);
      if (isEqual(now, nextTime)) {
        mockDoses.push({
          volume: DoseVolume.cup,
          time: formatISO(now)
        });
        console.error('pushed', nextTime);
      }
    }

    expect(true).toBeTruthy();
  });

  it('should ', () => {
    const mockDoses: any = Array.from({ length: 1 }, () => ({
      value: DoseVolume.cup
    }));

    jest
      .spyOn(hydrationService, 'find')
      .mockResolvedValue(Promise.resolve(mockDoses));

    const generateTime = (hour, minute) => new Date(2020, 1, 1, hour, minute);

    console.log([
      calculateNextDrinkTime(generateTime(10, 15), 8, 7),
      calculateNextDrinkTime(generateTime(10, 15), 7.5, 7),
      calculateNextDrinkTime(generateTime(10, 15), 7, 7),
      calculateNextDrinkTime(generateTime(10, 15), 6.5, 7),
      calculateNextDrinkTime(generateTime(10, 15), 6, 7),
      calculateNextDrinkTime(generateTime(10, 15), 5.5, 7),
      calculateNextDrinkTime(generateTime(10, 15), 5, 7),
      calculateNextDrinkTime(generateTime(10, 15), 4.5, 7),
      calculateNextDrinkTime(generateTime(10, 15), 4, 7),
      calculateNextDrinkTime(generateTime(10, 15), 3.5, 7),
      calculateNextDrinkTime(generateTime(10, 15), 3, 7),
      calculateNextDrinkTime(generateTime(10, 15), 2.5, 7),
      calculateNextDrinkTime(generateTime(10, 15), 2, 7),
      calculateNextDrinkTime(generateTime(10, 15), 1.5, 7),
      calculateNextDrinkTime(generateTime(10, 15), 1, 7),
      calculateNextDrinkTime(generateTime(10, 15), 0.5, 7),
      calculateNextDrinkTime(generateTime(10, 15), 0, 7)
    ]);

    expect(true).toBeTruthy();
  });
});
