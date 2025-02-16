const axios = require("axios");
const apiCallAxios = require("../apiCallAxios");
jest.mock("axios");

describe("mock api calls", () => {
  test("axios get api response testing", async () => {
    const apiResponse = [
      {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
          rate: 3.9,
          count: 120,
        },
      },
    ];
    axios.get.mockResolvedValue({ data: apiResponse });
    const result = await apiCallAxios.axiosCall();
    expect(result).toEqual(apiResponse);
  });
  test("axiosCall handles errors", async () => {
    axios.get.mockRejectedValue(new Error("Network Error"));

    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    const result = await apiCallAxios.axiosCall();

    expect(consoleSpy).toHaveBeenCalledWith(new Error("Network Error"));

    consoleSpy.mockRestore();
  });
});
