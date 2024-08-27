import { apiClient } from "@/libs/apiClient";
import useSWRMutation from "swr/mutation";

export type CreateUserRequest = {
  email: string;
  password: string;
  password_confirmation: string;
  username: string;
};

type CreateUserResponse = {
  data: {
    email: string;
    provider: string;
    uid: string;
    id: number;
    username: string;
    allow_password_change: boolean;
    goal_weight: null;
    height: null;
    display_body_fat: boolean;
    display_period: boolean;
  };
};

const createUser = async (
  url: string,
  { arg }: { arg: CreateUserRequest }
): Promise<CreateUserResponse> => {
  // const client = apiClient();
  // const { data } = await client.post<CreateUserResponse>(url, arg);

  console.log(url);
  console.log(arg);
  const data = await new Promise<CreateUserResponse>((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          email: "aaa",
          provider: "email",
          uid: "aaa",
          id: 1,
          username: "aaa",
          allow_password_change: false,
          goal_weight: null,
          height: null,
          display_body_fat: false,
          display_period: false,
        },
      });
    }, 2000);
  });
  return data;
};

export const useCreateUser = () => {
  const { trigger, isMutating } = useSWRMutation("users", createUser);

  return { trigger, isMutating };
};

// ➜ curl localhost:8080/api/v1/auth -X POST -d '{"email": "test@example.com", "password": "password", "password_confirmation": "password", "username": "test"}' -H "content-type:application/json" -i

// HTTP/1.1 200 OK
// x-frame-options: SAMEORIGIN
// x-xss-protection: 0
// x-content-type-options: nosniff
// x-download-options: noopen
// x-permitted-cross-domain-policies: none
// referrer-policy: strict-origin-when-cross-origin
// content-type: application/json; charset=utf-8
// access-token: BblZK-h2tOww31uxjrIu7A
// token-type: Bearer
// client: acsLhNrctdOFYfS_ZGNFNA
// expiry: 1725264642
// uid: test@example.com
// authorization: Bearer eyJhY2Nlc3MtdG9rZW4iOiJCYmxaSy1oMnRPd3czMXV4anJJdTdBIiwidG9rZW4tdHlwZSI6IkJlYXJlciIsImNsaWVudCI6ImFjc0xoTnJjdGRPRllmU19aR05GTkEiLCJleHBpcnkiOiIxNzI1MjY0NjQyIiwidWlkIjoidGVzdEBleGFtcGxlLmNvbSJ9
// etag: W/"daa7351803f2a5d6e9f84937f77eecc6"
// cache-control: max-age=0, private, must-revalidate
// x-request-id: 866c3963-9f4c-41c1-8253-70671c4b4198
// x-runtime: 0.521874
// server-timing: start_processing.action_controller;dur=0.04, unpermitted_parameters.action_controller;dur=0.01, sql.active_record;dur=12.16, instantiation.active_record;dur=0.28, transaction.active_record;dur=73.39, process_action.action_controller;dur=313.73
// vary: Origin
// Content-Length: 217

// {"data":{"email":"test@example.com","provider":"email","uid":"test@example.com","id":2,"username":"test","allow_password_change":false,"goal_weight":null,"height":null,"display_body_fat":false,"display_period":false}}
