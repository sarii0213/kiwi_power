import useSWR from "swr";
import axios from 'axios' // 実際には直接axiosを使わないが、今回は簡略化のために使う

const getUsers = async (): Promise<GetUsersResponse> => {
  const { data } = await axios.get<GetUsersResponse>(
    'https://jsonplaceholder.typicode.com/users',
  )

  return data
}

type User = {
  id: string
  name: string
  username: string
  email: string
  address: Address
  
}

type Address = {
  street: string
  zipcode: string
}

type GetUsersResponse = User[]

export const useGetUsers = () => { 
  const { data, error, isLoading } = useSWR('/users', getUsers)

  return { data, error, isLoading }
}