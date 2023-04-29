<<<<<<< HEAD
import createcafeid from './';

describe('createcafeid function', () => {
  beforeEach(() => {
    // Mock the fetch method to return a mock Response object
    global.fetch = jest.fn().mockResolvedValue({
      status: 200,
      json: () => Promise.resolve({ cafeId: '123456' }),
    });
  });

  afterEach(() => {
    // Clear the mock after each test
    global.fetch.mockClear();
  });

  it('sends a POST request to the start URL with the correct headers', async () => {
    await createcafeid();

    expect(global.fetch).toHaveBeenCalledWith(expect.any(String), {
=======
import createcafeid from './createcafeid';

describe('createcafeid', () => {
  it('should create a new cafe ID', async () => {
    const mockResponse = { id: '1234567890' };
    const mockFetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse)
    });
    global.fetch = mockFetch;

    await createcafeid();

    expect(mockFetch).toHaveBeenCalledWith(start_url, {
>>>>>>> developer
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });

<<<<<<< HEAD
  it('returns the cafe ID from the response', async () => {
    const result = await createcafeid();

    expect(result).toEqual({ cafeId: '123456' });
=======
  it('should throw an error if there is an issue with the API call', async () => {
    const mockFetch = jest.fn().mockRejectedValue(new Error('Network error'));
    global.fetch = mockFetch;

    await expect(createcafeid()).rejects.toThrow();
>>>>>>> developer
  });
});
