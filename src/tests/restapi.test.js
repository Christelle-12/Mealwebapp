const {
<<<<<<< HEAD
  start_url,
  base_url,
  meal_url
} = require('./restapi.js');

describe('constants', () => {
  test('start_url should equal https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', () => {
    expect(start_url).toEqual('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/');
  });

  test('base_url should include the app_id', () => {
    expect(base_url).toContain('pWOkUYxHJi4ZVPIAAXpp');
  });

  test('meal_url should equal https://www.themealdb.com/api/json/v1/1', () => {
    expect(meal_url).toEqual('https://www.themealdb.com/api/json/v1/1');
  });
});
=======
    start_url,
    base_url,
    meal_url
  } = require('./your-file-name.js');
  
  describe('constants', () => {
    test('start_url should equal https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', () => {
      expect(start_url).toEqual('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/');
    });
  
    test('base_url should include the app_id', () => {
      expect(base_url).toContain('pWOkUYxHJi4ZVPIAAXpp');
    });
  
    test('meal_url should equal https://www.themealdb.com/api/json/v1/1', () => {
      expect(meal_url).toEqual('https://www.themealdb.com/api/json/v1/1');
    });
  });
  
>>>>>>> developer
