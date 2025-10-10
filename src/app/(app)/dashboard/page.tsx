'use client';
import { useState } from "react";
import { Book, DollarSign, Users, Settings, Video, FileText, BarChart3, Bell, User, Menu, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from '@/hooks/use-auth';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { user } = useAuth();
  const userRole = user?.role || 'student';

  const getMenuItems = () => {
    const commonItems = [
      { icon: Settings, label: "Settings", href: "#settings" },
    ];

    if (userRole === "student") {
      return [
        { icon: Book, label: "My Courses", href: "#courses" },
        { icon: Video, label: "Live Sessions", href: "#live" },
        ...commonItems,
      ];
    } else if (userRole === "teacher") {
      return [
        { icon: FileText, label: "My Content", href: "#content" },
        { icon: DollarSign, label: "Earnings", href: "#earnings" },
        { icon: Video, label: "Live Sessions", href: "#live" },
        ...commonItems,
      ];
    } else {
      return [
        { icon: BarChart3, label: "Overview", href: "#overview" },
        { icon: Users, label: "Users", href: "#users" },
        { icon: FileText, label: "Reports", href: "#reports" },
        ...commonItems,
      ];
    }
  };

  const stats = userRole === "student" 
    ? [
        { title: "Enrolled Courses", value: "8", icon: Book, change: "+2 this month" },
        { title: "Completed", value: "5", icon: Book, change: "62.5% progress" },
        { title: "Live Sessions", value: "12", icon: Video, change: "Upcoming" },
        { title: "Certificates", value: "5", icon: FileText, change: "Earned" },
      ]
    : userRole === "teacher"
    ? [
        { title: "Total Revenue", value: "$12,450", icon: DollarSign, change: "+15% from last month" },
        { title: "Active Courses", value: "6", icon: Book, change: "2 drafts" },
        { title: "Students", value: "1,234", icon: Users, change: "+89 this month" },
        { title: "Avg. Rating", value: "4.8", icon: FileText, change: "From 234 reviews" },
      ]
    : [
        { title: "Total Users", value: "45,678", icon: Users, change: "+1,234 this month" },
        { title: "Active Courses", value: "892", icon: Book, change: "+23 new" },
        { title: "Revenue", value: "$125K", icon: DollarSign, change: "+12% growth" },
        { title: "Support Tickets", value: "34", icon: FileText, change: "8 pending" },
      ];

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-0 md:w-16"
        } bg-card border-r transition-all duration-300 flex flex-col fixed md:relative h-screen z-20`}
      >
        <div className="p-4 border-b flex items-center justify-between">
          {sidebarOpen && (
            <span className="font-bold text-lg bg-gradient-primary bg-clip-text text-transparent">
              SkillHub
            </span>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden"
            aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            {getMenuItems().map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors"
                >
                  <item.icon className="h-5 w-5 shrink-0" />
                  {sidebarOpen && <span>{item.label}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-card border-b px-4 md:px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hidden md:flex"
              aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-xl md:text-2xl font-bold">
              {userRole === "student" ? "My Learning" : userRole === "teacher" ? "Creator Studio" : "Admin Dashboard"}
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src={user?.avatarUrl || "https://api.dicebear.com/7.x/avataaars/svg?seed=User"} />
              <AvatarFallback>{user?.name?.charAt(0) || 'U'}</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-card-hover transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">{stat.change}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent transition-colors">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center shrink-0">
                      <Book className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">
                        {userRole === "student" 
                          ? "Completed lesson: Advanced React Patterns"
                          : userRole === "teacher"
                          ? "New student enrolled in your course"
                          : "New user registration"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {index === 0 ? "Just now" : index === 1 ? "2 hours ago" : "Yesterday"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
