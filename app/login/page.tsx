// task-admin-for-si\app\login\page.tsx
// task-admin-for-si/app/login/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md p-6 shadow-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold text-gray-800">
            로그인
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">이메일</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="이메일을 입력하세요"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="password">비밀번호</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  className="mt-1"
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full mt-6 bg-blue-600 text-white hover:bg-blue-700"
            >
              로그인
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-600">
            계정이 없으신가요?{" "}
            <Link href="/register">
              회원가입
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
