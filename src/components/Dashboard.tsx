
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import AppSidebar from '@/components/AppSidebar';
import GoogleClassroom from '@/components/GoogleClassroom';
import CanvasLMS from '@/components/CanvasLMS';
import Toddle from '@/components/Toddle';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('google');

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
              <p className="text-gray-600">Manage all your educational platforms from one place</p>
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="google" className="flex items-center gap-2">
                  <img 
                    src="https://developers.google.com/identity/images/g-logo.png" 
                    alt="Google" 
                    className="w-4 h-4"
                  />
                  Google Classroom
                </TabsTrigger>
                <TabsTrigger value="canvas" className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-600 rounded text-white flex items-center justify-center text-xs font-bold">
                    C
                  </div>
                  Canvas LMS
                </TabsTrigger>
                <TabsTrigger value="toddle" className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-purple-600 rounded text-white flex items-center justify-center text-xs font-bold">
                    T
                  </div>
                  Toddle
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="google" className="animate-fade-in">
                <GoogleClassroom />
              </TabsContent>
              
              <TabsContent value="canvas" className="animate-fade-in">
                <CanvasLMS />
              </TabsContent>
              
              <TabsContent value="toddle" className="animate-fade-in">
                <Toddle />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
