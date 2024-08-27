"use client";

import React from "react";
import { useCreateUserForm } from "@/app/users/new/_hooks";
import { Box, Button, TextField } from "@mui/material";

export const UserCreateForm = () => {
  const { register, handleSubmit, errors, onSubmit, isMutating } = useCreateUserForm();

  return (
    <>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="ユーザー名"
          autoComplete="username"
          autoFocus
          {...register("username")}
          error={!!errors.username}
          helperText={errors.username?.message}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="メールアドレス"
          autoComplete="email"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="パスワード"
          type="password"
          id="password"
          autoComplete="new-password"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="パスワード（確認）"
          type="password"
          id="passwordConfirmation"
          autoComplete="new-password"
          {...register("passwordConfirmation")}
          error={!!errors.passwordConfirmation}
          helperText={errors.passwordConfirmation?.message}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={isMutating}
        >
          {isMutating ? "ユーザー作成中..." : "ユーザー作成"}
        </Button>
      </Box>
    </>
  );
};
