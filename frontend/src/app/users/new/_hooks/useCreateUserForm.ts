import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateUser } from "@/hooks/useCreateUser";

const createUserFormSchema = z.object({
  username: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
  passwordConfirmation: z.string().min(8),
});

type CreateUserFormSchemaType = z.infer<typeof createUserFormSchema>;

export const useCreateUserForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateUserFormSchemaType>({
    resolver: zodResolver(createUserFormSchema),
    mode: "onBlur",
  });

  const { trigger, isMutating } = useCreateUser();

  const onSubmit = async (data: CreateUserFormSchemaType) => {
    try {
      await trigger({
        email: data.email,
        password: data.password,
        password_confirmation: data.passwordConfirmation,
        username: data.username,
      });
      alert("ユーザーを作成しました");
    } catch (error) {
      console.error(error);
    }
  };

  return { register, control, handleSubmit, errors, onSubmit, isMutating };
};
