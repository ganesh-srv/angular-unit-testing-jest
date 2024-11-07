import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { Users } from '../types/users';
import { pluck } from '../utils/utils';
import { UtilsService } from '../utils/utils.service';

describe('UsersService', () => {
  let service: UsersService;
  let utilsServiceMock = {
    pluck: jest.fn()
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService, {
        provide: UtilsService, useValue: utilsServiceMock
      }]
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  describe('addUser', () => {
    it('should add a user', () => {
      const user: Users = {
        id: '2',
        name: 'Ganesh'
      }
      service.addUser(user);
      expect(service.users).toEqual([user])
    })

    // it('should')
  })

  describe('getUserNames', () => {
    it('should pluck all user names from users', () => {
      utilsServiceMock.pluck.mockReturnValue(['foo'])
      expect(service.getUserNames()).toEqual(['foo'])
    })
  })

});
