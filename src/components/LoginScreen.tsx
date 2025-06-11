
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl animate-fade-in">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
            ES
          </div>
          <CardTitle className="text-2xl font-bold">Welcome to EdSync</CardTitle>
          <CardDescription className="text-muted-foreground">
            Connect all your educational platforms in one place
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <Button 
            onClick={onLogin}
            className="w-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 shadow-sm transition-all duration-200 hover:shadow-md"
            variant="outline"
          >
            <img 
              src="https://developers.google.com/identity/images/g-logo.png" 
              alt="Google" 
              className="w-5 h-5 mr-3"
            />
            Login with Google
          </Button>
          
          <Button 
            onClick={onLogin}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white transition-all duration-200 hover:shadow-md"
          >
            <div className="w-5 h-5 mr-3 bg-white rounded text-orange-600 flex items-center justify-center text-xs font-bold">
              C
            </div>
            Connect Canvas
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginScreen;
