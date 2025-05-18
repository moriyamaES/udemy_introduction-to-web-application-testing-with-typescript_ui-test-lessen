import axios from "axios";
import { render, screen, waitFor } from "@testing-library/react";
import { UserSearch } from "./UserSearch";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

jest.mock("axios");
const mockedAxios = jest.mocked(axios);

describe("UserSearch", () => {
  beforeEach(() => {
    mockedAxios.get.mockReset();
  });

  it("入力フォームにい入力した内容でAPIリクエストが送信される", async() => {
    const userInfo = {
      id: 1,
      name: "Taro"
    }
    const resp = { data: userInfo }
    mockedAxios.get.mockResolvedValue(resp);
    render(<UserSearch />)
    const input = screen.getByRole("textbox")
    await user.type(input, userInfo.name)
    const button = screen.getByRole("button")
    await user.click(button)
    expect(mockedAxios.get).toHaveBeenCalledWith(`/api/users?query=${userInfo.name}`)
  })

  it("APIから取得したユーザー情報が画面に表示される", async() => {
    const userInfo = {
      id: 1,
      name: "Taro"
    }
    const resp = { data: userInfo }
    mockedAxios.get.mockResolvedValue(resp);
    render(<UserSearch />)
    const input = screen.getByRole("textbox")
    await user.type(input, userInfo.name)
    const button = screen.getByRole("button")
    await user.click(button)
    expect(mockedAxios.get).toHaveBeenCalledWith(`/api/users?query=${userInfo.name}`)
    await waitFor(() => {
      expect(screen.getByText(userInfo.name)).toBeInTheDocument()
    })
  })
});
