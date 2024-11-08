import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { Users } from '../types/users';
import { pluck } from '../utils/utils';
import { UtilsService } from '../utils/utils.service';

describe('UsersService', () => {
  let userService: UsersService;
  let utilsService: UtilsService;
  // let utilsServiceMock = {
  //   pluck: jest.fn()
  // }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService,
      //    {
      //   provide: UtilsService, useValue: utilsServiceMock
      // }
    ]
    });
    userService = TestBed.inject(UsersService);
    utilsService = TestBed.inject(UtilsService)
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });


  describe('addUser', () => {
    it('should add a user', () => {
      const user: Users = {
        id: '2',
        name: 'Ganesh'
      }
      userService.addUser(user);
      expect(userService.users).toEqual([user])
    })

    // it('should')
  })

  describe('getUserNames', () => {
    it('should pluck all user names from users', () => {
      jest.spyOn(utilsService, 'pluck');
      // userService.users = [
      //   {
      //     id: '2',
      //     name: 'Ganesh'
      //   }
      // ];
      const user: Users = {
        id: '2',
        name: 'Ganesh'
      }
      userService.addUser(user);
      userService.getUserNames();
      // utilsServiceMock.pluck.mockReturnValue(['foo'])
      // expect(service.getUserNames()).toEqual(['foo'])
      expect(utilsService.pluck).toHaveBeenCalledWith(userService.users, 'name')
    })
  })

});
