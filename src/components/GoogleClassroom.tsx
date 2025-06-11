
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const GoogleClassroom = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const courses = [
    {
      id: '1',
      name: 'Mathematics 101',
      teacher: 'Dr. Sarah Johnson',
      students: 28,
      assignments: [
        { name: 'Algebra Quiz', dueDate: '2024-06-15', status: 'pending' },
        { name: 'Calculus Project', dueDate: '2024-06-20', status: 'completed' },
        { name: 'Statistics Homework', dueDate: '2024-06-18', status: 'graded' }
      ]
    },
    {
      id: '2',
      name: 'Computer Science',
      teacher: 'Prof. Mike Chen',
      students: 24,
      assignments: [
        { name: 'Python Assignment', dueDate: '2024-06-16', status: 'pending' },
        { name: 'Database Design', dueDate: '2024-06-22', status: 'completed' }
      ]
    },
    {
      id: '3',
      name: 'Physics Advanced',
      teacher: 'Dr. Emily Davis',
      students: 19,
      assignments: [
        { name: 'Lab Report #3', dueDate: '2024-06-17', status: 'graded' },
        { name: 'Quantum Mechanics Essay', dueDate: '2024-06-25', status: 'pending' }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'graded': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <img 
              src="https://developers.google.com/identity/images/g-logo.png" 
              alt="Google" 
              className="w-5 h-5"
            />
            Your Courses
          </h2>
          <div className="space-y-3">
            {courses.map((course) => (
              <Card 
                key={course.id} 
                className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                  selectedCourse === course.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setSelectedCourse(course.id)}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{course.name}</CardTitle>
                  <CardDescription>{course.teacher}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{course.students} students enrolled</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          {selectedCourse ? (
            <>
              <h2 className="text-xl font-semibold mb-4">Assignments</h2>
              <div className="space-y-3">
                {courses.find(c => c.id === selectedCourse)?.assignments.map((assignment, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">{assignment.name}</h3>
                        <Badge className={getStatusColor(assignment.status)}>
                          {assignment.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">Due: {assignment.dueDate}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          ) : (
            <Card className="h-64 flex items-center justify-center">
              <CardContent className="text-center">
                <p className="text-gray-500">Select a course to view assignments</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default GoogleClassroom;
