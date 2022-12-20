import { FindUserByNicknameResponse } from "~/api";

export const userRepository = {
  async findByNickname(nickname: string) {
    return await useHttpGet<FindUserByNicknameResponse>(`v1/users/${nickname}`)
  }
}
