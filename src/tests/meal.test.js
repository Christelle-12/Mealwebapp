<<<<<<< HEAD
import getcategories from './meal.js';

describe('getcategories', () => {
  const meal_url = 'https://www.themealdb.com/api/json/v1/1';
  
=======
import getcategories from './getcategories';

describe('getcategories', () => {
>>>>>>> developer
  it('should fetch a list of seafood meals', async () => {
    const mockResponse = {
      meals: [
        { idMeal: '1', strMeal: 'Seafood Pasta' },
        { idMeal: '2', strMeal: 'Grilled Salmon' },
        { idMeal: '3', strMeal: 'Lobster Bisque' }
      ]
    };
    const mockFetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse)
    });
    global.fetch = mockFetch;

    const categories = await getcategories();

    expect(categories).toEqual(mockResponse.meals);
    expect(mockFetch).toHaveBeenCalledWith(`${meal_url}/filter.php?c=Seafood`);
  });

  it('should throw an error if there is an issue with the API call', async () => {
    const mockFetch = jest.fn().mockRejectedValue(new Error('Network error'));
    global.fetch = mockFetch;

    await expect(getcategories()).rejects.toThrow('Something is wrong here line 10');
  });
});
