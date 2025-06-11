
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const CanvasLMS = () => {
  const courses = [
    {
      id: '1',
      name: 'Web Development',
      code: 'WEB101',
      submissions: 8,
      total: 10,
      grade: 'A-',
      progress: 80
    },
    {
      id: '2',
      name: 'Data Structures',
      code: 'CS201',
      submissions: 6,
      total: 8,
      grade: 'B+',
      progress: 75
    },
    {
      id: '3',
      name: 'Digital Marketing',
      code: 'MKT301',
      submissions: 12,
      total: 12,
      grade: 'A',
      progress: 100
    },
    {
      id: '4',
      name: 'Machine Learning',
      code: 'AI401',
      submissions: 4,
      total: 8,
      grade: 'B',
      progress: 50
    }
  ];

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'bg-green-100 text-green-800';
    if (grade.startsWith('B')) return 'bg-blue-100 text-blue-800';
    if (grade.startsWith('C')) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-6 h-6 bg-orange-600 rounded text-white flex items-center justify-center text-sm font-bold">
          C
        </div>
        <h2 className="text-xl font-semibold">Canvas Courses</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{course.name}</CardTitle>
                  <CardDescription>{course.code}</CardDescription>
                </div>
                <Badge className={getGradeColor(course.grade)}>
                  {course.grade}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Submissions</span>
                  <span>{course.submissions}/{course.total}</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium">{course.progress}%</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Submission Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-green-600">30</p>
              <p className="text-sm text-gray-600">Completed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">8</p>
              <p className="text-sm text-gray-600">In Progress</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-600">3</p>
              <p className="text-sm text-gray-600">Late</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-600">38</p>
              <p className="text-sm text-gray-600">Total</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CanvasLMS;
