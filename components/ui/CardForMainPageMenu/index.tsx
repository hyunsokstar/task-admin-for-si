"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock, CheckCircle2, HourglassIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

// 새로운 컴포넌트 CardForMainPageMenu 생성
function CardForMainPageMenu({ task, onClick }: { task: { title: string, description: string, status: string }, onClick?: () => void }) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case '완료':
        return <CheckCircle2 className="w-4 h-4" />;
      case '진행 중':
        return <Clock className="w-4 h-4" />;
      default:
        return <HourglassIcon className="w-4 h-4" />;
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case '완료':
        return 'bg-green-100 hover:bg-green-200 text-green-800';
      case '진행 중':
        return 'bg-yellow-100 hover:bg-yellow-200 text-yellow-800';
      default:
        return 'bg-red-100 hover:bg-red-200 text-red-800';
    }
  };

  return (
    <Card
      className="hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center justify-between">
          {task.title}
          <Badge 
            className={`flex items-center gap-1 ${getStatusStyle(task.status)}`}
          >
            {getStatusIcon(task.status)}
            {task.status}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-600">{task.description}</p>
      </CardContent>
    </Card>
  );
}

export default function HomePage() {
  const router = useRouter();

  const tasks = [
    { title: "팀 미팅 준비", description: "팀 회의 자료 준비하기", status: "진행 중" },
    { title: "로그인 페이지 구현", description: "Firebase 인증을 사용해 로그인 기능 구현", status: "완료" },
    { title: "프로젝트 계획 수립", description: "다음 분기 프로젝트 일정 계획 작성", status: "대기 중" },
  ];

  const handleLoginClick = () => {
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <Card className="mb-6 bg-gradient-to-r from-blue-600 to-blue-800">
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold text-white">
            업무 관리 시스템
          </CardTitle>
        </CardHeader>
      </Card>
      
      <ScrollArea className="h-[calc(100vh-200px)]">
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {tasks.map((task, index) => (
            <CardForMainPageMenu
              key={index}
              task={task}
              onClick={task.title === "로그인 페이지 구현" ? handleLoginClick : undefined}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
