// C:\Users\Win10\hyunsok\task-admin-for-si\app\page.tsx
"use client";

import React from 'react';

export default function HomePage() {
  const tasks = [
    { title: "팀 미팅 준비", description: "팀 회의 자료 준비하기", status: "진행 중" },
    { title: "로그인 페이지 구현", description: "Firebase 인증을 사용해 로그인 기능 구현", status: "완료" },
    { title: "프로젝트 계획 수립", description: "다음 분기 프로젝트 일정 계획 작성", status: "대기 중" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-blue-600 text-white p-4 rounded-md mb-6">
        <h1 className="text-2xl font-bold">업무 관리 시스템</h1>
      </header>
      <main className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task, index) => (
          <div key={index} className="p-4 bg-white border rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">{task.title}</h2>
            <p className="text-gray-600 mb-4">{task.description}</p>
            <span
              className={`inline-block px-2 py-1 text-sm font-medium rounded ${
                task.status === '완료' ? 'bg-green-200 text-green-800' :
                task.status === '진행 중' ? 'bg-yellow-200 text-yellow-800' :
                'bg-red-200 text-red-800'
              }`}
            >
              {task.status}
            </span>
          </div>
        ))}
      </main>
    </div>
  );
}
