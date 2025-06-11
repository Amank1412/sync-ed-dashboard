
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

const Toddle = () => {
  const subjects = [
    {
      id: '1',
      name: 'English Literature',
      teacher: 'Ms. Amanda Wilson',
      lastFeedback: 'Excellent analysis of Shakespeare\'s themes. Keep up the great work!',
      rating: 5,
      recentGrade: 'A',
      lastUpdated: '2 days ago'
    },
    {
      id: '2',
      name: 'Biology',
      teacher: 'Dr. Robert Brown',
      lastFeedback: 'Good understanding of cell structures. Work on diagram labeling.',
      rating: 4,
      recentGrade: 'B+',
      lastUpdated: '1 week ago'
    },
    {
      id: '3',
      name: 'History',
      teacher: 'Prof. Lisa Martinez',
      lastFeedback: 'Impressive research on World War II. Excellent source citations.',
      rating: 5,
      recentGrade: 'A-',
      lastUpdated: '3 days ago'
    },
    {
      id: '4',
      name: 'Chemistry',
      teacher: 'Dr. James Lee',
      lastFeedback: 'Need to review chemical equations. Practice more problem sets.',
      rating: 3,
      recentGrade: 'C+',
      lastUpdated: '5 days ago'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'bg-green-100 text-green-800';
    if (grade.startsWith('B')) return 'bg-blue-100 text-blue-800';
    if (grade.startsWith('C')) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-6 h-6 bg-purple-600 rounded text-white flex items-center justify-center text-sm font-bold">
          T
        </div>
        <h2 className="text-xl font-semibold">Toddle Subjects</h2>
        <Badge variant="secondary" className="ml-2">Demo</Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {subjects.map((subject) => (
          <Card key={subject.id} className="hover:shadow-lg transition-all duration-200">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{subject.name}</CardTitle>
                  <CardDescription>{subject.teacher}</CardDescription>
                </div>
                <Badge className={getGradeColor(subject.recentGrade)}>
                  {subject.recentGrade}
                </Badge>
              </div>
              <div className="flex items-center gap-1 mt-2">
                {renderStars(subject.rating)}
                <span className="text-sm text-gray-600 ml-2">Performance Rating</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-gray-700 mb-1">Latest Feedback:</h4>
                  <p className="text-sm text-gray-600 italic">"{subject.lastFeedback}"</p>
                </div>
                <div className="text-xs text-gray-500">
                  Updated {subject.lastUpdated}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-5 h-5 bg-purple-600 rounded text-white flex items-center justify-center text-xs font-bold">
              T
            </div>
            Overall Progress Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-600">4.25</p>
              <p className="text-sm text-gray-600">Average Rating</p>
              <div className="flex justify-center mt-1">
                {renderStars(4)}
              </div>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">85%</p>
              <p className="text-sm text-gray-600">Assignment Completion</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">B+</p>
              <p className="text-sm text-gray-600">Overall Grade</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Toddle;
