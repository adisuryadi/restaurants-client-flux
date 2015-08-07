'use strict';

describe('RestaurantStore', () => {

  describe('Initial values', () => {

    let RestaurantStore;

    beforeEach(() => {
      RestaurantStore = require('../RestaurantStore');
    });

    it('should return Any Borugh as the default current borough', () => {
      expect(RestaurantStore.getCurrentBorough()).toEqual({'_id': 'Any Borugh'});
    });

    it('should return Any Cuisine for get default current cuisine', () => {
      expect(RestaurantStore.getCurrentCuisine()).toEqual({'_id': 'Any Cuisine'});
    });

    it('should return an empty map for get all restaurant', () => {
      expect(RestaurantStore.getRestaurants()).toEqual({});
    });

  });

  xdescribe('Loading and getting values', () => {

    let AppDispatcher;
    let registeredCallback;
    let RestaurantStore;

    beforeEach(() => {
      AppDispatcher = require('../../dispatcher/AppDispatcher');
      spyOn(AppDispatcher, 'register');

      RestaurantStore = require('../RestaurantStore');
      registeredCallback = AppDispatcher.register.calls.mostRecent().args[0];

      registeredCallback({
        action: {
          type: 'LOAD_BUNDLE_SUCCESS',
          bundle: {
            boroughs: [
              {_id: 'Jimbaran', count: 100},
              {_id: 'Kuta', 'count': 50},
            ],
            cuisines: [
              {_id: 'Indonesian', count: 8},
              {_id: 'Sundanese', count: 5},
              {_id: 'Thai', count: 3},
            ]
          }
        }
      });

    });

    it('adds the boroughs', () => {
      expect(RestaurantStore.getBoroughs().length).toBe(2);
    });

    it('adds the cuisines', () => {
      expect(RestaurantStore.getCuisines().length).toBe(3);
    });
  });

});
